---
title: "Deployment of Engineer Workbench"
description: This course is all about getting to know the Feecc system and all of its components.
metaOptions: [Learn, Getting Used to Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In this lesson, you will learn how to deploy the necessary components of Feecc Engineer Workbench by yourself.
</RoboAcademyText>

Among the components:

- Workbench Daemon
- Workbench Frontend
- IPFS Gateway
- HID Reader Daemon

All components are launched using [Docker](https://docs.docker.com/engine/install/ubuntu/) and [Docker compose](https://docs.docker.com/compose/), make sure you have them installed.

## Software preparation

1. Feecc components use the [MongoDB](https://www.mongodb.com/) database to store and access data. Before using Feecc, you need to deploy MongoDB in whatever way is convenient for you. Here are some deployment options: [using your own server](https://www.mongodb.com/try/download/community), [cloud database in Atlas](https://www.mongodb.com/atlas) (free), [cloud database in DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (paid). 
    
    In any case, you need to obtain your connection URI to MongoDB, which you will need to enter as the value of the `MONGODB_URI` variable for all components of the system.
    
2. If you want to take advantage of reliable and transparent storage of data from your production system, you need to create an account on Robonomics. To do this, use the instructions available at the following link: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    You need to save the seed phrase of the account as it will be used later in the variable `ROBONOMICS_ACCOUNT_SEED`.

## Workbench preparation

Before starting, connect all the necessary equipment to the computer or server:

- label printer using USB
- RFID / barcode readers using USB
- IP camera through PoE router/network switch
- monitor with keyboard and mouse or touchscreen using USB and HDMI/VGA (optional)

## Launching HID Reader Daemon

1. Clone the repository:

<LessonCodeWrapper language="bash" noLines>
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. Launch the daemon:

<LessonCodeWrapper language="bash" noLines>
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Launching Workbench Daemon

1. Clone the repository:

<LessonCodeWrapper language="bash" noLines>
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. Configure the daemon for your needs using the file `docker-compose.yml`. The file contains various environment variables:

    - MongoDB configuration;
    - Robonomics configuration;
    - IPFS configuration;
    - printer params;
    - camera params;
    - RFID / barcode readers params.
    
    The full list of variables is available in the daemon [repository](https://github.com/Multi-Agent-io/feecc-workbench-daemon). The following parameters are mandatory:
    
    - `MONGODB_URI`: your connection URI to MongoDB;
    - `MONGODB_DB_NAME`: a database name of MongoDB;
    - `WORKBENCH_NUMBER`: employee's workbench number.

3. Launch the daemon:

<LessonCodeWrapper language="bash" noLines>
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Check its functionality. Go to the browser and open the `http://127.0.0.1:5000/docs` page, which should contain documentation on the system's REST API interface. If the page is not available, then the server is not started properly. Check the logs inside the container for errors, fix them and repeat build and run steps.

## Launching IPFS Gateway

1. Clone the repository:

<LessonCodeWrapper language="bash" noLines>
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. Configure the microservice for your needs using the file `docker-compose.yml`.  The file contains environment variables for connection with MongoDB, Robonomics and Pinata. The full list of variables is available in the gateway [repository](https://github.com/Multi-Agent-io/feecc-ipfs-gateway).

3. Launch the microservice:

<LessonCodeWrapper language="bash" noLines>
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Launching Workbench Frontend

1. Clone the repository:

<LessonCodeWrapper language="bash" noLines>
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. Go to `configs` directory and configure the frontend service for your needs using the file `config.json`. The following parameters are particularly important:
    - `socket` — insert the Workbench Daemon address here;
    - `interface_language` — interface language, available `en` and `ru` options;
    - `dev_show_reducers` — enabling/disabling developer mode;
    - `pulling_period` — period of receiving data from the backend in milliseconds;

3. Launch the frontend container:

<LessonCodeWrapper language="bash" noLines>
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Check its functionality. Go to the browser and open the `http://localhost:3000` page, you should see an authorization page.

<RoboAcademyText fWeight="500">
In the next lesson, we will go through the Feecc Analytics service.
</RoboAcademyText>