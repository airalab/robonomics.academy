---
title: "الدرس #4b، إعداد البوابة: Robonomics SLS Gateway"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: دورة مساعد المنزل
lessonNumber: 5
metaOptions: [تعلم، المنزل الذكي السيادي مع Robonomics و Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## ما هذا عن

هذا هو إعداد السيناريو لربط الأجهزة باستخدام Robonomics SLS Gateway. استلهمت Robonomics التصميم من البوابة التي طورها مشروع [Smart Logic System](https://github.com/slsys/Gateway) وقامت بتعديل جزء من الدوائر. يمكنك طلب بوابة من Robonomics أو بناء بوابتك الخاصة باستخدام [المخططات الزرقاء](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01).

ستقوم بتثبيت البرنامج المطلوب للبوابة وتكوينه وتوصيله بـ Home Assistant.

<robo-academy-note type="note" title="Attention">
  برنامج SmartRF Flash Programmer، برنامج لتحديث البرامج الثابتة، يتطلب نظام تشغيل Windows.
</robo-academy-note>

## تعليمات

<List type="numbers">

<li>

تثبيت برنامج تشغيل متحكم Zigbee

<List>

<li>

أولاً، تحتاج إلى تفليش متحكم البوابة CC2652P. ضع التبديلات <code>ON</code> <code>2</code>، <code>4</code> و <code>7</code> في الجزء السفلي من SLS Gateway، يجب أن تكون الباقي <code>OFF</code>.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

قم بتوصيل البوابة بجهاز الكمبيوتر ��لخاص بك باستخدام كابل USB-A<>USB-C.

<robo-academy-note type="warning" title="WARNING">
  يرجى استخدام أنواع الكابلات USB-A<>USB-C فقط، لأن البوابة في الوقت الحالي لا تدعم نوع USB-C<>USB-C.
</robo-academy-note>

</li>

<li>

يتطلب برنامج تشغيل CC2652 SmartRF Flash Programmer v2 من Texas Instrument. قم بتنزيله من [الموقع الرسمي](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2) ثم قم بتثبيته.

</li>

<li>

قم بتنزيل برنامج التشغيل لمتحكم CC2652P من [مستودع GitHub](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator).

</li>

<li>

قم بتشغيل البرنامج. في نافذة <code>جهاز متصل</code> حدد متحكم CC2652P، ضع المسار إلى البرنامج الثابت، ضع العلامات على <code>Erase, Program, Verify</code> كما في الصورة واضغط على <code>Start</code>.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

بعد تفليش ناجح، سترى رسالة <code>Success!</code>. الآن يمكنك فصل كابل USB.

</li>
</List>
</li>

<li>

تثبيت برنامج تشغيل المتحكم

<List>

<li>

الآن تحتاج إلى إعداد البوابة لتثبيت البرنامج الثابت. ننصحك بتحديث البرنامج الثابت عن طريق توصيل البوابة مباشرة بجهاز Raspberry Pi الخاص بك وإدخال جميع الأوامر التالية على ذلك الجهاز. 

</li>

<li>

ضع التبديلات <code>ON</code> <code>1</code> و <code>3</code> في الجزء السفلي من بوابة SLS، يجب أن تكون الباقي <code>OFF</code>. ثم قم بتوصيل البوابة بجهاز Raspberry Pi الخاص بك عبر منفذ USB type-C.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

قم بالاتصال بجهاز Raspberry Pi عبر SSH.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

انسخ المستودع مع البرنامج الثابت:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

لتفليش بوابة SLS تحتاج إلى تشغيل النصوص <code>Clear</code> و <code>Flash_16mb</code>:

<LessonCodeWrapper language="bash" noLines>
cd robonomics-hass-utils/esp_firmware/linux
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Flash_16mb.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Flash_16mb.sh
</LessonCodeWrapper>
</li>

<li class="no-bullet">

\- **حل المشكلات**

إذا كنت تواجه مشاكل في تحديث برنامج تشغيل بوابتك، فيجب عليك اتخاذ خطوات إضافية:

<List>

<li>

تأكد من تثبيت وحدة pySerial:

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

قم بمنح مستخدمك حق الوصول إلى منفذ USB:

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

في بعض الحالات، من الضروري تغيير إعداد النطاق الترددي في السيناريو لتحديث البرنامج الثابت. افتح سيناريو <code>Flash_16mb.sh</code> باستخدام محرر النانو وقم بتغيير معلمة الباود من <code>921600</code> إلى قيمة أصغر (على سبيل المثال، <code>115200</code>).
</li>
</List>
</li>

<li class="no-bullet">

\- **إضافي**

نحن نوفر أيضًا خيارات لتحديث البرنامج الثابت باستخدام أنظمة تشغيل أخرى (macOS و Windows). يمكنك العثور على السيناريوهات المقابلة في مجلد، واسمه يعتمد على نظام التشغيل الخاص بك.

</li>
</List>
</li>

<li>

إعداد البوابة

<List>

<li>

قم بتعيين المفاتيح على ظهر البوابة إلى وضعها الجديد. يجب أن تكون المفاتيح <code>5</code> (RX Zigbee to ESP) و <code>6</code> (TX Zigbee to ESP) في وضع <code>ON</code>، ويجب أن تكون الباقي <code>OFF</code>.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

قم بتوصيل كابل الطاقة من نوع C. يجب أن يتحول الضوء المؤشر في الوسط إلى اللون الأخضر.

</li>

<li>

عند بدء التشغيل الأول، ستبدأ البوابة في مشاركة الواي فاي بـ SSID <code>zgw****</code>. قم بالاتصال بهذا الشبكة. تذكر أن الإشارة قد تكون ضعيفة إلى حد ما، لذا من الأفضل أن تبقي بوابة SLS بالقرب من جهاز الكمبيوتر الخاص بك.

إذا كان الاتصال ناجحًا، ستفتح واجهة الويب (أو يمكنك العثور عليها على عنوان 192.168.1.1).

</li>

<li>

انتقل إلى صفحة الواي فاي وقم بإدخال بيانات الواي فاي الخاصة بك عن طريق إدخال اسم المستخدم / كلمة المرور والضغط على زر <code>Save</code>. بعد ذلك، اضغط على زر <code>Reboot</code>. ستقوم البوابة بإعادة التشغيل والاتصال بشبكة الواي فاي الخاصة بك.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

ابحث عن عنوان IP المحلي لبوابة SLS للوصول إلى واجهة الويب. يمكنك استخدام تطبيق [Fing](https://www.fing.com/products) أو <code>arp -a</code> في الطرفية الخاصة بك أو Nmap: 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

حيث <code class="bold">xxx</code> هو عنوان IP الخاص بك في الشبكة المحلية. يجب أن يك��ن اسم البوابة مشابهًا لهذا: <code>zgw****</code>. افتح واجهة الويب للبوابة عن طريق لصق عنوان IP البوابة في المتصفح.
</li>

<li>

انتقل إلى <code>الإعدادات</code> -> <code>الأجهزة</code> وتأكد من أن الإعدادات تبدو كما في الصورة. قم بتصحيح الإعدادات إذا لزم الأمر وانقر على زر <code>حفظ</code>:

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

الجدول بالقيم المطلوبة:


| Field        	         | **Value**          |                                                                     	
|------------------------|--------------------|
| Zigbee module          | TI                 |
| Zigbee UART RX         | 22                 |
| Zigbee UART TX         | 23                 |
| Zigbee RST Pin         | 18                 |
| Zigbee BSL Pin         | 19                 |
| Button Mode            | 33 (pullUP - true) |
| Number addressable leds| 0                  |
| Led Red (or addr)      | 21                 |
| Led Green              | 5                  |
| Led Blue               | 27                 |
| I2C SDA                | 255                |
| I2C SCL                | 255                |

</li>

<li>

ثم أعد تشغيل البوابة. اختر <code>الإجراءات</code> -> <code>إعادة تشغيل النظام</code> في الزاوية العلوية اليمنى. تأكد من أن البوابة تعمل بشكل صحيح مع متحكم CC2652P في نافذة معلومات Zigbee. يجب أن يكون حالة الجهاز <code>موافق</code>.

</li>

<li>

أعد تشغيل البوابة. اختر <code>الإجراءات</code> -> <code>إعادة تشغيل</code> النظام في الزاوية العلوية اليمنى.

</li>

<li>

قم بتكوين إضافة الأجهزة تلقائيًا إلى Home Assistant. انتقل إلى <code>Zigbee</code> -> <code>التكوين</code> ثم اختر <code>اكتشاف Home Assistant MQTT</code> و <code>مسح الحالات</code>. احفظ التغييرات وأعد تشغيل بوابة SLS مرة أخرى.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **إضافي**:

إذا كان لديك بالفعل بوابة SLS نشطة في من��لك، وأنت الآن تكون تكوين بوابة أخرى، فسيتعارضان مع بعضهما البعض. لحل هذه المشكلة، تحتاج إلى تغيير القناة على الجهاز الجديد.

للقيام بذلك، انتقل إلى <code>Zigbee</code> -> <code>التكوين</code> وقم بتغيير القناة إلى أخرى (على سبيل المثال، القناة 15).

</li>

<li>

قم بتوصيل أجهزتك عن طريق الانتقال إلى <code>Zigbee</code> -> <code>الانضمام</code>. ضع أجهزتك في وضع الإقران، الطريقة الأكثر شيوعًا لتبديل جهاز إلى وضع الاتصال هي الاستمرار في الضغط على زر الطاقة أو تشغيلها/إيقافها لمدة 5 مرات. اضغط على زر <code>تمكين الانضمام</code> لبدء البحث عن أجهزة Zigbee. سترى أجهزة الاستشعار النشطة.

</li>
</List>
</li>

<li>

ربط بوابة SLS بـ Home Assistant

<List>

<li>

تحتاج إلى تكوين MQTT على بوابة SLS. عد إلى واجهة الويب الخاصة ببوابة SLS الخاصة بك وانتقل إلى <code>الإعدادات</code> -> <code>الرابط</code> -> <code>إعداد MQTT</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

أضف عنوان الوسيط الخاص بك (عنوان Raspberry Pi مع Home Assistant في الشبكة المحلية، يمكنك العثور عليه باستخدام تطبيق [Fing](https://www.fing.com/products) أو باستخدام أمر <code>ip -a</code> على RPi الخاص بك)، والمنفذ (الافتراضي هو 1883) واسم مستخدم الوسيط وكلمة المرور (التي قمت بإنشائها سابقًا) واسم الموضوع (يمكنك اختيار أي). كما يجب أن يكون عنوان IP المحلي لـ Raspberry Pi ثابتًا.

لا تنسى النقر على <code>تمكين</code> و <code>الاحتفاظ بالحالات</code>.

</li>

<li>

احفظ التغييرات. الآن ستظهر الأجهزة تلقائيًا في Home Assistant.

</li>
</List>

</li>

<li>

توصيل الأجهزة 

<List>

<li>

قم بتوصيل أجهزتك عن طريق الانتقال إلى <code>Zigbee</code> -> <code>الانضمام</code>. ضع أجهزتك في وضع الإقران، الطريقة الأكثر شيوعًا لتبديل جهاز إلى وضع الاتصال هي الاستمرار في الضغط على زر الطاقة أو تشغيلها/إيقافها لمدة 5 مرات.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

اضغط على زر تمكين الانضمام لبدء البحث عن أجهزة Zigbee. سترى أجهزة الاستشعار النشطة.

</li>

</List>
</li>

</List>