---
title: "Lesson #5, Sensors connectivity config options"
description: 'SENSORS CONNECTIVITY CONFIG OPTIONS'
lessonNumber: 5
courseID: 4
metaOptions: [Online Courses, Sensors Connectivity & Decentralized Sensors Network]
---

For now only SDS011 sensor is supported out-of-box, but it quite easy to add other sensors as well and we has prepared a few ready-to-use configurations. Full overview of the configuration fields are available [here](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config). Next we will take a look to several advanced configurations scenarios.

## Scenario #1: Connect SDS011 to Serial Port

The easiest and the most straightforward way to connect your sensor to the network is using the serial port. 

<List type="numbers">

<li>

Connect you board to a USB port, and find path to it. In this example it is `ttyUSB0`


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

Create a new configuration file or edit the existing one with the following. Don't forget to insert your database path to `db_path`, board path to `port` field and latitude / longitude of a sensor to `geo` field.

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

<li>Start Sensors Connectivity module.</li>

</List>


## Scenario #2: Connect SDS011 via MQTT

<RoboAcademyNote type="okay" title="INFO">Robonomics sensors firmware doesn't work with MQTT. These settings for additional sensors, which work through MQTT.
</RoboAcademyNote>

<List type="numbers">

<li>

Install and config MQTT broker (like [Mosquitto](https://mosquitto.org/) or similar).

</li>

<li>

Create a new configuration file or edit the existing one with the following. Insert:

- your database path to `db_path` field

- a board path to `port` field in `comstation` section

- a latitude / longitude of a sensor to `geo` field

- an MQTT broker host in the `host` field in `mqttstation` section

- an MQTT broker port in the `port` field in `mqttstation` section

- a topic where your sensors sends data in the `topic` field

- `username` and `password` to connect to the broker if it is required.


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

<li>Start Sensors Connectivity module.</li>

</List>

## Scenario #3: Publish Sensors Data with Robonomics Datalog

This scenario shows how to upload your sensor's data to with datalog function Robonomics parachain. Datalog is analog of telemetry in web3 technologies. The function is meant to create a sensor's data snapshot each period of time, which increase reliability of data. It doesn't matter how data is being gathered: over HTTP, MQTT or COM.

<RoboAcademyNote type="warning" title="WARNING">You have to have XRT tokens on your account
</RoboAcademyNote>

<List type="numbers">

<li>

Create a new configuration file or edit the existing one with the following. Insert:

- your database path to `db_path` field

- a board path to `port` field in `comstation` section

- a latitude / longitude of a sensor to `geo` field

- a private key from Robonomics parachain account to `suri` field

- a period of time for collecting log in seconds to `dump_interval` field

- (optional) credentials to upload files to [Temporal.Cloud](http://Temporal.Cloud) in `temporal_username`, `temporal_password` fields

- (optional) credentials to upload files to Pinata in `pinata_api`, `pinata_secret` fields

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

<li>Start Sensors Connectivity module.</li>

</List>