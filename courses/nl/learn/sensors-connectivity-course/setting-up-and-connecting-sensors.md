---
title: "Les #3, Het opzetten en verbinden van sensoren"
description: 'HET OPZETTEN EN VERBINDEN VAN SENSOREN'
lessonNumber: 3
metaOptions: [Leer, Sensoren Verbindeniviteit & Gedecentraliseerd Sensoren Netwerk]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Onze sensoren gebruiken de Robonomics-firmware, een uitgebreide versie van de sensor.community-firmware, waaraan enkele sensoren zijn toegevoegd en het gegevensverzendschema is gewijzigd. De broncode is te vinden [via de link.](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

Als je een kant-en-klaar Robonomics bord hebt, kun je naar de "Verbinden" sectie gaan.

## Vereisten

**Voor Linux:**

<List type="numbers">

<li>

Voeg een gebruiker toe aan de `dialout` groep (voor Ubuntu) om toegang te krijgen tot de USB-poort:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>Herstart de computer.</li>

<li>

Download de Robonomics `airrohr-flasher` uitvoerbare van [releases](https://github.com/airalab/sensors-connectivity/releases).

</li>

<li>

Verander de rechten van het bestand en voer het uit:

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**Voor Windows:**

<List type="numbers">

<li>

Installeer drivers voor USB2serial (in Windows 10 zou het automatisch moeten starten) - Drivers voor NodeMCU v3 (CH340): [link](http://www.wch.cn/downloads/file/5.html), [alternatieve link](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

Download het uitvoerbare bestand Robonomics `airrohr-flasher` van [releases](https://github.com/airalab/sensors-connectivity/releases) en voer het uit.

</li>

</List>

**Voor MacOS:**

<List type="numbers">

<li>

Installeer de drivers voor USB2serial — Drivers voor NodeMCU v3 (CH340): [link](http://www.wch.cn/downloads/file/178.html), [alternatieve link](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Download het uitvoerbare bestand Robonomics `airrohr-flasher` van [releases](https://github.com/airalab/sensors-connectivity/releases) en voer het uit.

</li>

</List>


## Installatie

<List type="numbers">

<li>

Verbind de sensor met de pc en start het programma 'airrohr-flasher'. Na het openen van het programma ziet u het volgende (afhankelijk van uw besturingssysteem):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

Het veld 'Board' moet automatisch worden ingevuld; zo niet, kies de vereiste poort uit de vervolgkeuzelijst.

<RoboAcademyNote type="okay" title="INFO">
Als <code>airrohr-flasher</code> uw board niet kan vinden, zorg er dan voor dat u het gedeelte <b>Vereisten</b> correct hebt uitgevoerd.
</RoboAcademyNote>

</li>

<li>

Selecteer de firmware met de gewenste taal en klik op 'Uploaden'. Het uploaden van de firmware duurt even. Als u later besluit de taal te wijzigen of een duidelijke installatie uit te voeren (om de configuratie te resetten), ga dan naar de pagina 'Flash wissen' en druk op de knop om het flashgeheugen van de sensor te wissen.

</li>

<li>

Na het downloaden van de firmware, start de ESP opnieuw op (gewoon de USB loskoppelen en opnieuw aansluiten).

</li>

<li>

Kies sensoren uit het selectievakmenu. Kies SDS011 en eventuele aanvullende sensoren. Druk op 'Configuratie opslaan'.

</li>

<li>

Na het downloaden van de configuratie, start de ESP opnieuw op (gewoon de USB loskoppelen en opnieuw aansluiten).

</li>

</List>

## Connect

<List type="numbers">

<li>

Na het opnieuw opstarten zal het bord een Wi-Fi-netwerk creëren met de naam `RobonomicsSensor-xxxxxxxxx`. Maak er verbinding mee vanaf uw telefoon of computer: u zult het autorisatievenster zien (zo niet, open dan de browser en ga naar `192.168.4.1`).

</li>

<li>

Selecteer uw Wi-Fi-netwerk uit de lijst (of schrijf het zelf als het niet op de lijst staat) en vul het wachtwoordveld in.

</li>

<li>

Schrijf de coördinaten van de plaats waar de sensor zal worden geïnstalleerd.

<RoboAcademyNote type="warning" title="WARNING">
De sensorcoördinaten worden vervolgens weergegeven op een openbare kaart. Als u uw privégegevens niet wilt tonen, schrijf dan dichtbij, maar niet exacte coördinaten.
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

Klik op `Configuratie opslaan en opnieuw opstarten`. Het bord zal opnieuw opstarten en verbinding maken met het opgegeven Wi-Fi-netwerk.

</li>

<li>

Open [Robonomics-sensorenkaart](https://sensors.robonomics.network/#/) en zoek de plaats waar u de sensor hebt geïnstalleerd. Binnen een paar minuten kunt u uw sensor met gegevens op de kaart zien.


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

Dat is alles met de standaardinstallatie. Voor een meer geavanceerde setup (het verzenden van gegevens naar je eigen server), lees de volgende sectie.

## Aanvullend Configuratie

Voordat je de configuratie uitvoert, moet je het adres van de sensor in je Wi-Fi-netwerk vinden. Hiervoor kun je `airrohr-flasher` gebruiken (je computer moet op hetzelfde netwerk als de sensor zijn). Start het en ga naar het tabblad `Discovery`, druk vervolgens op `Vernieuwen`, wacht even en je sensoradres zal verschijnen.

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

Dubbelklik op dit adres (of typ het in je browser), je komt bij het sensor menu:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

Nu kun je je configuratie aanpassen.


## Aangepaste API

Je kunt ook het verzenden van gegevens naar je eigen server instellen. Om dit te doen, klik in het tabblad `APIs` op `Verzenden naar eigen API` en geef het serveradres en poort op (`65` voor sensorconnectiviteit):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

Klik op `Save and restart` om de instellingen op te slaan.