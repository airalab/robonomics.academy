---
title: "Lezione n. 2, Hardware del sensore"
description: 'HARDWARE DEL SENSORE'
lessonNumber: 2
metaOptions: [Imparare, Connettività dei sensori e Rete decentralizzata di sensori]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Se desideri partecipare al monitoraggio dell'aria con la Rete di Sensori Decentralizzata, devi ottenere una scheda di monitoraggio dell'inquinamento dell'aria con sensori. Ci sono due modi per farlo:

<List>

<li>ordinare tutte le parti necessarie e assemblare la scheda personalizzata da solo.</li>
<li>ordinare una scheda pronta all'uso dal team di Robonomics.</li>

</List>

## Assemblaggio Manuale della Scheda

Per costruire la tua scheda, devi trovare i seguenti componenti:

- Sensore Laser PM2.5 e PM10 [SDS011](https://www.amazon.com/SDS011-Quality-Detection-Conditioning-Monitor/dp/B07FSDMRR5)

- Modulo wireless seriale [NodeMcu V3 CH340](https://www.amazon.com/ACEIRMC-Wireless-Development-Compatible-MicroPython/dp/B092ZCG2X2) basato su ESP8266

- Convertitore mini560 DC-DC 5A [(esempio)](https://www.amazon.com/Alinan-Efficiency-Converter-Regulator-Stabilized/dp/B09W8P1QNM)

- Connettore DC [(esempio)](https://www.amazon.com/CenryKay-DC-099-Threaded-Collegareor-Adapter/dp/B08CMMQMP6?th=1)

- Adattatore di alimentazione 12V/2А [(esempio)](https://www.amazon.com/TMEZON-Power-Adapter-Supply-2-1mm/dp/B00Q2E5IXW)

- scatola di montaggio [(esempio)](https://www.amazon.com/LeMotech-Dustproof-Waterproof-Electrical-300mmx250mmx120mm/dp/B075DHT7X2/ref=sxin_18_ac_d_mf_brs?ac_md=7-4-TGVNb3RlY2g%3D-ac_d_mf_brs_brs&content-id=amzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d%3Aamzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&crid=2ZDX87O7MINYG&cv_ct_cx=junction+box+plastic&keywords=junction+box+plastic&pd_rd_i=B075DHT7X2&pd_rd_r=2bbd50d4-9ef9-4fa1-a1a2-e55c482bce49&pd_rd_w=EcHLy&pd_rd_wg=z42mC&pf_rd_p=1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&pf_rd_r=WDAX58YZKG6YKZ70X5QE&qid=1676642125&sprefix=Junction+Box%2Caps%2C451&sr=1-4-8b2f235a-dddf-4202-bbb9-592393927392)

Inoltre, puoi installare sensori aggiuntivi:

<List  type="numbers">

<li>

Con interfaccia I2C:

<List>

<li>

[BMP180](https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf) — temperatura e umidità

</li>

<li>

[BME/P280](https://www.mouser.com/datasheet/2/783/BST-BME280-DS002-1509607.pdf) — temperatura, umidità, pressione atmosferica

</li>

<li>

[HTU21D](https://eu.mouser.com/ProductDetail/Measurement-Specialties/HTU21D?qs=tx5doIiTu8oixw1WN5Uy8A%3D%3D) — temperatura e umidità

</li>

<li>

[CCS811 VOC SENSOR](https://www.sciosense.com/wp-content/uploads/documents/Application-Note-Baseline-Save-and-Restore-on-CCS811.pdf) — composti organici volatili, equivalente CO2

</li>

</List>

</li>

<li>

Con interfaccia 1-Wire:

<List>

<li>

[DHT22(AM2302)](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf) — temperatura e umidità

</li>

<li>

[DS18B20](https://cdn.sparkfun.com/datasheets/Sensors/Temp/DS18B20.pdf) — temperatura

</li>

</List>

</li>

</List>

Puoi trovare il processo di assemblaggio nel video qui sotto. Mostra anche il processo di flashing, ma ne parleremo più avanti.

<RoboAcademyYoutube link="https://www.youtube.com/watch?v=OdTd1sacCso" />

## Richiedi la scheda Robonomics

In alternativa, puoi richiedere la scheda Robonomics. Per farlo, invia un'email a uno dei seguenti indirizzi:

- vm@multi-agent.io
- ping@airalab.org

La scheda Robonomics si basa su ESP8266 ed è progettata per un'alimentazione da 6-24V, utilizzando il convertitore DC-DC DC MINI560. Questa scheda ti consente di collegare il sensore di particelle SDS011 e diversi sensori aggiuntivi (controlla l'elenco sopra). C'è anche un modello MINI più piccolo con un elenco abbreviato di dispositivi collegabili.

<LessonImages figure figureCaption="Full model of Robonomics board" src="sensors-connectivity-course/lesson-2-1.png" alt="Full model of Robonomics board"/>

<LessonImages  figure figureCaption="Mini model of Robonomics board" src="sensors-connectivity-course/lesson-2-2.png" alt="Mini model of Robonomics board"/>

I progetti per entrambi i modelli possono essere trovati qui: per il [modello completo](https://oshwlab.com/ludovich88/aira_sensor_rev0-1) e per il [modello mini](https://oshwlab.com/ludovich88/aira_sensor_d1_mini).

Diamo un'occhiata più da vicino alla scheda. Ha diversi connettori per la connessione (sono evidenziati in blu e verde).

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-2-3.png" alt="Full model of Robonomics board"/>

Blocco morsetto blu, da sinistra a destra (tutti i morsetti sono firmati):

<List>
  <li class="flex">

  <code>12V</code> — morsetto per collegare l'alimentazione alla scheda; la tensione consigliata è di 12 volt.

  </li>

  <li class="flex">

  <code>GND</code> di terra (punto di potenziale zero) — serve sia per il collegamento del potenziale zero dell'alimentazione, sia per il collegamento dei sensori.

  </li>

  <li class="flex">

  <code>POWER SENSOR</code> — uscita di alimentazione configurabile a cui sono collegati i sensori; l'uscita può essere impostata su 3,3 o 5 volt.

  </li>

  <li class="flex">

  <code>SDA</code> — linea dati seriale, viene utilizzata per collegare i sensori tramite l'interfaccia I2C.

  </li>

  <li class="flex">

  <code>SCL/1WIRE</code> — terminale configurabile a cui è collegata la linea di clock seriale; utilizzato per collegare i sensori tramite l'interfaccia I2C o 1-Wire.

  </li>
</List>

L'impostazione dell'uscita di alimentazione per il sensore e la selezione dell'interfaccia avviene impostando i jumper, contrassegnati in giallo nell'immagine (`5V`, `3V`, `I2C`, `1WIRE`). I jumper vengono installati orizzontalmente, i posti per l'installazione dei jumper sono firmati.


<RoboAcademyNote type="warning" title="WARNING">
Puoi scegliere la tensione per l'alimentazione impostando un solo jumper a 3,3 volt o 5 volt. L'installazione di due jumper a 3,3 e 5 volt danneggerà il dispositivo. Lo stesso principio vale quando si sceglie un'interfaccia per i sensori, installare un solo jumper al posto di I2C o 1-Wire. L'installazione di due jumper potrebbe danneggiare il dispositivo.
</RoboAcademyNote>

La scheda ha un blocco aggiuntivo di ingressi, contrassegnato in verde nell'immagine (`GND`, `5V`, `SDA`, `SCL`).

Sul lato sinistro della scatola blu c'è un interruttore di alimentazione per forzare il riavvio della scheda. È in posizione `ON` per impostazione predefinita.

Dopo aver configurato il sensore, tutto ciò che resta è flasharlo e configurarlo.
