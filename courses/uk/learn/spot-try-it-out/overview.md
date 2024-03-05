---
title: Працюйте з роботом Boston Dynamics Spot
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: Працюйте з роботом Boston Dynamics Spot
metaOptions: [Вчитися]
defaultName: Operate Boston Dynamics Spot
---

З цим посібником ви зможете побачити в симуляції те, що реальний Spot робив.

## Вимоги

* ROS мелодійний робочий стіл (інструкції щодо встановлення [тут](http://wiki.ros.org/melodic/Інсталяція/Ubuntu))

<br/>

## Встановити пакет

Створіть робоче середовище та клонуйте пакети:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

Відкрийте файл `view_model.launch`

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



І встановіть параметр `use_sim_time` в `true`, файл повинен виглядати так:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

Потім встановіть залежності:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## Запустіть

Отримайте приклад файлу rosbag:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

Запустіть rviz з моделлю Spot:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

Потім у новому терміналі:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


Відтворіть файл rosbag і побачите, як робот рухається:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


Шукаєте можливості працювати з роботом Boston Dynamics Spot в реальному житті? У нас є [курс та сервіс дистанційного керування](/online-courses/boston-dynamics-course/) для цього.