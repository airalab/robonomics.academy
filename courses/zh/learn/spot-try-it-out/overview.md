---
title: 操作波士顿动力的Spot机器人
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: 操作波士顿动力的Spot机器人
metaOptions: [学习]
defaultName: Operate Boston Dynamics Spot
---

通过本教程，您将能够在模拟中看到真实的Spot机器人的操作。

## 要求

* ROS Melodic桌面版（安装说明[在这里](http://wiki.ros.org/melodic/安装/Ubuntu)）

<br/>

## 安装软件包

创建工作空间并克隆软件包：
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

打开`view_model.launch`文件：

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



并将`use_sim_time`参数设置为`true`，文件应如下所示：

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

然后安装依赖项：

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## 运行

获取示例rosbag文件：

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

使用Spot模型运行rviz：

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

然后在新的终端中：

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


播放rosbag文件，您将看到机器人移动：

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


正在寻找在现实生活中操作波士顿动力的Spot机器人的可能性？我们为此提供[课程和远程控制](/online-courses/boston-dynamics-course/)服务。