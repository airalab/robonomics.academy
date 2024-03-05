---
title: Controlla il robot Baxter
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: Controlla il robot Baxter
metaOptions: [Impara]
defaultName: Control Baxter robot
---
Esempio di come funziona:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## Requisiti:

<List>

<li class="flex">

ROS Melodic + Gazebo (manuale di installazione [qui][db2])  

</li>

<li>pacchetti extra:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effot-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS fino a 0.6.0 (scarica da [qui][db3] e installa)

</li>

<li> pacchetti python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Scarica l'ultimo [rilascio][db4] del nodo Robonomics qui (ultimo rilascio testato v1.1)

</li>

<li>Estensione del browser IPFS (non necessaria)</li>

</List>

<br/>

## 0. installa l'estensione CV Bridge per python3

<List>

<li> Crea lo spazio di lavoro di catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Istruisci catkin a impostare le variabili cmake. Usa la tua versione corrente di `python`. Per me, è `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Clona src di cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Trova la versione di cv_bridge nel tuo repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Controlla la versione corretta nel repo git. Nel nostro caso è 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Costruisci:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Estendi l'ambiente con il nuovo pacchetto:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Test:

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

## 1. Scarica i pacchetti di simulazione e di controllo
Scarica i pacchetti:

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

Non dimenticare di aggiungere il comando source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Avvia la simulazione
Iniziamo il mondo di gazebo e mettiamo il nostro baxter al suo interno:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

Apri un'altra finestra nel terminale:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

Puoi mettere alcuni modelli di fronte al nostro baxter. Sarà più interessante.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Gestisci gli account in DAPP

Poiché stiamo testando, creiamo una rete robonomics locale con il file binario robonomics. Vai alla cartella con il file robonomics e esegui:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Vai al [portale Robonomics Parachain][db5] e passa al nodo locale

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Vai su Account e crea gli account __Baxter__ e __Employer__ (__Robot__ non è necessario)

__Importante!__ Copia il **Mnemonic** e l'**indirizzo** di ciascun account (per copiare l'indirizzo fare clic sull'icona dell'account). **Mnemonic** è la chiave privata dell'account.
Trasferisci qualche denaro (unità) a questi account:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Aggiungi il **Mnemonic** e l'**indirizzo** di Baxter a `config.yaml` in `robot_ws/src/Baxter_simulation_controller/config/`

## 4. Avvia la simulazione

In una nuova finestra esegui:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Apri un terminale separato e avvia il *pacchetto di controllo*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Ora puoi inviare una transazione che avvia il movimento del Baxter e la raccolta di dati. Per farlo, puoi utilizzare lo stesso [portale Robonomics Parachain][db5]. Vai su **Sviluppatore->Estrinseci** e seleziona l'account datore di lavoro di Baxter, l'estrinseco `launch`, l'account di destinazione di Baxter come account di destinazione e `yes` come parametro. Invia l'estrinseco.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Il robot dovrebbe iniziare a muoversi. Non accetterà comandi da altri account né comandi con parametro `no`.
Dovresti vedere quanto segue:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

quando il lavoro è finito vai al Portale Robonomics su `Sviluppatore > Stato della catena`. Scegli `datalog.datalogItem(AccountId,u64)` in **query di stato**. Se vuoi mostrare tutti i datalog, disattiva l'opzione `include` aggiungi visualizza il messaggio datalog di Baxter usando il pulsante "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Ora l'hash IPFS del telemetria e delle foto è salvato nella blockchain. Per vedere i dati basta copiare l'hash e inserirlo nella barra degli indirizzi con URL: gateway.ipfs.io/ipfs/<br inserisci qui il tuo hash >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

Clicca su __Visualizza sul Gateway__ e questo è tutto!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Simulazione di Baxter v2.0

Esempio di come funziona:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## Requisiti:

<List>

<li class="flex">


ROS Melodic + Gazebo (manuale di installazione [qui][db2])  

</li>

<li>pacchetti extra:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS fino a 0.6.0 (scarica da [qui][db3] e installa)

</li>

<li> pacchetti python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Nodo Robonomics (file binario) (scarica l'ultimo [rilascio][db4] qui)

</li>

<li class="flex">

Crea gli account __Baxter__ e __Employer__ sul **Portale Robonomics** (puoi trovare il tutorial "Crea un Account sul Portale Robonomics" [qui][db8]).
</li>

<li>Estensione del browser IPFS (non necessaria)</li>

</List>

<br/>

## 0. installa l'estensione CV Bridge per python3

<List>

<li> Crea lo spazio di lavoro di catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Istruisci catkin a impostare le variabili cmake. Usa la tua versione corrente di `python`. Per me, è `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Clona src di cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Trova la versione di cv_bridge nel tuo repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Controlla la versione corretta nel repo git. Nel nostro caso è 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Costruisci:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Estendi l'ambiente con il nuovo pacchetto:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Test:

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

## 1. Scarica i pacchetti di simulazione e di controllo
Dovremo creare 2 spazi di lavoro - uno per i pacchetti principali di Baxter e l'altro per il programma di controllo principale.
Primo spazio di lavoro. È il programma di controllo principale. Funzionerà con python3.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

Secondo spazio di lavoro. Ci saranno tutti i pacchetti di Baxter. La simulazione è molto vecchia, quindi potrebbe funzionare solo con python2.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

Questi pacchetti sono stati creati per ROS indigo. Dobbiamo modificare alcuni file per farli funzionare su ROS melodic.
Useremo file **patch**.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

E costruiamo tutti i nostri pacchetti:  
Prima costruisci i pacchetti di Baxter

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

Poi torna al primo spazio di lavoro e costruiscilo anche:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

Non dimenticare di aggiungere il comando source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Avvia la simulazione
### Iniziamo la nostra simulazione:
Prima vai a `robot_ws` e copia ed edita baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

Trova il tuo indirizzo IP locale con il comando:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

Modifica i seguenti valori in `baxter.sh` :

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- your_ip - inserisci il tuo indirizzo IP locale. Vedi `ip a`
- ros_version - ad esempio "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

Esegui lo script shell di baxter con sim specificato:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

Puoi mettere alcuni modelli di fronte al nostro baxter. Sarà più interessante.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Gestisci gli account in DAPP

Poiché stiamo testando, creiamo una rete robonomics locale con il file binario robonomics. Vai alla cartella con il file robonomics e esegui:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Vai al [portale Robonomics Parachain][db5] e passa al nodo locale

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Vai su Account e crea gli account __Baxter__ e __Employer__.

Puoi trovare il manuale "Crea un Account sul Portale Robonomics" [qui][db8]

__Importante!__ Copia il **Mnemonic** e l'**indirizzo** di ciascun account (per copiare l'indirizzo fare clic sull'icona dell'account). **Mnemonic** è la chiave privata dell'account.

Trasferisci qualche denaro (unità) a questi account:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Aggiungi il **mnemonico** e l'**indirizzo** di Baxter a `config.yaml` in `robonomics_ws/src/Baxter_simulation_controller/config/`

## 4. Avvia la simulazione

In una nuova finestra esegui:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Apri un terminale separato e avvia il *pacchetto di controllo*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Ora puoi inviare una transazione che avvia il movimento di Baxter e la raccolta di dati. Per farlo, puoi utilizzare lo stesso portale [portale Robonomics Parachain][db5]. Vai su **Sviluppatore->Estrinsechi** e seleziona l'account datore di lavoro di Baxter, l'estrinseco `launch`, l'account di Baxter come account di destinazione e `yes` come parametro. Invia l'estrinseco.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Il robot dovrebbe iniziare a muoversi. Non accetterà comandi da altri account né comandi con parametro `no`.
Dovresti vedere quanto segue:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

Quando il lavoro è finito vai al Portale Robonomics su `Sviluppatore > Stato della catena`. Scegli `datalog.datalogItem(AccountId,u64)` in **query di stato**. Se vuoi mostrare tutti i datalog, disattiva l'opzione `include` aggiungi visualizza il messaggio datalog di Baxter usando il pulsante "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Ora l'hash IPFS della telemetria e delle foto è salvato nella blockchain. Per visualizzare i dati, basta copiare l'hash e inserirlo nella barra di ricerca con URL:  
#### gateway.ipfs.io/ipfs/< inserisci qui il tuo hash>

E questo è tutto!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/Installazione>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>