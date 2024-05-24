---
title: "第3课，设置和连接传感器"
description: '设置和连接传感器'
lessonNumber: 3
metaOptions: [学习, 传感器连接性和分散式传感器网络]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

我们的传感器使用 Robonomics 固件，这是sensor.community固件的扩展版本，添加了一些传感器并更改了数据发送方案。 源代码可以在[链接处]找到。(https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

如果您有准备好使用的Robonomics板，可以转到“连接”部分。

## 要求

**对于Linux：**

<List type="numbers">

<li>

将用户添加到`dialout`组（对于Ubuntu）以访问USB端口：

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>重新启动计算机。</li>

<li>

从[发布版](https://github.com/airalab/sensors-connectivity/releases)下载Robonomics `airrohr-flasher`可执行文件。

</li>

<li>

更改文件的权限并执行它：

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**对于Windows：**

<List type="numbers">

<li>

为USB2serial安装驱动程序（在Windows 10中应该会自动启动）- NodeMCU v3（CH340）的驱动程序：[链接](http://www.wch.cn/downloads/file/5.html)，[备用链接](https://d.inf.re/luftdaten/CH341SER.ZIP)。 

</li>

<li>

从 [releases](https://github.com/airalab/sensors-connectivity/releases) 下载 Robonomics `airrohr-flasher` 可执行文件并运行它。

</li>

</List>

**对于MacOS：**

<List type="numbers">

<li>

安装USB2serial的驱动程序 - NodeMCU v3的驱动程序（CH340）：[链接](http://www.wch.cn/downloads/file/178.html)，[备用链接](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP)。

</li>

<li>

从 [releases](https://github.com/airalab/sensors-connectivity/releases) 下载 Robonomics `airrohr-flasher` 可执行文件并运行它。

</li>

</List>


## 设置

<List type="numbers">

<li>

将传感器连接到电脑并运行`airrohr-flasher`程序。打开程序后，您将看到以下内容（取决于您的操作系统）：

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

`Board`字段应自动填充；如果没有，请从下拉列表中选择所需的端口。

<RoboAcademyNote type="okay" title="INFO">
如果<code>airrohr-flasher</code>找不到您的板，请确保您已正确完成<b>要求</b>部分。
</RoboAcademyNote>

</li>

<li>

选择首选语言的固件，然后单击`上传`。上传固件需要一些时间。如果您以后决定更改语言或进行清晰安装（以重置配置），请转到`擦除闪存`页面并按按钮擦除传感器的闪存。

</li>

<li>

下载固件后，重新启动ESP（只需断开并重新连接USB）。

</li>

<li>

从复选框菜单中选择传感器。选择SDS011和任何其他传感器。按`保存配置`。

</li>

<li>

下载配置后，重新启动ESP（只需断开并重新连接USB）。

</li>

</List>

## 连接

<List type="numbers">

<li>

重新启动后，开发板将创建一个名为`RobonomicsSensor-xxxxxxxxx`的 Wi-Fi 网络。 从您的手机或计算机连接到它：您将看到授权窗口（如果没有，请打开浏览器并转到`192.168.4.1`）。

</li>

<li>

从列表中选择您的Wi-Fi网络（如果列表中没有，请自行填写）并填写密码字段。

</li>

<li>

编写传感器将安装的地点的坐标。

<RoboAcademyNote type="warning" title="WARNING">
然后传感器坐标将显示在一个公开用的地图上。如果您不想显示您的私人信息，请写下接近但不精确的坐标。
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

单击`保存配置并重新启动`。 开发板将重新启动并连接到指定的 Wi-Fi 网络。

</li>

<li>

打开 [Robonomics 传感器地图](https://sensors.robonomics.network/#/) 并找到安装传感器的位置。 几分钟后，您将能够在地图上看到传感器和数据。


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

这就是默认安装的全部内容。要进行更高级的设置（将数据发送到您自己的服务器），请阅读下一节。

## 额外的 配置

在配置之前，您需要找到您的Wi-Fi网络中传感器的地址。为此，您可以使用`airrohr-flasher`（您的计算机必须与传感器在同一网络上）。启动它，转到`Discovery`选项卡，然后按`Refresh`，等待片刻，您的传感器地址将出现。

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

双击此地址（或在浏览器中输入），您将进入传感器菜单：

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

现在您可以开始自定义您的配置。


## 自定义API

您还可以设置将数据发送到您自己的服务器。要做到这一点，在`APIs`选项卡中点击`Send to own API`，并指定服务器地址和端口（传感器连接性为`65`）：

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

单击`Save and restart`以保存设置。