---
title: "الدرس رقم 3، البيئة البيئية لـ Polkadot لبنية الإنترنت الداخلية للأجهزة الذكية"
lastUpdate: Thu May 04 2023 12:53:58 GMT+0400 (Samara Standard Time)
description: في هذا الدرس، ستحاول التحكم في مصباح ذكي باستخدام Robonomics parachain.
lessonNumber: 3
metaOptions: [يتعلم، مقدمة لأفكار روبونوميكس]
defaultName: مقدمةduction to the ideas of Robonomics
---

شرح الدرس 2 المبادئ الرئيسية لـ Robonomics وأشار إلى Polkadot / Kusama كمنصة واعدة لبيئة البلوكشين لتنفيذه. حان الوقت للنظر بعناية في وظائف Robonomics parachain كجزء من بيئة Polkadot في شبكة Kusama. على وجه الخصوص، نود أن نوضح كيفية عمل اشتراكات الإنترنت لـ Robonomics Parachain. خلال الدرس الأول، تمت إضافة عنوانك إلى اشتراك دورة الإنترنت الذكية، ولقد تمكنت بالفعل من استخدامه مرتين: عندما بحثت عن انعكاسك في المرآة السوداء وعندما قدمت نتائج اختبارك.

## مقدمة

في هذا الدرس، ستحاول التحكم في مصباح ذكي. هدفك هو تشغيل/إيقاف تشغيل المصباح باستخدام واجهة Polkadot/Substrate القياسية على Robonomics parachain. المصباح يبث على [YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) حتى تتمكن من مشاهدة نتيجتك في الوقت الحقيقي. أيضًا، يتوفر مجموعة أكثر تفصيلاً من التعليمات بشأن استخدام اشتراك الإنترنت على [ويكينا](https://wiki.robonomics.netwأوk/docs/subscription-launch/).


## التعليمات

<List type="numbers">

<li>

افتح بوابة Robonomics [Polkadot/Substrate](https://polkadot.js.أوg/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.netwأوk%2F#/extrinsics).

يجب أن ترى قائمة Extrinsics (وظائف في بيئة Polkadot). إذا لم يتم فتح Extrinsics، فاستخدم القائمة في الزاوية اليسرى العليا من الصفحة للانتقال إلى <code> Kusama & Parachains -> Robonomics</code>، واضغط على <code>Switch</code>. ثم انتقل إلى <code>Developer</code> في الرأس العلوي، ثم إلى <code>Extrinsics</code>.

</li>

<li>
في الحقل الأول حيث يقول 'استخدام الحساب المحدد'، اختر نفس حساب Polkadot.js الذي استخدمته في الدروس السابقة.
</li>

<li>
في الحقل الثاني "إرسال الوظيفة التالية"، حدد الوظائف الخارجية <code>rws</code> واختر <code>call(subscriptionId, call)</code>. سيتيح لك هذا إرسال استدعاء وظيفة باستخدام اشتراك الإنترنت.
</li>

<li>
في الحقل <code>subscriptionId: AccountId32</code>، الصق عنوان مالك هذا الاشتراك: <code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

في الحقل <code>call: Call</code>، اختر الأمر <code>launch(robot, param)</code>.

سيظهر لك حقلين إضافيين: <code>robot</code> و <code>param</code>.

</li>

<li>
في الحقل <code>robot: AccountId32</code>، الصق عنوان المصباح الذكي: <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

في الحقل <code>param: H256</code>، يجب عليك تحديد 1 (تشغيل) أو 0 (إيقاف) لتشغيل/إيقاف تشغيل المصباح.

يمكنك القيام بذلك باستخدام:

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

أو

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

اضغط على زر "إرسال المعاملة".

لا تنسَ فتح [البث على YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) قبل توقيع المعاملة.

</li>


</List>

<Result>

سيتم اعتبار الدرس مكتملاً بعد إرسال معاملة ناجحة وظهورها في مستكشف Polkadot لحسابك في Polkadot.js.

يمكنك التحقق من نتائجك على [التطبيق الخاص بالتحقق](https://lk.robonomics.academy/). للتفويض في التطبيق الخاص بالتحقق، استخدم نفس الحساب في Polkadot.js الذي تم استخدامه خلال الدورة.

</Result>