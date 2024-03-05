---
title: "Déploiement de l'atelier d'ingénierie"
description: Ce cours consiste à découvrir le système Feecc et tous ses composants.
metaOptions: [Apprendre, s'habituer à Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
Dans cette leçon, vous apprendrez à déployer vous-même les composants nécessaires de Feecc Engineer Workbench.
</RoboAcademyText>

Parmi les composants:

- Démon de l'atelier
- Interface de l'atelier
- Passerelle IPFS
- Démon du lecteur HID

Tous les composants sont lancés à l'aide de [Docker](https://docs.docker.com/engine/install/ubuntu/) et [Docker compose](https://docs.docker.com/compose/), assurez-vous d'avoir les installés.

## Préparation du logiciel

1. Les composants de Feecc utilisent la base de données [MongoDB](https://www.mongodb.com/) pour stocker et accéder aux données. Avant d'utiliser Feecc, vous devez déployer MongoDB de la manière qui vous convient. Voici quelques options de déploiement: [en utilisant votre propre serveur](https://www.mongodb.com/try/download/community), [base de données cloud dans Atlas](https://www.mongodb.com/atlas) (gratuit), [base de données cloud dans DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (payant). 
    
    Dans tous les cas, vous devez obtenir votre URI de connexion à MongoDB, que vous devrez entrer en tant que valeur de la variable `MONGODB_URI` pour tous les composants du système.
    
2. Si vous souhaitez profiter d'un stockage fiable et transparent des données de votre système de production, vous devez créer un compte sur Robonomics. Pour ce faire, suivez les instructions disponibles à l'adresse suivante: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    Vous devez enregistrer la phrase de récupération du compte car elle sera utilisée ultérieurement dans la variable `ROBONOMICS_ACCOUNT_SEED`.

## Préparation de l'atelier

Avant de commencer, connectez tout l'équipement nécessaire à l'ordinateur ou au serveur:

- imprimante d'étiquettes via USB
- lecteurs RFID / code-barres via USB
- caméra IP via routeur PoE/commutateur réseau
- écran avec clavier et souris ou écran tactile via USB et HDMI/VGA (en option)

## Lancement du démon du lecteur HID

1. Cloner le dépôt:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. Lancez le démon:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Lancement du démon Workbench

1. Clonez le référentiel :

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. Configurez le démon selon vos besoins en utilisant le fichier `docker-compose.yml`. Le fichier contient diverses variables d'environnement:

    - Configuration de MongoDB;
    - Configuration de Robonomics;
    - Configuration d'IPFS;
    - paramètres de l'imprimante;
    - paramètres de la caméra;
    - paramètres des lecteurs RFID / code-barres.
    
    La liste complète des variables est disponible dans le [dépôt](https://github.com/Multi-Agent-io/feecc-workbench-daemon) du démon. Les paramètres suivants sont obligatoires:
    
    - `MONGODB_URI`: votre URI de connexion à MongoDB;
    - `MONGODB_DB_NAME`: un nom de base de données MongoDB;
    - `WORKBENCH_NUMBER`: numéro du poste de travail de l'employé.

3. Lancez le démon:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Vérifiez sa fonctionnalité. Allez dans le navigateur et ouvrez la page `http://127.0.0.1:5000/docs`, qui devrait contenir la documentation sur l'interface API REST du système. Si la page n'est pas disponible, alors le serveur n'est pas démarré correctement. Vérifiez les journaux à l'intérieur du conteneur pour les erreurs, corrigez-les et répétez les étapes de construction et d'exécution.

## Lancement de la passerelle IPFS

1. Clonez le référentiel :

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. Configurez le microservice selon vos besoins en utilisant le fichier `docker-compose.yml`. Le fichier contient des variables d'environnement pour la connexion avec MongoDB, Robonomics et Pinata. La liste complète des variables est disponible dans le [dépôt](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) de la passerelle.

3. Lancez le microservice:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Lancement de l'interface utilisateur de Workbench

1. Clonez le référentiel :

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. Allez dans le répertoire `configs` et configurez le service frontend selon vos besoins en utilisant le fichier `config.json`. Les paramètres suivants sont particulièrement importants:
    - `socket` — insérez l'adresse du démon Workbench ici;
    - `interface_language` — langue de l'interface, options disponibles `en` et `ru`;
    - `dev_show_reducers` — activation/désactivation du mode développeur;
    - `pulling_period` — période de réception des données du backend en millisecondes;

3. Lancer le conteneur frontend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Vérifiez sa fonctionnalité. Allez dans le navigateur et ouvrez la page `http://localhost:3000`, vous devriez voir une page d'autorisation.

<RoboAcademyText fWeight="500">
Dans la prochaine leçon, nous passerons en revue le service d'analyse Feecc.
</RoboAcademyText>