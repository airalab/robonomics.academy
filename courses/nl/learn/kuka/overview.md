---
title: Verbind Kuka manipulator
description: Verbind Manipulator
metaOptions: [Leren]
defaultName: Verbinden Kuka manipulator
---

Video met een voorbeeld van werk kan hier worden gevonden:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## Vereisten

<List>

<li class="flex">

ROS melodic, Gazebo (installatie-instructie [hier](http://wiki.ros.org/melodic/Installatie/Ubuntu))
</li>

<li>Enkele extra pakketten

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(download van [hier](https://www.npackd.org/p/ipfs/0.4.22) en installeer)

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

Robonomics node (binair bestand) (download de nieuwste release [hier](https://github.com/airalab/robonomics/releases))

</li>

<li>IPFS-browserextensie (niet noodzakelijk)</li>

</List>

<br/>

***

<br/>

## Installatie
Installeer Kuka manipulator en besturingspakketten

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## Gazebo-model uitvoeren

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

In een nieuw venster

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## Robonomics uitvoeren
Ga naar de map met het robonomics-bestand en maak een lokaal robonomics-netwerk:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

Ga naar [Robonomics Parachain-portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) en schakel over naar de lokale node

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

Ga vervolgens naar Accounts en maak een `KUKA`-account aan. Sla de mnemonische sleutel van het account op, je hebt het later nodig. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

Stuur wat eenheden naar het nieuwe account vanuit een van de standaardaccounts.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## IPFS uitvoeren
Voer uit ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## Besturingspakket uitvoeren
In de config-map in het kuka_control-pakket moet je een configuratiebestand maken met deze regels, waar `<your_mnemonic>` de opgeslagen mnemonische seed is:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


Nu kun je het besturingsscript uitvoeren:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## Transactie verzenden
Ga naar [Robonomics Parachain-portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) naar `Developer/Extrinsics`, verander `extrinsic` in `launch`. Kies je `KUKA`-account in `robot` en verander `param` in `Ja`. Druk op `Transactie verzenden`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

In het venster met het kuka_control-pakket zie je:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

Ga vervolgens naar `Developer/Chain State` op het Robonomics-portaal, selecteer `datalog` en `datalogItem((AccountId,u64)): RingBufferItem` in de query en voeg `KUKA` datalog toe met de knop '+':

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

Nu kun je de telemetrie van de robot vinden in IPFS via deze link met je hash `https://gateway.ipfs.io/ipfs/<hash>`.

## Probleemoplossing

Als `catkin_make` niet werkt met de melding dat het MoveArm.h niet kan vinden, probeer dan de laatste vier regels in CMakeLists.txt in het kuka_manipulator_gazebo-pakket te verwijderen:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

Doe `catkin_make` zonder deze regels, voeg ze dan weer toe en doe `catkin_make` opnieuw.