---
title: "Les #4b, Gateway Setup: Robonomics SLS Gateway"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: thuiscursus assistent
lessonNumber: 5
metaOptions: [Leer, Soevereine Slimme Woning met Robonomics en Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Waar gaat dit over

Dit is een scenario-opstelling voor het verbinden van apparaten met behulp van de Robonomics SLS Gateway. Robonomics heeft ontwerpinspiratie opgedaan uit de gateway ontwikkeld door het [Smart Logic System](https://github.com/slsys/Gateway) project en een deel van de schakeling aangepast. U kunt een gateway bestellen bij Robonomics of zelf bouwen met behulp van onze [blauwdrukken](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01).

Je installeert de benodigde software voor de gateway, configureert deze en koppelt hem aan Home Assistant.

<robo-academy-note type="note" title="Attention">
  SmartRF Flash Programmer, een programma voor het bijwerken van firmware, vereist Windows besturingssysteem.
</robo-academy-note>

## Instructies

<List type="numbers">

<li>

Installeren van Zigbee Microcontroller Firmware

<List>

<li>

Eerst moet u de CC2652P microcontroller van de gateway flashen. Zet de schakelaars <code>2</code>, <code>4</code> en <code>7</code> aan de onderkant van de SLS Gateway op <code>AAN</code>, de andere moeten <code>UIT</code> zijn.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

Sluit de gateway aan op uw computer met een USB-A<>USB-C kabel.

<robo-academy-note type="warning" title="WARNING">
  Gebruik alstublieft alleen USB-A<>USB-C type kabels, omdat de gateway op dit moment geen USB-C<>USB-C type ondersteunt.
</robo-academy-note>

</li>

<li>

De CC2652 firmware vereist SmartRF Flash Programmer v2 van Texas Instrument. Download het van [de officiële site](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2) en installeer het vervolgens.

</li>

<li>

Download firmware voor CC2652P microcontroller van [GitHub repository](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator).

</li>

<li>

Start het programma. Selecteer in het <code>Verbonden apparaat</code> venster de CC2652P microcontroller, stel het pad naar de firmware in, stel de vlaggen in op <code>Wissen, Programmeren, Verifiëren</code> zoals op de afbeelding en druk op <code>Start</code>.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

Na succesvol flashen ziet u een <code>Succes!</code> bericht. Nu kunt u de USB-kabel loskoppelen.

</li>
</List>
</li>

<li>

Installeren van Microcontroller Firmware

<List>

<li>

Nu moet u de gateway instellen voor software-installatie. We raden u aan de firmware bij te werken door de gateway rechtstreeks op uw Raspberry Pi aan te sluiten en alle volgende commando's op dat apparaat in te voeren. 

</li>

<li>

Zet schakelaars <code>1</code> en <code>3</code> aan de onderkant van de SLS gateway op <code>AAN</code>, de andere moeten <code>UIT</code> zijn. Sluit vervolgens de gateway aan op uw Raspberry Pi via de USB type-C poort.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Verbind met de Raspberry Pi via SSH.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

Kloon het repository met firmware:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

Om de SLS gateway te flashen moet u de scripts <code>Clear</code> en <code>Flash_16mb</code> uitvoeren:

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

\- **Probleemoplossing**

Als u problemen ondervindt bij het bijwerken van de gateway firmware, moet u extra stappen ondernemen:

<List>

<li>

Zorg ervoor dat de pySerial module is geïnstalleerd:

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

Geef uw gebruiker toegangsrechten tot de USB-poort:

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

In sommige gevallen is het nodig om de bandbreedte-instelling in het script te wijzigen om de firmware bij te werken. Open het <code>Flash_16mb.sh</code> script met de nano-editor en wijzig de baud parameter van <code>921600</code> naar een kleinere waarde (bijvoorbeeld <code>115200</code>).
</li>
</List>
</li>

<li class="no-bullet">

\- **Extra**

We bieden ook opties voor het bijwerken van de firmware met behulp van andere besturingssystemen (macOS en Windows). U kunt bijbehorende scripts vinden in een map, waarvan de naam afhankelijk is van uw OS.

</li>
</List>
</li>

<li>

Het instellen van de Gateway

<List>

<li>

Zet de schakelaars aan de achterkant van de gateway op hun nieuwe positie. Schakelaars <code>5</code> (RX Zigbee naar ESP) en <code>6</code> (TX Zigbee naar ESP) moeten in de <code>AAN</code> positie staan, de anderen moeten <code>UIT</code> zijn.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Sluit de type-C voedingskabel aan. Het indicatorlampje in het midden moet groen worden.

</li>

<li>

Bij de eerste opstart zal de gateway Wi-Fi delen met de SSID <code>zgw****</code>. Maak verbinding met dit netwerk. Houd er rekening mee dat het signaal mogelijk vrij zwak is, dus het is beter om de SLS-gateway dichter bij uw computer te houden.

Als de verbinding succesvol is, wordt de webinterface geopend (of u kunt deze vinden op het adres 192.168.1.1).

</li>

<li>

Ga naar de Wi-Fi pagina en voer uw Wi-Fi referenties in door de gebruiker / wachtwoord in te voeren en druk op de <code>Opslaan</code> knop. Druk daarna op de <code>Opnieuw opstarten</code> knop. De gateway zal herstarten en verbinding maken met uw Wi-Fi netwerk.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

Zoek het lokale IP-adres van de SLS-gateway om toegang te krijgen tot de webinterface. Hiervoor kunt u de [Fing](https://www.fing.com/products) app gebruiken of <code>arp -a</code> in uw terminal of Nmap: 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

waar <code class="bold">xxx</code> uw IP-adres in het lokale netwerk is. De gatewaynaam moet er zo uitzien: <code>zgw****</code>. Open de webinterface van de gateway door het gateway-IP-adres in een browser te plakken.
</li>

<li>

Ga naar <code>Instellingen</code> -> <code>Hardware</code> en zorg ervoor dat de instellingen eruit zien zoals op de afbeelding. Corrigeer de instellingen indien nodig en klik op de <code>Opslaan</code> knop:

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

De tabel met vereiste waarden:


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

Herstart vervolgens de gateway. Kies <code>Acties</code> -> <code>Systeem herstarten</code> in de rechterbovenhoek. Zorg ervoor dat de gateway goed werkt met de CC2652P microcontroller in het Zigbee info venster. DeviceState moet <code>OK</code> zijn.

</li>

<li>

Herstart de gateway. Kies <code>Acties</code> -> <code>Herstarten</code> systeem in de rechterbovenhoek.

</li>

<li>

Configureer automatisch het toevoegen van apparaten aan Home Assistant. Ga naar <code>Zigbee</code> -> <code>Configuratie</code> en kies vervolgens <code>Home Assistant MQTT Discovery</code> en <code>Staten wissen</code>. Sla de wijzigingen op en herstart opnieuw de SLS gateway.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **Extra**:

Als je al een actieve SLS gateway in huis hebt, en je nu een andere aan het configureren bent, dan zullen ze met elkaar conflicteren. Om dit probleem op te lossen moet je het kanaal op het nieuwe apparaat wijzigen.

Ga hiervoor naar <code>Zigbee</code> -> <code>Configuratie</code> en verander het kanaal naar een ander (bijv. kanaal 15).

</li>

<li>

Verbind je apparaten door naar <code>Zigbee</code> -> <code>Verbinden</code> te gaan. Zet je sensoren in koppelingsmodus, de meest gebruikelijke manier om een apparaat in verbindingsmodus te zetten is door de aan/uit-knop ingedrukt te houden of ze 5 keer aan/uit te schakelen. Druk op de <code>Inschakelen</code> knop om Zigbee apparaten te zoeken. Je zult actieve sensoren zien.

</li>
</List>
</li>

<li>

SLS Gateway verbinden met Home Assistant

<List>

<li>

Je moet MQTT configureren op de SLS Gateway. Ga terug naar de webinterface van je SLS Gateway en ga naar <code>Instellingen</code> -> <code>Link</code> -> <code>MQTT Setup</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

Voeg het adres van je broker toe (het adres van de Raspberry Pi met Home Assistant in het lokale netwerk, je kunt dit vinden met de [Fing](https://www.fing.com/products) app of door het <code>ip -a</code> commando te gebruiken op je RPi), poort (standaard is 1883), je broker gebruikersnaam en wachtwoord (die je eerder hebt aangemaakt) en de onderwerpsnaam (je kunt elke kiezen). Ook moet het lokale Raspberry Pi IP-adres statisch zijn.

Vergeet niet om op <code>Inschakelen</code> en <code>Staten behouden</code> te klikken.

</li>

<li>

Sla de wijzigingen op. Nu worden apparaten automatisch weergegeven in Home Assistant.

</li>
</List>

</li>

<li>

Verbind Apparaten 

<List>

<li>

Verbind je apparaten door naar <code>Zigbee</code> -> <code>Verbinden</code> te gaan. Zet je sensoren in koppelingsmodus, de meest gebruikelijke manier om een apparaat in verbindingsmodus te zetten is door de aan/uit-knop ingedrukt te houden of ze 5 keer aan/uit te schakelen.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

Druk op de Inschakelen knop om Zigbee apparaten te zoeken. Je zult actieve sensoren zien.

</li>

</List>
</li>

</List>