---
title: تحكم في روبوت باكستر
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: تحكم في روبوت باكستر
metaOptions: [تعلم]
defaultName: Control Baxter robot
---
مثال على كيفية عمله:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## المتطلبات:

<List>

<li class="flex">

ROS Melodic + Gazebo (دليل التثبيت [هنا][db2])  

</li>

<li>حزم إضافية:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effأوt-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS حتى 0.6.0 (تحميل من [هنا][db3] وتثبيت)

</li>

<li> حزم Python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

تحميل Robonomics node الأحدث [هنا][db4] (آخر إصدار تم اختباره v1.1)

</li>

<li>امتداد متصفح IPFS (غير ضروري)</li>

</List>

<br/>

## 0. تثبيت امتداد CV Bridge لـ python3

<List>

<li> إنشاء مساحة عمل catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> إرشاد catkin لتعيين متغيرات cmake. استخدم الإصدار الحالي من `python`. بالنسبة لي، هو `python3.6`

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> استنساخ cv_bridge src:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> العثور على إصدار cv_bridge في مستودعك:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> التحقق من الإصدار الصحيح في مستودع جيت. في حالتنا هو 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> بناء:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> توسيع البيئة بحزمة جديدة:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> اختبار:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

## 1. تحميل حزم المحاكاة والتحكم
تحميل الحزم:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
git checkout old_version
pip3 install -r requirements.txt
cd ../..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

لا تنسى إضافة أمر المصدر:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. بدء المحاكاة
لنبدأ عالم gazebo ونضع بكسرنا فيه:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

افتح نافذة إضافية في الطرفية:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

يمكنك وضع بعض النماذج أمام بكسرنا. سيكون الأمر أكثر إثارة.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. إدارة الحسابات في DAPP

نظرًا لأننا في مرحلة الاختبار، دعنا نقوم بإنشاء شبكة robonomics المحلية باستخدام ملف robonomics الثنائي. انتقل إلى المجلد الذي يحتوي على ملف robonomics وقم بتشغيله:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

انتقل إلى [بوابة Robonomics Parachain][db5] وانتقل إلى العقد المحلي

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

انتقل إلى الحسابات وأنشئ حسابات __باكستر__ و __صاحب العمل__ (ليس من الضروري وجود __روبوت__)

__مهم!__ انسخ **الكلمة السرية** و **العنوان** لكل حساب (لنسخ العنوان، انقر على رمز الحساب). **الكلمة السرية** هي المفتاح الخاص للحساب.
قم بتحويل بعض الأموال (الوحدات) إلى هذه الحسابات:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

أضف **الذاكرة** و**العنوان** الخاص بـ Baxter إلى `config.yaml` في `robot_ws/src/Baxter_simulation_controller/config/`

## 4. بدء المحاكاة

في نافذة جديدة قم بتشغيل:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

افتح نافذة الطرفية الفرعية وابدأ *حزمة التحكم*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

الآن يمكنك إرسال معاملة تقوم بتشغيل Baxter للحركة وجمع البيانات. للقيام بذلك، يمكنك استخدام نفس [بوابة Robonomics Parachain][db5]. اذهب إلى **المطور->المستخرجات** وحدد حساب عمل بكسر، مستخرج `launch`، حساب بكسر كحساب هدف و`نعم` كمعلمة. قدم المستخرج.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

يجب أن يبدأ الروبوت بالحركة. لن يقبل الأوامر من حسابات أخرى ولا الأوامر بمعلمة `لا`.
يجب أن ترى ما يلي:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

عندما ينتهي العمل، اذهب إلى بوابة Robonomics لـ `المطور > حالة السلسلة`. اختر `datalog.datalogItem(AccountId,u64)` في **استعلام الحالة**. إذا كنت ترغب في عرض جميع datalog's، ثم قم بإيقاف `خيار الشمول` وأضف عرض رسالة datalog بكسر باستخدام زر "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

الآن تم حفظ هاش IPFS للتلميحات والصور في البلوكشين. لرؤية البيانات، ما عليك سوى نسخ الهاش ولصقه في شريط البحث مع عنوان URL: gateway.ipfs.io/ipfs/<br ضع هاشك هنا >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

انقر على __عرض على البوابة__ وهذا كل شيء!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## محاكاة باكستر v2.0

مثال على كيفية عمله:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## المتطلبات:

<List>

<li class="flex">


ROS Melodic + Gazebo (دليل التثبيت [هنا][db2])  

</li>

<li>حزم إضافية:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS حتى 0.6.0 (تحميل من [هنا][db3] وتثبيت)

</li>

<li> حزم Python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics node (ملف ثنائي) (تحميل أحدث [إصدار][db4] هنا)

</li>

<li class="flex">

إنشاء حسابات __Baxter__ و __Employer__ على **بوابة Robonomics** (يمكنك العثور على البرنامج التعليمي ["إنشاء حساب على بوابة Robonomics"][db8] هنا).
</li>

<li>امتداد متصفح IPFS (غير ضروري)</li>

</List>

<br/>

## 0. تثبيت امتداد CV Bridge لـ python3

<List>

<li> إنشاء مساحة عمل catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> إرشاد catkin لتعيين متغيرات cmake. استخدم الإصدار الحالي من `python`. بالنسبة لي، هو `python3.6`

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> استنساخ cv_bridge src:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> العثور على إصدار cv_bridge في مستودعك:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> التحقق من الإصدار الصحيح في مستودع جيت. في حالتنا هو 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> بناء:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> توسيع البيئة بحزمة جديدة:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> اختبار:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

<br/>

## 1. تحميل حزم المحاكاة والتحكم
سنحتاج إلى إنشاء 2 مساحات عمل - واحدة لحزم Baxter الرئيسية والأخرى لبرنامج التحكم الرئيسي.
المساحة العمل الأولى. إنه برنامج التحكم الرئيسي. سيعمل تحت python3.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

المساحة العمل الثانية. ستكون هناك جميع حزم Baxter. المحاكاة قديمة جدًا، لذا قد تعمل فقط تحت python2.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

تم إنشاء هذه الحزم لـ ROS indigo. يجب علينا تغيير بعض الملفات لتشغيلها على ROS melodic.
سنستخدم ملفات **patch**.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

و لنقم ببناء جميع حزمنا:  
أولاً قم ببناء حزم Baxter

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

ثم عد إلى المساحة العمل الأولى وقم ببنائها أيضًا:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

لا تنسى إضافة أمر المصدر:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. بدء المحاكاة
### لنبدأ محاكاتنا:
أولاً انتقل إلى `robot_ws` وانسخ وعدل baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

ابحث عن عنوان IP المحلي الخاص بك باستخدام الأمر:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

قم بتحرير القيم التالية في `baxter.sh` :

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- your_ip - ضع عنوان IP المحلي الخاص بك. انظر `ip a`
- ros_version - على سبيل المثال "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

قم بتشغيل نص الأوامر baxter مع sim المحدد:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

يمكنك وضع بعض النماذج أمام بكسرنا. سيكون الأمر أكثر إثارة.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. إدارة الحسابات في DAPP

نظرًا لأننا في مرحلة الاختبار، دعنا نقوم بإنشاء شبكة robonomics المحلية باستخدام ملف robonomics الثنائي. انتقل إلى المجلد الذي يحتوي على ملف robonomics وقم بتشغيله:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

انتقل إلى [بوابة Robonomics Parachain][db5] وانتقل إلى العقد المحلي

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

انتقل إلى الحسابات وأنشئ حسابات __Baxter__ و __Employer__.

يمكنك العثور على الدليل "إنشاء حساب على بوابة Robonomics" [هنا][db8]

__مهم!__ انسخ **الكلمة السرية** و **العنوان** لكل حساب (لنسخ العنوان، انقر على رمز الحساب). **الكلمة السرية** هي المفتاح الخاص للحساب.

قم بتحويل بعض الأموال (الوحدات) إلى هذه الحسابات:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

أضف **Mnemonic** و **address** لـ Baxter إلى `config.yaml` في `robonomics_ws/src/Baxter_simulation_controller/config/`

## 4. بدء المحاكاة

في نافذة جديدة قم بتشغيل:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

افتح نافذة الطرفية الفرعية وابدأ *حزمة التحكم*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

الآن يمكنك إرسال معاملة تشغيل Baxter للبدء في التحرك وجمع البيانات. للقيام بذلك، يمكنك استخدام نفس البوابة [بوابة Robonomics Parachain][db5]. انتقل إلى **Developer->Extrinsics** وحدد حساب موظف Baxter، معامل `launch`، حساب Baxter كحساب هدف و `نعم` كمعلمة. قدم المعاملة.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

يجب أن يبدأ الروبوت بالحركة. لن يقبل الأوامر من حسابات أخرى ولا الأوامر بمعلمة `لا`.
يجب أن ترى ما يلي:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

عندما ينتهي العمل، انتقل إلى بوابة Robonomics لـ `Developer > Chain state`. اختر `datalog.datalogItem(AccountId,u64)` في **state query**. إذا كنت ترغب في عرض جميع datalog's، ثم قم بإيقاف `include option` وأضف عرض رسالة Baxter's datalog باستخدام زر "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

الآن تم حفظ الهاش الخاص بالتلميتر والصور في بلوكشين. لرؤية البيانات، ما عليك سوى نسخ الهاش ولصقه في شريط البحث مع عنوان URL:  
#### gateway.ipfs.io/ipfs/< ضع هاش الخاص بك هنا>

هذا كل شيء!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/التثبيت>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>