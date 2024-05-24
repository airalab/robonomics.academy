---
title: "第7课，Robonomics与Home Assistant的用法"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: 家庭助手课程
lessonNumber: 8
metaOptions: [学习，Robonomics和Home Assistant的主权智能家居]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## 这是关于什么

在这节课中，您将尝试使用主要的Robonomics物联网服务。第一个可以查询智能家居设备的遥测，允许您远程从Home Assistant接收数据。第二个服务生成您的Home Assistant配置的备份，并在需要时恢复它（例如，在SD卡故障时）。


## 关于平行链功能

接下来，您将看到如何使用Robonomics平行链的功能为Home Assistant用户提供必要的服务。 

获取遥测基于您已经了解的datalog调色板。每隔一定时间（但不少于累积权重允许的时间），从<code>SUB_CONTROLLER</code>地址向平行链发送一个<code>datalog.record()</code>事务，其中包含加密文件的IPFS哈希，其中收集了您的物联网设备的所有数据。实际上，要获取遥测，您需要从与您的物联网订阅相关的平行链请求必要的数据日志，然后使用您的密钥解密它们。

要创建备份，使用另一个名为<code>digitalTwin</code>的Robonomics调色板，这是数字孪生概念的实现，是真实设备的数字版本，复制其技术特性和历史数据。首先，使用<code>digitalTwin.create()</code>外部创建您的Home Assistant数字孪生的唯一ID。然后，使<code>digitalTwin.setSource()</code>外部，将此ID与一些数据（<code>topic</code>字段）和平行链中的地址（<code>source</code>字段）绑定。对于Home Assistant备份，备份文件的哈希存储在<code>topic</code>中，<code>SUB_OWNER</code>地址存储在<code>source</code>中。

## 说明

<List type="numbers">

<li>

获取遥测

<List>


<li>

转到dapp并选择[智能家居遥测](https://dapp.robonomics.network/#/smarthome-telemetry)服务。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmao9RoWcKo2qs4PAGtm5gqHzyAHJcpDqNLgciU35FJeVm', type:'mp4'}]" />

</li>

<li>

在<code>CONTROLLER</code>字段中输入<code>SUB_CONTROLLER</code>地址。插入种子短语以加密数据。

</li>

<li>

在<code>获取遥测</code>块中，从下拉列表中选择一个时间戳，然后按<code>下载遥测</code>按钮。


遥测下载可能需要一些时间。完成后，您将看到来自传感器的信息。

</li>
</List>
</li>


<li>

创建备份

<List>

<li>

要创建备份，调用生成带有配置文件的安全存档的服务。然后，此服务将存档添加到IPFS并将结果CID存储在Robonomics数字孪生中。

<robo-academy-note type="warning" title="WARNING">
为了恢复您的配置，必须使用自定义IPFS网关，如Pinata（pinata.cloud）或Crust Network（crust.network）。否则，您的备份将仅存储在本地IPFS节点上，这可能会阻止您在本地节点故障时恢复Home Assistant配置。 
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVo91dLaAYgFDM1vrL2PYfAffM6SGGC59ZERbfHR44tqW', type:'mp4'}]" />

</li>

<li>

在Home Assistant的Web界面中，转到<code>Developer Tools</code> -> <code>Services</code>。搜索<code>Robonomics: Save Backup to Robonomics</code>并按<code>CALL SERVICE</code>。

</li>

<li>

等待直到您在<code>Notification</code>中看到通知<code>Backup was updated in Robonomics</code>出现。

</li>

<li>

为了恢复您的配置，您需要安装一个全新的Home Assistant实例（并重复所有先前的步骤），使用之前创建的相同种子进行Robonomics Home Assistant集成。您还需要设置一个带有相同用户名和密码的MQTT代理。

<robo-academy-note type="warning" title="WARNING">
由于一些通过Wi-Fi或MQTT连接到Home Assistant的设备需要您明确指定树莓派的本地IP地址，因此在恢复备份时，由于IP地址的更改，它们可能无法使用。您需要在这些设备的设置中重新输入新的IP地址。为了避免这种情况，您可以在路由器设置中为您的树莓派设置一个静态本地IP（如果支持此功能）。
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmWmnmkXUcPXsAnQzwN3UEuki2GMYnQDx3vhgjEypCU8aR', type:'mp4'}]" />


</li>

<li>

在Home Assistant的Web界面中，转到<code>Developer Tools</code> -> <code>Services</code>。搜索<code>Robonomics: Restore from the Backup in Robonomics</code>并按<code>CALL SERVICE</code>。转到<code>Overview</code>页面，检查您的备份状态。

</li>

<li>

一旦Home Assistant完成重新启动，您的配置将被恢复。如果状态更改为<code>restored</code>但Home Assistant没有自动重新启动，则需要手动重新启动，方法是转到<code>Settings</code> > <code>System</code>，然后单击右上角的<code>RESTART</code>按钮。

</li>

</List>
</li>

</List>

## 完成课程

<List>

<li class="flex"> 

恭喜！您已成功完成主权智能家居的完整设置和部署。您现在可以通过访问我们的Discord频道向我们请求课程完成证书。在[robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315)聊天中与我们联系，我们的代表将与您联系。
</li>

<li class="flex">

课程完成的证明是可以在[Polkadot explorer](https://robonomics.subscan.io/)中验证的相应交易。这些交易涉及购买订阅、将设备添加到订阅以及从设备发送数据日志。

</li>

</List>