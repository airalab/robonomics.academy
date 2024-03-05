---
title: "Stop di emergenza, Inizializzazione, Controllo della posizione del corpo"
description: Durante questa lezione imparerai come autorizzarti come utente, ottenere il controllo della potenza del motore e inviare comandi di base a Spot.
metaOptions: [Impara, Sviluppo software per Boston Dynamics Spot]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
Durante questa lezione imparerai come autorizzarti come utente, ottenere il controllo della potenza del motore e inviare comandi di base a Spot.
</RoboAcademyText>

## Teoria

Come tutti i robot seri, Boston Dynamics Spot ha un meccanismo di protezione - [servizio E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) (Stop di emergenza) che dovrebbe essere sempre attivo durante il funzionamento di Spot per evitare potenziali danni fisici. Attivare l'E-Stop congela istantaneamente tutte le articolazioni (questo avviene senza spegnere i motori se il robot era acceso).

Prima di tutto, dovremmo prendere il controllo del robot. Ci sono due modi per farlo - *acquisire* o *prendere*. *Acquisire* significa chiedere il controllo in modo gentile, se qualcuno controlla il robot ora, la tua richiesta verrà rifiutata. In un altro modo, *prendere* significa prendere il controllo con forza, non importa se l'operatore attuale esiste.

Quindi, per fare qualche movimento, dovresti seguire lo schema:

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="Stati di esecuzione del robot" imageClasses="mb"/>

Robot Execution States

In questa lezione imparerai come controllare la rotazione del robot cambiando il suo *yaw*, *roll* e *pitch*. Nell'immagine qui sotto è mostrato il sistema di coordinate del telaio del corpo:

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Coordinate di Spot" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
Gli angoli in un codice sono rappresentati in radianti.
</RoboAcademyText>

Come risultato della lezione, disegnerai una lettera del tuo nome nell'aria con il volto di Spot. Iniziamo la configurazione!

## Configura Gitpod

Per questa lezione, utilizzeremo Gitpod, un IDE basato su cloud che ti consente di esercitarti senza installare alcun software speciale sul tuo computer.

1. Iscriviti a [Gitpod](https://gitpod.io/).
2. Vai al nostro [ambiente educativo di Spot](https://gitpod.io/#github.com/merklebot/spot-edu-environment) e aprilo nel nostro browser. Vedrai la finestra con le funzioni tipiche dell'IDE. 
3. Fai clic sull'icona del menu, quindi vai su Terminale e crea un nuovo terminale.

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. Copia-incolla questo comando:

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

e premi `Invio`.

1. Apri un nuovo terminale (ora puoi farlo premendo il pulsante `+`) e testa la connessione con il comando

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

Dovresti vedere qualcosa del genere:

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

1. Prima dell'orario programmato ti invieremo la chiave privata per stabilire la connessione SSH.
2. Copia la tua chiave privata nel file `id_ed25519`. Puoi trovare il file nell'esploratore della barra laterale di *stop-edu-enviroment*.
3. **Aggiungi una riga vuota alla fine del** file `id_ed25519` ***, questo è necessario affinché SSH funzioni correttamente.*** Premi `Ctrl+S` per salvare le modifiche.

Se tutto è a posto, puoi iniziare a completare la lezione modificando `lesson1.py`

Per eseguire il codice, usa il comando:


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
Ricorda di assicurarti che nessun altro stia eseguendo il proprio programma al momento.
</RoboAcademyText>


## Programma la sessione di pratica

Utilizza il sito di pianificazione di Spot per scegliere l'orario per la tua sessione di pratica:

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## Pratica

Ora creeremo uno script semplice per Spot per disegnare sullo schermo usando i movimenti della testa. 

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
Se dobbiamo spostare la testa di Spot in un punto della telecamera, dovremmo fare alcuni calcoli complessi con molti parametri non lineari, che non è affatto un compito semplice. Ma potremmo dire che localmente, gli angoli di yaw e pitch potrebbero essere approssimativamente usati come coordinate cartesiane con un certo coefficiente su un'immagine.
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

Ora puoi provare a eseguire lo script e vedere il risultato. Non dimenticare di salvare il tuo codice con Ctrl+S:

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### Il video di Spot può essere trovato qui:
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## Sfida
Crea uno script Python che controlla la posizione del corpo del robot con una sequenza di movimenti:

1. Alzati
2. Traccia le tue iniziali con il suo volto (una lettera, almeno 3 punti)
3. Siediti

## Risultati

Ora sai come:

- lavorare con Spot SDK
- costruire un comando di base
- ruotare il corpo del robot
- connettersi a Spot

E hai persino disegnato una lettera. Congratulazioni!


<RoboAcademyText fWeight="500">

Abbiamo raccolto un [rosbag](http://wiki.ros.org/rosbag) con i dati delle articolazioni di Spot, in modo da poterli visualizzare (ad esempio con [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)). Il certificato verrà inviato alla tua email a breve.

</RoboAcademyText> 


## [Pianifica la tua prima lezione](https://meetings.hubspot.com/strelka)