---
title: "Lektion #4a, Gateway Setup: Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: Home Assistant Kurs
lessonNumber: 4
metaOptions: [Lernen Sie, Souveränes Smart Home mit Robonomics und Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Einführung

Dies ist ein Szenario-Setup für die Verbindung von Geräten mit dem Zigbee-Adapter und der Zigbee2MQTT-Brücke. Wenn Sie den [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) haben (der alle erforderlichen Firmware hat), können Sie einfach mit diesen Anweisungen fortfahren. Wenn Sie jedoch einen anderen Adapter haben, müssen Sie ihn zuerst mit der Zigbee2MQTT-Software flashen. Anweisungen für Ihr Gerät finden Sie [hier](https://www.zigbee2mqtt.io/guide/adapters/).

Sie benötigen auch ein intelligentes Gerät, um die Verbindung zu Home Assistant zu testen.


## Anweisungen

<List type="numbers">

<li>

Software installieren

<List>

  <li>
    Richten Sie das Node.js-Laufzeitumgebungs-Repository ein und installieren Sie es mit den erforderlichen Abhängigkeiten:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Überprüfen Sie, ob die richtigen Versionen von Node.js (v14.X, V16.x, V17.x oder V18.X) und Paketmanager <code class="nowb">npm</code> (6.X, 7.X oder 8.X), die automatisch mit Node.js installiert wurden, installiert wurden:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Erstellen Sie ein Verzeichnis für Zigbee2MQTT und setzen Sie Ihren Benutzer als Besitzer davon:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Klonen Sie das Zigbee2MQTT-Repository:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    Installieren Sie Abhängigkeiten. Beachten Sie, dass <code>npm ci</code> einige Warnungen produzieren könnte, die ignoriert werden können.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

Adapter verbinden und konfigurieren

<List>

<li>

Schließen Sie den Zigbee-Adapter an den Raspberry Pi an. Dann müssen Sie den Standort des Sticks finden. Geben Sie dazu den nächsten Befehl ein:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

Die Ausgabe sollte wie folgt aussehen:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

In diesem Beispiel ist das Stick-Verzeichnis <code>ttyUSB0</code>.
</li>

<li>

Bearbeiten Sie die Datei <code>configuration.yaml</code> bevor Sie Zigbee2MQTT starten:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

Die Grundkonfiguration benötigt einige Anpassungen. Ändern Sie die folgenden Aussagen:

\- <code>homeassistant:</code> zu <code>true</code>, es wird automatisch Sensoren mit Home Assistant verbinden;

\- kommentieren Sie <code>user</code> und <code>password</code> unter <code>mqtt</code> aus und geben Sie Ihren Benutzernamen und Ihr Passwort (als Zeichenfolge, mit Anführungszeichen) vom MQTT-Broker ein;

\- ändern Sie den Port in <code>serial</code> -> <code>port</code> auf das Stick-Verzeichnis. In diesem Beispiel: <code>/dev/ttyUSB0</code>.

Die angepasste Konfigurationsdatei sollte wie folgt aussehen:

<LessonCodeWrapper language="yaml">
# Home Assistant integration (MQTT discovery)
homeassistant: true
# allow new devices to join
permit_join: true
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: 'YOUR_USERNAME'
  password: 'YOUR_PASSWORD'
# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/YOUR_PORT
</LessonCodeWrapper>


**Extra:**

Wenn Sie bereits einen aktiven Zigbee-Adapter oder Gateway in Ihrem Zuhause haben und jetzt einen anderen Stick konfigurieren, werden sie miteinander in Konflikt geraten. Um dieses Problem zu lösen, müssen Sie den Kanal auf dem neuen Gerät ändern. Fügen Sie dazu die folgenden Zeichenfolgen am Ende der Konfigurationsdatei hinzu:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Starte Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

Wenn erfolgreich gestartet, sehen Sie etwas Ähnliches:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Gerät koppeln

<List>

<li>

Es ist Zeit, Ihr Smart-Gerät zu verbinden. Der häufigste Weg, ein Gerät in den Verbindungsmodus zu versetzen, besteht darin, die Ein-/Aus-Taste gedrückt zu halten oder sie 5 Mal ein- und auszuschalten. Stellen Sie sicher, dass Zigbee2MQTT läuft.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

Wenn das Gerät verbunden ist, sollten Sie eine Nachricht wie folgt sehen:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

Merken Sie sich die ID des Sensors: in diesem Beispiel — <code>0x00158d0003eeeacf</code>.

Jetzt sollten Sie diesen Sensor mit ID in Ihrem Home Assistant WebUI sehen. Gehen Sie zu <code>Einstellungen</code> -> <code>Geräte & Dienste</code> -> <code>Geräte</code>, um es zu überprüfen:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

Nachdem alle Sensoren hinzugefügt wurden, können Sie das Programm mit <code>Strg+C</code> beenden. Wenn Sie keine weiteren Geräte hinzufügen möchten, können Sie die Konfigurationsdatei erneut öffnen und <code>permit_join:</code> auf <code>false</code> setzen.
</li>

</List>
</li>

<li>

Service für Autostart erstellen

<List>

<li>

Jetzt müssen Sie einen Service erstellen. Erstellen Sie die Datei:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

Fügen Sie Folgendes zu dieser Datei hinzu und ändern Sie <code>IHR_RASPPI_BENUTZERNAME_HIER</code>. Wenn Sie Ihren Benutzernamen nicht kennen, verwenden Sie den Befehl <code>whoami</code>.

<LessonCodeWrapper language="bash">
[Unit]
Description=zigbee2mqtt
After=network.target 
[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=YOUR_RASPPI_USERNAME_HERE
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>
</li>

<li>

Überprüfen Sie, ob die Konfiguration funktioniert:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

Die Ausgabe sollte wie folgt aussehen:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Aktivieren Sie den Service, um Zigbee2MQTT automatisch beim Booten zu starten:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>