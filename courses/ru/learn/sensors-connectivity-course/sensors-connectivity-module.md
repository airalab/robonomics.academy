---
title: "Урок №4, Модуль подключения датчиков"
description: 'МОДУЛЬ ПОДКЛЮЧЕНИЯ ДАТЧИКОВ'
lessonNumber: 4
metaOptions: [Учить, Сенсоры Связности и Децентрализованная Сеть Сенсоров]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

В следующих статьях вы узнаете больше о модуле подключения датчиков. После этого вы сможете присоединиться к нашей децентрализованной сети датчиков или создать свою собственную карту датчиков.

## О модуле подключения датчиков

Децентрализованная сеть датчиков использует модуль `sensors-connectivity` на Python ([исходный код](https://github.com/airalab/sensors-connectivity)). Этот модуль позволяет любому пользователю запустить свой собственный сервер для получения данных от датчиков и их дальнейшей обработки. На данный момент разработчики запустили несколько таких серверов, и любой датчик может отправлять данные на них. Запуск нескольких серверов позволяет избежать потери данных в случае проблем с одним из них, так как датчики переключатся с неработающего сервера на работающий. В основном, вы можете представить модуль подключения датчиков как черный ящик с одним входом (данные датчика) и множеством выходов.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

Модуль подключения датчиков представляет собой набор станций (станция_1, станция_2 ... станция_n), которые получают различные данные, включая данные от датчиков через протокол HTTP. Также это могут быть датчики, подключенные к компьютеру через USB или любой другой источник данных. Полученные данные от станций обрабатываются модулем и передаются кормушкам (кормушка_1, кормушка_2 ... кормушка_n). Кормушки отправляют обработанные данные пользователю; в нашем случае данные отправляются в децентрализованный канал IPFS. 

Карта [Децентрализованной сети датчиков](https://sensors.robonomics.network/#/) - это децентрализованное приложение (dapp), работающее на компьютере. Оно считывает данные из канала IPFS и отображает их на карте. Нет прямого соединения между сервером, который собирает данные от датчиков, и картой, которую видит пользователь; данные передаются между ними через IPFS pubsub, что снижает нагрузку на серверы. 

Кроме того, время от времени файл с данными за последний период времени хранится в IPFS, а хэш этих данных записывается на блокчейн. Поскольку IPFS является сетью с адресацией по содержимому, хранение данных в нем гарантирует, что любое изменение данных не останется незамеченным, потому что адрес нужного файла содержит хэш его содержимого, который изменится при любом изменении данных. Блокчейн используется для передачи хэша пользователю, который может использовать его для получения нужных данных из IPFS (это происходит, когда запрашивается история карты).

## Установка модуля для Linux

**Предварительные требования и установка**

<List type="numbers">

<li>

Для сборки модуля `sensors-connectivity` необходимо установить демон IPFS с версией не выше `0.8.x`. Предполагая, что вы работаете на Linux, выполните следующее (для версии `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

Установите пакет с инструментами разработки `python3-dev` и установщик пакетов для Python `pip`:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

Установите модуль как пакет PyPI:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

Если вы видите следующее предупреждение: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

Запустите следующую команду:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## Конфигурация

<List type="numbers">

<li>

Создайте каталог для файла конфигурации и файла базы данных в любом месте. Эта база данных будет сохранять хеши IPFS датчиков, временную метку и статус службы:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
Имя файла базы данных может быть любым, но расширение должно быть <code>.db</code>
</RoboAcademyNote>

</li>


<li>

Создайте файл конфигурации в том же каталоге:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

Скопируйте следующее в файл и вставьте полный путь к файлу базы данных в поле db_path. Этой конфигурации будет достаточно для получения данных датчиков через HTTP и отправки их на карту Robonomics:

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

После установки конфигурации запустите службу с путем к файлу конфигурации в другом терминале:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

Вы увидите логи в терминале (также они будут добавлены в `~/.logs`). Пример:

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

## После установки

Чтобы подключить ваш модуль `sensors-connectivity` к нашей Децентрализованной Сети Датчиков и увидеть ваши данные на карте, вам нужно отправить ваш IPFS ID на [vm@multi-agent.io](mailto:vm@multi-agent.io) или [ping@airalab.org](mailto:ping@airalab.org). Мы добавим ваш ID в список контроля доступа.

Получите свой IPFS `ID` с помощью следующей команды после запуска демона IPFS:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>