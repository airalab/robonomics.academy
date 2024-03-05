---
title: Управляйте Boston Dynamics Spot
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: Управляйте Boston Dynamics Spot
metaOptions: [Учиться]
defaultName: Operate Boston Dynamics Spot
---

С помощью этого руководства вы сможете увидеть в симуляции то, что делал настоящий Spot.

## Требования

* ROS мелодичный рабочий стол (инструкции по установке [здесь](http://wiki.ros.org/melodic/Установка/Ubuntu))

<br/>

## Установить пакет

Создать рабочее пространство и клонировать пакеты:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

Откройте файл `view_model.launch`

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



И установите параметр `use_sim_time` в `true`, файл должен выглядеть так:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

Затем установите зависимости:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## Запустить

Получить пример файла rosbag:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

Запустить rviz с моделью Spot:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

Затем в новом терминале:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


Воспроизведите файл rosbag и вы увидите движение робота:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


Ищете возможности управления Boston Dynamics Spot в реальной жизни? У нас есть [курс и сервис дистанционного управления](/online-courses/boston-dynamics-course/) для этого.