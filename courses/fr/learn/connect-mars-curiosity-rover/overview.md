---
title: Connectezezezezez le rover Curiosity de Mars
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: Connectez le rover Curiosity de Mars sous le contrôle du parachain Robonomics.
metaOptions: [Apprendre]
defaultName: Connect Mars Curiosity Rover
---

**Voyons comment le contrôle du parachain Robonomics permet de faire bouger le rover Curiosity de Mars. Exigences:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (manuel d'installation [ici](http://wiki.ros.org/melodic/Installation))

</li>


<li>paquets supplémentaires:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS jusqu'à [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[Extension compagnon IPFS](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Nœud Robonomics (fichier binaire) (téléchargez la dernière version [ici](https://github.com/airalab/robonomics/releases). Ce tutoriel a été testé avec succès sur la version 1.1)

</li>

</List>

<br/>

Voici la vidéo montrant le lancement réussi:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. Mettre en place une simulation

Télécharger le package du rover Curiosity:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

Nous devons ajuster les conditions de départ pour que notre rover apparaisse en douceur:

<List>

<li>Allez sur

`src/master/curiosity_mars_rover_description/worlds` et change la ligne 14 du fichier` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>Allez sur

`src/master/curiosity_mars_rover_description/launch` et changez la ligne 4 du fichier `mars_curiosity_world.launch` en 
`<arg name="paused" default="false"/>`

N'oubliez pas d'ajouter la commande source à `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> Redémarrez la console et lancez la simulation :

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

Remarque : si l'image est sombre, par exemple ombrée, changez `Camera` en `Orthorgraphic` dans la barre d'outils de Gazebo.
La simulation peut être fermée pendant un certain temps.

------------

<br/>

### 2. Téléchargez le package du contrôleur Robonomics
Pour télécharger un package de contrôleur pour Rover, saisissez dans le terminal :

<LessonCodeWrapper language="bash" codeClass="long-code">
cd ~/robonomics_ws/src
git clone https://github.com/PaTara43/robonomics_sample_controller
cd robonomics_sample_controller
pip3 install -r requirements.txt
pip3 install rospkg
cd ..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3 # The controller supports python3
</LessonCodeWrapper>


------------

<br/>

### 3. Gérez les comptes dans DAPP
Comme nous sommes en phase de test, créons un réseau robonomics local avec le fichier binaire robonomics :

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="Exécuterning node"/>


Allez sur le [portail Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) et passez au nœud local 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


Allez dans Comptes et créez les comptes **CURIOSITY** et **EMPLOYER**.

**Important** ! Copiez l'adresse de chaque compte (pour copier l'adresse, cliquez sur l'icône du compte) et la **graine mnémonique** du compte Curiosity (obtenue lors de la création du compte)
Transférez de l'argent (unités) sur ces comptes. Vous pouvez en savoir plus sur les comptes Robonomics [ici](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


Ajoutez ces adresses, la graine et l'adresse du nœud (par défaut `ws://127.0.0.1:9944` pour le nœud de développement) dans `config.config` dans `robonomics_ws/src/robonomics_sample_controller/src`. Pas de guillemets.

------------

<br/>

### 4. Démarrez Robonomics

Avant d'aller plus loin, assurez-vous d'avoir installé l'extension [IPFS Companion Extension](https://github.com/ipfs/ipfs-companion).

Dans un terminal séparé, lancez IPFS :

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #vous n'avez besoin de le faire qu'une fois par installation d'IPFS
ipfs daemon
</LessonCodeWrapper>

Dans un autre terminal séparé, lancez la simulation Curiosity si elle n'est pas en direct :
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

Attendez qu'elle reste immobile

Dans un autre terminal, lancez le contrôleur :

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

Maintenant, vous pouvez envoyer une transaction déclenchant le Rover pour commencer à se déplacer et à collecter des données. Pour ce faire, vous pouvez utiliser le même [portail Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/).
Allez dans `Développeur->Extrinsèques` et sélectionnez le compte employeur de Curiosity, l'extrinsèque `launch`, le compte cible de Curiosity et `oui` comme paramètre.
Soumettez l'extrinsèque.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

Le robot devrait commencer à se déplacer. Il n'acceptera pas les commandes d'autres comptes ni les commandes avec le paramètre `non`. Le rover se déplacera et collectera des données pendant environ une minute.
Plus tard, lorsque le travail est terminé :

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


Sur le portail Robonomics, allez dans `Développeur -> État de la chaîne` et obtenez un datalog `CURIOSITY` en utilisant le bouton “+” avec `datalog -> RingBufferItem` sélectionné comme requête : 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


Maintenant, le hash IPFS de la télémétrie est enregistré dans la blockchain. Pour voir les données, il suffit de copier le hash et de le trouver sur une passerelle :

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


Cette télémétrie est conservée dans un stockage décentralisé, et son hash est stocké dans une blockchain !
