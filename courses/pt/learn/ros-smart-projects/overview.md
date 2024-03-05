---
title: Projetos baseados em ROS para espaços inteligentes
lastUpdate: Thu May 04 2023 12:53:19 GMT+0400 (Samara Standard Time)
description: Projetos baseados em ROS para espaços inteligentes
metaOptions: [Aprender]
defaultName: ROS-based projects for smart spaces
---

Ao longo de seus 15 anos de desenvolvimento, o framework Robot Operating System foi integrado com dezenas de [dispositivos robóticos variados](https://robots.ros.org/), e existem ainda mais pacotes com algoritmos e ferramentas desenvolvidas pela comunidade. Verdade seja dita, agora existem tantos projetos, e a confusão no estilo de descrição de seus repositórios cresceu tanto que atualmente é bastante problemático encontrar projetos dedicados a um tópico específico. 

Aqui, você encontrará uma lista modesta de projetos baseados em ROS dedicados a robôs e dispositivos IoT destinados ao uso em um ambiente doméstico ou de escritório. Este assunto é um dos pilares da plataforma Robonomics. Nosso objetivo é tentar trazer esses projetos para o caminho do Robonomics, tanto do ponto de vista da integração técnica quanto da perspectiva de uma aplicação interessante desses dispositivos em uma economia robótica. Sinta-se à vontade para usar esta lista em sua busca por ideias e inspiração.

Você pode conferir alguns exemplos de projetos ROS integrados com Robonomics em nossa [seção de Aprendizado](/learn).

<!-- Atualmente (**Abril de 2021**), o Robonomics está orientado para as versões ROS **Melodic** e **Noetic**. Versões mais antigas também podem funcionar, mas pode ser necessário trabalho adicional de integração. No futuro, o suporte para a versão 2 do ROS será adicionado. -->

Os principais recursos para buscar repositórios e pacotes ROS podem ser acessados [aqui](https://index.ros.org/).

## Simulação

Antes de direcionar nossa atenção exclusivamente para dispositivos, vale lembrar que para uma grande quantidade de projetos ROS, existe a opção de testá-los em uma simulação. A ferramenta mais popular para a modelagem 3D de vários robôs sob o ROS é o simulador [Gazebo](http://gazebosim.org/) e seu projeto derivado, [Ignition](https://index.ros.org/r/ros_ign/). Ambos os simuladores permitem modelar dispositivos em vários ambientes internos e externos difíceis, alterar o modelo e o ambiente em si, testar algoritmos de controle e depurar antes de passar para o dispositivo real. Além disso, esta é uma excelente ferramenta para treinamento e situações em que um dispositivo real está ausente.

No geral, esta é uma das melhores opções para tentar integrar o Robonomics com um dispositivo ROS sem nenhum gasto. Um cenário real exigiria apenas pequenas modificações de código. Para o Gazebo, o Robonomics possui um guia detalhado que consiste em duas partes que abordam [configurações](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-1/) e [integrações](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-2/) (usando um drone como exemplo). O principal desafio está em encontrar um modelo pronto (por exemplo, [aqui](https://github.com/osrf/gazebo_models)) para o Gazebo ou tentar criar seu próprio modelo usando o [SDFormat](http://sdformat.org/) desenvolvido para simuladores. 

## Computadores de placa única e outras placas

Essas placas atuam como um componente base para conectar outros dispositivos ao ROS, principalmente sensores e dispositivos de gravação (gravadores de áudio, foto e vídeo, câmeras, sensores de temperatura, pressão e concentração de substâncias.) porque o conceito de um espaço inteligente implica a criação de um [gêmeo digital](https://gateway.pinata.cloud/ipfs/QmNNdLG3vuTsJtZtNByWaDTKRYPcBZSZcsJ1FY6rTYCixQ/Robonomics_keypoint_March_2021.pdf) de objetos de infraestrutura. Além disso, as placas podem atuar como o dispositivo de computação principal e controlador para a construção de um dispositivo móvel robótico. Abaixo está uma lista de placas que suportam o ROS:

| Name and link                                                                                         |                                    Description                                  | ROS version | Last update |
|:-----------------------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------|:-----------:|:-----------:|
|  [Raspberry Pi](http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Melodic%20on%20the%20Raspberry%20Pi)| single board computer; RaspPi versions 2, 3 and 4 are available                 |   melodic   |     2020    |
|    [Arduino](http://wiki.ros.org/rosserial_arduino)                                                   | single board computer                                                           |    noetic   |     2021    |
|    [Phidgets](http://wiki.ros.org/phidgets)                                                           | sets of boards, various sensors and devices: Ph sensor, LED, RFID, motor control|    noetic   |     2020    |
|   [Sense HAT](https://wiki.ros.org/sensehat_ros)                                                      | shield for RaspPi with a set of sensors and LED                                 |    noetic   |     2020    |
|     [Navio2](https://navio2.emlid.com/)                                                               | autopliot shield for RaspPi 2,3,4                                               |    noetic   |     2020    |
|     [OpenCR](http://wiki.ros.org/opencr)                                                              | robot controller                                                                |    noetic   |     2021    |

<br/>

## Dispositivos domésticos inteligentes e robôs domésticos

Apresentados aqui estão dispositivos ROS cujo uso inicial foi para casas ou escritórios inteligentes. A lista varia amplamente, desde aspiradores de pó e assistência robótica até sistemas de controle doméstico.

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

## Plataformas móveis e manipuladores

Em primeiro lugar, o ROS é conhecido por apoiar a robótica móvel, desde drones até manipuladores industriais, para os quais muitos pacotes foram criados que realizam a localização e mapeamento simultâneos ([SLAM](http://wiki.ros.org/rtabmap_ros)), resolvem a tarefa direta e inversa da cinemática, [planejamento de trajetória](https://moveit.ros.org/), e etc. A robótica móvel está gradualmente penetrando na vida cotidiana, por isso é certamente interessante testar os robôs ROS existentes em seu uso dentro de um espaço inteligente. A lista geral de plataformas móveis baseadas em ROS é bastante extensa, por isso aqui selecionamos aquelas que são potencialmente convenientes para operar em um espaço doméstico ou de escritório. 

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