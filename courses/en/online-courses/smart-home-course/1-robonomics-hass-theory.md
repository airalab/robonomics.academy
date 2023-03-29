---
title: "Lesson #1, Theoretical Briefing"
description: home assistant course
lessonNumber: 1
courseID: 3
metaOptions: [Online Courses, Sovereign Smart Home with Robonomics and Home Assistant]
---

## Key Components of Sovereign Smart Home 

<List>

1. **[Raspberry Pi](https://www.raspberrypi.org/), a single board computer**.

We can convert the device into an IoT hub after installing all the necessary software. The main purpose of the hub is to orchestrate the protocols, networks, applications and various devices of the smart home.

2. **[Home Assistant](https://www.home-assistant.io/), an open source control system software**.

It is designed to be a central hub for smart devices. It can automatically scan the network for known devices and allows users to easily configure all necessary automations. We will install Home Assistant on the Raspberry Pi.

Home Assistant communicates with devices and stores their data locally, which unfortunately does  not allow you to control your devices remotely. To solve this problem we use Robonomics Network.

3. **[Robonomics Network](https://robonomics.network/), a decentralized cloud for secure and reliable control of IoT applications**.

It uses web3 technologies, which incorporates decentralization and blockchain technologies for the protection of smart devices and their data.

The main functionality of Robonomics is implemented based on a blockchain (parachain) of the Polkadot/Kusama ecosystem. Among the main functions of the parachain is the ability to send a command to launch the device and being able to store user data on the blockchain.

The Robonomics parachain has an IoT subscription feature that allows users to send transactions to the parachain, without the fee, for the period of one  month. In the practical section of this course, you will use the subscription method.

The interaction between the IoT hub and the Robonomics parachain is accomplished using [robonomics-interface](https://github.com/Multi-Agent-io/Robonomics-interface) — Python library which specializes in interfacing with Robonomics to convenient programming.

4. **[InterPlanetary File System](https://ipfs.tech/) (IPFS), a peer-to-peer software for storing and sharing data in a distributed file system**.

IPFS is needed in order to avoid storing large files on the blockchain (as it would be too expensive), but instead we can store the file’s IPFS hashes, which act as links to these files.

## Protocols for Smart Devices
You will uses two main protocols for smart devices:

1. **[Zigbee](https://csa-iot.org/all-solutions/zigbee/), a wireless communication protocol.**

It is very commonly used for connecting smart devices. It is designed for low power consumption, easability and flexibility of configuration, and supports self-organizing and self-recovering mesh network topology. Thousands of devices are available on the market with Zigbee support, which makes it very attractive for building smart home solutions. To control Zigbee devices you need a gateway that transfers data between the Zigbee network and another network (i.e. Wi-Fi).

2. **[Message Queuing Telemetry Transport](https://mqtt.org/) (MQTT), a publish-subscribe protocol designed to control IoT applications.**

The protocol is lightweight, requires minimal resources and ensures reliability of message delivery. The protocol is designed for low-bandwidth, high latency, unreliable networks, which make it an excellent option for operating high volumes of sensor messages. MQTT requires a server that runs the MQTT broker (in our case it will work with our  Raspberry Pi). The broker receives all the messages from the MQTT clients and then routes the messages to the appropriate subscribing clients.

## Options for Zigbee Connection
You will explore two scenarios for connecting devices to Home Assistant with Robonomics.

1. The first scenario does not use a separate Zigbee gateway to connect devices. Instead, a combination of a [Zigbee adapter](https://www.zigbee2mqtt.io/guide/adapters/) and the [Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/adapters/) software is used.

<LessonImages figure figureCaption="Architectural scheme of the scenario with Zigbee adapter" src="smart-house-course/lesson-1-1.png" alt="Architectural scheme of the scenario with Zigbee adapter"/>

An adapter (such as the JetHome USB JetStick Z2) connects to the Raspberry Pi and acts as an interface between the computer and the Zigbee radio communication. Zigbee2MQTT is software that allows connecting Zigbee to MQTT networks. It takes messages from the Zigbee network and translates them into easy to use and well structured messages of MQTT.

2. In the second scenario, devices are connected using the [SLS Gateway](https://github.com/slsys/Gateway) based on the ESP32 microcontroller. For ease of use, Robonomics have developed our [own modification](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01) of the gateway.

<LessonImages figure figureCaption="Architectural scheme of the scenario with SLS Gateway" src="smart-house-course/lesson-1-2.png" alt="Architectural scheme of the scenario with SLS Gateway"/>

The SLS gateway acts as the coordinator of Zigbee protocol messages and allows the use of most of the available Zigbee equipment. For integration with Home Assistant, the MQTT protocol is used.

## Remote Control

Remote control of a smart home is performed using the [Robonomics decentralized application](https://dapp.robonomics.network/) (dapp), which provides access to parachain functions in a user-friendly way. The security and immutability of user data is ensured on the one hand by sending encrypted data to IPFS (which can only be decrypted by the user's key), and on the other hand by placing the IPFS hash of this data on the blockchain.

</List>




