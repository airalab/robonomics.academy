---
title: "Not-Aus, Initialisierung, Körperpositionssteuerung"
description: In diesem Unterricht lernen Sie, wie Sie sich als Benutzer autorisieren, die Motorleistungssteuerung erhalten und grundlegende Befehle an Spot senden.
metaOptions: [Lernen, Softwareentwicklung für Boston Dynamics Spot]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
In diesem Unterricht lernen Sie, wie Sie sich als Benutzer autorisieren, die Motorleistungssteuerung erhalten und grundlegende Befehle an Spot senden.
</RoboAcademyText>

## Theorie

Wie alle ernsthaften Roboter verfügt Boston Dynamics Spot über einen Schutzmechanismus — [E-Stop-Service](https://dev.bostondynamics.com/docs/concepts/estop_service) (Not-Aus), der während des Betriebs von Spot immer aktiv sein sollte, um potenzielle physische Schäden zu vermeiden. Das Einschalten des E-Stops friert sofort alle Gelenke ein (ohne die Motoren auszuschalten, wenn der Roboter eingeschaltet war).

Zunächst sollten wir die Kontrolle über den Roboter übernehmen. Es gibt zwei Möglichkeiten, dies zu tun - *erwerben* oder *nehmen*. *Erwerben* bedeutet, auf sanfte Weise um Kontrolle zu bitten. Wenn jemand den Roboter bereits steuert, wird Ihr Antrag abgelehnt. Andererseits bedeutet *nehmen*, die Kontrolle gewaltsam zu übernehmen, unabhängig davon, ob der aktuelle Bediener existiert.

Um also eine Bewegung auszuführen, sollten Sie dem Schema folgen:

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="Roboter-Ausführungszustände" imageClasses="mb"/>

Robot Execution States

In diesem Unterricht lernen Sie, wie Sie die Roboterrotation steuern, indem Sie *Gier*, *Roll* und *Nick* ändern. Im Bild unten ist das Koordinatensystem des Körperrahmens dargestellt:

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Spot-Koordinaten" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
Die Winkel in einem Code werden in Bogenmaß dargestellt.
</RoboAcademyText>

Als Ergebnis des Unterrichts werden Sie einen Buchstaben Ihres Namens in der Luft mit Spots Gesicht zeichnen. Lassen Sie uns mit dem Einrichtung beginnen!

## Gitpod einrichten

Für diesen Unterricht verwenden wir Gitpod, eine cloudbasierte IDE, mit der Sie üben können, ohne spezielle Software auf Ihrem Computer installieren zu müssen.

1. Melden Sie sich bei [Gitpod](https://gitpod.io/) an.
2. Gehen Sie zu unserer [Spot-Bildungsumgebung](https://gitpod.io/#github.com/merklebot/spot-edu-environment) und öffnen Sie sie in unserem Browser. Sie sehen das Fenster mit den typischen IDE-Funktionen. 
3. Klicken Sie auf das Menüsymbol, gehen Sie dann zu Terminal und erstellen Sie ein neues Terminal.

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. Kopieren Sie diesen Befehl:

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

und drücken Sie `Enter`.

1. Öffnen Sie ein neues Terminal (jetzt können Sie dies durch Drücken der `+`-Taste tun) und testen Sie die Verbindung mit dem Befehl

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

Sie sollten etwas Ähnliches sehen wie:

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

1. Vor der geplanten Zeit senden wir Ihnen einen privaten Schlüssel, um eine SSH-Verbindung herzustellen.
2. Kopieren Sie Ihren privaten Schlüssel in die Datei `id_ed25519`. Sie finden die Datei im Seitenleisten-Explorer von *stop-edu-enviroment*.
3. **Fügen Sie eine leere Zeile am Ende der** `id_ed25519` ***Datei hinzu, dies ist erforderlich, damit SSH ordnungsgemäß funktioniert.*** Drücken Sie `Strg+S`, um die Änderungen zu speichern.

Wenn alles in Ordnung ist, können Sie damit beginnen, den Unterricht zu absolvieren, indem Sie `lesson1.py` bearbeiten

Verwenden Sie zum Ausführen des Codes den Befehl:


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
Vergessen Sie nicht sicherzustellen, dass niemand anderes sein Programm gerade ausführt.
</RoboAcademyText>


## Planen Sie die Übungseinheit

Verwenden Sie die Spot-Terminplanungswebsite, um den Zeitpunkt für Ihre Übungseinheit auszuwählen:

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## Übung

Jetzt werden wir ein einfaches Skript für Spot erstellen, um auf dem Bildschirm zu zeichnen, indem wir seine Kopfbewegungen verwenden. 

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
Wenn wir den Kopf von Spot an einen Punkt in der Kamera bewegen müssen, sollten wir einige große Berechnungen mit vielen nichtlinearen Parametern durchführen, was überhaupt keine einfache Aufgabe ist. Aber wir könnten sagen, dass lokal die Gier- und Nickwinkel als kartesische Koordinaten mit einem Koeffizienten auf einem Bild verwendet werden könnten.
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

Jetzt können Sie versuchen, das Skript auszuführen und das Ergebnis zu sehen. Vergessen Sie nicht, Ihren Code mit Strg+S zu speichern:

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### Das Video von Spot finden Sie hier:
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## Herausforderung
Erstellen Sie ein Python-Skript, das die Körperposition des Roboters mit einer Sequenz von Bewegungen steuert:

1. Aufstehen
2. Zeichnen Sie Ihre Initialen mit seinem Gesicht (ein Buchstabe, mindestens 3 Punkte)
3. Hinsetzen

## Ergebnisse

Jetzt wissen Sie, wie:

- mit Spot SDK zu arbeiten
- einen grundlegenden Befehl zu erstellen
- den Roboter-Körper zu drehen
- eine Verbindung zum Spot herzustellen

Und haben sogar einen Buchstaben gezeichnet. Herzlichen Glückwunsch!


<RoboAcademyText fWeight="500">

Wir haben einen [rosbag](http://wiki.ros.org/rosbag) mit den Gelenkdaten von Spot gesammelt, damit Sie sie visualisieren können (zum Beispiel mit [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)). Das Zertifikat wird Ihnen bald per E-Mail zugesandt.

</RoboAcademyText> 


## [Planen Sie Ihre erste Lektion](https://meetings.hubspot.com/strelka)