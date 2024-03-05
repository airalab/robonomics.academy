---
title: "Démo de Feecc"
description: Ce cours consiste à découvrir le système Feecc et tous ses composants.
metaOptions: [Apprendre, s'habituer à Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
Dans cette leçon, vous testerez les fonctions de base de Feecc en utilisant un banc d'essai virtuel comme exemple, qui émule une instance réelle d'un système de suivi de production.
</RoboAcademyText>

Dans un but de démonstration, il est dépourvu de certaines fonctionnalités typiques comme l'impression d'étiquettes ou l'enregistrement vidéo, mais il contient le concept principal d'un tel système.

## Prérequis

Pour exécuter la démo, vous aurez besoin de :

- Système de type UNIX (testé sur [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/)
- [Docker](https://docs.docker.com/engine/install/ubuntu/) et [Docker compose](https://docs.docker.com/compose/)
- Navigateur Web (testé sur Google Chrome et Mozilla Firefox)

## Installation

Exécutez les commandes suivantes :

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

Pour vérifier les conteneurs en cours d'exécution, exécutez ce qui suit :

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

Vous devriez voir la sortie suivante :

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## Lancement de la démo

1. Allez sur http://localhost:3000/ dans votre navigateur, vous devriez voir un écran de bienvenue.

2. À ce stade, le système devrait demander à l'employé de placer sa carte RFID sur le scanner pour l'autorisation. Dans la démo, vous pouvez utiliser `hid-emulator.py` pour l'autorisation. Pour ce faire, exécutez un conteneur Docker séparé :

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

Il est capable d'émuler deux fonctions : fournir une carte RFID et scanner un code-barres ; vous avez besoin de la première fonction, entrez `1`.

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the Scanner RFID.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. Vous verrez l'écran pour sélectionner le type de composition, choisissez `SINGLE DEVICE`.

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. Des notifications apparaîtront dans le coin inférieur gauche indiquant le début du travail sur l'appareil pour lequel un identifiant unique est créé. La notification bleue affichera également l'activité de l'imprimante virtuelle; lors de la configuration réelle, un code-barres avec l'identifiant de l'appareil est imprimé à ce moment-là.

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. Cliquez sur `START COMPOSITION` pour commencer l'enregistrement du processus d'assemblage de l'appareil. Vous serez invité à passer par toutes les étapes d'assemblage nécessaires; chaque fois qu'un employé termine une étape, il doit cliquer sur le bouton `NEXT`, après quoi la vidéo sera enregistrée sur IPFS. Il est également possible de suspendre l'assemblage (`PAUSE`) pour y revenir plus tard ou d'arrêter complètement le processus (`STOP`).

6. Lorsque toutes les étapes d'assemblage sont terminées, le bouton `FINISH` apparaît, après quoi Feecc suggère de sauvegarder le certificat de l'appareil. Cependant, avant de le faire, ouvrez le [nœud Robonomics local](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) dans votre navigateur, vous en aurez besoin plus tard. Ensuite, revenez à Feecc et cliquez sur `SAVE PASSPORT`.
    
    Vous verrez de nouvelles notifications dans le coin de l'écran: notification que le certificat a été téléchargé sur Robonomics et IPFS, ainsi que deux messages bleus sur l'impression de l'étiquette de scellé et le QR-code menant au certificat.

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. Sous la section `Chain info` sur l'écran du nœud local Robonomics, vous devriez voir un nouvel événement `datalog.NewRecord` sous la colonne `recent events`. Si vous l'agrandissez, le CID IPFS correspondant au fichier de certificat de l'appareil sera affiché dans le champ `bytes`.

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

Le code QR imprimé contient un lien vers ce CID, ce qui permet d'ouvrir le fichier de certificat dans le navigateur. Comme votre nœud IPFS local peut ne pas avoir cette découvrabilité, vous pouvez accéder au fichier localement avec `localhost:8080/ipfs/CID.` Le contenu du certificat ressemble à quelque chose comme ça:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: 423d3c1b42f6427e80cc881a16e07451
Unit Model Name: Single Device
Total Assembly Time: 0:05:37
Production Stages:
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:38:47
  Finish Time: 26-06-2023 17:40:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:40:30
  Finish Time: 26-06-2023 17:42:06
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:42:16
  Finish Time: 26-06-2023 17:43:00
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Saw Through the Single Device
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:00
  Finish Time: 26-06-2023 17:43:51
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:51
  Finish Time: 26-06-2023 17:44:36
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
</LessonCodeWrapper>

8. Essayons maintenant de créer un certificat pour un assemblage composite composé de plusieurs appareils. Dans le menu de sélection du type, cliquez sur `COMPOSITE DEVICE`, puis sur `SAMPLE DEVICE`. Copiez son identifiant d'unité (qui se trouve dans le champ Numéro de composition), car vous en aurez besoin plus tard. Ensuite, procédez avec les étapes standard pour assembler l'appareil.

9. Après l'assemblage, retournez à `COMPOSITE DEVICE` et appuyez sur `FINAL ASSEMBLY` pour finaliser l'assemblage composite. Le système vous demandera de fournir l'identifiant d'unité des appareils assemblés, pour lequel l'employé doit scanner leur code-barres. Pour simuler ce processus, retournez à `hid-emulator.py` et sélectionnez la fonction `2` pour le balayage du code-barres, et insérez l'identifiant d'unité enregistré là.

10. Ensuite, le système vous demandera de passer par les étapes nécessaires de l'assemblage composite et générera un certificat pour cela:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: d08101feae7c4efbb5529885c9ad544b
Unit Model Name: Composite Device
Total Assembly Time: 0:00:03
Production Stages:
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:25
  Finish Time: 26-06-2023 18:18:26
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Tape the Sample Device to the base plate
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:26
  Finish Time: 26-06-2023 18:18:27
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:27
  Finish Time: 26-06-2023 18:18:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
Unit Components:
- Unit Unique Code: b165b382c3674127a6aaf5817c5a7040
  Unit Model Name: Sample Device
  Total Assembly Time: 0:00:03
  Production Stages:
  - Name: Prepare Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:45
    Finish Time: 26-06-2023 18:17:46
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Assemble Sample Device
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:46
    Finish Time: 26-06-2023 18:17:47
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Stack Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:47
    Finish Time: 26-06-2023 18:17:48
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
Total Assembly Time (Including Components): 0:00:06
</LessonCodeWrapper>

11. Pour supprimer la démo, entrez la commande:

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
Dans la prochaine leçon, nous passerons au déploiement réel de tous les composants nécessaires du système Feecc.
</RoboAcademyText>