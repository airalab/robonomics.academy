---
title: "Lesson #4b, Gateway Setup: Robonomics SLS Gateway"
description: home assistant course
lessonNumber: 5
courseID: 3
metaOptions: [Learn, Sovereign Smart Home with Robonomics and Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## What's this about

This is a scenario setup for connecting devices using the Robonomics SLS Gateway. Robonomics took design inspiration from the  gateway developed by the [Smart Logic System](https://github.com/slsys/Gateway) project and modified part of the circuitry. You can order a gateway from Robonomics or build your own using our [blueprints](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01).

You will install the required software for the gateway, configure it and connect it to Home Assistant.

<robo-academy-note type="note" title="Attention">
  SmartRF Flash Programmer, a program for updating firmware, requires Windows operating system.
</robo-academy-note>

## Instructions

<List type="numbers">

<li>

Installing Zigbee Microcontroller Firmware

<List>

<li>

First you need to flash the CC2652P microcontroller of the gateway. Set to <code>ON</code> switches <code>2</code>, <code>4</code> and <code>7</code> at the bottom part of SLS Gateway, others must be <code>OFF</code>.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

Connect the gateway to your computer with a USB-A<>USB-C cable.

<robo-academy-note type="warning" title="WARNING">
  Please use only USB-A<>USB-C types of cables, because at the moment the gateway does not support USB-C<>USB-C type.
</robo-academy-note>

</li>

<li>

The CC2652 firmware requires SmartRF Flash Programmer v2 from Texas Instrument. Download it from [the official site](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2) and then install it.

</li>

<li>

Download firmware for CC2652P microcontroller from [GitHub repository](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator).

</li>

<li>

Run the program. In the <code>Connected device</code> window select the CC2652P microcontroller, set the path to the firmware, set the flags to <code>Erase, Program, Verify</code> as in the picture and press <code>Start</code>.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

After a successful flashing, you will see a <code>Success!</code> message. Now you can unplug the USB cable.

</li>
</List>
</li>

<li>

Installing Microcontroller Firmware

<List>

<li>

Now you need to set up the gateway for software installation. We advise you to update the firmware by connecting the gateway directly to your Raspberry Pi and entering all of the following commands on that device. 

</li>

<li>

Set <code>ON</code> switches <code>1</code> and <code>3</code> at the bottom part of SLS gateway, others must be <code>OFF</code>. Then connect the gateway to your Raspberry Pi the USB type-C port.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Connect to the Raspberry Pi via SSH.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

Clone the repository with firmware:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

To flash the SLS gateway you need to run <code>Clear</code> and <code>Flash_16mb</code> scripts:

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

\- **Troubleshooting**

If you are experiencing problems updating the gateway firmware, you need to take additional steps:

<List>

<li>

Make sure you have the pySerial module installed:

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

Give your user access rights to the USB port:

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

In some cases, it is necessary to change the bandwidth setting in the script to update the firmware. Open the <code>Flash_16mb.sh</code> script with the nano editor and change the baud parameter from <code>921600</code> to a smaller value (for example, <code>115200</code>).
</li>
</List>
</li>

<li class="no-bullet">

\- **Extra**

We also provide options for updating the firmware using other operating systems (macOS and Windows). You can find corresponding scripts in a folder, which name depends on your OS.

</li>
</List>
</li>

<li>

Setting up the Gateway

<List>

<li>

Set the switches on the back of the gateway to their new  position. Switches <code>5</code> (RX Zigbee to ESP) and <code>6</code> (TX Zigbee to ESP) must be in the <code>ON</code> position, the others must be <code>OFF</code>.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Connect the type-C power cable. The indicator light in the center should turn green.

</li>

<li>

On the first startup, the gateway will start sharing Wi-Fi with the SSID <code>zgw****</code>. Connect to this network. Keep in mind that the signal may be quite weak, so it is better to keep the SLS gateway closer to your computer.

If the connection is successful, the web interface will open (or you can find it on 192.168.1.1 address).

</li>

<li>

Go to the Wi-Fi page and insert your Wi-Fi credentials by entering the user / pass and press <code>Save</code> button. After that press the <code>Reboot</code> button. The gateway will restart and connect to your WI-Fi network.

<LessonVideo  :videos="[{src: 'https://crustipfs.live/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

Find the local IP of the SLS gateway to access the web interface. For that you can use the [Fing](https://www.fing.com/products) app or <code>arp -a</code> in your terminal or Nmap: 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

where <code class="bold">xxx</code> is your IP address in the local network. The gateway name should look like this: <code>zgw****</code>. Open the web interface of the gateway by pasting the gateway IP into a browser.
</li>

<li>

Go to <code>Setting</code> -> <code>Hardware</code> and make sure that the settings look like on the image. Correct the settings if necessary and click <code>Save</code> button:

<LessonVideo  :videos="[{src: 'https://crustipfs.live/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

The table with required values:


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

Then reboot the gateway. Choose <code>Actions</code> -> <code>Reboot system</code> at the right top corner. Make sure that the gateway works properly with the CC2652P microcontroller in the Zigbee info window. DeviceState should be <code>OK</code>.

</li>

<li>

Reboot the gateway. Choose <code>Actions</code> -> <code>Reboot</code> system at the right top corner.

</li>

<li>

Configure automatically adding devices to Home Assistant. Go to <code>Zigbee</code> -> <code>Config</code> then choose <code>Home Assistant MQTT Discovery</code> and <code>Clear States</code>. Save changes and again reboot SLS gateway.

<LessonVideo  :videos="[{src: 'https://crustipfs.live/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **Extra**:

If you already have an active SLS gateway in your home, and you are now configuring another one, then they will conflict with each other. To solve this problem you need to change the channel on the new device.

To do this, go to  <code>Zigbee</code> -> <code>Config</code> and change the channel to another one (e.g. channel 15).

</li>

<li>

Connect your devices by going to <code>Zigbee</code> -> <code>Join</code>. Put your sensors in pairing mode, the most common way to switch a device to connect mode is to hold its power button or switch them on/off for 5 times. Press the <code>Enable Join</code> button to start searching Zigbee devices. You will see active sensors.

</li>
</List>
</li>

<li>

Connecting SLS Gateway to Home Assistant

<List>

<li>

You need to configure MQTT on SLS Gateway. Come back to your SLS Gateway web interface and go to <code>Settings</code> -> <code>Link</code> -> <code>MQTT Setup</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.live/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

Add your broker address (address of the Raspberry Pi with Home Assistant in local network, you can find it with [Fing](https://www.fing.com/products) app or using <code>ip -a</code> command on your RPi), port (default is 1883) your broker username and password (which you have created earlier) and the topic name (you can choose any). Also, the local Raspberry Pi IP address must be static.

Don't forget to click <code>Enable</code> and  <code>Retain states</code>.

</li>

<li>

Save changes. Now devices will be automatically shown in Home Assistant.

</li>
</List>

</li>

<li>

Connect Devices 

<List>

<li>

Connect your devices by going to <code>Zigbee</code> -> <code>Join</code>. Put your sensors in pairing mode, the most common way to switch a device to connect mode is to hold its power button or switch them on/off for 5 times.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.live/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

Press the Enable Join button to start searching Zigbee devices. You will see active sensors.

</li>

</List>
</li>

</List>