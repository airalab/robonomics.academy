---
title: "第 6 课，Robonomics 集成设置"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: 家庭助手课程
lessonNumber: 7
metaOptions: [学习，Robonomics和Home Assistant的主权智能家居]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## 这是关于什么

在这节课中，您将向Home Assistant添加Robonomics，并创建与订阅相关联的帐户。此集成允许Home Assistant使用Robonomics平行链功能，首先是将加密的智能家居数据发送到去中心化云。


## 理论

您的智能家居数据是使用<code>record()</code> extrinsic从<code>datalog</code> pallet发送的，该pallet允许您将加密的设备数据保存到区块链中。 

更准确地说，该集成使用IPFS存储数据，然后将IPFS哈希发送到datalog extrinsic，然后存储在区块链中。但由于此功能是通过IoT订阅调用的，整个功能看起来像：<code>rws.call(datalog.record(YOUR_IPFS_HASH))</code>。

## 说明

<List type="numbers">

<li>

将Robonomics添加到Home Assistant

<List>

<li>

在Home Assistant的Web界面中，转到<code>设置</code>-><code>设备和服务</code>，然后点击<code>添加集成</code>。搜索<code>Robonomics</code>。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD', type:'mp4'}]" />

</li>

<li>

点击Robonomics并填写配置: 

\- 将<code>SUB_CONTROLLER</code>帐户的种子添加到管理员帐户种子

\- 将<code>SUB_OWNER</code>帐户的公共地址（之前创建的）添加到订阅所有者地址

\- 设置数据发送的间隔（默认为10分钟）

\- （可选）您可以为固定服务Pinata添加凭据，以在IPFS网络上更广泛地传播您的数据

</li>

<li>

完成配置后，点击<code>提交</code>。如果您填写了所有内容，您将看到成功窗口。

</li>
</List>
</li>

<li>

在Robonomics Dapp中添加用户 

<List>

<li>

您需要为Home Assistant创建一个单独的用户，该用户将控制智能家居设备。您不能使用先前创建的帐户，因为`SUB_OWNER`和`SUB_CONTROLLER`提供安全性，而您在首次启动Home Assistant时创建的第一个用户没有Robonomics Parachain帐户。

</li>

<li>
从在上一课程中所做的方式开始，在Robonomics Parachain上创建一个帐户。
</li>

<li>

将此帐户添加到[dapp](https://dapp.robonomics.network/#/subscription/devices)中的订阅中。现在访问列表中应该有三个地址：`SUB_OWNER`、`SUB_CONTROLLER`和`USER`。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H', type:'mp4'}]" />

</li>

<li>

转到名为[Home Assistant Account](https://dapp.robonomics.network/#/home-assistant)的dapp服务。在右侧边栏选择您刚刚创建的帐户（通过按下个人资料图标来确认您选择了所需的帐户）。

在必填字段中输入`USER`种子。在管理员信用字段中添加`SUB_OWNER`和`SUB_CONTROLLER`地址。如果一切正确，您将看到验证状态`VERIFIED`。

</li>

<li>

为您刚刚注册的新用户创建一个密码，然后确认交易，由于订阅，现在将不收取费用。稍后您可以在`Restore`选项卡中恢复密码。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh', type:'mp4'}]" />

</li>

<li>

注册过程完成后，使用您的用户地址作为登录名和新创建的密码录到Home Assistant。现在您可以使用Robonomics dapp来通过Robonomics控制您的家。

</li>
</List>
</li>
</List>