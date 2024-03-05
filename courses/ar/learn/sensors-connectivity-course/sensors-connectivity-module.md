---
title: "الدرس #4، وحدة توصيل الحساسات"
description: 'وحدة توصيل الحساسات'
lessonNumber: 4
metaOptions: [تعلم, توصيل الاستشعار وشبكة الاستشعار اللامركزية]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

في المقالات التالية، ستتعلم المزيد حول وحدة توصيل الحساسات. بعد ذلك، يمكنك الانضمام لاستضافة شبكة الحساسات اللامركزية الخاصة بنا أو إنشاء خريطة حساسات خاصة بك.

## حول وحدة توصيل الحساسات

تستخدم شبكة الحساسات اللامركزية وحدة Python `sensors-connectivity` ([رمز المصدر](https://github.com/airalab/sensors-connectivity)). تتيح هذه الوحدة لأي مستخدم إطلاق خادمه الخاص لاستقبال البيانات من الحساسات ومعالجتها بشكل أفضل. في الوقت الحالي، قام المطورون بإطلاق عدة خوادم من هذا النوع ويمكن لأي حساس إرسال البيانات إليها. تشغيل خوادم متعددة يجنب فقدان البيانات في حالة وجود مشاكل في أحدها، حيث ستقوم الحساسات بالتبديل من خادم غير عامل إلى خادم يعمل. بشكل أساسي، يمكنك أن تفكر في وحدة توصيل ا��حساسات كصندوق أسود بمدخل واحد (بيانات الحساس) وعدة مخارج.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

وحدة توصيل الحساسات هي مجموعة من المحطات (station_1، station_2 ... station_n)، التي تستقبل بيانات متنوعة، بما في ذلك بيانات من الحساسات عبر بروتوكول HTTP. كما يمكن أن تكون الحساسات متصلة بالكمبيوتر عبر USB أو أي مصدر بيانات آخر. تتم معالجة البيانات التي تم استقبالها من المحطات بواسطة الوحدة وتمريرها إلى المغذيات (feeder_1، feeder_2 ... feeder_n). تقوم المغذيات بإرسال البيانات المعالجة إلى المستخدم؛ في حالتنا يتم إرسال البيانات إلى القناة اللامركزية IPFS. 

خريطة [شبكة الحساسات اللامركزية](https://sensors.robonomics.network/#/) هي تطبيق لامركزي (dapp) يعمل على الكمبيوتر. يقرأ البيانات من القناة IPFS ويعرضها على الخريطة. لا يوجد اتصال مباشر بين الخادم الذي يجمع البيانات من الحساسات والخريطة التي يراها المستخدم؛ يتم نقل البيانات بينهما عبر IPFS pubsub، مما يقلل من الضغط على الخوادم. 

بالإضافة إلى ذلك، يتم تخزين ملف بالبيانات للفترة الزمنية الأخيرة في IPFS من وقت لآخر، ويتم تسجيل هاش لهذه البيانات على البلوكشين. نظرًا لأن IPFS هو شبكة تعتمد على المحتوى، يضمن تخزين البيانات فيه أن أي تغيير في البيانات لا يمر دون ملاحظة، لأن عنوان الملف المطلوب يحتوي على هاش لمحتواه، والذي سيتغير مع أي تغيير في البيانات. يتم استخدام البلوكشين لتمرير الهاش إلى المستخدم، الذي يمكنه استخدامه للحصول على البيانات المطلوبة من IPFS (يحدث هذا عندما تطلب تاريخ الخريطة).

## إعداد الوحدة النمطية لنظام التشغيل Linux

**المتطلبات الأولية والتثبيت**

<List type="numbers">

<li>

لبناء وحدة `sensors-connectivity` يجب تثبيت ديمون IPFS بإصدار لا يتجاوز `0.8.x`. نفترض أنك تعمل على نظام Linux، قم بتنفيذ الأمر التالي (للإصدار `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

قم بتثبيت الحزمة مع أدوات التطوير `python3-dev` ومثبت الحزم لـ Python `pip`:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

قم بتثبيت الوحدة كحزمة PyPI:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

إذا رأيت التحذير التالي: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

قم بتشغيل الأمر التالي:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## التكوين

<List type="numbers">

<li>

أنشئ دليلاً لملف التكوين وملف قاعدة البيانات في أي مكان تريده. ستحفظ هذه القاعدة البيانات عناوين IPFS لبيانات الاستشعار والطابع الزمني وحالة الخدمة:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
اسم ملف قاعدة البيانات يمكن أن يكون أي شيء، ولكن يجب أن يكون الامتداد <code>.db</code>
</RoboAcademyNote>

</li>


<li>

أنشئ ملف تكوين في نفس الدليل:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

انسخ والصق ما يلي في الملف وأدخل المسار الكامل إلى ملف قاعدة البيانات في حقل db_path. سيكون هذا التكوين كافيًا للحصول على بيانات الاستشعار عبر HTTP وإرسالها إلى خريطة Robonomics:

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation": {
      "enable": false,
      "port": "/dev/<YOUR/PATH/TO/BOARD>",
      "work_period": 300,
      "geo": "00.000000,00.000000",
      "public_key": ""
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

</List>

## شغل


<List type="numbers">

<li>

شغل مشغل IPFS:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

بعد تعيين التكوين، قم بتشغيل الخدمة بالمسار إلى ملف التكوين في نافذة أخرى:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

سترى السجلات في الوحدة الطرفية (ستتم إضافتها أيضًا إلى `~/.logs`). مثال:

<LessonCodeWrapper codeClass="big-code" language="bash">$ sensors_connectivity test.json
2022-09-02 14:08:48,408 - INFO - Getting data from the stations...
2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...
2022-09-02 14:08:48,411 - INFO - Checking data base...
2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...
2022-09-02 14:09:18,410 - INFO - Getting data from the stations...
2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...
2022-09-02 14:09:48,412 - INFO - Getting data from the stations...
2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...
2022-09-02 14:10:18,413 - INFO - Getting data from the stations...</LessonCodeWrapper>

</li>

</List>

## بعد التثبيت

للاتصال بوحدة `sensors-connectivity` الخاصة بك بشبكة الاستشعار اللامركزية لدينا ورؤية بياناتك على الخريطة، يجب عليك إرسال هوية IPFS الخاصة بك إلى [vm@multi-agent.io](mailto:vm@multi-agent.io) أو [ping@airalab.org](mailto:ping@airalab.org). سنضيف هويتك إلى قائمة التحكم في الوصول.

احصل على هويتك IPFS باستخدام الأمر التالي بعد تشغيل مشغل IPFS:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>