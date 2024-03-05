---
title: Verbind onbemand luchtvaartuig
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: Verbind onbemand luchtvaartuig
metaOptions: [Leren]
defaultName: Connect unmanned aerial vehicle
---

**Drone begint te bewegen na transactie en slaat bestand met de coördinaten op in IPFS. Het besturingsscript is gebaseerd op het [GAAS demo script](https://github.com/generalized-intelligence/GAAS)**  

https://youtu.be/4CwtGAX1OwM

<br/>

## Vereisten

<List>

<li> afhankelijkheden voor besturing:

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

ROS Melodic + Gazebo [installatie handleiding](http://wiki.ros.org/melodic/Installatie)
</li>

<li>extra pakketten:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>IPFS versie 0.4.22

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

Robonomics node (binair bestand) (download de nieuwste release [hier](https://github.com/airalab/robonomics/releases))
</li>

</List>

<br/>

## Omgeving instellen

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

Wijzig uw `.bashrc` bestand door de volgende regels onderaan toe te voegen:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## Besturingspakket installatie
In een nieuwe Terminal:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Robonomics Netwerk

Om een lokale robonomics netwerk te maken, ga naar de map met het robonomic binair bestand en voer uit:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

Voeg het pad van robonomics toe aan `config.py`

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

Ga naar het [Robonomics Parachain portaal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) en schakel over naar de lokale node.

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

Ga naar **Accounts** en maak **DRONE** en **WERKGEVER** accounts aan. Sla de accountnamen en sleutels op en het pad naar **robonomics** naar `~/catkin_ws/src/drone_sim/src/config.py`. Zet wat geld over naar de accounts.

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## Simulatie uitvoeren
Start IPFS daemon

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

Start in een andere terminal de simulatie:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

Wachten tot "Wachten op betaling" 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

Om een transactie te verzenden, voer uit in een ander venster:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - waar **<drone_address>** en **<employer_key>** moeten worden vervangen door de strings uit `config.py` overeenkomstig.

Nadat de gegevens naar IPFS zijn verzonden, ga naar de **Chain State** in [Robonomics Parachain portaal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/). Selecteer **datalog** in query en voeg DRONE datalog toe met de `+` knop.


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

U kunt de telemetrie van de drone vinden door `https://gateway.ipfs.io/ipfs/<hash>` uit te voeren en de hash van hierboven in te voegen.

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

Het is belangrijk om de `db` map te verwijderen voor de volgende lanceringen  
` rm -rf ~/.local/share/robonomics/chains/dev/db`