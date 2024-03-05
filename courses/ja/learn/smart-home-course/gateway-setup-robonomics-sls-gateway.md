---
title: "レッスン #4b、ゲートウェイのセットアップ: ロボノミクス SLS ゲートウェイ"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: ホームアシスタントコース
lessonNumber: 5
metaOptions: [RobonomicsとHome Assistantを使用した主権スマートホームを学ぶ]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## これは何についてですか

これはRobonomics SLS Gatewayを使用してデバイスを接続するためのシナリオ設定です。 Robonomicsは、[Smart Logic System](https://github.com/slsys/Gateway)プロジェクトによって開発されたゲートウェイからデザインインスピレーションを得て、回路の一部を変更しました。 Robonomicsからゲートウェイを注文するか、[設計図](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01)を使用して独自のゲートウェイを構築できます。

ゲートウェイに必要なソフトウェアをインストールし、設定してホーム アシスタントに接続します。

<robo-academy-note type="note" title="Attention">
  ファームウェアを更新するためのSmartRF Flash Programmerは、Windowsオペレーティングシステムが必要です。
</robo-academy-note>

## 手順

<List type="numbers">

<li>

Zigbeeマイクロコントローラーファームウェアのインストール

<List>

<li>

まず、ゲートウェイのCC2652Pマイクロコントローラーをフラッシュする必要があります。 SLS Gatewayの下部にあるスイッチ<code>2</code>、<code>4</code>、および<code>7</code>を<code>ON</code>に設定し、他のスイッチは<code>OFF</code>にする必要があります。

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

USB-A<>USB-Cケーブルでゲートウェイをコンピューターに接続します。

<robo-academy-note type="warning" title="WARNING">
  現時点では、ゲートウェイはUSB-C<>USB-Cタイプをサポートしていないため、USB-A<>USB-Cタイプのケーブルのみを使用してください。
</robo-academy-note>

</li>

<li>

CC2652ファームウェアには、Texas InstrumentのSmartRF Flash Programmer v2が必要です。 [公式サイト](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2)からダウンロードしてインストールしてください。

</li>

<li>

CC2652Pマイクロコントローラーのファームウェアを[GitHubリポジトリ](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator)からダウンロードします。

</li>

<li>

プログラムを実行します。 <code>Connected device</code>ウィンドウでCC2652Pマイクロコントローラーを選択し、ファームウェアへのパスを設定し、フラグを画像のように<code>Erase, Program, Verify</code>に設定し、<code>Start</code>を押します。

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

正常にフラッシュが完了すると、<code>Success!</code>メッセージが表示されます。 これでUSBケーブルを取り外すことができます。

</li>
</List>
</li>

<li>

マイクロコントローラーファームウェアのインストール

<List>

<li>

ソフトウェアのインストールのためにゲートウェイをセットアップする必要があります。 Raspberry Piに直接ゲートウェイを接続し、そのデバイスで以下のすべてのコマンドを入力することをお勧めします。 

</li>

<li>

SLSゲートウェイの下部にあるスイッチ<code>1</code>と<code>3</code>を<code>ON</code>に設定し、他のスイッチは<code>OFF</code>にする必要があります。 次に、ゲートウェイをRaspberry PiのUSBタイプCポートに接続します。

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

SSH経由でRaspberry Piに接続します。

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

ファームウェアを含むリポジトリをクローンします。

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

SLSゲートウェイをフラッシュするには、<code>Clear</code>および<code>Flash_16mb</code>スクリプトを実行する必要があります。

<LessonCodeWrapper language="bash" noLines>
cd robonomics-hass-utils/esp_firmware/linux
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Flash_16mb.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Flash_16mb.sh
</LessonCodeWrapper>
</li>

<li class="no-bullet">

\- **トラブルシューティング**

ゲートウェイのファームウェアを更新する際に問題が発生した場合は、追加の手順を実行する必要があります。

<List>

<li>

pySerialモジュールがインストールされていることを確認してください。

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

ユーザーにUSBポートへのアクセス権を与えてください：

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

一部の場合、ファームウェアを更新するためにスクリプト内の帯域設定を変更する必要があります。 <code>Flash_16mb.sh</code>スクリプトをnanoエディタで開き、ボーレートパラメータを<code>921600</code>からより小さい値（たとえば、<code>115200</code>）に変更してください。
</li>
</List>
</li>

<li class="no-bullet">

\- **追加**

他のオペレーティングシステム（macOSおよびWindows）を使用してファームウェアを更新するオプションも提供しています。 OSに応じて名前が異なるフォルダ内に対応するスクリプトがあります。

</li>
</List>
</li>

<li>

ゲートウェイの設定

<List>

<li>

ゲートウェイの背面のスイッチを新しい位置に設定してください。スイッチ<code>5</code>（RX Zigbee to ESP）および<code>6</code>（TX Zigbee to ESP）は<code>ON</code>の位置に、他は<code>OFF</code>の位置にする必要があります。


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Type-C電源ケーブルを接続してください。中央のインジケータライトが緑色に点灯するはずです。

</li>

<li>

最初の起動時に、ゲートウェイはSSID <code>zgw****</code>でWi-Fiを共有し始めます。このネットワークに接続してください。信号がかなり弱い場合があるため、SLSゲートウェイをコンピュータに近づけておくとよいでしょう。

接続が成功すると、Webインターフェースが開きます（または192.168.1.1アドレスで見つけることができます）。

</li>

<li>

Wi-Fiページに移動し、ユーザー名/パスワードを入力して<code>Save</code>ボタンを押してください。その後、<code>Reboot</code>ボタンを押してください。ゲートウェイは再起動し、Wi-Fiネットワークに接続します。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

SLSゲートウェイのローカルIPアドレスを見つけてWebインターフェースにアクセスしてください。これには[Fing](https://www.fing.com/products)アプリやターミナル内の<code>arp -a</code>、またはNmapを使用できます。 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

ここで<code class="bold">xxx</code>はローカルネットワーク内のIPアドレスです。ゲートウェイの名前は次のようになります：<code>zgw****</code>。ゲートウェイのIPをブラウザに貼り付けてゲートウェイのWebインターフェースを開いてください。
</li>

<li>

<code>Setting</code> -> <code>Hardware</code> に移動し、設定が画像のようになっていることを確認してください。必要に応じて設定を修正し、<code>Save</code> ボタンをクリックしてください。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

必要な値の入ったテーブル:


| Field        	         | **Value**          |                                                                     	
|------------------------|--------------------|
| Zigbee module          | TI                 |
| Zigbee UART RX         | 22                 |
| Zigbee UART TX         | 23                 |
| Zigbee RST Pin         | 18                 |
| Zigbee BSL Pin         | 19                 |
| Button Mode            | 33 (pullUP - true) |
| Number addressable leds| 0                  |
| Led Red (or addr)      | 21                 |
| Led Green              | 5                  |
| Led Blue               | 27                 |
| I2C SDA                | 255                |
| I2C SCL                | 255                |

</li>

<li>

その後、ゲートウェイを再起動してください。<code>Actions</code> -> <code>Reboot system</code> を右上隅で選択してください。Zigbee情報ウィンドウでCC2652Pマイクロコントローラーを使用してゲートウェイが正常に動作していることを確認してください。DeviceState は <code>OK</code> である必要があります。

</li>

<li>

ゲートウェイを再起動してください。<code>Actions</code> -> <code>Reboot</code> を右上隅で選択してください。

</li>

<li>

デバイスを自動的にHome Assistantに追加するように構成してください。<code>Zigbee</code> -> <code>Config</code> に移動し、<code>Home Assistant MQTT Discovery</code> と <code>Clear States</code> を選択してください。変更を保存し、再度SLSゲートウェイを再起動してください。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **追加**:

すでに自宅にアクティブなSLSゲートウェイがある場合、別のゲートウェイ��構成している場合、それらは互いに競合します。この問題を解決するには、新しいデバイスのチャンネルを変更する必要があります。

これを行うには、<code>Zigbee</code> -> <code>Config</code> に移動し、別のチャンネル（たとえばチャンネル15）に変更してください。

</li>

<li>

デバイスを接続するには、<code>Zigbee</code> -> <code>Join</code> に移動してください。センサーをペアリングモードに設定し、デバイスを接続モードに切り替える最も一般的な方法は、電源ボタンを押し続けるか、5回オン/オフすることです。 <code>Enable Join</code> ボタンを押して Zigbee デバイスの検索を開始してください。アクティブなセンサーが表示されます。

</li>
</List>
</li>

<li>

SLSゲートウェイをHome Assistantに接続する

<List>

<li>

SLSゲートウェイでMQTTを構成する必要があります。SLSゲートウェブインターフェースに戻り、<code>Settings</code> -> <code>Link</code> -> <code>MQTT Setup</code> に移動してください。

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

ブローカーアドレス（ローカルネットワーク内のHome Assistantを実行しているRaspberry Piのアドレス、[Fing](https://www.fing.com/products)アプリやRPiで<code>ip -a</code>コマンドを使用して���つけることができます）、ポート（デフォルトは1883）、ブローカーのユーザー名とパスワード（以前に作成したもの）、トピック名（任意のものを選択できます）を追加してください。また、ローカルRaspberry PiのIPアドレスは静的である必要があります。

<code>Enable</code> と <code>Retain states</code> をクリックするのを忘れないでください。

</li>

<li>

変更を保存してください。これでデバイスが自動的にHome Assistantに表示されます。

</li>
</List>

</li>

<li>

デバイスを接続する 

<List>

<li>

デバイスを接続するには、<code>Zigbee</code> -> <code>Join</code> に移動してください。センサーをペアリングモードに設定し、デバイスを接続モードに切り替える最も一般的な方法は、電源ボタンを押し続けるか、5回オン/オフすることです。

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

<code>Enable Join</code> ボタンを押して Zigbee デバイスの検索を開始してください。アクティブなセンサーが表示されます。

</li>

</List>
</li>

</List>