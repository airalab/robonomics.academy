---
title: Verbinde Mars Curiosity Rover
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: Verbinde Mars Curiosity Rover unter der Kontrolle des Robonomics-Parachains.
metaOptions: [Lernen]
defaultName: Verbinden Mars Curiosity Rover
---

**Schauen wir, wie die Robonomics-Parachain-Kontrolle es ermöglicht, den Mars Curiosity Rover zu bewegen. Anforderungen:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (Installationsanleitung [hier](http://wiki.ros.org/melodic/Installation))

</li>


<li>Zusätzliche Pakete:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS bis zu [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[IPFS Companion-Erweiterung](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Robonomics-Node (Binärdatei) (laden Sie die neueste Version [hier](https://github.com/airalab/robonomics/releases) herunter. Dieses Tutorial wurde erfolgreich auf v1.1 getestet)

</li>

</List>

<br/>

Hier ist das Video, das den erfolgreichen Start zeigt:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. Simulation einrichten

Curiosity Rover-Paket herunterladen:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

Wir müssen die Startbedingungen anpassen, damit unser Rover reibungslos erscheint:

<List>

<li>Gehe zu

`src/master/curiosity_mars_rover_description/worlds` und ändern Sie Zeile 14 der Datei` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>Gehe zu

`src/master/curiosity_mars_rover_description/launch` und ändere Zeile 4 der Datei `mars_curiosity_world.launch` zu 
`<arg name="paused" default="false"/>`

Vergessen Sie nicht, den Quellbefehl hinzuzufügen `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> Konsole neu starten und die Simulation starten:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

Hinweis: Wenn das Bild dunkel ist, z.B. schattiert, ändern Sie `Kamera` in `Orthografisch` in der Gazebo-Symbolleiste.
Die Simulation kann für eine Weile geschlossen werden.

------------

<br/>

### 2. Robonomics-Controller-Paket herunterladen
Um ein Controller-Paket für Rover herunterzuladen, geben Sie im Terminal ein:

<LessonCodeWrapper language="bash" codeClass="long-code">
cd ~/robonomics_ws/src
git clone https://github.com/PaTara43/robonomics_sample_controller
cd robonomics_sample_controller
pip3 install -r requirements.txt
pip3 install rospkg
cd ..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3 # The controller supports python3
</LessonCodeWrapper>


------------

<br/>

### 3. Konten in DAPP verwalten
Da wir testen, erstellen wir ein lokales Robonomics-Netzwerk mit der Robonomics-Binärdatei:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="Ausführenning node"/>


Gehe zum [Robonomics Parachain-Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) und wechsle zum lokalen Knoten 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


Gehe zu Konten und erstelle **CURIOSITY** und **ARBEITGEBER**-Konten.

**Wichtig**! Kopieren Sie die Adresse jedes Kontos (um die Adresse zu kopieren, klicken Sie auf das Symbol des Kontos) und den **mnemonischen Seed** des Curiosity-Kontos (der beim Erstellen des Kontos erhalten wurde)
Überweisen Sie etwas Geld (Einheiten) auf diese Konten. Weitere Informationen zu Konten in Robonomics finden Sie [hier](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


Fügen Sie diese Adressen, Seed und Knotenadresse (Standard: `ws://127.0.0.1:9944` für Entwicklerknoten) in `config.config` in `robonomics_ws/src/robonomics_sample_controller/src` hinzu. Keine Anführungszeichen.

------------

<br/>

### 4. Starte Robonomics

Stellen Sie sicher, dass Sie [IPFS Companion Extension](https://github.com/ipfs/ipfs-companion) installiert haben, bevor Sie weitermachen.

Starten Sie in einem separaten Terminal IPFS:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #Sie müssen dies nur einmal pro IPFS-Installation tun
ipfs daemon
</LessonCodeWrapper>

Starten Sie in einem anderen separaten Terminal die Curiosity-Simulation, wenn sie nicht live ist:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

Warten Sie, bis sie stillsteht

Starten Sie in einem anderen Terminal den Controller:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

Jetzt können Sie eine Transaktion senden, um den Rover zum Bewegen und Datensammeln zu bringen. Verwenden Sie dazu das gleiche [Robonomics Parachain-Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/).
Gehen Sie zu `Entwickler->Extrinsische` und wählen Sie das Arbeitgeberkonto von Curiosity, das `launch`-Extrinsische, das Konto von Curiosity als Zielkonto und `ja` als Parameter aus.
Reichen Sie das Extrinsische ein.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

Der Roboter sollte anfangen sich zu bewegen. Er wird weder Befehle von anderen Konten akzeptieren noch Befehle mit dem Parameter `nein`. Der Rover wird sich etwa eine Minute lang bewegen und Daten sammeln.
Später, wenn die Arbeit erledigt ist:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


Gehen Sie auf dem Robonomics-Portal zu `Entwickler -> Chain State` und erhalten Sie ein `CURIOSITY`-Datalog mit der Schaltfläche “+” und wählen Sie `Datalog -> RingBufferItem` als Abfrage aus: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


Jetzt ist der IPFS-Hash der Telemetrie in der Blockchain gespeichert. Um die Daten zu sehen, kopieren Sie einfach den Hash und suchen Sie ihn auf einem Gateway:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


Diese Telemetrie wird in einem dezentralen Speicher aufbewahrt, und ihr Hash wird in einer Blockchain gespeichert!
