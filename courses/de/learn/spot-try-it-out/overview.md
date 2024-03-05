---
title: Betreiben Sie Boston Dynamics Spot
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: Betreiben Sie Boston Dynamics Spot
metaOptions: [Lernen]
defaultName: Operate Boston Dynamics Spot
---

Mit diesem Tutorial können Sie in der Simulation sehen, was der echte Spot getan hat.

## Anforderungen

* ROS melodischer Desktop (Installationsanweisungen [hier](http://wiki.ros.org/melodic/Installation/Ubuntu))

<br/>

## Paket installieren

Arbeitsbereich erstellen und Pakete klonen:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

Öffnen Sie die Datei `view_model.launch`

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



Und setzen Sie den Parameter `use_sim_time` auf `true`, die Datei sollte so aussehen:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

Dann installieren Sie die Abhängigkeiten:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## Ausführen

Beispiel-Rosbag-Datei erhalten:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

Führen Sie rviz mit dem Spot-Modell aus:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

Dann in einem neuen Terminal:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


Spielen Sie die Rosbag-Datei ab und Sie werden sehen, wie der Roboter sich bewegt:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


Auf der Suche nach Möglichkeiten, den Boston Dynamics Spot im echten Leben zu betreiben? Wir haben einen [Kurs und Fernsteuerung](/online-courses/boston-dynamics-course/) Service dafür.