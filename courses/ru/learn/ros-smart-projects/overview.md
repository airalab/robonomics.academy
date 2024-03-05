---
title: Проекты на основе ROS для умных пространств
lastUpdate: Thu May 04 2023 12:53:19 GMT+0400 (Samara Standard Time)
description: Проекты на основе ROS для умных пространств
metaOptions: [Учиться]
defaultName: ROS-based projects for smart spaces
---

На протяжении 15 лет развития фреймворка Robot Operating System было интегрировано десятки [различных робототехнических устройств](https://robots.ros.org/), и существует еще больше пакетов с алгоритмами и инструментами, разработанными сообществом. Правду говоря, сейчас существует так много проектов, и хаотичность стиля описания их репозиториев выросла настолько, что в настоящее время довольно проблематично найти проекты, посвященные конкретной теме. 

Здесь вы найдете скромный список проектов на основе ROS, посвященных роботам и IoT-устройствам, предназначенных для использования в домашней или офисной среде. Эта тема является одним из столпов платформы Robonomics. Наша цель - попытаться привести эти проекты на путь с Robonomics, как с точки зрения технической интеграции, так и с точки зрения интересного применения этих устройств в роботизированной экономике. Используйте этот список в своем поиске идей и вдохновения.

Вы можете ознакомиться с некоторыми примерами интегрированных с Robonomics проектов на основе ROS в нашем разделе [Обучение](/learn).

<!-- На данный момент (**апрель 2021 года**), Robonomics ориентирован на версии ROS **Melodic** и **Noetic**. Старые версии также могут работать, но может потребоваться дополнительная работа по интеграции. В будущем будет добавлена поддержка версии ROS 2. -->

Основные ресурсы для поиска репозиториев и пакетов ROS можно найти [здесь](https://index.ros.org/).

## Симуляция

Прежде чем полностью перейти к устройствам, стоит помнить, что для большого количества проектов на ROS существует возможность тестирования их в симуляции. Самым популярным инструментом для 3D-моделирования различных роботов под управлением ROS является симулятор [Gazebo](http://gazebosim.org/) и его проект-потомок, [Ignition](https://index.ros.org/r/ros_ign/). Оба симулятора позволяют моделировать устройства в различных сложных внутренних и внешних средах, изменять модель и саму среду, тестировать алгоритмы управления и отлаживать перед переходом к реальному устройству. Кроме того, это отличный инструмент для обучения и ситуаций, когда реального устройства нет.

В целом, это один из лучших вариантов для попытки интеграции Robonomics с устройством на ROS без каких-либо затрат. Для Gazebo Robonomics есть подробное руководство, состоящее из двух частей, охватывающих [настройки](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-1/) и [интеграции](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-2/) (на примере использования дрона). Основной вызов заключается в поиске готовой модели (например, [здесь](https://github.com/osrf/gazebo_models)) для Gazebo или попытке создать собственную модель с использованием [SDFormat](http://sdformat.org/), разработанного для симуляторов. 

## Одноплатные компьютеры и другие платы

Такие платы выступают в качестве базового компонента для подключения других устройств к ROS, в основном датчиков и устройств записи (аудио, фото и видео записывающих устройств, камер, датчиков температуры, давления и концентрации веществ), потому что концепция умного пространства предполагает создание [цифрового двойника](https://gateway.pinata.cloud/ipfs/QmNNdLG3vuTsJtZtNByWaDTKRYPcBZSZcsJ1FY6rTYCixQ/Robonomics_keypoint_March_2021.pdf) объектов инфраструктуры. Кроме того, платы могут выступать в качестве основного вычислительного устройства и контроллера для создания роботизированного мобильного устройства. Ниже приведен список плат, поддерживающих ROS:

| Name and link                                                                                         |                                    Description                                  | ROS version | Last update |
|:-----------------------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------|:-----------:|:-----------:|
|  [Raspberry Pi](http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Melodic%20on%20the%20Raspberry%20Pi)| single board computer; RaspPi versions 2, 3 and 4 are available                 |   melodic   |     2020    |
|    [Arduino](http://wiki.ros.org/rosserial_arduino)                                                   | single board computer                                                           |    noetic   |     2021    |
|    [Phidgets](http://wiki.ros.org/phidgets)                                                           | sets of boards, various sensors and devices: Ph sensor, LED, RFID, motor control|    noetic   |     2020    |
|   [Sense HAT](https://wiki.ros.org/sensehat_ros)                                                      | shield for RaspPi with a set of sensors and LED                                 |    noetic   |     2020    |
|     [Navio2](https://navio2.emlid.com/)                                                               | autopliot shield for RaspPi 2,3,4                                               |    noetic   |     2020    |
|     [OpenCR](http://wiki.ros.org/opencr)                                                              | robot controller                                                                |    noetic   |     2021    |

<br/>

## Устройства умного дома и домашние роботы

Здесь представлены устройства на основе ROS, первоначально предназначенные для умных домов или офисов. Список варьируется от пылесосов и роботов-помощников до систем управления домом.

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

## Мобильные платформы и манипуляторы

Прежде всего, ROS известен своей поддержкой мобильной робототехники, от дронов до промышленных манипуляторов, для которых было создано много пакетов, реализующих одновременную локализацию и построение карты ([SLAM](http://wiki.ros.org/rtabmap_ros)), решающих прямую и обратную задачу кинематики, [планирование траектории](https://moveit.ros.org/) и т. д. Мобильная робототехника постепенно проникает в повседневную жизнь, поэтому, безусловно, интересно испытать существующие ROS-роботы в их использовании в умном пространстве. Общий список мобильных платформ на основе ROS довольно велик, поэтому здесь мы выбрали те, которые потенциально удобны для использования в домашнем или офисном пространстве. 

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