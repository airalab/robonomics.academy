---
title: ボストンダイナミクススポットを操作する
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: ボストンダイナミクススポットを操作する
metaOptions: [学ぶ]
defaultName: Operate Boston Dynamics Spot
---

このチュートリアルを使うと、シミュレーションで実際のスポットが何をしたかを見ることができます。

## 要件

* ROSメロディックデスクトップ（インストール手順は[こちら](http://wiki.ros.org/melodic/インストール/Ubuntu)）

<br/>

## パッケージをインストール

ワークスペースを作成し、パッケージをクローンする:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

`view_model.launch`ファイルを開く:

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



そして`use_sim_time`パラメータを`true`に設定し、ファイルは次のようになります:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

その後、依存関係をインストールする:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## 実行

例のrosbagファイルを取得する:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

Spotモデルを使用してrvizを実行する:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

その後、新しいターミナルで:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


rosbagファイルを再生し、ロボットが動くのを見ることができます:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


現実世界でボストンダイナミクススポットを操作する可能性を探していますか？[コースとリモートコントロール](/online-courses/boston-dynamics-course/)サービスを提供しています。