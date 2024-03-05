---
title: Collegare il manipolatore Kuka
description: Collegare il Manipolatore
metaOptions: [Imparare]
defaultName: Collegare Kuka manipulator
---

Il video con un esempio di lavoro può essere trovato qui:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## Requisiti

<List>

<li class="flex">

ROS melodico, Gazebo (istruzioni di installazione [qui](http://wiki.ros.org/melodic/Installazione/Ubuntu))
</li>

<li>Alcuni pacchetti extra

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(scarica da [qui](https://www.npackd.org/p/ipfs/0.4.22) e installa)

<LessonCodeWrapper language="bash" codeClass="big-code">
tar -xvzf go-ipfs_v0.4.22_linux-386.tar.gz
cd go-ipfs/
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>pip3

<LessonCodeWrapper language="bash">
sudo apt-get install python3-pip
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li>substrate-interface

<LessonCodeWrapper language="bash">
pip3 install substrate-interface
</LessonCodeWrapper>

</li>

<li class="flex">

Nodo Robonomics (file binario) (scarica l'ultima versione [qui](https://github.com/airalab/robonomics/releases))

</li>

<li>Estensione del browser IPFS (non necessaria)</li>

</List>

<br/>

***

<br/>

## Installazione
Installare il manipolatore Kuka e i pacchetti di controllo

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## Eseguire il modello di gazebo

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

In una nuova finestra

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## Esecuzione di robonomics
Vai alla cartella con il file robonomics e crea una rete robonomics locale:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

Vai al [portale Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) e passa al nodo locale

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

Quindi vai su Account e crea un account `KUKA`. Salva la chiave mnemonica dell'account, ti servirà in seguito. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

Invia alcune unità al nuovo account da uno dei conti predefiniti.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## Esecuzione di ipfs
Eseguire ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## Esecuzione del pacchetto di controllo
Nella directory di configurazione nel pacchetto di controllo kuka_control è necessario creare un file di configurazione con queste righe, dove `<your_mnemonic>` è il seed mnemonico salvato:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


Ora puoi eseguire lo script di controllo:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## Invio della transazione
Nel [portale Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) vai su `Sviluppatore/Extrinsics`, cambia `estrinseco` in `lancio`. Scegli il tuo account `KUKA` in `robot` e cambia `param` in `Sì`. Poi premi `Invia transazione`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

Nella finestra con il pacchetto di controllo kuka_control vedrai:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

Quindi vai su `Sviluppatore/Chain State` sul portale Robonomics, seleziona `datalog` e `datalogItem((AccountId,u64)): RingBufferItem` nella query e aggiungi il datalog `KUKA` con il pulsante '+':

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

Ora puoi trovare la telemetria del robot in IPFS tramite questo link con il tuo hash `https://gateway.ipfs.io/ipfs/<hash>`.

## Risoluzione dei problemi

Se `catkin_make` non funziona con il messaggio che non riesce a trovare MoveArm.h, prova a rimuovere le ultime quattro righe in CMakeLists.txt nel pacchetto kuka_manipulator_gazebo:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

Fai `catkin_make` senza queste righe, poi ripristinale e fai di nuovo `catkin_make`.