---
title: "Lección #5, Opciones de configuración de conectividad de sensores"
description: 'OPCIONES DE CONFIGURACIÓN DE CONECTIVIDAD DE SENSORES'
lessonNumber: 5
metaOptions: [Aprende, Conectividad de Sensores y Red de Sensores Descentralizada]
defaultName:  Sensors Connectivity & Decentralized Sensors Network
---

Por ahora solo se admite el sensor SDS011 de forma predeterminada, pero es bastante fácil agregar otros sensores también y hemos preparado algunas configuraciones listas para usar. Una descripción completa de los campos de configuración está disponible [aquí](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config). A continuación, veremos varios escenarios de configuración avanzada.

## Escenario #1: Conectar SDS011 al puerto serie

La forma más fácil y directa de conectar su sensor a la red es utilizando el puerto serie. 

<List type="numbers">

<li>

Conecte su placa a un puerto USB y busque el camino hacia ella. En este ejemplo es `ttyUSB0`


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

Cree un nuevo archivo de configuración o edite el existente con lo siguiente. No olvide insertar la ruta de su base de datos en el campo `db_path`, la ruta de la placa en el campo `port` y la latitud / longitud de un sensor en el campo `geo`.

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation":{
      "enable":true,
      "port":"/dev/<YOUR/PATH/TO/BOARD>",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": false,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>Inicie el módulo de Conectividad de Sensores.</li>

</List>


## Escenario #2: Conectar SDS011 a través de MQTT

<RoboAcademyNote type="okay" title="INFO">El firmware de sensores de Robonomics no funciona con MQTT. Estas configuraciones son para sensores adicionales que funcionan a través de MQTT.
</RoboAcademyNote>

<List type="numbers">

<li>

Instale y configure un broker MQTT (como [Mosquitto](https://mosquitto.org/) o similar).

</li>

<li>

Cree un nuevo archivo de configuración o edite el existente con lo siguiente. Inserte:

- la ruta de su base de datos en el campo `db_path`

- una ruta de placa en el campo `port` en la sección `comstation`

- una latitud / longitud de un sensor en el campo `geo`

- un host de broker MQTT en el campo `host` en la sección `mqttstation`

- un puerto de broker MQTT en el campo `port` en la sección `mqttstation`

- un tema donde sus sensores envían datos en el campo `topic`

- `nombre de usuario` y `contraseña` para conectarse al broker si es necesario.


<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation":{
      "enable":false,
      "port":"/dev/<YOUR/PATH/TO/BOARD>",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": false,
      "port": 8001
   },
   "mqttstation": {
      "enable": true,
      "host": "[YOUR_MQTT_BROKER_HOST]",
      "port": "[YOUR_MQTT_BROKER_PORT]",
      "topic": "[MQTT_TOPIC_OF_SENSORS]",
      "username": "YOUR_MQTT_USERNAME",
      "password": "YOUR_MQTT_PASSWORD"
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>Inicie el módulo de Conectividad de Sensores.</li>

</List>

## Escenario #3: Publicar datos de sensores con Robonomics Datalog

Este escenario muestra cómo cargar los datos de su sensor con la función de datalog de la parachain de Robonomics. Datalog es el análogo de la telemetría en las tecnologías web3. La función está destinada a crear una instantánea de los datos del sensor en cada período de tiempo, lo que aumenta la confiabilidad de los datos. No importa cómo se estén recopilando los datos: a través de HTTP, MQTT o COM.

<RoboAcademyNote type="warning" title="WARNING">Debe tener tokens XRT en su cuenta
</RoboAcademyNote>

<List type="numbers">

<li>

Cree un nuevo archivo de configuración o edite el existente con lo siguiente. Inserte:

- la ruta de su base de datos en el campo `db_path`

- una ruta de placa en el campo `port` en la sección `comstation`

- una latitud / longitud de un sensor en el campo `geo`

- una clave privada de la cuenta de la parachain de Robonomics en el campo `suri`

- un período de tiempo para recopilar el registro en segundos en el campo `dump_interval`

- (opcional) credenciales para cargar archivos en [Temporal.Cloud](http://Temporal.Cloud) en los campos `temporal_username`, `temporal_password`

- (opcional) credenciales para cargar archivos a Pinata en los campos `pinata_api`, `pinata_secret`

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "[YOUR/PATH/TO/DATABASE]"
   },
   "comstation":{
      "enable":false,
      "port":"/dev/[YOUR/PATH/TO/BOARD]",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": true,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": true,
      "suri": "[YOUR_PRIVATE_KEY]",
      "dump_interval": TIME_PERIOD,
      "temporal_username": "YOUR_TEMPORAL_USERNAME",
      "temporal_password": "YOUR_TEMPORAL_PASSWORD",
      "pinata_api": "YOUR_PINATA_API_KEY",
      "pinata_secret": "YOUR_PINATA_SECRET"
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": true,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>Inicie el módulo de conectividad de sensores.</li>

</List>