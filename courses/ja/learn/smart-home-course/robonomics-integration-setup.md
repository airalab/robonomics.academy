---
title: "レッスン #6、ロボノミクス統合のセットアップ"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: ホームアシスタントコース
lessonNumber: 7
metaOptions: [RobonomicsとHome Assistantを使用した主権スマートホームを学ぶ]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## これは何についてですか

このレッスンでは、RobonomicsをHome Assistantに追加し、サブスクリプションに関連付けられたアカウントを作成します。この統合により、Home AssistantはRobonomicsパラチェーン機能を使用できるようになり、まずは暗号化されたスマートホームデータを分散型クラウドに送信できます。


## 理論

あなたのスマートホームデータは、<code>datalog</code>パレットから<code>record()</code> extrinsicを使用して送信され、暗号化されたデバイスデータをブロックチェーンに保存できます。 

より正確には、この統合はデータを保存し、その後IPFSハッシュをdatalog extrinsicに送信し、それがブロックチェーンに保存されるようにします。ただし、この機能はIoTサブスクリプションを介して呼び出されるため、全体の機能は次のようになります：<code>rws.call(datalog.record(YOUR_IPFS_HASH))</code>。

## 手順

<List type="numbers">

<li>

RobonomicsをHome Assistantに追加

<List>

<li>

Home AssistantのWebインターフェースで<code>Settings</code>-><code>Device & Services</code>に移動し、<code>ADD INTEGRATION</code>を押します。 <code>Robonomics</code>を検索します。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD', type:'mp4'}]" />

</li>

<li>

Robonomicsをクリックして、構成を入力します： 

\- <code>SUB_CONTROLLER</code>アカウントから管理者アカウントシードにシードを追加

\- サブスクリプション所有者アドレスに、以前に作成した<code>SUB_OWNER</code>アカウントの公開アドレスを追加

\- データ送信の間隔を設定します（デフォルトでは10分）

\- （オプション）Pinataのピニングサービスの資格情報を追加して、データをIPFSネットワーク全体に広げることができます

</li>

<li>

構成を完了したら<code>SUBMIT</code>を押します。すべてを正しく入力した場合、成功ウィンドウが表示されます。

</li>
</List>
</li>

<li>

Robonomics Dapp でユーザーを追加する 

<List>

<li>

スマートホームデバイスを制御する Home Assistant 用に別のユーザーを作成する必要があります。以前に作成したアカウントは使用できません。なぜなら <code>SUB_OWNER</code> と <code>SUB_CONTROLLER</code> がセキュリティを提供し、最初に Home Assistant を起動したときに作成したユーザーには Robonomics Parachain アカウントがないからです。

</li>

<li>
以前のレッスンで行ったように Robonomics Parachain でアカウントを作成してください。
</li>

<li>

このアカウントを [dapp](https://dapp.robonomics.network/#/subscription/devices) のサブスクリプションに追加します。アクセスリストには <code>SUB_OWNER</code>、<code>SUB_CONTROLLER</code>、および <code>USER</code> の 3 つのアドレスがあるはずです。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H', type:'mp4'}]" />

</li>

<li>

[Home Assistant アカウント](https://dapp.robonomics.network/#/home-assistant) という dapp サービスに移動します。右サイドバーで作成したアカウントを選択します（プロファイルアイコンを押して意図したアカウントを選択したことを確認してください）。

必要なフィールドに <code>USER</code> シードを入力します。管理者クレジットフィールドに <code>SUB_OWNER</code> と <code>SUB_CONTROLLER</code> のアドレスを追加します。すべてが正しい場合、検証ステータスが <code>VERIFIED</code> と表示されます。

</li>

<li>

新しく登録したユーザーのためにパスワードを作成し、その後トランザクションを確認します。これはサブスクリプションにより手数料がかからなくなります。後でパスワードを <code>Restore</code> タブで復元できます。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh', type:'mp4'}]" />

</li>

<li>

登録プロセスが完了したら、ログインして Home Assistant にユーザーアドレスと新しく作成したパスワードを使用します。これで Robonomics dapp を使用して自宅を制御できます。

</li>
</List>
</li>
</List>