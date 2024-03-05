---
title: Verbind ROS-compatibele drone
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: Verbind elke ros-compatibele robot onder robonomics parachain controle.
metaOptions: [Leren]
defaultName: Connect ROS-compatible drone
---


## Deel 1. Starten via Transactie

**In dit artikel zullen we laten zien dat je met behulp van Robonomics tools elk ROS-compatibel apparaat kunt besturen. We zullen een willekeurig drone-simulatiepakket op het web vinden en aanpassen om met Robonomics te werken.**
**Vereisten:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (installatiehandleiding [hier](http://wiki.ros.org/melodic/Installatie))

</li>

<li class="flex">

Robonomics node (binair bestand) (download de nieuwste release [hier](https://github.com/airalab/robonomics/releases))

</li>

</List>

<br/>

Het hele proces van het coderen van dit deel van de demo wordt gepresenteerd in een video hieronder.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. Zoek een simulatie
Laten we het web opgaan. Zoek op Google naar 'ROS drone simulator'. De eerste link zal je waarschijnlijk de 'tum_simulator' pagina laten zien op [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

Het is behoorlijk verouderd, dus we kunnen beter een fork voor ons systeem vinden. Zoek op Google naar 'tum_simulator Ubuntu 18 Gazebo 9 fork'. Het eerste resultaat is een GitHub [repo](https://github.com/tahsinkose/sjtu-drone) met een geschikt pakket. Download het

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

Vergeet niet om het source commando toe te voegen aan `~/.bashrc`:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

Nu kunnen we de simulatie uitvoeren om te zien wat we moeten doen om de drone onder parachain controle te nemen.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. Inspecteer ROS-onderwerpen
Wanneer de simulatie draait, voer dan in een nieuw tabblad het volgende commando uit om de lijst met onderwerpen te zien die door de drone worden gebruikt:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

Laten we eens kijken naar `/cmd_vel`, `/drone/takeoff` en `/drone/land`:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

Zoals te zien is, zouden er berichten van de typen `Twist` en `Empty` moeten zijn, ze maken deel uit van `std_msgs` en `geometry_msgs`, we zullen dit gebruiken in de controller. Sluit de simulatie even af.

## 3. Download controllerpakket
Over het algemeen is het belangrijkste verschil met de normale ROS-robotcontroller een blok code, dat alle transacties in het netwerk controleert met behulp van [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/). Het pakket zelf is beschikbaar op GitHub. Download het en bouw de werkruimte:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. Beheer accounts in DAPP
Aangezien we aan het testen zijn, laten we een lokale robonomics netwerknodes maken met het robonomics binair bestand:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Belangrijk!** Voordat je de volgende lanceringen uitvoert, is het noodzakelijk om een map `db` te verwijderen met

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Na een succesvolle lancering maak je accounts aan volgens [deze](https://wiki.robonomics.network/docs/create-account-in-dapp/) handleiding. **Vergeet niet om de seed en het adres van elk account op te slaan! Je hebt ze nodig voor transacties**. Voeg deze adressen, seeds en het pad naar het robonomics binair bestand toe aan het bestand `config.config` in `robonomics_ws/src/robonomics_sample_controller/src`. Verstuur wat geld (eenheden) naar deze accounts:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. Start de drone onder parachain controle

Tot nu toe zou het **enige dat draait** de lokale robonomics node moeten zijn. Start in een aparte terminal de dronesimulatie:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Voer het script uit:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

Nu kun je een transactie verzenden om de drone te laten vliegen. Gebruik hiervoor de Robonomics IO `write` subcommando van het robonomics binair bestand:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Waar `<DRONE_ADRES>` en `<WERKGEVERSLEUTEL>` worden vervangen door eerder opgeslagen strings.
Je zou de log `"Opstijgen"` moeten zien en de drone zou moeten beginnen te vliegen:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

Zo kan elke ROS-compatibele robot worden bestuurd door Robonomics parachain controle.


##  Deel 2. Gegevens opslaan op Blockchain

**In dit deel zullen we doorgaan met het gebruik van Robonomics tools om een drone te laten besturen door een parachain. Deze keer zullen we opties toevoegen voor het verzenden van gegevens naar IPFS en het opslaan van hashes in de chain. Hieronder vind je de instructies en codefragmenten. Vereisten:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (installatiehandleiding [hier](http://wiki.ros.org/melodic/Installatie))
</li>

<li class="flex">

IPFS 0.4.22 (download van [hier](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) en installeer)
</li>

<li class="flex">

Robonomics node (binair bestand) (download de nieuwste release [hier](https://github.com/airalab/robonomics/releases))
</li>

<li>Python-afhankelijkheden:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

Het hele proces van het coderen van dit deel van de demo wordt gepresenteerd in een video hieronder.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. Voeg afhankelijkheden toe
Als we een simulatie starten en de lijst met onderwerpen bekijken (zie deel 1), zullen we zien dat er één onderwerp is dat frontcamera-gegevens bevat en het berichttype `sensor_msgs/Image` gebruikt:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

Laten we proberen om elke 1 seconde een foto te maken en na de vlucht deze foto's te publiceren naar IPFS. Als je de eerste tutorial hebt voltooid, hoef je niets anders te downloaden. Het is het `drone_sample_controller_pictures.py` script.

## 2. Beheer accounts in DAPP
Zoals gedaan in een eerdere tutorial, maak een lokale robonomics netwerknode aan met het robonomics binair bestand:
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Belangrijk!** Voordat je de volgende lanceringen uitvoert, is het noodzakelijk om een map `db` te verwijderen met

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Na een succesvolle lancering maak je accounts aan volgens [deze](https://wiki.robonomics.network/docs/create-account-in-dapp/) handleiding. **Vergeet niet om de seed en het adres van elk account op te slaan! Je hebt ze nodig voor transacties**. Voeg deze adressen, seeds en het pad naar het robonomics binair bestand toe aan het bestand `config.config` in `robonomics_ws/src/robonomics_sample_controller/src`. Verstuur wat geld (eenheden) naar deze accounts:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. Lancering
Tot nu toe zou het **enige dat draait** de lokale robonomics node moeten zijn. Start in een aparte terminal de dronesimulatie:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Start in een ander venster de ipfs daemon:
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Voer het script uit:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

Nu kun je een transactie verzenden om de drone te laten vliegen en foto's te laten maken. Hiervoor moet je de Robonomics IO `write` subopdracht van het robonomics binair bestand gebruiken:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Waar `<DRONE_ADRES>` en `<WERKGEVERSLEUTEL>` worden vervangen door eerder opgeslagen strings.
Je zou de log `"Opstijgen"` moeten zien en de drone zou moeten beginnen met vliegen en foto's maken:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

Later, wanneer de taak is voltooid, ga naar de Robonomics portal en ga naar `Ontwikkelaar` -> `Ketenstatus` en voeg een `DRONE` datalog toe met de `+` knop met geselecteerde `datalog` als statusquery. De IPFS-hash van de telemetrie is opgeslagen in de blockchain. Om de gegevens te zien, kopieer eenvoudigweg de hash en voeg deze toe aan het lokale [gateway](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) adres `localhost:8080/ipfs/`:


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>