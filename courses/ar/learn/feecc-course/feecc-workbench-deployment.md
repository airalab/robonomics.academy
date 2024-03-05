---
title: "نشر محمل العمل للمهندس"
description: هذه الدورة تتعلق بالتعرف على نظام Feecc وجميع مكوناته.
metaOptions: [تعلم، التعود على Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
ستتعلم في هذا الدرس كيفية نشر المكونات الضرورية لبرنامج Feecc Engineer Workbench بنفسك.
</RoboAcademyText>

من بين المكونات:

- Workbench Daemon
- Workbench Frontend
- IPFS Gateway
- HID Reader Daemon

يتم تشغيل جميع المكونات باستخدام [Docker](https://docs.docker.com/engine/install/ubuntu/) و[Docker compose](https://docs.docker.com/compose/)، تأكد من أن لديك لهم تثبيت.

## تحضير البرنامج

1. تستخدم مكونات Feecc قاعدة بيانات [MongoDB](https://www.mongodb.com/) لتخزين البيانات والوصول إليها. قبل استخدام Feecc، تحتاج إلى نشر MongoDB بالطريقة التي تراها مناسبة لك. إليك بعض خيارات النشر: [استخدام خادمك الخاص](https://www.mongodb.com/try/download/community), [قاعدة بيانات سحابية في Atlas](https://www.mongodb.com/atlas) (مجانية), [قاعدة بيانات سحابية في DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (مدفوعة). 
    
    على أي حال، تحتاج إلى الحصول على رابط الاتصال الخاص بك إلى MongoDB، الذي ستحتاج إلى إدخاله كقيمة لمتغير `MONGODB_URI` لجميع مكونات النظام.
    
2. إذا كنت ترغب في الاستفادة من تخزين البيانات الشفاف والموثوق من نظام الإنتاج الخاص بك، تحتاج إلى إنشاء حساب على Robonomics. للقيام بذلك، استخدم التعليمات المتاحة على الرابط التالي: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    تحتاج إلى حفظ عبارة البذور للحساب لأنه سيتم استخدامها لاحقًا في المتغير `ROBONOMICS_ACCOUNT_SEED`.

## تحضير محمل العمل

قبل البدء، قم بتوصيل جميع المعدات الضرورية بالكمبيوتر أو الخادم:

- طابعة العلامات باستخدام USB
- قارئ RFID / باركود باستخدام USB
- كاميرا IP من خلال جهاز توجيه PoE/مفتاح الشبكة
- شاشة مع لوحة مفاتيح وفأرة أو شاشة تعمل باللمس باستخدام USB و HDMI/VGA (اختياري)

## تشغيل HID Reader Daemon

1. استنسخ المستودع:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. تشغيل الشيطان:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## تشغيل Workbench Daemon

1. استنساخ المستودع:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. تكوين الشيطان وفقًا لاحتياجاتك باستخدام ملف `docker-compose.yml`. يحتوي الملف على متغيرات بيئية مختلفة:

    - تكوين MongoDB؛
    - تكوين Robonomics؛
    - تكوين IPFS؛
    - معلمات الطابعة؛
    - معلمات الكاميرا؛
    - معلمات قارئ RFID / الباركود.
    
    القائمة الكاملة للمتغيرات متاحة في مستودع الشيطان [repository](https://github.com/Multi-Agent-io/feecc-workbench-daemon). البارامترات التالية إلزامية:
    
    - `MONGODB_URI`: رابط الاتصال الخاص بك إلى MongoDB؛
    - `MONGODB_DB_NAME`: اسم قاعدة بيانات MongoDB؛
    - `WORKBENCH_NUMBER`: رقم محطة عمل الموظف.

3. تشغيل الشيطان:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. التحقق من وظائفه. اذهب إلى المتصفح وافتح صفحة `http://127.0.0.1:5000/docs`، التي يجب أن تحتوي على وثائق حول واجهة API REST للنظام. إذا لم تكن الصفحة متاحة، فإن الخادم لم يتم تشغيله بشكل صحيح. تحقق من السجلات داخل الحاوية للأخطاء، وقم بإصلاحها وكرر خطوات البناء والتشغيل.

## إطلاق بوابة IPFS

1. استنساخ المستودع:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. قم بتكوين الخدمة الصغيرة وفقًا لاحتياجاتك باستخدام ملف `docker-compose.yml`. يحتوي الملف على متغيرات بيئية للاتصال بقاعدة بيانات MongoDB و Robonomics و Pinata. القائمة الكاملة للمتغيرات متاحة في مستودع البوابة [repository](https://github.com/Multi-Agent-io/feecc-ipfs-gateway).

3. قم بتشغيل الخدمة الصغيرة:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## إطلاق واجهة المستخدم الأمامية لوركبينش

1. استنساخ المستودع:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. انتقل إلى دليل `configs` وقم بتكوين خدمة الواجهة الأمامية وفقًا لاحتياجاتك باستخدام ملف `config.json`. البارامترات التالية مهمة بشكل خاص:
    - `socket` — أدخل عنوان ديمون وركبينش هنا؛
    - `interface_language` — لغة الواجهة، الخيارات المتاحة `en` و `ru`؛
    - `dev_show_reducers` — تمكين/تعطيل وضع المطور؛
    - `pulling_period` — فترة استلام البيانات من الخلفية بالميلي ثانية؛

3. قم بتشغيل حاوية الواجهة الأمامية:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. تحقق من وظائفه. انتقل إلى المتصفح وافتح الصفحة `http://localhost:3000`، يجب أن ترى صفحة الترخيص.

<RoboAcademyText fWeight="500">
في الدرس التالي، سوف نتناول خدمة Feecc Analytics.
</RoboAcademyText>