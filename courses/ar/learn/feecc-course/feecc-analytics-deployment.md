---
title: "نشر التحليلات"
description: هذه الدورة تتعلق بالتعرف على نظام Feecc وجميع مكوناته.
metaOptions: [تعلم، التعود على Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
في هذا الدرس، ستتعلم كيفية نشر مكونات تحليلات Feecc.
</RoboAcademyText>

## تشغيل خلفية التحليلات

1. استنسخ المستودع:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. قم بتكوين خدمة الخلفية وفقًا لاحتياجاتك باستخدام ملف `.env`:
    - `MONGO_CONNECTION_URL` — رابط الاتصال الخاص بك إلى MongoDB؛
    - `MONGO_DATABASE_NAME` — اسم قاعدة بيانات MongoDB؛
    - `SECRET_KEY` — مفتاح سري للتجزئة وفك التجزئة؛
    - `IPFS_GATEWAY_HOST` — عنوان URL لبوابة IPFS؛
    - `USE_DATALOG` — إرسال بيانات التحليلات إلى Robonomics (`true` أو `false`؛
    - `ROBONOMICS_SEED` — عبارة البذور لحساب Robonomics.

3. قم بتشغيل حاوية الخلفية:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. تحقق من وظائفها. اذهب إلى المتصفح وافتح صفحة `http://localhost:5002/docs`. إذا تم القيام بذلك بشكل صحيح، سترى صفحة (تم إنشاؤها بواسطة Swagger) تحتوي على جميع نقاط نهاية واجهة برمجة التطبيقات لتحليلات Feecc. الآن أنت جاهز لتشغيل الواجهة الأمامية.

## تشغل الواجهة الأمامية للتحليلات

1. استنساخ المستودع:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. اذهب إلى `src` وقم بتكوين خدمة الواجهة الأمامية وفقًا لاحتياجاتك باستخدام ملف `config.json`. تأكد من إدخال عنوان URL لخلفية تحليلات Feecc في المعلمة `base_url` (بالشكل `xx.xx.xx.xx:port`).

3. قم بتشغيل حاوية الواجهة الأمامية:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. تحقق من وظائفها. اذهب إلى المتصفح وافتح صفحة `http://localhost:8081/docs`.

<RoboAcademyText fWeight="500">
على هذا، يمكن اعتبار التعرف على نظام Feecc مكتملاً. إذا كان لديك أي أسئلة إضافية، يمكنك الاتصال بالمطورين في أنظمة الوكلاء المتعددين (multi-agent.io) أو ترك مشكلة على GitHub الخاص بهم (github.com/Multi-Agent-io).
</RoboAcademyText>