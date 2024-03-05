---
title: Verbindung unbemanntes Luftfahrzeug
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: Verbinden Sie unbemanntes Luftfahrzeug
metaOptions: [Lernen]
defaultName: Connect unmanned aerial vehicle
---

**Drohne beginnt sich nach Transaktion zu bewegen und speichert die Datei mit den Koordinaten in IPFS. Das Steuerskript basiert auf dem [GAAS-Demodskript](https://github.com/generalized-intelligence/GAAS)**  

https://youtu.be/4CwtGAX1OwM

<br/>

## Anforderungen

<List>

<li> Abhängigkeiten für die Steuerung:

<LessonCodeWrapper language="bash">
sudo apt install -y \
	python3-pip \
	ninja-build \
	exiftool \
	python-argparse \
	python-empy \
	python-toml \
	python-numpy \
	python-yaml \
	python-dev \
	python-pip \
	ninja-build \
	protobuf-compiler \
	libeigen3-dev \
	genromfs
</LessonCodeWrapper>

<LessonCodeWrapper language="bash">
pip3 install \
	pandas \
	jinja2 \
	pyserial \
	cerberus \
	pyulog \
	numpy \
	toml \
	pyquaternion
</LessonCodeWrapper>

</li>

<li class="flex">

ROS Melodic + Gazebo [Installationsanleitung](http://wiki.ros.org/melodic/Installation)
</li>

<li>Zusätzliche Pakete:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>IPFS Version 0.4.22

<LessonCodeWrapper language="bash" codeClass="big-code">
wget https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-amd64.tar.gz
tar -xvzf go-ipfs_v0.4.22_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash" codeClass="big-code">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics-Knoten (Binärdatei) (laden Sie die neueste Version [hier](https://github.com/airalab/robonomics/releases) herunter)
</li>

</List>

<br/>

## Umgebungseinrichtung

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-mavros ros-melodic-mavros-extras
wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh
sudo ./install_geographiclib_datasets.sh
cd ~/catkin_ws/src
git clone https://github.com/PX4/Firmware.git
cd Firmware
git checkout v1.9.0
bash ./Tools/setup/ubuntu.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/catkin_ws/src
git clone https://github.com/generalized-intelligence/GAAS.git
cp -r ~/catkin_ws/src/GAAS/simulator/models/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/models/
cp -r ~/catkin_ws/src/GAAS/simulator/worlds/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/worlds/
cp -r ~/catkin_ws/src/GAAS/simulator/posix-config/* ~/catkin_ws/src/Firmware/posix-configs/SITL/init/ekf2/
</LessonCodeWrapper>

Ändern Sie Ihre `.bashrc`-Datei und fügen Sie die folgenden Zeilen am Ende hinzu:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## Steuerpaketinstallation
In einem neuen Terminal:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Robonomics-Netzwerk

Um ein lokales Robonomics-Netzwerk zu erstellen, gehen Sie zum Ordner mit der Robonomics-Binärdatei und führen Sie aus:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

Fügen Sie den Pfad von Robonomics zu `config.py` hinzu

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

Gehen Sie zum [Robonomics-Parachain-Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) und wechseln Sie zum lokalen Knoten.

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

Gehen Sie zu **Konten** und erstellen Sie **DRONE**- und **ARBEITGEBER**-Konten. Speichern Sie die Kontonamen und Schlüssel und den Pfad zu **robonomics** in `~/catkin_ws/src/drone_sim/src/config.py`. Überweisen Sie etwas Geld auf die Konten.

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## Simulation ausführen
IPFS-Dämon starten

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

Starten Sie in einem anderen Terminal die Simulation:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

Warten bis "Warten auf Zahlung" 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

Um eine Transaktion zu senden, führen Sie in einem anderen Fenster aus:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - wobei **<drone_address>** und **<employer_key>** entsprechend durch die Zeichenfolgen aus `config.py` ersetzt werden sollten.

Nachdem die Daten in IPFS übertragen wurden, gehen Sie zum **Chain State** im [Robonomics-Parachain-Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/). Wählen Sie **Datenprotokoll** in der Abfrage aus und fügen Sie das DRONE-Datenprotokoll mit der `+`-Schaltfläche hinzu.


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

Sie können die Telemetrie der Drohne unter `https://gateway.ipfs.io/ipfs/<hash>` finden, indem Sie den Hash von oben einfügen.

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

Es ist wichtig, das `db`-Verzeichnis vor den nächsten Starts zu entfernen  
` rm -rf ~/.local/share/robonomics/chains/dev/db`