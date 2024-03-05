---
title: "Les #3, MQTT Broker Setup en Hass Init"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: thuiscursus assistent
lessonNumber: 3
metaOptions: [Leer, Soevereine Slimme Woning met Robonomics en Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Intro

Na het voltooien van de configuratie van de Raspberry Pi, is de volgende stap het installeren van de MQTT Broker op de Raspberry Pi. Zoals hierboven vermeld, is de Broker verantwoordelijk voor het routeren van berichten tussen verschillende MQTT-clients. U zult Eclipse Mosquitto, een open source MQTT-broker, installeren en configureren.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

Bovendien zult u de Home Assistant-setup voltooien en MQTT-integratie eraan toevoegen.

## Instructies

<List type="numbers">

<li>


Mosquitto Broker Installatie

<List>
<li>

Installeer [Mosquitto Broker](https://mosquitto.org/) op uw Raspberry Pi:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

Voer UW_GEBRUIKERSNAAM in (gebruik degene die u wilt) en wachtwoord in (u wordt gevraagd het wachtwoord in te voeren na het commando):

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

Bewerk het configuratiebestand:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

Voeg het volgende toe aan het bestand:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

Sla het bestand op en herstart de service:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

Controleer tot slot de status van de broker:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

U zou iets als dit moeten zien:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Home Assistant en MQTT instellen

<List>

<li>

Open de webbrowser en ga naar <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. (met hetzelfde IP-adres dat u in de vorige les heeft gevonden). Wees ervan bewust dat het adres van de Raspberry Pi in de loop van de tijd kan veranderen als gevolg van routerinstellingen. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

Voer op de eerste pagina een willekeurige naam, gebruikersnaam, wachtwoord in en klik op "<code>ACCOUNT AANMAKEN</code>"
</li>

<li>

Vul vervolgens een naam in voor je huis en stel je locatie en eenheidssysteem in. Klik op "<code>DETECT</code>" om je locatie te vinden en je tijdzone en eenheidssysteem op basis van die locatie in te stellen. Als je liever je locatie niet wilt delen, kun je deze waarden handmatig instellen.

</li>

<li>

Op het volgende scherm laat Home Assistant alle apparaten zien die het op je netwerk heeft ontdekt. Maak je geen zorgen als je minder items ziet dan hieronder wordt getoond; je kunt altijd later handmatig apparaten toevoegen. Klik nu gewoon op <code>FINISH</code> en je komt op het hoofdscherm van Home Assistant terecht.

</li>

<li>

Nu moeten we een MQTT-integratie installeren. Ga naar <code>Instellingen</code> -> <code>Apparaten & Services.</code>

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

Druk op de knop <code>INTEGRATIE TOEVOEGEN</code> rechtsonder in de hoek. Zoek in het geopende venster naar <code>MQTT</code>.

</li>

<li>

Selecteer MQTT en stel je brokeradres in — <code>localhost</code> poort — <code>1883</code> en je gebruikersnaam en wachtwoord (dezelfde die je eerder hebt aangemaakt voor de Mosquitto Broker) en druk vervolgens op <code>SUBMIT</code>.
</li>

</List>
</li>
</List>