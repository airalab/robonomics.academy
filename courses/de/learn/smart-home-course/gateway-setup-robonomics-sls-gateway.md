---
title: "Lektion #4b, Gateway Setup: Robonomics SLS Gateway"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: Home Assistant Kurs
lessonNumber: 5
metaOptions: [Lernen Sie, Souveränes Smart Home mit Robonomics und Home Assistant]
defaultName:  Sovereign Smart Home with Robonomics and Home Assistant
---

## Worum geht es hier

Dies ist ein Szenario-Setup zum Verbinden von Geräten mit dem Robonomics SLS Gateway. Robonomics ließ sich bei der Gestaltung von dem Gateway des [Smart Logic System](https://github.com/slsys/Gateway) Projekts inspirieren und modifizierte einen Teil der Schaltung. Sie können ein Gateway von Robonomics bestellen oder Ihr eigenes mithilfe unserer [Baupläne](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01) bauen.

Sie installieren die erforderliche Software für das Gateway, konfigurieren es und verbinden es mit Home Assistant.

<robo-academy-note type="note" title="Attention">
  SmartRF Flash Programmer, ein Programm zur Aktualisierung der Firmware, erfordert das Windows-Betriebssystem.
</robo-academy-note>

## Anweisungen

<List type="numbers">

<li>

Installation der Zigbee-Mikrocontroller-Firmware

<List>

<li>

Zuerst müssen Sie den CC2652P-Mikrocontroller des Gateways flashen. Schalten Sie die Schalter <code>2</code>, <code>4</code> und <code>7</code> am unteren Teil des SLS Gateways auf <code>ON</code>, die anderen müssen auf <code>OFF</code> stehen.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

Verbinden Sie das Gateway mit Ihrem Computer mit einem USB-A<>USB-C-Kabel.

<robo-academy-note type="warning" title="WARNING">
  Bitte verwenden Sie nur USB-A<>USB-C-Kabel, da das Gateway derzeit keine USB-C<>USB-C-Typen unterstützt.
</robo-academy-note>

</li>

<li>

Die CC2652-Firmware erfordert den SmartRF Flash Programmer v2 von Texas Instrument. Laden Sie ihn von [der offiziellen Website](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2) herunter und installieren Sie ihn dann.

</li>

<li>

Laden Sie die Firmware für den CC2652P-Mikrocontroller von [GitHub-Repository](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator) herunter.

</li>

<li>

Starten Sie das Programm. Wählen Sie im Fenster <code>Verbundenes Gerät</code> den CC2652P-Mikrocontroller aus, setzen Sie den Pfad zur Firmware, setzen Sie die Flags auf <code>Löschen, Programmieren, Überprüfen</code> wie im Bild und drücken Sie <code>Start</code>.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

Nach erfolgreichem Flashen sehen Sie eine <code>Erfolg!</code>-Nachricht. Jetzt können Sie das USB-Kabel abziehen.

</li>
</List>
</li>

<li>

Installation der Mikrocontroller-Firmware

<List>

<li>

Jetzt müssen Sie das Gateway für die Softwareinstallation einrichten. Wir empfehlen Ihnen, die Firmware zu aktualisieren, indem Sie das Gateway direkt mit Ihrem Raspberry Pi verbinden und alle folgenden Befehle auf diesem Gerät eingeben. 

</li>

<li>

Schalten Sie die Schalter <code>1</code> und <code>3</code> am unteren Teil des SLS Gateways auf <code>ON</code>, die anderen müssen auf <code>OFF</code> stehen. Verbinden Sie dann das Gateway mit Ihrem Raspberry Pi über den USB-Typ-C-Anschluss.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Verbinden Sie sich über SSH mit dem Raspberry Pi.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

Klonen Sie das Repository mit der Firmware:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

Um das SLS-Gateway zu flashen, müssen Sie die Skripte <code>Löschen</code> und <code>Flash_16mb</code> ausführen:

<LessonCodeWrapper language="bash" noLines>
cd robonomics-hass-utils/esp_firmware/linux
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Flash_16mb.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Flash_16mb.sh
</LessonCodeWrapper>
</li>

<li class="no-bullet">

\- **Fehlerbehebung**

Wenn Sie Probleme beim Aktualisieren der Gateway-Firmware haben, müssen Sie zusätzliche Schritte unternehmen:

<List>

<li>

Stellen Sie sicher, dass das pySerial-Modul installiert ist:

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

Geben Sie Ihrem Benutzer Zugriffsrechte auf den USB-Port:

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

In einigen Fällen ist es erforderlich, die Bandbreiteneinstellung im Skript zu ändern, um die Firmware zu aktualisieren. Öffnen Sie das Skript <code>Flash_16mb.sh</code> mit dem Nano-Editor und ändern Sie den Baud-Parameter von <code>921600</code> auf einen kleineren Wert (zum Beispiel <code>115200</code>).
</li>
</List>
</li>

<li class="no-bullet">

\- **Zusätzlich**

Wir bieten auch Optionen zum Aktualisieren der Firmware unter Verwendung anderer Betriebssysteme (macOS und Windows) an. Sie finden entsprechende Skripte in einem Ordner, dessen Name von Ihrem Betriebssystem abhängt.

</li>
</List>
</li>

<li>

Einrichten des Gateways

<List>

<li>

Stellen Sie die Schalter auf der Rückseite des Gateways in ihre neue Position. Schalter <code>5</code> (RX Zigbee zu ESP) und <code>6</code> (TX Zigbee zu ESP) müssen sich in der Position <code>ON</code> befinden, die anderen müssen <code>OFF</code> sein.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Schließen Sie das Typ-C-Netzkabel an. Die Anzeigelampe in der Mitte sollte grün leuchten.

</li>

<li>

Beim ersten Start teilt das Gateway Wi-Fi mit dem SSID <code>zgw****</code>. Verbinden Sie sich mit diesem Netzwerk. Beachten Sie, dass das Signal möglicherweise recht schwach ist, daher ist es besser, das SLS-Gateway näher an Ihren Computer zu halten.

Wenn die Verbindung erfolgreich ist, wird die Weboberfläche geöffnet (oder Sie finden sie unter der Adresse 192.168.1.1).

</li>

<li>

Gehen Sie zur Wi-Fi-Seite und geben Sie Ihre Wi-Fi-Anmeldeinformationen ein, indem Sie Benutzername / Passwort eingeben und auf die Schaltfläche <code>Speichern</code> drücken. Drücken Sie danach die Schaltfläche <code>Neustart</code>. Das Gateway wird neu starten und sich mit Ihrem Wi-Fi-Netzwerk verbinden.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

Finden Sie die lokale IP des SLS-Gateways, um auf die Weboberfläche zuzugreifen. Dazu können Sie die [Fing](https://www.fing.com/products)-App oder <code>arp -a</code> in Ihrem Terminal oder Nmap verwenden: 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

wobei <code class="bold">xxx</code> Ihre IP-Adresse im lokalen Netzwerk ist. Der Gateway-Name sollte so aussehen: <code>zgw****</code>. Öffnen Sie die Weboberfläche des Gateways, indem Sie die Gateway-IP in einen Browser einfügen.
</li>

<li>

Gehe zu <code>Einstellungen</code> -> <code>Hardware</code> und stelle sicher, dass die Einstellungen wie auf dem Bild aussehen. Korrigiere die Einstellungen bei Bedarf und klicke auf die Schaltfläche <code>Speichern</code>:

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

Die Tabelle mit den erforderlichen Werten:


| Field        	         | **Value**          |                                                                     	
|------------------------|--------------------|
| Zigbee module          | TI                 |
| Zigbee UART RX         | 22                 |
| Zigbee UART TX         | 23                 |
| Zigbee RST Pin         | 18                 |
| Zigbee BSL Pin         | 19                 |
| Button Mode            | 33 (pullUP - true) |
| Number addressable leds| 0                  |
| Led Red (or addr)      | 21                 |
| Led Green              | 5                  |
| Led Blue               | 27                 |
| I2C SDA                | 255                |
| I2C SCL                | 255                |

</li>

<li>

Starte dann das Gateway neu. Wähle <code>Aktionen</code> -> <code>System neu starten</code> in der rechten oberen Ecke. Stelle sicher, dass das Gateway ordnungsgemäß mit dem CC2652P-Mikrocontroller im Zigbee-Infofenster funktioniert. Der Gerätestatus sollte <code>OK</code> sein.

</li>

<li>

Starte das Gateway neu. Wähle <code>Aktionen</code> -> <code>Neustart</code> des Systems in der rechten oberen Ecke.

</li>

<li>

Konfiguriere das automatische Hinzufügen von Geräten zu Home Assistant. Gehe zu <code>Zigbee</code> -> <code>Konfiguration</code> und wähle dann <code>Home Assistant MQTT Discovery</code> und <code>Staaten löschen</code>. Speichere die Änderungen und starte das SLS-Gateway erneut.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **Zusätzlich**:

Wenn du bereits ein aktives SLS-Gateway in deinem Zuhause hast und jetzt ein weiteres konfigurierst, werden sie miteinander in Konflikt geraten. Um dieses Problem zu lösen, musst du den Kanal auf dem neuen Gerät ändern.

Gehe dazu zu <code>Zigbee</code> -> <code>Konfiguration</code> und ändere den Kanal auf einen anderen (z.B. Kanal 15).

</li>

<li>

Verbinde deine Geräte, indem du zu <code>Zigbee</code> -> <code>Beitreten</code> gehst. Setze deine Sensoren in den Pairing-Modus, die häufigste Methode, um ein Gerät in den Verbindungszustand zu versetzen, ist das Halten seiner Ein-/Aus-Taste oder das Ein-/Ausschalten 5 Mal. Drücke die Schaltfläche <code>Beitreten aktivieren</code>, um nach Zigbee-Geräten zu suchen. Du wirst aktive Sensoren sehen.

</li>
</List>
</li>

<li>

Verbindung des SLS-Gateways mit Home Assistant

<List>

<li>

Du musst MQTT auf dem SLS-Gateway konfigurieren. Gehe zurück zur Web-Oberfläche deines SLS-Gateways und gehe zu <code>Einstellungen</code> -> <code>Verknüpfung</code> -> <code>MQTT-Einrichtung</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

Füge deine Broker-Adresse hinzu (Adresse des Raspberry Pi mit Home Assistant im lokalen Netzwerk, du kannst sie mit der [Fing](https://www.fing.com/products) App oder mit dem Befehl <code>ip -a</code> auf deinem RPi finden), Port (Standard ist 1883), deinen Broker-Benutzernamen und dein Passwort (das du zuvor erstellt hast) und den Themen-Namen (du kannst beliebige wählen). Außerdem muss die lokale IP-Adresse des Raspberry Pi statisch sein.

Vergiss nicht, auf <code>Aktivieren</code> und <code>Staaten beibehalten</code> zu klicken.

</li>

<li>

Speichere die Änderungen. Jetzt werden die Geräte automatisch in Home Assistant angezeigt.

</li>
</List>

</li>

<li>

Geräte verbinden 

<List>

<li>

Verbinde deine Geräte, indem du zu <code>Zigbee</code> -> <code>Beitreten</code> gehst. Setze deine Sensoren in den Pairing-Modus, die häufigste Methode, um ein Gerät in den Verbindungszustand zu versetzen, ist das Halten seiner Ein-/Aus-Taste oder das Ein-/Ausschalten 5 Mal.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

Drücke die Schaltfläche <code>Beitreten aktivieren</code>, um nach Zigbee-Geräten zu suchen. Du wirst aktive Sensoren sehen.

</li>

</List>
</li>

</List>