---
title: "الدرس رقم 5، خيارات تكوين توصيل الحساسات"
description: 'خيارات تكوين توصيل الحساسات'
lessonNumber: 5
metaOptions: [تعلم, توصيل الاستشعار وشبكة الاستشعار اللامركزية]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

حاليًا يتم دعم حساس SDS011 فقط بشكل افتراضي، ولكن من السهل جدًا إضافة حساسات أخرى وقد قمنا بإعداد بعض التكوينات الجاهزة. يمكن العثور على نظرة عامة كاملة على حقول التكوين [هنا](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config). سنلقي نظرة على عدة سيناريوهات تكوين متقدمة.

## السيناريو رقم 1: توصيل SDS011 بمنفذ سلسلة

أسهل وأكثر الطرق مباشرة لتوصيل الحساس بالشبكة هو استخدام منفذ السلسلة. 

<List type="numbers">

<li>

قم بتوصيل اللوحة بمنفذ USB، وابحث عن المسار إليها. في هذا المثال هو `ttyUSB0`


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

أنشئ ملف تكوين جديد أو حرر الموجود بالفعل بالتالي. لا تنسى إدراج مسار قاعدة البيانات الخاصة بك في الحقل `db_path`، ومسار اللوحة في الحقل `port` وخط العرض / خط الطول للحساس في الحقل `geo`.

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation":{
      "enable":true,
      "port":"/dev/<YOUR/PATH/TO/BOARD>",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": false,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>ابدأ وحدة توصيل الحساسات.</li>

</List>


## السيناريو رقم 2: توصيل SDS011 عبر MQTT

<RoboAcademyNote type="okay" title="INFO">لا يعمل برنامج تشغيل حساسات Robonomics مع MQTT. هذه الإعدادات للحساسات الإضافية التي تعمل من خلال MQTT.
</RoboAcademyNote>

<List type="numbers">

<li>

قم بتثبيت وتكوين وسيط MQTT (مثل [Mosquitto](https://mosquitto.org/) أو ما شابه).

</li>

<li>

أنشئ ملف تكوين جديد أو حرر الموجود بالفعل بالتالي. أدخل:

- مسار قاعدة البيانات الخاصة بك في الحقل `db_path`

- مسار اللوحة في الحقل `port` في قسم `comstation`

- خط العرض / خط الطول للحساس في الحقل `geo`

- مضيف وسيط MQTT في الحقل `host` في قسم `mqttstation`

- منفذ وسيط MQTT في الحقل `port` في قسم `mqttstation`

- موضوع حيث يرسل الحساسات بياناتها في الحقل `topic`

- `اسم المستخدم` و `كلمة المرور` للاتصال بالوسيط إذا كان ذلك مطلوبًا.


<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation":{
      "enable":false,
      "port":"/dev/<YOUR/PATH/TO/BOARD>",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": false,
      "port": 8001
   },
   "mqttstation": {
      "enable": true,
      "host": "[YOUR_MQTT_BROKER_HOST]",
      "port": "[YOUR_MQTT_BROKER_PORT]",
      "topic": "[MQTT_TOPIC_OF_SENSORS]",
      "username": "YOUR_MQTT_USERNAME",
      "password": "YOUR_MQTT_PASSWORD"
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>ابدأ وحدة توصيل الحساسات.</li>

</List>

## سيناريو #3: نشر بيانات الحساسات مع داتالوج روبونوميكس

يوضح هذا السيناريو كيفية تحميل بيانات الحساس الخاص بك إلى سلسلة الكتل روبونوميكس باستخدام وظيفة الداتالوج. الداتالوج هو ما يعادل التلمتري في تقنيات الويب3. تهدف الوظيفة إلى إنشاء لقطة لبيانات الحساس في كدورة زمنية معينة، مما يزيد من موثوقية البيانات. لا يهم كيفية جمع البيانات: عبر HTTP، MQTT أو COM.

<RoboAcademyNote type="warning" title="WARNING">عليك أن تمتلك رموز XRT على حسابك
</RoboAcademyNote>

<List type="numbers">

<li>

أنشئ ملف تكوين جديد أو حرر الموجود بالفعل بالتالي. أدخل:

- مسار قاعدة البيانات الخاصة بك في الحقل `db_path`

- مسار اللوحة في الحقل `port` في قسم `comstation`

- خط العرض / خط الطول للحساس في الحقل `geo`

- مفتاح خاص من حساب سلسلة الكتل روبونوميكس إلى حقل `suri`

- فترة زمنية لتجميع السجل بالثواني في حقل `dump_interval`.

- (اختياري) بيانات الاعتماد لتحميل الملفات إلى [Temporal.Cloud](http://Temporal.Cloud) في حقول `temporal_username` و`temporal_password`

- (اختياري) بيانات الاعتماد لتحميل الملفات إلى Pinata في حقول `pinata_api` و`pinata_secret`

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "[YOUR/PATH/TO/DATABASE]"
   },
   "comstation":{
      "enable":false,
      "port":"/dev/[YOUR/PATH/TO/BOARD]",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": true,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": true,
      "suri": "[YOUR_PRIVATE_KEY]",
      "dump_interval": TIME_PERIOD,
      "temporal_username": "YOUR_TEMPORAL_USERNAME",
      "temporal_password": "YOUR_TEMPORAL_PASSWORD",
      "pinata_api": "YOUR_PINATA_API_KEY",
      "pinata_secret": "YOUR_PINATA_SECRET"
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": true,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>بدء تشغيل وحدة اتصال أجهزة الاستشعار.</li>

</List>