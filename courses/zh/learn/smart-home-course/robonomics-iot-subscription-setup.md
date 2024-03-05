---
title: "第5课，Robonomics IoT订阅设置"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: 家庭助手课程
lessonNumber: 6
metaOptions: [学习，Robonomics和Home Assistant的主权智能家居]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## 这是关于什么

Robonomics IoT订阅允许用户在一定期限内使用平行链的所有功能，而无需支付标准交易费用。通过激活订阅，设备将能够优先发送交易。

在这节课中，您将创建必要的智能家居安全帐户并购买IoT订阅。

## 理论

IoT订阅以及其购买和管理方法是使用包含所有必要功能的<code>rws</code>调色板实现的。一般来说，Robonomics中的订阅是通过拍卖模型出售的，该模型使用<code>rws.startAuction()</code>外部来为特定订阅ID创建拍卖。用户可以通过ID访问拍卖，并使用<code>rws.bid()</code>外部进行竞标。

拍卖结束后，具有最高竞标的地址将被分配给订阅。现在，该地址将能够通过<code>rws.call()</code>外部发送交易而无需支付费用。但是，这并不意味着该地址可以随时无限制地执行此操作：每个订阅都有一定数量的<code>weight</code>值，必须在执行免费交易之前累积。由于每个在平行链中生成的区块都会向订阅中添加一些<code>weight</code>值，因此Robonomics通过这种方式调节平行链的带宽。

此外，订阅的所有者可以使用<code>rws.setDevices()</code>外部，将订��的使用权分享给指定地址。同时，<code>weight</code>保持不变，因此订阅中的地址越多，每个地址等待发送免费交易的时间就越长。

要使用Robonomics控制Home Assistant，您需要在Robonomics平行链上拥有两个帐户。这些帐户将为您的Home Assistant提供安全性。

使用其中一个帐户（<code>SUB_OWNER</code>），您将购买Robonomics订阅。该帐户充当IoT订阅的主要管理员，并为其他用户提供访问Home Assistant的权限（使用<code>rws.setDevices()</code>）。该帐户必须拥有一定数量的XRT代币才能完成订阅购买交易。

第二个帐户（<code>SUB_CONTROLLER</code>）将控制设备的所有Home Assistant流程（例如遥测）。您设备的交易将代表<code>SUB_CONTROLLER</code>帐户发送。您（以及任何人）都可以在任何平行链资源管理器（如[Subscan](https://robonomics.subscan.io/)）中看到这些交易。但是，只有您拥有必要的种子短语并安全保管时，才能解密这些交易的内容。

## 说明

<List type="numbers">

<li>

创建所有者和控制器平行链帐户

<List>

<li>

<robo-academy-note type="warning" title="WARNING">
这两个帐户必须使用ed25519加密创建。
</robo-academy-note>

</li>

<li>

转到[Robonomics Parachain应用程序](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)，在Polkadot / Substrate门户上检查左上角，确保您已连接��Robonomics Parachain。

</li>

<li>

由于使用*ed25519*格式，您需要使用Polkadot-JS UI创建帐户并选择所需的加密。 

默认情况下，Polkadot-JS UI上禁用此功能。要启用它，请导航至<code>设置</code> -> <code>常规</code> -> <code>帐户选项</code>，并在下拉菜单<code>浏览器内帐户存储</code>中选择<code>允许本地浏览器内帐户存储</code>。
 
</li>

<li>

转到<code>帐户</code> -> <code>帐户</code>，并按下<code>添加帐户</code>按钮。您将看到带有帐户种子的弹出菜单。它有两种形式：*助记词*（人类可读）和*原始*（一系列数字和字母）。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQiJYPYajUJXENX2PzSJMSKGSshyWyPNqugSYxP5eCNvm', type:'mp4'}]" />

</li>

<li>

打开<code>高级创建选项</code>，将创建帐户的加密类型更改为<code>Edwards - ed25519</code>。安全保存助记词种子短语并按下<code>下一步</code>。

</li>

<li>

在下一个菜单中，您需要设置帐户名称和密码。为了方便起见，给它一个名字<code>SUB_OWNER</code>并按下<code>下一步</code>。

</li>

<li>

在最后一个窗口上点击<code>保存</code>以完成帐户创建。它还将生成一个备份JSON文件，您应该安全地存储。稍后您可以使用此文件来恢复您的帐户，如果您记得密码的话。

</li>

<li>

为<code>SUB_CONTROLLER</code>帐户重复这些步骤。

</li>
</List>
</li>

<li>

将��户添加到Polkadot.js扩展

<List type="numbers">

<li>

为了方便起见，您应该使用Polkadot.js扩展并将这些新创建的账户添加到其中。对于ed25519账户，您只能使用备份JSON文件来执行此操作。您可以使用创建账户时保存的文件。

您可以通过创建账户的备份文件再次获取这些文件。在您的账户上按三个点，选择<code>为此账户创建备份文件</code>，然后输入您的密码。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmRd7gztUjWkLF4W2XuJwy5aXBwzNV2aPCU6CQQLvUpSNj', type:'mp4'}]" />

</li>

<li>

打开一个扩展程序，点击右上角的<code>+</code>按钮，然后选择<code>从备份JSON文件恢复账户</code>。

</li>

<li>

在打开的窗口中上传JSON文件，输入密码，然后点击<code>恢复</code>。

</li>

<li>

确保在Polkadot.js扩展中为Robonomics网络选择了账户。在Polkadot / Substrate门户中，转到<code>设置</code> -> <code>元数据</code>，然后点击<code>更新元数据</code>按钮。 

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmT5sTNP9t8gpbD4RJJw6ETwG4wiziiChAh2uHHBk9Zsyd', type:'mp4'}]" />

</li>

<li>

在弹出窗口中确认元数据更新。现在扩展将显示用于该地址的网络标签。

</li>

</List>
</li>

<li>

激活Robonomics订阅

<List >

<li>

<robo-academy-note type="okay">
对于此步骤，您必须在您的<code>SUB_OWNER</code>账户中拥有足够数量的XRT代币（最少2-3个XRT）。
</robo-academy-note>

转到Robonomics dapp的[订阅页面](https://dapp.robonomics.network/#/subscription)，然后在右侧边栏上点击<code>连接账户</code>。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmXrFCajmJgkRDSbshGD3QehjnoyS6jafEPSjHdYkoBHum', type:'mp4'}]" />

</li>

<li>

在���下来的弹出菜单中连接Polkadot.js扩展。您将看到带有余额的账户地址。

</li>

<li>

在购买之前，请检查您选择了<code>SUB_OWNER</code>账户。点击地址配置文件图标，您应该在<code>检查所有者账户</code>字段下看到<code>SUB_OWNER</code>账户。

</li>

<li>

最后，点击<code>提交</code>按钮，然后输入您的账户密码。之后等待激活过程完成。过一段时间后，您将看到您的订阅状态。

如果没有可用的订阅，请**联系**Robonomics团队。

</li>
</List>
</li>

<li>

将账户添加到订阅

<List type="numbers">

<li>

现在您需要将<code>SUB_CONTROLLER</code>账户添加到**访问列表**中。打开扩展程序，点击账户名称旁边的图标。它将复制账户地址。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmV1gkwtcXsWv54ov9tuXfcHg7nqs1foM8cRwts4sqnqtX', type:'mp4'}]" />

</li>

<li>

将此地址粘贴到**管理访问**部分的<code>Robonomics平行链地址</code>字段中。

给它一个名称，然后点击<code>+</code>按钮。在弹出窗口中输入您的<code>SUB_OWNER</code>密码，然后等待激活过程完成。

</li>

<li>

为<code>SUB_OWNER</code>账户重复这些步骤。
</li>
</List>
</li>
</List>