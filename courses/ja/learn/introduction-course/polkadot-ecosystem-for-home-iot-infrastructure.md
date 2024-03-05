---
title: "Lesson #3, ホームIoTインフラストラクチャのためのPolkadotエコシステム"
lastUpdate: Thu May 04 2023 12:53:58 GMT+0400 (Samara Standard Time)
description: このレッスンでは、Robonomicsパラチェーンを使用してスマートライト電球を制御しようとします。
lessonNumber: 3
metaOptions: [学ぶ, Robonomicsのアイデアについての紹介]
defaultName: イントロduction to the ideas of Robonomics
---

Lesson 2では、Robonomicsの主要な原則と、Polkadot / Kusamaを有望なブロックチェーンエコシステムプラットフォームとして言及しました。Polkadotエコシステム内のRobonomicsパラチェーンの機能について詳しく見ていく時が来ました。特に、RobonomicsパラチェーンのIoTサブスクリプションがどのように機能するかを示したいと思います。最初のレッスンでは、あなたのアドレスがコースのIoTサブスクリプションに追加され、すでに2回使用しています：黒い鏡で自分の反射を探したとき、そしてテスト結果を提出したとき。

## イントロ

このレッスンでは、スマートライト電球を制御しようとします。目標は、Robonomicsパラチェーンの標準Polkadot/Substrateインターフェースを使用して電球をオン/オフにすることです。電球は[YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live)で放送されているため、リア���タイムで結果を見ることができます。また、IoTサブスクリプションの使用に関するより詳細な手順が[当社のwiki](https://wiki.robonomics.netwまたはk/docs/subscription-launch/)で利用可能です。


## 手順

<List type="numbers">

<li>

Robonomics [Polkadot/Substrateポータル](https://polkadot.js.またはg/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.netwまたはk%2F#/extrinsics)を開いてください。

Extrinsics（Polkadotエコシステムの機能）メニューが表示されるはずです。Extrinsicsが表示されない場合は、ページの左上にあるメニューを使用して、<code> Kusama & Parachains -> Robonomics</code>に移動し、<code>Switch</code>を押します。次に、ページの上部ヘッダーで<code>Developer</code>に移動し、<code>Extrinsics</code>に移動します。

</li>

<li>
最初のフィールド「選択したアカウントを使用」で、前のレッスンで使用した同じPolkadot.jsアカウントを選択してください。
</li>

<li>
2番目のフィールド「次の外部関数を送信」で、<code>rws</code>外部関数を選択し、<code>call(subscriptionId, call)</code>を選択してください。これにより、IoTサブスクリプションを使用して関数呼び出しをディスパッチできます。
</li>

<li>
<code>subscriptionId: AccountId32</code>フィールドに、この��ブスクリプションの所有者アドレスを貼り付けてください：<code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

<code>call: Call</code>フィールドで、<code>launch(robot, param)</code>コマンドを選択してください。

これにより、<code>robot</code>と<code>param</code>の2つのフィールドが表示されます。

</li>

<li>
<code>robot: AccountId32</code>フィールドに、スマート電球のアドレスを貼り付けてください：<code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

<code>param: H256</code>フィールドに、電球をオン/オフにするために1（オン）または0（オフ）を指定する必要があります。

これは次のように行うことができます：

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

または

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

「トランザクションを送信」ボタンを押してください。

トランザクションに署名する前に、[YouTubeで放送](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live)を開いておくことを忘れないでください。

</li>


</List>

<Result>

テストdappで成功したトランザクションを送信し、Polkadot.jsアカウントのPolkadotエクスプローラーに表示された後、レッスンは完了と見なされます。

[特別なチェックdapp](https://lk.robonomics.academy/)で結果を確認できます。コース中に使用されたPolkadot.jsの同じアカウントを使用して、チェックdappに認証してください。

</Result>