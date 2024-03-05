---
title: Verbinden Sie den Kuka-Manipulator
description: Verbinden Sie den Manipulator
metaOptions: [Lernen]
defaultName: Verbinden Kuka manipulator
---

Ein Video mit einem Arbeitsbeispiel finden Sie hier:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## Anforderungen

<List>

<li class="flex">

ROS Melodic, Gazebo (Installationsanleitung [hier](http://wiki.ros.org/melodic/Installation/Ubuntu))
</li>

<li>Einige zusätzliche Pakete

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(herunterladen von [hier](https://www.npackd.org/p/ipfs/0.4.22) und installieren)

<LessonCodeWrapper language="bash" codeClass="big-code">
tar -xvzf go-ipfs_v0.4.22_linux-386.tar.gz
cd go-ipfs/
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>pip3

<LessonCodeWrapper language="bash">
sudo apt-get install python3-pip
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li>substrate-interface

<LessonCodeWrapper language="bash">
pip3 install substrate-interface
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics-Knoten (Binärdatei) (die neueste Version herunterladen [hier](https://github.com/airalab/robonomics/releases))

</li>

<li>IPFS-Browsererweiterung (nicht notwendig)</li>

</List>

<br/>

***

<br/>

## Installation
Installieren Sie den Kuka-Manipulator und die Steuerungspakete

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## Gazebo-Modell ausführen

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

In einem neuen Fenster

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## Robonomics ausführen
Gehen Sie zum Ordner mit der Robonomics-Datei und erstellen Sie ein lokales Robonomics-Netzwerk:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

Gehen Sie zum [Robonomics Parachain-Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) und wechseln Sie zum lokalen Knoten

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

Gehen Sie dann zu Konten und erstellen Sie ein `KUKA`-Konto. Speichern Sie den mnemonischen Schlüssel des Kontos, den Sie später benötigen werden. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

Senden Sie einige Einheiten an das neue Konto von einem der Standardkonten aus.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## IPFS ausführen
Ausführen ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## Steuerungspaket ausführen
Im Konfigurationsverzeichnis im kuka_control-Paket müssen Sie eine Konfigurationsdatei mit diesen Zeilen erstellen, wobei `<your_mnemonic>` den gespeicherten mnemonischen Seed darstellt:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


Jetzt können Sie das Steuerskript ausführen:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## Transaktion senden
Im [Robonomics Parachain-Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) gehen Sie zu `Entwickler/Extrinsische`, ändern Sie `extrinsisch` in `start`. Wählen Sie Ihr `KUKA`-Konto im `Roboter` aus und ändern Sie `param` in `Ja`. Drücken Sie dann `Transaktion senden`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

Im Fenster mit dem kuka_control-Paket sehen Sie:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

Gehen Sie dann auf `Entwickler/Kettenzustand` im Robonomics-Portal, wählen Sie `Datenprotokoll` und `DatenprotokollItem((Kontonummer,u64)): RingBufferItem` in der Abfrage aus und fügen Sie das `KUKA`-Datenprotokoll mit der Schaltfläche '+' hinzu:

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

Jetzt können Sie die Telemetrie des Roboters in IPFS über diesen Link mit Ihrem Hash finden `https://gateway.ipfs.io/ipfs/<hash>`.

## Fehlerbehebung

Wenn `catkin_make` mit der Meldung, dass MoveArm.h nicht gefunden werden kann, nicht funktioniert, versuchen Sie, die letzten vier Zeilen in der CMakeLists.txt im kuka_manipulator_gazebo-Paket zu entfernen:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

Führen Sie `catkin_make` ohne diese Zeilen aus, fügen Sie sie dann wieder ein und führen Sie `catkin_make` erneut aus.