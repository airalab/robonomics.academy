---
title: "Leçon n°3, Configuration et connexion des capteurs"
description: 'CONFIGURATION ET CONNEXION DES CAPTEURS'
lessonNumber: 3
metaOptions: [Apprendre, Connectezezivité des capteurs et réseau de capteurs décentralisé]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Nos capteurs utilisent le micrologiciel Robonomics, une version étendue du micrologiciel sensor.community, avec certains capteurs ajoutés et le schéma d'envoi de données modifié. Le code source peut être trouvé [sur le lien.](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

Si vous avez une carte Robonomics prête à l'emploi, vous pouvez aller à la section "Connecter".

## Exigences

**Pour Linux :**

<List type="numbers">

<li>

Ajoutez un utilisateur au groupe `dialout` (pour Ubuntu) pour accéder au port USB :

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>Redémarrez l'ordinateur.</li>

<li>

Téléchargez l'exécutable Robonomics `airrohr-flasher` depuis [les versions](https://github.com/airalab/sensors-connectivity/releases).

</li>

<li>

Changez les permissions du fichier et exécutez-le :

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**Pour Windows :**

<List type="numbers">

<li>

Installer les pilotes pour USB2serial (dans Windows 10, cela devrait démarrer automatiquement) - Pilotes pour NodeMCU v3 (CH340): [lien](http://www.wch.cn/downloads/file/5.html), [lien alternatif](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

Téléchargez l'exécutable Robonomics `airrohr-flasher` à partir de [releases](https://github.com/airalab/sensors-connectivity/releases) et exécutez-le.

</li>

</List>

**Pour MacOS :**

<List type="numbers">

<li>

Installez les pilotes pour USB2serial — Pilotes pour NodeMCU v3 (CH340) : [lien](http://www.wch.cn/downloads/file/178.html), [lien alternatif](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Téléchargez l'exécutable Robonomics `airrohr-flasher` à partir de [releases](https://github.com/airalab/sensors-connectivity/releases) et exécutez-le.

</li>

</List>


## Configuration

<List type="numbers">

<li>

Connectez le capteur à un PC et exécutez le programme `airrohr-flasher`. Après avoir ouvert le programme, vous verrez ce qui suit (en fonction de votre système d'exploitation):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

Le champ `Board` devrait se remplir automatiquement; sinon, choisissez le port requis dans la liste déroulante.

<RoboAcademyNote type="okay" title="INFO">
Si <code>airrohr-flasher</code> ne trouve pas votre carte, assurez-vous d'avoir correctement suivi la partie <b>Exigences</b>.
</RoboAcademyNote>

</li>

<li>

Sélectionnez le micrologiciel avec la langue préférée et cliquez sur `Télécharger`. Le téléchargement du micrologiciel prendra un certain temps. Si vous décidez plus tard de changer de langue ou de réaliser une installation claire (pour réinitialiser la configuration), allez à la page `Effacer la mémoire flash` et appuyez sur le bouton pour effacer la mémoire flash du capteur.

</li>

<li>

Après avoir téléchargé le micrologiciel, redémarrez l'ESP (débranchez simplement et rebranchez l'USB).

</li>

<li>

Choisissez les capteurs dans le menu de cases à cocher. Choisissez SDS011 et tout capteur supplémentaire. Appuyez sur `Enregistrer la configuration`.

</li>

<li>

Après avoir téléchargé la configuration, redémarrez l'ESP (débranchez simplement et rebranchez l'USB).

</li>

</List>

## Connect

<List type="numbers">

<li>

Après le redémarrage, la carte créera un réseau Wi-Fi nommé `RobonomicsSensor-xxxxxxxxx`. Connectez-vous-y depuis votre téléphone ou votre ordinateur : vous verrez la fenêtre d'autorisation (sinon, ouvrez le navigateur et allez dans `192.168.4.1`).

</li>

<li>

Sélectionnez votre réseau Wi-Fi dans la liste (ou écrivez-le vous-même s'il n'est pas dans la liste) et remplissez le champ du mot de passe.

</li>

<li>

Écrivez les coordonnées de l'endroit où le capteur sera installé.

<RoboAcademyNote type="warning" title="WARNING">
Les coordonnées du capteur seront ensuite affichées sur une carte publiquement disponible. Si vous ne souhaitez pas afficher vos informations privées, écrivez des coordonnées proches, mais pas exactes.
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

Cliquez sur `Enregistrer la configuration et redémarre`. La carte redémarrera et se connectera au réseau Wi-Fi spécifié.

</li>

<li>

Ouvrez la [Carte des capteurs Robonomics](https://sensors.robonomics.network/#/) et trouvez l'endroit où vous avez installé le capteur. Dans quelques minutes, vous pourrez voir votre capteur avec des données sur la carte.


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

C'est tout avec l'installation par défaut. Pour une configuration plus avancée (envoi de données vers votre propre serveur), lisez la section suivante.

## Configuration supplémentaire

Avant la configuration, vous devez trouver l'adresse du capteur dans votre réseau Wi-Fi. Pour ce faire, vous pouvez utiliser `airrohr-flasher` (votre ordinateur doit être sur le même réseau que le capteur). Lancez-le et allez à l'onglet `Discovery`, puis appuyez sur `Refresh`, attendez un moment et votre adresse de capteur apparaîtra.

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

Double-cliquez sur cette adresse (ou saisissez-la dans votre navigateur), vous accéderez au menu du capteur:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

Maintenant vous pouvez commencer à personnaliser votre configuration.


## API personnalisée

Vous pouvez également configurer l'envoi de données vers votre propre serveur. Pour ce faire, dans l'onglet `APIs`, cliquez sur `Envoyer à votre propre API` et spécifiez l'adresse du serveur et le port (`65` pour la connectivité des capteurs):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

Cliquez sur `Save and restart` pour enregistrer les paramètres.