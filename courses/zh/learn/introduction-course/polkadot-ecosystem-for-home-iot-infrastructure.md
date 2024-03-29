---
title: "第3课，Polkadot生态系统用于家庭物联网基础设施"
lastUpdate: Thu May 04 2023 12:53:58 GMT+0400 (Samara Standard Time)
description: 在这节课中，您将尝试使用Robonomics平行链来控制智能灯泡。
lessonNumber: 3
metaOptions: [学习, Robonomics理念介绍]
defaultName:  Introduction to the ideas of Robonomics
---

第2课解释了Robonomics的主要原则，并提到Polkadot / Kusama作为一个有前途的区块链生态系统平台来实现它。现在是时候更仔细地了解Robonomics平行链作为Kusama网络中Polkadot生态系统的一部分的功能了。特别是，我们想展示Robonomics Parachain的物联网订阅是如何工作的。在第一课中，您的地址已被添加到课程的物联网订阅中，并且您已经成功使用了两次：当您在黑镜子中寻找自己的倒影时以及提交测试结果时。

## 简介

在这节课中，您将尝试控制一个智能灯泡。您的目标是使用Robonomics平行链上的标准Polkadot/Substrate界面打开/关闭灯泡。该灯泡正在[YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live)上广播，因此您可以实时观看您的结果。此外，关于如何使用物联网订阅的更详细的说明可在[我们的wiki](https://wiki.robonomics.netw或k/docs/subscription-launch/)上找到。


## 说明

<List type="numbers">

<li>

打开Robonomics [Polkadot/Substrate门户](https://polkadot.js.或g/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.netw或k%2F#/extrinsics)。

您应该看到Extrinsics（Polkadot生态系统中的功能）菜单。如果Extrinsics没有打开，则使用页面左上角的菜单导航到<code> Kusama & Parachains -> Robonomics</code>，然后按<code>Switch</code>。然后在顶部标题中导航到<code>Developer</code>，然后到<code>Extrinsics</code>。

</li>

<li>
在“使用所选帐户”字段中选择与之前课程中使用的相同的Polkadot.js帐户。
</li>

<li>
在“提交以下外部”字段中，选择<code>rws</code>外部，并选择<code>call(subscriptionId, call)</code>。这将允许您使用物联网订阅调度函数调用。
</li>

<li>
在<code>subscriptionId: AccountId32</code>字段中粘贴此订阅的所有者地址：<code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

在<code>call: Call</code>字段中选择<code>launch(robot, param)</code>命令。

这将显示两个更多的字段：<code>robot</code>和<code>param</code>。

</li>

<li>
在<code>robot: AccountId32</code>字段中粘贴智能灯泡的地址：<code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

在<code>param: H256</code>字段中，您需要指定1（打开）或0（关闭）以打开/关闭灯泡。

您可以使用以下方式进行：

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

或者

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

点击“提交交易”按钮。

在签署交易之前，不要忘记打开[YouTube上的广播](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live)。

</li>


</List>

<Result>

成功发送交易并在Polkadot资源管理器中出现您的Polkadot.js帐户后，课程将被视为已完成。

您可以在[特殊检查dapp](https://lk.robonomics.academy/)上检查您的结果。在检查dapp上进行授权时，请使用在课程期间使用的Polkadot.js中的相同帐户。

</Result>