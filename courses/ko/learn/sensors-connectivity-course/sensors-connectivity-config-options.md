---
title: "레슨 #5, 센서 연결 구성 옵션"
description: '센서 연결 구성 옵션'
lessonNumber: 5
metaOptions: [배우기, 센서 연결 및 분산 센서 네트워크]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

현재 SDS011 센서만 기본 지원되지만, 다른 센서를 추가하는 것도 매우 쉽고 몇 가지 사용 준비가 된 구성을 준비했습니다. 구성 필드의 전체 개요는 [여기](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config)에서 확인할 수 있습니다. 다음으로 몇 가지 고급 구성 시나리오를 살펴보겠습니다.

## 시나리오 #1: 시리얼 포트에 SDS011 연결

센서를 네트워크에 연결하는 가장 쉽고 직접적인 방법은 시리얼 포트를 사용하는 것입니다. 

<List type="numbers">

<li>

보드를 USB 포트에 연결하고 경로를 찾으십시오. 이 예에서는 `ttyUSB0`입니다.


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

다음과 같이 새 구성 파일을 만들거나 기존 파일을 편집하십시오. `db_path`에 데이터베이스 경로, `port` 필드에 보드 경로, `geo` 필드에 센서의 위도/경도를 삽입하는 것을 잊지 마십시오.

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

<li>센서 연결 모듈 시작.</li>

</List>


## 시나리오 #2: MQTT를 통해 SDS011 연결

<RoboAcademyNote type="okay" title="INFO">로보노믹스 센서 펌웨어는 MQTT와 작동하지 않습니다. MQTT를 통해 작동하는 추가 센서를 위한 설정입니다.
</RoboAcademyNote>

<List type="numbers">

<li>

MQTT 브로커(예: [Mosquitto](https://mosquitto.org/) 또는 유사한)를 설치하고 구성하십시오.

</li>

<li>

다음과 같이 새 구성 파일을 만들거나 기존 파일을 편집하십시오. 삽입:

- `db_path` 필드에 데이터베이스 경로

- `comstation` 섹션의 `port` 필드에 보드 경로

- `geo` 필드에 센서의 위도/경도

- `mqttstation` 섹션의 `host` 필드에 MQTT 브로커 호스트

- `mqttstation` 섹션의 `port` 필드에 MQTT 브로커 포트

- 센서가 데이터를 보내는 토픽을 `topic` 필드에

- 필요한 경우 브로커에 연결하기 위한 `username` 및 `password`를 삽입하십시오.


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

<li>센서 연결 모듈 시작.</li>

</List>

## 시나리오 #3: 로보노믹스 데이터로그와 센서 데이터 발행

이 시나리오는 센서 데이터를 로보노믹스 패러체인의 데이터로그 기능을 사용하여 업로드하는 방법을 보여줍니다. 데이터로그는 web3 기술에서의 텔레메트리의 아날로그입니다. 이 기능은 시간 간격마다 센서 데이터 스냅샷을 생성하여 데이터의 신뢰성을 높입니다. 데이터가 어떻게 수집되는지는 중요하지 않습니다: HTTP, MQTT 또는 COM을 통해 수집되더라도.

<RoboAcademyNote type="warning" title="WARNING">귀하의 계정에 XRT 토큰이 있어야 합니다
</RoboAcademyNote>

<List type="numbers">

<li>

다음과 같이 새 구성 파일을 만들거나 기존 파일을 편집하십시오. 삽입:

- `db_path` 필드에 데이터베이스 경로

- `comstation` 섹션의 `port` 필드에 보드 경로

- `geo` 필드에 센서의 위도/경도

- `suri` 필드에 로보노믹스 패러체인 계정의 개인 키

- `dump_interval` 필드에 로그를 수집하는 기간(초)

- (선택사항) `temporal_username`, `temporal_password` 필드에서 [Temporal.Cloud](http://Temporal.Cloud)에 파일을 업로드하기 위한 자격 증명

- (선택사항) `pinata_api`, `pinata_secret` 필드에서 Pinata에 파일을 업로드하기 위한 자격 증명

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

<li>센서 연결 모듈을 시작합니다.</li>

</List>