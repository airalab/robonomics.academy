---
title: "第7课，Robonomics传感器测量分析和存档节点"
description: 'ROBONOMICS传感器测量分析和存档节点'
lessonNumber: 7
metaOptions: [学习, 传感器连接性和分散式传感器网络]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Robonomics传感器测量分析和存档节点（RoSeMAN）是一个用于累积传感器数据以显示测量历史的服务。在本文中，您将设置该服务。

## 要求

RoSeMAN需要[MongoDB](https://www.mongodb.com/docs/manual/introduction/)数据库服务器，假设您已经拥有它。此外，您必须打开传感器连接模块的数据日志选项，如方案＃3所示。您应该在连接到传感器连接模块的Robonomics帐户上拥有免费的XRT代币。 


## 设置

<List type="numbers">

<li>

下载存储库：

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

创建配置文件：

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

打开`config.json`文件并编辑数据库路径：

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

将您的帐户的公共地址添加到`agents.json`文件。如果您想从不同的传感器连接模块收集数据，可以将多个地址添加到文件中。

</li>


<li>

安装依赖项并构建服务器：

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

启动RoSeMAN服务器：

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

Web服务器应在`http://127.0.0.1:3000`上启动。

</li>

</List>

## 安装后

将RoSeMAN部署到服务器后，您必须获取公共IP地址或服务器的URL。或者，如果您在同一台服务器上运行RoSeMAN和传感器地图，您可以使用本地IP地址。

接下来，您必须打开传感器地图配置文件，并将您的URL插入`config.json`文件的`REMOTE_PROVIDER`字段中：


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

使用`yarn build`重新构建地图并重新启动；您将能够查看测量历史。