---
title: "Demo van Feecc"
description: Deze cursus gaat helemaal over het leren kennen van het Feecc-systeem en al zijn componenten.
metaOptions: [Leren, wennen aan Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In deze les zul je de basisfuncties van Feecc testen met behulp van een virtueel testplatform als voorbeeld, dat een realistisch voorbeeld van een productietrackingsysteem nabootst.
</RoboAcademyText>

Voor demonstratiedoeleinden ontbreken enkele typische functies zoals labelafdrukken of videoregistratie, maar het bevat het hoofdconcept van een dergelijk systeem.

## Vereisten

Om de demo uit te voeren, heb je nodig:

- UNIX-achtig systeem (getest op [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/)
- [Docker](https://docs.docker.com/engine/install/ubuntu/) en [Docker compose](https://docs.docker.com/compose/)
- Webbrowser (getest op Google Chrome en Mozilla Firefox)

## Installatie

Voer de volgende commando's uit:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

Om werkende containers te controleren, voer het volgende uit:

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

Je zou de volgende output moeten zien:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## Demo starten

1. Ga naar http://localhost:3000/ in je browser, je zou een welkomstscherm moeten zien.

2. Op dit moment zou het systeem de werknemer moeten vragen om hun RFID-kaart op de scanner te plaatsen voor autorisatie. In de demo kun je `hid-emulator.py` gebruiken voor autorisatie. Om dit te doen, voer een aparte Docker-container uit:

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

Het is in staat om twee functies te emuleren: het verstrekken van een RFID-kaart en het scannen van een barcode; je hebt de eerste functie nodig, voer `1` in.

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the RFID-scanner.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. U ziet het scherm voor het selecteren van het compositietype, kies `SINGLE DEVICE`.

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. Meldingen verschijnen in de linkerbenedenhoek die het begin van het werk op het apparaat aangeven waarvoor een unieke ID is gemaakt. De blauwe melding toont ook de activiteit van de virtuele printer; op de daadwerkelijke installatie wordt op dit moment een barcode met de ID van het apparaat afgedrukt.

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. Klik op `START COMPOSITIE` om het opnemen van het apparaatassemblageproces te starten. U wordt gevraagd om alle noodzakelijke assemblagestappen te doorlopen; telkens wanneer een medewerker een stap voltooit, moet hij op de knop `VOLGENDE` klikken, waarna de video naar IPFS wordt opgeslagen. Het is ook mogelijk om de assemblage te onderbreken (`PAUZE`) om later terug te keren of het proces volledig te stoppen (`STOP`).

6. Wanneer alle assemblagefasen zijn voltooid, verschijnt de knop `VOLTOOIEN`, waarna Feecc voorstelt om het certificaat van het apparaat op te slaan. Voordat u dit doet, opent u echter de [lokale Robonomics-node](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) in uw browser, u heeft het later nodig. Ga daarna terug naar Feecc en klik op `PASPOORT OPSLAAN`.
    
    U ziet nieuwe meldingen in de hoek van het scherm: melding dat het certificaat is geüpload naar Robonomics en IPFS, evenals twee blauwe berichten over het afdrukken van het zegel en de QR-code die leidt naar het certificaat.

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. Onder de sectie `Chain info` op het scherm van de lokale Robonomics-node, zou u een nieuw evenement `datalog.NewRecord` moeten zien onder de kolom `recente gebeurtenissen`. Als u het uitvouwt, wordt de IPFS CID die overeenkomt met het certificaatbestand van het apparaat getoond in het veld `bytes`.

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

De afgedrukte QR-code bevat een link naar deze CID, waarmee het certificaatbestand in de browser kan worden geopend. Aangezien uw lokale IPFS-node mogelijk niet die vindbaarheid heeft, kunt u het bestand lokaal bereiken met `localhost:8080/ipfs/CID.` De inhoud van het certificaat ziet er ongeveer zo uit:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: 423d3c1b42f6427e80cc881a16e07451
Unit Model Name: Single Device
Total Assembly Time: 0:05:37
Production Stages:
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:38:47
  Finish Time: 26-06-2023 17:40:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:40:30
  Finish Time: 26-06-2023 17:42:06
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:42:16
  Finish Time: 26-06-2023 17:43:00
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Saw Through the Single Device
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:00
  Finish Time: 26-06-2023 17:43:51
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:51
  Finish Time: 26-06-2023 17:44:36
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
</LessonCodeWrapper>

8. Laten we nu proberen een certificaat te maken voor een samengestelde assemblage bestaande uit meerdere apparaten. In het type selectiemenu, klik op `COMPOSITE DEVICE`, en vervolgens `SAMPLE DEVICE`. Kopieer de eenheids-ID ervan (te vinden in het veld Compositienummer), want u heeft het later nodig. Ga vervolgens verder met de standaard stappen voor het assembleren van het apparaat.

9. Na de assemblage, ga terug naar `COMPOSITE DEVICE` en druk op `FINALE ASSEMBLAGE` om de samengestelde assemblage te voltooien. Het systeem zal u vragen om de eenheids-ID van de geassembleerde apparaten te verstrekken, waarvoor de medewerker hun barcode moet scannen. Om dit proces te simuleren, ga terug naar `hid-emulator.py` en selecteer functie `2` voor het scannen van de barcode, en voer daar de opgeslagen eenheids-ID in.

10. Vervolgens zal het systeem u vragen om de noodzakelijke stappen van de samengestelde assemblage door te lopen en een certificaat ervoor te genereren:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: d08101feae7c4efbb5529885c9ad544b
Unit Model Name: Composite Device
Total Assembly Time: 0:00:03
Production Stages:
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:25
  Finish Time: 26-06-2023 18:18:26
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Tape the Sample Device to the base plate
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:26
  Finish Time: 26-06-2023 18:18:27
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:27
  Finish Time: 26-06-2023 18:18:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
Unit Components:
- Unit Unique Code: b165b382c3674127a6aaf5817c5a7040
  Unit Model Name: Sample Device
  Total Assembly Time: 0:00:03
  Production Stages:
  - Name: Prepare Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:45
    Finish Time: 26-06-2023 18:17:46
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Assemble Sample Device
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:46
    Finish Time: 26-06-2023 18:17:47
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Stack Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:47
    Finish Time: 26-06-2023 18:17:48
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
Total Assembly Time (Including Components): 0:00:06
</LessonCodeWrapper>

11. Om de demo te verwijderen, voert u het commando in:

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
In de volgende les zullen we doorgaan met de daadwerkelijke implementatie van alle noodzakelijke componenten van het Feecc-systeem.
</RoboAcademyText>