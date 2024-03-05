---
title: توصيل الطائرة بدون طيار المتوافقة مع ROS
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: توصيل أي روبوت متوافق مع ROS تحت تحكم سلسلة الكتل روبونوميكس.
metaOptions: [تعلم]
defaultName: توصيل الطائرة بدون طيار المتوافقة مع ROS
---


## الجزء 1. إطلاق بواسطة المعاملة

**في هذه المقالة سنظهر أنه بمساعدة أدوات روبونوميكس يمكنك التحكم في أي جهاز متوافق مع ROS. سنجد حزمة محاكاة للطائرة بدون طيار عشوائية على الويب ونقوم بضبطها لتعمل مع روبونوميكس.**
**المتطلبات:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (دليل التثبيت [هنا](http://wiki.ros.org/melodic/التثبيت))

</li>

<li class="flex">

عقدة روبونوميكس (ملف ثنائي) (تحميل أحدث إصدار [هنا](https://github.com/airalab/robonomics/releases))

</li>

</List>

<br/>

يتم تقديم العملية بأكملها لترميز هذا الجزء من العرض التوضيحي في الفيديو أدناه.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. العثور على محاكاة
لنتصفح الويب. ابحث في Google عن `محاكي طائرة بدون طيار ROS`. من المحتمل أن يظهر لك الرابط الأول صفحة `tum_simulator` على [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

إنها قديمة إلى حد ما، لذا من الأفضل أن نجد فرعًا لنظامنا. ابحث في Google عن `tum_simulator Ubuntu 18 Gazebo 9 fork`. النتيجة الأولى هي مستودع GitHub [repo](https://github.com/tahsinkose/sjtu-drone) مع حزمة مناسبة. قم بتنزيلها

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

لا تنسى إضافة أمر المصدر إلى `~/.bashrc`:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

الآن يمكننا تشغيل المحاكاة لنرى ماذا نحتاج إلى فعله لأخذ الطائرة بدون طيار تحت تحكم سلسلة الكتل.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. تفقد مواضيع ROS
عند تشغيل المحاكاة، في علامة تبويب جديدة قم بتشغيل الأمر التالي لرؤية قائمة المواضيع المستخدمة من قبل الطائرة بدون طيار:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

لنلق نظرة على `/cmd_vel`, `/drone/takeoff` و `/drone/land`:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

كما يمكن رؤيته، يجب أن تكون هناك رسائل من أنواع `Twist` و `Empty`، وهي أجزاء من `std_msgs` و `geometry_msgs`، سنستخدم هذا في المتحكم. أوقف المحاكاة لفترة.

## 3. تنزيل حزمة المتحكم
على المستوى العالمي، الفرق الرئيسي عن المتحكم العادي لروبو�� ROS هو كتلة من الشيفرة، التي تفحص جميع المعاملات في الشبكة باستخدام [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/). الحزمة نفسها متاحة على GitHub. قم بتنزيلها وبناء مساحة العمل:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. إدارة الحسابات في DAPP
نظرًا لأننا نقوم بالاختبار، دعنا ننشئ عقدة شبكة روبونوميكس محلية مع ملف ثنائي لروبونوميكس:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**مهم!** قبل الإطلاقات التالية، من الضروري إزالة دليل `db` مع

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

بعد إطلاق ناجح، قم بإنشاء حسابات وفقًا لهذا الدليل. **لا تنسى حفظ بذور كل حساب وعنوان! ستحتاج إليها للمعاملات**. أضف هذه العناوين والبذور والمسار إلى ملف `config.config` في `robonomics_ws/src/robonomics_sample_controller/src`. قم بتحويل بعض الأموال (الوحدات) إلى هذه الحسابات:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. إطلاق الطائرة بدون طيار تحت تحكم سلسلة الكتل

حتى الآن يجب أن ت��ون العقدة المحلية لروبونوميكس الشيء الوحيد الذي يعمل. في نافذة الطرفية الفرعية، قم بتشغيل محاكاة الطائرة بدون طيار:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

قم بتشغيل النص:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

الآن يمكنك إرسال معاملة تشغيل الطائرة بدء الطيران. للقيام بذلك، يجب عليك استخدام الأمر الفرعي `write` من ملف روبونوميكس الثنائي:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

حيث يتم استبدال `<DRONE_ADDRESS>` و `<EMPLOYER’S_KEY>` بالسلاسل المحفوظة مسبقًا بشكل مناسب.
يجب أن ترى سجل `"Taking Off"` ويجب أن تبدأ الطائرة بالطيران:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

هكذا يمكن التحكم في أي روبوت متوافق مع ROS بواسطة تحكم سلسلة الكتل روبونوميكس.


##  الجزء 2. حفظ البيانات في سلسلة الكتل

**في هذا الجزء سنستمر في استخدام أدوات روبونوميكس لجعل الطائرة تتحكم بها سلسلة كتل. هذه المرة سنضيف إرسال البيانات إلى IPFS وخيارات تخزين التجزئة في السلسلة. أدناه هو التعليمات ومقاطع الشيفرة. المتطلبات:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (دليل التثبيت [هنا](http://wiki.ros.org/melodic/التثبيت))
</li>

<li class="flex">

IPFS 0.4.22 (تنزيل من [هنا](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) وتثبيته)
</li>

<li class="flex">

عقدة روبونوميكس (ملف ثنائي) (تحميل أحدث إصدار [هنا](https://github.com/airalab/robonomics/releases))
</li>

<li>الاعتماديات الخاصة بالبايثون:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

يتم تقديم العملية بأكملها لترميز هذا الجزء من العرض التوضيحي في الفيديو أدناه.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. إضافة الاعتماديات
إذا قمنا بتشغيل محاكاة ونظرنا إلى قائمة المواضيع (انظر الجزء 1)، سنرى أن هناك موضوعًا واحدًا يحتوي على بيانات الكاميرا الأمامية ويستخدم نوع الرسالة `sensor_msgs/Image`:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

لنحاول التقاط صورة كل ثانية واحدة وبعد الرحلة نشر هذه الصور على IPFS. إذا كنت قد أكملت البرنامج التعليمي الأول، فليس عليك تنزيل أي شيء آخر. إنه البرنامج النصي `drone_sample_controller_pictures.py`.

## 2. إدارة الحسابات في DAPP
كما تم في برنامج تعليمي سابق، قم بإنشاء عقد شبكة robonomics المحلية مع ملف robonomics الثنائي:
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**مهم!** قبل الإطلاقات التالية، من الضروري إزالة دليل `db` مع

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

بعد إطلاق ناجح، قم بإنشاء حسابات وفقًا لهذا الدليل. **لا تنسى حفظ بذور كل حساب وعنوان! ستحتاج إليها للمعاملات**. أضف هذه العناوين والبذور والمسار إلى ملف `config.config` في `robonomics_ws/src/robonomics_sample_controller/src`. قم بتحويل بعض الأموال (الوحدات) إلى هذه الحسابات:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. إطلاق
حتى الآن يجب أن ت��ون العقدة المحلية لروبونوميكس الشيء الوحيد الذي يعمل. في نافذة الطرفية الفرعية، قم بتشغيل محاكاة الطائرة بدون طيار:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

في إطلاق آخر، قم بتشغيل خادم ipfs:
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

قم بتشغيل النص:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

الآن يمكنك إرسال معاملة تشغيل الطائرة بالتصوير. للقيام بذلك، يجب عليك استخدام الأمر الفرعي `write` من Robonomics IO في ملف robonomics الثنائي:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

حيث يتم استبدال `<DRONE_ADDRESS>` و `<EMPLOYER’S_KEY>` بالسلاسل المحفوظة مسبقًا بشكل مناسب.
يجب أن ترى سجل `"Taking Off"` ويجب أن تبدأ الطائرة بالطيران والتقاط الصور:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

في وقت لاحق، عندما يتم الانتهاء من العمل، انتقل إلى بوابة Robonomics `Developer` -> `Chain state` وأضف بيانات داتالوج `DRONE` باستخدام زر `“+”` مع اختيار `datalog` كاستعلام حالة. تم حفظ ��اش IPFS للتلميتري في البلوكشين. لرؤية البيانات، ما عليك سوى نسخ الهاش وإضافته إلى عنوان البوابة المحلية [gateway](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) `localhost:8080/ipfs/`:


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>