---
title: "工程师工作台部署"
description: 本课程主要介绍Feecc系统及其所有组件。
metaOptions: [学习，熟悉Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
在本课程中，您将学习如何自行部署 Feecc Engineer Workbench 的必要组件。
</RoboAcademyText>

其中包括:

- 工作台守护程序
- 工作台前端
- IPFS网关
- HID读卡器守护程序

所有组件均使用 [Docker](https://docs.docker.com/engine/install/ubuntu/) 和 [Docker compose](https://docs.docker.com/compose/) 启动，请确保您有 他们安装了。

## 软件准备

1. Feecc组件使用[MongoDB](https://www.mongodb.com/)数据库来存储和访问数据。在使用Feecc之前，您需要以任何方便的方式部署MongoDB。以下是一些部署选项: [使用您自己的服务器](https://www.mongodb.com/try/download/community)，[Atlas云数据库](https://www.mongodb.com/atlas)（免费），[DigitalOcean云数据库](https://www.digitalocean.com/products/managed-databases-mongodb)（付费）。 
    
    无论如何，您需要获取连接到MongoDB的URI，您需要将其输入为系统所有组件的`MONGODB_URI`变量的值。
    
2. 如果您想利用可靠和透明的存储数据来自您的生产系统，您需要在Robonomics上创建一个帐户。为此，请使用以下链接提供的说明: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    您需要保存帐户的种子短语，因为稍后将在`ROBONOMICS_ACCOUNT_SEED`变量中使用。

## 工作台准备

在开始之前，将所有必要的设备连接到计算机或服务器:

- 使用USB连接的标签打印机
- 使用USB连接的RFID / 条形码阅读器
- 通过PoE路由器/网络交换机连接的IP摄像头
- 使用USB和HDMI/VGA连接的显示器与键盘和鼠标或触摸屏（可选）

## 启动HID读卡器守护程序

1. 克隆存储库：

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. 启动守护程序:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## 启动工作台守护程序

1. 克隆存储库：

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. 使用文件`docker-compose.yml`配置守护程序以满足您的需求。该文件包含各种环境变量:

    - MongoDB配置;
    - Robonomics配置;
    - IPFS配置;
    - 打印机参数;
    - 摄像头参数;
    - RFID / 条形码读卡器参数。
    
    完整的变量列表可在守护程序[存储库](https://github.com/Multi-Agent-io/feecc-workbench-daemon)中找到。以下参数是必需的:
    
    - `MONGODB_URI`: MongoDB的连接URI；
    - `MONGODB_DB_NAME`: MongoDB的数据库名称；
    - `WORKBENCH_NUMBER`: 员工的工作台编号。

3. 启动守护程序:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. 检查其功能性。转到浏览器并打开`http://127.0.0.1:5000/docs`页面，该页面应包含系统的REST API接口文档。如果页面不可用，则服务器未正确启动。检查容器内的日志以查找错误，修复它们并重复构建和运行步骤。

## 启动IPFS网关

1. 克隆存储库：

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. 使用文件`docker-compose.yml`配置微服务以满足您的需求。 该文件包含与MongoDB、Robonomics和Pinata连接的环境变量。 完整的变量列表可在网关存储库中找到（https://github.com/Multi-Agent-io/feecc-ipfs-gateway）。

3. 启动微服务：

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## 启动工作台前端

1. 克隆存储库：

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. 转到`configs`目录，并使用文件`config.json`为您的需求配置前端服务。 以下参数特别重要：
    - `socket` — 在此处插入工作台守护程序地址；
    - `interface_language` — 界面语言，可用选项为`en`和`ru`；
    - `dev_show_reducers` — 启用/禁用开发者模式；
    - `pulling_period` — 从后端接收数据的时间间隔（以毫秒为单位）；

3. 启动前端容器：

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. 检查其功能。 转到浏览器并打开`http://localhost:3000`页面，您应该看到一个授权页面。

<RoboAcademyText fWeight="500">
在下一课中，我们将介绍Feecc Analytics服务。
</RoboAcademyText>