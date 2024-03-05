---
title: "Leçon n°3, Configuration du courtier MQTT et initialisation de Hass"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: cours d'assistant domestique
lessonNumber: 3
metaOptions: [Apprenez, Maison Intelligente Souveraine avec Robonomics et Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introduction
Après avoir terminé la configuration du Raspberry Pi, la prochaine étape consiste à installer le courtier MQTT sur le Raspberry Pi. Comme mentionné précédemment, le courtier est responsable du routage des messages entre différents clients MQTT. Vous installerez et configurerez Eclipse Mosquitto, un courtier MQTT open source.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

De plus, vous allez terminer la configuration de Home Assistant et ajouter une intégration MQTT à celui-ci.

## Instructions

<List type="numbers">

<li>


Installation du courtier Mosquitto

<List>
<li>

Installez le [courtier Mosquitto](https://mosquitto.org/) sur votre Raspberry Pi :


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

Entrez VOTRE_NOM_UTILISATEUR (utilisez celui que vous voulez) et le mot de passe (vous devrez entrer le mot de passe après la commande) :

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

Éditez le fichier de configuration :

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

Ajoutez ce qui suit au fichier :

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

Enregistrez le fichier et redémarrez le service :

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

Enfin, vérifiez l'état du courtier :

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

Vous devriez voir quelque chose comme ceci :

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Configuration de Home Assistant et MQTT

<List>

<li>

Ouvrez le navigateur web et allez à <code>http://%ADRESSE_IP_DU_RASPBERRY%:8123</code> (avec la même adresse IP que celle trouvée dans la leçon précédente). Soyez conscient que l'adresse du Raspberry Pi peut changer dans le temps en raison des paramètres du routeur. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

Sur la première page, entrez le nom, le nom d'utilisateur et le mot de passe que vous souhaitez, puis cliquez sur "<code>CRÉER UN COMPTE</code>"
</li>

<li>

Ensuite, entrez un nom pour votre maison et définissez votre emplacement et votre système d'unités. Cliquez sur "<code>DETECT</code>" pour trouver votre emplacement et définir votre fuseau horaire et votre système d'unités en fonction de cet emplacement. Si vous préférez ne pas envoyer votre emplacement, vous pouvez définir ces valeurs manuellement.

</li>

<li>

À l'écran suivant, Home Assistant affichera tous les appareils qu'il a découverts sur votre réseau. Ne vous inquiétez pas si vous voyez moins d'éléments que ce qui est indiqué ci-dessous; vous pouvez toujours ajouter des appareils manuellement plus tard. Pour l'instant, cliquez simplement sur <code>FINISH</code> et vous serez sur l'écran principal de Home Assistant.

</li>

<li>

Maintenant, nous devons installer une intégration MQTT. Allez dans <code>Paramètres</code> -> <code>Appareils et services.</code>

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

Appuyez sur le bouton <code>AJOUTER UNE INTÉGRATION</code> dans le coin inférieur droit. Dans la fenêtre ouverte, trouvez <code>MQTT</code>.

</li>

<li>

Sélectionnez MQTT et configurez l'adresse de votre courtier — <code>localhost</code> port — <code>1883</code> et votre nom d'utilisateur et mot de passe (les mêmes que ceux que vous avez créés précédemment pour le courtier Mosquitto) puis appuyez sur <code>SUBMIT</code>.
</li>

</List>
</li>
</List>