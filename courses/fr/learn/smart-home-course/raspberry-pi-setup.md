---
title: "Leçon n°2, Configuration de Raspberry Pi"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: cours d'assistant domestique
lessonNumber: 2
metaOptions: [Apprenez, Maison Intelligente Souveraine avec Robonomics et Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introduction

Dans cette leçon, vous allez préparer votre Raspberry Pi pour en faire un concentrateur IoT. Vous installerez et configurerez séquentiellement tous les composants nécessaires, à savoir :

<List>

- Distribution Ubuntu Linux pour Raspberry Pi en tant que système d'exploitation serveur;
- Paquets Home Assistant;
- Paquets IPFS;
- bibliothèque robonomics-interface.

</List>

## Instructions

<List type="numbers">

<li>

Préparation et configuration de Raspberry Pi

<List>

  <li>

  Téléchargez l'image de [64-bit Ubuntu Server 22.04 LTS](https://ubuntu.com/download/raspberry-pi) ou plus récente pour Raspberry Pi.
  </li>

  <li>

  Téléchargez et installez un outil pour écrire des fichiers image appelé [Raspberry Pi Imager](https://www.raspberrypi.com/software/) sur votre ordinateur.
  </li>

  <li>

  Insérez la carte SD et exécutez Raspberry Pi Imager. Sélectionnez l'image requise (que vous venez de télécharger) comme système d'exploitation et assurez-vous de sélectionner votre carte SD dans le menu déroulant de stockage.

  </li>

  <li>

  Ouvrez les paramètres et cochez l'option <code>Activer SSH</code> avec le paramètre <code>Utiliser l'authentification par mot de passe</code>.

  \- Dans <code>Définir le nom d'utilisateur et le mot de passe</code> ajoutez le nom d'utilisateur et le mot de passe de votre utilisateur Raspberry Pi.

  \- Dans <code>Configurer le réseau local sans fil</code> fournissez votre Wi-Fi avec son mot de passe et choisissez votre pays dans la liste déroulante. Ensuite <code>Écrire</code> l'image.

  <robo-academy-note type="okay">
  Assurez-vous de saisir le nom réel de votre Wi-Fi et le mot de passe de votre Wi-Fi.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  Attendez que l'écriture se termine, puis insérez la carte SD dans le Raspberry Pi et allumez-le. Il devrait se connecter à votre réseau Wi-Fi, ce qui prendra un certain temps.

  </li>
  
  <li>

  Maintenant, vous devez trouver l'adresse de l'appareil. Pour ce faire, vous pouvez utiliser diverses méthodes de balayage réseau, comme [Fing App](https://www.fing.com/products), la commande <code>arp -a</code> ou [nmap](https://nmap.org/download.html). Ce dernier sera utilisé ensuite.

  Installez nmap avec une commande

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  Ensuite, trouvez votre adresse dans votre réseau local. Elle devrait ressembler à <code>192.168.xxx.xxx</code> ou <code>172.xxx.xxx.xxx.</code> Faites attention car nmap peut trouver de nombreuses adresses sur votre réseau local.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  Ensuite, scannez votre réseau comme indiqué ci-dessous en remplaçant le dernier octet de l'adresse par <code>0</code>:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  La sortie de la commande ressemblera à ceci:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon noLines>
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:02:24 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:04:45:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-NO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B3:7D:9E:94:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
</LessonCodeWrapper>

  Dans cet exemple, l'adresse est <code>192.168.43.56.</code>

  </li>

  <li>

  Connectez-vous au Raspberry Pi via SSH avec l'IP trouvée. Utilisez le nom d'utilisateur et le mot de passe que vous avez créés précédemment.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  Les instructions supplémentaires sont exécutées via SSH sur le Raspberry Pi lui-même.
  
  </li>
</List>
</li>

<li>

Installation de Home Assistant

<List>
  <li>

  <robo-academy-note type="okay">

Certaines versions de logiciels indiquées ci-dessous peuvent être obsolètes. Pour les dernières versions, vous pouvez vous référer au [dépôt d'installation de l'image Robonomics Home Assistant](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage).

  </robo-academy-note>

  Avant de commencer, mettez à jour le système Raspberry Pi et installez les packages nécessaires. Pendant l'installation, vous verrez une fenêtre avec une demande de redémarrage du service. Choisissez simplement <span class="accent">ok</span> avec le bouton <code>tab</code> et appuyez sur entrée.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  Créez l'utilisateur <code>homeassistant</code> et le répertoire pour Home Assistant Core:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  Créez un environnement virtuel pour Home Assistant Core et basculez dessus. Cela doit être fait en tant qu'utilisateur <code>homeassistant</code>, donc après avoir exécuté les commandes, votre utilisateur ressemblera à <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  En conséquence, vous trouverez un nom d'environnement virtuel entre crochets:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  Installez les packages Python requis:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  Démarrer Home Assistant Core pour la première fois. Cela complétera l'installation en créant automatiquement le répertoire de configuration <code class="nowb">.homeassistant</code> dans le répertoire <code>/home/homeassistant</code>, et en installant toutes les dépendances de base:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  Pendant que la configuration initiale est en cours, vérifiez votre installation via l'interface web sur <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. Dans cet exemple: <code>http://192.168.43.56:8123</code>. Vous pouvez ouvrir une interface web depuis n'importe quel ordinateur connecté à votre réseau local.

  Attendez d'obtenir la fenêtre de bienvenue avec la création du login / mot de passe, puis arrêtez Home Assistant avec <code>Ctrl+C</code>.
  </li>
</List>
</li>

<li>

Installation d'IPFS

<List>

  <li>

  Pour l'installation d'IPFS, vous pouvez utiliser notre script pour télécharger IPFS et créer un service systemd avec. Tout d'abord, quittez l'environnement virtuel pour Home Assistant:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  Ensuite, exécutez:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Services Systemd

<List>

<li>

Le service systemd est utile pour automatiser le lancement de Home Assistant. Créez un nouveau service pour Home Assistant:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

Collez ce qui suit

<LessonCodeWrapper language="bash">
[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure
User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/srv/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>

</li>

<li>

Activer et démarrer le service:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl enable home-assistant@homeassistant.service
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl start home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Intégration Robonomics

<List>

<li>

Connectez-vous avec l'utilisateur <code>homeassistant</code> sur votre Raspberry Pi:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

Source de l'environnement virtuel et installez les packages Python requis:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

Ensuite, allez dans le répertoire <code>.homeassistant</code>, créez le dossier <code class="nowb">custom_components</code> et clonez-y le dépôt avec l'intégration:


<LessonCodeWrapper language="bash" noLines>
cd ~/.homeassistant
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
mkdir custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
cd custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
</LessonCodeWrapper>

</li>


<li>

Après cela, quittez l'utilisateur homeassistant et redémarrez le service:

<LessonCodeWrapper language="bash" noLines>
exit
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl restart home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

</List>



