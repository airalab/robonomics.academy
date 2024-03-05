---
title: "レッスン＃1、理論的なブリーフィング"
lastUpdate: Thu May 04 2023 12:54:41 GMT+0400 (Samara Standard Time)
description: ホームアシスタントコース
lessonNumber: 1
metaOptions: [RobonomicsとHome Assistantを使用した主権スマートホームを学ぶ]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## 主権スマートホームの主要コンポーネント 

<List>

1. **[Raspberry Pi](https://www.raspberrypi.org/)、シングルボードコンピュータ**。

すべての必要なソフトウェアをインストールした後、デバイスをIoTハブに変換できます。ハブの主な目的は、スマートホームのプロトコル、ネットワーク、アプリケーション、およびさまざまなデバイスを統括することです。

2. **[Home Assistant](https://www.home-assistant.io/)、オープンソースの制御システムソフトウェア**。

これはスマートデバイスの中心ハブとして設計されています。ネットワークを自動的にスキャンして既知のデバイスを検出し、ユーザーがすべての必要な自動化を簡単に設定できるようにします。 Raspberry PiにHome Assistantをインストールします。

Home Assistantはデバイスと通信し、データをローカルに保存しますが、残念ながらデバイスをリモートで制御することはできません。この問題を解決するために、Robonomics Networkを使用します。

3. **[Robonomics Network](https://robonomics.network/)、IoTアプリケーションの安全で信頼性の高い制御のための分散クラウド**。

これは、スマートデバイスとそのデータの保護のために分散化とブロックチェーン技術を組み込んだweb3技術を使用しています。

Robonomicsの主な機能は、Polkadot/Kusamaエコシステムのブロックチェーン（パラチェーン）に基づいて実装されています。パラチェーンの主な機能の1つは、デバイスを起動するコマンドを送信し、ユーザーデータをブロックチェーンに保存できる能力です。

Robonomicsパラチェーンには、1か月間の期間中、パラチェーンにトランザクションを送信するための手数料がかからないIoTサブスクリプション機能があります。このコースの実践的なセクションでは、サブスクリプション方法を使用します。

IoTハブとRobonomicsパラチェーンとの相互作用は、[robonomics-interface](https://github.com/Multi-Agent-io/Robonomics-interface)を使用して行われます。これは、Robonomicsとの便利なプログラミング用に特化したPythonライブラリです。

4. **[InterPlanetary File System](https://ipfs.tech/)（IPFS）、分散ファイルシステムでデータを保存および共有するためのピアツーピアソフトウェア**。

IPFSは、大きなファイルをブロックチェーンに保存するのを避けるために必要です（高額になるため）、代わりにファイルのIPFSハッシュを保存し、これらのファイルへのリンクとして機能します。

## スマートデバイスのプロトコル
スマートデバイスには2つの主要なプロトコルを使用します:

1. **[Zigbee](https://csa-iot.org/all-solutions/zigbee/)、無線通信プロトコル。**

スマートデバイスを接続するために非常に一般的に使用されています。低消費電力、設定の容易さと柔軟性、自己組織化および自己回復メッシュネットワークトポロジーのサポートが設計されています。Zigbeeサポートのある数千のデバイスが市場で利用可能であり、スマートホームソリューションの構築に非常に魅力的です。Zigbeeデバイスを制御するには、Zigbeeネットワークと別のネットワーク（例：Wi-Fi）間でデータを転送するゲートウェイが必要です。

2. **[Message Queuing Telemetry Transport](https://mqtt.org/) (MQTT)、IoTアプリケーションを制御するために設計されたパブリッシュ-サブスクライブプロトコル。**

このプロトコルは軽量で、最小限のリソースを必要とし、メッセージの配信の信頼性を確保します。このプロトコルは低��域幅、高遅延、信頼性の低いネットワーク向けに設計されており、高いセンサーメッセージのボリュームを操作するための優れたオプションです。MQTTには、MQTTブローカーを実行するサーバーが必要です（この場合、Raspberry Piと連携します）。ブローカーは、MQTTクライアントからのすべてのメッセージを受信し、適切なサブスクライブクライアントにメッセージをルーティングします。

## Zigbee接続のオプション
RobonomicsとHome Assistantを接続するためのデバイスを接続する2つのシナリオを探ります。

1. 最初のシナリオでは、デバイスを接続するために独立したZigbeeゲートウェイを使用しません。代わりに、[Zigbeeアダプタ](https://www.zigbee2mqtt.io/guide/adapters/)と[Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/adapters/)ソフトウェアの組み合わせが使用されます。

<LessonImages figure figureCaption="Architectural scheme of the scenario with Zigbee adapter" src="smart-house-course/lesson-1-1.png" alt="Architectural scheme of the scenario with Zigbee adapter"/>

アダプタ（例：JetHome USB JetStick Z2）はRaspberry Piに接続され、コンピューターとZigbee無線通信の間のインターフェースとして機能します。Zigbee2MQTTは、ZigbeeをMQTTネットワークに接続するためのソフトウェアです。Zigbeeネットワークからメッセージを取得し、それらを使いやすく、構造化されたMQTTメッセージに変換します。

2. 2番目のシナリオでは、デバイスをESP32マイクロコントローラーをベースにした[SLSゲートウェイ](https://github.com/slsys/Gateway)を使用して接続します。利便性のために、Robonomicsはゲートウェイの[独自の改造版](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01)を開発しました。

<LessonImages figure figureCaption="Architectural scheme of the scenario with SLS Gateway" src="smart-house-course/lesson-1-2.png" alt="Architectural scheme of the scenario with SLS Gateway"/>

SLSゲートウェイはZigbeeプロトコルメッセージのコーディネーターとして機能し、利用可能なほとんどのZigbee機器を使用できるようにします。Home Assistantとの統合には、MQTTプロトコルが使用されます。

## リモートコントロール

スマートホームのリモートコントロールは、[Robonomics分散アプリケーション](https://dapp.robonomics.network/)（dapp）を使用して行われ、ユーザーフレンドリーな方法でパラチェーン機能にアクセスを提供します。ユーザーデータのセキュリティと不変性は、暗号化されたデータをIPFSに送信することによって一方的に保証され、そのデータのIPFSハッシュをブロックチェーンに配置することによって他方的に保証されます。

</List>



