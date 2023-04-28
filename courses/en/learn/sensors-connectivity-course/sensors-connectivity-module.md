---
title: "Lesson #4, Sensors connectivity module"
description: 'SENSORS CONNECTIVITY MODULE'
lessonNumber: 4
courseID: 4
metaOptions: [Learn, Sensors Connectivity & Decentralized Sensors Network]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

In the following articles, you will learn more about the Sensor Connectivity module. After that, you can join hosting our Decentralized Sensors Network or create your own sensor map.

## About Sensors Connectivity

Decentralized Sensors Network uses the `sensors-connectivity` Python module ([source code](https://github.com/airalab/sensors-connectivity)). This module allows any user to launch their own server to receive data from sensors and process it further. At the moment, the developers have launched several such servers and any sensor can send data to them. Running multiple servers avoids data loss in case of problems with one of them, as the sensors will switch from a non-working server to a working one. Basically, you can think of the Sensors Connectivity module as a black box with one input (sensor data) and many outputs.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

Sensors Connectivity module is a set of stations (station_1, station_2 ... station_n), which receive various data, including data from sensors via HTTP protocol. Also it can be sensors connected to the computer via USB or any other data source. Data received from the stations are processed by the module and passed to feeders (feeder_1, feeder_2 ... feeder_n). The feeders send the processed data to the user; in our case the data is sent to the decentralized IPFS channel. 

A map of [Decentralized Sensors Network](https://sensors.robonomics.network/#/) is a decentralized application (dapp) running on the computer. It reads data from the IPFS channel and displays it on the map. There is no direct connection between the server that collects data from the sensors and the map that the user sees; data is transferred between them via IPFS pubsub, which reduces the load on the servers. 

In addition, from time to time, a file with data for the last period of time is stored in IPFS, and a hash of this data is then recorded on the blockchain. Since IPFS is a content-addressed network, storing data in it ensures that any data change does not go unnoticed, because the address of the needed file contains a hash of its content, which will change with any data change. The blockchain is used to pass the hash to the user, who can use it to get the needed data from IPFS (this happens when you request a history of the map).

## Module Setup for Linux

**Pre-requirements and Installation**

<List type="numbers">

<li>

To build `sensors-connectivity` module the IPFS daemon has to be installed with version no greater than `0.8.x`. Assuming, you work on Linux, execute the following (for version `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

Install package with development tools `python3-dev` and package installer for Python `pip`:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

Install the module as a PyPI package:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

If you see following warning: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

Run next command:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## Configuration

<List type="numbers">

<li>

Create directory for configuration file and database file wherever you want. This database will save IPFS hashes of sensor data, timestamp and service status:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
Name of the database file can be any, but extension must be <code>.db</code>
</RoboAcademyNote>

</li>


<li>

Create configuration file in the same directory:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

Copypaste the following to the file and insert full path to the database file in db_path field. This configuration will be enough to get sensors data over HTTP and send it to the Robonomics map:

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation": {
      "enable": false,
      "port": "/dev/<YOUR/PATH/TO/BOARD>",
      "work_period": 300,
      "geo": "00.000000,00.000000",
      "public_key": ""
   },
   "httpstation": {
      "enable": true,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

</List>

## Launch


<List type="numbers">

<li>

Launch IPFS daemon:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

After config is set, run the service with the path to config file in another terminal:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

You will see logs in the terminal (also, they will be added to `~/.logs`). Example:

<LessonCodeWrapper codeClass="big-code" language="bash">$ sensors_connectivity test.json
2022-09-02 14:08:48,408 - INFO - Getting data from the stations...
2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...
2022-09-02 14:08:48,411 - INFO - Checking data base...
2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...
2022-09-02 14:09:18,410 - INFO - Getting data from the stations...
2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...
2022-09-02 14:09:48,412 - INFO - Getting data from the stations...
2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...
2022-09-02 14:10:18,413 - INFO - Getting data from the stations...</LessonCodeWrapper>

</li>

</List>

## Post-installation

To connect your `sensors-connectivity` module to our Decentralized Sensors Network and see your data on the map, you have to send your IPFS ID to [vm@multi-agent.io](mailto:vm@multi-agent.io) or [ping@airalab.org](mailto:ping@airalab.org). We will add your ID to an access-control list.

Get your IPFS `ID` with the following command after running IPFS daemon:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>