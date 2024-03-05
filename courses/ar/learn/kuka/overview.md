---
title: توصيل جهاز التلاعب Kuka
description: توصيل جهاز التلاعب
metaOptions: [تعلم]
defaultName: Connect Kuka manipulator
---

يمكن العثور على فيديو مع مثال على العمل هنا:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## المتطلبات

<List>

<li class="flex">

ROS melodic، Gازيبو (تعليمات التثبيت [هنا](http://wiki.ros.org/melodic/التثبيت/Ubuntu))
</li>

<li>بعض الحزم الإضافية

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(تنزيل من [هنا](https://www.npackd.org/p/ipfs/0.4.22) وتثبيتها)

<LessonCodeWrapper language="bash" codeClass="big-code">
tar -xvzf go-ipfs_v0.4.22_linux-386.tar.gz
cd go-ipfs/
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>pip3

<LessonCodeWrapper language="bash">
sudo apt-get install python3-pip
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li>substrate-interface

<LessonCodeWrapper language="bash">
pip3 install substrate-interface
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics node (ملف ثنائي) (تنزيل أحدث إصدار [هنا](https://github.com/airalab/robonomics/releases))

</li>

<li>امتداد متصفح IPFS (غير ضروري)</li>

</List>

<br/>

***

<br/>

## التثبيت
تثبيت جهاز التلاعب Kuka وحزم التحكم

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## تشغيل نموذج gazebo

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

في نافذة جديدة

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## تشغيل robonomics
انتقل إلى المجلد الذي يحتوي على ملف robonomics وأنشئ شبكة robonomics المحلية:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

انتقل إلى [بوابة Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) وانتقل إلى العقد المحلي

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

ثم انتقل إلى الحسابات وأنشئ حساب `KUKA`. احفظ مفتاح الذاكرة النصية للحساب، ستحتاج إليه لاحقًا. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

أرسل بعض الوحدات إلى الحساب الجديد من أحد الحسابات الافتراضية.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## تشغيل ipfs
تشغيل ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## تشغيل حزمة التحكم
في دليل التكوين في حزمة التحكم kuka_control، تحتاج إلى إنشاء ملف تكوين بهذه الأسطر، حيث `<your_mnemonic>` هو بذرة الذاكرة المحفوظة:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


الآن يمكنك تشغيل النص التحكم:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## إرسال المعاملة
في [بوابة Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) انتقل إلى `Developer/Extrinsics`، غير `extrinsic` إلى `launch`. اختر حساب `KUKA` الخاص بك في `robot` وغير `param` إلى `Yes`. ثم اضغط على `Submit Transaction`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

في النافذة مع حزمة التحكم kuka_control سترى:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

ثم انتقل إلى `Developer/Chain State` على بوابة Robonomics، حدد `datalog` و `datalogItem((AccountId,u64)): RingBufferItem` في الاستعلام وأضف datalog `KUKA` بزر '+'

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

الآن يمكنك العثور على تلميحات الروبوت في IPFS عبر هذا الرابط مع تجزئتك `<hash>`: `https://gateway.ipfs.io/ipfs/<hash>`.

## استكشاف الأخطاء وإصلاحها

إذا لم يعمل `catkin_make` مع رسالة ��فيد بعدم العثور على MoveArm.h، جرب إزالة الأسطر الأربع الأخيرة في CMakeLists.txt في حزمة kuka_manipulator_gazebo:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

قم بعمل `catkin_make` بدون هذه الأسطر، ثم أعدها وقم بعمل `catkin_make` مرة أخرى.