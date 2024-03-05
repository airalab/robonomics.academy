---
title: "Урок №4, Модуль підключення датчиків"
description: 'МОДУЛЬ ПІДКЛЮЧЕННЯ ДАТЧИКІВ'
lessonNumber: 4
metaOptions: [Вивчайте, Підключення датчиків та децентралізована мережа датчиків]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

У наступних статтях ви дізнаєтеся більше про модуль підключення датчиків. Після цього ви зможете приєднатися до нашої децентралізованої мережі датчиків або створити свою власну карту датчиків.

## Про підключення датчиків

Децентралізована мережа датчиків використовує модуль Python `sensors-connectivity` ([вихідний код](https://github.com/airalab/sensors-connectivity)). Цей модуль дозволяє будь-якому користувачеві запустити власний сервер для отримання даних від датчиків та подальшої обробки їх. На даний момент розробники запустили кілька таких серверів і будь-який датчик може надсилати дані на них. Запуск кількох серверів дозволяє уникнути втрати дан��х у випадку проблем з одним з них, оскільки датчики перейдуть з неробочого сервера на робочий. В основному, ви можете уявити модуль підключення датчиків як чорний ящик з одним входом (дані датчика) та багатьма виходами.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

Модуль підключення датчиків - це набір станцій (станція_1, станція_2 ... станція_n), які отримують різні дані, включаючи дані від датчиків через протокол HTTP. Також це можуть бути датчики, підключені до комп'ютера через USB або будь-який інший джерело даних. Дані, отримані від станцій, обробляються модулем і передаються до годувальників (годувальник_1, годувальник_2 ... годувальник_n). Годувальники надсилають оброблені дані користувачеві; у нашому випадку дані надсилаються на децентралізований канал IPFS. 

Карта [Децентралізованої м��режі датчиків](https://sensors.robonomics.network/#/) - це децентралізований додаток (dapp), який працює на комп'ютері. Він зчитує дані з каналу IPFS та відображає їх на карті. Немає прямого зв'язку між сервером, який збирає дані від датчиків, та картою, яку бачить користувач; дані передаються між ними через IPFS pubsub, що зменшує навантаження на сервери. 

Крім того, час від часу файл з даними за останній період часу зберігається в IPFS, а хеш цих даних потім записується на блокчейн. Оскільки IPFS є мережею з адресацією вмісту, зберігання даних в ньому гарантує, що будь-яка зміна даних не залишиться непоміченою, оскільки адреса потрібного файлу містить хеш його вмісту, який змінюється з будь-якою зміною даних. Блокчейн використовується для передачі хешу користувачеві, який може використовувати його для отримання потрібних даних з IPFS (це відбувається, коли ви запитуєте історію карти).

## Модуль налаштування для Linux

**Попередні вимоги та встановлення**

<List type="numbers">

<li>

Для побудови модуля `sensors-connectivity` необхідно встановити демон IPFS з версією не вище `0.8.x`. Припускаючи, що ви працюєте на Linux, виконайте наступне (для версії `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

Встановіть пакет з інструментами розробки `python3-dev` та інсталятор пакетів для Python `pip`:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

Встановіть модуль як пакет PyPI:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

Якщо ви бачите наступне попередження: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

Виконайте наступну команду:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## Конфігурація

<List type="numbers">

<li>

Створіть каталог для файлу конфігурації та файлу бази даних де завгодно. Ця база даних буде зберігати хеші IPFS даних сенсорів, мітки часу та статус служби:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
Ім'я файлу бази даних може бути будь-яким, але розширення повинно бути <code>.db</code>
</RoboAcademyNote>

</li>


<li>

Створіть файл конфігурації в тому ж каталозі:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

Скопіюйте наступне до файлу та вставте повний шлях до файлу бази даних у поле db_path. Ця конфігурація буде достатньою для отримання даних сенсорів через HTTP та відправлення їх на карту Robonomics:

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation": {
      "enable": false,
      "port": "/dev/<YOUR/PATH/TO/BOARD>",
      "work_period": 300,
      "geo": "00.000000,00.000000",
      "public_key": ""
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

</List>

## Запуск


<List type="numbers">

<li>

Запуск демона IPFS:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

Після встанов��ення конфігурації запустіть службу зі шляхом до файлу конфігурації в іншому терміналі:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

Ви побачите журнали в терміналі (також їх буде додано до `~/.logs`). приклад:

<LessonCodeWrapper codeClass="big-code" language="bash">$ sensors_connectivity test.json
2022-09-02 14:08:48,408 - INFO - Getting data from the stations...
2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...
2022-09-02 14:08:48,411 - INFO - Checking data base...
2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...
2022-09-02 14:09:18,410 - INFO - Getting data from the stations...
2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...
2022-09-02 14:09:48,412 - INFO - Getting data from the stations...
2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...
2022-09-02 14:10:18,413 - INFO - Getting data from the stations...</LessonCodeWrapper>

</li>

</List>

## Після встановлення

Щоб підключити ваш модуль `sensors-connectivity` до нашої Децентралізованої мережі сенсорів та побачити ваші дані на карті, вам потрібно надіслати ваш IPFS ID на [vm@multi-agent.io](mailto:vm@multi-agent.io) або [ping@airalab.org](mailto:ping@airalab.org). Ми додамо ваш ID до списку контролю доступу.

Отримайте свій IPFS `ID` за допомогою наступної команди після запуску демона IPFS:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>