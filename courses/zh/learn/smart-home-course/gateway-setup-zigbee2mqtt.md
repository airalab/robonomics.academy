---
title: "第4课，网关设置：Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: 家庭助手课程
lessonNumber: 4
metaOptions: [学习，Robonomics和Home Assistant的主权智能家居]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## 介绍

这是一个用于使用Zigbee适配器和Zigbee2MQTT桥接设备的场景设置。如果您有[JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en)（具有所有必要的固件），您可以简单地按照这些说明进行操作。但是，如果您有另一个适配器，您需要做的第一件事是使用Zigbee2MQTT软件刷写它。您可以在[这里](https://www.zigbee2mqtt.io/guide/adapters/)找到您设备的说明。

您还需要一个智能设备来测试其与Home Assistant的连接。


## 说明

<List type="numbers">

<li>

软件安装

<List>

  <li>
    设置Node.js运行时环境存储库并安装所需的依赖项：
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    验证已自动安装了正确版本的Node.js（v14.X、V16.x、V17.x或V18.X）和包管理器<code class="nowb">npm</code>（6.X、7.X或8.X）与Node.js一起安装：
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    为Zigbee2MQTT创建一个目录，并将您的用户设置为其所有者：
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    克隆Zigbee2MQTT存储库：
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    安装依赖项。请注意，<code>npm ci</code>可能会产生一些警告，可以忽略。
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

连接和配置适配器

<List>

<li>

将Zigbee适配器连接到Raspberry Pi。然后您需要找到stick的位置。为此，请输入以下命令：

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

输出应如下所示：

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

在此示例中，粘连连接目录是<code>ttyUSB0</code>。
</li>

<li>

在启动Zigbee2MQTT之前编辑<code>configuration.yaml</code>文件：

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

基本配置需要进行一些调整。更改以下语句：

\- <code>homeassistant：</code>更改为<code>true</code>，它将自动将传感器连接到Home Assistant；

\- 取消注释<code>mqtt</code>下的<code>user</code>和<code>password</code>，并输入来自MQTT Broker的用户名和密码（作为字符串，带引号）；

\- 将<code>serial</code> -> <code>port</code>中的端口更改为粘连连接目录。在此示例中：<code>/dev/ttyUSB0</code>。

调整后的配置文件应如下所示：

<LessonCodeWrapper language="yaml">
# Home Assistant integration (MQTT discovery)
homeassistant: true
# allow new devices to join
permit_join: true
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: 'YOUR_USERNAME'
  password: 'YOUR_PASSWORD'
# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/YOUR_PORT
</LessonCodeWrapper>


**额外的：**

如果您家中已经有一个活动的Zigbee适配器或网关，并且现在正在配置另一个stick，则它们将互相冲突。要解决此问题，您需要在新设备上更改通道。为此，请将以下字符串添加到配置文件的末尾：


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

启动Zigbee2MQTT：

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

如果成功启动，您将看到类似以下内容：

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

配对设备

<List>

<li>

现在是连接您的智能设备的时候了。将设备切换到连接模式的最常见方法是按住其电源按钮或开关5次。确保Zigbee2MQTT正在运行。

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

当设备连接时，您应该会看到一条消息，如下所示：

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

记住传感器的ID：在本例中为<code>0x00158d0003eeeacf</code>。

现在您应该在Home Assistant WebUI中看到带有ID的传感器。转到<code>设置</code> -> <code>设备和服务</code> -> <code>设备</code>进行检查：

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

添加完所有传感器后，您可以使用<code>Ctrl+C</code>停止程序。如果您不想再添加更多设备，可以再次打开配置文件，并将<code>permit_join:</code>设置为<code>false</code>。
</li>

</List>
</li>

<li>

为自动启动创建服务

<List>

<li>

现在您需要创建一个服务。创建文件：

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

将以下内容添加到此文件中，并更改<code>YOUR_RASPPI_USERNAME_HERE</code>。如果您不知道您的用户名，可以使用<code>whoami</code>命令。

<LessonCodeWrapper language="bash">
[Unit]
Description=zigbee2mqtt
After=network.target 
[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=YOUR_RASPPI_USERNAME_HERE
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>
</li>

<li>

验证配置是否有效：

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

输出应如下所示：

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

启用服务以在启动时自动启动Zigbee2MQTT：

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>