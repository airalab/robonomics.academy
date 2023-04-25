---
title: "Lesson #2, Raspberry Pi Setup"
description: home assistant course
lessonNumber: 2
courseID: 3
metaOptions: [Online Courses, Sovereign Smart Home with Robonomics and Home Assistant]
---

<section class="container__reg">

## Intro

In this lesson, you'll prepare your Raspberry Pi to become an IoT hub. You will sequentially install and configure all the necessary components, namely:

<List>

- Ubuntu Linux distribution for Raspberry Pi as a server operating system;
- Home Assistant packages;
- IPFS packages;
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

  Download and install a tool for writing image files called [Raspberry Pi Imager](https://www.raspberrypi.com/software/) on your computer.
  </li>

  <li>

  Insert the SD card and run the Raspberry Pi Imager. Select the required image (which you just downloaded) as the operating system and ensure to select your SD card from the storage dropdown menu.

  </li>

  <li>

  Open settings and check the <code>Enable SSH</code> option with the <code>Use password authentication</code> parameter.

  \- In <code>Set username and password</code> add username and password for your Raspberry Pi user.

  \- In <code>Configure wireless LAN</code> provide your Wi-Fi with its password and choose your country from drop-down list. Then <code>Write</code> image.

  <robo-academy-note type="okay">
  Make sure that you input your actual Wi-Fi name and your Wi-Fi password.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.live/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  Wait until it finish the writing, then insert the SD card into the Raspberry Pi and turn it on. It should connect to your Wi-Fi network, which will take some time.

  </li>
  
  <li>

  Now you need to find an address of the device. To do it you can use various methods for network scanning, like [Fing App](https://www.fing.com/products), <code>arp -a</code> command or [nmap](https://nmap.org/download.html). The latter will be used next.

  Install nmap with a command

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  Then find your address in your local network. It should look like <code>192.168.xxx.xxx</code> or <code>172.xxx.xxx.xxx.</code> Pay attention as nmap can find many addresses on your local network.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  Then scan your network as shown below replacing the last octet of the address with <code>0</code>:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  The output of the command will be something like this:

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

  In this example the address is <code>192.168.43.56.</code>

  </li>

  <li>

  Connect to the Raspberry Pi via SSH with found IP. Use the username and password, that you created earlier.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  Further instructions are executed via SSH on the Raspberry Pi itself.
  
  </li>
</List>
</li>

<li>

Home Assistant Installation

<List>
  <li>

  <robo-academy-note type="okay">
  Some software versions shown below may be out of date. For the latest versions, you can refer to the [installation repository for Robonomics Home Assistant image](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage).
  </robo-academy-note>

  Before starting, update the Raspberry Pi system and install necessary packages.  During installation you will see a window with service restart request. Just choose <span class="accent">ok</span> with the <code>tab</code> button and press enter.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  Create user <code>homeassistant</code> and the directory for Home Assistant Core:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  Create a virtual environment for Home Assistant Core and switch to it. This should be done as the <code>homeassistant</code> user, so after executing the commands your user will look like <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  As the result, you will find a name of the virtual environment in the brackets:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  Install required Python packages:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  Start Home Assistant Core for the first time. This will complete the installation by automatically creating the <code class="nowb">.homeassistant</code> configuration directory in the <code>/home/homeassistant</code> directory, and installing any basic dependencies:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
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

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  Then execute:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Systemd Services

<List>

<li>

Systemd service is useful for automating the launch of Home Assistant. Create new service for Home Assistant:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
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
ExecStart=/srv/homeassistant/bin/hass -c "/srv/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>

</li>

<li>

Enable and start the service:

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

Robonomics Integration

<List>

<li>

Log in with <code>homeassistant</code> user on your Raspberry Pi:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

Source virtual environment and install required Python packages:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

Then go to <code>.homeassistant</code> directory, create folder <code class="nowb">custom_components</code> and clone in there the repository with the integration:


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

After that exit homeassistant user and restart service:

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

</section>




