---
title: "الدرس رقم 7، استخدام Robonomics مع Home Assistant"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: دورة مساعد المنزل
lessonNumber: 8
metaOptions: [تعلم، المنزل الذكي السيادي مع Robonomics و Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## ما هذا عن

في هذا الدرس، ستحاول استخدام خدمات Robonomics الرئيسية للإنترنت الأشياء. يمكن للخدمة الأولى استعلام تلميتري أجهزة المنزل الذكية، مما يتيح لك استقبال البيانات عن بعد من Home Assistant. تقوم الخدمة الثانية بإنشاء نسخ احتياطية من تكوين Home Assistant الخاص بك واستعادته عند الحاجة (على سبيل المثال، في حالة فشل بطاقات SD).


## حول وظائف الباراشين

سوف ترى كيف يتم استخدام وظائف باراشين Robonomics لتوفير الخدمة اللازمة لمستخدم Home Assistant. 

الحصول على تلميتري يعتمد على لوحة <code>datalog</code> التي تعرفها بالفعل. في كل فترة زمنية معينة (ولكن لا تقل عن الوزن المتراكم يسمح)، يتم إرسال معاملة <code>datalog.record()</code> إلى الباراشين من عنوان <code>SUB_CONTROLLER</code> مع هاش IPFS للملف المشفر، حيث يتم جمع جميع بيانات أجهزة لإنترنت الأشياء الخاصة بك. في الواقع، للحصول على التلميتري، تطلب الداتالوجات اللازمة من الباراشين المتعلقة باشتراكك في الإنترنت الأشياء ثم تقوم بفك تشفيرها باستخدام مفاتيحك.

لإنشاء نسخة احتياطية، يتم استخدام لوحة Robonomics أخرى تسمى <code>digitalTwin</code>، والتي هي تنفيذ لفكرة التوأم الرقمي، وهو الإصدار الرقمي للمعدات الحقيقية التي تنسخ خصائصها التقنية والبيانات التاريخية. أولاً، يتم إنشاء معرف فريد لتوأم Home Assistant الرقمي الخاص بك باستخدام معامل <code>digitalTwin.create()</code>. ثم، باستخدام معامل <code>digitalTwin.setSource()</code>، يتم ربط هذا المعرف ببعض البيانات (حقل <code>topic</code>) وبعنوان في الباراشين (حقل <code>source</code>). بالنسبة لنسخة احتياطية لـ Home Assistant، يتم تخزين هاش الملف الاحتياطي في <code>topic</code>، ويتم تخزين عنوان <code>SUB_OWNER</code> في <code>source</code>.

## تعليمات

<List type="numbers">

<li>

الحصول على تلميتري

<List>


<li>

انتقل إلى التطبيق واختر خدمة [SmartHome Telemetry](https://dapp.robonomics.network/#/smarthome-telemetry).

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmao9RoWcKo2qs4PAGtm5gqHzyAHJcpDqNLgciU35FJeVm', type:'mp4'}]" />

</li>

<li>

في حقل <code>CONTROLLER</code>، أدخل عنوان <code>SUB_CONTROLLER</code>. أدخل عبارة البذرة لتشفير البيانات.

</li>

<li>

في كتلة <code>Get telemetry</code>، اختر الطابع الزمني من القائمة المنسدلة واضغط على زر <code>DOWNLOAD TELEMETRY</code>.


قد يستغرق تنزيل التلميتري بعض الوقت. بعد الانتهاء، سترى المعلومات من أجهزة الاستشعار الخاصة بك.

</li>
</List>
</li>


<li>

إنشاء نسخة احتياطية

<List>

<li>

لإنشاء نسخ احتياطية، يتم استدعاء خدمة توليد أرشيف آمن بملفات التكوين. تضيف هذه الخدمة بعد ذلك الأرشيف إلى IPFS وتخزن CID الناتج في Robonomics Digital Twin.

<robo-academy-note type="warning" title="WARNING">
لاستعادة تكوينك، من الضروري استخدام بوابة IPFS مخصصة مثل Pinata (pinata.cloud) أو Crust Network (crust.network). بدون ذلك، ستتم تخزين نسخة الاحتياطي الخاصة بك فقط على جهاز IPFS المحلي الخاص بك، مما قد يمنعك من استعادة تكوين Home Assistant الخاص بك في حالة فشل جهاز IPFS المحلي. 
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVo91dLaAYgFDM1vrL2PYfAffM6SGGC59ZERbfHR44tqW', type:'mp4'}]" />

</li>

<li>

في واجهة الويب لـ Home Assistant، انتقل إلى <code>أدوات المطور</code> -> <code>الخدمات</code>. ابحث عن <code>Robonomics: حفظ النسخة الاحتياطية في Robonomics</code> واضغط على <code>استدعاء الخدمة</code>.

</li>

<li>

انتظر حتى تظهر إشعار <code>تم تحديث النسخة الاحتياطية في Robonomics</code> في <code>الإشعارات</code>.

</li>

<li>

لكي تستعيد تكوينك، ستحتاج إلى تثبيت نسخة جديدة من Home Assistant (وتكرار جميع الخطوات السابقة) مع تكامل Robonomics Home Assistant باستخدام نفس البذور التي أنشأتها سابقًا. ستحتاج أيضًا إلى إعداد وسيط MQTT بنفس اسم المستخدم وكلمة المرور.

<robo-academy-note type="warning" title="WARNING">
نظرًا لأن بعض الأجهزة المتصلة بـ Home Assistant عبر Wi-Fi أو MQTT تتطلب منك تحديد عنوان IP المحلي لجهاز Raspberry Pi الخاص بك بشكل صريح، عند استعادة النسخة الاحتياطية، قد لا تكون متاحة بسبب تغيير هذا العنوان IP. ستحتاج إلى إعادة إدخال العنوان IP الجديد في إعدادات هذه الأجهزة. لتجنب ذلك، يمكنك إعداد عنوان IP محلي ثابت لجهاز Raspberry Pi الخاص بك في إعدادات جهاز التوجيه الخاص بك (إذا كان يدعم هذه الميزة).
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmWmnmkXUcPXsAnQzwN3UEuki2GMYnQDx3vhgjEypCU8aR', type:'mp4'}]" />


</li>

<li>

في واجهة الويب لـ Home Assistant، انتقل إلى <code>أدوات المطور</code> -> <code>الخدمات</code>. ابحث عن <code>Robonomics: استعادة من النسخة الاحتياطية في Robonomics</code> واضغط على <code>استدعاء الخدمة</code>. انتقل إلى صفحة <code>نظرة عامة</code>، للتحقق من حالة النسخ الاحتياطية الخاصة بك.

</li>

<li>

بمجرد أن ينتهي Home Assistant من إعادة التشغيل، سيتم استعادة تكوينك. إذا تغيرت الحالة إلى <code>تمت الاستعادة</code> ولكن Home Assistant لا يعيد التشغيل تلقائيًا، ستحتاج إلى إعادة تشغيله يدويًا عن طريق الانتقال إلى <code>الإعدادات</code> > <code>النظام</code> والنقر على زر <code>إعادة التشغيل</code> في الزاوية العلوية اليمنى.

</li>

</List>
</li>

</List>

## اكمال الدورة

<List>

<li class="flex"> 

تهانينا! لقد أكملت بنجاح عملية الإعداد الكاملة ونشر منزلك الذكي السيادي. يمكنك الآن طلب شهادة اكتمال الدورة منا عن طريق زيارة قناتنا على Discord. اكتب لنا في الدردشة [robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315) وسيتصل بك مندوبنا.
</li>

<li class="flex">

دليل اكتمال الدورة هي المعاملات المقابلة التي يمكن التحقق منها في [مستكشف Polkadot](https://robonomics.subscan.io/). هذه المعاملات تتعلق بشراء اشتراك، إضافة جهاز إلى اشتراك، وإرسال سجلات بيانات من الأجهزة.

</li>

</List>