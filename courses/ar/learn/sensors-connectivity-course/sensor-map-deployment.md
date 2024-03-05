---
title: "الدرس #6، نشر خريطة الاستشعار"
description: 'نشر خريطة الاستشعار'
lessonNumber: 6
metaOptions: [تعلم, توصيل الاستشعار وشبكة الاستشعار اللامركزية]
defaultName: Sensors Connectivity & Decentralized Sensors Networ
---

بعد تجميع جهاز الاستشعار وإعداد وحدة توصيل الأجهزة الاستشعار، حان الوقت لنشر خريطة الاستشعار اللامركزية الشخصية.


## المتطلبات & تثبيت

<List type="numbers">

<li>

نظرًا لأن خريطة الاستشعار تعمل بواسطة JavaScript، أولاً تحتاج إلى تثبيت `node` ومدير `yarn`

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

قم بتنزيل وبناء الخريطة:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

قم بتشغيل الخريطة في وضع "التطوير" للاختبار

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

انتقل إلى URL من المحطة، يجب أن تشاهد خريطة المستشعر. بعد ذلك، قم بإيقافه باستخدام "Ctrl+C".

</li>

</List>

## التكوين

<List type="numbers">

<li>

ابحث عن معرف IPFS الخاص بك باستخدام:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

انتقل إلى مجلد `src` وقم بإعادة تسمية الملفات:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

أدخل معرف IPFS الخاص بك في `agents.json`:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

افتح ملف `config.json` وقم بتغيير الجزء التالي من ملف التكوين:

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


هنا يجب عليك إدخال خط العرض (`lat`) وخط الطول (`lng`) لمدينتك. اختياريًا، يمكنك إع��اد [خدمة اتجاه الرياح](https://github.com/danwild/wind-js-server) وتوفير عنوان URL لها في حقل `WIND_PROVIDER`.

</li>

</List>


## البناء

<List type="numbers">

<li>

قم بتشغيل الأمر التالي لبناء الملفات للإصدار:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

سينشئ ذلك مجلد `dist` مع جميع مكونات الموقع الثابت.

</li>

<li>

للتحقق مما إذا كان كل شيء صحيحًا، انتقل إلى مجلد `dist` وافتح ملف `index.html`. بعد بعض الوقت، ستظهر بيانات الاستشعار من وحدة توصيل الأجهزة الاستشعار الخاصة بك على الخريطة.

</li>

</List>

