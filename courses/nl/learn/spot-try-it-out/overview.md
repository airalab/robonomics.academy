---
title: Bedien Boston Dynamics Spot
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: Bedien Boston Dynamics Spot
metaOptions: [Leren]
defaultName: Operate Boston Dynamics Spot
---

Met deze tutorial kun je in de simulatie zien wat echte Spot deed.

## Vereisten

* ROS melodische desktop (installatie-instructies [hier](http://wiki.ros.org/melodic/Installatie/Ubuntu))

<br/>

## Installeer pakket

Maak werkruimte aan en kloon pakketten:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

Open het bestand `view_model.launch`

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



En stel de parameter `use_sim_time` in op `true`, het bestand moet er zo uitzien:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

Installeer vervolgens de afhankelijkheden:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## Voer uit

Haal een voorbeeld rosbag-bestand op:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

Voer rviz uit met het Spot-model:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

Vervolgens in een nieuwe terminal:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


Speel het rosbag-bestand af en je zult de robot zien bewegen:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


Op zoek naar mogelijkheden om Boston Dynamics Spot in het echte leven te bedienen? We hebben [cursus en afstandsbediening](/online-courses/boston-dynamics-course/) service ervoor.