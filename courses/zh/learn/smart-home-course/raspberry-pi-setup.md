---
title: "第2课，树莓派设置"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: 家庭助手课程
lessonNumber: 2
metaOptions: [学习，Robonomics和Home Assistant的主权智能家居]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## 介绍

在这节课中，您将准备好您的树莓派成为一个物联网中心。您将按顺序安装和配置所有必要的组件，即:

<List>

- Ubuntu Linux发行版作为树莓派的服务器操作系统;
- Home Assistant软件包;
- IPFS软件包;
- robonomics-interface库。

</List>

## 说明

<List type="numbers">

<li>

准备和配置树莓派

<List>

  <li>

  下载[64位Ubuntu Server 22.04 LTS](https://ubuntu.com/download/raspberry-pi)或更新版本的树莓派镜像。
  </li>

  <li>

  在您的计算机上下载并安装一个用于写入镜像文件的工具，称为[Raspberry Pi Imager](https://www.raspberrypi.com/software/)。
  </li>

  <li>

  插入SD卡并运行Raspberry Pi Imager。选择所需的镜像（刚刚下载的）作为操作系统，并确保从存储下拉菜单中选择您的SD卡。

  </li>

  <li>

  打开设置并勾选<code>启用SSH</code>选项，使用<code>使用密码身份验证</code>参数。

  \- 在<code>设置用户名和密码</code>中为您的树莓派用户添加用户名和密码。

  \- 在<code>配置无线局域网</code>中提供您的Wi-Fi及其密码，并从下拉列表中选择您的国家。然后<code>写入</code>镜像。

  <robo-academy-note type="okay">
  确保输入您的实际Wi-Fi名称和Wi-Fi密码。
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  等待写入完成，然后将SD卡插入树莓派并打开它。它应该连接到您的Wi-Fi网络，这将需要一些时间。

  </li>
  
  <li>

  现在您需要找到设备的地址。您可以使用各种网络扫描方法来执行此操作，如[Fing App](https://www.fing.com/products)、<code>arp -a</code>命令或[nmap](https://nmap.org/download.html)。接下来将使用后者。

  使用命令安装nmap

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  然后在本地网络中找到您的地址。它应该看起来像<code>192.168.xxx.xxx</code>或<code>172.xxx.xxx.xxx.</code>请注意，nmap可以在您的本地网络上找到许多地址。

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  然后按照下面所示扫描您的网络，将地址的最后一个八位替换为<code>0</code>：

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  命令的输出将类似于这样：

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon noLines>
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:02:24 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:04:45:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-NO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B3:7D:9E:94:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
</LessonCodeWrapper>

  在这个例子中，地址是<code>192.168.43.56.</code>

  </li>

  <li>

  通过找到的IP地址通过SSH连接到树莓派。使用您之前创建的用户名和密码。
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  进一步的说明将通过SSH在树莓派本身上执行。
  
  </li>
</List>
</li>

<li>

Home Assistant安装

<List>
  <li>

  <robo-academy-note type="okay">

下面显示的一些软件版本可能已过时。有关最新版本，您可以参考[Robonomics Home Assistant镜像安装存储库](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage)。

  </robo-academy-note>

  开始之前，请更新树莓派系统并安装必要的软件包。在安装过程中，您将看到一个要求重新启动服务的窗口。只需使用<code>tab</code>按钮选择<span class="accent">ok</span>并按回车键。

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  创建用户<code>homeassistant</code>和Home Assistant Core的目录：

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  为Home Assistant Core创建一个虚拟环境并切换到它。这应该是作为<code>homeassistant</code>���户完成的，因此在执行命令后，您的用户将看起来像<code>(homeassistant) homeassistant@ubuntu</code>：

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  结果，您将在括号中找到虚拟环境的名称：

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  安装所需的Python软件包：

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  首次启动Home Assistant Core。这将通过自动在<code class="nowb">.homeassistant</code>配置目录中创建<code>/home/homeassistant</code>目录，并安装任何基本依赖项来完成安装。
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  在初始设置正在进行时，请通过<code>http://%RASPBERRY_IP_ADDRESS%:8123</code>上的Web界面检查您的安装。在此示例中：<code>http://192.168.43.56:8123</code>。您可以从连接到本地网络的任何计算机上打开Web UI。

  等待直到您看到欢迎窗口并创建登录/密码，然后使用<code>Ctrl+C</code>停止Home Assistant。
  </li>
</List>
</li>

<li>

IPFS安装

<List>

  <li>

  对于IPFS安装，您可以使用我们的脚本下载IPFS并创建systemd服务。首先，退出Home Assistant的虚拟环境：

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  然后执行：

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Systemd服务

<List>

<li>

Systemd服务对于自动启动Home Assistant非常有用。为Home Assistant创建新服务：

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

粘贴以下内容

<LessonCodeWrapper language="bash">
[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure
User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/srv/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>

</li>

<li>

启用并启动服务：

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl enable home-assistant@homeassistant.service
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl start home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Robonomics集成

<List>

<li>

使用<code>homeassistant</code>用户登录您的Raspberry Pi：

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

源虚拟环境并安装所需的Python软件包：


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

然后转到<code>.homeassistant</code>目录，创建<code class="nowb">custom_components</code>文件夹，并在其中克隆具有集成的存储库：


<LessonCodeWrapper language="bash" noLines>
cd ~/.homeassistant
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
mkdir custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
cd custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
</LessonCodeWrapper>

</li>


<li>

之��退出homeassistant用户并重新启动服务：

<LessonCodeWrapper language="bash" noLines>
exit
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl restart home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

</List>



