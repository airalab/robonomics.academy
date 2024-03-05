---
title: "Lección #2, Hardware del sensor"
description: 'HARDWARE DEL SENSOR'
lessonNumber: 2
metaOptions: [Aprende, Conectividad de Sensores y Red de Sensores Descentralizada]
defaultName:  Sensors Connectivity & Decentralized Sensors Network
---

Si deseas participar en el monitoreo del aire con la Red de Sensores Descentralizados necesitas obtener una placa de contaminación del aire con sensores. Hay dos formas de hacerlo:

<List>

<li>ordenar todas las piezas necesarias y ensamblar la placa personalizada por ti mismo.</li>
<li>ordenar una placa lista para usar del equipo de Robonomics.</li>

</List>

## Ensamblaje Manual de la Placa

Para construir tu propia placa, necesitas encontrar los siguientes componentes:

- Sensor láser PM2.5 y PM10 [SDS011](https://www.amazon.com/SDS011-Quality-Detection-Conditioning-Monitor/dp/B07FSDMRR5)

- Módulo inalámbrico serie [NodeMcu V3 CH340](https://www.amazon.com/ACEIRMC-Wireless-Development-Compatible-MicroPython/dp/B092ZCG2X2) basado en ESP8266

- Convertidor mini560 DC-DC de 5A [(ejemplo)](https://www.amazon.com/Alinan-Efficiency-Converter-Regulator-Stabilized/dp/B09W8P1QNM)

- Conector DC [(ejemplo)](https://www.amazon.com/CenryKay-DC-099-Threaded-Conectaror-Adapter/dp/B08CMMQMP6?th=1)

- Adaptador de corriente 12V/2А [(ejemplo)](https://www.amazon.com/TMEZON-Power-Adapter-Supply-2-1mm/dp/B00Q2E5IXW)

- caja de montaje [(ejemplo)](https://www.amazon.com/LeMotech-Dustproof-Waterproof-Electrical-300mmx250mmx120mm/dp/B075DHT7X2/ref=sxin_18_ac_d_mf_brs?ac_md=7-4-TGVNb3RlY2g%3D-ac_d_mf_brs_brs&content-id=amzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d%3Aamzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&crid=2ZDX87O7MINYG&cv_ct_cx=junction+box+plastic&keywords=junction+box+plastic&pd_rd_i=B075DHT7X2&pd_rd_r=2bbd50d4-9ef9-4fa1-a1a2-e55c482bce49&pd_rd_w=EcHLy&pd_rd_wg=z42mC&pf_rd_p=1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&pf_rd_r=WDAX58YZKG6YKZ70X5QE&qid=1676642125&sprefix=Junction+Box%2Caps%2C451&sr=1-4-8b2f235a-dddf-4202-bbb9-592393927392)

Además, puedes instalar sensores adicionales:

<List  type="numbers">

<li>

Con interfaz I2C:

<List>

<li>

[BMP180](https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf) — temperatura y humedad

</li>

<li>

[BME/P280](https://www.mouser.com/datasheet/2/783/BST-BME280-DS002-1509607.pdf) — temperatura, humedad, presión atmosférica

</li>

<li>

[HTU21D](https://eu.mouser.com/ProductDetail/Measurement-Specialties/HTU21D?qs=tx5doIiTu8oixw1WN5Uy8A%3D%3D) — temperatura y humedad

</li>

<li>

[CCS811 VOC SENSOR](https://www.sciosense.com/wp-content/uploads/documents/Application-Note-Baseline-Save-and-Restore-on-CCS811.pdf) — compuestos orgánicos volátiles, equivalente de CO2

</li>

</List>

</li>

<li>

Con interfaz de 1-Wire:

<List>

<li>

[DHT22(AM2302)](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf) — temperatura y humedad

</li>

<li>

[DS18B20](https://cdn.sparkfun.com/datasheets/Sensors/Temp/DS18B20.pdf) — temperatura

</li>

</List>

</li>

</List>

Puedes encontrar el proceso de ensamblaje en el video a continuación. También muestra el proceso de flasheo, pero hablaremos de eso más tarde.

<RoboAcademyYoutube link="https://www.youtube.com/watch?v=OdTd1sacCso" />

## Solicitar la Placa Robonomics

Alternativamente, puedes solicitar la Placa Robonomics. Para hacerlo, envía un correo electrónico a una de las siguientes direcciones:

- vm@multi-agent.io
- ping@airalab.org

La placa Robonomics está basada en ESP8266 y está diseñada para una fuente de alimentación de 6-24V, utilizando el convertidor DC-DC MINI560. Esta placa te permite conectar el sensor de partículas SDS011 y varios sensores adicionales (consulta la lista anterior). También hay un modelo MINI más pequeño con una lista reducida de dispositivos conectables.

<LessonImages figure figureCaption="Full model of Robonomics board" src="sensors-connectivity-course/lesson-2-1.png" alt="Full model of Robonomics board"/>

<LessonImages  figure figureCaption="Mini model of Robonomics board" src="sensors-connectivity-course/lesson-2-2.png" alt="Mini model of Robonomics board"/>

Los planos de ambos modelos se pueden encontrar aquí: para el [modelo completo](https://oshwlab.com/ludovich88/aira_sensor_rev0-1) y para el [modelo mini](https://oshwlab.com/ludovich88/aira_sensor_d1_mini).

Veamos más de cerca la placa. Tiene varios puertos de conexión (están resaltados en azul y verde).

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-2-3.png" alt="Full model of Robonomics board"/>

Bloque de terminales azul, de izquierda a derecha (todas las terminales están marcadas):

<List>
  <li class="flex">

  <code>12V</code> — terminal para conectar la fuente de alimentación a la placa; la tensión recomendada es de 12 voltios.

  </li>

  <li class="flex">

  <code>GND</code> de tierra (punto de potencial cero) — sirve tanto para la conexión del potencial cero de la fuente de alimentación, como para la conexión de sensores.

  </li>

  <li class="flex">

  <code>POWER SENSOR</code> — salida de alimentación configurable a la que se conectan los sensores; la salida se puede configurar a 3.3 o 5 voltios.

  </li>

  <li class="flex">

  <code>SDA</code> — línea de datos serie, se utiliza para conectar sensores a través de la interfaz I2C.

  </li>

  <li class="flex">

  <code>SCL/1WIRE</code> — terminal configurable a la que se conecta la línea de reloj serie; se utiliza para conectar sensores a través de la interfaz I2C o 1-Wire.

  </li>
</List>

La configuración de la salida de alimentación para el sensor y la selección de la interfaz se realiza mediante la configuración de los jumpers, marcados en amarillo en la imagen (`5V`, `3V`, `I2C`, `1WIRE`). Los jumpers se instalan horizontalmente, los lugares para instalar los jumpers están marcados.


<RoboAcademyNote type="warning" title="WARNING">
Puedes elegir la tensión para la fuente de alimentación configurando solo un jumper a 3.3 voltios o 5 voltios. Configurar dos jumpers a 3.3 y 5 voltios dañará el dispositivo. La misma regla se aplica al elegir una interfaz para los sensores, instala solo un jumper en el lugar de I2C o 1-Wire. Instalar dos jumpers puede dañar el dispositivo.
</RoboAcademyNote>

La placa tiene un bloque adicional de entradas, marcado en verde en la imagen (`GND`, `5V`, `SDA`, `SCL`).

En el lado izquierdo de la caja azul hay un interruptor de encendido para forzar el reinicio de la placa. Está en la posición `ON` de forma predeterminada.

Después de configurar el sensor, todo lo que queda es flashear y configurarlo.
