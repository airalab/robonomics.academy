---
title: Connectezer un véhicule aérien sans pilote
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: Connecter un véhicule aérien sans pilote
metaOptions: [Apprendre]
defaultName: Connect unmanned aerial vehicle
---

**Le drone commence à se déplacer après la transaction et stocke le fichier avec les coordonnées dans IPFS. Le script de contrôle est basé sur le [script de démonstration GAAS](https://github.com/generalized-intelligence/GAAS)**  

https://youtu.be/4CwtGAX1OwM

<br/>

## Exigences

<List>

<li> Dépendances pour le contrôle:

<LessonCodeWrapper language="bash">
sudo apt install -y \
	python3-pip \
	ninja-build \
	exiftool \
	python-argparse \
	python-empy \
	python-toml \
	python-numpy \
	python-yaml \
	python-dev \
	python-pip \
	ninja-build \
	protobuf-compiler \
	libeigen3-dev \
	genromfs
</LessonCodeWrapper>

<LessonCodeWrapper language="bash">
pip3 install \
	pandas \
	jinja2 \
	pyserial \
	cerberus \
	pyulog \
	numpy \
	toml \
	pyquaternion
</LessonCodeWrapper>

</li>

<li class="flex">

ROS Melodic + Gazebo [tutorial d'installation](http://wiki.ros.org/melodic/Installation)
</li>

<li>paquets supplémentaires:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>Version IPFS 0.4.22

<LessonCodeWrapper language="bash" codeClass="big-code">
wget https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-amd64.tar.gz
tar -xvzf go-ipfs_v0.4.22_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash" codeClass="big-code">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li class="flex">

Nœud Robonomics (fichier binaire) (téléchargez la dernière version [ici](https://github.com/airalab/robonomics/releases))
</li>

</List>

<br/>

## Configuration de l'environnement

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-mavros ros-melodic-mavros-extras
wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh
sudo ./install_geographiclib_datasets.sh
cd ~/catkin_ws/src
git clone https://github.com/PX4/Firmware.git
cd Firmware
git checkout v1.9.0
bash ./Tools/setup/ubuntu.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/catkin_ws/src
git clone https://github.com/generalized-intelligence/GAAS.git
cp -r ~/catkin_ws/src/GAAS/simulator/models/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/models/
cp -r ~/catkin_ws/src/GAAS/simulator/worlds/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/worlds/
cp -r ~/catkin_ws/src/GAAS/simulator/posix-config/* ~/catkin_ws/src/Firmware/posix-configs/SITL/init/ekf2/
</LessonCodeWrapper>

Modification de votre fichier `.bashrc`, en ajoutant les lignes suivantes en bas:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## Installation du package de contrôle
Dans un nouveau terminal:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Réseau Robonomics

Pour créer un réseau robonomics local, allez dans le dossier avec le fichier binaire robonomic et exécutez:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

Ajoutez le chemin de robonomic à `config.py`

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

Allez sur le [portail Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) et passez au nœud local.

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

Allez dans **Comptes** et créez des comptes **DRONE** et **EMPLOYEUR**. Enregistrez les noms des comptes et les clés et le chemin vers **robonomics** dans `~/catkin_ws/src/drone_sim/src/config.py`. Transférez de l'argent dans les comptes.

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## Lancement de la simulation
Lancez le démon IPFS

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

Dans un autre terminal, lancez la simulation:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

Attendre jusqu'à "En attente de paiement" 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

Pour envoyer une transaction, exécutez dans une autre fenêtre:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - où **<drone_address>** et **<employer_key>** doivent être remplacés par les chaînes de `config.py` en conséquence.

Une fois les données envoyées à IPFS, allez dans l'**État de la chaîne** dans le [portail Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/). Sélectionnez **datalog** dans la requête et ajoutez le datalog DRONE en utilisant le bouton `+`.


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

Vous pouvez trouver la télémétrie du drone en exécutant `https://gateway.ipfs.io/ipfs/<hash>` en insérant le hash ci-dessus.

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

Il est important de supprimer le répertoire `db` avant les prochains lancements en utilisant  
` rm -rf ~/.local/share/robonomics/chains/dev/db`