---
title: "Lektion #5, Sensoren Konnektivität Konfigurationsoptionen"
description: 'SENSOREN KONNEKTIVITÄTSKONFIGURATIONSOPTIONEN'
lessonNumber: 5
metaOptions: [Lernen, Sensoren Konnektivität & Dezentrales Sensorennetzwerk]
defaultName:  Sensors Connectivity & Decentralized Sensors Network
---

Derzeit wird nur der SDS011-Sensor out-of-the-box unterstützt, aber es ist ziemlich einfach, andere Sensoren hinzuzufügen, und wir haben einige fertige Konfigurationen vorbereitet. Eine vollständige Übersicht über die Konfigurationsfelder finden Sie [hier](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config). Als nächstes werden wir uns einige fortgeschrittene Konfigurationsszenarien ansehen.

## Szenario #1: Verbinden Sie SDS011 mit dem seriellen Anschluss

Der einfachste und geradlinigste Weg, Ihren Sensor mit dem Netzwerk zu verbinden, besteht darin, den seriellen Anschluss zu verwenden. 

<List type="numbers">

<li>

Schließen Sie Ihr Board an einen USB-Anschluss an und finden Sie den Pfad dorthin. In diesem Beispiel ist es „ttyUSB0“.


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

Erstellen Sie eine neue Konfigurationsdatei oder bearbeiten Sie die vorhandene mit den folgenden. Vergessen Sie nicht, Ihren Datenbankpfad in das Feld `db_path`, den Boardpfad in das Feld `port` und den Breiten- / Längengrad eines Sensors in das Feld `geo` einzufügen.

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

<li>Starten Sie das Sensoren-Konnektivitätsmodul.</li>

</List>


## Szenario #2: Verbinden Sie SDS011 über MQTT

<RoboAcademyNote type="okay" title="INFO">Die Robonomics-Sensoren-Firmware funktioniert nicht mit MQTT. Diese Einstellungen sind für zusätzliche Sensoren gedacht, die über MQTT arbeiten.
</RoboAcademyNote>

<List type="numbers">

<li>

Installieren und konfigurieren Sie einen MQTT-Broker (wie [Mosquitto](https://mosquitto.org/) oder ähnlich).

</li>

<li>

Erstellen Sie eine neue Konfigurationsdatei oder bearbeiten Sie die vorhandene mit den folgenden. Fügen Sie ein:

- Ihren Datenbankpfad in das Feld `db_path` ein

- einen Boardpfad in das Feld `port` im Abschnitt `comstation` ein

- einen Breiten- / Längengrad eines Sensors in das Feld `geo` ein

- einen MQTT-Broker-Host in das Feld `host` im Abschnitt `mqttstation` ein

- einen MQTT-Broker-Port in das Feld `port` im Abschnitt `mqttstation` ein

- ein Thema, unter dem Ihre Sensoren Daten senden, in das Feld `topic` ein

- `Benutzername` und `Passwort`, um sich bei Bedarf mit dem Broker zu verbinden.


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

<li>Starten Sie das Sensoren-Konnektivitätsmodul.</li>

</List>

## Szenario #3: Veröffentlichen von Sensordaten mit Robonomics Datalog

In diesem Szenario wird gezeigt, wie Sie die Daten Ihres Sensors mit der Datalog-Funktion der Robonomics-Parachain hochladen können. Datalog ist das Äquivalent von Telemetrie in Web3-Technologien. Die Funktion soll zu jedem Zeitpunkt einen Schnappschuss der Sensordaten erstellen, um die Zuverlässigkeit der Daten zu erhöhen. Es spielt keine Rolle, wie die Daten gesammelt werden: über HTTP, MQTT oder COM.

<RoboAcademyNote type="warning" title="WARNING">Sie müssen XRT-Token auf Ihrem Konto haben
</RoboAcademyNote>

<List type="numbers">

<li>

Erstellen Sie eine neue Konfigurationsdatei oder bearbeiten Sie die vorhandene mit den folgenden. Fügen Sie ein:

- Ihren Datenbankpfad in das Feld `db_path` ein

- einen Boardpfad in das Feld `port` im Abschnitt `comstation` ein

- einen Breiten- / Längengrad eines Sensors in das Feld `geo` ein

- einen privaten Schlüssel vom Robonomics-Parachain-Konto im `suri`-Feld

- ein Zeitraum zum Sammeln von Protokollen in Sekunden im Feld `dump_interval`.

- (optional) Anmeldeinformationen zum Hochladen von Dateien in [Temporal.Cloud](http://Temporal.Cloud) in den Feldern `temporal_username` und `temporal_password`.

- (optional) Anmeldeinformationen zum Hochladen von Dateien auf Pinata in den Feldern `pinata_api`, `pinata_secret`.

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

<li>Starten Sie das Sensors Connectivity-Modul.</li>

</List>