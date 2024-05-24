---
title: "第4课，传感器连接模块"
description: '传感器连接模块'
lessonNumber: 4
metaOptions: [学习, 传感器连接性和分散式传感器网络]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

在接下来的文章中，您将更多地了解传感器连接模块。之后，您可以加入托管我们的去中心化传感器网络或创建您自己的传感器地图。

## 关于传感器连接

去中心化传感器网络使用`sensors-connectivity` Python模块（[源代码](https://github.com/airalab/sensors-connectivity)）。该模块允许任何用户启动自己的服务器以接收来自传感器的数据并进一步处理。目前，开发人员已经启动了几个这样的服务器，任何传感器都可以向它们发送数据。运行多个服务器可以避免在其中一个出现问题时出现数据丢失，因为传感器将从一个不工作的服务器切换到一个工作的服务器。基本上，您可以将传感器连接模块视为一个具有一个输入（传感器数据）和多个输出的黑匣子。

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

传感器连接模块是一组站点（station_1，station_2 ... station_n），通过HTTP协议接收来自传感器等各种数据。它还可以是通过USB或任何其他数据源连接到计算机的传感器。模块处理从站点接收的数据，并将其传递给饲料机（feeder_1，feeder_2 ... feeder_n）。饲料机将处理后的数据发送用户；在我们的情况下，数据被发送到去中心化IPFS通道。 

[去中心化传感器网络](https://sensors.robonomics.network/#/)的地图是在计算机上运行的去中心化应用程序（dapp）。它从IPFS通道读取数据并在地图上显示。收集来自传感器的数据的服务器与用户看到的地图之间没有直接连接；数据通过IPFS pubsub在它们之间传输，从而减少了服务器的负载。 

此外，不时会将存储在IPFS中的最近一段时间的数据文件，并将该数据的哈希记录在区块链上。由于IPFS是一个内容寻址网络，将数据存储在其中可以确保任何数据更改不会被忽视，因为所需文件的地址包含其内容的哈希，该哈希将随着任何数据更改而更改。区块链用于将哈希传递给用户，用户可以使用它从IPFS获取所需的数据（当您请求地图的历史记录时会发生这种情况）。

## Linux 的模块设置

**先决条件和安装**

<List type="numbers">

<li>

要构建`sensors-connectivity`模块，必须安装IPFS守护程序，版本不得大于`0.8.x`。假设您在Linux上工作，请执行以下操作（对于版本`0.8.0`）：

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

使用开发工具`python3-dev`和Python包安装程序`pip`安装软件包:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

将模块安装为PyPI软件包:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

如果看到以下警告: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

运行下一个命令:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## 配置

<List type="numbers">

<li>

在任何位置创建用于配置文件和数据库文件的目录。该数据库将保存传感器数据的IPFS哈希、时间戳和服务状态:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
数据库文件的名称可以是任何名称，但扩展名必须是 <code>.db</code>
</RoboAcademyNote>

</li>


<li>

在相同目录中创建配置文件:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

将以下内容复制粘贴到文件中，并在`db_path`字段中插入数据库文件的完整路径。这个配置就足够获取传感器数据并通过HTTP发送到Robonomics地图:

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

## 启动


<List type="numbers">

<li>

启动IPFS守护程序:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

设置配置后，在另一个终端中使用配置文件路径运行服务:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

您将在终端中看到日志（此外，它们将被添加到“~/.logs”中）。 例子：

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

## 安装后

要将您的`sensors-connectivity`模块连接到我们的分散式传感器网络并在地图上查看您的数据，您必须将您的IPFS ID发送到[vm@multi-agent.io](mailto:vm@multi-agent.io)或[ping@airalab.org](mailto:ping@airalab.org)。我们将把您的ID添加到访问控制列表。

在运行IPFS守护程序后，使用以下命令获取您的IPFS`ID`：

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>