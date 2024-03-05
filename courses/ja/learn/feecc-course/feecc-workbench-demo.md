---
title: "Feeccのデモ"
description: このコースは、Feeccシステムとそのすべてのコンポーネントを知ることについてです。
metaOptions: [学ぶ、Feeccに慣れる]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
このレッスンでは、仮想テストベッドを使用してFeeccの基本機能をテストします。これは、製品追跡システムの実際のインスタンスをエミュレートした例です。
</RoboAcademyText>

デモのために、ラベル印刷やビデオ録画などの典型的な機能はありませんが、そのようなシステムの主要なコンセプトを保持しています。

## 前提条件

デモを実行するには、次のものが必要です:

- UNIXライクなシステム（[Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/)でテスト済み）
- [Docker](https://docs.docker.com/engine/install/ubuntu/)および[Docker compose](https://docs.docker.com/compose/)
- Webブラウザ（Google ChromeとMozilla Firefoxでテスト済み）

## インストール

次のコマンドを実行します:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

動作しているコンテナを確認するには、次のコマンドを実行します:

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

次の出力が表示されるはずです:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## デモの開始

1. ブラウザでhttp://localhost:3000/に移動し、歓迎画面が表示されるはずです。

2. この段階では、システムは従業員にRFIDカードをスキャナーに置くよう促します。デモでは、認証��`hid-emulator.py`を使用できます。これを行うには、別のDockerコンテナを実行します:

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

RFIDカードを提供し、バーコードをスキャンする2つの機能をエミュレートできます。最初の機能が必要です。`1`を入力します。

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the RFIDスキャナー.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. 構成タイプを選択する画面が表示されます。`SINGLE DEVICE`を選択してください。

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. ユニークなIDが作成されたデバイスでの作業の開始を示す通知が左下隅に表示されます。青い通知は仮想プリンターのアクティビティも表示します。実際のセットアップでは、デバイスのIDが印刷されたバーコードがこの時点で印刷されます。

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. `START COMPOSITION`をクリックしてデバイスの組み立てプロセスの記録を開始します。すべての必要な組み立て手順を進めるよう促されます。従業員が手順を完了するたびに、`NEXT`ボタンをクリックし、その後ビデオがIPFSに保存されます。組み立てを一時停止する（`PAUSE`）ことも可能で、後で戻って再開するか、プロセスを完全に停止する（`STOP`）こともできます。

6. すべての組み立て段階が完了すると、`FINISH`ボタンが表示され、その後Feeccはデバイスの証明書の保存を提案します。ただし、これを行う前に、ブラウザで[local Robonomicsノード](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer)を開いておく必要があります。その後、Feeccに戻り、`SAVE PASSPORT`をクリックしてください。
    
    画面の隅に新しい通知が表示されます：証明書がRobonomicsとIPFSにアップロードされたことを通知する通知、および証明書へのリンクを含むシールタグとQRコードの印刷に関する2つの青いメッセージ。

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. Robonomicsローカルノード画面の`Chain info`セクションで、`recent events`列の下に新しいイベント`datalog.NewRecord`が表示されるはずです。展開すると、デバイスの証明書ファイルに対応するIPFS CIDが`bytes`フィールドに表示されます。

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

印刷されたQRコードには、このCIDへのリンクが含まれており、ブラウザで証明書ファイルを開くことができます。ローカルIPFSノードがその探索性を持っていない場合は、`localhost:8080/ipfs/CID`でファイルにアクセスできます。証明書の内容は次のようになります：

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: 423d3c1b42f6427e80cc881a16e07451
Unit Model Name: Single Device
Total Assembly Time: 0:05:37
Production Stages:
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:38:47
  Finish Time: 26-06-2023 17:40:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:40:30
  Finish Time: 26-06-2023 17:42:06
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:42:16
  Finish Time: 26-06-2023 17:43:00
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Saw Through the Single Device
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:00
  Finish Time: 26-06-2023 17:43:51
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:51
  Finish Time: 26-06-2023 17:44:36
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
</LessonCodeWrapper>

8. 今度は、複数のデバイスで構成される複合組立のための証明書を作成してみましょう。タイプ選択メニューで`COMPOSITE DEVICE`をクリックし、次に`SAMPLE DEVICE`をクリックしてください。構成番号フィールドにあるユニットIDをコピーしてください。後で必要になります。その後、デバイスの組み立ての標準手順を進めてください。

9. 組み立て後、`COMPOSITE DEVICE`に戻り、複合組立を最終的にするために`FINAL ASSEMBLY`を押してください。システムは、組み立てられたデバイスのユニットIDを提供するよう求めます。従業員はバーコードをスキャンする必要があります。このプロセスをシミュレートするには、`hid-emulator.py`に戻り、バーコードスキャンのために関数`2`を選択し、保存されたユニットIDを挿入してください。

10. 次に、システムは複合組立の必要な段階を進むよう促し、そのための証明書を生成します。

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: d08101feae7c4efbb5529885c9ad544b
Unit Model Name: Composite Device
Total Assembly Time: 0:00:03
Production Stages:
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:25
  Finish Time: 26-06-2023 18:18:26
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Tape the Sample Device to the base plate
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:26
  Finish Time: 26-06-2023 18:18:27
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:27
  Finish Time: 26-06-2023 18:18:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
Unit Components:
- Unit Unique Code: b165b382c3674127a6aaf5817c5a7040
  Unit Model Name: Sample Device
  Total Assembly Time: 0:00:03
  Production Stages:
  - Name: Prepare Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:45
    Finish Time: 26-06-2023 18:17:46
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Assemble Sample Device
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:46
    Finish Time: 26-06-2023 18:17:47
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Stack Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:47
    Finish Time: 26-06-2023 18:17:48
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
Total Assembly Time (Including Components): 0:00:06
</LessonCodeWrapper>

11. デモを削除するには、次のコマンドを入力してください。

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
次のレッスンでは、Feeccシステムのすべての必要なコンポーネントを実際に展開していきます。
</RoboAcademyText>