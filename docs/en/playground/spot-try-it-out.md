---
title: Operate Boston Dynamics Spot
description: Operate Boston Dynamics Spot
docId: 7
metaOptions: [Playground]
---

With this tutorial you will be able to see in simulation what real Spot did.

## Requirements

* ROS melodic desktop (installation instructions [here](http://wiki.ros.org/melodic/Installation/Ubuntu))

<br/>

## Install package

Create workspace and clone packages:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

Open the `view_model.launch` file:

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



And set `use_sim_time` parameter to `true`, file must look like this:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

Then install dependencies:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## Run

Get example rosbag file:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

Run rviz with the Spot model:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

Then in a new terminal:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


Play rosbag file and you will see the robot move:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>