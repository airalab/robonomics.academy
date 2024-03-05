---
title: "Arrêt d'urgence, Initialisation, Contrôle de la position du corps"
description: Au cours de cette leçon, vous apprendrez comment vous autoriser en tant qu'utilisateur, obtenir le contrôle de la puissance du moteur et envoyer des commandes de base à Spot.
metaOptions: [Apprendre, Développement de logiciels pour Boston Dynamics Spot]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
Au cours de cette leçon, vous apprendrez comment vous autoriser en tant qu'utilisateur, obtenir le contrôle de la puissance du moteur et envoyer des commandes de base à Spot.
</RoboAcademyText>

## Théorie

Comme tous les robots sérieux, Boston Dynamics Spot dispose d'un mécanisme de protection - le [service E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) (arrêt d'urgence) qui doit toujours être actif pendant le fonctionnement de Spot pour éviter tout dommage physique potentiel. L'activation de l'E-Stop gèle instantanément toutes les articulations (cela se produit sans éteindre les moteurs si le robot était allumé).

Tout d'abord, nous devons prendre le contrôle du robot. Il existe deux façons de le faire - *acquérir* ou *prendre*. *Acquérir* signifie demander le contrôle de manière douce, si quelqu'un contrôle le robot maintenant, votre demande sera refusée. D'autre part, *prendre* signifie prendre le contrôle de force, peu importe si l'opérateur actuel existe.

Ainsi, pour effectuer un mouvement, vous devez suivre le schéma :

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="États d'exécution du robot" imageClasses="mb"/>

Robot Execution States

Dans cette leçon, vous apprendrez comment contrôler la rotation du robot en changeant son *yaw*, *roll* et *pitch*. Sur l'image ci-dessous, le système de coordonnées du cadre du corps est montré :

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Coordonnées de Spot" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
Les angles dans un code sont représentés en radians.
</RoboAcademyText>

À la fin de la leçon, vous dessinerez une première lettre de votre nom dans l'air avec le visage de Spot. Commençons la configuration !

## Configuration de Gitpod

Pour cette leçon, nous utiliserons Gitpod, un IDE basé sur le cloud qui vous permet de pratiquer sans installer de logiciel spécial sur votre ordinateur.

1. Inscrivez-vous sur [Gitpod](https://gitpod.io/).
2. Allez sur notre [environnement éducatif Spot](https://gitpod.io/#github.com/merklebot/spot-edu-environment) et ouvrez-le dans notre navigateur. Vous verrez la fenêtre avec les fonctions typiques de l'IDE. 
3. Cliquez sur l'icône Menu, puis allez dans Terminal et créez un nouveau terminal.

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. Copiez-collez cette commande :

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

et appuyez sur `Entrée`.

1. Ouvrez un nouveau terminal (maintenant vous pouvez le faire en appuyant sur le bouton `+`) et testez la connexion avec la commande

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

Vous devriez voir quelque chose comme ceci :

<LessonCodeWrapper language="bash" codeClass="big-code">
gitpod /workspace/spot-edu-environment (main) $ ping6 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09
PING 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09(202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09) 56 data bytes
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=1 ttl=64 time=846 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=2 ttl=64 time=172 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=3 ttl=64 time=172 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=4 ttl=64 time=197 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=5 ttl=64 time=219 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=6 ttl=64 time=242 ms

</LessonCodeWrapper>

1. Avant l'heure prévue, nous vous enverrons une clé privée pour établir une connexion SSH.
2. Copiez votre clé privée dans le fichier `id_ed25519`. Vous pouvez trouver le fichier dans l'explorateur de la barre latérale de *stop-edu-enviroment*.
3. **Ajoutez une ligne vide à la fin du** fichier `id_ed25519` ***, c'est nécessaire pour que SSH fonctionne correctement.*** Appuyez sur `Ctrl+S` pour enregistrer les modifications.

Si tout est en ordre, vous pouvez commencer à compléter la leçon en éditant `lesson1.py`

Pour exécuter le code, utilisez la commande :


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
N'oubliez pas de vous assurer que personne d'autre n'exécute son programme pour le moment.
</RoboAcademyText>


## Planifiez la session de pratique

Utilisez le site de planification de Spot pour choisir le créneau horaire de votre session de pratique :

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## Pratique

Maintenant, nous allons créer un script simple pour Spot pour dessiner à l'écran en utilisant les mouvements de sa tête. 

<LessonCodeWrapper language="python" codeClass="big-code">
# Import Spot Control modules
import bosdyn.client
from bosdyn.client.robot_command import RobotCommandClient, blocking_stand
from bosdyn.client.robot_command import RobotCommandBuilder
from bosdyn.geometry import EulerZXY
import time
# ENTER YOUR AUTH DATA HERE
ROBOT_IP="192.168.50.3"
SPOT_USERNAME="student"
SPOT_PASSWORD=""
# Helpers to control camera drawing (you don't need to modify it)
import requests
VIDEOSERVER_URL="http://luke.merklebot:8000/"
VIDEOSERVER_TOKEN="1234"
def notify_start_line():
  requests.post(VIDEOSERVER_URL + "start_line", json={"token": VIDEOSERVER_TOKEN})
def notify_stop_line():
  requests.post(VIDEOSERVER_URL + "stop_line", json={"token": VIDEOSERVER_TOKEN})
def notify_clear_canvas():
    requests.post(VIDEOSERVER_URL + "clear_canvas", json={"token": VIDEOSERVER_TOKEN})
# Start with registering out SDK
sdk = bosdyn.client.create_standard_sdk('LessonOneClient')
# Create instance of robot and auth with credentials
robot = sdk.create_robot(ROBOT_IP)
robot.authenticate(SPOT_USERNAME, SPOT_PASSWORD)
# Create lease client and take exclusive control over Spot.  
lease_client = robot.ensure_client('lease')
lease = lease_client.take()
lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)
# Try to power on the robot
robot.power_on(timeout_sec=20)
if robot.is_powered_on():
    print("Powered On")
		# If everything went smooth, Spot face lights should turn green
else:
		# In case of some problems, e.g. somebody stole control over robot
    print("Failed")
    exit(0)
# Synchronize Spor inner time with ours - to avoid outdated commands
robot.time_sync.wait_for_sync()
# To execute robot movement, create command client through which orders are sent
command_client = robot.ensure_client(RobotCommandClient.default_service_name)
# Start movement with simple stand up
blocking_stand(command_client, timeout_sec=10)
# Rotate robot body:
#  1. Build command for body rotation. It’s not an easy task to control robot motion with commands on low level. 
#     Bosdyn Client allow as to use a shortcut - RobotCommandBuilder. It contains a number of predefined commands, 
#     you need just to choose one of your liking and insert parameters
footprint_R_body = EulerZXY(yaw=0.1, roll=0.1, pitch=0.1)
cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
#  2. Execute builded command
command_client.robot_command(cmd)
time.sleep(2)
# Return robot state back
command_client.robot_command(RobotCommandBuilder.synchro_stand_command(footprint_R_body=EulerZXY(yaw=0, roll=0, pitch=0)))
time.sleep(2)
# Change robot height
cmd = RobotCommandBuilder.synchro_stand_command(body_height=0.1)
command_client.robot_command(cmd)
# Now we are ready to draw letter. 
def draw_letter(command_client):
		# Choose points to draw (see the coords explanation bellow)
    points_xy_draw = (
        (125, 125),
        (375, 875),
        (500, 500),
        (250, 500),
        (500, 500),
        (625, 125),
    )
    for x, y in points_xy_draw:
        convert = lambda x: (x / 1000 - 0.5) * -1
        x, y = map(convert, (x, y))
        footprint_R_body = EulerZXY(
            yaw=x, 
            roll=0.0, 
            pitch=y,
        )
        cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
        command_client.robot_command(cmd)
        time.sleep(1)
notify_clear_canvas()
notify_start_line()
draw_letter(command_client)
notify_stop_line()
# Turn off the robot gracefully
robot.power_off(cut_immediately=False)

</LessonCodeWrapper>

<RoboAcademyText fWeight="300" fSize="90%">
Si nous devons déplacer la tête de Spot vers un point de la caméra, nous devons effectuer de grands calculs avec de nombreux paramètres non linéaires, ce qui n'est pas une tâche simple du tout. Mais nous pourrions dire que localement, les angles de lacet et de tangage pourraient être utilisés approximativement comme des coordonnées cartésiennes avec un coefficient sur une image.
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

Maintenant, vous pouvez essayer d'exécuter le script et voir le résultat. N'oubliez pas d'enregistrer votre code avec Ctrl+S :

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### La vidéo de Spot peut être trouvée ici :
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## Défi
Créez un script Python qui contrôle la position du corps du robot avec une séquence de mouvements :

1. Se lever
2. Tracez vos initiales avec son visage (une lettre, au moins 3 points)
3. S'asseoir

## Résultats

Maintenant, vous savez comment :

- travailler avec Spot SDK
- construire une commande de base
- faire pivoter le corps du robot
- se connecter à Spot

Et même dessiner une lettre. Félicitations !


<RoboAcademyText fWeight="500">

Nous avons collecté un [rosbag](http://wiki.ros.org/rosbag) avec les données des articulations de Spot, afin que vous puissiez les visualiser (par exemple avec [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)). Le certificat vous sera envoyé par e-mail bientôt.

</RoboAcademyText> 


## [Planifiez votre première leçon](https://meetings.hubspot.com/strelka)