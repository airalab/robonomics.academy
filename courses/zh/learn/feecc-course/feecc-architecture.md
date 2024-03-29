---
title: "架构"
description: 本课程主要介绍Feecc系统及其所有组件。
metaOptions: [学习，熟悉Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
在这节课中，我们将更仔细地看一下Feecc架构，并查看软件的所有组件。
</RoboAcademyText>

Feecc平台由多个服务组成，从工程师工作台的控制到提供分析。每个服务负责部署在企业环境中所需的某种功能。

## Feecc工程师工作台

工程师工作台的主要任务是组织装配工程师的工作空间。根据任务，工程师可能需要以下设备：

- IP摄像头用于组织生产过程的视频录制；
- RFID读卡器用于通过个人RFID卡在系统中进行识别；
- 条形码阅读器用于扫描产品标签；
- 标签打印机用于标记制造的产品；
- 从各种设备/站点收集数据的数字传感器。

工程师工作台软件通常包括以下容器。首先，需要在员工在组装产品时使用的计算机上安装的软件：

1. [feecc-workbench-daemon](https://github.com/Multi-Agent-io/feecc-workbench-daemon) — Feecc平台的核心，为用户提供访问所有Feecc功能和配置的功能；它还包含用于使用标签打印机打印标签和从RTSP流录制视频的轻量级服务；
2. [feecc-workbench-frontend](https://github.com/Multi-Agent-io/feecc-workbench-frontend) — 员工与Feecc平台进行交互的Web界面；
3. [feecc-hid-reader-daemon](https://github.com/Multi-Agent-io/feecc-hid-reader-daemon) — 用于发送USB外围设备事件的Python守护程序；

其次，可以安装在员工计算机和本地网络中的服务器上的软件：

1. [feecc-ipfs-gateway](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) — 用于将文件发布到IPFS，更具体地说，将文件CID发布到Robonomics Network的微服务;

下图显示了公司环境中Feecc工程师工作场所的架构。 IPFS网关（以及IPFS节点和MongoDB以集群对等体的形式）可以托管在每个员工的计算机上，这将增强系统的去中心化，但会消耗计算资源。

<LessonImages src="feecc-course/feecc_global_hardware.png" alt="an architecture of Feecc"/>

### 一个工作区支持的硬件：

#### RFID扫描仪

需要一个USB RFID扫描仪来授权工程师在现场使用他们的内部徽章。传入信息使用`feecc-hid-reader-daemon`进行处理。

#### 条形码扫描仪

USB条形码扫描仪用于通过条形码识别产品，向服务发送命令以及正确分配证书。传入信息也使用`feecc-hid-reader-daemon`进行处理。希望能够进行二维读取，但不是必需的。

#### 员工的电脑

一台小型单板计算机处理来自外部设备（条形码扫描器、RFID扫描器）的信号，向打印机发送图像打印请求，启动和停止视频录制，将数据发送到IPFS网关。它运行以下服务：`feecc-workbench-frontend`，带有标签打印机和摄像头支持的`feecc-workbench-daemon`，`feecc-hid-reader-daemon`。需要通过Wi-Fi或LAN进行互联网连接。
    
值得指出，任何计算机都可以代替单板计算机与显示器一起使用。必须在其上本地安装或通过虚拟机安装GNU/LINUX操作系统。
    
最低技术规格：
    
- CPU：Broadcom BCM2711，四核Cortex-A72（ARM v8）64位SoC @ 1.8GHz或类似；
- RAM：4GB LPDDR4-3200或类似。

#### 屏幕

员工用于输入和查看有关当前生产步骤的信息。它还为工程师提供当前阶段的提示。也可以使用其他输入设备。

#### 标签打印机

标签打印机用于打印QR码和条形码，以便在产品上进一步放置标签以进行识别和验证。与打印机的交互是通过`feecc-workbench-daemon`的相应服务进行的。在我们的情况下，我们使用XPrinter 236B打印机。

#### IP摄像头

IP摄像头用于捕捉生产过程，以便包含在产品证书中。位于产品的装配区域上方。与摄像头的交互是通过`feecc-workbench-daemon`的相应服务执行的。

所需技术规格：PoE供电，RTSP数据传输协议。在我们的情况下，我们使用海康威视HiWatch DS-i200d。

### 支持多个工作区的硬件：

#### 路由器或交换机

需要支持PoE 802.3af并在输出端口上支持PoE供电的路由器或交换机，以为IP摄像头供电并将它们连接到`feecc-workbench-daemon`服务。在我们的情况下，我们使用MikroTik hEX PoE（每个3-4个工作区一个）和电源。

#### 服务器（可选）

还可以安装一个更大的服务器，可以运行`feecc-ipfs-gateway`。它可以放置在员工工作场所的计算机之一的位置。 

最低技术规格：

- CPU：英特尔至强E-2200处理器或类似处理器；
- RAM：8GB；
- 存储：1TB硬盘；
- LAN接口：1 Gbit/s。

## Feecc Analytics

Feecc Analytics的主要任务是组织成品产品的可追溯性过程以及产品控制部门中的售前检验。

Feecc Analytics依赖以下容器:

1. [feecc-analytics-backend](https://github.com/Multi-Agent-io/feecc-analytics-backend) — 用于部署分析服务的主要软件;
2. [feecc-analytics-frontend](https://github.com/Multi-Agent-io/feecc-analytics-frontend) — 用于分析服务的前端软件;

通常情况下，它被部署在本地单个服务器上，仅用于组织内部的数据安全目的。

Feecc Analytics所需的硬件是一个本地或远程服务器（虚拟机），在该服务器上将运行Web应用程序和条形码扫描仪。每个授权的员工都可以使用用户名和密码从自己的计算机访问Web应用程序。

## Feecc验证器

Feecc验证器的主要任务是比较来自不同数据存储的数据，以验证数字产品证书的完整性。

Feecc验证器依赖于以下容器:

1. [feecc-validator-backend](https://github.com/Multi-Agent-io/feecc-validator-backend) — 一个微服务，旨在处理验证证书并获取与用户提供的单元相关联的数据，只要用户拥有其中一个数据片段;
2. [feecc-validator-frontend](https://github.com/Multi-Agent-io/feecc-validator-frontend) — 用于与验证微服务进行交互的Web界面。

作为Feecc Analytics，它可以部署在本地单个服务器上，并且需要条形码扫描仪。

<RoboAcademyText fWeight="500">
在下一课中，我们将通过在您的计算机上本地运行的小型演示来更仔细地了解Feecc系统。
</RoboAcademyText>