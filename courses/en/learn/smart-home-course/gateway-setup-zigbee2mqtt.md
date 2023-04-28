---
title: "Lesson #4a, Gateway Setup: Zigbee2MQTT"
description: home assistant course
lessonNumber: 4
courseID: 3
metaOptions: [Learn, Sovereign Smart Home with Robonomics and Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Intro

This is a scenario setup for connecting devices using the Zigbee adapter and the Zigbee2MQTT bridge. If you have the [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) (which has all of the necessary firmware), you can simply proceed with these instructions. However, if you have another adapter, the first thing you need to do is to flash it with Zigbee2MQTT software. You can find instructions for your device [here](https://www.zigbee2mqtt.io/guide/adapters/).

You will also need a smart device to test its connection to Home Assistant.


## Instructions

<List type="numbers">

<li>

Software Install

<List>

  <li>
    Set up Node.js runtime environment repository and install it with required dependencies:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Verify that the correct versions of Node.js (v14.X, V16.x, V17.x or V18.X) and package manager <code class="nowb">npm</code> (6.X, 7.X or 8.X) automatically installed with Node.js, have been installed:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Create a directory for Zigbee2MQTT and set your user as owner of it:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Clone Zigbee2MQTT repository:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    Install dependencies. Note that the <code>npm ci</code> could produce some warning which can be ignored.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

Connecting and Configuring the Adapter

<List>

<li>

Connect the Zigbee adapter to Raspberry Pi. Then you need to find the location of the stick. For this type in the next command:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

Output should look like:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

In this example stick connection directory is <code>ttyUSB0</code>.
</li>

<li>

Edit the <code>configuration.yaml</code> file before starting Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

The basic configuration needs a few adjustments. Change the following statements:

\- <code>homeassistant:</code> to <code>true</code>, it will automatically connect sensors to Home Assistant;

\- uncomment <code>user</code> and <code>password</code> under <code>mqtt</code> and enter your username and password (as a string, with quotes) from MQTT Broker;

\- change port in <code>serial</code> -> <code>port</code> to stick connection directory. In this example: <code>/dev/ttyUSB0</code>.

Adjusted configuration file should look like:

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


**Extra:**

If you already have an active Zigbee adapter or gateway in your home, and you are now configuring another stick, then they will conflict with each other. To solve this problem you need to change the channel on the new device. For this add the following strings to the end of configuration file:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Start Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

If started successfully, you will see something like:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Pairing Device

<List>

<li>

It's time to connect your smart device. The most common way to switch a device to connect mode is to hold its power button or switch them on/off 5 times. Make sure Zigbee2MQTT is running.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

When the device connects, you should see a message like:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

Remember the ID of the sensor: in this example — <code>0x00158d0003eeeacf</code>.

Now you should see this sensor with ID in your Home Assistant WebUI. Go to <code>Setting</code> -> <code>Devices & Services</code> -> <code>Devices</code> to check it:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

After adding all the sensors, you can stop the program with <code>Ctrl+C</code>. If you don’t want to add any more devices, you can open the configuration file again and set <code>permit_join:</code> to <code>false</code>.
</li>

</List>
</li>

<li>

Creating Service for Autostart

<List>

<li>

Now you need to create a service. Create the file:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

Add the following to this file with changing <code>YOUR_RASPPI_USERNAME_HERE</code>. If you don't know your username, use the <code>whoami</code> command.

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

Verify that the configuration works:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

Output should look like:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Enable the service to start Zigbee2MQTT automatically on boot:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>