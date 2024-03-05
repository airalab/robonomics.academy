---
title: "Leçon n°7, les capteurs Robonomics mesurent les analyses et archivent les nœuds"
description: 'ROBONOMICS CAPTEURS MESURE ANALYTIQUE ET ARCHIVE NOEUD'
lessonNumber: 7
metaOptions: [Apprendre, Connectezezivité des capteurs et réseau de capteurs décentralisé]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Les capteurs Robonomics mesurent les analyses et archivent les nœuds ou RoSeMAN est un service d'accumulation de données de capteurs pour montrer l'historique des mesures. Dans cet article, vous allez configurer le service.

## Exigences

RoSeMAN nécessite un serveur de base de données [MongoDB](https://www.mongodb.com/docs/manual/introduction/), il est supposé que vous l'avez déjà. De plus, vous devez activer l'option datalog pour le module de connectivité des capteurs, comme indiqué dans le scénario n°3. Vous devez avoir des jetons XRT gratuits sur votre compte Robonomics, qui est connecté au module de connectivité des capteurs. 


## Configuration

<List type="numbers">

<li>

Téléchargez le dépôt :

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

Créez des fichiers de configuration :

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Ouvrez le fichier `config.json` et modifiez le chemin de la base de données :

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

Ajoutez l'adresse publique de votre compte au fichier `agents.json`. Vous pouvez ajouter plusieurs adresses au fichier, si vous souhaitez collecter des données à partir de différents modules de connectivité des capteurs.

</li>


<li>

Installez les dépendances et construisez le serveur :

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

Démarrez le serveur RoSeMAN :

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

Le serveur Web devrait se lancer à l'adresse `http://127.0.0.1:3000`.

</li>

</List>

## Post-installation

Après le déploiement de RoSeMAN sur un serveur, vous devez obtenir l'adresse IP publique ou l'URL du serveur. Alternativement, si vous exécutez RoSeMAN et la carte des capteurs sur le même serveur, vous pouvez utiliser l'adresse IP locale.

Ensuite, vous devez ouvrir le fichier de configuration de la carte des capteurs et insérer votre URL dans le fichier `config.json` dans le champ `REMOTE_PROVIDER` :


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

Reconstruisez la carte avec `yarn build` et redémarrez-la ; vous pourrez voir l'historique des mesures.