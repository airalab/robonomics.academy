---
title: "الدرس #7، تقوم أجهزة الاستشعار في Robonomics بقياس التحليلات وتخزين البعقد"
description: تقوم أجهزة استشعار الروبوتات بقياس التحليلات وعقدة الأرشيف
lessonNumber: 7
metaOptions: [تعلم, توصيل الاستشعار وشبكة الاستشعار اللامركزية]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

تقوم أجهزة الاستشعار في Robonomics بقياس التحليلات وتخزين البعقد أو RoSeMAN بخدمة تجميع بيانات الاستشعار لعرض تاريخ القياس. في هذه المقالة ستقوم بإعداد الخدمة.

## المتطلبات

RoSeMAN يتطلب خادم قاعدة بيانات [MongoDB](https://www.mongodb.com/docs/manual/introduction/)، يُفترض أن تكون لديك بالفعل. كما يجب تشغيل خيار datalog لوحدة الاتصال بالاستشعارات، كما هو موضح في السيناريو رقم 3. يجب أن تمتلك رصيدًا مجانيًا من الرموز XRT في حساب Robonomics الخاص بك، المتصل بوحدة الاتصال بالاستشعارات. 


## الإعداد

<List type="numbers">

<li>

تحميل المستودع:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

إنشاء ملفات التكوين:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

افتح ملف `config.json` وقم بتحرير مسار قاعدة البيانات:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

أضف العنوان العام لحسابك إلى ملف `agents.json`. يمكنك إضافة عدة عناوين إلى الملف، إذا نت ترغب في جمع البيانات من وحدات الاتصال بالاستشعارات المختلفة.

</li>


<li>

تثبيت التبعيات وبناء الخادم:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

بدء تشغيل خادم RoSeMAN:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

يجب أن يبدأ خادم الويب عند `http://127.0.0.1:3000`.

</li>

</List>

## بعد التثبيت

بعد نشر RoSeMAN على خادم، يجب عليك الحصول على عنوان IP العام أو عنوان URL للخادم. بالإضافة إلى ذلك، إذا كنت تقوم بتشغيل RoSeMAN وخريطة الاستشعارات على نفس الخادم، يمكنك استخدام عنوان IP المحلي.

بعد ذلك، يجب عليك فتح ملف تكوين خريطة الاستشعارات وإدراج عنوان URL الخاص بك في ملف `config.json` في حقل `REMOTE_PROVIDER`:


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

إعادة بناء الخريطة باستخدام `yarn build` وبدء تشغيلها مرة أخرى؛ ستتمكن من رؤية تاريخ القياس.