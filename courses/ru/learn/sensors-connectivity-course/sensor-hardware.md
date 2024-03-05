---
title: "Урок №2, Аппаратное обеспечение датчика"
description: 'АППАРАТНОЕ ОБЕСПЕЧЕНИЕ ДАТЧИКА'
lessonNumber: 2
metaOptions: [Учить, Сенсоры Связности и Децентрализованная Сеть Сенсоров]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Если вы хотите принять участие в мониторинге воздуха с помощью Децентрализованной Сети Датчиков, вам нужно получить доску для измерения загрязнения воздуха с датчиками. Есть два способа это сделать:

<List>

<li>заказать все необходимые детали и собрать настраиваемую доску самостоятельно.</li>
<li>заказать готовую доску от команды Robonomics.</li>

</List>

## Сборка доски вручную

Чтобы собрать свою собственную доску, вам нужно найти следующие компоненты:

- Лазерный датчик PM2.5 и PM10 [SDS011](https://www.amazon.com/SDS011-Quality-Detection-Conditioning-Monitor/dp/B07FSDMRR5)

- Серийный беспроводной модуль [NodeMcu V3 CH340](https://www.amazon.com/ACEIRMC-Wireless-Development-Compatible-MicroPython/dp/B092ZCG2X2) на основе ESP8266

- DC-DC мини-конвертер 5A mini560 [(пример)](https://www.amazon.com/Alinan-Efficiency-Converter-Regulator-Stabilized/dp/B09W8P1QNM)

- DC разъем [(пример)](https://www.amazon.com/CenryKay-DC-099-Threaded-Подключитьor-Adapter/dp/B08CMMQMP6?th=1)

- 12V/2А адаптер питания [(пример)](https://www.amazon.com/TMEZON-Power-Adapter-Supply-2-1mm/dp/B00Q2E5IXW)

- монтажный ящик [(пример)](https://www.amazon.com/LeMotech-Dustproof-Waterproof-Electrical-300mmx250mmx120mm/dp/B075DHT7X2/ref=sxin_18_ac_d_mf_brs?ac_md=7-4-TGVNb3RlY2g%3D-ac_d_mf_brs_brs&content-id=amzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d%3Aamzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&crid=2ZDX87O7MINYG&cv_ct_cx=junction+box+plastic&keywords=junction+box+plastic&pd_rd_i=B075DHT7X2&pd_rd_r=2bbd50d4-9ef9-4fa1-a1a2-e55c482bce49&pd_rd_w=EcHLy&pd_rd_wg=z42mC&pf_rd_p=1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&pf_rd_r=WDAX58YZKG6YKZ70X5QE&qid=1676642125&sprefix=Junction+Box%2Caps%2C451&sr=1-4-8b2f235a-dddf-4202-bbb9-592393927392)

Также вы можете установить дополнительные датчики:

<List  type="numbers">

<li>

С интерфейсом I2C:

<List>

<li>

[BMP180](https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf) — температура и влажность

</li>

<li>

[BME/P280](https://www.mouser.com/datasheet/2/783/BST-BME280-DS002-1509607.pdf) — температура, влажность, атмосферное давление

</li>

<li>

[HTU21D](https://eu.mouser.com/ProductDetail/Measurement-Specialties/HTU21D?qs=tx5doIiTu8oixw1WN5Uy8A%3D%3D) — температура и влажность

</li>

<li>

[Датчик летучих органических соединений CCS811 VOC](https://www.sciosense.com/wp-content/uploads/documents/Application-Note-Baseline-Save-and-Restore-on-CCS811.pdf) — летучие органические соединения, эквивалент CO2

</li>

</List>

</li>

<li>

С интерфейсом 1-Wire:

<List>

<li>

[DHT22(AM2302)](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf) — температура и влажность

</li>

<li>

[DS18B20](https://cdn.sparkfun.com/datasheets/Sensors/Temp/DS18B20.pdf) — температура

</li>

</List>

</li>

</List>

Процесс сборки можно найти в видео ниже. В нем также показан процесс прошивки, но о нем мы поговорим позже.

<RoboAcademyYoutube link="https://www.youtube.com/watch?v=OdTd1sacCso" />

## Запросить плату Robonomics

Также вы можете запросить плату Robonomics. Для этого отправьте электронное письмо на один из следующих адресов:

- vm@multi-agent.io
- ping@airalab.org

Плата Robonomics основана на ESP8266 и предназначена для питания от 6 до 24 В, используя преобразователь постоянного тока DC MINI560. На этой плате можно подключить датчик частиц SDS011 и несколько дополнительных датчиков (см. список выше). Существует также более компактная модель MINI с укороченным списком подключаемых устройств.

<LessonImages figure figureCaption="Full model of Robonomics board" src="sensors-connectivity-course/lesson-2-1.png" alt="Full model of Robonomics board"/>

<LessonImages  figure figureCaption="Mini model of Robonomics board" src="sensors-connectivity-course/lesson-2-2.png" alt="Mini model of Robonomics board"/>

Чертежи для обеих моделей можно найти здесь: для [полной модели](https://oshwlab.com/ludovich88/aira_sensor_rev0-1) и для [мини-модели](https://oshwlab.com/ludovich88/aira_sensor_d1_mini).

Давайте внимательнее рассмотрим плату. На ней есть несколько портов для подключения (они выделены синим и зеленым цветом).

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-2-3.png" alt="Full model of Robonomics board"/>

Синий клеммный блок, слева направо (все клеммы подписаны):

<List>
  <li class="flex">

  <code>12V</code> — клемма для подключения питания к плате; рекомендуемое напряжение - 12 вольт.

  </li>

  <li class="flex">

  <code>GND</code> нулевой потенциал — служит как для подключения нулевого потенциала питания, так и для подключения датчиков.

  </li>

  <li class="flex">

  <code>POWER SENSOR</code> — настраиваемый выход питания, к которому подключаются датчики; выход можно установить на 3,3 или 5 вольт.

  </li>

  <li class="flex">

  <code>SDA</code> — линия передачи данных, используется для подключения датчиков через интерфейс I2C.

  </li>

  <li class="flex">

  <code>SCL/1WIRE</code> — настраиваемая клемма, к которой подключается линия последовательных тактов; используется для подключения датчиков через интерфейс I2C или 1-Wire.

  </li>
</List>

Настройка выхода питания для датчика и выбор интерфейса осуществляется путем установки перемычек, обозначенных желтым цветом на изображении (`5V`, `3V`, `I2C`, `1WIRE`). Перемычки устанавливаются горизонтально, места для установки перемычек подписаны.


<RoboAcademyNote type="warning" title="WARNING">
Вы можете выбрать напряжение для питания, установив только одну перемычку на 3,3 вольта или 5 вольт. Установка двух перемычек на 3,3 и 5 вольт повредит устройство. То же правило действует при выборе интерфейса для датчиков, установите только одну перемычку на место I2C или 1-Wire. Установка двух перемычек может повредить устройство.
</RoboAcademyNote>

На плате есть дополнительный блок входов, обозначенный зеленым цветом на изображении (`GND`, `5V`, `SDA`, `SCL`).

С левой стороны синего блока находится выключатель питания для принудительного перезапуска платы. По умолчанию он находится в положении `ON`.

После настройки датчика остается только прошить и настроить его.
