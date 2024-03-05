---
title: "レッスン＃5、Robonomics IoTサブスクリプションのセットアップ"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: ホームアシスタントコース
lessonNumber: 6
metaOptions: [RobonomicsとHome Assistantを使用した主権スマートホームを学ぶ]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## これは何についてですか

Robonomics IoTサブスクリプションを使用すると、標準のトランザクション手数料を支払わずに一定期間、パラチェーンのすべての機能を利用できます。 サブスクリプションをアクティブにすることで、デバイスは優先してトランザクションを送信できるようになります。

このレッスンでは、必要なスマートホームセキュリティアカウントを作成し、IoTサブスクリプションを購入します。

## 理論

IoTサブスクリプションおよびその購入および管理方法は、すべての必要な機能を含む<code>rws</code>パレットを使用して実装されています。 一般的に、Robonomicsのサブスクリプションはオークションモデルを使用して販売され、特定のサブスクリプションIDのオークションを作成するために<code>rws.startAuction()</code> extrinsicが使用されます。 ユーザーはIDでオークションにアクセスし、<code>rws.bid()</code> extrinsicを使用して入札できます。

オークションの終了後、最高入札額のアドレスがサ��スクリプションに割り当てられます。 このアドレスは、<code>rws.call()</code> extrinsicを使用して手数料なしでトランザクションを送信できるようになります。 ただし、これはアドレスがいつでも無制限にこれを行うことができることを意味するわけではありません。 各サブスクリプションには、無料トランザクションを実行する前に蓄積する必要のある<code>weight</code>値があります。 パラチェーンで生成される各ブロックでサブスクリプションに一定量の<code>weight</code>値が追加されるため、Robonomicsはパラチェーンの帯域幅を調整しています。

さらに、サブスクリプションの所有者は<code>rws.setDevices()</code> extrinsicを使用して、指定されたアドレスにサブスクリプションの使用を共有できます。 同時に、<code>weight</code>は変わらず、サブスクリプションに含まれるアドレスが多いほど、各アドレスが無料トランザクションを送信する前に待機する時間が長くなります。

RobonomicsでHome Assistantを制御するには、Robonomicsパラチェーンに2つのアカウントが必要です。 これらのアカウントはHome Assistantのセキュリティを提供します。

アカウントの1つ（<code>SUB_OWNER</code>）でRobonomicsサブスクリプションを購入します。 このアカウントは、IoTサブスクリプションの主要な管理者として機能し、他のユーザーにHome Assistantへのアクセスを提供します（<code>rws.setDevices()</code>を使用）。 このアカウントには、サブスクリプション購入トランザクションを完了するためにいくつかのXRTトークンが必要です。

2番目のアカウント（<code>SUB_CONTROLLER</code>）は、デバイスのすべてのHome Assistantプロセス（テレメトリなど）を制御します。 デバイスのトランザクションは、<code>SUB_CONTROLLER</code>アカウント名義で送信されます。 これらのトランザクションは、[Subscan](https://robonomics.subscan.io/)などのパラチェーンエクスプローラーで誰でも見ることができます。 ただし、必要なシードフレーズを安全に保持している限り、トランザクションの内容を解読できるのはあなただけです。

## 手順

<List type="numbers">

<li>

オーナーおよびコントローラーパラチェーンアカウントの作成

<List>

<li>

<robo-academy-note type="warning" title="WARNING">
両方のアカウントはed25519暗号化で作成する必要があります。
</robo-academy-note>

</li>

<li>

Polkadot / Substrate Portalの[Robonomics Parachainアプリ](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)に移動します。 左上隅を確認して、Robonomics Parachainに接続されていることを確認してください。

</li>

<li>

*ed25519*形式を使用するため、Polkadot-JS UIを使用してアカウントを作成し、必要な暗号化を選択する必要があります。 

この機能は、Polkadot-JS UIではデフォルトで無効になっています。有効にするには、<code>設定</code> -> <code>一般</code> -> <code>アカウントオプション</code>に移動し、ドロップダウンメニュー<code>ブラウザ内アカウントストレージを許可</code>を選択します。
 
</li>

<li>

<code>アカウント</code> -> <code>アカウント</code>に移動し、<code>アカウントの追加</code>ボタンを押します。アカウントシードが表示されます。2つの形式があります:*ニーモニック*（人間が読める）と*Raw*（数字と文字のシーケンス）。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQiJYPYajUJXENX2PzSJMSKGSshyWyPNqugSYxP5eCNvm', type:'mp4'}]" />

</li>

<li>

<code>高度な作成オプション</code>を開き、アカウントの作成の暗号タイプを<code>Edwards - ed25519</code>に変更します。ニーモニックシードフレーズを安全に保存し、<code>次へ</code>を押します。

</li>

<li>

次のメニューでは、アカウント名とパスワードを設定する必要があります。便宜のために名前を<code>SUB_OWNER</code>として付け、<code>次へ</code>を押し���す。

</li>

<li>

最後のウィンドウで<code>保存</code>をクリックしてアカウントの作成を完了します。安全に保存する必要があるバックアップJSONファイルも生成されます。後でこのファイルを使用してアカウントを復元できます。

</li>

<li>

<code>SUB_CONTROLLER</code>アカウントについてもこれらの手順を繰り返します。

</li>
</List>
</li>

<li>

Polkadot.js Extensionにアカウントを追加する

<List type="numbers">

<li>

便宜のために、Polkadot.js拡張機能を使用し、これら新しく作成されたアカウントを追加してください。ed25519アカウントの場合、バックアップJSONファイルのみで行うことができます。アカウントを作成したときに保存されたファイルを使用できます。

アカウントのバックアップファイルを作成することで、これらのファイルを再取得できます。アカウント上で3つの点を押し、<code>このアカウントのバックアップファイルを作成</code>を選択し、パスワードを入力してください。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmRd7gztUjWkLF4W2XuJwy5aXBwzNV2aPCU6CQQLvUpSNj', type:'mp4'}]" />

</li>

<li>

拡張機能を開き、右上の<code>+</code>ボタンを押し、<code>バックアップJSONファイルからアカウントを復元</code>を選択してください。

</li>

<li>

開いたウィンドウでJSONファイルをアップロードし、パスワードを入力し、<code>復元</code>を押してください。

</li>

<li>

Polkadot.js拡張機能のアカウントにRobonomicsネットワークが選択されていることを確認してください。Polkadot / Substrate Portalで<code>設定</code> -> <code>メタデータ</code>に移動し、<code>メタデータを更新</code>ボタンをクリッ��してください。 

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmT5sTNP9t8gpbD4RJJw6ETwG4wiziiChAh2uHHBk9Zsyd', type:'mp4'}]" />

</li>

<li>

ポップアップでメタデータの更新を確認してください。これで、拡張機能にはアドレスが使用されているネットワークのラベルが表示されます。

</li>

</List>
</li>

<li>

Robonomicsサブスクリプションの有効化

<List >

<li>

<robo-academy-note type="okay">
このステップでは、<code>SUB_OWNER</code>アカウントに十分な量のXRTトークン（最小2-3 XRT）が必要です。
</robo-academy-note>

Robonomics dappに移動して、[サブスクリプションページ](https://dapp.robonomics.network/#/subscription)にアクセスし、右サイドバーで<code>アカウントを接続</code>を押してください。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmXrFCajmJgkRDSbshGD3QehjnoyS6jafEPSjHdYkoBHum', type:'mp4'}]" />

</li>

<li>

次のポップアップメニューでPolkadot.js拡張機能を接続してください。残高とともにアカウントアドレスが表示されます。

</li>

<li>

購入する前に、<code>SUB_OWNER</code>アカウントを選択したことを確認してください。アドレスプロファイルアイコンを押し、<code>所有者アカウントを確認</code>フィールドの下に<code>SUB_OWNER</code>アカウントが表示されるはずです。

</li>

<li>

最後に、<code>送信</code>ボタンを押し、アカウントのパスワードを入力してください。その後、アクティベーションプロセスが完了するまでお待ちください。しばらくする��、サブスクリプションの状態が表示されます。

利用可能なサブスクリプションがない場合は、**Robonomicsチームにお問い合わせ**してください。

</li>
</List>
</li>

<li>

サブスクリプションにアカウントを追加する

<List type="numbers">

<li>

**アクセスリスト**に<code>SUB_CONTROLLER</code>アカウントを追加する必要があります。拡張機能を開き、アカウント名の近くのアイコンをクリックしてください。アカウントアドレスがコピーされます。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmV1gkwtcXsWv54ov9tuXfcHg7nqs1foM8cRwts4sqnqtX', type:'mp4'}]" />

</li>

<li>

このアドレスを**アクセス管理**部分の<code>Robonomicsパラチェーンアドレス</code>フィールドに貼り付けてください。

名前を付けて、<code>+</code>ボタンを押してください。ポップアップウィンドウで<code>SUB_OWNER</code>のパスワードを入力し、アクティベーションプロセスが完了するまでお待ちください。

</li>

<li>

<code>SUB_OWNER</code>アカウントについても同じ手順を繰り返してください。
</li>
</List>
</li>
</List>