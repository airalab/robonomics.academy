---
title: Verbind Mars Curiosity Rover
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: Verbind Mars Curiosity rover onder Robonomics parachain controle.
metaOptions: [Leren]
defaultName: Verbinden Mars Curiosity Rover
---

**Laten we eens kijken hoe Robonomics Parachain controle het mogelijk maakt om Mars Curiosity rover te laten bewegen. Vereisten:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (installatiehandleiding [hier](http://wiki.ros.org/melodic/Installatie))

</li>


<li>extra pakketten:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS tot [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[IPFS Companion-extensie](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Robonomics node (binair bestand) (download de nieuwste release [hier](https://github.com/airalab/robonomics/releases). Deze tutorial is getest op v1.1)

</li>

</List>

<br/>

Hier is de video die een succesvolle lancering laat zien:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. Stel een simulatie in

Download Curiosity rover pakket:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

We moeten de startcondities aanpassen om onze rover soepel te laten spawnen:

<List>

<li>Ga naar

`src/master/curiosity_mars_rover_description/worlds` en wijzig regel 14 van het bestand` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>Ga naar

`src/master/curiosity_mars_rover_description/launch` en verander regel 4 van het bestand `mars_curiosity_world.launch` naar 
`<arg name="paused" default="false"/>`

Vergeet niet de bronopdracht toe te voegen aan `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> Herstart de console en start de simulatie:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

Opmerking: als de afbeelding donker is, bijv. in de schaduw, verander `Camera` in `Orthorgraphic` in de Gazebo-werkbalk.
De simulatie kan even worden gesloten.

------------

<br/>

### 2. Download Robonomics controller pakket
Om een controller pakket voor Rover te downloaden, typ in de terminal:

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

### 3. Beheer accounts in DAPP
Aangezien we aan het testen zijn, laten we een lokale robonomics netwerk maken met het robonomics binair bestand:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="Voer uitning node"/>


Ga naar [Robonomics Parachain-portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) en schakel over naar de lokale node 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


Ga naar Accounts en maak **CURIOSITY** en **WERKGEVER** accounts aan.

**Belangrijk**! Kopieer het adres van elk account (om het adres te kopiëren, klik op het pictogram van het account) en de **mnemonische seed** van het Curiosity-account (verkregen bij het aanmaken van het account)
Verplaats wat geld (eenheden) naar deze accounts. U kunt meer lezen over accounts in Robonomics [hier](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


Voeg deze adressen, seed en node-adres (standaard naar `ws://127.0.0.1:9944` voor ontwikkelaarsnode) toe in `config.config` in `robonomics_ws/src/robonomics_sample_controller/src`. Geen aanhalingstekens.

------------

<br/>

### 4. Start Robonomics

Voordat u verder gaat, zorg ervoor dat u de [IPFS Companion Extension](https://github.com/ipfs/ipfs-companion) heeft geïnstalleerd.

Start IPFS in een aparte terminal:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #dit hoeft u slechts één keer per IPFS-installatie te doen
ipfs daemon
</LessonCodeWrapper>

Start in een andere aparte terminal de Curiosity-simulatie als deze niet actief is:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

Wacht tot hij stil blijft staan

Start in een andere terminal de controller:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

Nu kunt u een transactie verzenden om de Rover te laten bewegen en gegevens te laten verzamelen. Hiervoor kunt u dezelfde [Robonomics Parachain portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) gebruiken.
Ga naar `Developer->Extrinsics` en selecteer het werkgeversaccount van Curiosity, `launch` extrinsiek, Curiosity's account als doelaccount en `ja` als parameter.
Dien de extrinsieke in.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

De robot zou moeten beginnen met bewegen. Hij zal geen commando's accepteren van andere accounts of commando's met de parameter `nee`. De rover zal ongeveer een minuut rondrijden en gegevens verzamelen.
Later, wanneer de taak is voltooid:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


Ga op de Robonomics-portal naar `Developer -> Chain state` en verkrijg een `CURIOSITY` datalog met de “+” knop met geselecteerde `datalog -> RingBufferItem` als query: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


Nu is de IPFS-hash van de telemetrie opgeslagen in de blockchain. Om de gegevens te zien, kopieert u eenvoudig de hash en zoekt u deze op een gateway:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


Deze telemetrie wordt bewaard in een gedecentraliseerde opslag, en de hash ervan is opgeslagen in een blockchain!
