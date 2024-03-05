---
title: "الدرس رقم 6، إعداد الروبوتات التكاملية"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: دورة مساعد المنزل
lessonNumber: 7
metaOptions: [تعلم، المنزل الذكي السيادي مع Robonomics و Home Assistant]
defaultName:  Sovereign Smart Home with Robonomics and Home Assistant
---


## ما هذا عن

في هذا الدرس، ستقوم بإضافة Robonomics إلى Home Assistant وإنشاء حساب مرتبط بالاشتراك. يتيح هذا التكامل لـ Home Assistant استخدام وظائف Robonomics parachain، أولاً وقبل كل شيء، إرسال بيانات منزل ذكي مشفرة إلى سحابة لامركزية.


## نظرية

يتم إرسال بيانات منزلك الذكية باستخدام <code>record()</code> extrinsic من pallet <code>datalog</code> الذي يتيح لك حفظ بيانات الجهاز المشفرة على البلوكشين. 

لنكون أكثر دقة، يستخدم التكامل IPFS لتخزين البيانات ثم إرسال تجزئات IPFS إلى extrinsic datalog، والتي بدورها يتم تخزينها في البلوكشين. ولكن نظرًا لأن هذه الوظيفة تُستدعى من خلال اشتراك IoT، تبدو الوظيفة بأكملها كالتالي: <code>rws.call(datalog.record(YOUR_IPFS_HASH))</code>.

## تعليمات

<List type="numbers">

<li>

إضافة Robonomics إلى Home Assistant

<List>

<li>

في واجهة الويب لـ Home Assistant، انتقل إلى <code>Settings</code>-><code>Device & Services</code> واضغط على <code>ADD INTEGRATION</code>. ابحث عن <code>Robonomics</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD', type:'mp4'}]" />

</li>

<li>

انقر على Robonomics واملأ الإعدادات: 

\- أضف seed من حساب <code>SUB_CONTROLLER</code> إلى seed الحساب الرئيسي

\- أضف العنوان العام لحساب <code>SUB_OWNER</code> (الذي قمت بإنشائه مسبقًا) إلى عنوان مالك الاشتراك

\- قم بتعيين فترة إرسال البيانات (افتراضيًا هي 10 دقائق)

\- (اختياري) يمكنك إضافة بيانات اعتماد لخدمة Pinata لنشر بياناتك بشكل أوسع عبر شبكة IPFS

</li>

<li>

اضغط على <code>SUBMIT</code> بعد الانتهاء من التكوين. إذا قمت بملء كل شيء بشكل صحيح، سترى نافذة النجاح.

</li>
</List>
</li>

<li>

إضافة المستخدمين في تطبيق Robonomics Dapp 

<List>

<li>

تحتاج إلى إنشاء مستخدم منفصل لـ Home Assistant، الذي سيتحكم في أجهزة المنزل الذكية. لا يمكنك استخدام الحسابات التي تم إنشاؤها مسبقًا لأن <code>SUB_OWNER</code> و <code>SUB_CONTROLLER</code> يوفران الأمان، والمستخدم الأول الذي قمت بإنشائه عند بدء استخدام Home Assistant ليس لديه حساب Robonomics Parachain.

</li>

<li>
ابدأ بإنشاء حساب على Robonomics Parachain، كما فعلت في الدرس السابق.
</li>

<li>

أضف هذا الحساب إلى الاشتراك في [dapp](https://dapp.robonomics.network/#/subscription/devices). الآن يجب أن يكون هناك ثلاثة عناوين في قائمة الوصول: <code>SUB_OWNER</code>، <code>SUB_CONTROLLER</code> و <code>USER</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H', type:'mp4'}]" />

</li>

<li>

انتقل إلى خدمة dapp المسماة [Home Assistant Account](https://dapp.robonomics.network/#/home-assistant). اختر الحساب الذي أنشأته للتو في الشريط الجانبي الأيمن (تحقق من أنك قمت باختيار الحساب المقصود عن طريق الضغط على رمز الملف الشخصي).

أدخل بذرة <code>USER</code> في الحقل المطلوب. أضف عناوين <code>SUB_OWNER</code> و <code>SUB_CONTROLLER</code> في حقول اعتماد المسؤول. إذا كان كل شيء صحيحًا، سترى حالة التحقق <code>VERIFIED</code>.

</li>

<li>

أنشئ كلمة مرور لمستخدم جديد قمت للتو بتسجيله وثم قم بتأكيد العملية، التي ستكون الآن بدون رسوم بسبب الاشتراك. في وقت لاحق يمكنك استعادة كلمة المرور في علامة <code>Restore</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh', type:'mp4'}]" />

</li>

<li>

بعد عملية التسجيل، قم بتسجيل الدخول إلى Home Assistant باستخدام عنوان المستخدم الخاص بك كاسم مستخدم وكلمة مرور جديدة قمت بإنشائها. الآن يمكنك استخدام تطبيق Robonomics dapp للتحكم في منزلك من خلال Robonomics.

</li>
</List>
</li>
</List>