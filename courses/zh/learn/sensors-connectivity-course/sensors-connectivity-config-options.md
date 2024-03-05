---
title: "第5课，传感器连接配置选项"
description: '传感器连接配置选项'
lessonNumber: 5
metaOptions: [学习, 传感器连接性和分散式传感器网络]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

目前只支持SDS011传感器的开箱即用，但很容易添加其他传感器，我们已经准备了一些现成的配置。配置字段的完整概述可在此处找到：[链接](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config)。接下来我们将看几个高级配置方案。

## 方案1：将SDS011连接到串口

将传感器连接到网络的最简单和最直接的方法是使用串口。 

<List type="numbers">

<li>

将您的开发板连接到 USB 端口，并找到它的路径。 在此示例中为`ttyUSB0`


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

创建一个新的配置文件或编辑现有的配置文件，如下所示。不要忘记将数据库路径插入到 `db_path`，将板路径插入到 `port` 字段，将传感器的纬度/经度插入到 `geo` 字段。

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

<li>启动传感器连接模块。</li>

</List>


## 方案2：通过MQTT连接SDS011

<RoboAcademyNote type="okay" title="INFO">Robonomics传感器固件不支持MQTT。这些设置适用于通过MQTT工作的其他传感器。
</RoboAcademyNote>

<List type="numbers">

<li>

安装和配置MQTT代理（如[Mosquitto](https://mosquitto.org/)或类似的）。

</li>

<li>

创建一个新的配置文件或编辑现有的配置文件，如下所示。插入：

- 将数据库路径插入到 `db_path` 字段

- 将板路径插入到 `comstation` 部分的 `port` 字段

- 将传感器的纬度/经度插入到 `geo` 字段

- 将MQTT代理主机插入到 `mqttstation` 部分的 `host` 字段

- 将MQTT代理端口插入到 `mqttstation` 部分的 `port` 字段

- 将传感器发送数据的主题插入到 `topic` 字段

- 如果需要，插入 `username` 和 `password` 以连接到代理。


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

<li>启动传感器连接模块。</li>

</List>

## 场景＃3：使用Robonomics Datalog发布传感器数据

此场景展示了如何使用Robonomics跨链功能将传感器数据上传到datalog。Datalog是web3技术中遥测的类比。该功能旨在每个时间段创建传感器数据的快照，从而提高数据的可靠性。无论数据是如何收集的：通过HTTP、MQTT或COM。

<RoboAcademyNote type="warning" title="WARNING">您必须在您的帐户上拥有XRT代币
</RoboAcademyNote>

<List type="numbers">

<li>

创建一个新的配置文件或编辑现有的配置文件，如下所示。插入：

- 将数据库路径插入到 `db_path` 字段

- 将板路径插入到 `comstation` 部分的 `port` 字段

- 将传感器的纬度/经度插入到 `geo` 字段

- Robonomics跨链帐户的私钥到`suri`字段

- 将日志收集到`dump_interval`字段的时间段（以秒为单位）

- （可选）将文件上传到 `temporal_username`、`temporal_password` 字段中的 [Temporal.Cloud](http://Temporal.Cloud) 的凭据

- （可选）将文件上传到`pinata_api`、`pinata_secret`字段中的 Pinata 的凭据

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

<li>启动传感器连接模块。</li>

</List>