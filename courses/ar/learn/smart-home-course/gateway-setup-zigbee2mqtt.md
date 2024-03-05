---
title: "الدرس رقم 4a، إعداد البوابة: Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: دورة مساعد المنزل
lessonNumber: 4
metaOptions: [تعلم، المنزل الذكي السيادي مع Robonomics و Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## مقدمة

هذا هو إعداد سيناريو لربط الأجهزة باستخدام محول Zigbee وجسر Zigbee2MQTT. إذا كان لديك [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) (الذي يحتوي على جميع البرامج الثابتة اللازمة)، يمكنك ببساطة المتابعة مع هذه التعليمات. ومع ذلك، إذا كان لديك محول آخر، فأول شيء تحتاج إلى القيام به هو تفليشه ببرنامج Zigbee2MQTT. يمكنك العثور على التعليمات لجهازك [هنا](https://www.zigbee2mqtt.io/guide/adapters/).

سوف تحتاج أيضًا إلى جهاز ذكي لاختبار اتصاله بمساعد المنزل.


## تعليمات

<List type="numbers">

<li>

تثبيت البرنامج

<List>

  <li>
    قم بإعداد مستودع بيئة تشغيل Node.js وتثبيته مع التبعيات المطلوبة:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    تحقق من أن الإصدارات الصحيحة من Node.js (v14.X، V16.x، V17.x أو V18.X) ومدير الحزم <code class="nowb">npm</code> (6.X، 7.X أو 8.X) المثبتة تلقائيًا مع Node.js، قد تم تثبيتها:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    إنشاء دليل لـ Zigbee2MQTT وتعيين مالك المستخدم له:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    استنساخ مستودع Zigbee2MQTT:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    تثبيت الاعتماديات. لاحظ أن <code>npm ci</code> قد ينتج بعض التحذيرات التي يمكن تجاهلها.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

الاتصال وتكوين المحول

<List>

<li>

قم بتوصيل محول Zigbee بـ Raspberry Pi. ثم تحتاج إلى العثور على موقع العصا. لهذا اكتب الأمر التالي:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

يجب أن يكون الإخراج مشابهًا لـ:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

في هذا المثال، دليل اتصال stick هو <code>ttyUSB0</code>.
</li>

<li>

قم بتحرير ملف <code>configuration.yaml</code> قبل بدء Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

تحتاج التكوين الأساسي إلى بعض التعديلات. قم بتغيير البيانات التالية:

\- <code>homeassistant:</code> إلى <code>true</code>، سيتصل تلقائيًا بالمستشعرات إلى Home Assistant;

\- ألغ تعليق <code>user</code> و <code>password</code> تحت <code>mqtt</code> وأدخل اسم المستخدم وكلمة المرور الخاصة بك (كسلسلة، بعلامات اقتباس) من وسيط MQTT;

\- قم بتغيير المنفذ في <code>serial</code> -> <code>port</code> إلى دليل اتصال stick. في هذا المثال: <code>/dev/ttyUSB0</code>.

يجب أن يبدو ملف التكوين المعدل كالتالي:

<LessonCodeWrapper language="yaml">
# Home Assistant integration (MQTT discovery)
homeassistant: true
# allow new devices to join
permit_join: true
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: 'YOUR_USERNAME'
  password: 'YOUR_PASSWORD'
# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/YOUR_PORT
</LessonCodeWrapper>


**إضافي:**

إذا كان لديك بالفعل محول Zigbee أو بوابة نشطة في منزلك، وأنت الآن تكون على وشك تكوين stick آخر، فسيتعارضان مع بعضهما البعض. لحل هذه المشكلة، تحتاج إلى تغيير القناة على الجهاز الجديد. لهذا، أضف السلاسل التالية إلى نهاية ملف التكوين:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

بدء Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

إذا بدأ بنجاح، سترى شيئًا مثل:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

جهاز الزوجية

<List>

<li>

حان الوقت لربط جهازك الذكي. أكثر الطرق شيوعًا لتبديل جهاز إلى وضع الاتصال هو الاستمرار في الضغط على زر الطاقة الخاص به أو تشغيله/إيقافه 5 مرات. تأكد من تشغيل Zigbee2MQTT.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

عندما يتصل الجهاز، يجب أن ترى رسالة مثل:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

تذكر معرف الجهاز: في هذا المثال — <code>0x00158d0003eeeacf</code>.

الآن يجب أن ترى هذا الجهاز مع معرفه في واجهة المستخدم الرئيسية لمساعد البيت. اذهب إلى <code>الإعدادات</code> -> <code>الأجهزة والخدمات</code> -> <code>الأجهزة</code> للتحقق من ذلك:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

بعد إضافة جميع الأجهزة، يمكنك إيقاف البرنامج باستخدام <code>Ctrl+C</code>. إذا كنت لا ترغب في إضافة المزيد من الأجهزة، يمكنك فتح ملف التكوين مرة أخرى وتعيين <code>permit_join:</code> إلى <code>false</code>.
</li>

</List>
</li>

<li>

إنشاء خدمة للتشغيل التلقائي

<List>

<li>

الآن ت��تاج إلى إنشاء خدمة. أنشئ الملف:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

أضف ما يلي إلى هذا الملف مع تغيير <code>YOUR_RASPPI_USERNAME_HERE</code>. إذا كنت لا تعرف اسم المستخدم الخاص بك، استخدم أمر <code>whoami</code>.

<LessonCodeWrapper language="bash">
[Unit]
Description=zigbee2mqtt
After=network.target 
[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=YOUR_RASPPI_USERNAME_HERE
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>
</li>

<li>

تحقق من أن التكوين يعمل:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

يجب أن يكون الإخراج مشابهًا لـ:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

قم بتمكين الخدمة لبدء Zigbee2MQTT تلقائيًا عند التمهيد:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>