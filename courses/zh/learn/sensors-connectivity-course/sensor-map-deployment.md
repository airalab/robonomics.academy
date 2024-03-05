---
title: "第6课，传感器地图部署"
description: '传感器地图部署'
lessonNumber: 6
metaOptions: [学习, 传感器连接性和分散式传感器网络]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

在组装传感器并设置传感器连接模块之后，是时候部署个人分散式传感器地图了。


## 要求 ＆ 安装

<List type="numbers">

<li>

由于传感器地图由JavaScript驱动，首先需要安装`node`和`yarn`管理器：

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

下载并构建地图：

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

在`开发`模式下运行地图进行测试
<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

从终端转到 URL，您应该看到传感器地图。 之后，使用“Ctrl+C”停止它。

</li>

</List>

## 配置

<List type="numbers">

<li>

使用以下命令找到您的IPFS ID：

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

转到`src`文件夹并重命名文件：

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

在`agents.json`中插入您的IPFS ID：

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

打开`config.json`文件并更改配置文件的下一部分：

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


在这里，您需要插入您城市的纬度（`lat`）和经度（`lng`）。可选地，您可以设置[风向服务](https://github.com/danwild/wind-js-server)并在`WIND_PROVIDER`字段中提供URL。

</li>

</List>


## 构建

<List type="numbers">

<li>

运行以下命令构建发布文件：

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

它将创建带有静态网站所有组件的`dist`目录。

</li>

<li>

要检查一切是否正确，请转到`dist`目录并打开`index.html`文件。一段时间后，来自传感器连接模块的传感器数据将出现在地图上。

</li>

</List>

