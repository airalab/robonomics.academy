---
title: "الدرس #3، إعداد وتهيئة وسيط MQTT"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: دورة مساعد المنزل
lessonNumber: 3
metaOptions: [تعلم، المنزل الذكي السيادي مع Robonomics و Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## مقدمة

بعد الانتهاء من تكوين Raspberry Pi، الخطوة التالية هي تثبيت وسيط MQTT على Raspberry Pi. كما ذكر أعلاه، يتولى الوسيط توجيه الرسائل بين عملاء MQTT المختلفين. ستقوم بتثبيت وتكوين Eclipse Mosquitto، وسيط MQTT مفتوح المصدر.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

بالإضافة إلى ذلك، ستكمل إعداد Home Assistant وإضافة تكامل MQTT إليه.

## تعليمات

<List type="numbers">

<li>


تثبيت وسيط Mosquitto

<List>
<li>

قم بتثبيت [وسيط Mosquitto](https://mosquitto.org/) على Raspberry Pi الخاص بك:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

أدخل اسم المستخدم الخاص بك (استخدم أي اسم تريده) وكلمة المرور (سيُطلب منك إدخال كلمة المرور بعد الأمر):

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

تحرير ملف التكوين:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

أضف ما يلي إلى الملف:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

احفظ الملف وأعد تشغيل الخدمة:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

وأخيرًا، تحقق من حالة الوسيط:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

يجب أن ترى شيئًا مثل هذا:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

إعداد Home Assistant و MQTT

<List>

<li>

افتح متصفح الويب وانتقل إلى <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. (بنفس عنوان IP الذي وجدته في الدرس السابق). كن على علم، أن عنوان Raspberry Pi قد يتغير مع مرور الوقت بسبب إعدادات الجهاز التوجيه. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

على الصفحة الأولى، أدخل أي اسم، اسم مستخدم، كلمة مرور تريدها وانقر على "<code>إنشاء حساب</code>"
</li>

<li>

ثم، قم بإدخال اسم لمنزلك وتحديد موقعك ونظام الوحدات. انقر على "<code>DETECT</code>" للعثور على موقعك وتحديد المنطقة الزمنية ونظام الوحدات بناءً على ذلك الموقع. إذا كنت لا ترغب في إرسال موقعك، يمكنك تعيين هذه القيم يدويًا.

</li>

<li>

في الشاشة التالية، سيعرض Home Assistant أي أجهزة تم اكتشافها على شبكتك. لا تقلق إذا رأيت عددًا أقل من العناصر المعروضة أدناه؛ يمكنك دائمًا إضافة الأجهزة يدويًا لاحقًا. الآن، ما عليك سوى النقر على <code>FINISH</code> وستكون على الشاشة الرئيسية لـ Home Assistant.

</li>

<li>

الآن نحتاج إلى تثبيت تكامل MQTT. اذهب إلى <code>Settings</code> -> <code>Devices & Services.</code>

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

اضغط على زر <code>ADD INTEGRATION</code> في الزاوية السفلية اليمنى. في النافذة المفتوحة، ابحث عن <code>MQTT</code>.

</li>

<li>

حدد MQTT وقم بإعداد عنوان الوسيط الخاص بك — <code>localhost</code> والمنفذ — <code>1883</code> واسم المستخدم وكلمة المرور الخاصة بك (نفس تلك التي أنشأتها سابقًا لـ Mosquitto Broker) ثم اضغط على <code>SUBMIT</code>.
</li>

</List>
</li>
</List>