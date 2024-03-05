---
title: "Lektion #4, Sensorenverbindung Modul"
description: 'SENSOREN VERBINDUNGSMODUL'
lessonNumber: 4
metaOptions: [Lernen, Sensoren Konnektivität & Dezentrales Sensorennetzwerk]
defaultName:  Sensors Connectivity & Decentralized Sensors Network
---

In den folgenden Artikeln erfahren Sie mehr über das Sensorverbindung Modul. Danach können Sie sich unserem dezentralen Sensorennetzwerk anschließen oder Ihre eigene Sensorkarte erstellen.

## Über Sensorenverbindung

Das dezentrale Sensorennetzwerk verwendet das `sensors-connectivity` Python-Modul ([Quellcode](https://github.com/airalab/sensors-connectivity)). Dieses Modul ermöglicht es jedem Benutzer, seinen eigenen Server zu starten, um Daten von Sensoren zu empfangen und weiter zu verarbeiten. Die Entwickler haben derzeit mehrere solcher Server gestartet, und jeder Sensor kann Daten an sie senden. Durch den Betrieb mehrerer Server wird ein Datenverlust vermieden, falls es Probleme mit einem von ihnen gibt, da die Sensoren von einem nicht funktionierenden Server zu einem funktionierenden wechseln. Im Grunde genommen können Sie sich das Sensorenverbindung Modul als eine Blackbox mit einem Eingang (Sensordaten) und vielen Ausgängen vorstellen.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

Das Sensorenverbindung Modul ist eine Reihe von Stationen (station_1, station_2 ... station_n), die verschiedene Daten empfangen, einschließlich Daten von Sensoren über das HTTP-Protokoll. Es können auch Sensoren sein, die über USB oder eine andere Datenquelle mit dem Computer verbunden sind. Die von den Stationen empfangenen Daten werden vom Modul verarbeitet und an Fütterer (feeder_1, feeder_2 ... feeder_n) weitergeleitet. Die Fütterer senden die verarbeiteten Daten an den Benutzer; in unserem Fall werden die Daten an den dezentralen IPFS-Kanal gesendet. 

Eine Karte des [Dezentralen Sensorennetzwerks](https://sensors.robonomics.network/#/) ist eine dezentrale Anwendung (dapp), die auf dem Computer läuft. Sie liest Daten aus dem IPFS-Kanal und zeigt sie auf der Karte an. Es besteht keine direkte Verbindung zwischen dem Server, der Daten von den Sensoren sammelt, und der Karte, die der Benutzer sieht; die Daten werden zwischen ihnen über IPFS pubsub übertragen, was die Belastung der Server reduziert. 

Darüber hinaus wird von Zeit zu Zeit eine Datei mit Daten für den letzten Zeitraum im IPFS gespeichert, und ein Hash dieser Daten wird dann in die Blockchain aufgezeichnet. Da IPFS ein inhaltsadressiertes Netzwerk ist, stellt das Speichern von Daten darin sicher, dass jede Datenänderung nicht unbemerkt bleibt, da die Adresse der benötigten Datei einen Hash ihres Inhalts enthält, der sich bei jeder Datenänderung ändert. Die Blockchain wird verwendet, um den Hash an den Benutzer weiterzugeben, der ihn verwenden kann, um die benötigten Daten aus IPFS zu erhalten (dies geschieht, wenn Sie eine Historie der Karte anfordern).

## Modul-Setup für Linux

**Voraussetzungen und Installation**

<List type="numbers">

<li>

Um das `sensors-connectivity` Modul zu erstellen, muss der IPFS-Dämon mit einer Version installiert sein, die nicht größer als `0.8.x` ist. Angenommen, Sie arbeiten unter Linux, führen Sie folgendes aus (für Version `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

Installieren Sie das Paket mit Entwicklungstools `python3-dev` und den Paketinstaller für Python `pip`:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

Installieren Sie das Modul als PyPI-Paket:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

Wenn Sie folgende Warnung sehen: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

Führen Sie den nächsten Befehl aus:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## Konfiguration

<List type="numbers">

<li>

Erstellen Sie ein Verzeichnis für die Konfigurationsdatei und die Datenbankdatei, wo immer Sie möchten. Diese Datenbank speichert IPFS-Hashes von Sensordaten, Zeitstempel und Servicestatus:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
Der Name der Datenbankdatei kann beliebig sein, aber die Erweiterung muss sein <code>.db</code>
</RoboAcademyNote>

</li>


<li>

Erstellen Sie die Konfigurationsdatei im selben Verzeichnis:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

Kopieren Sie den folgenden Text in die Datei und fügen Sie den vollständigen Pfad zur Datenbankdatei im Feld db_path ein. Diese Konfiguration reicht aus, um Sensordaten über HTTP abzurufen und an die Robonomics-Karte zu senden:

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

## Starten


<List type="numbers">

<li>

Starten Sie den IPFS-Dämon:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

Nachdem die Konfiguration festgelegt ist, führen Sie den Dienst mit dem Pfad zur Konfigurationsdatei in einem anderen Terminal aus:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

Sie sehen Protokolle im Terminal (außerdem werden sie zu „~/.logs“ hinzugefügt). Beispiel:

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

## Nach der Installation

Um Ihr `sensors-connectivity`-Modul mit unserem Dezentralen Sensorennetzwerk zu verbinden und Ihre Daten auf der Karte zu sehen, müssen Sie Ihre IPFS-ID an [vm@multi-agent.io](mailto:vm@multi-agent.io) oder [ping@airalab.org](mailto:ping@airalab.org) senden. Wir fügen Ihre ID einer Zugriffssteuerungsliste hinzu.

Holen Sie sich Ihre IPFS-ID mit dem folgenden Befehl nach dem Starten des IPFS-Dämons:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>