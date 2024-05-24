---
title: 智能空间的基于ROS的项目
lastUpdate: Thu May 04 2023 12:53:19 GMT+0400 (Samara Standard Time)
description: 智能空间的基于ROS的项目
metaOptions: [学习]
defaultName: ROS-based projects for smart spaces
---

在其15年的发展历程中，机器人操作系统框架已与数十种[各种机器人设备](https://robots.ros.org/)集成，社区还开发了更多的算法和工具包。说实话，现在有这么多项目，它们的存储库描述风格的混乱程度增加到了一个相当棘手的地步，目前很难找到专门致力于特定主题的项目。 

在这里，您将找到一份致力于家庭或办公环境中使用的机器人和物联网设备的ROS项目的简要清单。这个主题是Robonomics平台的支柱之一。我们的目标是尝试将这些项目与Robonomics结合起来，从技术集成的角度和这些设备在机器人经济中的有趣应用的角度来看。请随意使用这个清单来寻找想法和灵感。

您可以在我们的[学习部分](/learn)中查看一些与Robonomics集成的ROS项目示例。

<!-- 截至目前（**2021年4月**），Robonomics面向ROS **Melodic**和**Noetic**版本。旧版本也可以使用，但可能需要额外的集成工作。未来将添加对ROS版本2的支持。 -->

搜索ROS存储库和包的主要资源可以在[这里](https://index.ros.org/)访问。

## 模拟

在我们将注意力完全转向设备之前，值得记住的是，对于大量的ROS项目，存在在模拟中测试它们的选项。用于在ROS下对各种机器人进行3D建模的最流行工具是[Gazebo](http://gazebosim.org/)模拟器及其分支项目[Ignition](https://index.ros.org/r/ros_ign/)。这两个模拟器允许在各种复杂的室内和室外环境中对设备进行建模，修改模型和环境本身，测试控制算法并在转移到真实设备之前进行调试。此外，这是一个在没有任何支出的情况下尝试将Robonomics与ROS设备集成的最佳选择。真实场景只需要进行轻微的代码修改。对于Gazebo，Robonomics有一个详细的指南，包括[设置](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-1/)和[集成](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-2/)（以无人机为例）。主要挑战在于找到一个现成的模型（例如，[这里](https://github.com/osrf/gazebo_models)）用于Gazebo，或者尝试使用为模拟器开发的[SDFormat](http://sdformat.org/)创建自己的模型。

单板计算机和其他板 

## 这些板充当将其他设备连接到ROS的基础组件，主要是传感器和记录设备（音频、照片和视频记录器、摄像头、温度、压力和物质浓度传感器），因智能空间的概念意味着创建基础设施对象的[数字孪生体](https://gateway.pinata.cloud/ipfs/QmNNdLG3vuTsJtZtNByWaDTKRYPcBZSZcsJ1FY6rTYCixQ/Robonomics_keypoint_March_2021.pdf)。此外，板可以充当构建机器人移动设备的主要计算设备和控制器。下面是支持ROS的板的列表：

智能家居设备和家庭机器人

| Name and link                                                                                         |                                    Description                                  | ROS version | Last update |
|:-----------------------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------|:-----------:|:-----------:|
|  [Raspberry Pi](http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Melodic%20on%20the%20Raspberry%20Pi)| single board computer; RaspPi versions 2, 3 and 4 are available                 |   melodic   |     2020    |
|    [Arduino](http://wiki.ros.org/rosserial_arduino)                                                   | single board computer                                                           |    noetic   |     2021    |
|    [Phidgets](http://wiki.ros.org/phidgets)                                                           | sets of boards, various sensors and devices: Ph sensor, LED, RFID, motor control|    noetic   |     2020    |
|   [Sense HAT](https://wiki.ros.org/sensehat_ros)                                                      | shield for RaspPi with a set of sensors and LED                                 |    noetic   |     2020    |
|     [Navio2](https://navio2.emlid.com/)                                                               | autopliot shield for RaspPi 2,3,4                                               |    noetic   |     2020    |
|     [OpenCR](http://wiki.ros.org/opencr)                                                              | robot controller                                                                |    noetic   |     2021    |

<br/>

## 这里介绍的是最初用于智能家居或办公室的ROS设备。列表涵盖范围广泛，从吸尘器和机器人辅助到家庭控制系统。

移动平台和操作器

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

## 移动平台和操纵器

首先，ROS 以支持移动机器人而闻名，从无人机到工业机械手，为此创建了许多软件包，实现了同时定位和地图制作（[SLAM](http://wiki.ros.org/rtabmap_ros)），解决了运动学的直接和逆向任务，[轨迹规划](https://moveit.ros.org/)等。移动机器人逐渐渗透到日常生活中，这就是为什么在智能空间内测试现有的 ROS 机器人肯定是有趣的。基于 ROS 的移动平台的一般列表相当庞大，这就是为什么我们在这里选择了那些在家庭或办公空间中潜在方便操作的平台。 

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