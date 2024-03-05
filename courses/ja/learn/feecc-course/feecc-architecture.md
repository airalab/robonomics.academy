---
title: "アーキテクチャ"
description: このコースは、Feeccシステムとそのすべてのコンポーネントを知ることについてです。
metaOptions: [学ぶ、Feeccに慣れる]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
このレッスンでは、Feeccのアーキテクチャを詳しく見て、ソフトウェアのすべてのコンポーネントを見ていきます。
</RoboAcademyText>

Feeccプラットフォームは、エンジニア作業台の制御から分析の提供まで、いくつかのサービスで構成されています。各サービスは、企業環境で展開に必要な機能のいくつかに責任を持っています。

## Feeccエンジニア作業台

エンジニア作業台の主なタスクは、組立エンジニアの作業スペースを整理することです。エンジニアが必要とするデバイスは、タスクによって異なります。

- 製造プロセスのビデオ録画を組織するためのIPカメラ;
- 個人のRFIDカードによるシステム内での識別のためのRFIDリーダー;
- 製品ラベルのスキャンのためのバーコードリーダー;
- 製造製品のラベリングのためのラベルプリンター;
- さまざまなデバイス/ステーションからデータを収集するデジタルセンサー。

エンジニア作業台ソフトウェアは通常、次のコンテナで構成されています。まず、製品の組み立て中に従業員が作��するコンピューターにインストールが必要なソフトウェア:

1. [feecc-workbench-daemon](https://github.com/Multi-Agent-io/feecc-workbench-daemon) — Feeccプラットフォームの中心であり、ユーザーにすべてのFeeccの機能と構成へのアクセスを提供するソフトウェア。また、ラベルプリンターを使用してラベルを印刷し、RTSPストリームからビデオを記録するための軽量サービスも含まれています。
2. [feecc-workbench-frontend](https://github.com/Multi-Agent-io/feecc-workbench-frontend) — Feeccプラットフォームとの従業員のインタラクションのためのWebインターフェース;
3. [feecc-hid-reader-daemon](https://github.com/Multi-Agent-io/feecc-hid-reader-daemon) — USB周辺機器のイベントを送信するためのPythonデーモン;

次に、従業員のコンピューターとローカルネットワーク内のサーバーの両方にインストールできるソフトウェア:

1. [feecc-ipfs-gateway](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) — IPFSにファイルを公開するためのマイクロサービスであり、より具体的には、ファイルCIDをRobonomics Networkに公開するためのものです。

以下の図は、企業環境でのFeeccエンジニアの職場アーキテクチャを示しています。IPFSゲートウェイ（およびIPFSノードおよびクラスターピアとしてのMongoDB）は、各従業員のコンピューターにホストされることができ、これによりシステムの分散化が向上しますが、計算リソースのコストがかかります。

<LessonImages src="feecc-course/feecc_global_hardware.png" alt="an architecture of Feecc"/>

### 1つのワークスペースのサポートされるハードウェア:

#### RFIDスキャナー

内部バッジで現場のエンジニアを認証するためにUSB RFIDスキャナーが必要です。着信情報は、`feecc-hid-reader-daemon`を使用して処理されます。

#### バーコードスキャナー

USBバーコードスキャナーは、バーコードによる製品の識別、サービスへのコマンドの送信、および証明書の正しい割り当てのために必要です。着信情報も`feecc-hid-reader-daemon`で処理されます。2次元での読み取りが望ましいが、必須ではありません。

#### 従業員のコンピューター

小さなシングルボードコンピューターは、外部デバイス（バーコードスキャナー、RFIDスキャナー）からの信号を処理し、プリンターに画像を印刷するためのリクエストを送信し、ビデオ録画の開始と停止、IPFSゲートウェイへのデータ送信を行います。次のサービスを実行します:`feecc-workbench-frontend`、ラベルプリンターとカメラサポートを備えた`feecc-workbench-daemon`、`feecc-hid-reader-daemon`。Wi-FiまたはLAN経由のインターネット接続が必要です。
    
注意すべきは、モニター付きの単一の支払いコンピューターの代わりに、任意のコンピューターを使用できることです。オペレーティングシステムGNU/LINUXがネイティブまたは仮想マシンを介してインストールされている必要があります。
    
最小技術仕様:
    
- CPU: Broadcom BCM2711、クアッドコアCortex-A72（ARM v8）64ビットSoC @ 1.8GHzまたは同等;
- RAM: 4GB LPDDR4-3200または同等。

#### 画面

従業員が現在の生産工程に関する情報を入力および表示するためにモニターを使用します。また、エンジニアに現在の段階に関するヒントを表示します。他の入力デバイスも使用できます。

#### ラベルプリンター

ラベルプリンターは、製品の識別および検証のためにラベルを印刷するために使用されます。プリンターとのやり取りは、`feecc-workbench-daemon`の対応サービスを使用して行われます。私たちの場合、XPrinter 236Bプリンターを使用しています。

#### IPカメラ

製品証明書に含めるために製造プロセスをキャプチャするためのIPカメラ。製品の組み立てエリアの上に配置されています。カメラとのやり取りは、`feecc-workbench-daemon`の対応サービスを使用して行われます。

必要な技術仕様：PoE電源供給、RTSPデータ転送プロトコル。私たちの場合、Hikvision HiWatch DS-i200dを使用しています。

### 複数のワークスペースに対応するサポートされるハードウェア：

#### ルーターまたはスイッチ

IPカメラに電力を供給し、それらを`feecc-workbench-daemon`サービスに接続するために、PoE 802.3afサポートおよび出力ポートでのPoE給電が必要なルーターまたはスイッチ。私たちの場合、MikroTik hEX PoE（3〜4ワークプレース用1台）および電源を使用しています。

#### サーバー（オプション）

`feecc-ipfs-gateway`を実行できる大きなサーバーもインストールできます。従業員のワークプレースの1つのコンピューターの場所に配置することができます。 

最小の技術仕様:

- CPU：Intel Xeon E-2200プロセッサーまたは同等品；
- RAM：8GB；
- ストレージ：1TB HDD；
- LANインターフェース：1 Gbit/s。

## Feecc Analytics

Feecc Analyticsの主なタスクは、完成品の追跡プロセスと製品管理部門における事前販売検査の組織化です。

Feecc Analyticsは以下のコンテナに依存しています:

1. [feecc-analytics-backend](https://github.com/Multi-Agent-io/feecc-analytics-backend) — アナリティクスサービスを展開するための主要ソフトウェア;
2. [feecc-analytics-frontend](https://github.com/Multi-Agent-io/feecc-analytics-frontend) — アナリティクスサービスのフロントエンドソフトウェア;

通常、組織内でデータセキュリティの目的で単一のサーバーにローカルに展開されます。

Feecc Analyticsが動作するために必要なハードウェアは、ウェブアプリケーションが実行されるローカルまたはリモートサーバー（仮想マシン）とバーコードスキャナーです。各認証された従業員は、ユーザー名とパスワードを使用して自分のコンピューターからウェブアプリケーションにアクセスできます。

## Feecc Validator

Feecc Validatorの主なタスクは、デジタル製品証明書の整合性を検証するために異なるデータストア���らのデータを比較することです。

Feecc Validatorは以下のコンテナに依存しています:

1. [feecc-validator-backend](https://github.com/Multi-Agent-io/feecc-validator-backend) — 証明書の検証とユーザーが提供されたユニットに関連するデータを取得するために設計されたマイクロサービス;
2. [feecc-validator-frontend](https://github.com/Multi-Agent-io/feecc-validator-frontend) — 検証マイクロサービスとのインタラクションのためのWebインターフェース。

Feecc Analyticsと同様に、単一のサーバーにローカルに展開され、バーコードスキャナーが必要です。

<RoboAcademyText fWeight="500">
次のレッスンでは、コンピューター上でローカルに実行される小さなデモを通じてFeeccシステムを詳しく見ていきます。
</RoboAcademyText>