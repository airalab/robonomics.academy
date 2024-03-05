---
title: "Bereitstellung des Engineer Workbench"
description: Dieser Kurs dreht sich darum, das Feecc-System und alle seine Komponenten kennenzulernen.
metaOptions: [Lernen, sich an Feecc zu gewöhnen]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In dieser Lektion erfahren Sie, wie Sie die erforderlichen Komponenten der Feecc Engineer Workbench selbst bereitstellen.
</RoboAcademyText>

Zu den Komponenten gehören:

- Workbench Daemon
- Workbench Frontend
- IPFS Gateway
- HID Reader Daemon

All components are launched using [Docker](https://docs.docker.com/engine/install/ubuntu/) und [Docker Compose](https://docs.docker.com/compose/), make sure you have them installed.

## Softwarevorbereitung

1. Die Feecc-Komponenten verwenden die [MongoDB](https://www.mongodb.com/) Datenbank, um Daten zu speichern und darauf zuzugreifen. Bevor Sie Feecc verwenden, müssen Sie MongoDB auf die für Sie bequemste Weise bereitstellen. Hier sind einige Bereitstellungsoptionen: [Verwendung Ihres eigenen Servers](https://www.mongodb.com/try/download/community), [Cloud-Datenbank in Atlas](https://www.mongodb.com/atlas) (kostenlos), [Cloud-Datenbank in DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (kostenpflichtig). 
    
    In jedem Fall müssen Sie Ihre Verbindungs-URI zu MongoDB erhalten, die Sie als Wert der Variablen `MONGODB_URI` für alle Komponenten des Systems eingeben müssen.
    
2. Wenn Sie die zuverlässige und transparente Speicherung von Daten aus Ihrem Produktionssystem nutzen möchten, müssen Sie ein Konto bei Robonomics erstellen. Verwenden Sie dazu die Anleitungen unter folgendem Link: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    Sie müssen die Seed-Phrase des Kontos speichern, da sie später in der Variablen `ROBONOMICS_ACCOUNT_SEED` verwendet wird.

## Workbench-Vorbereitung

Bevor Sie beginnen, schließen Sie alle erforderlichen Geräte an den Computer oder Server an:

- Etikettendrucker über USB
- RFID-/Barcode-Reader über USB
- IP-Kamera über PoE-Router/Netzwerkswitch
- Monitor mit Tastatur und Maus oder Touchscreen über USB und HDMI/VGA (optional)

## Starten des HID-Reader-Daemons

1. Klonen Sie das Repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. Starten des Daemons:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Starten des Workbench-Daemons

1. Klonen Sie das Repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. Konfigurieren Sie den Daemon nach Ihren Bedürfnissen mit der Datei `docker-compose.yml`. Die Datei enthält verschiedene Umgebungsvariablen:

    - MongoDB-Konfiguration;
    - Robonomics-Konfiguration;
    - IPFS-Konfiguration;
    - Druckerparameter;
    - Kameraparameter;
    - RFID / Barcode-Reader-Parameter.
    
    Die vollständige Liste der Variablen ist im Daemon-Repository verfügbar (https://github.com/Multi-Agent-io/feecc-workbench-daemon). Die folgenden Parameter sind obligatorisch:
    
    - `MONGODB_URI`: Ihre Verbindungs-URI zu MongoDB;
    - `MONGODB_DB_NAME`: ein Datenbankname von MongoDB;
    - `WORKBENCH_NUMBER`: Arbeitsplatznummer des Mitarbeiters.

3. Starten des Daemons:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Überprüfen Sie seine Funktionalität. Gehen Sie zum Browser und öffnen Sie die Seite `http://127.0.0.1:5000/docs`, die die Dokumentation zur REST-API-Schnittstelle des Systems enthalten sollte. Wenn die Seite nicht verfügbar ist, wurde der Server nicht ordnungsgemäß gestartet. Überprüfen Sie die Protokolle innerhalb des Containers auf Fehler, beheben Sie sie und wiederholen Sie die Build- und Ausführungsschritte.

## Starten des IPFS-Gateways

1. Klonen Sie das Repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. Konfigurieren Sie den Mikroservice nach Ihren Bedürfnissen mit der Datei `docker-compose.yml`. Die Datei enthält Umgebungsvariablen für die Verbindung mit MongoDB, Robonomics und Pinata. Die vollständige Liste der Variablen finden Sie im Gateway-Repository unter [https://github.com/Multi-Agent-io/feecc-ipfs-gateway](https://github.com/Multi-Agent-io/feecc-ipfs-gateway).

3. Starten Sie den Mikroservice:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Starten des Workbench-Frontends

1. Klonen Sie das Repository:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. Gehen Sie zum `configs`-Verzeichnis und konfigurieren Sie den Frontend-Dienst nach Ihren Bedürfnissen mit der Datei `config.json`. Besonders wichtig sind die folgenden Parameter:
    - `socket` — geben Sie hier die Adresse des Workbench-Daemons ein;
    - `interface_language` — Benutzeroberflächensprache, verfügbare Optionen sind `en` und `ru`;
    - `dev_show_reducers` — Aktivieren/Deaktivieren des Entwicklermodus;
    - `pulling_period` — Zeitraum zum Empfangen von Daten vom Backend in Millisekunden;

3. Starten Sie den Frontend-Container:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Überprüfen Sie die Funktionalität. Gehen Sie zum Browser und öffnen Sie die Seite `http://localhost:3000`, Sie sollten eine Autorisierungsseite sehen.

<RoboAcademyText fWeight="500">
Im nächsten Lektion werden wir den Feecc Analytics-Dienst durchgehen.
</RoboAcademyText>