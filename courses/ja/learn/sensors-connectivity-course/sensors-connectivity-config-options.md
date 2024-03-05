---
title: "Lesson #5, センサー接続設定オプション"
description: 'センサー接続設定オプション'
lessonNumber: 5
metaOptions: [学ぶ, センサー接続性＆分散型センサーネットワーク]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

現時点ではSDS011センサーのみがout-of-boxでサポートされていますが、他のセンサーを追加するのもかなり簡単で、いくつかの使用準備が整った設定を用意しています。設定フィールドの完全な概要は[こちら](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config)で入手できます。次に、いくつかの高度な設定シナリオを見ていきます。

## シナリオ＃1：SDS011をシリアルポートに接続

センサーをネットワークに接続する最も簡単で直接的な方法は、シリアルポートを使用することです。 

<List type="numbers">

<li>

ボードを USB ポートに接続し、そこへのパスを見つけます。 この例では`ttyUSB0`です。


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

次の内容で新しい設定ファイルを作成するか、既存のファイルを編集します。`db_path`にデータベースパス、`port`フィールドにボードパス、`geo`フィールドにセンサーの緯度/経度を挿入することを忘れないでください。

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

<li>センサー接続モジュールを起動します。</li>

</List>


## シナリオ＃2：MQTTを介してSDS011に接続

<RoboAcademyNote type="okay" title="INFO">RobonomicsセンサーファームウェアはMQTTとは動作しません。これらの設定は、MQTTを介して動作する追加のセンサー用です。
</RoboAcademyNote>

<List type="numbers">

<li>

MQTTブローカー（[Mosquitto](https://mosquitto.org/)など）をインストールして構成します。

</li>

<li>

次の内容で新しい設定ファイルを作成するか、既存のファイルを編集します。挿入する内容：

- `db_path`フィールドにデータベースパス

- `comstation`セクションの`port`フィールドにボードパス

- `geo`フィールドにセンサーの緯度/経度

- `mqttstation`セクションの`host`フィールドにMQTTブローカーホスト

- `mqttstation`セクションの`port`フィールドにMQTTブローカーポート

- `topic`フィールドにセンサーがデータを送信するトピック

- 必要な場合はブローカーに接続するための`username`および`password`


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

<li>センサー接続モジュールを起動します。</li>

</List>

## シナリオ＃3：Robonomics Datalogでセンサーデータを公開する

このシナリオでは、センサーのデータをRobonomicsパラチェーンのdatalog機能を使用してアップロードする方法を示します。 Datalogは、web3テクノロジーにおけるテレメトリの類似物です。 この機能は、時間ごとにセンサーデータのスナップショットを作成することを意味し、データの信頼性を高めます。 データがどのように収集されているかは問題ではありません：HTTP、MQTT、またはCOM経由で

<RoboAcademyNote type="warning" title="WARNING">アカウントにXRTトークンを持っている必要があります
</RoboAcademyNote>

<List type="numbers">

<li>

次の内容で新しい設定ファイルを作成するか、既存のファイルを編集します。挿入する内容：

- `db_path`フィールドにデータベースパス

- `comstation`セクションの`port`フィールドにボードパス

- `geo`フィールドにセンサーの緯度/経度

- `suri`フィールドにRobonomicsパラチェーンアカウントの秘密鍵

- `dump_interval` フィールドにログを収集する時間を秒単位で指定します。

- (オプション) ファイルを [Temporal.Cloud](http://Temporal.Cloud) にアップロードするための資格情報 (`temporal_username`、`temporal_password`フィールド)

- (オプション) ファイルを Pinata にアップロードするための資格情報 (`pinata_api`、`pinata_secret` フィールド)

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

<li>センサー接続モジュールを開始します</li>

</List>