---
title: "Lektion #2, Sensor-Hardware"
description: 'SENSOR-HARDWARE'
lessonNumber: 2
metaOptions: [Lernen, Sensoren Konnektivität & Dezentrales Sensorennetzwerk]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Wenn Sie an der Luftüberwachung mit dem dezentralen Sensors-Netzwerk teilnehmen möchten, müssen Sie eine Luftverschmutzungskarte mit Sensoren erhalten. Es gibt zwei Möglichkeiten:

<List>

<li>Bestellen Sie alle notwendigen Teile und montieren Sie die benutzerdefinierte Karte selbst.</li>
<li>Bestellen Sie eine gebrauchsfertige Karte vom Robonomics-Team.</li>

</List>

## Manuelle Platinenmontage

Um Ihre eigene Platine zu bauen, benötigen Sie die folgenden Komponenten:

- Laser-PM2,5- und PM10-Sensor [SDS011](https://www.amazon.com/SDS011-Qualitätsdetektion-Konditionierung-Monitor/dp/B07FSDMRR5)

- Serielles drahtloses Modul [NodeMcu V3 CH340](https://www.amazon.com/ACEIRMC-Wireless-Development-Compatible-MicroPython/dp/B092ZCG2X2) basierend auf ESP8266

- 5A DC-DC mini560 Konverter [(Beispiel)](https://www.amazon.com/Alinan-Efficiency-Converter-Regulator-Stabilized/dp/B09W8P1QNM)

- DC-Steckverbinder [(Beispiel)](https://www.amazon.com/CenryKay-DC-099-Threaded-Verbindenor-Adapter/dp/B08CMMQMP6?th=1)

- 12V/2А-Netzteil [(Beispiel)](https://www.amazon.com/TMEZON-Power-Adapter-Supply-2-1mm/dp/B00Q2E5IXW)

- Montagebox [(Beispiel)](https://www.amazon.com/LeMotech-Dustproof-Waterproof-Electrical-300mmx250mmx120mm/dp/B075DHT7X2/ref=sxin_18_ac_d_mf_brs?ac_md=7-4-TGVNb3RlY2g%3D-ac_d_mf_brs_brs&content-id=amzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d%3Aamzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&crid=2ZDX87O7MINYG&cv_ct_cx=junction+box+plastic&keywords=junction+box+plastic&pd_rd_i=B075DHT7X2&pd_rd_r=2bbd50d4-9ef9-4fa1-a1a2-e55c482bce49&pd_rd_w=EcHLy&pd_rd_wg=z42mC&pf_rd_p=1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&pf_rd_r=WDAX58YZKG6YKZ70X5QE&qid=1676642125&sprefix=Junction+Box%2Caps%2C451&sr=1-4-8b2f235a-dddf-4202-bbb9-592393927392)

Außerdem können Sie zusätzliche Sensoren installieren:

<List  type="numbers">

<li>

Mit I2C-Schnittstelle:

<List>

<li>

[BMP180](https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf) — Temperatur und Luftfeuchtigkeit

</li>

<li>

[BME/P280](https://www.mouser.com/datasheet/2/783/BST-BME280-DS002-1509607.pdf) — Temperatur, Luftfeuchtigkeit, Luftdruck

</li>

<li>

[HTU21D](https://eu.mouser.com/ProductDetail/Measurement-Specialties/HTU21D?qs=tx5doIiTu8oixw1WN5Uy8A%3D%3D) — Temperatur und Luftfeuchtigkeit

</li>

<li>

[CCS811 VOC SENSOR](https://www.sciosense.com/wp-content/uploads/documents/Application-Note-Baseline-Save-and-Restore-on-CCS811.pdf) — flüchtige organische Verbindungen, CO2-Äquivalent

</li>

</List>

</li>

<li>

Mit 1-Wire-Schnittstelle:

<List>

<li>

[DHT22(AM2302)](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf) — Temperatur und Luftfeuchtigkeit

</li>

<li>

[DS18B20](https://cdn.sparkfun.com/datasheets/Sensors/Temp/DS18B20.pdf) — Temperatur

</li>

</List>

</li>

</List>

Den Montageprozess finden Sie im folgenden Video. Es zeigt auch den Flash-Prozess, aber wir werden später darüber sprechen.

<RoboAcademyYoutube link="https://www.youtube.com/watch?v=OdTd1sacCso" />

## Robonomics Board anfordern

Alternativ können Sie das Robonomics Board anfordern. Senden Sie dazu eine E-Mail an eine der folgenden Adressen:

- vm@multi-agent.io
- ping@airalab.org

Das Robonomics Board basiert auf ESP8266 und ist für eine Stromversorgung von 6-24V ausgelegt, unter Verwendung des DC-DC-Wandlers DC MINI560. Mit diesem Board können Sie den SDS011-Partikelsensor und mehrere zusätzliche Sensoren anschließen (überprüfen Sie die obige Liste). Es gibt auch ein kleineres MINI-Modell mit einer verkürzten Liste von anschließbaren Geräten.

<LessonImages figure figureCaption="Full model of Robonomics board" src="sensors-connectivity-course/lesson-2-1.png" alt="Full model of Robonomics board"/>

<LessonImages  figure figureCaption="Mini model of Robonomics board" src="sensors-connectivity-course/lesson-2-2.png" alt="Mini model of Robonomics board"/>

Die Baupläne für beide Modelle finden Sie hier: für das [vollständige Modell](https://oshwlab.com/ludovich88/aira_sensor_rev0-1) und für das [Mini-Modell](https://oshwlab.com/ludovich88/aira_sensor_d1_mini).

Werfen wir einen genaueren Blick auf das Board. Es verfügt über mehrere Anschlussports für die Verbindung (sie sind blau und grün markiert).

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-2-3.png" alt="Full model of Robonomics board"/>

Blauer Anschlussblock, von links nach rechts (alle Anschlüsse sind beschriftet):

<List>
  <li class="flex">

  <code>12V</code> — Anschluss für die Stromversorgung des Boards; die empfohlene Spannung beträgt 12 Volt.

  </li>

  <li class="flex">

  <code>GND</code> Masse (Bezugspunkt) — dient sowohl zur Verbindung des Nullpotentials der Stromversorgung als auch zur Verbindung von Sensoren.

  </li>

  <li class="flex">

  <code>POWER SENSOR</code> — Konfigurierbarer Stromausgang, an den Sensoren angeschlossen sind; die Ausgabe kann auf 3,3 oder 5 Volt eingestellt werden.

  </li>

  <li class="flex">

  <code>SDA</code> — Serien-Datenleitung, wird verwendet, um Sensoren über die I2C-Schnittstelle anzuschließen.

  </li>

  <li class="flex">

  <code>SCL/1WIRE</code> — Konfigurierbarer Anschluss, an den die serielle Taktleitung angeschlossen ist; wird verwendet, um Sensoren über die I2C- oder 1-Wire-Schnittstelle anzuschließen.

  </li>
</List>

Die Einstellung des Stromausgangs für den Sensor und die Auswahl der Schnittstelle erfolgt durch Setzen der Jumper, die im Bild gelb markiert sind (`5V`, `3V`, `I2C`, `1WIRE`). Die Jumper werden horizontal installiert, die Stellen für die Installation der Jumper sind beschriftet.


<RoboAcademyNote type="warning" title="WARNING">
Sie können die Spannung für die Stromversorgung auswählen, indem Sie nur einen Jumper auf 3,3 Volt oder 5 Volt setzen. Wenn Sie zwei Jumper auf 3,3 und 5 Volt setzen, wird das Gerät beschädigt. Dasselbe gilt, wenn Sie eine Schnittstelle für Sensoren auswählen, setzen Sie nur einen Jumper an die Stelle von I2C oder 1-Wire. Das Setzen von zwei Jumpern kann das Gerät beschädigen.
</RoboAcademyNote>

Das Board verfügt über einen zusätzlichen Block von Eingängen, der im Bild grün markiert ist (`GND`, `5V`, `SDA`, `SCL`).

Auf der linken Seite des blauen Kastens befindet sich ein Netzschalter, um das Board zum Neustart zu zwingen. Er befindet sich standardmäßig in der Position `ON`.

Nachdem der Sensor eingerichtet ist, bleibt nur noch das Flashen und Konfigurieren übrig.
