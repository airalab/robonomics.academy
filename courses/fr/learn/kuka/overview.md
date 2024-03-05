---
title: Connecteze le manipulateur Kuka
description: Connectez le manipulateur
metaOptions: [Apprendre]
defaultName: Connect Kuka manipulator
---

Une vidéo avec un exemple de travail peut être trouvée ici:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## Exigences

<List>

<li class="flex">

ROS mélodique, Gazebo (instructions d'installation [ici](http://wiki.ros.org/melodic/Installation/Ubuntu))
</li>

<li>Quelques paquets supplémentaires

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(téléchargez depuis [ici](https://www.npackd.org/p/ipfs/0.4.22) et installez)

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

Nœud Robonomics (fichier binaire) (téléchargez la dernière version [ici](https://github.com/airalab/robonomics/releases))

</li>

<li>Extension du navigateur IPFS (non nécessaire)</li>

</List>

<br/>

***

<br/>

## Installation
Installez le manipulateur Kuka et les packages de contrôle

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## Exécution du modèle gazebo

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

Dans une nouvelle fenêtre

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## Exécution de Robonomics
Allez dans le dossier avec le fichier Robonomics et créez un réseau Robonomics local:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

Allez sur le portail Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) et passez au nœud local

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

Ensuite, allez dans Comptes et créez un compte `KUKA`. Enregistrez la clé mnémonique du compte, vous en aurez besoin plus tard. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

Envoyez quelques unités au nouveau compte à partir d'un des comptes par défaut.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## Exécution de IPFS
Exécuter ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## Exécution du package de contrôle
Dans le répertoire de configuration du package de contrôle kuka_control, vous devez créer un fichier de configuration avec ces lignes, où `<votre_mnémonique>` est la graine mnémonique enregistrée:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


Maintenant, vous pouvez exécuter le script de contrôle:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## Envoi de la transaction
Dans le portail Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) allez à `Développeur/Extrinsèques`, changez `extrinsèque` en `lancement`. Choisissez votre compte `KUKA` dans `robot` et changez `param` en `Oui`. Appuyez sur `Soumettre la transaction`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

Dans la fenêtre avec le package de contrôle kuka_control, vous verrez:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

Ensuite, allez à `Développeur/État de la chaîne` sur le portail Robonomics, sélectionnez `datalog` et `datalogItem((AccountId,u64)): RingBufferItem` dans la requête et ajoutez le datalog `KUKA` avec le bouton '+':

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

Maintenant, vous pouvez trouver la télémétrie du robot dans IPFS via ce lien avec votre hachage `https://gateway.ipfs.io/ipfs/<hash>`.

## Dépannage

Si `catkin_make` ne fonctionne pas avec le message indiquant qu'il ne peut pas trouver MoveArm.h, essayez de supprimer les quatre dernières lignes dans CMakeLists.txt dans le package kuka_manipulator_gazebo:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

Faites `catkin_make` sans ces lignes, puis remettez-les et refaites `catkin_make`.