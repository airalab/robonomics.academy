---
title: "Noodstop, Initialisatie, Lichaamspositiecontrole"
description: Tijdens deze les leer je hoe je jezelf kunt autoriseren als gebruiker, motorvermogensregeling kunt krijgen en basiscommando's naar Spot kunt sturen.
metaOptions: [Leren, Software Ontwikkelen voor Boston Dynamics Spot]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
Tijdens deze les leer je hoe je jezelf kunt autoriseren als gebruiker, motorvermogensregeling kunt krijgen en basiscommando's naar Spot kunt sturen.
</RoboAcademyText>

## Theorie

Net als alle serieuze robots heeft Boston Dynamics Spot een beschermingsmechanisme - [E-Stop-service](https://dev.bostondynamics.com/docs/concepts/estop_service) (noodstop) dat altijd actief moet zijn tijdens de werking van Spot om mogelijke fysieke schade te voorkomen. Het inschakelen van de E-Stop bevriest onmiddellijk alle gewrichten (dit gebeurt zonder de motoren uit te schakelen als de robot was ingeschakeld).

Allereerst moeten we de controle over de robot leasen. Er zijn twee manieren om dit te doen - *acquire* of *take*. *Acquire* betekent op een vriendelijke manier om controle vragen, als iemand nu de robot bestuurt, wordt uw verzoek afgewezen. Op een andere manier betekent *take* het krachtig overnemen van de controle, het maakt niet uit of de huidige operator bestaat.

Dus, om wat beweging te maken, moet je het schema volgen:

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="Robot Uitvoeringsstaten" imageClasses="mb"/>

Robot Execution States

In deze les leer je hoe je de robotrotatie kunt regelen door zijn *yaw*, *roll* en *pitch* te veranderen. In de afbeelding hieronder wordt het coördinatensysteem van het lichaamskader getoond:

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Spot coördinaten" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
De hoeken in een code worden weergegeven in radialen.
</RoboAcademyText>

Als resultaat van de les zul je een eerste letter van je naam in de lucht tekenen met het gezicht van Spot. Laten we beginnen met de installatie!

## Gitpod instellen

Voor deze les zullen we Gitpod gebruiken, een cloudgebaseerde IDE waarmee je kunt oefenen zonder speciale software op je computer te installeren.

1. Meld je aan voor [Gitpod](https://gitpod.io/).
2. Ga naar onze [Spot-onderwijsomgeving](https://gitpod.io/#github.com/merklebot/spot-edu-environment) en open het in onze browser. U ziet het venster met typische IDE-functies. 
3. Klik op het menupictogram, ga vervolgens naar Terminal en maak een nieuwe terminal aan.

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. Kopieer en plak deze opdracht:

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

en druk op `Enter`.

1. Open een nieuwe terminal (nu kun je dit doen door op de `+` knop te drukken) en test de verbinding met het commando

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

Je zou iets als dit moeten zien:

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

1. Voor de geplande tijd sturen we u een privésleutel om een SSH-verbinding tot stand te brengen.
2. Kopieer uw privésleutel naar het bestand `id_ed25519`. U kunt het bestand vinden in de zijbalkverkenner van *stop-edu-enviroment*.
3. **Voeg een lege regel toe aan het einde van het** `id_ed25519` ***bestand, dit is nodig voor SSH om correct te werken.*** Druk op `Ctrl+S` om wijzigingen op te slaan.

Als alles in orde is, kunt u beginnen met het voltooien van de les door `lesson1.py` te bewerken

Om de code uit te voeren, gebruik het commando:


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
Vergeet niet om ervoor te zorgen dat niemand anders op dat moment zijn programma uitvoert.
</RoboAcademyText>


## Plan de oefensessie

Gebruik de Spot-planningswebsite om het tijdsblok voor uw oefensessie te kiezen:

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## Oefenen

Nu zullen we een eenvoudig script maken voor Spot om op het scherm te tekenen met behulp van zijn hoofdbewegingen. 

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
Als we de kop van Spot naar een punt in de camera moeten verplaatsen, moeten we enkele grote berekeningen uitvoeren met veel niet-lineaire parameters, wat helemaal geen eenvoudige taak is. Maar we zouden kunnen zeggen dat lokaal, yaw- en pitchhoeken ongeveer als cartesiaanse coördinaten met een bepaalde coëfficiënt op een afbeelding kunnen worden gebruikt.
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

Nu kun je proberen het script uit te voeren en het resultaat te zien. Vergeet niet om je code op te slaan met Ctrl+S:

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### De video van Spot is hier te vinden:
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## Uitdaging
Maak een Python-script dat de lichaamspositie van de robot bestuurt met een reeks bewegingen:

1. Opstaan
2. Traceer je initialen met zijn gezicht (één letter, minstens 3 punten)
3. Ga zitten

## Resultaataataten

Nu weet je hoe je:

- werken met Spot SDK
- een basiscommando construeren
- robotlichaam draaien
- verbinden met de Spot

En zelfs een letter hebt getekend. Gefeliciteerd!


<RoboAcademyText fWeight="500">

We hebben een [rosbag](http://wiki.ros.org/rosbag) verzameld met de gewrichtsgegevens van Spot, zodat je ze kunt visualiseren (bijvoorbeeld met [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)). Het certificaat wordt binnenkort naar uw e-mailadres gestuurd.

</RoboAcademyText> 


## [Plan uw eerste les](https://meetings.hubspot.com/strelka)