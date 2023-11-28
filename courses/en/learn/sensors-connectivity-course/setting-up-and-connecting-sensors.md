---
title: "Lesson #3, Setting up and connecting sensors"
description: 'SETTING UP AND CONNECTING SENSORS'
lessonNumber: 3
metaOptions: [Learn, Sensors Connectivity & Decentralized Sensors Network]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Our sensors use the Robonomics firmware, an extended version of the sensor.community firmware, with some sensors added and the data sending scheme changed. The source code can be found [at the link.](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

If you got read-to-use Robonomics board, you can go to the "Connect" section.

## Requirements

**For Linux:**

<List type="numbers">

<li>

Add a user to the `dialout` group (for Ubuntu) to get access to the USB port:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>Reboot the computer.</li>

<li>

Download Robonomics `airrohr-flasher` executable from [releases](https://github.com/airalab/sensors-connectivity/releases).

</li>

<li>

Change the permissions of the file and execute it:

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**For Windows:**

<List type="numbers">

<li>

Install drivers for USB2serial (in Windows 10 it should start automatically) — Drivers for NodeMCU v3 (CH340): [link](http://www.wch.cn/downloads/file/5.html), [alternative link](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

Download Robonomics `airrohr-flasher` executable from [releases](https://github.com/airalab/sensors-connectivity/releases) and run it.

</li>

</List>

**For MacOS:**

<List type="numbers">

<li>

Install the drivers for USB2serial — Drivers for NodeMCU v3 (CH340): [link](http://www.wch.cn/downloads/file/178.html), [alternative link](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Download Robonomics `airrohr-flasher` executable from [releases](https://github.com/airalab/sensors-connectivity/releases) and run it.

</li>

</List>


## Setup

<List type="numbers">

<li>

Connect sensor to PC and run `airrohr-flasher` program. After opening program you will see the following (depending from you OS):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

`Board` field should automatically fill in; if not, choose the required port form the drop-down list.

<RoboAcademyNote type="okay" title="INFO">
If <code>airrohr-flasher</code> can not find your board, make sure you have done the <b>Requirements</b> part properly.
</RoboAcademyNote>

</li>

<li>

Select the firmware with preferred language, and click `Upload`. Uploading the firmware will take some time. If you later decide to change language or make clear installation (to reset configuration), go to `Erase flash` page and press the button to erase the flash memory of sensor.

</li>

<li>

After downloading the firmware, reboot the ESP (just disconnect and reconnect the USB).

</li>

<li>

Choose sensors from checkbox menu. Choose SDS011 and any additional sensors. Press `Save configuraation`.

</li>

<li>

After downloading the configuration, reboot the ESP (just disconnect and reconnect the USB).

</li>

</List>

## Connect

<List type="numbers">

<li>

After rebooting, the board will create a Wi-Fi network named `RobonomicsSensor-xxxxxxxxx`. Connect to it from your phone or computer: you will see the authorization window (if not, open the browser and go to `192.168.4.1`).

</li>

<li>

Select your Wi-Fi network from the list (or write it yourself if it's not on the list) and fill in the password field.

</li>

<li>

Write the coordinates of the place, where the sensor will be installed.

<RoboAcademyNote type="warning" title="WARNING">
The sensor coordinates will then be displayed on a publicly available map. If you do not want to show your private information, write close, but not exact coordinates.
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

Click on `Save configuration and restart`. The board will reboot and connect to the specified Wi-Fi network. 

</li>

<li>

Open [Robonomics sensors map](https://sensors.robonomics.network/#/) and find your place where you installed the sensor. In a couple of minutes you will be able to see your sensor with data on map.


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

That's all with default installation. For a more advanced setup (sending data to your own server), read the next section.

## Additional Configuration

Before configuration, you need to find the address of the sensor in your Wi-Fi network. To do this, you can use `airrohr-flasher` (your computer must be on the same network as the sensor). Start it and go to the `Discovery` tab, then press `Refresh`, wait a moment and your sensor address will appear.

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

Double-click on this address (or type it into your browser), you will get to the sensor menu:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

Now you can start customize your configuration.


## Custom API

You can also set up sending data to your own server. To do this, in the tab `APIs` click on `Send to own API` and specify the server address and port (`65` for sensors connectivity):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

Click `Save and restart` to save the settings.