---
title: Steuerung des Baxter-Roboters
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: Steuerung des Baxter-Roboters
metaOptions: [Lernen]
defaultName: Control Baxter robot
---

Beispiel für die Funktionsweise:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## Anforderungen:

<List>

<li class="flex">

ROS Melodic + Gazebo (Installationsanleitung [hier][db2])  

</li>

<li>Zusätzliche Pakete:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effodert-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS bis 0.6.0 (herunterladen von [hier][db3] und installieren)

</li>

<li> Python-Pakete:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics-Knoten neueste [Version herunterladen][db4] (zuletzt getestete Version v1.1)

</li>

<li>IPFS-Browsererweiterung (nicht notwendig)</li>

</List>

<br/>

## 0. Installieren Sie die CV Bridge-Erweiterung für Python3

<List>

<li> Erstellen Sie ein Catkin-Arbeitsbereich

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Weisen Sie Catkin an, CMake-Variablen festzulegen. Verwenden Sie Ihre aktuelle Version von `python`. Für mich ist es `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Clonen Sie cv_bridge src:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Finden Sie die Version von cv_bridge in Ihrem Repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Überprüfen Sie die richtige Version im Git-Repo aus. In unserem Fall ist es 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Bauen:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Umgebung mit neuem Paket erweitern:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Test:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

## 1. Simulation und Controller-Pakete herunterladen
Pakete herunterladen:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
git checkout old_version
pip3 install -r requirements.txt
cd ../..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

Vergessen Sie nicht, den Quellbefehl hinzuzufügen:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Simulation starten
Lassen Sie uns die Gazebo-Welt starten und unseren Baxter darin platzieren:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

Öffnen Sie ein weiteres Fenster im Terminal:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

Sie können einige Modelle vor unseren Baxter stellen. Es wird interessanter sein.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Konten in DAPP verwalten

Da wir testen, erstellen wir ein lokales Robonomics-Netzwerk mit der Robonomics-Binärdatei. Gehen Sie zum Ordner mit der Robonomics-Datei und führen Sie aus:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Gehen Sie zum [Robonomics Parachain-Portal][db5] und wechseln Sie zum lokalen Knoten

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Gehen Sie zu Konten und erstellen Sie __Baxter__ und __Arbeitgeber__-Konten (__Roboter__ ist nicht notwendig)

__Wichtig!__ Kopieren Sie das **Mnemonic** und die **Adresse** jedes Kontos (um die Adresse zu kopieren, klicken Sie auf das Symbol des Kontos). **Mnemonic** ist der private Schlüssel für das Konto.
Überweisen Sie etwas Geld (Einheiten) auf diese Konten:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Fügen Sie das **Mnemonic** und die **Adresse** von Baxter zu `config.yaml` in `robot_ws/src/Baxter_simulation_controller/config/` hinzu

## 4. Simulation starten

Führen Sie in einem neuen Fenster aus:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Öffnen Sie ein separates Terminal und starten Sie das *Controller-Paket*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Jetzt können Sie eine Transaktion senden, die den Baxter dazu bringt, sich zu bewegen und Daten zu sammeln. Dazu können Sie das gleiche [Robonomics Parachain-Portal][db5] verwenden. Gehen Sie zu **Entwickler->Extrinsische** und wählen Sie das Arbeitgeberkonto von Baxter, das `launch`-Extrinsische, das Konto von Baxter als Zielkonto und `yes` als Parameter aus. Senden Sie das Extrinsische.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Der Roboter sollte sich bewegen. Er akzeptiert weder Befehle von anderen Konten noch Befehle mit dem Parameter `no`.
Sie sollten Folgendes sehen:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

Wenn die Arbeit beendet ist, gehen Sie zum Robonomics-Portal zu `Entwickler > Chain State`. Wählen Sie `datalog.datalogItem(AccountId,u64)` in **Zustandsabfrage** aus. Wenn Sie alle Datalogs anzeigen möchten, schalten Sie `Include Option` aus und zeigen Sie Baxters Datalog-Nachricht mit der Schaltfläche "+" an.

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Jetzt ist der IPFS-Hash der Telemetrie und Fotos in der Blockchain gespeichert. Um die Daten zu sehen, kopieren Sie einfach den Hash und fügen Sie ihn in die Suchleiste mit der URL ein: gateway.ipfs.io/ipfs/<br fügen Sie hier Ihren Hash ein >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

Klicken Sie auf __Auf Gateway anzeigen__ und das war's!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Baxter-Simulation v2.0

Beispiel, wie es funktioniert:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## Anforderungen:

<List>

<li class="flex">


ROS Melodic + Gazebo (Installationsanleitung [hier][db2])  

</li>

<li>Zusätzliche Pakete:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS bis 0.6.0 (herunterladen von [hier][db3] und installieren)

</li>

<li> Python-Pakete:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics-Knoten (Binärdatei) (neueste [Version hier herunterladen][db4])

</li>

<li class="flex">

Erstellen Sie __Baxter__ und __Arbeitgeber__-Konten auf dem **Robonomics-Portal** (Sie finden ein Tutorial zum Thema "Ein Konto auf dem Robonomics-Portal erstellen" [hier][db8]).
</li>

<li>IPFS-Browsererweiterung (nicht notwendig)</li>

</List>

<br/>

## 0. Installieren Sie die CV Bridge-Erweiterung für Python3

<List>

<li> Erstellen Sie ein Catkin-Arbeitsbereich

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Weisen Sie Catkin an, CMake-Variablen festzulegen. Verwenden Sie Ihre aktuelle Version von `python`. Für mich ist es `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Clonen Sie cv_bridge src:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Finden Sie die Version von cv_bridge in Ihrem Repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Überprüfen Sie die richtige Version im Git-Repo aus. In unserem Fall ist es 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Bauen:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Umgebung mit neuem Paket erweitern:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Test:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

<br/>

## 1. Simulation und Controller-Pakete herunterladen
Wir müssen 2 Arbeitsbereiche erstellen - einen für die Hauptpakete von Baxter und einen für das Hauptsteuerungsprogramm.
Erster Arbeitsbereich. Es ist das Hauptsteuerungsprogramm. Es wird unter Python3 ausgeführt.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

Zweiter Arbeitsbereich. Hier befinden sich alle Baxter-Pakete. Die Simulation ist sehr alt, daher kann sie nur unter Python2 ausgeführt werden.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

Diese Pakete wurden für ROS Indigo erstellt. Wir müssen einige Dateien ändern, um sie unter ROS Melodic auszuführen.
Wir werden **Patch**-Dateien verwenden.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

Und lassen Sie uns alle unsere Pakete bauen:  
Erst Baxter-Pakete erstellen

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

Dann zurück zum ersten Arbeitsbereich und auch dort erstellen:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

Vergessen Sie nicht, den Quellbefehl hinzuzufügen:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Simulation starten
### Lassen Sie uns unsere Simulation starten:
Gehen Sie zunächst zu `robot_ws` und kopieren und bearbeiten Sie baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

Finden Sie Ihre lokale IP-Adresse mit dem Befehl:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

Bearbeiten Sie die folgenden Werte in `baxter.sh` :

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- Ihre_ip - geben Sie Ihre lokale IP-Adresse ein. Siehe `ip a`
- ros_version - zum Beispiel "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

Führen Sie das Baxter-Shell-Skript mit sim spezifiziert aus:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

Sie können einige Modelle vor unseren Baxter stellen. Es wird interessanter sein.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Konten in DAPP verwalten

Da wir testen, erstellen wir ein lokales Robonomics-Netzwerk mit der Robonomics-Binärdatei. Gehen Sie zum Ordner mit der Robonomics-Datei und führen Sie aus:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Gehen Sie zum [Robonomics Parachain-Portal][db5] und wechseln Sie zum lokalen Knoten

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Gehen Sie zu Konten und erstellen Sie __Baxter__ und __Arbeitgeber__-Konten.

Sie finden das Handbuch "Ein Konto auf dem Robonomics-Portal erstellen" [hier][db8]

__Wichtig!__ Kopieren Sie das **Mnemonic** und die **Adresse** jedes Kontos (um die Adresse zu kopieren, klicken Sie auf das Symbol des Kontos). **Mnemonic** ist der private Schlüssel für das Konto.

Überweisen Sie etwas Geld (Einheiten) auf diese Konten:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Fügen Sie Baxters **Mnemonic** und **Adresse** zu `config.yaml` in `robonomics_ws/src/Baxter_simulation_controller/config/` hinzu

## 4. Simulation starten

Führen Sie in einem neuen Fenster aus:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Öffnen Sie ein separates Terminal und starten Sie das *Controller-Paket*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Jetzt können Sie eine Transaktion senden, um den Baxter zu starten und Daten zu sammeln. Gehen Sie dazu zum selben Portal [Robonomics Parachain Portal][db5]. Gehen Sie zu **Entwickler->Extrinsisches** und wählen Sie das Arbeitgeberkonto von Baxter, das `launch`-Extrinsische, Baxters Konto als Zielkonto und `yes` als Parameter. Senden Sie das Extrinsische ab


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Der Roboter sollte sich bewegen. Er akzeptiert weder Befehle von anderen Konten noch Befehle mit dem Parameter `no`.
Sie sollten Folgendes sehen:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

Wenn die Arbeit beendet ist, gehen Sie zum Robonomics-Portal zu `Entwickler > Chain-Zustand`. Wählen Sie `datalog.datalogItem(AccountId,u64)` in der **Zustandsabfrage** aus. Wenn Sie alle Datalogs anzeigen möchten, schalten Sie die `include option` aus und fügen Sie die Nachricht des Baxters-Datalogs mit der Schaltfläche "+" hinzu

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Jetzt ist der IPFS-Hash der Telemetrie und Fotos in der Blockchain gespeichert. Um die Daten zu sehen, kopieren Sie einfach den Hash und fügen Sie ihn in die Suchleiste mit der URL ein:  
#### gateway.ipfs.io/ipfs/< setzen Sie hier Ihren Hash ein>

Das war's!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/Installation>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>