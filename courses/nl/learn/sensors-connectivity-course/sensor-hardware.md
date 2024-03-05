---
title: "Les #2, Sensor hardware"
description: 'SENSOR HARDWARE'
lessonNumber: 2
metaOptions: [Leer, Sensoren Verbindeniviteit & Gedecentraliseerd Sensoren Netwerk]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Als u wilt deelnemen aan de luchtbewaking met het Decentralized Sensors Network, moet u een luchtvervuilingsbord met sensoren verkrijgen. Er zijn twee manieren om dit te doen:

<List>

<li>bestel alle benodigde onderdelen en monteer het aangepaste bord zelf.</li>
<li>bestel een kant-en-klaar bord van het Robonomics-team.</li>

</List>

## Handmatige bordassemblage

Om uw eigen bord te bouwen, moet u de volgende componenten vinden:

- Laser PM2.5 en PM10 Sensor [SDS011](https://www.amazon.com/SDS011-Quality-Detection-Conditioning-Monitor/dp/B07FSDMRR5)

- Seriële draadloze module [NodeMcu V3 CH340](https://www.amazon.com/ACEIRMC-Wireless-Development-Compatible-MicroPython/dp/B092ZCG2X2) gebaseerd op ESP8266

- 5A DC-DC mini560 converter [(voorbeeld)](https://www.amazon.com/Alinan-Efficiency-Converter-Regulator-Stabilized/dp/B09W8P1QNM)

- DC-connector [(voorbeeld)](https://www.amazon.com/CenryKay-DC-099-Threaded-Connector-Adapter/dp/B08CMMQMP6?th=1)

- 12V/2А voedingsadapter [(voorbeeld)](https://www.amazon.com/TMEZON-Power-Adapter-Supply-2-1mm/dp/B00Q2E5IXW)

- montagekast [(voorbeeld)](https://www.amazon.com/LeMotech-Dustproof-Waterproof-Electrical-300mmx250mmx120mm/dp/B075DHT7X2/ref=sxin_18_ac_d_mf_brs?ac_md=7-4-TGVNb3RlY2g%3D-ac_d_mf_brs_brs&content-id=amzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d%3Aamzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&crid=2ZDX87O7MINYG&cv_ct_cx=junction+box+plastic&keywords=junction+box+plastic&pd_rd_i=B075DHT7X2&pd_rd_r=2bbd50d4-9ef9-4fa1-a1a2-e55c482bce49&pd_rd_w=EcHLy&pd_rd_wg=z42mC&pf_rd_p=1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&pf_rd_r=WDAX58YZKG6YKZ70X5QE&qid=1676642125&sprefix=Junction+Box%2Caps%2C451&sr=1-4-8b2f235a-dddf-4202-bbb9-592393927392)

Ook kunt u extra sensoren installeren:

<List  type="numbers">

<li>

Met I2C-interface:

<List>

<li>

[BMP180](https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf) — temperatuur en vochtigheid

</li>

<li>

[BME/P280](https://www.mouser.com/datasheet/2/783/BST-BME280-DS002-1509607.pdf) — temperatuur, vochtigheid, atmosferische druk

</li>

<li>

[HTU21D](https://eu.mouser.com/ProductDetail/Measurement-Specialties/HTU21D?qs=tx5doIiTu8oixw1WN5Uy8A%3D%3D) — temperatuur en vochtigheid

</li>

<li>

[CCS811 VOC SENSOR](https://www.sciosense.com/wp-content/uploads/documents/Application-Note-Baseline-Save-and-Restore-on-CCS811.pdf) — vluchtige organische stoffen, CO2-equivalent

</li>

</List>

</li>

<li>

Met 1-Wire-interface:

<List>

<li>

[DHT22(AM2302)](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf) — temperatuur en vochtigheid

</li>

<li>

[DS18B20](https://cdn.sparkfun.com/datasheets/Sensors/Temp/DS18B20.pdf) — temperatuur

</li>

</List>

</li>

</List>

U kunt het assemblageproces vinden in de onderstaande video. Het laat ook het knipperproces zien, maar daar zullen we later over praten.

<RoboAcademyYoutube link="https://www.youtube.com/watch?v=OdTd1sacCso" />

## Vraag Robonomics Board aan

Als alternatief kunt u het Robonomics Board aanvragen. Om dit te doen, stuurt u een e-mail naar een van de volgende adressen:

- vm@multi-agent.io
- ping@airalab.org

Robonomics board is gebaseerd op ESP8266 en is ontworpen voor 6-24V voeding, met gebruik van DC-DC converter DC MINI560. Dit bord maakt het mogelijk om de SDS011 deeltjessensor en verschillende aanvullende sensoren aan te sluiten (controleer de bovenstaande lijst). Er is ook een kleiner MINI-model met een verkorte lijst van aansluitbare apparaten.

<LessonImages figure figureCaption="Full model of Robonomics board" src="sensors-connectivity-course/lesson-2-1.png" alt="Full model of Robonomics board"/>

<LessonImages  figure figureCaption="Mini model of Robonomics board" src="sensors-connectivity-course/lesson-2-2.png" alt="Mini model of Robonomics board"/>

De blauwdrukken voor beide modellen zijn hier te vinden: voor [volledig model](https://oshwlab.com/ludovich88/aira_sensor_rev0-1) en voor [mini model](https://oshwlab.com/ludovich88/aira_sensor_d1_mini).

Laten we eens nader bekijken naar het bord. Het heeft verschillende connectorpoorten voor aansluiting (ze zijn gemarkeerd in blauw en groen).

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-2-3.png" alt="Full model of Robonomics board"/>

Blauw klemmenblok, van links naar rechts (alle klemmen zijn gemarkeerd):

<List>
  <li class="flex">

  <code>12V</code> — klem voor het aansluiten van de voeding op het bord; de aanbevolen spanning is 12 volt.

  </li>

  <li class="flex">

  <code>GND</code> van aarde (punt van nul potentieel) — dient zowel voor aansluiting van het nulpotentieel van de voeding als voor aansluiting van sensoren.

  </li>

  <li class="flex">

  <code>POWER SENSOR</code> — configureerbare voedingsuitgang waaraan sensoren zijn aangesloten; de uitgang kan worden ingesteld op 3,3 of 5 volt.

  </li>

  <li class="flex">

  <code>SDA</code> — seriële datalijn, wordt gebruikt om sensoren aan te sluiten via de I2C-interface.

  </li>

  <li class="flex">

  <code>SCL/1WIRE</code> — configureerbare klem waaraan de seriële kloklijn is aangesloten; wordt gebruikt om sensoren aan te sluiten via I2C- of 1-Wire-interface.

  </li>
</List>

Het instellen van de voedingsuitgang voor de sensor en het selecteren van de interface gebeurt door de jumpers in te stellen, gemarkeerd geel in de afbeelding (`5V`, `3V`, `I2C`, `1WIRE`). De jumpers worden horizontaal geïnstalleerd, de plaatsen voor het installeren van de jumpers zijn gemarkeerd.


<RoboAcademyNote type="warning" title="WARNING">
U kunt de spanning voor de voeding kiezen door slechts één jumper in te stellen op 3,3 volt of 5 volt. Het instellen van twee jumpers op 3,3 en 5 volt zal het apparaat beschadigen. Dezelfde regel geldt bij het kiezen van een interface voor sensoren, installeer slechts één jumper op de plaats van I2C of 1-Wire. Het installeren van twee jumpers kan het apparaat beschadigen.
</RoboAcademyNote>

Het bord heeft een extra blok met ingangen, gemarkeerd groen in de afbeelding (`GND`, `5V`, `SDA`, `SCL`).

Aan de linkerkant van de blauwe doos bevindt zich een aan/uit-schakelaar om het bord te dwingen opnieuw op te starten. Standaard staat het in de `ON`-positie.

Na het instellen van de sensor, hoeft u alleen nog maar te knipperen en te configureren.
