---
title: "Lektion #3, Einrichten und Anschließen von Sensoren"
description: 'EINRICHTEN UND ANSCHLIESSEN VON SENSOREN'
lessonNumber: 3
metaOptions: [Lernen, Sensoren Konnektivität & Dezentrales Sensorennetzwerk]
defaultName:  Sensors Connectivity & Decentralized Sensors Network
---

Unsere Sensoren verwenden die Robonomics-Firmware, eine erweiterte Version der sensor.community-Firmware, wobei einige Sensoren hinzugefügt und das Datensendeschema geändert wurden. Den Quellcode finden Sie [unter dem Link.](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

Wenn Sie ein einsatzbereites Robonomics-Board haben, können Sie zum Abschnitt "Verbinden" gehen.

## Anforderungen

**Für Linux:**

<List type="numbers">

<li>

Fügen Sie einen Benutzer zur `dialout`-Gruppe hinzu (für Ubuntu), um Zugriff auf den USB-Port zu erhalten:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>Starten Sie den Computer neu.</li>

<li>

Laden Sie das Robonomics `airrohr-flasher`-Ausführungsprogramm von [Releases](https://github.com/airalab/sensors-connectivity/releases) herunter.

</li>

<li>

Ändern Sie die Berechtigungen der Datei und führen Sie sie aus:

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**Für Windows:**

<List type="numbers">

<li>

Installieren Sie Treiber für USB2serial (in Windows 10 sollte es automatisch starten) - Treiber für NodeMCU v3 (CH340): [Link](http://www.wch.cn/downloads/file/5.html), [alternativer Link](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

Laden Sie die ausführbare Robonomics-Datei „airrohr-flasher“ von [Releases](https://github.com/airalab/sensors-connectivity/releases) herunter und führen Sie sie aus.

</li>

</List>

**Für MacOS:**

<List type="numbers">

<li>

Installieren Sie die Treiber für USB2serial — Treiber für NodeMCU v3 (CH340): [Link](http://www.wch.cn/downloads/file/178.html), [alternativer Link](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Laden Sie die ausführbare Robonomics-Datei „airrohr-flasher“ von [Releases](https://github.com/airalab/sensors-connectivity/releases) herunter und führen Sie sie aus.

</li>

</List>


## Einrichtung

<List type="numbers">

<li>

Schließen Sie den Sensor an den PC an und starten Sie das Programm 'airrohr-flasher'. Nach dem Öffnen des Programms sehen Sie Folgendes (abhängig von Ihrem Betriebssystem):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

Das Feld 'Board' sollte automatisch ausgefüllt werden; falls nicht, wählen Sie den erforderlichen Anschluss aus der Dropdown-Liste aus.

<RoboAcademyNote type="okay" title="INFO">
Wenn <code>airrohr-flasher</code> Ihr Board nicht finden kann, stellen Sie sicher, dass Sie den Teil <b>Anforderungen</b> ordnungsgemäß erledigt haben.
</RoboAcademyNote>

</li>

<li>

Wählen Sie die Firmware mit der bevorzugten Sprache aus und klicken Sie auf 'Upload'. Das Hochladen der Firmware dauert einige Zeit. Wenn Sie später die Sprache ändern oder eine klare Installation durchführen möchten (um die Konfiguration zurückzusetzen), gehen Sie zur Seite 'Flash löschen' und drücken Sie die Taste, um den Flash-Speicher des Sensors zu löschen.

</li>

<li>

Nach dem Herunterladen der Firmware starten Sie den ESP neu (einfach USB trennen und wieder anschließen).

</li>

<li>

Wählen Sie Sensoren aus dem Kontrollkästchenmenü aus. Wählen Sie SDS011 und alle zusätzlichen Sensoren aus. Drücken Sie 'Konfiguration speichern'.

</li>

<li>

Nach dem Herunterladen der Konfiguration starten Sie den ESP neu (einfach USB trennen und wieder anschließen).

</li>

</List>

## Verbinden

<List type="numbers">

<li>

Nach dem Neustart erstellt das Board ein Wi-Fi-Netzwerk mit dem Namen `RobonomicsSensor-xxxxxxxxx`. Stellen Sie von Ihrem Telefon oder Computer aus eine Verbindung her: Sie sehen das Autorisierungsfenster (falls nicht, öffnen Sie den Browser und gehen Sie zu `192.168.4.1`).

</li>

<li>

Wählen Sie Ihr Wi-Fi-Netzwerk aus der Liste aus (oder geben Sie es selbst ein, wenn es nicht auf der Liste steht) und füllen Sie das Passwortfeld aus.

</li>

<li>

Geben Sie die Koordinaten des Ortes ein, an dem der Sensor installiert wird.

<RoboAcademyNote type="warning" title="WARNING">
Die Sensor-Koordinaten werden dann auf einer öffentlich zugänglichen Karte angezeigt. Wenn Sie Ihre privaten Informationen nicht anzeigen möchten, geben Sie nahe, aber nicht exakte Koordinaten ein.
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

Klicken Sie auf `Konfiguration speichern und neu starten`. Das Board wird neu gestartet und stellt eine Verbindung zum angegebenen Wi-Fi-Netzwerk her.

</li>

<li>

Öffnen Sie [Robonomics sensors map](https://sensors.robonomics.network/#/) und suchen Sie den Ort, an dem Sie den Sensor installiert haben. In wenigen Minuten können Sie Ihren Sensor mit Daten auf der Karte sehen.


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

Das war alles mit der Standardinstallation. Für ein fortgeschritteneres Einrichtung (Daten an Ihren eigenen Server senden), lesen Sie den nächsten Abschnitt.

## Zusätzlich Konfiguration

Vor der Konfiguration müssen Sie die Adresse des Sensors in Ihrem Wi-Fi-Netzwerk finden. Dazu können Sie `airrohr-flasher` verwenden (Ihr Computer muss im selben Netzwerk wie der Sensor sein). Starten Sie es und gehen Sie zum Tab `Discovery`, drücken Sie dann `Refresh`, warten Sie einen Moment und Ihre Sensoradresse wird angezeigt.

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

Doppelklicken Sie auf diese Adresse (oder geben Sie sie in Ihren Browser ein), Sie gelangen zum Sensormenü:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

Jetzt können Sie Ihre Konfiguration anpassen.


## Benutzerdefinierte API

Sie können auch einrichten, Daten an Ihren eigenen Server zu senden. Klicken Sie dazu im Tab `APIs` auf `An eigenen API senden` und geben Sie die Serveradresse und den Port (`65` für die Sensorverbindung) an:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

Klicken Sie auf `Speichern und neu starten`, um die Einstellungen zu speichern.