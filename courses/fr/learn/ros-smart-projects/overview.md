---
title: Projets basés sur ROS pour les espaces intelligents
lastUpdate: Thu May 04 2023 12:53:19 GMT+0400 (Samara Standard Time)
description: Projets basés sur ROS pour les espaces intelligents
metaOptions: [Apprendre]
defaultName: ROS-based projects for smart spaces
---

Au cours de ses 15 années de développement, le cadre du Robot Operating System a été intégré à des dizaines de [divers dispositifs robotiques](https://robots.ros.org/), et il existe encore plus de packages avec des algorithmes et des outils développés par la communauté. Pour être honnête, il y a maintenant tellement de projets, et le chaos du style de description de leurs dépôts a tellement augmenté qu'il est actuellement assez problématique de trouver des projets dédiés à un sujet spécifique. 

Ici, vous trouverez une liste modeste de projets basés sur ROS dédiés aux robots et aux appareils IoT destinés à être utilisés dans un environnement domestique ou de bureau. Ce sujet est l'un des piliers de la plateforme Robonomics. Notre objectif est d'essayer de mettre ces projets sur la bonne voie avec Robonomics, tant d'un point de vue d'intégration technique que de la perspective d'une application intéressante de ces appareils dans une économie robotique. N'hésitez pas à utiliser cette liste dans votre recherche d'idées et d'inspiration.

Vous pouvez consulter quelques exemples de projets ROS intégrés à Robonomics dans notre [section d'apprentissage](/learn).

<!-- À l'heure actuelle (**avril 2021**), Robonomics est orienté vers les versions ROS **Melodic** et **Noetic**. Les anciennes versions peuvent également fonctionner, mais des travaux d'intégration supplémentaires peuvent être nécessaires. À l'avenir, le support de la version 2 de ROS sera ajouté. -->

Les principales ressources pour rechercher des dépôts et des packages ROS peuvent être consultées [ici](https://index.ros.org/).

## Simulation

Avant de porter notre attention uniquement sur les appareils, il est bon de se rappeler que pour une grande quantité de projets ROS, il existe une option pour les tester dans une simulation. L'outil le plus populaire pour la modélisation 3D de divers robots sous ROS est le simulateur [Gazebo](http://gazebosim.org/) et son projet dérivé, [Ignition](https://index.ros.org/r/ros_ign/). Les deux simulateurs permettent de modéliser des appareils dans divers environnements intérieurs et extérieurs difficiles, de modifier le modèle et l'environnement lui-même, de tester des algorithmes de contrôle et de déboguer avant de passer au dispositif réel. De plus, il s'agit d'un excellent outil pour la formation et les situations où un dispositif réel est absent.

Dans l'ensemble, il s'agit de l'une des meilleures options pour essayer d'intégrer Robonomics avec un dispositif ROS sans aucune dépense. Un scénario réel ne nécessiterait que de légères modifications de code. Pour Gazebo, Robonomics dispose d'un guide détaillé en deux parties couvrant les [paramètres](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-1/) et les [intégrations](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-2/) (en utilisant un drone comme exemple). Le principal défi réside dans la recherche d'un modèle prêt (par exemple, [ici](https://github.com/osrf/gazebo_models)) pour Gazebo ou dans la tentative de créer votre propre modèle en utilisant le [SDFormat](http://sdformat.org/) développé pour les simulateurs. 

## Ordinateurs monocartes et autres cartes

Ces cartes agissent comme un composant de base pour connecter d'autres appareils à ROS, principalement des capteurs et des dispositifs d'enregistrement (enregistreurs audio, photo et vidéo, caméras, capteurs de température, de pression et de concentration de substances.) car le concept d'un espace intelligent implique la création d'un [jumeau numérique](https://gateway.pinata.cloud/ipfs/QmNNdLG3vuTsJtZtNByWaDTKRYPcBZSZcsJ1FY6rTYCixQ/Robonomics_keypoint_March_2021.pdf) d'objets d'infrastructure. De plus, les cartes peuvent agir comme dispositif informatique principal et contrôleur pour la construction d'un dispositif mobile robotique. Une liste de cartes prenant en charge ROS est présentée ci-dessous:

| Name and link                                                                                         |                                    Description                                  | ROS version | Last update |
|:-----------------------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------|:-----------:|:-----------:|
|  [Raspberry Pi](http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Melodic%20on%20the%20Raspberry%20Pi)| single board computer; RaspPi versions 2, 3 and 4 are available                 |   melodic   |     2020    |
|    [Arduino](http://wiki.ros.org/rosserial_arduino)                                                   | single board computer                                                           |    noetic   |     2021    |
|    [Phidgets](http://wiki.ros.org/phidgets)                                                           | sets of boards, various sensors and devices: Ph sensor, LED, RFID, motor control|    noetic   |     2020    |
|   [Sense HAT](https://wiki.ros.org/sensehat_ros)                                                      | shield for RaspPi with a set of sensors and LED                                 |    noetic   |     2020    |
|     [Navio2](https://navio2.emlid.com/)                                                               | autopliot shield for RaspPi 2,3,4                                               |    noetic   |     2020    |
|     [OpenCR](http://wiki.ros.org/opencr)                                                              | robot controller                                                                |    noetic   |     2021    |

<br/>

## Appareils domotiques et robots ménagers

Sont présentés ici des appareils ROS dont l'utilisation initiale était destinée aux maisons intelligentes ou aux bureaux. La liste varie largement, des aspirateurs et de l'assistance robotique aux systèmes de contrôle domestique.

| Name and link                                             | Description                                                 |          ROS version          | Last update |
|:---------------------------------------------------------:|-------------------------------------------------------------|:-----------------------------:|:-----------:|
|  [Care-O-bot 4](http://wiki.ros.org/care-o-bot)           | household robot-assistant; a simulation is available        |            melodic            |     2021    |
|     [Kobuki](http://wiki.ros.org/kobuki)                  | mobile platform with different use cases (e.g. a waiter)    |            melodic            |     2020    |
|    [QTrobot](http://wiki.ros.org/Robots/qtrobot)          | humanoid social robot                                       | kinetic (melodic can be used) |     2020    |
|      [Nao](http://wiki.ros.org/nao)                       | humanoid robot; a simulation is available                   |            Melodic            |     2020    |
|     [TIAGo](http://wiki.ros.org/Robots/TIAGo)             | service robot with a manipulator; a simulation is available |            kinetic            |     2020    |
|     [Roomba](https://github.com/AutonomyLab/create_robot) | robot vacuum cleaner                                        |            melodic            |     2020    |
|    [OpenHAB](http://wiki.ros.org/iot_bridge)              | home automation system                                      |            kinetic            |     2017    |
|     [Sesame](https://index.ros.org/p/sesame_ros/)         | smart lock                                                  |            melodic            |     2021    |

<br/>

## Plateformes mobiles et manipulateurs

Tout d'abord, ROS est connu pour soutenir la robotique mobile, des drones aux manipulateurs industriels, pour lesquels de nombreux packages ont été créés qui réalisent la localisation et la cartographie simultanées ([SLAM](http://wiki.ros.org/rtabmap_ros)), résolvent la tâche directe et inverse de la cinématique, la planification de trajectoire (https://moveit.ros.org/), etc. La robotique mobile pénètre progressivement dans la vie quotidienne, c'est pourquoi il est certainement intéressant de tester les robots ROS existants dans leur utilisation dans un espace intelligent. La liste générale des plates-formes mobiles basées sur ROS est plutôt grande, c'est pourquoi nous avons sélectionné ici celles qui sont potentiellement pratiques à utiliser dans un espace domestique ou de bureau. 

| Name and link                                             | Description                                | ROS version | Last update |
|:---------------------------------------------------------:|--------------------------------------------|:-----------:|:-----------:|
|   [turtlebot](http://wiki.ros.org/turtlebot3)             | mobile platform tailored for ROS           |    noetic   |     2020    |
|    [GoPiGo3](http://wiki.ros.org/Robots/gopigo3)          | mobile robot based on RaspPi               |   melodic   |     2020    |
|    [LoCoBot](http://wiki.ros.org/locobot)                 | mobile manipulator                         |   kinetic   |     2020    |
|   [ROSbot 2.0](http://wiki.ros.org/Robots/ROSbot-2.0)     | mobile platform; a simulation is available |    noetic   |     2021    |
|     [VOLTA](http://wiki.ros.org/Robots/Volta)             | mobile platform; a simulation is available |   melodic   |     2021    |
|    [evarobot](http://wiki.ros.org/Robots/evarobot)        | mobile platform; a simulation is available |    noetic   |     2020    |
|    [Freight](http://wiki.ros.org/Robots/freight)          | mobile platform; a simulation is available |   melodic   |     2021    |
|      [PR2](http://wiki.ros.org/Robots/PR2)                | mobile platform; a simulation is available |   melodic   |     2021    |