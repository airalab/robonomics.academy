---
title: "Les #4, Sensors connectiviteitsmodule"
description: 'SENSORS CONNECTIVITY MODULE'
lessonNumber: 4
metaOptions: [Leer, Sensoren Verbindeniviteit & Gedecentraliseerd Sensoren Netwerk]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

In de volgende artikelen leer je meer over de Sensor Connectiviteitsmodule. Daarna kun je meedoen aan het hosten van ons Gedecentraliseerde Sensors Netwerk of je eigen sensor map maken.

## Over Sensors Connectiviteit

Het Gedecentraliseerde Sensors Netwerk maakt gebruik van de `sensors-connectivity` Python module ([broncode](https://github.com/airalab/sensors-connectivity)). Deze module stelt elke gebruiker in staat om zijn eigen server te starten om gegevens van sensoren te ontvangen en deze verder te verwerken. Op dit moment hebben de ontwikkelaars verschillende van dergelijke servers gelanceerd en elke sensor kan gegevens naar hen sturen. Het draaien van meerdere servers voorkomt gegevensverlies in geval van problemen met een van hen, omdat de sensoren zullen overschakelen van een niet-werkende server naar een werkende. Je kunt de Sensors Connectiviteitsmodule in feite zien als een black box met één invoer (sensorgegevens) en vele uitgangen.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

De Sensors Connectiviteitsmodule is een set van stations (station_1, station_2 ... station_n), die verschillende gegevens ontvangen, waaronder gegevens van sensoren via het HTTP-protocol. Het kunnen ook sensoren zijn die zijn aangesloten op de computer via USB of een andere gegevensbron. De gegevens die van de stations worden ontvangen, worden verwerkt door de module en doorgegeven aan feeders (feeder_1, feeder_2 ... feeder_n). De feeders sturen de verwerkte gegevens naar de gebruiker; in ons geval worden de gegevens naar het gedecentraliseerde IPFS-kanaal gestuurd. 

Een kaart van het [Gedecentraliseerde Sensors Netwerk](https://sensors.robonomics.network/#/) is een gedecentraliseerde applicatie (dapp) die op de computer draait. Het leest gegevens uit het IPFS-kanaal en toont deze op de kaart. Er is geen directe verbinding tussen de server die gegevens van de sensoren verzamelt en de kaart die de gebruiker ziet; gegevens worden tussen hen overgedragen via IPFS pubsub, wat de belasting op de servers vermindert. 

Bovendien wordt van tijd tot tijd een bestand met gegevens voor de laatste periode opgeslagen in IPFS, en een hash van deze gegevens wordt vervolgens opgenomen in de blockchain. Aangezien IPFS een op inhoud gericht netwerk is, zorgt het opslaan van gegevens erin ervoor dat elke gegevenswijziging niet onopgemerkt blijft, omdat het adres van het benodigde bestand een hash van de inhoud bevat, die zal veranderen bij elke gegevenswijziging. De blockchain wordt gebruikt om de hash naar de gebruiker door te geven, die deze kan gebruiken om de benodigde gegevens uit IPFS te halen (dit gebeurt wanneer je een geschiedenis van de kaart opvraagt).

## Module-installatie voor Linux

**Vereisten en Installatie**

<List type="numbers">

<li>

Om de `sensors-connectivity` module te bouwen, moet de IPFS daemon geïnstalleerd zijn met versie niet groter dan `0.8.x`. Als je op Linux werkt, voer dan het volgende uit (voor versie `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

Installeer het pakket met ontwikkeltools `python3-dev` en de pakketinstallateur voor Python `pip`:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

Installeer de module als een PyPI-pakket:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

Als je de volgende waarschuwing ziet: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

Voer het volgende commando uit:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## Configuratie

<List type="numbers">

<li>

Maak een map aan voor het configuratiebestand en het databasebestand waar je maar wilt. Deze database zal IPFS-hashes van sensorgegevens, tijdstempel en servicestatus opslaan:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
De naam van het databasebestand kan elk zijn, maar de extensie moet zijn <code>.db</code>
</RoboAcademyNote>

</li>


<li>

Maak het configuratiebestand in dezelfde map aan:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

Kopieer en plak het volgende in het bestand en voeg het volledige pad naar het databasebestand in het veld db_path in. Deze configuratie zal voldoende zijn om sensorgegevens via HTTP te verkrijgen en naar de Robonomics-kaart te sturen:

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

## Start


<List type="numbers">

<li>

Start IPFS-daemon:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

Nadat de configuratie is ingesteld, voer de service uit met het pad naar het configuratiebestand in een andere terminal:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

Je zult logs in de terminal zien (ze zullen ook worden toegevoegd aan `~/.logs`). Voorbeeld:

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

## Na installatie

Om je `sensors-connectivity` module aan te sluiten op ons Gedecentraliseerde Sensors Netwerk en je gegevens op de kaart te zien, moet je je IPFS ID sturen naar [vm@multi-agent.io](mailto:vm@multi-agent.io) of [ping@airalab.org](mailto:ping@airalab.org). We zullen je ID toevoegen aan een toegangscontrolelijst.

Haal je IPFS `ID` op met het volgende commando nadat je de IPFS-daemon hebt gestart:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>