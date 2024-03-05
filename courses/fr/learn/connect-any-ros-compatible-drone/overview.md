---
title: Connectezezezezez un drone compatible ROS
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: Connectez n'importe quel robot compatible ros sous le contrôle de la parachain robonomics.
metaOptions: [Apprendre]
defaultName: Connectez un drone compatible ROS
---


## Partie 1. Lancement par transaction

**Dans cet article, nous montrerons qu'avec l'aide des outils Robonomics, vous pouvez contrôler n'importe quel appareil compatible ROS. Nous trouverons un package de simulation de drone aléatoire sur le web et l'ajusterons pour fonctionner avec Robonomics.**
**Exigences:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (manuel d'installation [ici](http://wiki.ros.org/melodic/Installation))

</li>

<li class="flex">

Nœud Robonomics (fichier binaire) (téléchargez la dernière version [ici](https://github.com/airalab/robonomics/releases))

</li>

</List>

<br/>

L'ensemble du processus de codage de cette partie de la démo est présenté dans une vidéo ci-dessous.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. Trouver une simulation
Surfons sur le web. Recherchez `simulateur de drone ROS`. Le premier lien vous montrera probablement la page `tum_simulator` sur [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

C'est assez obsolète, donc nous ferions mieux de trouver une version adaptée à notre système. Recherchez `tum_simulator Ubuntu 18 Gazebo 9 fork`. Le premier résultat est un dépôt GitHub [repo](https://github.com/tahsinkose/sjtu-drone) avec un package approprié. Téléchargez-le

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

N'oubliez pas d'ajouter la commande source à `~/.bashrc`:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

Maintenant nous pouvons exécuter la simulation pour voir ce que nous devons faire pour prendre le drone sous le contrôle de la parachain.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. Inspecter les sujets ROS
Lorsque la simulation est en cours d'exécution, dans un nouvel onglet, exécutez la commande suivante pour voir la liste des sujets utilisés par le drone:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

Jetons un coup d'œil à `/cmd_vel`, `/drone/takeoff` et `/drone/land`:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

Comme on peut le voir, il devrait y avoir des messages de types `Twist` et `Empty`, ils font partie de `std_msgs` et `geometry_msgs`, nous utiliserons cela dans le contrôleur. Arrêtez la simulation un moment.

## 3. Télécharger le package du contrôleur
En général, la principale différence par rapport au contrôleur de robot ROS classique est un bloc de code, qui vérifie toutes les transactions dans le réseau en utilisant [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/). Le package lui-même est disponible sur GitHub. Téléchargez-le et construisez l'espace de travail:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. Gérer les comptes dans DAPP
Comme nous sommes en phase de test, créons un nœud de réseau robonomics local avec le fichier binaire robonomics:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Important!** Avant les prochains lancements, il est nécessaire de supprimer un répertoire `db` avec

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Après un lancement réussi, créez des comptes en suivant ce [guide](https://wiki.robonomics.network/docs/create-account-in-dapp/). **N'oubliez pas de sauvegarder la graine et l'adresse de chaque compte! Vous en aurez besoin pour les transactions**. Ajoutez ces adresses, graines et le chemin vers le fichier binaire robonomics au fichier `config.config` dans `robonomics_ws/src/robonomics_sample_controller/src`. Transférez de l'argent (unités) sur ces comptes:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. Lancement du drone sous le contrôle de la parachain

Jusqu'à présent, le **seul élément en cours d'exécution** devrait être le nœud local robonomics. Dans un terminal séparé, lancez la simulation de drone:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Exécutez le script:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

Maintenant vous pouvez envoyer une transaction déclenchant le drone pour commencer à voler. Pour ce faire, vous devez utiliser la sous-commande `write` de Robonomics IO du fichier binaire robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Où `<DRONE_ADDRESS>` et `<EMPLOYER’S_KEY>` sont remplacés par les chaînes précédemment sauvegardées respectivement.
Vous devriez voir le journal `"Décollage"` et le drone devrait commencer à voler:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

C'est ainsi que n'importe quel robot compatible ROS peut être contrôlé par la parachain Robonomics.


##  Partie 2. Enregistrement des données sur la blockchain

**Dans cette partie, nous continuerons à utiliser les outils Robonomics pour faire en sorte qu'un drone soit contrôlé par une parachain. Cette fois, nous ajouterons l'envoi de données à IPFS et les options de stockage de hachage dans la chaîne. Ci-dessous se trouvent les instructions et extraits de code. Exigences:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (manuel d'installation [ici](http://wiki.ros.org/melodic/Installation))
</li>

<li class="flex">

IPFS 0.4.22 (téléchargez depuis [ici](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) et installez)
</li>

<li class="flex">

Nœud Robonomics (fichier binaire) (téléchargez la dernière version [ici](https://github.com/airalab/robonomics/releases))
</li>

<li>Dépendances Python:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

L'ensemble du processus de codage de cette partie de la démo est présenté dans une vidéo ci-dessous.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. Ajouter des dépendances
Si nous lançons une simulation et regardons la liste des sujets (voir partie 1), nous verrons qu'il y a un sujet contenant des données de caméra frontale et utilisant le type de message `sensor_msgs/Image`:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

Essayons de prendre une photo toutes les 1 seconde et après le vol publier ces photos sur IPFS. Si vous avez terminé le premier tutoriel, vous n'avez pas besoin de télécharger autre chose. C'est le script `drone_sample_controller_pictures.py`.

## 2. Gérer les comptes dans DAPP
Comme dans un tutoriel précédent, créez un nœud réseau robonomics local avec le fichier binaire robonomics:
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Important!** Avant les prochains lancements, il est nécessaire de supprimer un répertoire `db` avec

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Après un lancement réussi, créez des comptes en suivant ce [guide](https://wiki.robonomics.network/docs/create-account-in-dapp/). **N'oubliez pas de sauvegarder la graine et l'adresse de chaque compte! Vous en aurez besoin pour les transactions**. Ajoutez ces adresses, graines et le chemin vers le fichier binaire robonomics au fichier `config.config` dans `robonomics_ws/src/robonomics_sample_controller/src`. Transférez de l'argent (unités) sur ces comptes:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. Lancer
Jusqu'à présent, le **seul élément en cours d'exécution** devrait être le nœud local robonomics. Dans un terminal séparé, lancez la simulation de drone:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Dans un autre lancer le démon ipfs:
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Exécutez le script:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

Maintenant vous pouvez envoyer une transaction déclenchant le drone pour commencer à voler et prendre des photos. Pour ce faire, vous devez utiliser la sous-commande `write` de Robonomics IO du fichier binaire robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Où `<DRONE_ADDRESS>` et `<EMPLOYER’S_KEY>` sont remplacés par les chaînes précédemment sauvegardées respectivement.
Vous devriez voir le journal `"Décollage"` et le drone devrait commencer à voler et à prendre des photos:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

Plus tard, lorsque le travail est terminé, sur le portail Robonomics allez à `Développeur` -> `État de la chaîne` et ajoutez un datalog `DRONE` en utilisant le bouton `+` avec le datalog sélectionné comme requête d'état. Le hash IPFS de la télémétrie a été enregistré dans la blockchain. Pour voir les données, il suffit de copier le hash et de l'ajouter à l'adresse [gateway](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) locale `localhost:8080/ipfs/`:


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>