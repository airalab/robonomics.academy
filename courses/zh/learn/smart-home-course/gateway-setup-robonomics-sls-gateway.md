---
title: "第4b课，网关设置：Robonomics SLS网关"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: 家庭助手课程
lessonNumber: 5
metaOptions: [学习，Robonomics和Home Assistant的主权智能家居]
defaultName:  Sovereign Smart Home with Robonomics and Home Assistant
---

## 这是关于什么

这是一个用于连接设备的Robonomics SLS网关的场景设置。 Robonomics从[Smart Logic System](https://github.com/slsys/Gateway)项目开发的网关中汲取了设计灵感，并修改了部分电路。 您可以从Robonomics订购网关，也可以使用我们的[蓝图](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01)自行构建网关。

您将为网关安装所需的软件，对其进行配置并将其连接到 Home Assistant。

<robo-academy-note type="note" title="Attention">
  SmartRF Flash Programmer，用于更新固件的程序，需要Windows操作系统。
</robo-academy-note>

## 说明

<List type="numbers">

<li>

安装Zigbee微控制器固件

<List>

<li>

首先，您需要刷写网关的CC2652P微控制器。 在SLS网关底部设置<code>ON</code>开关<code>2</code>，<code>4</code>和<code>7</code>，其他必须设置为<code>OFF</code>。

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

使用USB-A<>USB-C电缆将网关连接到计算机。

<robo-academy-note type="warning" title="WARNING">
  请仅使用USB-A<>USB-C类型的电缆，因为目前网关不支持USB-C<>USB-C类型。
</robo-academy-note>

</li>

<li>

CC2652固件需要来自德州仪器的SmartRF Flash Programmer v2。 从[官方网站](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2)下载并安装。

</li>

<li>

从[GitHub存储库](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator)下载CC2652P微控制器的固件。

</li>

<li>

运行程序。 在<code>Connected device</code>窗口中选择CC2652P微控制器，设置固件路径，如图中设置标志为<code>Erase，Program，Verify</code>，然后按<code>Start</code>。

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

刷写成功后，您将看到<code>Success!</code>消息。 现在您可以拔掉USB电缆。

</li>
</List>
</li>

<li>

安装微控制器固件

<List>

<li>

现在您需要为软件安装设置网关。 我们建议您通过将网关直接连接到您的Raspberry Pi并在该设备上输入以下所有命令来更新固件。 

</li>

<li>

在SLS网关底部设置<code>ON</code>开关<code>1</code>和<code>3</code>，其他必须设置为<code>OFF</code>。 然后通过USB Type-C端口将网关连接到您的Raspberry Pi。

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

通过SSH连接到Raspberry Pi。

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

克隆具有固件的存储库：

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

要刷写SLS网关，您需要运行<code>Clear</code>和<code>Flash_16mb</code>脚本：

<LessonCodeWrapper language="bash" noLines>
cd robonomics-hass-utils/esp_firmware/linux
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Flash_16mb.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Flash_16mb.sh
</LessonCodeWrapper>
</li>

<li class="no-bullet">

\- **故障排除**

如果您在更新网关固件时遇到问题，您需要采取额外步骤：

<List>

<li>

确保已安装pySerial模块：

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

为用户提供访问USB端口的权限：

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

在某些情况下，需要更改脚本中的带宽设置以更新固件。使用nano编辑器打开<code>Flash_16mb.sh</code>脚本，并将波特率参数从<code>921600</code>更改为较小的值（例如<code>115200</code>）。
</li>
</List>
</li>

<li class="no-bullet">

\- **额外**

我们还提供使用其他操作系统（macOS和Windows）更新固件的选项。您可以在一个文件夹中找到相应的脚本，其名称取决于您的操作系统。

</li>
</List>
</li>

<li>

设置网关

<List>

<li>

将网关背面的开关设置为新位置。开关<code>5</code>（RX Zigbee到ESP）和<code>6</code>（TX Zigbee到ESP）必须处于<code>ON</code>位置，其他开关必须处于<code>OFF</code>位置。


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

连接Type-C电源线。中心的指示灯应该变成绿色。

</li>

<li>

在第一次启动时，网关将开始共享Wi-Fi，SSID为<code>zgw****</code>。连接到这个网络。请记住信号可能相当弱，所以最好将SLS网关靠近您的计算机。

如果连接成功，Web界面将打开（或者您可以在192.168.1.1地址找到它）。

</li>

<li>

转到Wi-Fi页面，通过输入用户/密码并按下<code>保存</code>按钮来插入您的Wi-Fi凭据。然后按下<code>重新启动</code>按钮。网关将重新启动并连接���您的WI-Fi网络。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

查找SLS网关的本地IP以访问Web界面。为此，您可以使用[Fing](https://www.fing.com/products)应用程序或在终端中使用<code>arp -a</code>或Nmap： 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

其中<code class="bold">xxx</code>是您在本地网络中的IP地址。网关名称应该是这样的：<code>zgw****</code>。通过将网关IP粘贴到浏览器中打开网关的Web界面。
</li>

<li>

去<code>设置</code> -> <code>硬件</code>，确保设置看起来像图片上的样子。如有必要，请更正设置并点击<code>保存</code>按钮：

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

具有必要数值的表格：


| Field        	         | **Value**          |                                                                     	
|------------------------|--------------------|
| Zigbee module          | TI                 |
| Zigbee UART RX         | 22                 |
| Zigbee UART TX         | 23                 |
| Zigbee RST Pin         | 18                 |
| Zigbee BSL Pin         | 19                 |
| Button Mode            | 33 (pullUP - true) |
| Number addressable leds| 0                  |
| Led Red (or addr)      | 21                 |
| Led Green              | 5                  |
| Led Blue               | 27                 |
| I2C SDA                | 255                |
| I2C SCL                | 255                |

</li>

<li>

然后重新启动网关。在右上角选择<code>操作</code> -> <code>重新启动系统</code>。确保网关在Zigbee信息窗口中与CC2652P微控制器正常工作。设备状态应为<code>正常</code>。

</li>

<li>

重新启动网关。在右上角选择<code>操作</code> -> <code>重新启动</code>系统。

</li>

<li>

自动配置将设备添加到Home Assistant。转到<code>Zigbee</code> -> <code>配置</code>，然后选择<code>Home Assistant MQTT发现</code>和<code>清除状态</code>。保存更改，然后再次重新启动SLS网关。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **额外**:

如果您家中已经有一个活动的SLS网关，并且现在正在配置另一个，则它们将相互冲突。要解决此问题，您需要在新设备上更改频道。

为此，请转到<code>Zigbee</code> -> <code>配置</code>，并将频道更改为另一个（例如频道15）。

</li>

<li>

通过转到<code>Zigbee</code> -> <code>加入</code>来连接您的设备。将您的传感器置于配对模式，将设备切换到连接模式的最常见方法是按住其电源按钮或将其开关打开/关闭5��。按下<code>启用加入</code>按钮开始搜索Zigbee设备。您将看到活动传感器。

</li>
</List>
</li>

<li>

将SLS网关连接到Home Assistant

<List>

<li>

您需要在SLS网关上配置MQTT。返回到您的SLS网关Web界面，然后转到<code>设置</code> -> <code>链接</code> -> <code>MQTT设置</code>。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

添加您的代理地址（本地网络中带有Home Assistant的树莓派的地址，您可以使用[Fing](https://www.fing.com/products)应用程序或在RPi上使用<code>ip -a</code>命令找到它），端口（默认为1883），您的代理用户名和密码（您之前创建的），以及主题名称（您可以选择任何）。此外，本地树莓派IP地址必须是静态的。

不要忘记点击<code>启用</code>和<code>保留状态</code>。

</li>

<li>

保存更改。现在设备将自动显示在Home Assistant中。

</li>
</List>

</li>

<li>

连接设备 

<List>

<li>

通过转到<code>Zigbee</code> -> <code>加入</code>来连接您的设备。将您的传感器置于配对模式，将设备切换到连接模式的最常见方法是按住其电源按钮或将其开关打开/关闭5次。

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

按下启用加入按钮开始搜索Zigbee设备。您将看到活动传感器。

</li>

</List>
</li>

</List>