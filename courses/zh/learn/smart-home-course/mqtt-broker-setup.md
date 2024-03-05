---
title: "第3课，MQTT Broker设置和Hass初始化"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: 家庭助手课程
lessonNumber: 3
metaOptions: [学习，Robonomics和Home Assistant的主权智能家居]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## 介绍

完成树莓派的配置后，下一步是在树莓派上安装MQTT Broker。如上所述，Broker负责在不同的MQTT客户端之间进行消息路由。您将安装和配置Eclipse Mosquitto，一个开源的MQTT Broker。

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

此外，您将完成Home Assistant的设置并将MQTT集成到其中。

## 说明

<List type="numbers">

<li>


Mosquitto Broker安装

<List>
<li>

在您的树莓派上安装[Mosquitto Broker](https://mosquitto.org/)：


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

输入YOUR_USERNAME（使用任何您想要的用户名）和密码（在命令后会要求您输入密码）：

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

编辑配置文件：

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

将以下内容添加到文件中：

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

保存文件并重新启动服务：

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

最后，检查Broker状态：

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

您应该看到类似于这样的内容：

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

设置Home Assistant和MQTT

<List>

<li>

打开Web浏览器并转到<code>http://%RASPBERRY_IP_ADDRESS%:8123</code>。（使用在上一课中找到的相同IP地址）。请注意，由于路由器设置，树莓派地址可能会随时间变化。 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

在第一页上，输入任何您想要的名称、用户名、密码，并单击“<code>CREATE ACCOUNT</code>”
</li>

<li>

接下来，输入您的家庭名称并设置您的位置和单位制度。单击“<code>DETECT</code>”以查找您的位置，并根据该位置设置您的时区和单位制度。如果您不想发送您的位置，您可以手动设置这些值。

</li>

<li>

在下一个屏幕上，Home Assistant 将显示在您的网络上发现的任何设备。如果您看到的项目少于下面显示的项目，不要担心；您随时可以稍后手动添加设备。现在，只需单击<code>FINISH</code>，您将进入主 Home Assistant 屏幕。

</li>

<li>

现在我们需要安装 MQTT 集成。转到<code>设置</code> -> <code>设备和服务</code>。

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

在右下角按<code>ADD INTEGRATION</code>按钮。在打开的窗口中找到<code>MQTT</code>。

</li>

<li>

选择 MQTT 并设置您的代理地址 — <code>localhost</code> 端口 — <code>1883</code> 以及您的用户名和密码（与您之前为 Mosquitto Broker 创建的相同），然后按<code>SUBMIT</code>。
</li>

</List>
</li>
</List>