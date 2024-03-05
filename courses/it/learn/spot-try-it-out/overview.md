---
title: Operare Boston Dynamics Spot
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: Operare Boston Dynamics Spot
metaOptions: [Imparare]
defaultName: Operate Boston Dynamics Spot
---

Con questo tutorial sarai in grado di vedere in simulazione ciò che il vero Spot ha fatto.

## Requisiti

* ROS melodic desktop (istruzioni per l'installazione [qui](http://wiki.ros.org/melodic/Installazione/Ubuntu))

<br/>

## Installare il pacchetto

Creare uno spazio di lavoro e clonare i pacchetti:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

Aprire il file `view_model.launch`

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



E impostare il parametro `use_sim_time` su `true`, il file deve apparire così:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

Quindi installare le dipendenze:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## Eseguire

Ottenere un file rosbag di esempio:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

Eseguire rviz con il modello di Spot:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

Poi in un nuovo terminale:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


Riprodurre il file rosbag e vedrai il robot muoversi:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


Stai cercando possibilità per operare Boston Dynamics Spot nella vita reale? Abbiamo un servizio di [corso e controllo remoto](/online-courses/boston-dynamics-course/) per questo.