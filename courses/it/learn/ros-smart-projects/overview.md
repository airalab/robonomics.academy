---
title: Progetti basati su ROS per spazi intelligenti
lastUpdate: Thu May 04 2023 12:53:19 GMT+0400 (Samara Standard Time)
description: Progetti basati su ROS per spazi intelligenti
metaOptions: [Imparare]
defaultName: ROS-based projects for smart spaces
---

Durante i suoi 15 anni di sviluppo, il framework del Robot Operating System è stato integrato con dozzine di [dispositivi robotici vari](https://robots.ros.org/), e ci sono ancora più pacchetti con algoritmi e strumenti sviluppati dalla comunità. A dire il vero, ci sono così tanti progetti, e il caos dello stile di descrizione dei loro repository è cresciuto così tanto che attualmente è piuttosto problematico trovare progetti dedicati a un argomento specifico. 

Qui troverai una modesta lista di progetti basati su ROS dedicati a robot e dispositivi IoT destinati all'uso in un ambiente domestico o in ufficio. Questo argomento è uno dei pilastri della piattaforma Robonomics. Il nostro obiettivo è cercare di portare questi progetti sulla strada di Robonomics, sia dal punto di vista dell'integrazione tecnica che dalla prospettiva di un'applicazione interessante di questi dispositivi in un'economia robotica. Sentiti libero di utilizzare questa lista nella tua ricerca di idee e ispirazione.

Puoi controllare alcuni esempi di progetti ROS integrati con Robonomics nella nostra [sezione Imparare](/learn).

<!-- Al momento (**aprile 2021**), Robonomics è orientato verso le versioni ROS **Melodic** e **Noetic**. Le versioni più vecchie possono funzionare, ma potrebbe essere necessario un lavoro di integrazione aggiuntivo. In futuro, verrà aggiunto il supporto per la versione 2 di ROS. -->

Le risorse principali per cercare repository e pacchetti ROS possono essere accessibili [qui](https://index.ros.org/).

## Simulazione

Prima di concentrare la nostra attenzione esclusivamente sui dispositivi, vale la pena ricordare che per una grande quantità di progetti ROS esiste la possibilità di testarli in una simulazione. Lo strumento più popolare per la modellazione 3D di vari robot sotto ROS è il simulatore [Gazebo](http://gazebosim.org/) e il suo progetto derivato, [Ignition](https://index.ros.org/r/ros_ign/). Entrambi i simulatori consentono di modellare dispositivi in vari ambienti interni ed esterni difficili, modificare il modello e l'ambiente stesso, testare algoritmi di controllo e fare il debug prima di passare al dispositivo reale. Inoltre, questo è un ottimo strumento per la formazione e situazioni in cui manca un dispositivo reale.

Nel complesso, questa è una delle migliori opzioni per cercare di integrare Robonomics con un dispositivo ROS senza alcuna spesa. In un vero scenario, sarebbero necessarie solo lievi modifiche al codice. Per Gazebo, Robonomics ha una guida dettagliata composta da due parti che coprono [impostazioni](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-1/) e [integrazioni](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-2/) (usando un drone come esempio). La sfida principale sta nel trovare un modello pronto (ad esempio, [qui](https://github.com/osrf/gazebo_models)) per Gazebo o cercare di creare il proprio modello utilizzando il [SDFormat](http://sdformat.org/) sviluppato per i simulatori. 

## Computer a scheda singola e altre schede

Queste schede agiscono come componente base per collegare altri dispositivi a ROS, principalmente sensori e dispositivi di registrazione (registrazione audio, foto e video, telecamere, sensori di temperatura, pressione e concentrazione di sostanze) perché il concetto di spazio intelligente implica la creazione di un [gemello digitale](https://gateway.pinata.cloud/ipfs/QmNNdLG3vuTsJtZtNByWaDTKRYPcBZSZcsJ1FY6rTYCixQ/Robonomics_keypoint_March_2021.pdf) degli oggetti infrastrutturali. Inoltre, le schede possono agire come dispositivo di calcolo principale e controller per la costruzione di un dispositivo mobile robotico. Di seguito è presentato un elenco di schede che supportano ROS:

| Name and link                                                                                         |                                    Description                                  | ROS version | Last update |
|:-----------------------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------|:-----------:|:-----------:|
|  [Raspberry Pi](http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Melodic%20on%20the%20Raspberry%20Pi)| single board computer; RaspPi versions 2, 3 and 4 are available                 |   melodic   |     2020    |
|    [Arduino](http://wiki.ros.org/rosserial_arduino)                                                   | single board computer                                                           |    noetic   |     2021    |
|    [Phidgets](http://wiki.ros.org/phidgets)                                                           | sets of boards, various sensors and devices: Ph sensor, LED, RFID, motor control|    noetic   |     2020    |
|   [Sense HAT](https://wiki.ros.org/sensehat_ros)                                                      | shield for RaspPi with a set of sensors and LED                                 |    noetic   |     2020    |
|     [Navio2](https://navio2.emlid.com/)                                                               | autopliot shield for RaspPi 2,3,4                                               |    noetic   |     2020    |
|     [OpenCR](http://wiki.ros.org/opencr)                                                              | robot controller                                                                |    noetic   |     2021    |

<br/>

## Dispositivi per la casa intelligente e robot domestici

Qui sono presentati dispositivi ROS il cui utilizzo iniziale era per case intelligenti o uffici. L'elenco varia ampiamente, da aspirapolvere e assistenza robotica a sistemi di controllo domestico.

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

## Piattaforme mobili e manipolatori

In primo luogo, ROS è noto per supportare la robotica mobile, dai droni ai manipolatori industriali, per i quali sono stati creati molti pacchetti che realizzano la localizzazione e mappatura simultanea ([SLAM](http://wiki.ros.org/rtabmap_ros)), risolvono il compito diretto e inverso della cinematica, la pianificazione della traiettoria (https://moveit.ros.org/), ecc. La robotica mobile sta gradualmente penetrando nella vita di tutti i giorni, motivo per cui è certamente interessante testare i robot ROS esistenti nel loro utilizzo all'interno di uno spazio intelligente. L'elenco generale delle piattaforme mobili basate su ROS è piuttosto ampio, motivo per cui qui abbiamo selezionato quelle che sono potenzialmente convenienti per essere utilizzate in uno spazio domestico o in ufficio. 

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