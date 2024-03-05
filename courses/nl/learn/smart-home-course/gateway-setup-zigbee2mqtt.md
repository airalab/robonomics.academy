---
title: "Les #4a, Gateway Setup: Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: thuiscursus assistent
lessonNumber: 4
metaOptions: [Leer, Soevereine Slimme Woning met Robonomics en Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Intro

Dit is een scenario-opstelling voor het verbinden van apparaten met behulp van de Zigbee-adapter en de Zigbee2MQTT-brug. Als je de [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) hebt (die alle benodigde firmware heeft), kun je eenvoudig doorgaan met deze instructies. Als je echter een andere adapter hebt, is het eerste wat je moet doen het flashen ervan met Zigbee2MQTT-software. Je kunt instructies voor je apparaat [hier](https://www.zigbee2mqtt.io/guide/adapters/) vinden.

Je hebt ook een slim apparaat nodig om de verbinding met Home Assistant te testen.


## Instructies

<List type="numbers">

<li>

Software installeren

<List>

  <li>
    Stel de Node.js-runtimeomgevingrepository in en installeer deze met vereiste afhankelijkheden:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Controleer of de juiste versies van Node.js (v14.X, V16.x, V17.x of V18.X) en pakketbeheerder <code class="nowb">npm</code> (6.X, 7.X of 8.X) automatisch zijn geïnstalleerd met Node.js:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Maak een directory voor Zigbee2MQTT en stel je gebruiker als eigenaar ervan in:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Kloon Zigbee2MQTT-repository:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    Installeer afhankelijkheden. Let op dat de <code>npm ci</code> enkele waarschuwingen kan produceren die genegeerd kunnen worden.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

Adapter verbinden en configureren

<List>

<li>

Sluit de Zigbee-adapter aan op de Raspberry Pi. Vervolgens moet je de locatie van de stick vinden. Typ hiervoor het volgende commando in:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

De output moet er als volgt uitzien:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

In dit voorbeeld is de stick-verbinding directory <code>ttyUSB0</code>.
</li>

<li>

Bewerk het bestand <code>configuration.yaml</code> voordat u Zigbee2MQTT start:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

De basisconfiguratie heeft een paar aanpassingen nodig. Wijzig de volgende verklaringen:

\- <code>homeassistant:</code> naar <code>true</code>, het zal automatisch sensoren verbinden met Home Assistant;

\- de opmerking <code>user</code> en <code>password</code> onder <code>mqtt</code> en voer uw gebruikersnaam en wachtwoord in (als een string, met aanhalingstekens) van MQTT Broker;

\- wijzig de poort in <code>serial</code> -> <code>port</code> naar de stick-verbinding directory. In dit voorbeeld: <code>/dev/ttyUSB0</code>.

Het aangepaste configuratiebestand moet er als volgt uitzien:

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

Als u al een actieve Zigbee-adapter of gateway in huis heeft, en u nu een andere stick configureert, dan zullen ze met elkaar in conflict komen. Om dit probleem op te lossen moet u het kanaal op het nieuwe apparaat wijzigen. Voeg hiervoor de volgende strings toe aan het einde van het configuratiebestand:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Start Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

Als het succesvol is gestart, zie je iets als:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Apparaat koppelen

<List>

<li>

Het is tijd om je slimme apparaat aan te sluiten. De meest voorkomende manier om een apparaat in verbindingsmodus te zetten is door de aan/uit-knop ingedrukt te houden of deze 5 keer aan/uit te schakelen. Zorg ervoor dat Zigbee2MQTT actief is.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

Wanneer het apparaat is verbonden, zou je een bericht moeten zien zoals:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

Onthoud de ID van de sensor: in dit voorbeeld — <code>0x00158d0003eeeacf</code>.

Nu zou je deze sensor met ID moeten zien in je Home Assistant WebUI. Ga naar <code>Instellingen</code> -> <code>Apparaten & Services</code> -> <code>Apparaten</code> om het te controleren:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

Nadat je alle sensoren hebt toegevoegd, kun je het programma stoppen met <code>Ctrl+C</code>. Als je geen apparaten meer wilt toevoegen, kun je het configuratiebestand opnieuw openen en <code>permit_join:</code> instellen op <code>false</code>.
</li>

</List>
</li>

<li>

Service maken voor automatisch starten

<List>

<li>

Nu moet je een service maken. Maak het bestand aan:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

Voeg het volgende toe aan dit bestand met wijziging van <code>JE_RASPPI_GEBRUIKERSNAAM_HIER</code>. Als je je gebruikersnaam niet weet, gebruik dan het <code>whoami</code> commando.

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

Controleer of de configuratie werkt:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

De output moet er als volgt uitzien:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Activeer de service om Zigbee2MQTT automatisch te starten bij het opstarten:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>