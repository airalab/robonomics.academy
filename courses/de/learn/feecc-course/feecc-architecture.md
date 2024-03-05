---
title: "Architektur"
description: Dieser Kurs dreht sich darum, das Feecc-System und alle seine Komponenten kennenzulernen.
metaOptions: [Lernen, sich an Feecc zu gewöhnen]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In dieser Lektion werden wir uns die Feecc-Architektur genauer ansehen und alle Komponenten der Software betrachten.
</RoboAcademyText>

Die Feecc-Plattform besteht aus mehreren Diensten, von der Steuerung der Ingenieurswerkbank bis zur Bereitstellung von Analysen. Jeder Dienst ist für eine Art von Funktionalität verantwortlich, die für den Einsatz in einer Unternehmensumgebung erforderlich ist.

## Feecc Ingenieurswerkbank

Die Hauptaufgabe der Ingenieurswerkbank besteht darin, den Arbeitsbereich des Montageingenieurs zu organisieren. Je nach Aufgabe benötigt der Ingenieur möglicherweise folgende Geräte:

- IP-Kamera zur Organisation der Videoaufzeichnung des Produktionsprozesses;
- RFID-Lesegerät zur Identifizierung im System durch persönliche RFID-Karte;
- Barcode-Lesegerät zum Scannen von Produktetiketten;
- Etikettendrucker zur Kennzeichnung der hergestellten Produkte;
- Digitale Sensoren, die Daten von verschiedenen Geräten / Stationen sammeln.

Die Ingenieurswerkbank-Software besteht normalerweise aus den folgenden Containern. Erstens die Software, die eine Installation **auf dem Computer erfordert, an dem der Mitarbeiter während der Montage des Produkts arbeitet**:

1. [feecc-workbench-daemon](https://github.com/Multi-Agent-io/feecc-workbench-daemon) — das Herzstück der Feecc-Plattform, das den Benutzern Zugriff auf alle Feecc-Funktionen und Konfigurationen bietet; es enthält auch leichte Dienste zum Drucken von Etiketten mit einem Etikettendrucker und zur Aufzeichnung von Videos aus RTSP-Streams;
2. [feecc-workbench-frontend](https://github.com/Multi-Agent-io/feecc-workbench-frontend) — eine Web-Benutzeroberfläche für die Interaktion der Mitarbeiter mit der Feecc-Plattform;
3. [feecc-hid-reader-daemon](https://github.com/Multi-Agent-io/feecc-hid-reader-daemon) — ein Python-Dämon zum Senden von USB-Peripherieereignissen;

Zweitens die Software, die **sowohl auf dem Computer des Mitarbeiters als auch auf einem Server im lokalen Netzwerk installiert werden kann**:

1. [feecc-ipfs-gateway](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) — ein Mikroservice zum Veröffentlichen von Dateien in IPFS und speziell von Datei-CIDs im Robonomics-Netzwerk;

Die Abbildung unten zeigt die Architektur des Feecc Engineer Workplace in einer Unternehmensumgebung. Der IPFS Gateway (sowie der IPFS-Knoten und MongoDB in Form eines Cluster-Peers) kann auf dem Computer jedes Mitarbeiters gehostet werden, was die Dezentralisierung des Systems auf Kosten von Rechenressourcen verbessern wird.

<LessonImages src="feecc-course/feecc_global_hardware.png" alt="an architecture of Feecc"/>

### Unterstützte Hardware für einen Arbeitsplatz:

#### RFID-Scanner

Ein USB-RFID-Scanner wird benötigt, um Ingenieure im Feld mit ihren internen Ausweisen zu autorisieren. Eingehende Informationen werden mit dem `feecc-hid-reader-daemon` verarbeitet.

#### Barcode-Scanner

Der USB-Barcode-Scanner ist notwendig, um Produkte anhand von Barcodes zu identifizieren, Befehle an Dienste zu senden und die korrekte Zuweisung von Zertifikaten sicherzustellen. Die eingehenden Informationen werden ebenfalls mit dem `feecc-hid-reader-daemon` verarbeitet. Das Lesen in zwei Dimensionen ist wünschenswert, aber nicht erforderlich.

#### Computer des Mitarbeiters

Ein kleiner Einplatinencomputer verarbeitet Signale von externen Geräten (Barcode-Scanner, RFID-Scanner), sendet Anfragen zum Drucken von Bildern auf dem Drucker, zum Starten und Stoppen der Videoaufzeichnung, zum Senden von Daten an den IPFS Gateway. Er führt die folgenden Dienste aus: `feecc-workbench-frontend`, `feecc-workbench-daemon` mit Etikettendrucker- und Kamerunterstützung, `feecc-hid-reader-daemon`. Eine Internetverbindung über Wi-Fi oder LAN ist erforderlich.
    
Es ist erwähnenswert, dass anstelle eines Einplatinencomputers mit Monitor auch ein beliebiger Computer verwendet werden kann. Das Betriebssystem GNU/LINUX muss darauf nativ oder über eine virtuelle Maschine installiert sein.
    
Mindesttechnische Spezifikationen:
    
- CPU: Broadcom BCM2711, Quad-Core Cortex-A72 (ARM v8) 64-Bit-SoC @ 1,8 GHz oder ähnlich;
- RAM: 4 GB LPDDR4-3200 oder ähnlich.

#### Bildschirm

Der Monitor wird vom Mitarbeiter verwendet, um Informationen über den aktuellen Produktionsprozess einzugeben und anzuzeigen. Er zeigt auch Hinweise für den Ingenieur in der aktuellen Phase an. Andere Eingabegeräte können ebenfalls verwendet werden.

#### Etikettendrucker

Der Etikettendrucker wird verwendet, um QR-Codes und Barcodes für die weitere Platzierung von Etiketten auf dem Produkt zu drucken, zu Identifikations- und Verifizierungszwecken. Die Interaktion mit dem Drucker erfolgt mit Hilfe des entsprechenden Dienstes von `feecc-workbench-daemon`. In unserem Fall verwenden wir XPrinter 236B-Drucker.

#### IP-Kamera

IP-Kamera zur Erfassung von Produktionsprozessen zur Aufnahme in das Produktsicherheitszertifikat. Befindet sich über dem Montagebereich des Produkts. Die Interaktion mit der Kamera erfolgt mit Hilfe des entsprechenden Dienstes von `feecc-workbench-daemon`.

Erforderliche technische Spezifikationen: PoE-Stromversorgung, RTSP-Datenübertragungsprotokoll. In unserem Fall verwenden wir Hikvision HiWatch DS-i200d.

### Unterstützte Hardware für mehrere Arbeitsplätze:

#### Router oder Switch

Router oder Switch mit PoE 802.3af-Unterstützung und PoE-Stromversorgung an den Ausgangsanschlüssen ist erforderlich, um IP-Kameras mit Strom zu versorgen und sie mit dem `feecc-workbench-daemon`-Dienst zu verbinden. In unserem Fall verwenden wir MikroTik hEX PoE (einen für 3-4 Arbeitsplätze) und Netzteil.

#### Server (optional)

Es kann auch ein größerer Server installiert werden, der `feecc-ipfs-gateway` ausführen kann. Er kann anstelle eines der Computer an den Arbeitsplätzen der Mitarbeiter platziert werden. 

Technische Mindestspezifikationen:

- CPU: Intel Xeon E-2200 Prozessor oder ähnlich;
- RAM: 8GB;
- Speicher: 1TB HDD;
- LAN-Schnittstelle: 1 Gbit/s.

## Feecc Analytics

Die Hauptaufgabe von Feecc Analytics besteht darin, den Prozess der Rückverfolgbarkeit von Fertigprodukten und deren Vorverkaufsinspektion in der Produktkontrollabteilung zu organisieren.

Feecc Analytics ist abhängig von den folgenden Containern:

1. [feecc-analytics-backend](https://github.com/Multi-Agent-io/feecc-analytics-backend) — die Hauptsoftware zur Bereitstellung des Analyse-Services;
2. [feecc-analytics-frontend](https://github.com/Multi-Agent-io/feecc-analytics-frontend) — die Frontend-Software für den Analyse-Service;

Es wird in der Regel aus Sicherheitsgründen auf einem einzigen Server lokal innerhalb der Organisation bereitgestellt.

Die für Feecc Analytics erforderliche Hardware ist ein lokaler oder entfernter Server (virtuelle Maschine), auf dem die Webanwendung und der Barcode-Scanner ausgeführt werden. Jeder autorisierte Mitarbeiter kann von seinem Computer aus auf die Webanwendung mit einem Benutzernamen und Passwort zugreifen.

## Feecc Validator

Die Hauptaufgabe des Feecc Validators besteht darin, Daten aus verschiedenen Datenspeichern zu vergleichen, um die Integrität des digitalen Produktzertifikats zu validieren.

Feecc Validator ist abhängig von den folgenden Containern:

1. [feecc-validator-backend](https://github.com/Multi-Agent-io/feecc-validator-backend) — ein Mikroservice, der entwickelt wurde, um Zertifikate zu validieren und Daten abzurufen, die mit der bereitgestellten Einheit verbunden sind, sofern der Benutzer nur eines der Datenstücke hat;
2. [feecc-validator-frontend](https://github.com/Multi-Agent-io/feecc-validator-frontend) — eine Web-Benutzeroberfläche zur Interaktion mit dem Validierungs-Mikroservice.

Wie Feecc Analytics kann es auf einem einzigen Server lokal bereitgestellt werden und erfordert einen Barcode-Scanner.

<RoboAcademyText fWeight="500">
Im nächsten Unterricht werden wir uns das Feecc-System genauer ansehen, indem wir eine kleine Demo ausführen, die lokal auf Ihrem Computer läuft.
</RoboAcademyText>