---
title: Collega il rover Curiosity di Marte
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: Collega il rover Curiosity di Marte sotto il controllo del parachain Robonomics.
metaOptions: [Impara]
defaultName: Collegare Mars Curiosity Rover
---

**Vediamo come il controllo del parachain Robonomics permette di far muovere il rover Curiosity di Marte. Requisiti:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (manuale di installazione [qui](http://wiki.ros.org/melodic/Installazione))

</li>


<li>pacchetti extra:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS fino a [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[Estensione complementare IPFS](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Nodo Robonomics (file binario) (scarica l'ultima versione [qui](https://github.com/airalab/robonomics/releases). Questo tutorial è stato testato con successo sulla v1.1)

</li>

</List>

<br/>

Ecco il video che mostra il lancio riuscito:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. Configura una simulazione

Scarica il pacchetto del rover Curiosity:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

Dobbiamo regolare le condizioni iniziali per far spawnare il nostro rover senza intoppi:

<List>

<li>Vai su

`src/master/curiosity_mars_rover_description/worlds` e modificare la riga 14 del file` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>Vai su

`src/master/curiosity_mars_rover_description/launch` e cambia la riga 4 del file `mars_curiosity_world.launch` in 
`<arg name="paused" default="false"/>`

Non dimenticare di aggiungere il comando sorgente a `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> Riavvia la console e avvia la simulazione:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

Nota: se l'immagine è scura, ad esempio ombreggiata, cambia `Camera` in `Orthorgraphic` nella barra degli strumenti di Gazebo.
La simulazione può essere chiusa per un po' di tempo.

------------

<br/>

### 2. Scarica il pacchetto del controller Robonomics
Per scaricare un pacchetto del controller per il Rover digita nel terminale:

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

### 3. Gestisci gli account in DAPP
Poiché stiamo testando, creiamo una rete robonomics locale con il file binario robonomics:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="Eseguirening node"/>


Vai al [portale della Parachain di Robonomics](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) e passa al nodo locale 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


Vai su Accounts e crea gli account **CURIOSITY** e **EMPLOYER**.

**Importante**! Copia l'indirizzo di ciascun account (per copiare l'indirizzo clicca sull'icona dell'account) e il **seed mnemonico** dell'account di Curiosity (ottenuto durante la creazione dell'account)
Trasferisci un po' di denaro (unità) a questi account. Puoi leggere di più sugli account in Robonomics [qui](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


Aggiungi questi indirizzi, seed e indirizzo del nodo (impostato di default su `ws://127.0.0.1:9944` per il nodo sviluppatore) in `config.config` in `robonomics_ws/src/robonomics_sample_controller/src`. Senza virgolette.

------------

<br/>

### 4. Avvia Robonomics

Prima di procedere, assicurati di aver installato [IPFS Companion Extension](https://github.com/ipfs/ipfs-companion).

In un terminale separato avvia IPFS:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #devi farlo solo una volta per ogni installazione di IPFS
ipfs daemon
</LessonCodeWrapper>

In un altro terminale separato avvia la simulazione di Curiosity se non è attiva:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

Aspetta finché non rimane ferma

In un altro terminale avvia il controller:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

Ora puoi inviare una transazione che avvia il Rover a muoversi e a raccogliere dati. Per farlo, puoi utilizzare lo stesso [portale del parachain Robonomics](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/).
Vai su `Developer->Extrinsics` e seleziona l'account datore di lavoro di Curiosity, l'estrinseco `launch`, l'account di Curiosity come account di destinazione e `yes` come parametro.
Invia l'estrinseco.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

Il robot dovrebbe iniziare a muoversi. Non accetterà comandi da altri account né comandi con parametro `no`. Il rover si muoverà e raccoglierà dati per circa un minuto.
Successivamente, quando il lavoro è completato:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


Sul portale di Robonomics vai su `Developer -> Chain state` e ottieni un datalog `CURIOSITY` utilizzando il pulsante “+” con `datalog -> RingBufferItem` selezionato come query: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


Ora l'hash IPFS del telemetria è salvato nella blockchain. Per vedere i dati, copia semplicemente l'hash e trovalo su un gateway:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


Questa telemetria è conservata in uno storage decentralizzato e il suo hash è memorizzato in una blockchain!
