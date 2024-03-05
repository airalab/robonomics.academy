---
title: "الدرس #3، إعداد وتوصيل الحساسات"
description: 'إعداد وتوصيل الحساسات'
lessonNumber: 3
metaOptions: [تعلم, توصيل الاستشعار وشبكة الاستشعار اللامركزية]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

تستخدم أجهزة الاستشعار لدينا البرنامج الثابت Robonomics، وهو إصدار موسع من البرنامج الثابت لـ Sensor.community، مع إضافة بعض أجهزة الاستشعار وتغيير نظام إرسال البيانات. يمكن العثور على الكود المصدري [على الرابط.](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

إذا كنت تمتلك لوحة Robonomics جاهزة للاستخدام، يمكنك الانتقال إلى قسم "الاتصال".

## المتطلبات

**لنظام Linux:**

<List type="numbers">

<li>

أضف مستخدمًا إلى مجموعة `dialout` (لأوبونتو) للحصول على وصول إلى منفذ USB:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>أعد تشغيل الكمبيوتر.</li>

<li>

قم بتنزيل تطبيق Robonomics `airrohr-flasher` التنفيذي من [الإصدارات](https://github.com/airalab/sensors-connectivity/releases).

</li>

<li>

قم بتغيير أذونات الملف وتنفيذه:

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**لنظام Windows:**

<List type="numbers">

<li>

قم بتثبيت تعريفات USB2serial (في Windows 10 يجب أن تبدأ تلقائيًا) - تعريفات NodeMCU v3 (CH340): [الرابط](http://www.wch.cn/downloads/file/5.html)، [الرابط البديل](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

قم بتنزيل الملف القابل للتنفيذ Robonomics `airrohr-flasher` من [الإصدارات](https://github.com/airalab/sensors-connectivity/releases) وقم بتشغيله.

</li>

</List>

**لنظام MacOS:**

<List type="numbers">

<li>

قم بتثبيت تعريفات USB2serial — تعريفات لـ NodeMCU v3 (CH340): [الرابط](http://www.wch.cn/downloads/file/178.html), [رابط بديل](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

قم بتنزيل الملف القابل للتنفيذ Robonomics `airrohr-flasher` من [الإصدارات](https://github.com/airalab/sensors-connectivity/releases) وقم بتشغيله.

</li>

</List>


## الإعداد

<List type="numbers">

<li>

قم بتوصيل الجهاز بالكمبيوتر وتشغيل برنامج `airrohr-flasher`. بعد فتح البرنامج سترى ما يلي (اعتمادًا على نظام التشغيل الخاص بك):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

يجب أن يتم ملء حقل `Board` تلقائيًا؛ إذا لم يحدث ذلك، اختر المنفذ المطلوب من قائمة الإسقاط.

<RoboAcademyNote type="okay" title="INFO">
إذا لم يتمكن <code>airrohr-flasher</code> من العثور على لوحتك، تأكد من أنك قمت بإتباع الجزء <b>المتطلبات</b> بشكل صحيح.
</RoboAcademyNote>

</li>

<li>

اختر البرنامج الثابت باللغة المفضلة لديك، وانقر على `Upload`. سيستغرق تحميل البرنامج الثابت بعض الوقت. إذا قررت لاحقًا تغيير اللغة أو إجراء تثبيت واضح (لإعادة تعيين التكوين)، انتقل إلى صفحة `Erase flash` واضغط على الزر لمسح ذاكرة الفلاش للجهاز.

</li>

<li>

بعد تحميل البرنامج الثابت، أعد تشغيل ESP (فقط قم بفصل وإعادة توصيل USB).

</li>

<li>

اختر الأجهزة الاستشعارية من قائمة الاختيار. اختر SDS011 وأي أجهزة استشعار إضافية. اضغط على `Save configuraation`.

</li>

<li>

بعد تحميل التكوين، أعد تشغيل ESP (فقط قم بفصل وإعادة توصيل USB).

</li>

</List>

## اتصل

<List type="numbers">

<li>

بعد إعادة التشغيل، ستقوم اللوحة بإنشاء شبكة Wi-Fi باسم "RobonomicsSensor-xxxxxxxxx". اتصل به من هاتفك أو جهاز الكمبيوتر الخاص بك: سترى نافذة التفويض (إذا لم يكن الأمر كذلك، افتح المتصفح وانتقل إلى `192.168.4.1`).

</li>

<li>

اختر شبكة Wi-Fi الخاصة بك من القائمة (أو اكتبها بنفسك إذا لم تكن مدرجة في القائمة) واملأ حقل كلمة المرور.

</li>

<li>

اكتب إحداثيات المكان الذي سيتم تثبيت الجهاز فيه.

<RoboAcademyNote type="warning" title="WARNING">
سيتم عرض إحداثيات الجهاز على خريطة متاحة للجمهور. إذا كنت لا ترغب في عرض معلوماتك الخاصة، فاكتب إحداثيات قريبة، ولكن ليست دقيقة.
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

انقر فوق "حفظ التكوين وإعادة التشغيل". سيتم إعادة تشغيل اللوحة والاتصال بشبكة Wi-Fi المحددة.

</li>

<li>

افتح [خريطة أجهزة استشعار Robonomics](https://sensors.robonomics.network/#/) وابحث عن المكان الذي قمت بتثبيت المستشعر فيه. في بضع دقائق، ستتمكن من رؤية المستشعر الخاص بك مع البيانات الموجودة على الخريطة.


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

هذا كل شيء بالتثبيت الافتراضي. للحصول على إعداد أكثر تقدمًا (إرسال البيانات إلى الخادم الخاص بك)، اقرأ القسم التالي.

## إضافي التكوين

قبل التكوين، تحتاج إلى العثور على عنوان المستشعر في شبكة الواي فاي الخاصة بك. للقيام بذلك، يمكنك استخدام `airrohr-flasher` (يجب أن يكون جهاز الكمبيوتر الخاص بك على نفس الشبكة التي يتواجد فيها المستشعر). قم بتشغيله وانتقل إلى علامة التبويب `Discovery`، ثم اضغط على `Refresh`، انتظر لحظة وسيظهر عنوان المستشعر الخاص بك.

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

انقر نقرًا مزدوجًا على هذا العنوان (أو اكتبه في متصفحك)، ستصل إلى قائمة المستشعر:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

الآن يمكنك بدء تخصيص تكوينك.


## واجهة برمجة تطبيقات مخصصة

يمكنك أيضًا إعداد إرسال البيانات إلى الخادم الخاص بك. للقيام بذلك، في علامة التبويب `APIs`، انقر على `Send to own API` وحدد عنوان الخادم والمنفذ (`65` لاتصال المستشعرات):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

انقر فوق "حفظ وإعادة التشغيل" لحفظ الإعدادات.