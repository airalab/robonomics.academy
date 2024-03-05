---
title: Collega il drone compatibile con ROS
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: Collega qualsiasi robot compatibile con ros sotto il controllo della parachain di robonomics.
metaOptions: [Impara]
defaultName: Connect ROS-compatible drone
---


## Parte 1. Lancio tramite transazione

**In questo articolo mostreremo che con l'aiuto degli strumenti Robonomics è possibile controllare qualsiasi dispositivo compatibile con ROS. Troveremo un pacchetto di simulazione di drone casuale sul web e lo adatteremo per funzionare con Robonomics.**
**Requisiti:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (manuale di installazione [qui](http://wiki.ros.org/melodic/Installazione))

</li>

<li class="flex">

Nodo Robonomics (file binario) (scarica l'ultima versione [qui](https://github.com/airalab/robonomics/releases))

</li>

</List>

<br/>

L'intero processo di codifica di questa parte della demo è presentato in un video qui sotto.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. Trova una simulazione
Naviga sul web. Cerca su Google `ROS drone simulator`. Il primo link probabilmente ti mostrerà la pagina `tum_simulator` su [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

È piuttosto datato, quindi è meglio trovare un fork per il nostro sistema. Cerca su Google `tum_simulator Ubuntu 18 Gazebo 9 fork`. Il primo risultato è un GitHub [repo](https://github.com/tahsinkose/sjtu-drone) con un pacchetto appropriato. Scaricalo

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

Non dimenticare di aggiungere il comando di origine a `~/.bashrc`:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

Ora possiamo eseguire la simulazione per vedere cosa dobbiamo fare per prendere il drone sotto il controllo della parachain.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. Ispeziona i topic di ROS
Quando la simulazione è in esecuzione, in una nuova scheda esegui il seguente comando per vedere l'elenco dei topic utilizzati dal drone:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

Diamo un'occhiata a `/cmd_vel`, `/drone/takeoff` e `/drone/land`:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

Come si può vedere, dovrebbero esserci messaggi di tipo `Twist` e `Empty`, fanno parte di `std_msgs` e `geometry_msgs`, li useremo nel controller. Chiudi la simulazione per un po' di tempo.

## 3. Scarica il pacchetto del controller
Globalmente, la principale differenza dal controller di robot ROS casuale è un blocco di codice, che controlla tutte le transazioni nella rete utilizzando [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/). Il pacchetto stesso è disponibile su GitHub. Scaricalo e costruisci lo spazio di lavoro:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. Gestisci gli account in DAPP
Poiché stiamo testando, creiamo un nodo di rete robonomics locale con il file binario robonomics:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Importante!** Prima dei prossimi lanci è necessario rimuovere una directory `db` con

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Dopo un lancio riuscito crea account seguendo il manuale [qui](https://wiki.robonomics.network/docs/create-account-in-dapp/). **Non dimenticare di salvare il seed e l'indirizzo di ciascun account! Ne avrai bisogno per le transazioni**. Aggiungi questi indirizzi, seed e percorso al file `config.config` in `robonomics_ws/src/robonomics_sample_controller/src`. Trasferisci qualche denaro (unità) a questi account:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. Lancio del drone sotto il controllo della parachain

Fino ad ora l'**unica cosa in esecuzione** dovrebbe essere il nodo locale di robonomics. In un terminale separato avvia la simulazione del drone:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Esegui lo script:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

Ora puoi inviare una transazione che fa partire il drone per iniziare a volare. Per farlo, dovresti utilizzare il sottocomando `write` di Robonomics IO del file binario robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Dove `<DRONE_ADDRESS>` e `<EMPLOYER’S_KEY>` vengono sostituiti con le stringhe salvate precedentemente.
Dovresti vedere il log `"Taking Off"` e il drone dovrebbe iniziare a volare:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

Ecco come qualsiasi robot compatibile con ROS può essere controllato dal controllo della parachain di Robonomics.


##  Parte 2. Salvataggio dei dati sulla blockchain

**In questa parte continueremo a utilizzare gli strumenti Robonomics per far sì che un drone sia controllato da una parachain. Questa volta aggiungeremo l'invio dei dati a IPFS e le opzioni di memorizzazione dell'hash nella catena. Di seguito le istruzioni e i frammenti di codice. Requisiti:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (manuale di installazione [qui](http://wiki.ros.org/melodic/Installazione))
</li>

<li class="flex">

IPFS 0.4.22 (scarica da [qui](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) e installa)
</li>

<li class="flex">

Nodo Robonomics (file binario) (scarica l'ultima versione [qui](https://github.com/airalab/robonomics/releases))
</li>

<li>Dipendenze Python:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

L'intero processo di codifica di questa parte della demo è presentato in un video qui sotto.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. Aggiungi dipendenze
Se avviamo una simulazione e guardiamo l'elenco dei topic (vedi parte 1), vedremo che c'è un topic che contiene i dati della fotocamera frontale e utilizza il tipo di messaggio `sensor_msgs/Image`:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

Proviamo a fare una foto ogni 1 secondo e dopo il volo pubblichiamo queste foto su IPFS. Se hai completato il primo tutorial, non è necessario scaricare altro. È lo script `drone_sample_controller_pictures.py`.

## 2. Gestire account in DAPP
Come fatto in un tutorial precedente, crea un nodo di rete robonomics locale con il file binario robonomics:
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Importante!** Prima dei prossimi lanci è necessario rimuovere una directory `db` con

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Dopo un lancio riuscito crea account seguendo il manuale [qui](https://wiki.robonomics.network/docs/create-account-in-dapp/). **Non dimenticare di salvare il seed e l'indirizzo di ciascun account! Ne avrai bisogno per le transazioni**. Aggiungi questi indirizzi, seed e percorso al file `config.config` in `robonomics_ws/src/robonomics_sample_controller/src`. Trasferisci qualche denaro (unità) a questi account:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. Lancio
Fino ad ora l'**unica cosa in esecuzione** dovrebbe essere il nodo locale di robonomics. In un terminale separato avvia la simulazione del drone:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

In un altro lancio del demone ipfs:
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Esegui lo script:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

Ora puoi inviare una transazione che avvia il drone a volare e fare foto. Per farlo, dovresti utilizzare il sottocomando `write` di Robonomics IO del file binario robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Dove `<DRONE_ADDRESS>` e `<EMPLOYER’S_KEY>` vengono sostituiti con le stringhe salvate precedentemente.
Dovresti vedere il log `"Decollo"` e il drone dovrebbe iniziare a volare e fare foto:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

Successivamente, quando il lavoro è completato, sul portale Robonomics vai su `Sviluppatore` -> `Stato della catena` e aggiungi un datalog `DRONE` utilizzando il pulsante `“+”` con il datalog selezionato come query di stato. L'hash IPFS del telemetria è stato salvato nella blockchain. Per vedere i dati, basta copiare l'hash e aggiungerlo all'indirizzo [gateway](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) locale `localhost:8080/ipfs/`:


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>