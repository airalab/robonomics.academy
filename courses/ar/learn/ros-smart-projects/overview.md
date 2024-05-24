---
title: مشاريع قائمة على ROS للمساحات الذكية
lastUpdate: Thu May 04 2023 12:53:19 GMT+0400 (Samara Standard Time)
description: مشاريع قائمة على ROS للمساحات الذكية
metaOptions: [تعلم]
defaultName: ROS-based projects for smart spaces
---

طوال 15 عامًا من التطوير، تم دمج إطار نظام التشغيل للروبوتات مع العديد من [الأجهزة الروبوتية المختلفة](https://robots.ros.org/)، وهناك المزيد من الحزم مع خوارزميات وأدوات تم تطويرها من قبل المجتمع. صدق أو لا تصدق، هناك الآن العديد من المشاريع، ونمت فوضوية أسلوب الوصف لمستودعاتها إلى حد كبير بحيث أصبح من الصعب جدًا العثور على مشاريع مخصصة لموضوع معين. 

هنا، ستجد قائمة متواضعة من المشاريع القائمة على ROS التي تعنى بالروبوتات وأجهزة الإنترنت الذكية التي تهدف للاستخدام في بيئة منزلية أو مكتبية. هذا الموضوع هو أحد أركان منصة Robonomics. هدفنا هو محاولة جلب هذه المشاريع على مسار مع Robonomics، من وجهة نظر التكامل التقني ومن وجهة نظر تطبيق مثير للاهتمام لهذه الأجهزة في اقتصاد الروبوت. لا تتردد في استخدام هذه القائمة في بحثك عن الأفكار والإلهام.

يمكنك التحقق من بعض الأمثلة على مشاريع ROS المدمجة مع Robonomics في [قسم التعلم](/learn).

<!-- حتى الآن (**أبريل 2021**), يتم توجيه Robonomics نحو إصدارات ROS **Melodic** و **Noetic**. يمكن أن تعمل الإصدارات الأقدم أيضًا، ولكن قد تكون هناك حاجة إلى عمل تكامل إضافي. في المستقبل، سيتم إضافة دعم لإصدار ROS 2. -->

يمكن الوصول إلى الموارد الرئيسية للبحث عن مستودعات وحزم ROS [هنا](https://index.ros.org/).

## محاكاة

قبل تحويل انتباهنا إلى الأجهزة فقط، يجدر بنا أن نتذكر أنه لعدد كبير من مشاريع ROS، هناك خيار لاختبارها في محاكاة. أداة النمذجة ثلاثية الأبعاد الأكثر شهرة للروبوتات المختلفة تحت ROS هي محاكي [Gazebo](http://gazebosim.org/) ومشروعه الفرعي، [Ignition](https://index.ros.org/r/ros_ign/). كلا المحاكيين يسمحان بنمذجة الأجهزة في بيئات داخلية وخارجية صعبة مختلفة، تعديل النوذج والبيئة نفسها، اختبار خوارزميات التحكم وتصحيح الأخطاء قبل التحول إلى الجهاز الحقيقي. أيضًا، هذه أداة ممتازة للتدريب والحالات التي يكون فيها الجهاز الحقيقي غير متوفر.

بشكل عام، هذا هو واحد من أفضل الخيارات لمحاولة تكامل Robonomics مع جهاز ROS دون أي مصاريف على الإطلاق. سيتطلب السيناريو الحقيقي فقط تعديلات بسيطة في الكود. بالنسبة لـ Gazebo، لدى Robonomics دليل مفصل يتكون من جزأين يغطيان [الإعدادات](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-1/) و[التكاملات](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-2/) (باستخدام طائرة بدون طيار كمثال). التحدي الرئيسي هو في العثور على نموذج جاهز (على سبيل المثال، [هنا](https://github.com/osrf/gazebo_models)) لـ Gazebo أو محاولة إنشاء نموذج خاص باستخدام [SDFormat](http://sdformat.org/) المطور للمحاكيات. 

## أجهزة الكمبيوتر ذات اللحة الواحدة واللوحات الأخرى

تعمل هذه اللوحات كمكون قاعدة لربط أجهزة أخرى بـ ROS، بشكل أساسي الحساسات وأجهزة التسجيل (الصوتية، الصورية، ومسجلات الفيديو، الكاميرات، حساسات درجة الحرارة، الضغط، وتركيز المواد.) لأن مفهوم المساحة الذكية يعني إنشاء [توأم رقمي](https://gateway.pinata.cloud/ipfs/QmNNdLG3vuTsJtZtNByWaDTKRYPcBZSZcsJ1FY6rTYCixQ/Robonomics_keypoint_March_2021.pdf) لكائنات البنية التحتية. أيضًا، يمكن للوحات أن تعمل كجهاز حوسبة رئيسي ومتحكم لبناء جهاز متنقل روبوتي. يتم تقديم قائمة باللوحات التي تدعم ROS أدناه:

| Name and link                                                                                         |                                    Description                                  | ROS version | Last update |
|:-----------------------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------|:-----------:|:-----------:|
|  [Raspberry Pi](http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Melodic%20on%20the%20Raspberry%20Pi)| single board computer; RaspPi versions 2, 3 and 4 are available                 |   melodic   |     2020    |
|    [Arduino](http://wiki.ros.org/rosserial_arduino)                                                   | single board computer                                                           |    noetic   |     2021    |
|    [Phidgets](http://wiki.ros.org/phidgets)                                                           | sets of boards, various sensors and devices: Ph sensor, LED, RFID, motor control|    noetic   |     2020    |
|   [Sense HAT](https://wiki.ros.org/sensehat_ros)                                                      | shield for RaspPi with a set of sensors and LED                                 |    noetic   |     2020    |
|     [Navio2](https://navio2.emlid.com/)                                                               | autopliot shield for RaspPi 2,3,4                                               |    noetic   |     2020    |
|     [OpenCR](http://wiki.ros.org/opencr)                                                              | robot controller                                                                |    noetic   |     2021    |

<br/>

## أجهزة المنزل الذكي والروبوتات المنزلية

تم تقديم هنا أجهزة ROS كان استخدامها الأولي للمنازل الذكية أو المكاتب. تتنوع القائمة بشكل كبير، من مكانس الكهرباء والمساعدة الروبوتية إلى أنظمة التحكم المنزلية.

| Name and link                                             | Description                                                 |          ROS version          | Last update |
|:---------------------------------------------------------:|-------------------------------------------------------------|:-----------------------------:|:-----------:|
|  [Care-O-bot 4](http://wiki.ros.org/care-o-bot)           | household robot-assistant; a simulation is available        |            melodic            |     2021    |
|     [Kobuki](http://wiki.ros.org/kobuki)                  | mobile platform with different use cases (e.g. a waiter)    |            melodic            |     2020    |
|    [QTrobot](http://wiki.ros.org/Robots/qtrobot)          | humanoid social robot                                       | kinetic (melodic can be used) |     2020    |
|      [Nao](http://wiki.ros.org/nao)                       | humanoid robot; a simulation is available                   |            Melodic            |     2020    |
|     [TIAGo](http://wiki.ros.org/Robots/TIAGo)             | service robot with a manipulator; a simulation is available |            kinetic            |     2020    |
|     [Roomba](https://github.com/AutonomyLab/create_robot) | robot vacuum cleaner                                        |            melodic            |     2020    |
|    [OpenHAB](http://wiki.ros.org/iot_bridge)              | home automation system                                      |            kinetic            |     2017    |
|     [Sesame](https://index.ros.org/p/sesame_ros/)         | smart lock                                                  |            melodic            |     2021    |

<br/>

## منصات الجوال والمنظمات

قبل كل شيء، يُعرف ROS بدعمه للروبوتات المتنقلة، من الطائرات بدون طيار إلى المناولات الصناعية، حيث تم إنشاء العديد من الحزم التي تحقق التحديد المكاني المتزامن والرسم الخرائط ([SLAM](http://wiki.ros.org/rtabmap_ros))، وتحل المهمة المباشرة والعكسية للحركة، [تخطيط المسار](https://moveit.ros.org/)، وما إلى ذلك. تتغلغل الروبوتات المتنقلة تدريجياً في الحياة اليومية، ولذلك فمن المؤكد أنه من المثير للاهتمام اختبار الروبوتات ROS الحالية في استخدامها داخل مساحة ذكية. القائمة العامة للمنصات المتنقلة القائمة على ROS كبيرة إلى حد ما، ولهذا السبب حددنا هنا تلك التي من المحتمل أن تكون مريحة للتشغيل في المنزل أو مكتب. 

| Name and link                                             | Description                                | ROS version | Last update |
|:---------------------------------------------------------:|--------------------------------------------|:-----------:|:-----------:|
|   [turtlebot](http://wiki.ros.org/turtlebot3)             | mobile platform tailored for ROS           |    noetic   |     2020    |
|    [GoPiGo3](http://wiki.ros.org/Robots/gopigo3)          | mobile robot based on RaspPi               |   melodic   |     2020    |
|    [LoCoBot](http://wiki.ros.org/locobot)                 | mobile manipulator                         |   kinetic   |     2020    |
|   [ROSbot 2.0](http://wiki.ros.org/Robots/ROSbot-2.0)     | mobile platform; a simulation is available |    noetic   |     2021    |
|     [VOLTA](http://wiki.ros.org/Robots/Volta)             | mobile platform; a simulation is available |   melodic   |     2021    |
|    [evarobot](http://wiki.ros.org/Robots/evarobot)        | mobile platform; a simulation is available |    noetic   |     2020    |
|    [Freight](http://wiki.ros.org/Robots/freight)          | mobile platform; a simulation is available |   melodic   |     2021    |
|      [PR2](http://wiki.ros.org/Robots/PR2)                | mobile platform; a simulation is available |   melodic   |     2021    |