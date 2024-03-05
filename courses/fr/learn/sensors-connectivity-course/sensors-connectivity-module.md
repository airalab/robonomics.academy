---
title: "Leçon n°4, module de connectivité des capteurs"
description: 'MODULE DE CONNECTIVITÉ DES CAPTEURS'
lessonNumber: 4
metaOptions: [Apprendre, Connectezezivité des capteurs et réseau de capteurs décentralisé]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Dans les articles suivants, vous en apprendrez davantage sur le module de connectivité des capteurs. Ensuite, vous pourrez rejoindre l'hébergement de notre réseau de capteurs décentralisé ou créer votre propre carte de capteurs.

## À propos de la connectivité des capteurs

Le réseau de capteurs décentralisé utilise le module Python `sensors-connectivity` ([code source](https://github.com/airalab/sensors-connectivity)). Ce module permet à tout utilisateur de lancer son propre serveur pour recevoir des données des capteurs et les traiter davantage. Pour le moment, les développeurs ont lancé plusieurs de ces serveurs et tout capteur peut leur envoyer des données. Le fait de faire fonctionner plusieurs serveurs évite la perte de données en cas de problème avec l'un d'eux, car les capteurs passeront d'un serveur défaillant à un serveur fonctionnel. Fondamentalement, vous pouvez considérer le module de connectivité des capteurs comme une boîte noire avec une entrée (données du capteur) et de nombreuses sorties.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

Le module de connectivité des capteurs est un ensemble de stations (station_1, station_2 ... station_n), qui reçoivent diverses données, y compris des données des capteurs via le protocole HTTP. Il peut également s'agir de capteurs connectés à l'ordinateur via USB ou tout autre source de données. Les données reçues des stations sont traitées par le module et transmises à des distributeurs (distributeur_1, distributeur_2 ... distributeur_n). Les distributeurs envoient les données traitées à l'utilisateur; dans notre cas, les données sont envoyées au canal IPFS décentralisé. 

Une carte du [Réseau de Capteurs Décentralisé](https://sensors.robonomics.network/#/) est une application décentralisée (dapp) fonctionnant sur l'ordinateur. Elle lit les données du canal IPFS et les affiche sur la carte. Il n'y a pas de connexion directe entre le serveur qui collecte les données des capteurs et la carte que l'utilisateur voit; les données sont transférées entre eux via IPFS pubsub, ce qui réduit la charge sur les serveurs. 

De plus, de temps en temps, un fichier contenant des données pour la dernière période de temps est stocké dans IPFS, et un hachage de ces données est ensuite enregistré sur la blockchain. Comme IPFS est un réseau adressé par contenu, le stockage des données en lui garantit que tout changement de données ne passe pas inaperçu, car l'adresse du fichier nécessaire contient un hachage de son contenu, qui changera avec tout changement de données. La blockchain est utilisée pour transmettre le hachage à l'utilisateur, qui peut l'utiliser pour obtenir les données nécessaires à partir d'IPFS (cela se produit lorsque vous demandez un historique de la carte).

## Configuration du module pour Linux

**Prérequis et Installation**

<List type="numbers">

<li>

Pour construire le module `sensors-connectivity`, le démon IPFS doit être installé avec une version inférieure ou égale à `0.8.x`. En supposant que vous travaillez sous Linux, exécutez ce qui suit (pour la version `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

Installer le package avec les outils de développement `python3-dev` et l'installateur de package pour Python `pip` :

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

Installer le module en tant que package PyPI :

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

Si vous voyez l'avertissement suivant : 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

Exécuter la commande suivante :

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## Configuration

<List type="numbers">

<li>

Créer un répertoire pour le fichier de configuration et le fichier de base de données où vous le souhaitez. Cette base de données enregistrera les hachages IPFS des données des capteurs, l'horodatage et l'état du service :

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
Le nom du fichier de base de données peut être n'importe lequel, mais l'extension doit être <code>.db</code>
</RoboAcademyNote>

</li>


<li>

Créer un fichier de configuration dans le même répertoire :

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

Copiez-collez ce qui suit dans le fichier et insérez le chemin complet vers le fichier de base de données dans le champ db_path. Cette configuration sera suffisante pour obtenir les données des capteurs via HTTP et les envoyer à la carte Robonomics :

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation": {
      "enable": false,
      "port": "/dev/<YOUR/PATH/TO/BOARD>",
      "work_period": 300,
      "geo": "00.000000,00.000000",
      "public_key": ""
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

</List>

## Lancer


<List type="numbers">

<li>

Lancer le démon IPFS :

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

Une fois la configuration définie, exécuter le service avec le chemin vers le fichier de configuration dans un autre terminal :

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

Vous verrez les journaux dans le terminal (ils seront également ajoutés à `~/.logs`). Exemple:

<LessonCodeWrapper codeClass="big-code" language="bash">$ sensors_connectivity test.json
2022-09-02 14:08:48,408 - INFO - Getting data from the stations...
2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...
2022-09-02 14:08:48,411 - INFO - Checking data base...
2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...
2022-09-02 14:09:18,410 - INFO - Getting data from the stations...
2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...
2022-09-02 14:09:48,412 - INFO - Getting data from the stations...
2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...
2022-09-02 14:10:18,413 - INFO - Getting data from the stations...</LessonCodeWrapper>

</li>

</List>

## Post-installation

Pour connecter votre module `sensors-connectivity` à notre Réseau de Capteurs Décentralisé et voir vos données sur la carte, vous devez envoyer votre ID IPFS à [vm@multi-agent.io](mailto:vm@multi-agent.io) ou [ping@airalab.org](mailto:ping@airalab.org). Nous ajouterons votre ID à une liste de contrôle d'accès.

Obtenez votre ID IPFS avec la commande suivante après avoir lancé le démon IPFS :

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>