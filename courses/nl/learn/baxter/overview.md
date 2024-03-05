---
title: Bedien Baxter-robot
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: Bedien Baxter-robot
metaOptions: [Leren]
defaultName: Control Baxter robot
---
Voorbeeld van hoe het werkt:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## Vereisten:

<List>

<li class="flex">

ROS Melodic + Gazebo (installatiehandleiding [hier][db2])  

</li>

<li>extra pakketten:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effoft-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS tot 0.6.0 (download van [hier][db3] en installeer)

</li>

<li> python pakketten:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics node download laatste [release][db4] hier (laatst geteste release v1.1)

</li>

<li>IPFS browserextensie (niet noodzakelijk)</li>

</List>

<br/>

## 0. installeer de CV Bridge-extensie voor python3

<List>

<li> Maak een catkin-werkruimte aan

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Instrueer catkin om cmake-variabelen in te stellen. Gebruik uw huidige versie van `python`. Voor mij is het `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Kloon cv_bridge src:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Zoek de versie van cv_bridge in uw repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Checkout juiste versie in git repo. In ons geval is het 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Bouwen:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Breid de omgeving uit met nieuw pakket:

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

## 1. Download simulatie- en controllerpakketten
Download pakketten:

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

Vergeet niet om het source-commando toe te voegen:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Start simulatie
Laten we de gazebo-wereld starten en onze baxter erin plaatsen:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

Open nog een venster in de terminal:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

Je kunt wat modellen voor onze baxter plaatsen. Het zal interessanter zijn.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Beheer accounts in DAPP

Aangezien we aan het testen zijn, laten we een lokaal robonomics-netwerk maken met het robonomics-binair bestand. Ga naar de map met het robonomics-bestand en voer uit:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Ga naar [Robonomics Parachain portal][db5] en schakel over naar de lokale node

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Ga naar Accounts en maak __Baxter__ en __Werkgever__ accounts aan (__Robot__ is niet nodig)

__Belangrijk!__ Kopieer het **Mnemonic** en **adres** van elk account (om het adres te kopiëren, klik op het pictogram van het account). **Mnemonic** is de privésleutel voor het account.
Verzend wat geld (eenheden) naar deze accounts:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Voeg de **Mnemonic** en **adres** van Baxter toe aan `config.yaml` in `robot_ws/src/Baxter_simulation_controller/config/`

## 4. Start simulatie

Voer in een nieuw venster uit:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Open een aparte terminal en start het *controllerpakket*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Nu kun je een transactie verzenden om de Baxter te laten bewegen en gegevens te verzamelen. Hiervoor kun je dezelfde [Robonomics Parachain portal][db5] gebruiken. Ga naar **Developer->Extrinsics** en selecteer het werkgeversaccount van Baxter, `launch` extrinsiek, het account van Baxter als doelaccount en `ja` als parameter. Dien de extrinsieke in.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

De robot zou moeten beginnen met bewegen. Het zal geen opdrachten accepteren van andere accounts noch opdrachten met de parameter `nee`.
Je zou het volgende moeten zien:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

wanneer het werk voorbij is, ga naar de Robonomics Portal naar `Developer > Chain state`. Kies `datalog.datalogItem(AccountId,u64)` in **state query**. Als je alle datalogs wilt laten zien, schakel dan `include option` uit en bekijk het datalogbericht van Baxter met de "+" knop.

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Nu wordt de IPFS-hash van de telemetrie en foto's opgeslagen in de blockchain. Om de gegevens te zien, kopieer eenvoudig de hash en plak deze in de zoekbalk met URL: gateway.ipfs.io/ipfs/<br zet hier je hash >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

Klik op  __Bekijken op Gateway__ en dat is alles!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Baxter-simulatie v2.0

Voorbeeld van hoe het werkt:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## Vereisten:

<List>

<li class="flex">


ROS Melodic + Gazebo (installatiehandleiding [hier][db2])  

</li>

<li>extra pakketten:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS tot 0.6.0 (download van [hier][db3] en installeer)

</li>

<li> python pakketten:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics-node (binair bestand) (download de nieuwste [release][db4] hier)

</li>

<li class="flex">

Maak __Baxter__ en __Werkgever__ accounts aan op **Robonomics Portal** (je kunt een tutorial vinden ["Maak een account aan op Robonomics Portal"][db8] hier).
</li>

<li>IPFS browserextensie (niet noodzakelijk)</li>

</List>

<br/>

## 0. installeer CV Bridge-extensie voor python3

<List>

<li> Maak een catkin-werkruimte aan

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Instrueer catkin om cmake-variabelen in te stellen. Gebruik uw huidige versie van `python`. Voor mij is het `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Kloon cv_bridge src:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Zoek de versie van cv_bridge in uw repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Checkout juiste versie in git repo. In ons geval is het 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Bouwen:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Breid de omgeving uit met nieuw pakket:

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

## 1. Download simulatie- en controllerpakketten
We moeten 2 werkruimtes maken - een voor de belangrijkste Baxter-pakketten en de andere voor het belangrijkste besturingsprogramma.
Eerste werkruimte. Het is het belangrijkste besturingsprogramma. Het zal worden uitgevoerd onder python3.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

Tweede werkruimte. Daar zullen alle Baxter-pakketten zijn. De simulatie is erg oud, dus het kan alleen worden uitgevoerd onder python2.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

Deze pakketten zijn gemaakt voor ROS indigo. We moeten enkele bestanden wijzigen om ze op ROS melodic te laten werken.
We zullen **patch**-bestanden gebruiken.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

En laten we al onze pakketten bouwen:  
Bouw eerst de Baxter-pakketten

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

Ga dan terug naar de eerste werkruimte en bouw het ook:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

Vergeet niet om het source-commando toe te voegen:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Start simulatie
### Laten we onze simulatie starten:
Ga eerst naar `robot_ws` en kopieer en bewerk baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

Zoek uw lokale ip-adres met het commando:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

Bewerk de volgende waarden in `baxter.sh` :

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- your_ip - plaats uw lokale ip-adres. Zie `ip a`
- ros_version - bijvoorbeeld "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

Voer het baxter-shellscript uit met sim gespecificeerd:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

Je kunt wat modellen voor onze baxter plaatsen. Het zal interessanter zijn.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Beheer accounts in DAPP

Aangezien we aan het testen zijn, laten we een lokaal robonomics-netwerk maken met het robonomics-binair bestand. Ga naar de map met het robonomics-bestand en voer uit:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Ga naar [Robonomics Parachain portal][db5] en schakel over naar de lokale node

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Ga naar Accounts en maak __Baxter__ en __Werkgever__ accounts aan.

Je kunt de handleiding "Maak een account aan op Robonomics Portal" [hier][db8] vinden

__Belangrijk!__ Kopieer het **Mnemonic** en **adres** van elk account (om het adres te kopiëren, klik op het pictogram van het account). **Mnemonic** is de privésleutel voor het account.

Verzend wat geld (eenheden) naar deze accounts:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Voeg Baxter's **Mnemonic** en **adres** toe aan `config.yaml` in `robonomics_ws/src/Baxter_simulation_controller/config/`

## 4. Start simulatie

Voer in een nieuw venster uit:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Open een aparte terminal en start het *controllerpakket*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Nu kun je een transactie verzenden die de Baxter activeert om te beginnen met bewegen en gegevens te verzamelen. Hiervoor kun je dezelfde portal [Robonomics Parachain portal][db5] gebruiken. Ga naar **Developer->Extrinsics** en selecteer het werkgeversaccount van Baxter, `launch` extrinsiek, Baxter's account als doelaccount en `ja` als parameter. Dien de extrinsieke in.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

De robot zou moeten beginnen met bewegen. Het zal geen opdrachten accepteren van andere accounts noch opdrachten met de parameter `nee`.
Je zou het volgende moeten zien:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

Wanneer het werk voorbij is, ga naar de Robonomics Portal naar `Developer > Chain state`. Kies `datalog.datalogItem(AccountId,u64)` in **state query**. Als je alle datalogs wilt laten zien, schakel dan de `include option` uit en bekijk Baxter's datalogbericht met de "+" knop.

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Nu is de IPFS-hash van de telemetrie en foto's opgeslagen in de blockchain. Om de gegevens te zien, kopieer eenvoudig de hash en plak deze in de zoekbalk met URL:  
#### gateway.ipfs.io/ipfs/< plaats hier je hash>

Dat is alles!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/Installatie>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>