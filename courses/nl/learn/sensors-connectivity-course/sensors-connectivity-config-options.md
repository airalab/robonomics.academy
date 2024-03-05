---
title: "Les #5, Sensorconnectiviteitsconfiguratieopties"
description: 'SENSORCONNECTIVITEITS-CONFIGURATIEOPTIES'
lessonNumber: 5
metaOptions: [Leer, Sensoren Verbindeniviteit & Gedecentraliseerd Sensoren Netwerk]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Voor nu wordt alleen de SDS011-sensor out-of-the-box ondersteund, maar het is vrij eenvoudig om andere sensoren toe te voegen en we hebben een paar kant-en-klare configuraties voorbereid. Een volledig overzicht van de configuratievelden is beschikbaar [hier](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config). Hierna zullen we kijken naar verschillende geavanceerde configuratiescenario's.

## Scenario #1: Verbind SDS011 met seriële poort

De makkelijkste en meest directe manier om uw sensor op het netwerk aan te sluiten is via de seriële poort. 

<List type="numbers">

<li>

Sluit uw bord aan op een USB-poort en zoek het pad ernaartoe. In dit voorbeeld is dit `ttyUSB0`


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

Maak een nieuw configuratiebestand aan of bewerk het bestaande met het volgende. Vergeet niet om uw databasepad in te voegen in het veld `db_path`, het bordpad in het veld `port` en de breedtegraad/lengtegraad van een sensor in het veld `geo`.

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

<li>Start de Sensors Connectivity-module.</li>

</List>


## Scenario #2: Verbind SDS011 via MQTT

<RoboAcademyNote type="okay" title="INFO">Robonomics-sensorsfirmware werkt niet met MQTT. Deze instellingen zijn voor aanvullende sensoren die via MQTT werken.
</RoboAcademyNote>

<List type="numbers">

<li>

Installeer en configureer een MQTT-broker (zoals [Mosquitto](https://mosquitto.org/) of vergelijkbaar).

</li>

<li>

Maak een nieuw configuratiebestand aan of bewerk het bestaande met het volgende. Voeg in:

- uw databasepad in het veld `db_path`

- een bordpad in het veld `port` in de sectie `comstation`

- een breedtegraad/lengtegraad van een sensor in het veld `geo`

- een MQTT-brokerhost in het veld `host` in de sectie `mqttstation`

- een MQTT-brokerpoort in het veld `port` in de sectie `mqttstation`

- een onderwerp waar uw sensoren gegevens naartoe sturen in het veld `topic`

- `gebruikersnaam` en `wachtwoord` om verbinding te maken met de broker indien nodig.


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

<li>Start de Sensors Connectivity-module.</li>

</List>

## Scenario #3: Publiceer Sensorsgegevens met Robonomics Datalog

Dit scenario laat zien hoe je de gegevens van je sensor kunt uploaden naar de Robonomics parachain met de datalog-functie. Datalog is het analogon van telemetrie in web3-technologieën. De functie is bedoeld om elke periode van tijd een momentopname van de gegevens van de sensor te maken, wat de betrouwbaarheid van de gegevens verhoogt. Het maakt niet uit hoe de gegevens worden verzameld: via HTTP, MQTT of COM.

<RoboAcademyNote type="warning" title="WARNING">Je moet XRT-tokens op je account hebben
</RoboAcademyNote>

<List type="numbers">

<li>

Maak een nieuw configuratiebestand aan of bewerk het bestaande met het volgende. Voeg in:

- uw databasepad in het veld `db_path`

- een bordpad in het veld `port` in de sectie `comstation`

- een breedtegraad/lengtegraad van een sensor in het veld `geo`

- een privésleutel van het Robonomics parachain-account naar het `suri`-veld

- een tijdsperiode voor het verzamelen van inlogseconden in het veld `dump_interval`

- (optioneel) inloggegevens om bestanden te uploaden naar [Temporal.Cloud](http://Temporal.Cloud) in de velden `temporal_username`, `temporal_password`

- (optioneel) inloggegevens om bestanden naar Pinata te uploaden in de velden `pinata_api`, `pinata_secret`

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

<li>Start de module Sensorenconnectiviteit.</li>

</List>