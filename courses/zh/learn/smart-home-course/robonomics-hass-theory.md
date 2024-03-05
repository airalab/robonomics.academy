---
title: "第1课，理论简介"
lastUpdate: Thu May 04 2023 12:54:41 GMT+0400 (Samara Standard Time)
description: 家庭助手课程
lessonNumber: 1
metaOptions: [学习，Robonomics和Home Assistant的主权智能家居]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## 主权智能家居的关键组件 

<List>

1. **[树莓派](https://www.raspberrypi.org/)，一块单板计算机**。

安装所有必要的软件后，我们可以将设备转换为物联网中心。该中心的主要目的是协调智能家居的协议、网络、应用程序和各种设备。

2. **[Home Assistant](https://www.home-assistant.io/)，一款开源控制系统软件**。

它旨在成为智能设备的中央枢纽。它可以自动扫描网络以查找已知设备，并允许用户轻松配置所有必要的自动化。我们将在树莓派上安装Home Assistant。

Home Assistant与设备通信并在本地存储其数据，不幸的是这不允许您远程控制设备。为了解决这个问题，我们使用Robonomics Network。

3. **[Robonomics Network](https://robonomics.network/)，用于安全可靠控制物联网应用的去中心化云**。

它使用web3技术，结合去中心化和区块链技术来保护智能设备及其数据。

Robonomics的主要功能是基于Polkadot/Kusama生态系统的区块链（平行链）实现的。平行链的主要功能之一是能够发送启动设备的命令，并能够将用户数据存储在区块链上。

Robonomics平行链具有物联网订阅功能，允许用户在一个��的时间内向平行链发送交易，而无需支付费用。在本课程的实践部分，您将使用订阅方法。

物联网中心与Robonomics平行链之间的交互是通过[robonomics-interface](https://github.com/Multi-Agent-io/Robonomics-interface)实现的 — 专门用于与Robonomics进行便捷编程的Python库。

4. **[星际文件系统](https://ipfs.tech/)（IPFS），用于在分布式文件系统中存储和共享数据的点对点软件**。

IPFS是必需的，以避免在区块链上存储大文件（因为这将太昂贵），而是我们可以存储文件的IPFS哈希，这些哈希充当对这些文件的链接。

## 智能设备的协议
您将使用两种主要协议来控制智能设备:

1. **[Zigbee](https://csa-iot.org/all-solutions/zigbee/), 一种无线通信协议。**

它非常常用于连接智能设备。它设计用于低功耗、易用性和配置的灵活性，并支持自组织和自恢复的网状网络拓扑结构。市场上有数千种支持Zigbee的设备，这使其非常适合构建智能家居解决方案。要控制Zigbee设备，您需要一个网关，用于在Zigbee网络和另一个网络（例如Wi-Fi）之间传输数据。

2. **[消息队列遥测传输](https://mqtt.org/) (MQTT), 一种设计用于控制物联网应用的发布-订阅协议。**

该协议轻量级，需要最少的资源，并确保消息传递的可靠性。该协议设计用于低带宽、高延迟、不可靠的网络，这使其成为操作大量传感器消息的绝佳选择。MQTT需要一个运行MQTT代理的服务器（在我们的情况下，它将与我们的树莓派一起工作）。代理接收来自MQTT客户端的所有消息，然后将消息路由到适当的订阅客户端。

## Zigbee连接选项
您将探索两种将设备连接到Home Assistant与Robonomics的场景。

1. 第一个场景不使用单独的Zigbee网关来连接设备。而是使用[Zigbee适配器](https://www.zigbee2mqtt.io/guide/adapters/)和[Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/adapters/)软件的组合。

<LessonImages figure figureCaption="Architectural scheme of the scenario with Zigbee adapter" src="smart-house-course/lesson-1-1.png" alt="Architectural scheme of the scenario with Zigbee adapter"/>

适配器（例如JetHome USB JetStick Z2）连接到树莓派，并充当计算机和Zigbee无线通信之间的接口。Zigbee2MQTT是一种允许将Zigbee连接到MQTT网络的软件。它从Zigbee网络接收消息，并将其转换为易于使用和结构良好的MQTT消息。

2. 在第二个场景中，设备使用基于ESP32微控制器的[SLS网关](https://github.com/slsys/Gateway)连接。为了方便使用，Robonomics开发了我们的[自己的修改版本](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01)的网关。

<LessonImages figure figureCaption="Architectural scheme of the scenario with SLS Gateway" src="smart-house-course/lesson-1-2.png" alt="Architectural scheme of the scenario with SLS Gateway"/>

SLS网关充当Zigbee协议消息的协调器，并允许使用大多数可用的Zigbee设备。与Home Assistant集成时，使用MQTT协议。

## 远程控制

智能家居的远程控制是通过[Robonomics去中心化应用](https://dapp.robonomics.network/)（dapp）执行的，该应用以用户友好的方式提供对平行链功能的访问。用户数据的安全性和不可变性一方面通过将加密数据发送到IPFS（只能由用户的密钥解密），另一方面通过将此数据的IPFS哈希放置在区块链上来确保。

</List>



