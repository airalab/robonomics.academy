---
title: Verbinden Sie einen ROS-kompatiblen Drohne
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: Verbinden Sie einen beliebigen ROS-kompatiblen Roboter unter der Kontrolle der Robonomics-Parachain.
metaOptions: [Lernen]
defaultName: Verbinden Sie einen ROS-kompatiblen Drohne
---


## Teil 1. Starten per Transaktion

**In diesem Artikel zeigen wir, dass Sie mit Hilfe von Robonomics-Tools jedes ROS-kompatible Gerät steuern können. Wir werden ein zufälliges Drohnensimulationspaket im Web finden und anpassen, um mit Robonomics zu laufen.**
**Anforderungen:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (Installationsanleitung [hier](http://wiki.ros.org/melodic/Installation))

</li>

<li class="flex">

Robonomics-Knoten (Binärdatei) (Laden Sie die neueste Version [hier](https://github.com/airalab/robonomics/releases) herunter)

</li>

</List>

<br/>

Der gesamte Prozess der Codierung dieses Teils der Demo wird in einem Video unten präsentiert.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. Finden Sie eine Simulation
Lassen Sie uns im Internet surfen. Suchen Sie nach `ROS-Drohnensimulator`. Der erste Link zeigt Ihnen wahrscheinlich die Seite `tum_simulator` auf [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

Es ist ziemlich veraltet, also sollten wir eine Fork für unser System finden. Suchen Sie nach `tum_simulator Ubuntu 18 Gazebo 9 Fork`. Das erste Ergebnis ist ein GitHub [Repo](https://github.com/tahsinkose/sjtu-drone) mit einem passenden Paket. Laden Sie es herunter

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

Vergessen Sie nicht, den Quellbefehl zu `~/.bashrc` hinzuzufügen:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

Jetzt können wir die Simulation ausführen, um zu sehen, was wir tun müssen, um die Drohne unter die Parachain-Kontrolle zu bringen.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. Inspektion der ROS-Themen
Wenn die Simulation läuft, führen Sie in einem neuen Tab den folgenden Befehl aus, um die Liste der Themen zu sehen, die von der Drohne verwendet werden:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

Werfen wir einen Blick auf `/cmd_vel`, `/drone/takeoff` und `/drone/land`:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

Wie zu sehen ist, sollten Nachrichten der Typen `Twist` und `Empty` vorhanden sein, sie sind Teile von `std_msgs` und `geometry_msgs`, die wir im Controller verwenden werden. Schließen Sie die Simulation für eine Weile.

## 3. Controller-Paket herunterladen
Im Allgemeinen besteht der Hauptunterschied zum normalen ROS-Robotercontroller darin, dass ein Block von Code vorhanden ist, der alle Transaktionen im Netzwerk mit Hilfe von [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/) überprüft. Das Paket selbst ist auf GitHub verfügbar. Laden Sie es herunter und erstellen Sie den Arbeitsbereich:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. Konten in DAPP verwalten
Da wir testen, erstellen wir einen lokalen Robonomics-Netzwerkknoten mit der Robonomics-Binärdatei:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Wichtig!** Vor den nächsten Starts ist es erforderlich, das Verzeichnis `db` zu entfernen

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Nach einem erfolgreichen Start erstellen Sie Konten gemäß [dieser](https://wiki.robonomics.network/docs/create-account-in-dapp/) Anleitung. **Vergessen Sie nicht, jeden Kontosamen und -adresse zu speichern! Sie benötigen sie für Transaktionen**. Fügen Sie diese Adressen, Samen und den Pfad zur Robonomics-Binärdatei der Datei `config.config` in `robonomics_ws/src/robonomics_sample_controller/src` hinzu. Überweisen Sie etwas Geld (Einheiten) auf diese Konten:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. Starten der Drohne unter Parachain-Kontrolle

Bisher sollte der **einzige laufende** robonomics lokale Knoten sein. Starten Sie in einem separaten Terminal die Drohnensimulation:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Führen Sie das Skript aus:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

Jetzt können Sie eine Transaktion senden, um die Drohne zum Starten zu bringen. Verwenden Sie dazu den Robonomics IO `write`-Unterbefehl der Robonomics-Binärdatei:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Wo `<DRONE_ADDRESS>` und `<EMPLOYER’S_KEY>` entsprechend durch zuvor gespeicherte Zeichenfolgen ersetzt werden.
Sie sollten das Protokoll `"Taking Off"` sehen und die Drohne sollte zu fliegen beginnen:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

So kann jeder ROS-kompatible Roboter von der Robonomics-Parachain-Kontrolle gesteuert werden.


##  Teil 2. Daten auf die Blockchain speichern

**In diesem Teil werden wir weiterhin Robonomics-Tools verwenden, um eine Drohne von einer Parachain steuern zu lassen. Diesmal fügen wir Optionen zum Senden von Daten an IPFS und zum Speichern von Hashes in der Kette hinzu. Unten finden Sie die Anleitung und Code-Schnipsel. Anforderungen:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (Installationsanleitung [hier](http://wiki.ros.org/melodic/Installation))
</li>

<li class="flex">

IPFS 0.4.22 (herunterladen von [hier](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) und installieren)
</li>

<li class="flex">

Robonomics-Knoten (Binärdatei) (Laden Sie die neueste Version [hier](https://github.com/airalab/robonomics/releases) herunter)
</li>

<li>Python-Abhängigkeiten:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

Der gesamte Prozess der Codierung dieses Teils der Demo wird in einem Video unten präsentiert.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. Abhängigkeiten hinzufügen
Wenn wir eine Simulation starten und die Themenliste überprüfen (siehe Teil 1), werden wir feststellen, dass es ein Thema gibt, das Bilddaten der Frontkamera enthält und den Nachrichtentyp `sensor_msgs/Image` verwendet:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

Lassen Sie uns versuchen, alle 1 Sekunde ein Bild zu machen und nach dem Flug diese Fotos auf IPFS zu veröffentlichen. Wenn Sie das erste Tutorial abgeschlossen haben, müssen Sie nichts weiter herunterladen. Es handelt sich um das Skript `drone_sample_controller_pictures.py`.

## 2. Konten in DAPP verwalten
Wie in einem früheren Tutorial durchgeführt, erstellen Sie einen lokalen Robonomics-Netzwerkknoten mit der Robonomics-Binärdatei:
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Wichtig!** Vor den nächsten Starts ist es erforderlich, das Verzeichnis `db` zu entfernen

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Nach einem erfolgreichen Start erstellen Sie Konten gemäß [dieser](https://wiki.robonomics.network/docs/create-account-in-dapp/) Anleitung. **Vergessen Sie nicht, jeden Kontosamen und -adresse zu speichern! Sie benötigen sie für Transaktionen**. Fügen Sie diese Adressen, Samen und den Pfad zur Robonomics-Binärdatei der Datei `config.config` in `robonomics_ws/src/robonomics_sample_controller/src` hinzu. Überweisen Sie etwas Geld (Einheiten) auf diese Konten:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. Starten
Bisher sollte der **einzige laufende** robonomics lokale Knoten sein. Starten Sie in einem separaten Terminal die Drohnensimulation:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Starten Sie einen weiteren IPFS-Dämon:
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Führen Sie das Skript aus:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

Jetzt können Sie eine Transaktion senden, um die Drohne zum Fliegen und Fotografieren zu starten. Verwenden Sie dazu den Robonomics IO `write`-Unterbefehl der Robonomics-Binärdatei:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Wo `<DRONE_ADDRESS>` und `<EMPLOYER’S_KEY>` entsprechend durch zuvor gespeicherte Zeichenfolgen ersetzt werden.
Sie sollten das Protokoll `"Taking Off"` sehen und die Drohne sollte mit dem Fliegen und Fotografieren beginnen:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

Später, wenn der Job erledigt ist, gehen Sie im Robonomics-Portal zu `Entwickler` -> `Chain State` und fügen Sie mit der ausgewählten `Datalog` als Zustellabfrage über die `“+”`-Schaltfläche ein `DRONE`-Datalog hinzu. Der IPFS-Hash der Telemetrie wurde in die Blockchain gespeichert. Um die Daten zu sehen, kopieren Sie einfach den Hash und fügen Sie ihn der lokalen [Gateway](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) Adresse `localhost:8080/ipfs/` hinzu:


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>