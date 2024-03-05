---
title: "الدرس الثاني أجهزة الاستشعار"
description: أجهزة الاستشعار  
lessonNumber: 2
metaOptions: [تعلم, توصيل الاستشعار وشبكة الاستشعار اللامركزية]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

إذا كنت ترغب في المشاركة في مراقبة الهواء باستخدام شبكة الاستشعار اللامركزية ، فيجب عليك الحصول على لوحة مراقبة للتلوث الهوائي مع أجهزة الاستشعار. هناك طريقتان للقيام بذلك:

<List>

<li>طلب جميع الأجزاء اللازمة وتجميع اللوحة المخصصة بنفسك.</li>
<li>طلب لوحة جاهزة للاستخدام من فريق Robonomics.</li>

</List>

## تجميع اللوحة يدويًا

لبناء لوحتك الخاصة ، تحتاج إلى العثور على العناصر التالية:

- مستشعر PM2.5 و PM10 بالليزر [SDS011](https://www.amazon.com/SDS011-Quality-Detection-Conditioning-Monitor/dp/B07FSDMRR5)

- وحدة لاسلكية تسلسلية [NodeMcu V3 CH340](https://www.amazon.com/ACEIRMC-Wireless-Development-Compatible-MicroPython/dp/B092ZCG2X2) على أساس ESP8266

- محول DC-DC mini560 بقدرة 5 أمبير [(مثال)](https://www.amazon.com/Alinan-Efficiency-Converter-Regulator-Stabilized/dp/B09W8P1QNM)

- موصل DC [(مثال)](https://www.amazon.com/CenryKay-DC-099-Threaded-اتصلor-Adapter/dp/B08CMMQMP6?th=1)

- محول طاقة 12V/2А [(مثال)](https://www.amazon.com/TMEZON-Power-Adapter-Supply-2-1mm/dp/B00Q2E5IXW)

- صندوق تركيب [(مثال)](https://www.amazon.com/LeMotech-Dustproof-Waterproof-Electrical-300mmx250mmx120mm/dp/B075DHT7X2/ref=sxin_18_ac_d_mf_brs?ac_md=7-4-TGVNb3RlY2g%3D-ac_d_mf_brs_brs&content-id=amzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d%3Aamzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&crid=2ZDX87O7MINYG&cv_ct_cx=junction+box+plastic&keywords=junction+box+plastic&pd_rd_i=B075DHT7X2&pd_rd_r=2bbd50d4-9ef9-4fa1-a1a2-e55c482bce49&pd_rd_w=EcHLy&pd_rd_wg=z42mC&pf_rd_p=1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&pf_rd_r=WDAX58YZKG6YKZ70X5QE&qid=1676642125&sprefix=Junction+Box%2Caps%2C451&sr=1-4-8b2f235a-dddf-4202-bbb9-592393927392)

كما يمكنك تثبيت مستشعرات إضافية:

<List  type="numbers">

<li>

بواجهة I2C:

<List>

<li>

[BMP180](https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf) — درجة الحرارة والرطوبة

</li>

<li>

[BME/P280](https://www.mouser.com/datasheet/2/783/BST-BME280-DS002-1509607.pdf) — درجة الحرارة والرطوبة والضغط الجوي

</li>

<li>

[HTU21D](https://eu.mouser.com/ProductDetail/Measurement-Specialties/HTU21D?qs=tx5doIiTu8oixw1WN5Uy8A%3D%3D) — درجة الحرارة والرطوبة

</li>

<li>

[CCS811 VOC SENSOR](https://www.sciosense.com/wp-content/uploads/documents/Application-Note-Baseline-Save-and-Restore-on-CCS811.pdf) — المركبات العضوية القابلة للتطاير، مكافئ ثاني أكسيد الكربون

</li>

</List>

</li>

<li>

بواجهة 1-Wire:

<List>

<li>

[DHT22(AM2302)](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf) — درجة الحرارة والرطوبة

</li>

<li>

[DS18B20](https://cdn.sparkfun.com/datasheets/Sensors/Temp/DS18B20.pdf) — درجة الحرارة

</li>

</List>

</li>

</List>

يمكنك العثور على عملية التجميع في الفيديو أدناه. كما يظهر عملية التفليش، ولكن سنتحدث عنها لاحقًا.

<RoboAcademyYoutube link="https://www.youtube.com/watch?v=OdTd1sacCso" />

## طلب لوحة Robonomics

بديلاً، يمكنك طلب لوحة Robonomics. للقيام ب��لك، أرسل بريدًا إلكترونيًا إلى أحد العناوين التالية:

- vm@multi-agent.io
- ping@airalab.org

تعتمد لوحة Robonomics على ESP8266 ومصممة لتزويد الطاقة بجهد 6-24 فولت، باستخدام محول DC-DC MINI560. تسمح لك هذه اللوحة بتوصيل مستشعر الجسيمات SDS011 وعدة مستشعرات إضافية (تحقق من القائمة أعلاه). هناك أيضًا نموذج MINI أصغر بقائمة مختصرة من الأجهزة القابلة للتوصيل.

<LessonImages figure figureCaption="Full model of Robonomics board" src="sensors-connectivity-course/lesson-2-1.png" alt="Full model of Robonomics board"/>

<LessonImages  figure figureCaption="Mini model of Robonomics board" src="sensors-connectivity-course/lesson-2-2.png" alt="Mini model of Robonomics board"/>

يمكن العثور على المخططات الهندسية لكلا النموذجين هنا: لل[نموذج الكامل](https://oshwlab.com/ludovich88/aira_sensor_rev0-1) ولل[نموذج المصغر](https://oshwlab.com/ludovich88/aira_sensor_d1_mini).

دعونا نلقي نظرة أقرب على اللوحة. تحتوي على عدة منافذ توصيل (تم تحديدها باللون الأزرق والأخضر).

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-2-3.png" alt="Full model of Robonomics board"/>

كتلة الطرف الأزرق، من اليسار إلى اليمين (تم توقيع جميع الطرفين):

<List>
  <li class="flex">

  <code>12V</code> — طرف لتوصيل مصدر الطاقة باللوحة؛ الجهد الموصى به هو 12 فولت.

  </li>

  <li class="flex">

  <code>GND</code> الأرض (نقطة الجهد الصفري) — تستخدم لتوصيل الجهد الصفري لمصدر الطاقة، ولتوصيل المستشعرات.

  </li>

  <li class="flex">

  <code>POWER SENSOR</code> — مخرج الطاقة القابل للتكوين الذي يتم توصيل المستشعرات به؛ يمكن تعيين الإخراج إلى 3.3 أو 5 فولت.

  </li>

  <li class="flex">

  <code>SDA</code> — خط بيانات تسلسلي، يستخدم لتوصيل المستشعرات عبر واجهة I2C.

  </li>

  <li class="flex">

  <code>SCL/1WIRE</code> — طرف قابل للتكوين يتم توصيل خط الساعة التسلسلي به؛ يستخدم لتوصيل المستشعرات عبر واجهة I2C أو 1-Wire.

  </li>
</List>

يتم ضبط مخرج الطاقة للمستشعر واختيار الواجهة عن طريق ضبط القواطع، الموقعة باللون الأصفر في الصورة (`5V`, `3V`, `I2C`, `1WIRE`). يتم تثبيت القواطع أفقيًا، وتم توقيع الأماكن المخصصة لتثبيت القواطع.


<RoboAcademyNote type="warning" title="WARNING">
يمكنك اختيار الجهد لمصدر الطاقة عن طريق ضبط قاطع واحد فقط على 3.3 فولت أو 5 فولت. سيؤدي ضبط قاطعين على 3.3 و 5 فولت إلى تلف الجهاز. نفس القاعدة تنطبق عند اختيار واجهة للمستشعرات، قم بتثبيت قاطع واحد فقط في مكان I2C أو 1-Wire. تثبيت قاطعين قد يؤدي إلى تلف الجهاز.
</RoboAcademyNote>

تحتوي اللوحة على كتلة إدخالات إضافية، موقعة باللون الأ��ضر في الصورة (`GND`, `5V`, `SDA`, `SCL`).

على الجانب الأيسر من الصندوق الأزرق يوجد مفتاح طاقة لإعادة تشغيل اللوحة بالقوة. يكون في وضع `ON` افتراضيًا.

بعد إعداد المستشعر، كل ما تبقى هو تفليشه وتكوينه.
