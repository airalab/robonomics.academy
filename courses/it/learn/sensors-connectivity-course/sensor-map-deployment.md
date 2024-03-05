---
title: "Lezione n. 6, Distribuzione della mappa dei sensori"
description: 'DISTRIBUZIONE DELLA MAPPA DEI SENSORI'
lessonNumber: 6
metaOptions: [Imparare, Connettività dei sensori e Rete decentralizzata di sensori]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Dopo aver assemblato un sensore e configurato il modulo di connettività dei sensori, è ora di distribuire la mappa dei sensori decentralizzata personale.


## Requisiti & Installazione

<List type="numbers">

<li>

Poiché la mappa dei sensori è alimentata da JavaScript, prima è necessario installare il `node` e il gestore `yarn`:

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

Scarica e costruisci la mappa:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

Esegui la mappa in modalità `development` per testarla

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

Vai all'URL dal terminale, dovresti vedere la mappa dei sensori. Successivamente, interrompilo con `Ctrl+C`.

</li>

</List>

## Configurazione

<List type="numbers">

<li>

Trova il tuo ID IPFS con:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

Vai alla cartella `src` e rinomina i file:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Inserisci il tuo ID IPFS in `agents.json`:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

Apri il file `config.json` e cambia la parte successiva del file di configurazione:

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


Qui devi inserire la latitudine (`lat`) e la longitudine (`lng`) della tua città. Opzionalmente, puoi configurare il [servizio di direzione del vento](https://github.com/danwild/wind-js-server) e fornire l'URL ad esso nel campo `WIND_PROVIDER`.

</li>

</List>


## Costruzione

<List type="numbers">

<li>

Esegui il seguente comando per compilare i file per il rilascio:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

Creerà la directory `dist` con tutti i componenti del sito web statico.

</li>

<li>

Per verificare se tutto è corretto, spostati nella directory `dist` e apri il file `index.html`. Dopo un po' di tempo i dati del sensore dal tuo modulo di connettività dei sensori appariranno sulla mappa.

</li>

</List>

