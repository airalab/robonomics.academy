---
title: "Les #7, Robonomics-sensoren meten analyses en archiveren knooppunt"
description: 'ROBONOMICS SENSOREN METEN ANALYTICA EN ARCHIVEREN NODE'
lessonNumber: 7
metaOptions: [Leer, Sensoren Verbindeniviteit & Gedecentraliseerd Sensoren Netwerk]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Robonomics Sensors Meet Analytics en Archive Node of RoSeMAN is een service voor het verzamelen van sensordata om de meetgeschiedenis weer te geven. In dit artikel zul je de service instellen.

## Vereisten

RoSeMAN vereist [MongoDB](https://www.mongodb.com/docs/manual/introduction/) databaseserver, ervan wordt uitgegaan dat je deze al hebt. Ook moet je de datalog-optie inschakelen voor de Sensors Connectivity-module, zoals getoond in Scenario #3. Je moet gratis XRT-tokens hebben op je Robonomics-account, dat is verbonden met de Sensors Connectivity-module. 


## Installatie

<List type="numbers">

<li>

Repository downloaden:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

Configuratiebestanden maken:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Open het `config.json`-bestand en bewerk het databasepad:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

Voeg het openbare adres van je account toe aan het `agents.json`-bestand. Je kunt meerdere adressen aan het bestand toevoegen als je gegevens wilt verzamelen van verschillende Sensors Connectivity-modules.

</li>


<li>

Afhankelijkheden installeren en server bouwen:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

Start RoSeMAN-server:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

De webserver moet starten op `http://127.0.0.1:3000`.

</li>

</List>

## Na installatie

Na implementatie van RoSeMAN op een server moet je het openbare IP-adres of de URL van de server krijgen. Als alternatief, als je RoSeMAN en de sensorkaart op dezelfde server uitvoert, kun je het lokale IP-adres gebruiken.

Vervolgens moet je het configuratiebestand van de sensorkaart openen en je URL invoegen in het `config.json`-bestand in het veld `REMOTE_PROVIDER`


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

Herbouw de kaart met `yarn build` en start deze opnieuw; je zult de meetgeschiedenis kunnen zien.