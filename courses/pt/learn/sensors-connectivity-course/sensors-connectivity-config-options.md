---
title: "Lição #5, Opções de configuração de conectividade de sensores"
description: 'OPÇÕES DE CONFIGURAÇÃO DE CONECTIVIDADE DE SENSORES'
lessonNumber: 5
metaOptions: [Aprenda, Conectividade de Sensores e Rede Descentralizada de Sensores]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Por enquanto, apenas o sensor SDS011 é suportado out-of-box, mas é bastante fácil adicionar outros sensores também e nós preparamos algumas configurações prontas para uso. Uma visão geral completa dos campos de configuração está disponível [aqui](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config). Em seguida, vamos dar uma olhada em vários cenários de configuração avançada.

## Cenário #1: Conectar SDS011 à Porta Serial

A maneira mais fácil e direta de conectar seu sensor à rede é usando a porta serial. 

<List type="numbers">

<li>

Conecte sua placa a uma porta USB e encontre o caminho para ela. Neste exemplo é `ttyUSB0`


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

Crie um novo arquivo de configuração ou edite o existente com o seguinte. Não se esqueça de inserir o caminho do seu banco de dados no campo `db_path`, o caminho da placa no campo `port` e a latitude / longitude de um sensor no campo `geo`.

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

<li>Inicie o módulo de Conectividade de Sensores.</li>

</List>


## Cenário #2: Conectar SDS011 via MQTT

<RoboAcademyNote type="okay" title="INFO">O firmware dos sensores Robonomics não funciona com MQTT. Essas configurações são para sensores adicionais, que funcionam através do MQTT.
</RoboAcademyNote>

<List type="numbers">

<li>

Instale e configure um broker MQTT (como [Mosquitto](https://mosquitto.org/) ou similar).

</li>

<li>

Crie um novo arquivo de configuração ou edite o existente com o seguinte. Insira:

- o caminho do seu banco de dados no campo `db_path`

- um caminho da placa no campo `port` na seção `comstation`

- uma latitude / longitude de um sensor no campo `geo`

- um host do broker MQTT no campo `host` na seção `mqttstation`

- uma porta do broker MQTT no campo `port` na seção `mqttstation`

- um tópico onde seus sensores enviam dados no campo `topic`

- `username` e `password` para se conectar ao broker, se necessário.


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

<li>Inicie o módulo de Conectividade de Sensores.</li>

</List>

## Cenário #3: Publicar Dados dos Sensores com Robonomics Datalog

Este cenário mostra como carregar os dados do seu sensor para a parachain Robonomics com a função datalog. Datalog é o equivalente a telemetria nas tecnologias web3. A função tem como objetivo criar um instantâneo dos dados do sensor a cada período de tempo, aumentando a confiabilidade dos dados. Não importa como os dados estão sendo coletados: via HTTP, MQTT ou COM.

<RoboAcademyNote type="warning" title="WARNING">Você precisa ter tokens XRT em sua conta
</RoboAcademyNote>

<List type="numbers">

<li>

Crie um novo arquivo de configuração ou edite o existente com o seguinte. Insira:

- o caminho do seu banco de dados no campo `db_path`

- um caminho da placa no campo `port` na seção `comstation`

- uma latitude / longitude de um sensor no campo `geo`

- uma chave privada da conta da parachain Robonomics para o campo `suri`

- um período de tempo para coleta de log em segundos para o campo `dump_interval`

- (opcional) credenciais para fazer upload de arquivos para [Temporal.Cloud](http://Temporal.Cloud) nos campos `temporal_username`, `temporal_password`

- (opcional) credenciais para fazer upload de arquivos para Pinata nos campos `pinata_api`, `pinata_secret`

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

<li>Inicie o módulo de conectividade de sensores.</li>

</List>