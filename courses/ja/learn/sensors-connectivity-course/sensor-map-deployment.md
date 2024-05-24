---
title: "レッスン＃6、センサーマップの展開"
description: 'センサーマップの展開'
lessonNumber: 6
metaOptions: [学ぶ, センサー接続性＆分散型センサーネットワーク]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

センサーを組み立て、センサーコネクティビティモジュールを設定したら、個人用の分散型センサーマップを展開する時が来ました。


## 要件 & インストール

<List type="numbers">

<li>

センサーマップはJavaScriptで動作するため、まず`node`と`yarn`マネージャーをインストールする必要があります。

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

マップをダウンロードしてビルドする:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

テストのためにマップを`開発`モードで実行します

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

ターミナルから URL にアクセスすると、センサー マップが表示されます。 その後、`Ctrl+C`で停止してください。

</li>

</List>

## 構成

<List type="numbers">

<li>

次のコマンドを実行してIPFS IDを見つけます:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

`src`フォルダに移動してファイル名を変更します:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

`agents.json`にIPFS IDを挿入します:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

`config.json`ファイルを開き、構成ファイルの次の部分を変更します:

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


ここには、都市の緯度（`lat`）と経度（`lng`）を挿入する必要があります。オプションで、[風向きサービス](https://github.com/danwild/wind-js-server)を設定し、`WIND_PROVIDER`フィールドにそのURLを提供するこができます。

</li>

</List>


## ビルド

<List type="numbers">

<li>

リリース用のファイルをビルドするには、次のコマンドを実行します:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

これにより、すべての静的ウェブサイトのコンポーネントが含まれた`dist`ディレクトリが作成されます。

</li>

<li>

すべてが正しく動作しているかどうかを確認するには、`dist`ディレクトリに移動して`index.html`ファイルを開きます。しばらくすると、センサーコネクティビティモジュールからのセンサーデータがマップ上に表示されます。

</li>

</List>

