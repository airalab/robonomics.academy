---
title: "Implementatie van Engineer Workbench"
description: Deze cursus gaat helemaal over het leren kennen van het Feecc-systeem en al zijn componenten.
metaOptions: [Leren, wennen aan Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In deze les leer je hoe je zelf de benodigde componenten van Feecc Engineer Workbench implementeert.
</RoboAcademyText>

Onder de componenten:

- Werkbank Daemon
- Werkbank Frontend
- IPFS Gateway
- HID Reader Daemon

Alle componenten worden gestart met behulp van [Docker](https://docs.docker.com/engine/install/ubuntu/) en [Docker compose](https://docs.docker.com/compose/), zorg ervoor dat u ze geïnstalleerd.

## Software voorbereiding

1. Feecc-componenten gebruiken de [MongoDB](https://www.mongodb.com/) database om gegevens op te slaan en te benaderen. Voordat je Feecc gebruikt, moet je MongoDB implementeren op een manier die voor jou handig is. Hier zijn enkele implementatieopties: [gebruik van je eigen server](https://www.mongodb.com/try/download/community), [cloud database in Atlas](https://www.mongodb.com/atlas) (gratis), [cloud database in DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (betaald). 
    
    In ieder geval moet je je verbindings-URI naar MongoDB verkrijgen, die je moet invoeren als de waarde van de variabele `MONGODB_URI` voor alle componenten van het systeem.
    
2. Als je wilt profiteren van betrouwbare en transparante opslag van gegevens van je productiesysteem, moet je een account aanmaken op Robonomics. Gebruik hiervoor de instructies die beschikbaar zijn op de volgende link: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    Je moet de seed phrase van het account opslaan, omdat deze later zal worden gebruikt in de variabele `ROBONOMICS_ACCOUNT_SEED`.

## Werkbank voorbereiding

Voordat je begint, sluit je alle benodigde apparatuur aan op de computer of server:

- labelprinter via USB
- RFID / barcodelezers via USB
- IP-camera via PoE-router/netwerkswitch
- monitor met toetsenbord en muis of touchscreen via USB en HDMI/VGA (optioneel)

## Starten van HID Reader Daemon

1. Kloon het repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. Start de daemon:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Starten van Workbench Daemon

1. Kloon de repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. Configureer de daemon naar uw behoeften met behulp van het bestand `docker-compose.yml`. Het bestand bevat verschillende omgevingsvariabelen:

    - MongoDB configuratie;
    - Robonomics configuratie;
    - IPFS configuratie;
    - printer parameters;
    - camera parameters;
    - RFID / barcode lezer parameters.
    
    De volledige lijst met variabelen is beschikbaar in de daemon [repository](https://github.com/Multi-Agent-io/feecc-workbench-daemon). De volgende parameters zijn verplicht:
    
    - `MONGODB_URI`: uw verbindings-URI naar MongoDB;
    - `MONGODB_DB_NAME`: een databasenaam van MongoDB;
    - `WORKBENCH_NUMBER`: werknemer's werkbank nummer.

3. Start de daemon:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Controleer de functionaliteit ervan. Ga naar de browser en open de `http://127.0.0.1:5000/docs` pagina, die documentatie over de REST API-interface van het systeem moet bevatten. Als de pagina niet beschikbaar is, is de server niet correct gestart. Controleer de logs binnen de container op fouten, los ze op en herhaal de build- en run-stappen.

## Starten van IPFS Gateway

1. Kloon de repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. Configureer de microservice voor uw behoeften met behulp van het bestand `docker-compose.yml`. Het bestand bevat omgevingsvariabelen voor verbinding met MongoDB, Robonomics en Pinata. De volledige lijst met variabelen is beschikbaar in de gateway [repository](https://github.com/Multi-Agent-io/feecc-ipfs-gateway).

3. Start de microservice:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Starten van Workbench Frontend

1. Kloon de repository:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. Ga naar de `configs` map en configureer de frontend service voor uw behoeften met behulp van het bestand `config.json`. De volgende parameters zijn bijzonder belangrijk:
    - `socket` — voeg hier het adres van de Workbench Daemon in;
    - `interface_language` — interface taal, beschikbare opties zijn `en` en `ru`;
    - `dev_show_reducers` — inschakelen/uitschakelen van de ontwikkelaarsmodus;
    - `pulling_period` — periode van het ontvangen van gegevens van de backend in milliseconden;

3. Start de frontend-container:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Controleer de functionaliteit ervan. Ga naar de browser en open de pagina `http://localhost:3000`, u zou een autorisatiepagina moeten zien.

<RoboAcademyText fWeight="500">
In de volgende les zullen we de Feecc Analytics service doornemen.
</RoboAcademyText>