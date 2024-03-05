---
title: "Lezione n. 5, Opzioni di configurazione della connettività dei sensori"
description: 'OPZIONI DI CONFIGURAZIONE DELLA CONNETTIVITÀ DEI SENSORI'
lessonNumber: 5
metaOptions: [Imparare, Connettività dei sensori e Rete decentralizzata di sensori]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Per ora solo il sensore SDS011 è supportato out-of-box, ma è abbastanza facile aggiungere altri sensori e abbiamo preparato alcune configurazioni pronte all'uso. Una panoramica completa dei campi di configurazione è disponibile [qui](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config). Successivamente esamineremo diversi scenari di configurazione avanzati.

## Scenario n. 1: Collegare SDS011 alla porta seriale

Il modo più semplice e diretto per collegare il sensore alla rete è utilizzare la porta seriale. 

<List type="numbers">

<li>

Collega la scheda a una porta USB e trova il percorso per raggiungerla. In questo esempio è `ttyUSB0`.


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

Crea un nuovo file di configurazione o modifica quello esistente con quanto segue. Non dimenticare di inserire il percorso del database nel campo `db_path`, il percorso della scheda nel campo `port` e la latitudine / longitudine di un sensore nel campo `geo`.

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

<li>Avvia il modulo di connettività dei sensori.</li>

</List>


## Scenario n. 2: Collegare SDS011 tramite MQTT

<RoboAcademyNote type="okay" title="INFO">Il firmware dei sensori Robonomics non funziona con MQTT. Queste impostazioni sono per sensori aggiuntivi, che funzionano tramite MQTT.
</RoboAcademyNote>

<List type="numbers">

<li>

Installa e configura un broker MQTT (come [Mosquitto](https://mosquitto.org/) o simile).

</li>

<li>

Crea un nuovo file di configurazione o modifica quello esistente con quanto segue. Inserisci:

- il percorso del tuo database nel campo `db_path`

- un percorso della scheda nel campo `port` nella sezione `comstation`

- una latitudine / longitudine di un sensore nel campo `geo`

- un host del broker MQTT nel campo `host` nella sezione `mqttstation`

- una porta del broker MQTT nel campo `port` nella sezione `mqttstation`

- un argomento in cui i tuoi sensori inviano i dati nel campo `topic`

- `username` e `password` per connettersi al broker se richiesto.


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

<li>Avvia il modulo di connettività dei sensori.</li>

</List>

## Scenario #3: Pubblica i dati dei sensori con Robonomics Datalog

Questo scenario mostra come caricare i dati del tuo sensore sulla parachain di Robonomics con la funzione datalog. Datalog è l'analogia della telemetria nelle tecnologie web3. La funzione è destinata a creare uno snapshot dei dati del sensore ogni periodo di tempo, aumentando la affidabilità dei dati. Non importa come vengono raccolti i dati: tramite HTTP, MQTT o COM.

<RoboAcademyNote type="warning" title="WARNING">Devi avere token XRT sul tuo account
</RoboAcademyNote>

<List type="numbers">

<li>

Crea un nuovo file di configurazione o modifica quello esistente con quanto segue. Inserisci:

- il percorso del tuo database nel campo `db_path`

- un percorso della scheda nel campo `port` nella sezione `comstation`

- una latitudine / longitudine di un sensore nel campo `geo`

- una chiave privata dall'account della parachain di Robonomics nel campo `suri`

- un periodo di tempo per la raccolta dei secondi di accesso nel campo `dump_interval`.

- (facoltativo) credenziali per caricare file su [Temporal.Cloud](http://Temporal.Cloud) nei campi `temporal_username`, `temporal_password`

- (facoltativo) credenziali per caricare file su Pinata nei campi `pinata_api`, `pinata_secret`

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

<li>Avvia il modulo Connettività Sensori.</li>

</List>