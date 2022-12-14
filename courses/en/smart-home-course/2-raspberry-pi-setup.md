---
title: "Lesson #2, Raspberry Pi Setup"
course: smart-home-course
description: home assistant course
lessonNumber: 2
courseID: 3
---

<section class="container__narrow">

## Intro

In this lesson, you'll prepare your Raspberry Pi to become an IoT hub. You will sequentially install and configure all the necessary components, namely:

<List>

- Ubuntu Linux distribution for Raspberry Pi as a server operating system;
- Home Assistant packages;
- IPFS packages;
- Zigbee2MQTT bridge (for Zigbee adapter scenario);
- robonomics-interface library.

</List>
</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

Preparing and Configuring the Raspberry Pi

<List>

  <li>

  Download the image of [64-bit Ubuntu Server 22.04 LTS](https://ubuntu.com/download/raspberry-pi) or newer for Raspberry Pi.
  </li>

  <li>

  Download and install a tool for writing image files called [balenaEtcher](https://www.balena.io/etcher/) on your computer.
  </li>

  <li>

  Then, insert the SD card and run the balenaEtcher Imager program. Select the required image (which you just downloaded) as the operating system and ensure to select your SD card from the storage dropdown, and then select <code>flash</code> image.


  <LessonImages src="smart-house-course/lesson-2-1.jpeg" alt="balena"/>
  </li>
  <li>


  Open the SD card's storage and navigate inside the root folder of the card. The name of the folder should be something similar to <code class="nowb">system-boot</code>


  Find the file named <code>network-config</code> and open it in a text editor. Copy the text below, paste it into the file and insert your **Wi-Fi name** SSID and **Wi-Fi password** (with quote marks).


<LessonCodeWrapper language="json">
version: 2
ethernets: 
  eth0:
    dhcp4: true
    optional: true
wifis:
  wlan0:
    dhcp4: true
    optional: true
    access-points:
      "YOUR_WIFI_NAME":
        password: "YOUR_WIFI_PASSWORD"
</LessonCodeWrapper>

  *Make sure that you input your actual Wi-Fi name and your Wi-Fi password.*

  Save the file, insert the SD card into the Raspberry Pi and turn it on. It should connect to your Wi-Fi network, which will take some time. It should be noted that making changes to this file later will not change the connection, and the config is valid only on the first launch of the device. If later you need to change settings, please edit the configuration file in  <code>/etc/netplan/</code> folder

  </li>
  
  <li>

  Now you need to find an address of the device. To do it you can use various methods for network scanning, like [Fing App](https://www.fing.com/products), <code>arp -a</code> command or [nmap](https://nmap.org/download.html) the latter will be used next.

  Install nmap with a command

  <LessonCodeWrapper language="bash">sudo apt-get install nmap</LessonCodeWrapper>

  Then find your address in your local network. It should look like <code>192.168.xxx.xxx</code> or <code>172.xxx.xxx.xxx.</code> Pay attention as nmap can find many addresses on your local network.

  <LessonCodeWrapper language="bash">ip a</LessonCodeWrapper>

  Then scan your network as shown below replacing the last octet of the address with <code>0:</code>

  <LessonCodeWrapper language="bash">sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  The output of the command will be something like this:

<LessonCodeWrapper language="bash" codeClass="big-code">
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

  Standard hostname for freshly installed Raspberry Pi should be <code class="nowb">ubuntu</code>, so in this example the address is <code>192.168.43.56.</code>

  </li>

  <li>

  Connect to the Raspberry Pi via SSH with found IP. User is <code class="nowb">"ubuntu"</code>, the password is <code class="bold">"ubuntu"</code>.
  
  <LessonCodeWrapper language="bash">ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  The system will ask you to change the password to a more secure one, make sure you don't lose it.Further instructions are executed via SSH on the Raspberry Pi itself.
  
  </li>
</List>
</li>

<li>

Home Assistant Installation

<List>
  <li>

  Before starting, update the Raspberry Pi system and install necessary packages.  During installation you will see a window with service restart request. Just choose <span class="accent">ok</span> with the <code>tab</code> button and press enter.

<LessonCodeWrapper language="bash" codeClass="long-code">sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y python3 python3-dev python3-venv python3-pip libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion
</LessonCodeWrapper>

  </li>

  <li>
  
  Create user <code>homeassistant</code> and the directory for Home Assistant Core:

<LessonCodeWrapper language="bash" codeClass="long-code">
sudo useradd -rm homeassistant
sudo mkdir /srv/homeassistant
sudo chown homeassistant:homeassistant /srv/homeassistant
</LessonCodeWrapper>
  
  </li>

  <li>

  Create a virtual environment for Home Assistant Core and switch to it. This should be done as the <code>homeassistant</code> user, so after executing the commands your user will look like <code>(homeassistant) homeassistant@ubuntu</code>:

<LessonCodeWrapper language="bash">
sudo -u homeassistant -H -s
cd /srv/homeassistant
python3 -m venv .
source bin/activate
</LessonCodeWrapper>

  As the result, you will find a name of the virtual environment in the brackets:

<LessonCodeWrapper language="bash" codeClass="big-code">
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  Install required Python packages:

<LessonCodeWrapper language="bash" >
python3 -m pip install wheel~=0.37
pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11
pip3 install homeassistant==2022.8.2
</LessonCodeWrapper>
  
  </li>

  <li>
  
  Start Home Assistant Core for the first time. This will complete the installation by automatically creating the <code class="nowb">.homeassistant</code> configuration directory in the <code>/home/homeassistant</code> directory, and installing any basic dependencies:
  
<LessonCodeWrapper language="bash">hass</LessonCodeWrapper>
  
  </li>

  <li>

  While the initial setup is in progress, сheck your installation via the web interface on <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. In this example: <code>http://192.168.43.56:8123</code>. You can open a web UI from any computer connected to your local network.

  Wait until you will get the welcome windows with login / password creation and then stop Home Assistant with <code>Ctrl+C</code>.
  </li>
</List>
</li>

<li>

IPFS Installation

<List>

  <li>

  For IPFS installation you can use our script to download IPFS and create systemd service with it. First, exit the virtual environment for Home Assistant:

<LessonCodeWrapper language="bash">exit</LessonCodeWrapper>

  Then execute:

<LessonCodeWrapper language="bash">
cd ~
wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh
sudo chmod +x install_ipfs.sh
./install_ipfs.sh
</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Zigbee2MQTT Setup (Only for Zigbee Adapter)

<List>

  <li>

Set up Node.js runtime environment repository and install it with required dependencies:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs git make g++ gcc
</LessonCodeWrapper>

  </li>

  <li>

Verify that the correct versions of Node.js (v14.X, V16.x, V17.x or V18.X) and package manager <code class="nowb">npm</code> (6.X, 7.X or 8.X) automatically installed with Node.js, have been installed:


<LessonCodeWrapper language="bash" >
node --version
npm --version
</LessonCodeWrapper>
  
  </li>

  <li>


Create a directory for Zigbee2MQTT and set your user as owner of it:

<LessonCodeWrapper language="bash" >
sudo mkdir /opt/zigbee2mqtt
sudo chown -R ${USER}: /opt/zigbee2mqtt
</LessonCodeWrapper>
  
  </li>

  <li>
  

Clone Zigbee2MQTT repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone --depth 1 --branch 1.28.0 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
</LessonCodeWrapper>

  </li>

  <li>
  

Install dependencies (as user <code>pi</code>). Note that the <code>npm ci</code> could produce some warning which can be ignored.

<LessonCodeWrapper language="bash">
cd /opt/zigbee2mqtt
npm ci
</LessonCodeWrapper>
  
  </li>
</List>
</li>

<li>

Systemd Services

<List>

<li>

Systemd service is useful for automating the launch of Home Assistant. Create new service for Home Assistant:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

Paste the following

<LessonCodeWrapper language="bash">
[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure
User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/home/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>

</li>

<li>

Enable and start the service:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo systemctl enable home-assistant@homeassistant.service
sudo systemctl start home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Robonomics Integration

<List>

<li>

Log in with <code>homeassistant</code> user on your Raspberry Pi:

<LessonCodeWrapper language="bash">
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

Source virtual environment and install required Python packages:


<LessonCodeWrapper language="bash">
source /srv/homeassistant/bin/activate
pip install robonomics-interface~=1.3
</LessonCodeWrapper>

</li>

<li>

Then go to <code>.homeassistant</code> directory, create folder <code class="nowb">custom_components</code> and clone in there the repository with the integration:


<LessonCodeWrapper language="bash" codeClass="big-code">
cd /home/homeassistant/.homeassistant
mkdir custom_components
cd custom_components
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
</LessonCodeWrapper>

</li>


<li>

After that exit homeassistant user and restart service:

<LessonCodeWrapper language="bash" codeClass="big-code">
exit
sudo systemctl restart home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

</List>

</section>




