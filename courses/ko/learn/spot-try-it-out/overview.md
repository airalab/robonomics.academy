---
title: 보스턴 다이내믹스 스팟 운영
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: 보스턴 다이내믹스 스팟 운영
metaOptions: [배우다]
defaultName: Operate Boston Dynamics Spot
---

이 튜토리얼을 통해 시뮬레이션에서 실제 스팟이 한 것을 볼 수 있습니다.

## 요구 사항

* ROS 멜로딕 데스크톱 (설치 지침 [여기](http://wiki.ros.org/melodic/설치/Ubuntu))

<br/>

## 패키지 설치

작업 공간을 만들고 패키지를 복제하십시오:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

`view_model.launch` 파일을 엽니다:

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



그리고 `use_sim_time` 매개 변수를 `true`로 설정하십시오. 파일은 다음과 같아야 합니다:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

그런 다음 종속성을 설치하십시오:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## 실행

예제 rosbag 파일을 가져오십시오:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

스팟 모델로 rviz를 실행하십시오:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

그런 다음 새 터미널에서:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


rosbag 파일을 재생하면 로봇이 움직이는 것을 볼 수 있습니다:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


실제로 보스턴 다이내믹스 스팟을 운영할 수 있는 가능성을 찾고 계십니까? [코스 및 원격 제어](/online-courses/boston-dynamics-course/) 서비스가 있습니다.