---
title: "Урок №2, Апаратне забезпечення датчика"
description: 'АПАРАТНЕ ЗАБЕЗПЕЧЕННЯ ДАТЧИКА'
lessonNumber: 2
metaOptions: [Вивчайте, Підключення датчиків та децентралізована мережа датчиків]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Якщо ви бажаєте брати участь у моніторингу повітря за допомогою Децентралізованої мережі датчиків, вам потрібно отримати плату для вимірювання забруднення повітря з датчиками. Є два способи це зробити:

<List>

<li>замовити всі необхідні деталі та скласти власну плату самостійно.</li>
<li>замовити готову плату від команди Robonomics.</li>

</List>

## Ручна збірка плати

Для того, щоб зібрати власну плату, вам потрібно знайти наступні компоненти:

- Лазерний датчик PM2.5 та PM10 [SDS011](https://www.amazon.com/SDS011-Quality-Detection-Conditioning-Monitor/dp/B07FSDMRR5)

- Серійний бездротовий модуль [NodeMcu V3 CH340](https://www.amazon.com/ACEIRMC-Wireless-Development-Compatible-MicroPython/dp/B092ZCG2X2) на основі ESP8266

- DC-DC міні560 конвертор 5А [(приклад)](https://www.amazon.com/Alinan-Efficiency-Converter-Regulator-Stabilized/dp/B09W8P1QNM)

- Роз'єм постійного струму [(приклад)](https://www.amazon.com/CenryKay-DC-099-Threaded-Підключітьor-Adapter/dp/B08CMMQMP6?th=1)

- Адаптер живлення 12V/2А [(приклад)](https://www.amazon.com/TMEZON-Power-Adapter-Supply-2-1mm/dp/B00Q2E5IXW)

- Коробка для монтажу [(приклад)](https://www.amazon.com/LeMotech-Dustproof-Waterproof-Electrical-300mmx250mmx120mm/dp/B075DHT7X2/ref=sxin_18_ac_d_mf_brs?ac_md=7-4-TGVNb3RlY2g%3D-ac_d_mf_brs_brs&content-id=amzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d%3Aamzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&crid=2ZDX87O7MINYG&cv_ct_cx=junction+box+plastic&keywords=junction+box+plastic&pd_rd_i=B075DHT7X2&pd_rd_r=2bbd50d4-9ef9-4fa1-a1a2-e55c482bce49&pd_rd_w=EcHLy&pd_rd_wg=z42mC&pf_rd_p=1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&pf_rd_r=WDAX58YZKG6YKZ70X5QE&qid=1676642125&sprefix=Junction+Box%2Caps%2C451&sr=1-4-8b2f235a-dddf-4202-bbb9-592393927392)

Також, ви можете встановити додаткові датчики:

<List  type="numbers">

<li>

З інтерфейсом I2C:

<List>

<li>

[BMP180](https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf) — температура та вологість

</li>

<li>

[BME/P280](https://www.mouser.com/datasheet/2/783/BST-BME280-DS002-1509607.pdf) — температура, вологість, атмосферний тиск

</li>

<li>

[HTU21D](https://eu.mouser.com/ProductDetail/Measurement-Specialties/HTU21D?qs=tx5doIiTu8oixw1WN5Uy8A%3D%3D) — температура та вологість

</li>

<li>

[CCS811 VOC SENSOR](https://www.sciosense.com/wp-content/uploads/documents/Application-Note-Baseline-Save-and-Restore-on-CCS811.pdf) — летючі органічні сполуки, еквівалент CO2

</li>

</List>

</li>

<li>

З інтерфейсом 1-Wire:

<List>

<li>

[DHT22(AM2302)](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf) — температура та вологість

</li>

<li>

[DS18B20](https://cdn.sparkfun.com/datasheets/Sensors/Temp/DS18B20.pdf) — температура

</li>

</List>

</li>

</List>

Процес збирання можна знайти у відео нижче. Також показано процес мигання, але про це ми поговоримо пізніше.

<RoboAcademyYoutube link="https://www.youtube.com/watch?v=OdTd1sacCso" />

## Запит до дошки Robonomics

Також ви можете запросити дошку Robonomics. Для цього надішліть електронного листа на одну з наступних адрес:

- vm@multi-agent.io
- ping@airalab.org

Дошка Robonomics базується на ESP8266 і призначена для живлення від 6 до 24 В, використовуючи DC-DC конвертер DC MINI560. Ця дошка дозволяє підключити датчик часток SDS011 та кілька додаткових датчиків (перевірте список вище). Є також менша модель MINI зі скороченим списком підключених пристроїв.

<LessonImages figure figureCaption="Full model of Robonomics board" src="sensors-connectivity-course/lesson-2-1.png" alt="Full model of Robonomics board"/>

<LessonImages  figure figureCaption="Mini model of Robonomics board" src="sensors-connectivity-course/lesson-2-2.png" alt="Mini model of Robonomics board"/>

Креслення для обох моделей можна знайти тут: для [повної моделі](https://oshwlab.com/ludovich88/aira_sensor_rev0-1) та для [міні-моделі](https://oshwlab.com/ludovich88/aira_sensor_d1_mini).

Давайте поближче розглянемо дошку. Вона має кілька роз'ємів для підключення (вони позначені синім та зеленим кольором).

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-2-3.png" alt="Full model of Robonomics board"/>

Синій клемний блок, зліва направо (всі клеми позначені):

<List>
  <li class="flex">

  <code>12V</code> — клема для підключення живлення до дошки; рекомендоваа напруга — 12 вольт.

  </li>

  <li class="flex">

  <code>GND</code> нульовий потенціал — служить як для підключення нульового потенціалу живлення, так і для підключення датчиків.

  </li>

  <li class="flex">

  <code>POWER SENSOR</code> — налаштований вихід живлення, до якого підключені датчики; вихід може бути встановлений на 3,3 або 5 вольт.

  </li>

  <li class="flex">

  <code>SDA</code> — послідовна лінія даних, використовується для підключення датчиків через інтерфейс I2C.

  </li>

  <li class="flex">

  <code>SCL/1WIRE</code> — налаштована клема, до якої підключена послідовна лінія годинника; використовується для підключення датчиків через I2C або 1-Wire інтерфейс.

  </li>
</List>

Встановлення вихідного живлення для датчика та вибір інтерфейсу виконується шляхом встановлення перемичок, позначених жовтим кольором на зображенні (`5V`, `3V`, `I2C`, `1WIRE`). Перемички встановлюються горизонтально, місця для встановлення перемичок позначені.


<RoboAcademyNote type="warning" title="WARNING">
Ви можете вибрати апругу для живлення, встановивши лише одну перемичку на 3,3 вольта або 5 вольт. Встановлення двох перемичок на 3,3 та 5 вольт пошкодить пристрій. Та ж правило діє при виборі інтерфейсу для датчиків, встановіть лише одну перемичку на місце I2C або 1-Wire. Встановлення двох перемичок може пошкодити пристрій.
</RoboAcademyNote>

Дошка має додатковий блок входів, позначений зеленим кольором на зображенні (`GND`, `5V`, `SDA`, `SCL`).

Зліва від синьої коробки є перемикач живлення для примусового перезавантаження дошки. Він знаходиться в положенні `ON` за замовчуванням.

Після налаштування датчика все, що залишається — це мигання та налаштування.
