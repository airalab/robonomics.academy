---
title: "Architectuur"
description: Deze cursus gaat helemaal over het leren kennen van het Feecc-systeem en al zijn componenten.
metaOptions: [Leren, wennen aan Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In deze les zullen we een nadere blik werpen op de architectuur van Feecc en alle componenten van de software bekijken.
</RoboAcademyText>

Het Feecc-platform bestaat uit verschillende services, van controle van de engineer workbench tot het verstrekken van analyses. Elke service is verantwoordelijk voor een bepaald soort functionaliteit die vereist is voor implementatie in een bedrijfsomgeving.

## Feecc Engineer Workbench

De belangrijkste taak van Engineer Workbench is het organiseren van de werkruimte van de assemblage-engineer. Afhankelijk van de taak kan de engineer de volgende apparaten nodig hebben:

- IP-camera om video-opnamen van het productieproces te organiseren;
- RFID-lezer voor identificatie in het systeem met een persoonlijke RFID-kaart;
- barcodelezer voor het scannen van productlabels;
- labelprinter voor het labelen van de vervaardigde producten;
- digitale sensoren die gegevens verzamelen van verschillende apparaten / stations.

Engineer Workbench-software bestaat meestal uit de volgende containers. Ten eerste de software die installatie vereist **op de computer waarop de werknemer werkt** tijdens de assemblage van het product:

1. [feecc-workbench-daemon](https://github.com/Multi-Agent-io/feecc-workbench-daemon) — het hart van het Feecc-platform dat gebruikers toegang biedt tot alle Feecc-functies en configuraties; het bevat ook lichtgewicht services voor het afdrukken van labels met behulp van een labelprinter en het opnemen van video van RTSP-streams;
2. [feecc-workbench-frontend](https://github.com/Multi-Agent-io/feecc-workbench-frontend) — een webinterface voor de interactie van werknemers met het Feecc-platform;
3. [feecc-hid-reader-daemon](https://github.com/Multi-Agent-io/feecc-hid-reader-daemon) — een Python-demon voor het verzenden van USB-perifere gebeurtenissen;

Ten tweede de software die kan worden geïnstalleerd **zowel op de computer van de werknemer als op een server in het lokale netwerk**:

1. [feecc-ipfs-gateway](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) — een microservice voor het publiceren van bestanden naar IPFS, en meer specifiek, bestands-CID's naar het Robonomics Network;

De onderstaande figuur toont de architectuur van de Feecc Engineer Workplace in een zakelijke omgeving. IPFS Gateway (evenals IPFS-node en MongoDB in de vorm van een cluster-peer) kan worden gehost op de computer van elke werknemer, wat de decentralisatie van het systeem zal verbeteren ten koste van rekenkracht.

<LessonImages src="feecc-course/feecc_global_hardware.png" alt="an architecture of Feecc"/>

### Ondersteunde hardware voor één werkruimte:

#### RFID-scanner

Een USB-RFID-scanner is nodig om ingenieurs op het veld te autoriseren met hun interne badges. Inkomende informatie wordt verwerkt met behulp van de `feecc-hid-reader-daemon`.

#### Barcode scanner

De USB-barcode scanner is noodzakelijk voor het identificeren van producten aan de hand van barcodes, het verzenden van opdrachten naar services en voor de juiste toewijzing van certificaten. De inkomende informatie wordt ook verwerkt met de `feecc-hid-reader-daemon`. Het lezen in twee dimensies is wenselijk, maar niet vereist.

#### Computer van de werknemer

Een kleine single-board computer verwerkt signalen van externe apparaten (barcode scanner, RFID scanner), stuurt verzoeken voor het afdrukken van afbeeldingen naar de printer, start en stopt video-opname, stuurt gegevens naar IPFS Gateway. Het draait de volgende services: `feecc-workbench-frontend`, `feecc-workbench-daemon` met labelprinter en camerasupport, `feecc-hid-reader-daemon`. Een internetverbinding via Wi-Fi of LAN is vereist.
    
Het is de moeite waard om te specificeren dat elke computer kan worden gebruikt in plaats van een single-payer computer met een monitor. Het besturingssysteem GNU/LINUX moet er native op zijn geïnstalleerd of via een virtuele machine.
    
Minimale technische specificaties:
    
- CPU: Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.8GHz of vergelijkbaar;
- RAM: 4GB LPDDR4-3200 of vergelijkbaar.

#### Scherm

De monitor wordt door de werknemer gebruikt om informatie over de huidige productiestap in te voeren en te bekijken. Het geeft ook hints voor de ingenieur over de huidige fase. Andere invoerapparaten kunnen ook worden gebruikt.

#### Labelprinter

De labelprinter wordt gebruikt om QR-codes en streepjescodes af te drukken voor verdere plaatsing van labels op het product voor identificatie- en verificatiedoeleinden. Interactie met de printer wordt uitgevoerd met behulp van de bijbehorende service van `feecc-workbench-daemon`. In ons geval gebruiken we XPrinter 236B-printers.

#### IP-camera

IP-camera voor het vastleggen van productieprocessen voor opname in het productcertificaat. Geplaatst boven het assemblagegebied van het product. Interactie met de camera wordt uitgevoerd met behulp van de bijbehorende service van `feecc-workbench-daemon`.

Vereiste technische specificaties: PoE-stroomvoorziening, RTSP-gegevensoverdrachtsprotocol. In ons geval gebruiken we Hikvision HiWatch DS-i200d.

### Ondersteunde hardware voor meerdere werkruimtes:

#### Router of switch

Router of switch met PoE 802.3af-ondersteuning en PoE-stroomvoorziening op de uitvoerpoorten is vereist voor het voeden van IP-camera's en het verbinden ervan met de `feecc-workbench-daemon`-service. In ons geval gebruiken we MikroTik hEX PoE (één voor 3-4 werkplekken) en voeding.

#### Server (optioneel)

Er kan ook een grotere server worden geïnstalleerd die `feecc-ipfs-gateway` kan uitvoeren. Het kan worden geplaatst op de plaats van een van de computers van de werkplekken van de werknemers. 

Minimale technische specificaties: 

- CPU: Intel Xeon E-2200-processor of vergelijkbaar;
- RAM: 8GB;
- Opslag: 1TB HDD;
- LAN-interface: 1 Gbit/s.

## Feecc Analytics

De belangrijkste taak van Feecc Analytics is het organiseren van het proces van traceerbaarheid van eindproducten en hun pre-verkoopinspectie op de afdeling productcontrole.

Feecc Analytics is afhankelijk van de volgende containers:

1. [feecc-analytics-backend](https://github.com/Multi-Agent-io/feecc-analytics-backend) - de belangrijkste software voor het implementeren van de analytische service;
2. [feecc-analytics-frontend](https://github.com/Multi-Agent-io/feecc-analytics-frontend) - de frontend-software voor de analytische service;

Het wordt meestal lokaal op een enkele server ingezet voor gegevensbeveiligingsdoeleinden binnen alleen de organisatie.

De hardware die nodig is voor Feecc Analytics om te werken is een lokale of externe server (virtuele machine) waarop de webtoepassing zal draaien en een barcode scanner. Elke geautoriseerde werknemer kan toegang krijgen tot de webtoepassing vanaf zijn/haar computer met een gebruikersnaam en wachtwoord.

## Feecc Validator

De belangrijkste taak van de Feecc Validator is het vergelijken van gegevens uit verschillende gegevensopslagplaatsen om de integriteit van het digitale productcertificaat te valideren.

Feecc Validator is afhankelijk van de volgende containers:

1. [feecc-validator-backend](https://github.com/Multi-Agent-io/feecc-validator-backend) - een microservice, ontworpen om certificaten te valideren en gegevens op te halen die zijn gekoppeld aan de eenheid, mits de gebruiker slechts een van de gegevensstukken heeft;
2. [feecc-validator-frontend](https://github.com/Multi-Agent-io/feecc-validator-frontend) - een webinterface voor interactie met de validerende microservice.

Net als Feecc Analytics kan het lokaal op een enkele server worden ingezet en heeft het een barcode scanner nodig.

<RoboAcademyText fWeight="500">
In de volgende les zullen we een nadere blik werpen op het Feecc-systeem via een kleine demo die lokaal op uw computer draait.
</RoboAcademyText>