---
title: "Lesson #3, MQTT Broker Setup and Hass Init"
description: home assistant course
lessonNumber: 3
metaOptions: [Learn, Sovereign Smart Home with Robonomics and Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Intro

After finishing the configuration of Raspberry Pi, the next step is to install MQTT Broker on the Raspberry Pi. As mentioned above, the Broker is responsible for message routing between different MQTT clients. You will install and configure Eclipse Mosquitto, an open source MQTT broker.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

In addition, you will complete the Home Assistant setup and add MQTT integration to it.

## Instructions

<List type="numbers">

<li>


Mosquitto Broker Installation

<List>
<li>

Install [Mosquitto Broker](https://mosquitto.org/) on your Raspberry Pi:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

Enter YOUR_USERNAME (use any you want) and password (you will be asked to enter the password after the command):

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

Edit configuration file:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

Add the following to the file:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

Save the file  and restart the service:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

Finally, check the broker status:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

You should see something like this:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Setting up Home Assistant and MQTT

<List>

<li>

Open the web browser and go to <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. (with same IP address which you found in the previous lesson). Be aware, that Raspberry Pi address may change in time due router settings. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.live/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

On the first page, enter any name, username, password you want and click on  "<code>CREATE ACCOUNT</code>"
</li>

<li>

Next, enter a name for your home and set your location and unit system. Click "<code>DETECT</code>" to find your location and set your time zone and unit system based on that location. If you’d rather not send your location, you can set these values manually.

</li>

<li>

On the next screen, Home Assistant will show any devices that it has discovered on your network. Don’t worry if you see fewer items than what is shown below; you can always manually add devices later. For now, just click <code>FINISH</code> and you will be on the main Home Assistant screen.

</li>

<li>

Now we need to install a MQTT integration. Go to <code>Settings</code> -> <code>Devices & Services.</code>

<LessonVideo controls :videos="[{src: 'https://crustipfs.live/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

Press <code>ADD INTEGRATION</code> button at the right bottom corner. In the opened window find <code>MQTT</code>.

</li>

<li>

Select MQTT and set up your broker address — <code>localhost</code> port — <code>1883</code> and your username and password (the same which you created earlier for Mosquitto Broker) then press  <code>SUBMIT</code>.
</li>

</List>
</li>
</List>
