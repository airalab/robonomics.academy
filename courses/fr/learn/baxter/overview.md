---
title: Contrôler le robot Baxter
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: Contrôler le robot Baxter
metaOptions: [Apprendre]
defaultName: Control Baxter robot
---
Exemple de fonctionnement :

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## Exigences:

<List>

<li class="flex">

ROS Mélodique + Gazebo (manuel d'installation [ici][db2])  

</li>

<li>paquets supplémentaires:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effout-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS jusqu'à 0.6.0 (télécharger depuis [ici][db3] et installer)

</li>

<li> paquets python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Télécharger le dernier [release][db4] de Robonomics node ici (dernière version testée v1.1)

</li>

<li>Extension du navigateur IPFS (non nécessaire)</li>

</List>

<br/>

## 0. installer l'extension CV Bridge pour python3

<List>

<li> Créer un espace de travail catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Instruire catkin pour définir les variables cmake. Utilisez votre version actuelle de `python`. Pour moi, c'est `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Cloner cv_bridge src:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Trouver la version de cv_bridge dans votre dépôt:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Vérifier la bonne version dans le dépôt git. Dans notre cas, c'est 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Construire:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Étendre l'environnement avec le nouveau package:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Tester:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

## 1. Télécharger les packages de simulation et de contrôleur
Télécharger les packages:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
git checkout old_version
pip3 install -r requirements.txt
cd ../..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

N'oubliez pas d'ajouter la commande source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Démarrer la simulation
Commençons par le monde de gazebo et mettons notre baxter dedans:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

Ouvrez une autre fenêtre dans le terminal:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

Vous pouvez mettre quelques modèles devant notre baxter. Ce sera plus intéressant.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Gérer les comptes dans DAPP

Comme nous sommes en phase de test, créons un réseau robonomics local avec le fichier binaire robonomics. Allez dans le dossier avec le fichier robonomics et exécutez:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Allez sur le [portail Robonomics Parachain][db5] et passez au nœud local

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Allez dans Comptes et créez des comptes __Baxter__ et __Employeur__ (le compte __Robot__ n'est pas nécessaire)

__Important!__ Copiez le **mnémonique** et l'**adresse** de chaque compte (pour copier l'adresse, cliquez sur l'icône du compte). Le **mnémonique** est la clé privée du compte.
Transférez de l'argent (unités) sur ces comptes:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Ajoutez le **mnémonique** et l'**adresse** de Baxter à `config.yaml` dans `robot_ws/src/Baxter_simulation_controller/config/`

## 4. Démarrer la simulation

Dans une nouvelle fenêtre, exécutez:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Ouvrez un terminal séparé et lancez le *package de contrôleur*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Maintenant, vous pouvez envoyer une transaction déclenchant le mouvement du Baxter et la collecte de données. Pour ce faire, vous pouvez utiliser le même [portail Robonomics Parachain][db5]. Allez sur **Développeur->Extrinsèques** et sélectionnez le compte employeur de Baxter, l'extrinsèque `launch`, le compte de Baxter comme compte cible et `oui` comme paramètre. Soumettez l'extrinsèque.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Le robot devrait commencer à bouger. Il n'acceptera pas les commandes d'autres comptes ni les commandes avec le paramètre `non`.
Vous devriez voir ce qui suit:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

quand le travail est terminé, allez sur le Portail Robonomics à `Développeur > État de la chaîne`. Choisissez `datalog.datalogItem(AccountId,u64)` dans **requête d'état**. Si vous voulez afficher tous les datalogs, désactivez l'option `inclure` et affichez le message datalog de Baxter en utilisant le bouton "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Maintenant, le hash IPFS de la télémétrie et des photos est enregistré dans la blockchain. Pour voir les données, il suffit de copier le hash et de l'insérer dans la barre de recherche avec l'URL: gateway.ipfs.io/ipfs/<br mettez votre hash ici >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

Cliquez sur __Voir sur la passerelle__ et c'est tout!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Simulation de Baxter v2.0

Exemple de fonctionnement:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## Exigences:

<List>

<li class="flex">


ROS Mélodique + Gazebo (manuel d'installation [ici][db2])  

</li>

<li>paquets supplémentaires:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS jusqu'à 0.6.0 (télécharger depuis [ici][db3] et installer)

</li>

<li> paquets python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Nœud Robonomics (fichier binaire) (télécharger la dernière [version][db4] ici)

</li>

<li class="flex">

Créez des comptes __Baxter__ et __Employeur__ sur le **Portail Robonomics** (vous pouvez trouver un tutoriel "Créer un compte sur le Portail Robonomics" [ici][db8]).
</li>

<li>Extension du navigateur IPFS (non nécessaire)</li>

</List>

<br/>

## 0. installer l'extension CV Bridge pour python3

<List>

<li> Créer un espace de travail catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Instruire catkin pour définir les variables cmake. Utilisez votre version actuelle de `python`. Pour moi, c'est `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Cloner cv_bridge src:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Trouver la version de cv_bridge dans votre dépôt:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Vérifier la bonne version dans le dépôt git. Dans notre cas, c'est 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Construire:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Étendre l'environnement avec le nouveau package:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Tester:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

<br/>

## 1. Télécharger les packages de simulation et de contrôleur
Nous devrons créer 2 espaces de travail - un pour les principaux packages de Baxter et un autre pour le programme de contrôle principal.
Premier espace de travail. C'est le programme de contrôle principal. Il fonctionnera sous python3.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

Deuxième espace de travail. Tous les packages de Baxter seront là. La simulation est très ancienne, donc elle ne peut fonctionner qu'avec python2.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

Ces packages ont été créés pour ROS indigo. Nous devons modifier certains fichiers pour les exécuter sur ROS mélodique.
Nous utiliserons des fichiers de **correctif**.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

Et construisons tous nos packages :  
Construisez d'abord les packages de Baxter

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

Puis retournez au premier espace de travail et construisez-le aussi:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

N'oubliez pas d'ajouter la commande source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Démarrer la simulation
### Commençons notre simulation:
Tout d'abord, allez dans `robot_ws` et copiez et modifiez baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

Trouvez votre adresse IP locale avec la commande:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

Modifiez les valeurs suivantes dans `baxter.sh` :

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- votre_ip - mettez votre adresse IP locale. Voir `ip a`
- ros_version - par exemple "mélodique"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

Exécutez le script shell de baxter avec sim spécifié:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

Vous pouvez mettre quelques modèles devant notre baxter. Ce sera plus intéressant.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Gérer les comptes dans DAPP

Comme nous sommes en phase de test, créons un réseau robonomics local avec le fichier binaire robonomics. Allez dans le dossier avec le fichier robonomics et exécutez:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Allez sur le [portail Robonomics Parachain][db5] et passez au nœud local

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Allez dans Comptes et créez des comptes __Baxter__ et __Employeur__.

Vous pouvez trouver le manuel "Créer un compte sur le Portail Robonomics" [ici][db8]

__Important!__ Copiez le **mnémonique** et l'**adresse** de chaque compte (pour copier l'adresse, cliquez sur l'icône du compte). Le **mnémonique** est la clé privée du compte.

Transférez de l'argent (unités) sur ces comptes:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Ajoutez le **mnémonique** et l'**adresse** de Baxter à `config.yaml` dans `robonomics_ws/src/Baxter_simulation_controller/config/`

## 4. Démarrer la simulation

Dans une nouvelle fenêtre, exécutez:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Ouvrez un terminal séparé et lancez le *package de contrôleur*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Maintenant vous pouvez envoyer une transaction pour déclencher le mouvement de Baxter et la collecte de données. Pour ce faire, vous pouvez utiliser le même portail [Portail Robonomics Parachain][db5]. Allez sur **Développeur->Extrinsèques** et sélectionnez le compte employeur de Baxter, l'extrinsèque `launch`, le compte de Baxter comme compte cible et `yes` comme paramètre. Soumettez l'extrinsèque.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Le robot devrait commencer à bouger. Il n'acceptera pas les commandes d'autres comptes ni les commandes avec le paramètre `non`.
Vous devriez voir ce qui suit:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

Quand le travail est terminé, allez sur le Portail Robonomics à `Développeur > État de la chaîne`. Choisissez `datalog.datalogItem(AccountId,u64)` dans la **requête d'état**. Si vous voulez afficher tous les datalogs, alors désactivez l'option `include` et ajoutez la vue du message datalog de Baxter en utilisant le bouton "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Maintenant, le hachage IPFS de la télémétrie et des photos est enregistré dans la blockchain. Pour voir les données, il suffit de copier le hachage et de l'insérer dans la barre de recherche avec l'URL :  
#### gateway.ipfs.io/ipfs/< mettez votre hachage ici>

C'est tout!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/Installation>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>