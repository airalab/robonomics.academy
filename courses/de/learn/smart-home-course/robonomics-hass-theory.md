---
title: "Lektion #1, Theoretische Einführung"
lastUpdate: Thu May 04 2023 12:54:41 GMT+0400 (Samara Standard Time)
description: Home Assistant Kurs
lessonNumber: 1
metaOptions: [Lernen Sie, Souveränes Smart Home mit Robonomics und Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Schlüsselkomponenten des souveränen Smart Homes 

<List>

1. **[Raspberry Pi](https://www.raspberrypi.org/), ein Einplatinencomputer**.

Wir können das Gerät nach der Installation aller erforderlichen Software in einen IoT-Hub umwandeln. Der Hauptzweck des Hubs besteht darin, die Protokolle, Netzwerke, Anwendungen und verschiedenen Geräte des Smart Homes zu orchestrieren.

2. **[Home Assistant](https://www.home-assistant.io/), eine Open-Source-Steuerungssoftware**.

Es ist darauf ausgelegt, ein zentraler Hub für intelligente Geräte zu sein. Es kann das Netzwerk automatisch nach bekannten Geräten durchsuchen und Benutzern ermöglichen, alle erforderlichen Automatisierungen einfach zu konfigurieren. Wir werden Home Assistant auf dem Raspberry Pi installieren.

Home Assistant kommuniziert mit Geräten und speichert ihre Daten lokal, was es leider nicht ermöglicht, Ihre Geräte remote zu steuern. Um dieses Problem zu lösen, verwenden wir das Robonomics-Netzwerk.

3. **[Robonomics Network](https://robonomics.network/), eine dezentrale Cloud für sichere und zuverlässige Steuerung von IoT-Anwendungen**.

Es verwendet Web3-Technologien, die Dezentralisierung und Blockchain-Technologien für den Schutz intelligenter Geräte und ihrer Daten integrieren.

Die Hauptfunktionalität von Robonomics basiert auf einer Blockchain (Parachain) des Polkadot/Kusama-Ökosystems. Zu den Hauptfunktionen der Parachain gehört die Möglichkeit, einen Befehl zum Starten des Geräts zu senden und Benutzerdaten auf der Blockchain zu speichern.

Die Robonomics-Parachain verfügt über eine IoT-Abonnementfunktion, mit der Benutzer Transaktionen an die Parachain senden können, ohne Gebühren, für einen Zeitraum von einem Monat. Im praktischen Teil dieses Kurses werden Sie die Abonnementmethode verwenden.

Die Interaktion zwischen dem IoT-Hub und der Robonomics-Parachain erfolgt über [robonomics-interface](https://github.com/Multi-Agent-io/Robonomics-interface) — eine Python-Bibliothek, die sich auf die Schnittstelle mit Robonomics zur bequemen Programmierung spezialisiert hat.

4. **[InterPlanetary File System](https://ipfs.tech/) (IPFS), eine Peer-to-Peer-Software zum Speichern und Teilen von Daten in einem verteilten Dateisystem**.

IPFS wird benötigt, um das Speichern großer Dateien auf der Blockchain zu vermeiden (da dies zu teuer wäre), stattdessen können wir die IPFS-Hashes der Dateien speichern, die als Links zu diesen Dateien fungieren.

## Protokolle für intelligente Geräte
Sie werden zwei Hauptprotokolle für intelligente Geräte verwenden:

1. **[Zigbee](https://csa-iot.org/all-solutions/zigbee/), ein drahtloses Kommunikationsprotokoll.**

Es wird sehr häufig für die Verbindung von intelligenten Geräten verwendet. Es ist für geringen Stromverbrauch, einfache Konfigurierbarkeit und Flexibilität sowie Unterstützung von selbstorganisierenden und selbstheilenden Mesh-Netzwerk-Topologien ausgelegt. Tausende von Geräten mit Zigbee-Unterstützung sind auf dem Markt erhältlich, was es sehr attraktiv für den Aufbau von Smart-Home-Lösungen macht. Zur Steuerung von Zigbee-Geräten benötigen Sie ein Gateway, das Daten zwischen dem Zigbee-Netzwerk und einem anderen Netzwerk (z.B. Wi-Fi) überträgt.

2. **[Message Queuing Telemetry Transport](https://mqtt.org/) (MQTT), ein Publish-Subscribe-Protokoll, das zur Steuerung von IoT-Anwendungen entwickelt wurde.**

Das Protokoll ist leichtgewichtig, erfordert minimale Ressourcen und gewährleistet die Zuverlässigkeit der Nachrichtenzustellung. Das Protokoll ist für Netzwerke mit geringer Bandbreite, hoher Latenz und unzuverlässiger Verbindung ausgelegt, was es zu einer ausgezeichneten Option für den Betrieb großer Mengen von Sensornachrichten macht. MQTT erfordert einen Server, auf dem der MQTT-Broker ausgeführt wird (in unserem Fall wird er mit unserem Raspberry Pi funktionieren). Der Broker empfängt alle Nachrichten von den MQTT-Clients und leitet sie dann an die entsprechenden abonnierenden Clients weiter.

## Optionen für die Zigbee-Verbindung
Sie werden zwei Szenarien erkunden, um Geräte mit Robonomics an Home Assistant anzuschließen.

1. Im ersten Szenario wird kein separates Zigbee-Gateway verwendet, um Geräte zu verbinden. Stattdessen wird eine Kombination aus einem [Zigbee-Adapter](https://www.zigbee2mqtt.io/guide/adapters/) und der [Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/adapters/) Software verwendet.

<LessonImages figure figureCaption="Architectural scheme of the scenario with Zigbee adapter" src="smart-house-course/lesson-1-1.png" alt="Architectural scheme of the scenario with Zigbee adapter"/>

Ein Adapter (wie der JetHome USB JetStick Z2) wird mit dem Raspberry Pi verbunden und dient als Schnittstelle zwischen dem Computer und der Zigbee-Funkkommunikation. Zigbee2MQTT ist eine Software, die die Verbindung von Zigbee mit MQTT-Netzwerken ermöglicht. Sie nimmt Nachrichten aus dem Zigbee-Netzwerk entgegen und übersetzt sie in leicht zu verwendende und gut strukturierte MQTT-Nachrichten.

2. Im zweiten Szenario werden Geräte mithilfe des [SLS Gateways](https://github.com/slsys/Gateway) auf Basis des ESP32-Mikrocontrollers verbunden. Zur Vereinfachung hat Robonomics unsere [eigene Modifikation](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01) des Gateways entwickelt.

<LessonImages figure figureCaption="Architectural scheme of the scenario with SLS Gateway" src="smart-house-course/lesson-1-2.png" alt="Architectural scheme of the scenario with SLS Gateway"/>

Das SLS-Gateway fungiert als Koordinator für Zigbee-Protokollnachrichten und ermöglicht die Verwendung der meisten verfügbaren Zigbee-Ausrüstung. Zur Integration mit Home Assistant wird das MQTT-Protokoll verwendet.

## Fernsteuerung

Die Fernsteuerung eines Smart Homes erfolgt mithilfe der [Robonomics dezentralen Anwendung](https://dapp.robonomics.network/) (dapp), die auf benutzerfreundliche Weise Zugriff auf Parachain-Funktionen bietet. Die Sicherheit und Unveränderlichkeit der Benutzerdaten wird einerseits durch das Versenden verschlüsselter Daten an IPFS (die nur vom Benutzerschlüssel entschlüsselt werden können) und andererseits durch das Platzieren des IPFS-Hashes dieser Daten auf der Blockchain gewährleistet.

</List>



