---
title: "Les #6, Sensor kaart implementatie"
description: 'SENSOR KAART IMPLEMENTATIE'
lessonNumber: 6
metaOptions: [Leer, Sensoren Verbindeniviteit & Gedecentraliseerd Sensoren Netwerk]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Na het monteren van een sensor en het instellen van de Sensors Connectivity module is het tijd om een persoonlijke gedecentraliseerde sensor kaart te implementeren.


## Vereisten & Installatie

<List type="numbers">

<li>

Aangezien de sensor kaart wordt aangedreven door JavaScript, moet je eerst de `node` en de `yarn` manager installeren:

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

Download en bouw de kaart:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

Voer de kaart uit in de `ontwikkelingsmodus` om te testen

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

Ga vanaf de terminal naar de URL. Je zou de sensorkaart moeten zien. Stop het daarna met `Ctrl+C`.

</li>

</List>

## Configuratie

<List type="numbers">

<li>

Vind je IPFS ID met:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

Ga naar de `src` map en hernoem de bestanden:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Voeg je IPFS ID toe in `agents.json`:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

Open het `config.json` bestand en verander het volgende deel van het configuratiebestand:

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


Hier moet je de breedtegraad (`lat`) en lengtegraad (`lng`) van je stad invoeren. Optioneel kun je een [windrichting service](https://github.com/danwild/wind-js-server) instellen en de URL ervan opgeven in het `WIND_PROVIDER` veld.

</li>

</List>


## Bouwen

<List type="numbers">

<li>

Voer het volgende commando uit om bestanden te bouwen voor release:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

Het zal een `dist` map aanmaken met alle componenten van de statische website.

</li>

<li>

Om te controleren of alles correct is, ga naar de `dist` map en open het `index.html` bestand. Na enige tijd zullen de gegevens van de sensor van je Sensors Connectivity module op de kaart verschijnen.

</li>

</List>

