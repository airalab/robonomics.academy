---
title: "Lektion #6, Sensor-Kartenbereitstellung"
description: 'SENSOR-KARTENBEREITSTELLUNG'
lessonNumber: 6
metaOptions: [Lernen, Sensoren Konnektivität & Dezentrales Sensorennetzwerk]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Nachdem ein Sensor zusammengebaut und das Sensors Verbindenivity-Modul eingerichtet wurde, ist es an der Zeit, eine persönliche dezentrale Sensor-Karte bereitzustellen.


## Anforderungen & Installation

<List type="numbers">

<li>

Da die Sensor-Karte von JavaScript betrieben wird, müssen Sie zuerst den `node` und den `yarn`-Manager installieren:

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

Karte herunterladen und erstellen:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

Führen Sie die Karte zum Testen im `Entwicklungs`-Modus aus

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

Gehen Sie vom Terminal aus zur URL. Sie sollten die Sensorkarte sehen. Stoppen Sie es anschließend mit `CTRL+C`.

</li>

</List>

## Konfiguration

<List type="numbers">

<li>

Finden Sie Ihre IPFS-ID mit:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

Gehen Sie zum `src`-Ordner und benennen Sie die Dateien um:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Fügen Sie Ihre IPFS-ID in `agents.json` ein:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

Öffnen Sie die Datei `config.json` und ändern Sie den nächsten Teil der Konfigurationsdatei:

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


Hier müssen Sie die Breitengrade (`lat`) und Längengrade (`lng`) Ihrer Stadt einfügen. Optional können Sie einen [Windrichtungsdienst einrichten](https://github.com/danwild/wind-js-server) und die URL dazu im `WIND_PROVIDER`-Feld angeben.

</li>

</List>


## Bau

<List type="numbers">

<li>

Führen Sie den folgenden Befehl aus, um Dateien für die Veröffentlichung zu erstellen:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

Es wird ein `dist`-Verzeichnis mit allen Komponenten der statischen Website erstellt.

</li>

<li>

Um zu überprüfen, ob alles korrekt ist, wechseln Sie zum `dist`-Verzeichnis und öffnen Sie die Datei `index.html`. Nach einiger Zeit werden die Sensordaten Ihres Sensors Connectivity-Moduls auf der Karte angezeigt.

</li>

</List>

