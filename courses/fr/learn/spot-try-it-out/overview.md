---
title: Faire fonctionner Boston Dynamics Spot
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: Faire fonctionner Boston Dynamics Spot
metaOptions: [Apprendre]
defaultName: Operate Boston Dynamics Spot
---

Avec ce tutoriel, vous pourrez voir en simulation ce que le vrai Spot a fait.

## Exigences

* ROS mélodique de bureau (instructions d'installation [ici](http://wiki.ros.org/melodic/Installation/Ubuntu))

<br/>

## Installer le package

Créer un espace de travail et cloner les packages:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

Ouvrir le fichier `view_model.launch` :

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



Et définir le paramètre `use_sim_time` sur `true`, le fichier doit ressembler à ceci:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

Ensuite, installer les dépendances:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## Exécuter

Obtenir un fichier rosbag d'exemple:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

Exécuter rviz avec le modèle Spot:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

Puis dans un nouveau terminal:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


Lire le fichier rosbag et vous verrez le robot bouger:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


Vous cherchez des possibilités pour faire fonctionner Boston Dynamics Spot dans la vraie vie? Nous avons un [cours et un service de contrôle à distance](/online-courses/boston-dynamics-course/) pour cela.