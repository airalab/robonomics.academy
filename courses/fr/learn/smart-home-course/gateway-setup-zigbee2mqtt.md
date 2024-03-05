---
title: "Leçon n°4a, Configuration de la passerelle : Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: cours d'assistant domestique
lessonNumber: 4
metaOptions: [Apprenez, Maison Intelligente Souveraine avec Robonomics et Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introduction

Il s'agit d'une configuration de scénario pour connecter des appareils à l'aide de l'adaptateur Zigbee et du pont Zigbee2MQTT. Si vous avez le [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) (qui possède tous les micrologiciels nécessaires), vous pouvez simplement suivre ces instructions. Cependant, si vous avez un autre adaptateur, la première chose à faire est de le flasher avec le logiciel Zigbee2MQTT. Vous pouvez trouver des instructions pour votre appareil [ici](https://www.zigbee2mqtt.io/guide/adapters/).

Vous aurez également besoin d'un appareil intelligent pour tester sa connexion à Home Assistant.


## Instructions

<List type="numbers">

<li>

Installation du logiciel

<List>

  <li>
    Configurez le référentiel de l'environnement d'exécution Node.js et installez-le avec les dépendances requises:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Vérifiez que les versions correctes de Node.js (v14.X, V16.x, V17.x ou V18.X) et du gestionnaire de paquets <code class="nowb">npm</code> (6.X, 7.X ou 8.X) installées automatiquement avec Node.js, ont été installées:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Créez un répertoire pour Zigbee2MQTT et définissez votre utilisateur comme propriétaire de celui-ci:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Clonez le référentiel Zigbee2MQTT:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    Installer les dépendances. Notez que la commande <code>npm ci</code> peut produire des avertissements qui peuvent être ignorés.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

Connexion et configuration de l'adaptateur

<List>

<li>

Connectez l'adaptateur Zigbee au Raspberry Pi. Ensuite, vous devez trouver l'emplacement de la clé. Pour cela, saisissez la commande suivante:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

La sortie devrait ressembler à:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

Dans cet exemple, le répertoire de connexion du stick est <code>ttyUSB0</code>.
</li>

<li>

Modifier le fichier <code>configuration.yaml</code> avant de démarrer Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

La configuration de base nécessite quelques ajustements. Changer les déclarations suivantes:

\- <code>homeassistant:</code> en <code>true</code>, cela connectera automatiquement les capteurs à Home Assistant;

\- décommenter <code>user</code> et <code>password</code> sous <code>mqtt</code> et entrer votre nom d'utilisateur et mot de passe (en tant que chaîne, entre guillemets) du courtier MQTT;

\- changer le port dans <code>serial</code> -> <code>port</code> pour le répertoire de connexion du stick. Dans cet exemple: <code>/dev/ttyUSB0</code>.

Le fichier de configuration ajusté devrait ressembler à ceci:

<LessonCodeWrapper language="yaml">
# Home Assistant integration (MQTT discovery)
homeassistant: true
# allow new devices to join
permit_join: true
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: 'YOUR_USERNAME'
  password: 'YOUR_PASSWORD'
# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/YOUR_PORT
</LessonCodeWrapper>


**Supplémentaire:**

Si vous avez déjà un adaptateur Zigbee actif ou une passerelle dans votre maison, et que vous configurez maintenant un autre stick, ils entreront en conflit l'un avec l'autre. Pour résoudre ce problème, vous devez changer le canal sur le nouveau périphérique. Pour cela, ajoutez les chaînes suivantes à la fin du fichier de configuration:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Démarrer Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

Si le démarrage est réussi, vous verrez quelque chose comme:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Appairage de l'appareil

<List>

<li>

Il est temps de connecter votre appareil intelligent. La manière la plus courante de passer un appareil en mode de connexion est de maintenir enfoncé son bouton d'alimentation ou de les allumer/éteindre 5 fois. Assurez-vous que Zigbee2MQTT est en cours d'exécution.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

Lorsque l'appareil se connecte, vous devriez voir un message comme:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

Mémorisez l'ID du capteur: dans cet exemple - <code>0x00158d0003eeeacf</code>.

Maintenant, vous devriez voir ce capteur avec l'ID dans votre interface Web Home Assistant. Allez dans <code>Paramètres</code> -> <code>Appareils et services</code> -> <code>Appareils</code> pour le vérifier:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

Après avoir ajouté tous les capteurs, vous pouvez arrêter le programme avec <code>Ctrl+C</code>. Si vous ne voulez pas ajouter d'autres appareils, vous pouvez ouvrir à nouveau le fichier de configuration et définir <code>permit_join:</code> sur <code>false</code>.
</li>

</List>
</li>

<li>

Création du service pour le démarrage automatique

<List>

<li>

Maintenant, vous devez créer un service. Créez le fichier:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

Ajoutez ce qui suit à ce fichier en changeant <code>VOTRE_NOM_UTILISATEUR_RASPPI_ICI</code>. Si vous ne connaissez pas votre nom d'utilisateur, utilisez la commande <code>whoami</code>.

<LessonCodeWrapper language="bash">
[Unit]
Description=zigbee2mqtt
After=network.target 
[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=YOUR_RASPPI_USERNAME_HERE
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>
</li>

<li>

Vérifiez que la configuration fonctionne:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

La sortie devrait ressembler à:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Activez le service pour démarrer Zigbee2MQTT automatiquement au démarrage:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>