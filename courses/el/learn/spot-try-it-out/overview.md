---
title: Λειτουργία Boston Dynamics Spot
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: Λειτουργία Boston Dynamics Spot
metaOptions: [Μάθετε]
defaultName: Operate Boston Dynamics Spot
---

Με αυτό το εγχειρίδιο θα μπορείτε να δείτε στην προσομοίωση τι έκανε ο πραγματικός Spot.

## Απαιτήσεις

* ROS μελωδικό desktop (οδηγίες εγκατάστασης [εδώ](http://wiki.ros.org/melodic/Εγκατάσταση/Ubuntu))

<br/>

## Εγκατάσταση πακέτου

Δημιουργία χώρου εργασίας και κλώνος πακέτων:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

Ανοίξτε το αρχείο `view_model.launch`:

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



Και ορίστε την παράμετρο `use_sim_time` σε `true`, το αρχείο πρέπει να μοιάζει με αυτό:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

Στη συνέχεια εγκαταστήστε τις εξαρτήσεις:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## Εκτέλεση

Λήψη παραδείγματος αρχείου rosbag:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

Εκτέλεση rviz με το μοντέλο Spot:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

Στη συνέχεια σε ένα νέο τερματικό:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


Αναπαραγωγή αρχείου rosbag και θα δείτε το ρομπότ να κινείται:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


Ψάχνετε για δυνατότητες να λειτουργήσετε το Boston Dynamics Spot στην πραγματική ζωή; Έχουμε υπηρεσία [μαθήματος και τηλεχειρισμού](/online-courses/boston-dynamics-course/) γι' αυτό.