---
title: "レッスン＃7、Robonomicsセンサーは分析を測定し、アーカイブノードを測定します"
description: 'ROBONOMICSセンサーはアナリティクスを測定し、ノードをアーカイブします'
lessonNumber: 7
metaOptions: [学ぶ, センサー接続性＆分散型センサーネットワーク]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Robonomicsセンサーは、センサーデータを蓄積して測定履歴を表示するためのサービスであるRoSeMANです。この記事では、サービスのセットアップ方法について説明します。

## 要件

RoSeMANには[MongoDB](https://www.mongodb.com/docs/manual/introduction/)データベースサーバーが必要です。すでに持っていると仮定します。また、センサー接続モジュールのデータログオプションをオンにする必要があります。シナリオ＃3に示されているように。Sensors 接続ivityモジュールに接続されているRobonomicsアカウントには、無料のXRTトークンが必要です。 


## セットアップ

<List type="numbers">

<li>

リポジトリをダウンロード：

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

構成ファイルを作成：

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

`config.json`ファイルを開いてデータベースのパスを編集します。

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

`agents.json`ファイルにアカウントの公開アドレスを追加します。複数のアドレスをファイルに追加することができます。異なるSensors Connectivityモジュールからデータを収集したい場合は。

</li>


<li>

依存��係をインストールしてサーバーをビルドします。

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

RoSeMANサーバーを起動します。

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

Webサーバーは`http://127.0.0.1:3000`で起動するはずです。

</li>

</List>

## インストール後

RoSeMANをサーバーに展開した後、サーバーの公開IPアドレスまたはURLを取得する必要があります。または、RoSeMANとセンサーマップを同じサーバーで実行している場合は、ローカルIPアドレスを使用できます。

次に、センサーマップの構成ファイルを開き、`config.json`ファイルにURLを`REMOTE_PROVIDER`フィールドに挿入します。


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

`yarn build`でマップを再構築し、再度開始します。測定履歴を表示できるようになります。