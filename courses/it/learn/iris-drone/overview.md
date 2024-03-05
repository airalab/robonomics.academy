---
title: Collegare veicolo aereo senza pilota
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: Collegare veicolo aereo senza pilota
metaOptions: [Imparare]
defaultName: Collegare unmanned aerial vehicle
---

**Il drone inizia a muoversi dopo la transazione e memorizza il file con le coordinate in IPFS. Lo script di controllo si basa sullo script demo di [GAAS](https://github.com/generalized-intelligence/GAAS)**  

https://youtu.be/4CwtGAX1OwM

<br/>

## Requisiti

<List>

<li> dipendenze per il controllo:

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

ROS Melodic + Gazebo [tutorial di installazione](http://wiki.ros.org/melodic/Installazione)
</li>

<li>pacchetti extra:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>Versione IPFS 0.4.22

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

Nodo Robonomics (file binario) (scarica l'ultima versione [qui](https://github.com/airalab/robonomics/releases))
</li>

</List>

<br/>

## Configurazione dell'ambiente

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

Modifica del file `.bashrc`, aggiungendo le seguenti righe in fondo:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## Installazione del pacchetto di controllo
In un nuovo Terminale:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Rete Robonomics

Per creare una rete robonomics locale vai alla cartella con il file binario robonomic e esegui:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

Aggiungi il percorso di robonomic a `config.py`

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

Vai al [portale Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) e passa al nodo locale.

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

Vai su **Account** e crea gli account **DRONE** e **EMPLOYER**. Salva i nomi degli account e le chiavi e il percorso di **robonomics** in `~/catkin_ws/src/drone_sim/src/config.py`. Trasferisci del denaro negli account.

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## Esecuzione della simulazione
Avvia il demone IPFS

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

In un altro terminale avvia la simulazione:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

Aspettando fino a "In attesa di pagamento" 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

Per inviare una transazione esegui in un'altra finestra:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - dove **<drone_address>** e **<employer_key>** dovrebbero essere sostituiti con le stringhe da `config.py` di conseguenza.

Dopo che i dati sono stati inviati a IPFS, vai allo **Stato della catena** nel [portale Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/). Seleziona **datalog** in query e aggiungi il datalog DRONE usando il pulsante `+`.


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

Puoi trovare la telemetria del drone eseguendo `https://gateway.ipfs.io/ipfs/<hash>` inserendo l'hash sopra.

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

È importante rimuovere la directory `db` prima dei prossimi lanci usando  
` rm -rf ~/.local/share/robonomics/chains/dev/db`