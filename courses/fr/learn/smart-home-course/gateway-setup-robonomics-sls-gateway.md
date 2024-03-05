---
title: "Leçon n°4b, Configuration de la passerelle : Passerelle Robonomics SLS"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: cours d'assistant domestique
lessonNumber: 5
metaOptions: [Apprenez, Maison Intelligente Souveraine avec Robonomics et Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## De quoi s'agit-il

Il s'agit d'une configuration de scénario pour connecter des appareils en utilisant la passerelle Robonomics SLS. Robonomics s'est inspiré du design de la passerelle développée par le projet [Smart Logic System](https://github.com/slsys/Gateway) et a modifié une partie du circuit. Vous pouvez commander une passerelle chez Robonomics ou construire la vôtre en utilisant nos [plans](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01).

Vous installerez le logiciel requis pour la passerelle, le configurerez et le connecterez à Home Assistant.

<robo-academy-note type="note" title="Attention">
  SmartRF Flash Programmer, un programme de mise à jour du micrologiciel, nécessite un système d'exploitation Windows.
</robo-academy-note>

## Instructions

<List type="numbers">

<li>

Installation du micrologiciel du microcontrôleur Zigbee

<List>

<li>

Tout d'abord, vous devez flasher le microcontrôleur CC2652P de la passerelle. Réglez les interrupteurs <code>ON</code> <code>2</code>, <code>4</code> et <code>7</code> dans la partie inférieure de la passerelle SLS, les autres doivent être <code>OFF</code>.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

Connectez la passerelle à votre ordinateur avec un câble USB-A<>USB-C.

<robo-academy-note type="warning" title="WARNING">
  Veuillez utiliser uniquement des câbles de type USB-A<>USB-C, car pour le moment la passerelle ne prend pas en charge le type USB-C<>USB-C.
</robo-academy-note>

</li>

<li>

Le micrologiciel CC2652 nécessite SmartRF Flash Programmer v2 de Texas Instrument. Téléchargez-le depuis [le site officiel](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2) puis installez-le.

</li>

<li>

Téléchargez le micrologiciel pour le microcontrôleur CC2652P depuis [le dépôt GitHub](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator).

</li>

<li>

Exécutez le programme. Dans la fenêtre <code>Appareil connecté</code> sélectionnez le microcontrôleur CC2652P, définissez le chemin vers le micrologiciel, définissez les drapeaux sur <code>Erase, Program, Verify</code> comme sur l'image et appuyez sur <code>Start</code>.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

Après un flash réussi, vous verrez un message <code>Succès!</code>. Vous pouvez maintenant débrancher le câble USB.

</li>
</List>
</li>

<li>

Installation du micrologiciel du microcontrôleur

<List>

<li>

Maintenant, vous devez configurer la passerelle pour l'installation du logiciel. Nous vous conseillons de mettre à jour le micrologiciel en connectant la passerelle directement à votre Raspberry Pi et en entrant toutes les commandes suivantes sur cet appareil. 

</li>

<li>

Réglez les interrupteurs <code>ON</code> <code>1</code> et <code>3</code> dans la partie inférieure de la passerelle SLS, les autres doivent être <code>OFF</code>. Ensuite, connectez la passerelle à votre Raspberry Pi via le port USB de type C.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Connectez-vous au Raspberry Pi via SSH.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

Clonez le dépôt avec le micrologiciel :

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

Pour flasher la passerelle SLS, vous devez exécuter les scripts <code>Clear</code> et <code>Flash_16mb</code> :

<LessonCodeWrapper language="bash" noLines>
cd robonomics-hass-utils/esp_firmware/linux
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Flash_16mb.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Flash_16mb.sh
</LessonCodeWrapper>
</li>

<li class="no-bullet">

\- **Dépannage**

Si vous rencontrez des problèmes lors de la mise à jour du micrologiciel de la passerelle, vous devez suivre des étapes supplémentaires :

<List>

<li>

Assurez-vous d'avoir le module pySerial installé :

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

Donnez à votre utilisateur des droits d'accès au port USB :

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

Dans certains cas, il est nécessaire de modifier le paramètre de bande passante dans le script pour mettre à jour le firmware. Ouvrez le script <code>Flash_16mb.sh</code> avec l'éditeur nano et changez le paramètre de bauds de <code>921600</code> à une valeur plus petite (par exemple, <code>115200</code>).
</li>
</List>
</li>

<li class="no-bullet">

\- **Supplémentaire**

Nous proposons également des options pour mettre à jour le firmware en utilisant d'autres systèmes d'exploitation (macOS et Windows). Vous pouvez trouver des scripts correspondants dans un dossier, dont le nom dépend de votre OS.

</li>
</List>
</li>

<li>

Configuration de la passerelle

<List>

<li>

Réglez les commutateurs à l'arrière de la passerelle sur leur nouvelle position. Les commutateurs <code>5</code> (RX Zigbee vers ESP) et <code>6</code> (TX Zigbee vers ESP) doivent être en position <code>ON</code>, les autres doivent être en position <code>OFF</code>.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Connectez le câble d'alimentation de type-C. Le voyant lumineux au centre devrait passer au vert.

</li>

<li>

Au premier démarrage, la passerelle commencera à partager le Wi-Fi avec le SSID <code>zgw****</code>. Connectez-vous à ce réseau. Gardez à l'esprit que le signal peut être assez faible, il est donc préférable de garder la passerelle SLS plus près de votre ordinateur.

Si la connexion réussit, l'interface web s'ouvrira (ou vous pouvez la trouver à l'adresse 192.168.1.1).

</li>

<li>

Allez sur la page Wi-Fi et insérez vos identifiants Wi-Fi en entrant l'utilisateur / mot de passe et appuyez sur le bouton <code>Enregistrer</code>. Ensuite, appuyez sur le bouton <code>Redémarrer</code>. La passerelle redémarrera et se connectera à votre réseau WI-Fi.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

Trouvez l'IP locale de la passerelle SLS pour accéder à l'interface web. Pour cela, vous pouvez utiliser l'application [Fing](https://www.fing.com/products) ou <code>arp -a</code> dans votre terminal ou Nmap : 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

où <code class="bold">xxx</code> est votre adresse IP dans le réseau local. Le nom de la passerelle devrait ressembler à ceci : <code>zgw****</code>. Ouvrez l'interface web de la passerelle en collant l'IP de la passerelle dans un navigateur.
</li>

<li>

Allez dans <code>Paramètres</code> -> <code>Matériel</code> et assurez-vous que les paramètres ressemblent à l'image. Corrigez les paramètres si nécessaire et cliquez sur le bouton <code>Enregistrer</code>:

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

Le tableau des valeurs requises:


| Field        	         | **Value**          |                                                                     	
|------------------------|--------------------|
| Zigbee module          | TI                 |
| Zigbee UART RX         | 22                 |
| Zigbee UART TX         | 23                 |
| Zigbee RST Pin         | 18                 |
| Zigbee BSL Pin         | 19                 |
| Button Mode            | 33 (pullUP - true) |
| Number addressable leds| 0                  |
| Led Red (or addr)      | 21                 |
| Led Green              | 5                  |
| Led Blue               | 27                 |
| I2C SDA                | 255                |
| I2C SCL                | 255                |

</li>

<li>

Ensuite, redémarrez la passerelle. Choisissez <code>Actions</code> -> <code>Redémarrer le système</code> dans le coin supérieur droit. Assurez-vous que la passerelle fonctionne correctement avec le microcontrôleur CC2652P dans la fenêtre d'informations Zigbee. L'état du périphérique doit être <code>OK</code>.

</li>

<li>

Redémarrez la passerelle. Choisissez <code>Actions</code> -> <code>Redémarrer</code> le système dans le coin supérieur droit.

</li>

<li>

Configurez l'ajout automatique des appareils à Home Assistant. Allez dans <code>Zigbee</code> -> <code>Configuration</code> puis choisissez <code>Découverte MQTT Home Assistant</code> et <code>Effacer les états</code>. Enregistrez les modifications et redémarrez à nouveau la passerelle SLS.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **Supplémentaire**:

Si vous avez déjà une passerelle SLS active dans votre maison, et que vous configurez maintenant une autre, elles entreront en conflit l'une avec l'autre. Pour résoudre ce problème, vous devez changer le canal sur le nouveau périphérique.

Pour ce faire, allez dans <code>Zigbee</code> -> <code>Configuration</code> et changez le canal pour un autre (par exemple, canal 15).

</li>

<li>

Connectez vos appareils en allant dans <code>Zigbee</code> -> <code>Rejoindre</code>. Mettez vos capteurs en mode d'appariement, la manière la plus courante de passer un appareil en mode de connexion est de maintenir enfoncé son bouton d'alimentation ou de les allumer/éteindre 5 fois. Appuyez sur le bouton <code>Activer la connexion</code> pour commencer à rechercher des appareils Zigbee. Vous verrez des capteurs actifs.

</li>
</List>
</li>

<li>

Connexion de la passerelle SLS à Home Assistant

<List>

<li>

Vous devez configurer MQTT sur la passerelle SLS. Revenez à l'interface web de votre passerelle SLS et allez dans <code>Paramètres</code> -> <code>Lien</code> -> <code>Configuration MQTT</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

Ajoutez l'adresse de votre courtier (adresse du Raspberry Pi avec Home Assistant dans le réseau local, vous pouvez la trouver avec l'application [Fing](https://www.fing.com/products) ou en utilisant la commande <code>ip -a</code> sur votre RPi), le port (par défaut est 1883), votre nom d'utilisateur et mot de passe du courtier (que vous avez créé précédemment) et le nom du sujet (vous pouvez choisir n'importe lequel). De plus, l'adresse IP locale du Raspberry Pi doit être statique.

N'oubliez pas de cliquer sur <code>Activer</code> et <code>Conserver les états</code>.

</li>

<li>

Enregistrez les modifications. Maintenant, les appareils seront automatiquement affichés dans Home Assistant.

</li>
</List>

</li>

<li>

Connecter les appareils 

<List>

<li>

Connectez vos appareils en allant dans <code>Zigbee</code> -> <code>Rejoindre</code>. Mettez vos capteurs en mode d'appariement, la manière la plus courante de passer un appareil en mode de connexion est de maintenir enfoncé son bouton d'alimentation ou de les allumer/éteindre 5 fois.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

Appuyez sur le bouton Activer la connexion pour commencer à rechercher des appareils Zigbee. Vous verrez des capteurs actifs.

</li>

</List>
</li>

</List>