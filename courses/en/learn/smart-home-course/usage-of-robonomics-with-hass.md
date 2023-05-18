---
title: "Lesson #7, Usage of Robonomics with Home Assistant"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: home assistant course
lessonNumber: 8
metaOptions: [Learn, Sovereign Smart Home with Robonomics and Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## What's this about

In this lesson, you will try to use main Robonomics IoT-services. The first one can query the telemetry of smart home devices, allowing you to remotely receive data from Home Assistant. The second service generates backups of your Home Assistant configuration and restores it when needed (for example, in the event of a failure SD cards).


## About parachain functions

Next you will see how the functions of the Robonomics parachain are used to provide the Home Assistant user with the necessary service. 

Getting telemetry is based on the <code>datalog</code> pallet you already know. Every certain period of time (but no less than the accumulated weight allows), a <code>datalog.record()</code> transaction is sent to the parachain from the <code>SUB_CONTROLLER</code> address with the IPFS hash of the encrypted file, where all the data of your IoT devices is collected. In fact to get the telemetry, you request the necessary datalogs from the parachain related to your IoT subscription and then decrypt them with your keys.

To create a backup, another Robonomics pallet called <code>digitalTwin</code> is used, which is an implementation of the idea of a digital twin, a digital version of real equipment that copies its technical characteristics and historical data. First, a unique ID is created for your Home Assistant's digital twin using the <code>digitalTwin.create()</code> extrinsic. Then, using the <code>digitalTwin.setSource()</code> extrinsic, this ID is bound with some data (the <code>topic</code> field) and with an address in the parachain (the <code>source</code> field). For the Home Assistant backup, the hash of the backup file is stored in <code>topic</code>, and the <code>SUB_OWNER</code> address is stored in <code>source</code>.

## Instructions

<List type="numbers">

<li>

Getting Telemetry

<List>


<li>

Go to dapp and choose [SmartHome Telemetry](https://dapp.robonomics.network/#/smarthome-telemetry) service.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmao9RoWcKo2qs4PAGtm5gqHzyAHJcpDqNLgciU35FJeVm', type:'mp4'}]" />

</li>

<li>

In the <code>CONTROLLER</code> field enter the <code>SUB_CONTROLLER</code> address. Insert the seed phrase to encrypt data.

</li>

<li>

In the <code>Get telemetry</code> block choose a timestamp from the drop-down list and press the <code>DOWNLOAD TELEMETRY</code> button.


Telemetry downloading could take some time. After finishing, you will see the information from your sensors.

</li>
</List>
</li>


<li>

Creating Backup

<List>

<li>

To create backups, a service is called that generates a secure archive with configuration files. This service then adds the archive to IPFS and stores the resulting CID in Robonomics Digital Twin.

<robo-academy-note type="warning" title="WARNING">
In order to restore your configuration, it is necessary to use a custom IPFS gateway such as Pinata (pinata.cloud) or Crust Network (crust.network). Without it, your backup will be stored solely on your local IPFS node, which may prevent you from restoring your Home Assistant configuration in the event of a local node failure. 
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVo91dLaAYgFDM1vrL2PYfAffM6SGGC59ZERbfHR44tqW', type:'mp4'}]" />

</li>

<li>

In the web interface of Home Assistant go to <code>Developer Tools</code> -> <code>Services</code>. Search for <code>Robonomics: Save Backup to Robonomics</code> and press <code>CALL SERVICE</code>.

</li>

<li>

Wait until you see the notification <code>Backup was updated in Robonomics</code> appear in <code>Notification</code>.

</li>

<li>

In order to restore your configuration, you will need to install a fresh Home Assistant instance (and repeat all previous steps) with Robonomics Home Assistant integration using the same seeds you created previously. You will also need to set up an MQTT broker with the same username and password.

<robo-academy-note type="warning" title="WARNING">
Since some devices connected to Home Assistant via Wi-Fi or MQTT require you to explicitly specify the local IP address of your Raspberry Pi, when restoring a backup, they may not be available due to a change in this IP. You will need to re-enter the new IP address in the settings of these devices. To avoid this, you can set up a static local IP for your Raspberry Pi in your router settings (if it supports this feature).
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmWmnmkXUcPXsAnQzwN3UEuki2GMYnQDx3vhgjEypCU8aR', type:'mp4'}]" />


</li>

<li>

In the web interface of Home Assistant go to <code>Developer Tools</code> -> <code>Services</code>. Search for <code>Robonomics: Restore from the Backup in Robonomics</code> and press <code>CALL SERVICE</code>. Navigate to the <code>Overview</code> page, to check the status of your backup, .

</li>

<li>

Once Home Assistant has finished restarting, your configuration will be restored. If the status changes to <code>restored</code> but Home Assistant does not automatically restart, you need to manually restart it by navigating to <code>Settings</code> > <code>System</code> and clicking on the <code>RESTART</code> button in the upper right corner.

</li>

</List>
</li>

</List>

## Completing Course

<List>

<li class="flex"> 

Congratulations! You have successfully completed the full setup and deployment of your sovereign smart home. You can now request a course completion certificate from us by visiting our Discord-channal. Write to us in the  [robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315) chat and our representative will contact you.
</li>

<li class="flex">

Proof of course completion are corresponding transactions that can be verified in [Polkadot explorer](https://robonomics.subscan.io/). These are transactions about buying a subscription, adding a device to a subscription, and sending datalogs from devices.

</li>

</List>