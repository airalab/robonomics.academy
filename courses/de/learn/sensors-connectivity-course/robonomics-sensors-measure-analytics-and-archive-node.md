---
title: "Lektion #7, Robonomics Sensoren messen Analysen und archivieren Knoten"
description: 'ROBONOMICS SENSOREN MESSUNG ANALYTIK UND ARCHIVIERUNGSKNOTEN'
lessonNumber: 7
metaOptions: [Lernen, Sensoren Konnektivität & Dezentrales Sensorennetzwerk]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Robonomics Sensoren messen Analysen und archivieren Knoten oder RoSeMAN ist ein Dienst zur Ansammlung von Sensordaten, um die Messungshistorie anzuzeigen. In diesem Artikel werden Sie den Dienst einrichten.

## Anforderungen

RoSeMAN erfordert einen [MongoDB](https://www.mongodb.com/docs/manual/introduction/) Datenbankserver, es wird davon ausgegangen, dass Sie diesen bereits haben. Außerdem müssen Sie die Datalog-Option für das Sensoren-Konnektivitätsmodul aktivieren, wie im Szenario #3 gezeigt. Sie sollten freie XRT-Token auf Ihrem Robonomics-Konto haben, das mit dem Sensoren-Konnektivitätsmodul verbunden ist. 


## Einrichtung

<List type="numbers">

<li>

Repository herunterladen:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

Konfigurationsdateien erstellen:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Öffnen Sie die `config.json` Datei und bearbeiten Sie den Datenbankpfad:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

Fügen Sie die öffentliche Adresse Ihres Kontos zur `agents.json` Datei hinzu. Sie können mehrere Adressen zur Datei hinzufügen, wenn Sie Daten von verschiedenen Sensoren-Konnektivitätsmodulen sammeln möchten.

</li>


<li>

Abhängigkeiten installieren und Server erstellen:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

RoSeMAN-Server starten:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

Der Webserver sollte unter `http://127.0.0.1:3000` gestartet werden.

</li>

</List>

## Nach der Installation

Nach der Bereitstellung des RoSeMAN auf einem Server müssen Sie die öffentliche IP-Adresse oder URL des Servers erhalten. Alternativ können Sie, wenn Sie RoSeMAN und die Sensorenkarte auf demselben Server ausführen, die lokale IP-Adresse verwenden.

Als nächstes müssen Sie die Konfigurationsdatei der Sensorenkarte öffnen und Ihre URL in die `config.json` Datei im Feld `REMOTE_PROVIDER` einfügen:


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

Karte mit `yarn build` neu erstellen und erneut starten; Sie werden die Messungshistorie sehen können.