---
title: ROS-basierte Projekte für intelligente Räume
lastUpdate: Thu May 04 2023 12:53:19 GMT+0400 (Samara Standard Time)
description: ROS-basierte Projekte für intelligente Räume
metaOptions: [Lernen]
defaultName: ROS-based projects for smart spaces
---

Im Laufe seiner 15-jährigen Entwicklung wurde das Robot Operating System-Framework mit Dutzenden von [verschiedenen Robotervorrichtungen](https://robots.ros.org/) integriert, und es gibt noch mehr Pakete mit Algorithmen und Tools, die von der Community entwickelt wurden. Um ehrlich zu sein, gibt es mittlerweile so viele Projekte, und die Chaoshaftigkeit des Beschreibungsstils ihrer Repositories ist so stark gewachsen, dass es derzeit ziemlich problematisch ist, Projekte zu einem bestimmten Thema zu finden. 

Hier finden Sie eine bescheidene Liste von ROS-basierten Projekten, die für Roboter und IoT-Geräte bestimmt sind, die in einem Heim- oder Büroumfeld verwendet werden sollen. Dieses Thema ist einer der Pfeiler der Robonomics-Plattform. Unser Ziel ist es, diese Projekte sowohl aus technischer Integrationsperspektive als auch aus der Perspektive einer interessanten Anwendung dieser Geräte in einer Roboterwirtschaft auf den richtigen Weg zu bringen. Nutzen Sie diese Liste gerne bei Ihrer Suche nach Ideen und Inspiration.

Sie können einige Beispiele von ROS-Projekten, die mit Robonomics integriert sind, in unserem [Lernbereich](/learn) überprüfen.

<!-- Stand heute (**April 2021**) ist Robonomics auf die ROS-Versionen **Melodic** und **Noetic** ausgerichtet. Ältere Versionen können ebenfalls funktionieren, aber es kann zusätzliche Integrationsarbeit erforderlich sein. In Zukunft wird Unterstützung für ROS Version 2 hinzugefügt. -->

Die wichtigsten Ressourcen zur Suche nach ROS-Repositories und -Paketen finden Sie [hier](https://index.ros.org/).

## Simulation

Bevor wir unsere Aufmerksamkeit ausschließlich auf Geräte richten, lohnt es sich zu bedenken, dass es für eine große Anzahl von ROS-Projekten die Möglichkeit gibt, sie in einer Simulation zu testen. Das beliebteste Tool für die 3D-Modellierung verschiedener Roboter unter ROS ist der [Gazebo](http://gazebosim.org/) Simulator und sein Ablegerprojekt [Ignition](https://index.ros.org/r/ros_ign/). Beide Simulatoren ermöglichen es, Geräte in verschiedenen schwierigen Innen- und Außenumgebungen zu modellieren, das Modell und die Umgebung selbst zu verändern, Steuerungsalgorithmen zu testen und zu debuggen, bevor man zum realen Gerät übergeht. Außerdem ist dies ein ausgezeichnetes Werkzeug für Schulungen und Situationen, in denen ein echtes Gerät fehlt.

Insgesamt ist dies eine der besten Optionen, um zu versuchen, Robonomics mit einem ROS-Gerät ohne jegliche Ausgaben zu integrieren. Ein realistisches Szenario würde lediglich geringfügige Code-Änderungen erfordern. Für Gazebo hat Robonomics einen ausführlichen Leitfaden, der aus zwei Teilen besteht, die [Einstellungen](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-1/) und [Integrationen](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-2/) abdecken (am Beispiel einer Drohne). Die Hauptherausforderung besteht darin, ein fertiges Modell zu finden (zum Beispiel [hier](https://github.com/osrf/gazebo_models)) für Gazebo oder zu versuchen, Ihr eigenes Modell mithilfe des für Simulatoren entwickelten [SDFormats](http://sdformat.org/) zu erstellen. 

## Einplatinencomputer und andere Boards

Solche Boards dienen als Grundkomponente zum Anschließen anderer Geräte an ROS, hauptsächlich Sensoren und Aufnahmegeräte (Audio-, Foto- und Videorekorder, Kameras, Temperatur-, Druck- und Substanzkonzentrationssensoren), da das Konzept eines intelligenten Raums die Erstellung eines [digitalen Zwillings](https://gateway.pinata.cloud/ipfs/QmNNdLG3vuTsJtZtNByWaDTKRYPcBZSZcsJ1FY6rTYCixQ/Robonomics_keypoint_March_2021.pdf) von Infrastrukturobjekten impliziert. Außerdem können Boards als Hauptrechengerät und Controller für den Bau eines mobilen Roboters dienen. Eine Liste von Boards, die ROS unterstützen, wird unten präsentiert:

| Name and link                                                                                         |                                    Description                                  | ROS version | Last update |
|:-----------------------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------|:-----------:|:-----------:|
|  [Raspberry Pi](http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Melodic%20on%20the%20Raspberry%20Pi)| single board computer; RaspPi versions 2, 3 and 4 are available                 |   melodic   |     2020    |
|    [Arduino](http://wiki.ros.org/rosserial_arduino)                                                   | single board computer                                                           |    noetic   |     2021    |
|    [Phidgets](http://wiki.ros.org/phidgets)                                                           | sets of boards, various sensors and devices: Ph sensor, LED, RFID, motor control|    noetic   |     2020    |
|   [Sense HAT](https://wiki.ros.org/sensehat_ros)                                                      | shield for RaspPi with a set of sensors and LED                                 |    noetic   |     2020    |
|     [Navio2](https://navio2.emlid.com/)                                                               | autopliot shield for RaspPi 2,3,4                                               |    noetic   |     2020    |
|     [OpenCR](http://wiki.ros.org/opencr)                                                              | robot controller                                                                |    noetic   |     2021    |

<br/>

## Smart-Home-Geräte und Haushaltsroboter

Hier werden ROS-Geräte vorgestellt, deren ursprüngliche Verwendung für intelligente Häuser oder Büros gedacht war. Die Liste variiert stark, von Staubsaugern und robotischer Unterstützung bis hin zu Haussteuerungssystemen.

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

## Mobile Plattformen und Manipulatoren

Vor allem ist ROS bekannt für die Unterstützung von mobiler Robotik, von Drohnen bis zu industriellen Manipulatoren, für die viele Pakete erstellt wurden, die gleichzeitige Lokalisierung und Kartierung ([SLAM](http://wiki.ros.org/rtabmap_ros)) realisieren, die direkte und inverse Aufgabe der Kinematik lösen, [Bahnplanung](https://moveit.ros.org/) und so weiter. Mobile Robotik dringt allmählich in den Alltag ein, weshalb es sicherlich interessant ist, vorhandene ROS-Roboter in ihrer Verwendung in einem intelligenten Raum zu testen. Die allgemeine Liste der auf ROS basierenden mobilen Plattformen ist ziemlich groß, weshalb wir hier diejenigen ausgewählt haben, die potenziell bequem in einem Wohn- oder Bürogebiet zu betreiben sind. 

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