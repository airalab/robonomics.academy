---
title: "Leçon n°5, Options de configuration de connectivité des capteurs"
description: 'OPTIONS DE CONFIGURATION DE CONNECTIVITÉ DES CAPTEURS'
lessonNumber: 5
metaOptions: [Apprendre, Connectezezivité des capteurs et réseau de capteurs décentralisé]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Pour l'instant, seul le capteur SDS011 est pris en charge prêt à l'emploi, mais il est assez facile d'ajouter d'autres capteurs et nous avons préparé quelques configurations prêtes à l'emploi. Une vue d'ensemble complète des champs de configuration est disponible [ici](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config). Ensuite, nous examinerons plusieurs scénarios de configurations avancées.

## Scénario n°1 : Connecter le SDS011 au port série

La manière la plus simple et la plus directe de connecter votre capteur au réseau est d'utiliser le port série. 

<List type="numbers">

<li>

Connectez votre carte à un port USB et trouvez le chemin d'accès. Dans cet exemple, il s'agit de `tyUSB0`


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

Créez un nouveau fichier de configuration ou modifiez-en un existant avec ce qui suit. N'oubliez pas d'insérer le chemin de votre base de données dans le champ `db_path`, le chemin de la carte dans le champ `port` et la latitude / longitude d'un capteur dans le champ `geo`.

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation":{
      "enable":true,
      "port":"/dev/<YOUR/PATH/TO/BOARD>",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": false,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>Démarrer le module de connectivité des capteurs.</li>

</List>


## Scénario n°2 : Connecter le SDS011 via MQTT

<RoboAcademyNote type="okay" title="INFO">Le firmware des capteurs Robonomics ne fonctionne pas avec MQTT. Ces paramètres sont pour des capteurs supplémentaires, qui fonctionnent via MQTT.
</RoboAcademyNote>

<List type="numbers">

<li>

Installez et configurez un courtier MQTT (comme [Mosquitto](https://mosquitto.org/) ou similaire).

</li>

<li>

Créez un nouveau fichier de configuration ou modifiez-en un existant avec ce qui suit. Insérez :

- le chemin de votre base de données dans le champ `db_path`

- un chemin de carte dans le champ `port` dans la section `comstation`

- une latitude / longitude d'un capteur dans le champ `geo`

- un hôte de courtier MQTT dans le champ `host` dans la section `mqttstation`

- un port de courtier MQTT dans le champ `port` dans la section `mqttstation`

- un sujet où vos capteurs envoient des données dans le champ `topic`

- `nom d'utilisateur` et `mot de passe` pour se connecter au courtier si nécessaire.


<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation":{
      "enable":false,
      "port":"/dev/<YOUR/PATH/TO/BOARD>",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": false,
      "port": 8001
   },
   "mqttstation": {
      "enable": true,
      "host": "[YOUR_MQTT_BROKER_HOST]",
      "port": "[YOUR_MQTT_BROKER_PORT]",
      "topic": "[MQTT_TOPIC_OF_SENSORS]",
      "username": "YOUR_MQTT_USERNAME",
      "password": "YOUR_MQTT_PASSWORD"
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>Démarrer le module de connectivité des capteurs.</li>

</List>

## Scénario n°3 : Publier les données des capteurs avec Robonomics Datalog

Ce scénario montre comment télécharger les données de vos capteurs sur la parachain Robonomics avec la fonction datalog. Datalog est l'équivalent de la télémétrie dans les technologies web3. La fonction est destinée à créer un instantané des données des capteurs à chaque période de temps, ce qui augmente la fiabilité des données. Peu importe comment les données sont collectées : via HTTP, MQTT ou COM.

<RoboAcademyNote type="warning" title="WARNING">Vous devez avoir des jetons XRT sur votre compte
</RoboAcademyNote>

<List type="numbers">

<li>

Créez un nouveau fichier de configuration ou modifiez-en un existant avec ce qui suit. Insérez :

- le chemin de votre base de données dans le champ `db_path`

- un chemin de carte dans le champ `port` dans la section `comstation`

- une latitude / longitude d'un capteur dans le champ `geo`

- une clé privée du compte de la parachain Robonomics dans le champ `suri`

- une période de temps pour collecter le journal en secondes dans le champ `dump_interval`

- (facultatif) informations d'identification pour télécharger des fichiers sur [Temporal.Cloud](http://Temporal.Cloud) dans les champs `temporal_username`, `temporal_password`

- (facultatif) informations d'identification pour télécharger des fichiers sur Pinata dans les champs `pinata_api`, `pinata_secret`

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "[YOUR/PATH/TO/DATABASE]"
   },
   "comstation":{
      "enable":false,
      "port":"/dev/[YOUR/PATH/TO/BOARD]",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": true,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": true,
      "suri": "[YOUR_PRIVATE_KEY]",
      "dump_interval": TIME_PERIOD,
      "temporal_username": "YOUR_TEMPORAL_USERNAME",
      "temporal_password": "YOUR_TEMPORAL_PASSWORD",
      "pinata_api": "YOUR_PINATA_API_KEY",
      "pinata_secret": "YOUR_PINATA_SECRET"
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": true,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>Démarrez le module de connectivité des capteurs.</li>

</List>