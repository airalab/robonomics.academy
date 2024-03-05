---
title: تشغيل بوسطن ديناميكس سبوت
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: تشغيل بوسطن ديناميكس سبوت
metaOptions: [تعلم]
defaultName: Operate Boston Dynamics Spot
---

مع هذا البرنامج التعليمي ستتمكن من رؤية ما فعله سبوت الحقيقي في المحاكاة.

## المتطلبات

* ROS melodic desktop (تعليمات التثبيت [هنا](http://wiki.ros.org/melodic/التثبيت/Ubuntu))

<br/>

## تثبيت الحزمة

إنشاء مساحة عمل واستنساخ الحزم:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

افتح ملف `view_model.launch`

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



واضبط معلمة `use_sim_time` على `true`، يجب أن يبدو الملف مثل هذا:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

ثم قم بتثبيت التبعيات:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## تشغيل

الحصول على ملف rosbag مثالي:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

تشغيل rviz مع نموذج Spot:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

ثم في نافذة الطرفية الجديدة:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


تشغيل ملف rosbag وسترى الروبوت يتحرك:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


هل تبحث عن إمكانيات لتشغيل بوسطن ديناميكس سبوت في الحياة الحقيقية؟ لدينا [دورة وخدمة التحكم عن بعد](/online-courses/boston-dynamics-course/) لذلك.