---
title: "Demo of Feecc"
description: This course is all about getting to know the Feecc system and all of its components.
metaOptions: [Learn, Getting Used to Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In this lesson, you will test the basic functions of Feecc using a virtual testbed as an example, which emulates a real-life instance of a production tracking system.
</RoboAcademyText>

For the purposes of demonstration it is devoid of some typical features like label printing or video recording, but it holds the main concept of such a system.

## Prerequisites

To run the demo, you will need:

- UNIX-like system (tested on [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/))
- [Docker](https://docs.docker.com/engine/install/ubuntu/) and [Docker compose](https://docs.docker.com/compose/)
- Web browser (tested on Google Chrome and Mozilla Firefox)

## Installation

Execute the following commands:

<LessonCodeWrapper language="bash" noLines>
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

To check working containers, run the following:

<LessonCodeWrapper language="bash" noLines>
sudo docker ps -a
</LessonCodeWrapper>

You should see the following output:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## Launching demo

1. Go to http://localhost:3000/ in your browser, you should see a welcome screen.

2. At this stage, the system should prompt the employee to place their RFID card on the scanner for authorization. In the demo, you can use `hid-emulator.py` for authorization. To do this, run a separate Docker container:

<LessonCodeWrapper language="bash" noLines>
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

It is capable of emulating two functions: providing an RFID card and scanning a barcode; you need the first function, enter `1`.

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the RFID scanner.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. You will see the screen for selecting the composition type, choose `SINGLE DEVICE`.

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. Notifications will appear in the bottom left corner indicating the start of work on the device for which a unique ID is created. The blue notification will also display the activity of the virtual printer; on the actual setup, a barcode with the device's ID is printed at this moment.

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. Click on `START COMPOSITION` to begin recording the device assembly process. You will be prompted to go through all the necessary assembly steps; each time an employee completes a step, they should click the `NEXT` button, after which the video will be saved to IPFS. It is also possible to suspend assembly (`PAUSE`) to return to it later or to stop the process completely (`STOP`).

6. When all assembly stages are completed, the `FINISH` button appears, after which Feecc suggests saving the device's certificate. However, before doing this, open the [local Robonomics node](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) in your browser, you will need it later. After that, return to Feecc and click `SAVE PASSPORT`.
    
    You will see new notifications in the corner of the screen: notification that the certificate have been uploaded to Robonomics and IPFS, as well as two blue messages about printing the seal tag and QR-code leading to the certificate.

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. Under the `Chain info` section on the Robonomics local node screen, you should see a new event `datalog.NewRecord` under the `recent events` column. If you expand it, the IPFS CID corresponding to the certificate file of the device will be shown in the `bytes` field.

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

Printed QR code contains a link to this CID, which allows opening the certificate file in the browser. Since your local IPFS node may not have that discoverability, you may reach the file locally with `localhost:8080/ipfs/CID.` The contents of the certificate look something like:

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

8. Let's now try to create a certificate for a composite assembly consisting of multiple devices. In the type selection menu, click on `COMPOSITE DEVICE`, and then `SAMPLE DEVICE`. Copy its unit ID (located in the Composition number field), as you will need it later. Then, proceed with the standard steps for assembling the device.

9. After assembly, go back to `COMPOSITE DEVICE` and press `FINAL ASSEMBLY` to finalize the composite assembly. The system will ask you to provide the unit ID of the assembled devices, for which the employee must scan their bar code. To simulate this process, go back to `hid-emulator.py` and select function `2` for barcode scanning, and insert the saved unit ID there.

10. Next, the system will prompt going through the necessary stages of composite assembly and generate a certificate for it:

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

11. To delete the demo, enter the command:

<LessonCodeWrapper language="bash" noLines>
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
In the next lesson, we will proceed to the actual deployment of all the necessary components of the Feecc system.
</RoboAcademyText>