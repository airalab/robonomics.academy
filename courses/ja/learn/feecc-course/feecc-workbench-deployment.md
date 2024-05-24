---
title: "エンジニアワークベンチの展開"
description: このコースは、Feeccシステムとそのすべてのコンポーネントを知ることについてです。
metaOptions: [学ぶ、Feeccに慣れる]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
このレッスンでは、Feecc Engineer Workbench の必要なコンポーネントを自分でデプロイする方法を学習します。
</RoboAcademyText>

コンポーネントには次のものがあります:

- ワークベンチデーモン
- ワークベンチフロントエンド
- IPFSゲートウェイ
- HIDリーダーデーモン

すべてのコンポーネントは、[Docker](https://docs.docker.com/engine/install/ubuntu/) および [Docker compose](https://docs.docker.com/compose/) を使用して起動されます。 彼らはインストールされました。

## ソフトウェアの準備

1. Feeccコンポーネントはデータの保存とアクセスに[MongoDB](https://www.mongodb.com/)データベースを使用します。Feeccを使用する前に、便利な方法でMongoDBを展開する必要があります。展開オプションのいくつかは次のとおりです: [独自のサーバーを使用](https://www.mongodb.com/try/download/community)、[Atlasのクラウドデータベース](https://www.mongodb.com/atlas) (無料)、[DigitalOceanのクラウドデータベース](https://www.digitalocean.com/products/managed-databases-mongodb) (有料)。 
    
    いずの場合も、すべてのシステムコンポーネントの`MONGODB_URI`変数の値として入力する必要があるMongoDBへの接続URIを取得する必要があります。
    
2. 本番システムからのデータの信頼性と透明性を活用したい場合は、Robonomicsにアカウントを作成する必要があります。これを行うには、次のリンクにある手順を使用してください: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    アカウントのシードフレーズを後で`ROBONOMICS_ACCOUNT_SEED`変数で使用するため、保存する必要があります。

## ワークベンチの準備

開始する前に、コンピューターまたはサーバーにすべての必要な機器を接続してください:

- USBを使用したラベルプリンター
- USBを使用したRFID / バーコードリーダー
- PoEルーター/ネットワークスイッチを介したIPカメラ
- USBおよびHDMI/VGAを使用したモニターとキーボードおよびマウスまたはタッチスクリーン（オプション）

## HIDリーダーデーモンの起動

1. リポジトリをクローンする:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. デーモンを起動します：

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## ワークベンチデーモンの起動

1. リポジトリのクローンを作成します。

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. ファイル `docker-compose.yml` を使用してデーモンを必要に応じて構成します。ファイルにはさまざまな環境変数が含まれています：

    - MongoDBの構成；
    - Robonomicsの構成；
    - IPFSの構成；
    - プリンターパラメータ；
    - カメラパラメータ；
    - RFID / バーコードリーダーパラメータ。
    
    変数の完全なリストはデーモンの[リポジトリ](https://github.com/Multi-Agent-io/feecc-workbench-daemon)で利用できます。次のパラメータは必須です：
    
    - `MONGODB_URI`: MongoDBへの接続URI;
    - `MONGODB_DB_NAME`: MongoDBのデータベース名;
    - `WORKBENCH_NUMBER`：従業員の作業台番号。

3. デーモンを起動します：

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. 機能を確認します。ブラウザを開いて `http://127.0.0.1:5000/docs` ページに移動し、システムのREST APIインターフェースに関するドキュメントが表示されるはずです。ページが利用できない場合は、サーバーが正しく起動していない可能性があります。エラーがある場合は、コンテナ内のログを確認し、修正してビルドおよび実行手順を繰り返してください。

## IPFSゲートウェイの起動

1. リポジトリのクローンを作成します。

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. `docker-compose.yml`ファイルを使用して、必要に応じてマイクロサービスを構成します。ファイルには、MongoDB、Robonomics、およびPinataとの接続用の環境変数が含まれています。変数の完全なリストは、ゲートウェイの[リポジトリ](https://github.com/Multi-Agent-io/feecc-ipfs-gateway)で入手できます。

3. マイクロサービスを起動します。

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## ワークベンチフロントエンドの起動

1. リポジトリのクローンを作成します。

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. `configs`ディレクトリに移動し、`config.json`ファイルを使用してフロントエンドサービスを必要に応じて構成します。次のパラメータが特に重要です。
    - `socket` — ここにワークベンチデーモンのアドレスを挿入します。
    - `interface_language` — インターフェース言語、`en`と`ru`のオプションが利用可能です。
    - `dev_show_reducers` — 開発者モードの有効化/無効化
    - `pulling_period` — バックエンドからデータを受信する間隔（ミリ秒単位）

3. フロントエンドコンテナを起動する:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. 機能を確認します。ブラウザに移動し、`http://localhost:3000`ページを開くと、認証ページが表示されます。

<RoboAcademyText fWeight="500">
次のレッスンでは、Feecc Analyticsサービスを説明します。
</RoboAcademyText>