---
title: बोस्टन डायनामिक्स स्पॉट का परिचालन करें
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: बोस्टन डायनामिक्स स्पॉट का परिचालन करें
metaOptions: [सीखें]
defaultName: Operate Boston Dynamics Spot
---

इस ट्यूटोरियल के साथ आप वास्तविक स्पॉट ने क्या किया था उसे सिमुलेशन में देख सकेंगे।

## आवश्यकताएं

* ROS मेलोडिक डेस्कटॉप (स्थापना निर्देशिका [यहाँ](http://wiki.ros.org/melodic/Installation/Ubuntu))

<br/>

## पैकेज स्थापित करें

कार्यक्षेत्र और क्लोन पैकेज बनाएं:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

`view_model.launch` फ़ाइल खोलें:

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



और `use_sim_time` पैरामीटर को `true` पर सेट करें, फ़ाइल इस प्रकार दिखनी चाहिए:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

फिर आवश्यकताएं स्थापित करें:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## चलाएं

उदाहरण रोसबैग फ़ाइल प्राप्त करें:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

स्पॉट मॉडल के साथ rviz चलाएं:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

फिर एक नए टर्मिनल में:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


रोसबैग फ़ाइल चलाएं और आप रोबोट को चलते हुए देखेंगे:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


वास्तविक जीवन में बोस्टन डायनामिक्स स्पॉट का परिचालन करने के लिए संभावनाएँ खोज रहे हैं? हमारे पास इसके लिए [कोर्स और रिमोट कंट्रोल](/online-courses/boston-dynamics-course/) सेवा है।