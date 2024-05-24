---
title: "Lesson #4, センサー接続モジュール"
description: 'センサー接続モジュール'
lessonNumber: 4
metaOptions: [学ぶ, センサー接続性＆分散型センサーネットワーク]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

次の記事では、センサー接続モジュールについて詳しく学びます。その後、分散型センサーネットワークのホスティングに参加したり、独自のセンサーマップを作成したりすることができます。

## センサー接続について

分散型センサーネットワークは`sensors-connectivity` Pythonモジュールを使用しています（[ソースコード](https://github.com/airalab/sensors-connectivity)）。このモジュールを使用すると、ユーザーは自分自身のサーバーを立ち上げてセンサーからデータを受信し、さらに処理することができます。現時点では、開発者はいくつかのサーバーを立ち上げており、どのセンサーもそれらにデータを送信できます。複数のサーバーを実行することで、1つのサーバーに問題が発生した場合でもデータの損失を回避できます。センサーは動作していないサーバーから動作しているサーバーに切り替えます。基本的に、センサー接続モジュールは1つの入力（センサーデータ）と多くの出力をつブラックボックスと考えることができます。

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

センサー接続モジュールは、HTTPプロトコルを介してセンサーからのデータを含むさまざまなデータを受信するステーション（station_1、station_2 ... station_n）のセットです。また、USB経由でコンピューターに接続されたセンサーやその他のデータソースもあります。ステーションから受信したデータはモジュールによって処理され、フィーダー（feeder_1、feeder_2 ... feeder_n）に渡されます。フィーダーは処理されたデータをユーザーに送信します。この場合、データは分散型IPFSチャンネルに送信されます。 

[分散型センサーネットワーク](https://sensors.robonomics.network/#/)のマップは、コンピューター上で実行される分散型アプリケーション（dapp）です。IPFSチャンネルからデータを読み取り、マップ上に表示します。センサーからデータを収集するサーバーとユーザーが見るマップとの間には直接的な接続はありません。データはIPFS pubsubを介してそれらの間で転送されるため、サーバーへの負荷が軽減されます。 

さらに、定期的に、過去の一定期間のデータがIPFSに保され、そのデータのハッシュがブロックチェーンに記録されます。IPFSはコンテンツアドレス指向のネットワークであるため、データの変更が見逃されることはありません。必要なファイルのアドレスには、その内容のハッシュが含まれており、データの変更に応じて変更されます。ブロックチェーンは、ユーザーにハッシュを渡すために使用され、ユーザーはそれを使用してIPFSから必要なデータを取得できます（これはマップの履歴をリクエストしたときに行われます）。

## Linux 用のモジュールのセットアップ

**前提条件とインストール**

<List type="numbers">

<li>

`sensors-connectivity`モジュールを構築するには、IPFSデーモンがインストールされている必要があり、バージョンが`0.8.x`を超えないようにする必要があります。Linuxで作業していると仮定し、次のコマンドを実行します（バージョン`0.8.0`用に）

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

開発ツール `python3-dev` と Python のパッケージインストーラ `pip` を使用してパッケージをインストールします：

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

モジュールを PyPI パッケージとしてインストールします：

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

次の警告が表示された場合： 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

次のコマンドを実行します：

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## 構成

<List type="numbers">

<li>

構成ファイルとデータベースファイルのディレクトリを作成します。このデータベースには、センサーデータの IPFS ハッシュ、タイムスタンプ、およびサービスの状態が保存されます：

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
データベースファイルの名前は任意ですが、拡張子は必須です <code>.db</code>
</RoboAcademyNote>

</li>


<li>

同じディレクトリに構成ファイルを作成します：

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

次の内容をファイルにコピーして、db_path フィールドにデータベースファイルのフルパスを挿入します。この構成で、HTTP 経由でセンサーデータを取得し、Robonomics マップに送信するのに十分です：

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation": {
      "enable": false,
      "port": "/dev/<YOUR/PATH/TO/BOARD>",
      "work_period": 300,
      "geo": "00.000000,00.000000",
      "public_key": ""
   },
   "httpstation": {
      "enable": true,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

</List>

## 起動


<List type="numbers">

<li>

IPFS デーモンを起動します：

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

構成が設定されたら、別のターミナルで構成ファイルへのパスでサービスを実行します：

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

ターミナルにログが表示されます (ログは `~/.logs` にも追加されます)。 例：

<LessonCodeWrapper codeClass="big-code" language="bash">$ sensors_connectivity test.json
2022-09-02 14:08:48,408 - INFO - Getting data from the stations...
2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...
2022-09-02 14:08:48,411 - INFO - Checking data base...
2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...
2022-09-02 14:09:18,410 - INFO - Getting data from the stations...
2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...
2022-09-02 14:09:48,412 - INFO - Getting data from the stations...
2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...
2022-09-02 14:10:18,413 - INFO - Getting data from the stations...</LessonCodeWrapper>

</li>

</List>

## インストール後

`sensors-connectivity` モジュールを当社の分散型センサーネットワークに接続し、マップ上でデータを表示するには、IPFS ID を [vm@multi-agent.io](mailto:vm@multi-agent.io) または [ping@airalab.org](mailto:ping@airalab.org) に送信する必要があります。ID をアクセス制御リストに追加します。

IPFS デーモンを実行した後、次のコマンドで IPFS `ID` を取得します：

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>