---
title: "Урок №5, Опции конфигурации подключения датчиков"
description: 'ОПЦИИ КОНФИГУРАЦИИ ПОДКЛЮЧЕНИЯ ДАТЧИКОВ'
lessonNumber: 5
metaOptions: [Учить, Сенсоры Связности и Децентрализованная Сеть Сенсоров]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

На данный момент поддерживается только датчик SDS011, но также довольно легко добавить другие датчики, и мы подготовили несколько готовых конфигураций. Полный обзор полей конфигурации доступен [здесь](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config). Далее мы рассмотрим несколько продвинутых сценариев конфигурации.

## Сценарий №1: Подключение SDS011 к последовательному порту

Самый простой и прямолинейный способ подключить ваш датчик к сети - использовать последовательный порт. 

<List type="numbers">

<li>

Подключите плату к USB-порту и найдите путь к ней. В данном примере это `ttyUSB0`


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

Создайте новый файл конфигурации или отредактируйте существующий следующим образом. Не забудьте вставить путь к вашей базе данных в поле `db_path`, путь к плате в поле `port` и широту / долготу датчика в поле `geo`.

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

<li>Запустите модуль подключения датчиков.</li>

</List>


## Сценарий №2: Подключение SDS011 через MQTT

<RoboAcademyNote type="okay" title="INFO">Прошивка датчиков Robonomics не работает с MQTT. Эти настройки для дополнительных датчиков, которые работают через MQTT.
</RoboAcademyNote>

<List type="numbers">

<li>

Установите и настройте брокер MQTT (например, [Mosquitto](https://mosquitto.org/) или аналогичный).

</li>

<li>

Создайте новый файл конфигурации или отредактируйте существующий следующим образом. Вставьте:

- путь к вашей базе данных в поле `db_path`

- путь к плате в поле `port` в разделе `comstation`

- широту / долготу датчика в поле `geo`

- хост брокера MQTT в поле `host` в разделе `mqttstation`

- порт брокера MQTT в поле `port` в разделе `mqttstation`

- тему, куда ваш датчик отправляет данные, в поле `topic`

- `имя пользователя` и `пароль` для подключения к брокеру, если это требуется.


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

<li>Запустите модуль подключения датчиков.</li>

</List>

## Сценарий №3: Публикация данных сенсоров с помощью Robonomics Datalog

Этот сценарий показывает, как загрузить данные вашего сенсора с помощью функции datalog в парачейн Robonomics. Datalog - это аналог телеметрии в технологиях web3. Функция предназначена для создания снимка данных сенсора каждый период времени, что повышает надежность данных. Не имеет значения, как данные собираются: через HTTP, MQTT или COM.

<RoboAcademyNote type="warning" title="WARNING">У вас должны быть токены XRT на вашем счету
</RoboAcademyNote>

<List type="numbers">

<li>

Создайте новый файл конфигурации или отредактируйте существующий следующим образом. Вставьте:

- путь к вашей базе данных в поле `db_path`

- путь к плате в поле `port` в разделе `comstation`

- широту / долготу датчика в поле `geo`

- приватный ключ от аккаунта парачейна Robonomics в поле `suri`

- период времени для сбора журнала в секундах в поле `dump_interval`

- (необязательно) учетные данные для загрузки файлов в [Temporal.Cloud](http://Temporal.Cloud) в полях `temporal_username`, `temporal_password`

- (необязательно) учетные данные для загрузки файлов в Pinata в полях `pinata_api`, `pinata_secret`

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

<li>Старт Модуль подключения датчиков.</li>

</List>