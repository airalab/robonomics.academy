---
title: توصيل مسبار الفضاء كيوريوسيتي على المريخ
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: توصيل مسبار الفضاء كيوريوسيتي على المريخ تحت تحكم سلسلة كتل Robonomics.
metaOptions: [تعلم]
defaultName: اتصل Mars Curiosity Rover
---

**دعنا نرى كيف يسمح تحكم سلسلة كتل Robonomics بتحريك مسبار الفضاء كيوريوسيتي. المتطلبات:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (دليل التثبيت [هنا](http://wiki.ros.org/melodic/التثبيت))

</li>


<li>حزم إضافية:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS حتى [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[IPFS Companion Extension](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

عقد Robonomics (ملف ثنائي) (قم بتنزيل الإصدار الأحدث [هنا](https://github.com/airalab/robonomics/releases). تم اختبار هذا البرنامج التعليمي بنجاح على الإصدار 1.1)

</li>

</List>

<br/>

هنا الفيديو الذي يظهر إطلاقًا ناجحًا:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. إعداد محاكاة

قم بتنزيل حزمة مسبار الفضاء كيوريوسيتي:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

نحتاج إلى ضبط الظروف الابتدائية لجعل مسبارنا يظهر بسلاسة:

<List>

<li>انتقل إلى

`src/master/curiosity_mars_rover_description/worlds` وقم بتغيير السطر 14 من الملف` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>انتقل إلى

`src/master/curiosity_mars_rover_description/launch` وقم بتغيير السطر 4 في الملف `mars_curiosity_world.launch` إلى 
`<arg name="paused" default="false"/>`

لا تنس إضافة أمر المصدر إلى `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> أعد تشغيل وحدة التحكم وقم بتشغيل المحاكاة:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

ملاحظة: إذا كانت الصورة مظلمة، على سبيل المثال، مظلمة، قم بتغيير `Camera` إلى `Orthorgraphic` في شريط أدوات Gazebo.
يمكن إغلاق المحاكاة لفترة مؤقتة.

------------

<br/>

### 2. تنزيل حزمة تحكم Robonomics
لتنزيل حزمة تحكم لمسبار الفضاء، اكتب في الطرفية:

<LessonCodeWrapper language="bash" codeClass="long-code">
cd ~/robonomics_ws/src
git clone https://github.com/PaTara43/robonomics_sample_controller
cd robonomics_sample_controller
pip3 install -r requirements.txt
pip3 install rospkg
cd ..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3 # The controller supports python3
</LessonCodeWrapper>


------------

<br/>

### 3. إدارة الحسابات في DAPP
نظرًا لأننا نقوم بالاختبار، دعنا نقوم بإنشاء شبكة Robonomics المحلية باستخدام ملف Robonomics الثنائي:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="تشغيلning node"/>


انتقل إلى [بوابة Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) وانتقل إلى العقد المحلي 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


انتقل إلى الحسابات وأنشئ حسابات **CURIOSITY** و **EMPLOYER**.

**مهم**! انسخ عنوان كل حساب (لنسخ العنوان، انقر فوق أيقونة الحساب) وكلمة الإدخال البذري لحساب كيوريوسيتي (التي تم الحصول عليها أثناء إنشاء الحساب)
قم بتحويل بعض الأموال (الوحدات) إلى هذه الحسابات. يمكنك قراءة المزيد حول الحسابات في Robonomics [هنا](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


أضف هذه العناوين وكلمة الإدخال وعنوان العقد (الذي يعتمد على `ws://127.0.0.1:9944` افتراضيًا لعقد المطور) في `config.config` في `robonomics_ws/src/robonomics_sample_controller/src`. بدون علا��ات اقتباس.

------------

<br/>

### 4. بدء Robonomics

قبل المضي قدمًا، تأكد من أنك قد قمت بتثبيت [ملحق IPFS Companion](https://github.com/ipfs/ipfs-companion).

في طرفية منفصلة، قم بتشغيل IPFS:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #يجب عليك فقط القيام بذلك مرة واحدة لكل تثبيت IPFS
ipfs daemon
</LessonCodeWrapper>

في طرفية منفصلة أخرى، قم بتشغيل محاكاة كيوريوسيتي إذا لم تكن مباشرة:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

انتظر حتى يبقى ثابتًا

في طرفية أخرى، قم بتشغيل الوحدة التحكم:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

الآن يمكنك إرسال معاملة تشغيل المسبار لبدء التحرك وجمع البيانات. للقيام بذلك، يمكنك استخدام نفس [بوابة Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/).
انتقل إلى `Developer->Extrinsics` وحدد حساب كيوريوسيتي كحساب موظف، معامل `launch`، حساب كيوريوسيتي كحساب هدف، و `نعم` كمعلمة.
قدم المعاملة.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

يجب أن يبدأ الروبوت في التحرك. لن يقبل الأوامر من حسابات أخرى ولا الأوامر بمعلمة `لا`. سيتحرك المسبار حوله ويجمع البيانات لمدة حوالي د��يقة.
في وقت لاحق، عندما يتم الانتهاء من العمل:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


انتقل إلى `Developer -> Chain state` على بوابة Robonomics واحصل على بيانات السجلات `CURIOSITY` باستخدام زر “+” مع تحديد `datalog -> RingBufferItem` كاستعلام: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


الآن تم حفظ تجزئة IPFS للبيانات التلقائية في سلسلة الكتل. لرؤية البيانات، قم ببساطة بنسخ التجزئة والبحث عنها على بوابة:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


هذه البيانات التلقائية محفوظة في تخزين مركزي، وتم حفظ تجزئتها في سلسلة كتل!
