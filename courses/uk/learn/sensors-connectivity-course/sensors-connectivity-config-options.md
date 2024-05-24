---
title: "Урок №5, Опції конфігурації підключення датчиків"
description: 'ОПЦІЇ КОНФІГУРАЦІЇ ПІДКЛЮЧЕННЯ ДАТЧИКІВ'
lessonNumber: 5
metaOptions: [Вивчайте, Підключення датчиків та децентралізована мережа датчиків]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Наразі підтримується лише датчик SDS011 з коробки, але досить легко додати інші датчики, і ми підготували кілька готових конфігурацій. Повний огляд полів конфігурації доступний [тут](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config). Далі ми розглянемо кілька сценаріїв розширених конфігурацій.

## Сценарій №1: Підключення SDS011 до послідовного порту

Найпростіший і найбільш прямолінійний спосіб підключити ваш датчик до мережі - використання послідовного порту. 

<List type="numbers">

<li>

Підключіть плату до порту USB і знайдіть шлях до нього. У цьому прикладі це `ttyUSB0`


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

Створіть новий файл конфігурації або відредагуйте існуючий за аступними вказівками. Не забудьте вставити шлях до вашої бази даних у поле `db_path`, шлях до дошки у поле `port` та широту / довготу датчика у поле `geo`.

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

<li>Запустіть модуль підключення датчиків.</li>

</List>


## Сценарій №2: Підключення SDS011 через MQTT

<RoboAcademyNote type="okay" title="INFO">Прошивка датчиків Robonomics не працює з MQTT. Ці налаштування для додаткових датчиків, які працюють через MQTT.
</RoboAcademyNote>

<List type="numbers">

<li>

Встановіть та налаштуйте брокер MQTT (наприклад, [Mosquitto](https://mosquitto.org/) або подібний).

</li>

<li>

Створіть новий файл конфігурації або відредагуйте існуючий за наступними вказівками. Вставте:

- шлях до вашої бази даних у поле `db_path`

- шлях до дошки у поле `port` в розділі `comstation`

- широту / довготу датчика у поле `geo`

- хост брокера MQTT у полі `host` в розділі `mqttstation`

- порт брокера MQTT у полі `port` в розділі `mqttstation`

- тему, куди ваші датчики ідправляють дані у поле `topic`

- `ім'я користувача` та `пароль` для підключення до брокера, якщо це потрібно.


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

<li>Запустіть модуль підключення датчиків.</li>

</List>

## Сценарій №3: Публікація даних датчиків за допомогою Robonomics Datalog

Цей сценарій показує, як завантажити дані вашого датчика на паралельну функцію Robonomics. Datalog є аналогом телеметрії в технологіях web3. Функція призначена для створення знімка даних датчика кожен період часу, що підвищує надійність даних. Не має значення, як збираються дані: через HTTP, MQTT або COM.

<RoboAcademyNote type="warning" title="WARNING">Вам потрібно мати токени XRT на своєму рахунку
</RoboAcademyNote>

<List type="numbers">

<li>

Створіть новий файл конфігурації або відредагуйте існуючий за наступними вказівками. Вставте:

- шлях до вашої бази даних у поле `db_path`

- шлях до дошки у поле `port` в розділі `comstation`

- широту / довготу датчика у поле `geo`

- приватний ключ від облікового запису Robonomics parachain у поле `suri`

- період часу для збору журналу в секундах до поля `dump_interval`

- (необов’язково) облікові дані для завантаження файлів у [Temporal.Cloud](http://Temporal.Cloud) у полях `temporal_username`, `temporal_password`

- (необов’язково) облікові дані для завантаження файлів у Pinata в полях `pinata_api`, `pinata_secret`

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

<li>Запустіть модуль підключення датчиків.</li>

</List>