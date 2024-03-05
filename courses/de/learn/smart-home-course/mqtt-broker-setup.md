---
title: "Lektion #3, MQTT Broker Setup und Hass Init"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: Home Assistant Kurs
lessonNumber: 3
metaOptions: [Lernen Sie, Souveränes Smart Home mit Robonomics und Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Einführung

Nach Abschluss der Konfiguration des Raspberry Pi ist der nächste Schritt die Installation des MQTT Brokers auf dem Raspberry Pi. Wie oben erwähnt, ist der Broker für die Nachrichtenweiterleitung zwischen verschiedenen MQTT-Clients verantwortlich. Sie werden Eclipse Mosquitto, einen Open-Source-MQTT-Broker, installieren und konfigurieren.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

Darüber hinaus werden Sie das Home Assistant-Setup abschließen und MQTT-Integration hinzufügen.

## Anweisungen

<List type="numbers">

<li>


Mosquitto Broker Installation

<List>
<li>

Installieren Sie [Mosquitto Broker](https://mosquitto.org/) auf Ihrem Raspberry Pi:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

Geben Sie IHREN_BENUTZERNAMEN (verwenden Sie einen beliebigen) und das Passwort ein (Sie werden nach dem Befehl aufgefordert, das Passwort einzugeben):

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

Bearbeiten Sie die Konfigurationsdatei:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

Fügen Sie Folgendes zur Datei hinzu:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

Speichern Sie die Datei und starten Sie den Dienst neu:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

Überprüfen Sie schließlich den Status des Brokers:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

Sie sollten etwas Ähnliches sehen:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Einrichten von Home Assistant und MQTT

<List>

<li>

Öffnen Sie den Webbrowser und gehen Sie zu <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. (mit derselben IP-Adresse, die Sie in der vorherigen Lektion gefunden haben). Beachten Sie, dass sich die IP-Adresse des Raspberry Pi im Laufe der Zeit aufgrund von Router-Einstellungen ändern kann. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

Geben Sie auf der ersten Seite einen beliebigen Namen, Benutzernamen, ein Passwort ein und klicken Sie auf "<code>CREATE ACCOUNT</code>"
</li>

<li>

Als nächstes geben Sie einen Namen für Ihr Zuhause ein und legen Sie Ihren Standort und das Einheitensystem fest. Klicken Sie auf "<code>DETECT</code>", um Ihren Standort zu finden und Ihre Zeitzone und Ihr Einheitensystem basierend auf diesem Standort festzulegen. Wenn Sie Ihren Standort lieber nicht senden möchten, können Sie diese Werte manuell festlegen.

</li>

<li>

Auf dem nächsten Bildschirm zeigt Home Assistant alle Geräte an, die es in Ihrem Netzwerk entdeckt hat. Machen Sie sich keine Sorgen, wenn Sie weniger Elemente sehen als unten gezeigt; Sie können jederzeit Geräte manuell hinzufügen. Klicken Sie jetzt einfach auf <code>FINISH</code> und Sie gelangen zum Hauptbildschirm von Home Assistant.

</li>

<li>

Jetzt müssen wir eine MQTT-Integration installieren. Gehen Sie zu <code>Einstellungen</code> -> <code>Geräte & Dienste.</code>

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

Drücken Sie die Schaltfläche <code>ADD INTEGRATION</code> in der unteren rechten Ecke. Suchen Sie im geöffneten Fenster <code>MQTT</code>.

</li>

<li>

Wählen Sie MQTT aus und richten Sie Ihre Broker-Adresse ein — <code>localhost</code> Port — <code>1883</code> und Ihren Benutzernamen und Ihr Passwort (das gleiche, das Sie zuvor für den Mosquitto Broker erstellt haben) und drücken Sie dann <code>SUBMIT</code>.
</li>

</List>
</li>
</List>