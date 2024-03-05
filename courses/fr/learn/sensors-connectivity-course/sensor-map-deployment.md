---
title: "Leçon n°6, Déploiement de la carte des capteurs"
description: 'DÉPLOIEMENT DE LA CARTE DES CAPTEURS'
lessonNumber: 6
metaOptions: [Apprendre, Connectezezivité des capteurs et réseau de capteurs décentralisé]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Après avoir assemblé un capteur et configuré le module de connectivité des capteurs, il est temps de déployer une carte de capteurs décentralisée personnelle.


## Exigences & Installation

<List type="numbers">

<li>

Comme la carte des capteurs est alimentée par JavaScript, vous devez d'abord installer le gestionnaire `node` et `yarn` :

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

Téléchargez et construisez la carte :

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

Exécutez la carte en mode `développement` pour les tests

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

Accédez à l'URL depuis le terminal, vous devriez voir la carte des capteurs. Après cela, arrêtez-le avec `Ctrl+C`.

</li>

</List>

## Configuration

<List type="numbers">

<li>

Trouvez votre ID IPFS avec :

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

Allez dans le dossier `src` et renommez les fichiers :

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Insérez votre ID IPFS dans `agents.json` :

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

Ouvrez le fichier `config.json` et modifiez la partie suivante du fichier de configuration :

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


Vous devez insérer la latitude (`lat`) et la longitude (`lng`) de votre ville. Facultativement, vous pouvez configurer le [service de direction du vent](https://github.com/danwild/wind-js-server) et fournir son URL dans le champ `WIND_PROVIDER`.

</li>

</List>


## Construction

<List type="numbers">

<li>

Exécutez la commande suivante pour construire les fichiers pour la version finale :

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

Cela créera un répertoire `dist` avec tous les composants du site web statique.

</li>

<li>

Pour vérifier si tout est correct, déplacez-vous dans le répertoire `dist` et ouvrez le fichier `index.html`. Après un certain temps, les données du capteur de votre module de connectivité des capteurs apparaîtront sur la carte.

</li>

</List>

