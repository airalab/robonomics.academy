---
title: "Déploiement de l'analytique"
description: Ce cours consiste à découvrir le système Feecc et tous ses composants.
metaOptions: [Apprendre, s'habituer à Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
Dans cette leçon, vous apprendrez comment déployer les composants de l'analytique Feecc.
</RoboAcademyText>

## Lancement de l'analytique Backend

1. Cloner le dépôt:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. Configurer le service backend selon vos besoins en utilisant le fichier `.env` :
    - `MONGO_CONNECTION_URL` — votre URI de connexion à MongoDB;
    - `MONGO_DATABASE_NAME` — un nom de base de données MongoDB;
    - `SECRET_KEY` — clé secrète pour le hachage et le déhachage;
    - `IPFS_GATEWAY_HOST` — URL de la passerelle IPFS;
    - `USE_DATALOG` — envoi des données d'analytique à Robonomics (`true` ou `false`);
    - `ROBONOMICS_SEED` — phrase de départ pour le compte Robonomics.

3. Lancer le conteneur backend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Vérifiez sa fonctionnalité. Allez dans le navigateur et ouvrez la page `http://localhost:5002/docs`. Si tout est fait correctement, vous verrez une page (générée par Swagger) avec tous les points d'extrémité de l'API REST de l'analytique Feecc. Maintenant, vous êtes prêt à lancer le frontend.

## Lancement de l'analytique Frontend

1. Clonez le référentiel :

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. Allez dans `src` et configurez le service frontend selon vos besoins en utilisant le fichier `config.json`. Assurez-vous d'entrer l'URL du Backend de l'analytique Feecc dans le paramètre `base_url` (sous la forme de `xx.xx.xx.xx:port`).

3. Lancer le conteneur frontend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Vérifiez sa fonctionnalité. Allez dans le navigateur et ouvrez la page `http://localhost:8081/docs`.

<RoboAcademyText fWeight="500">
Sur ce, la connaissance du système Feecc peut être considérée comme complète. Si vous avez des questions supplémentaires, vous pouvez contacter les développeurs chez Multi-Agent Systems (multi-agent.io) ou laisser un problème sur leur GitHub (github.com/Multi-Agent-io).
</RoboAcademyText>