---
title: "レッスン＃4a、ゲートウェイのセットアップ：Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: ホームアシスタントコース
lessonNumber: 4
metaOptions: [RobonomicsとHome Assistantを使用した主権スマートホームを学ぶ]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## イントロ

これは、ZigbeeアダプターとZigbee2MQTTブリッジを使用してデバイスを接続するためのシナリオ設定です。[JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en)（すべての必要なファームウェアを備えています）をお持ちの場合、これらの手順に従って進めることができます。ただし、他のアダプターをお持ちの場合は、まずZigbee2MQTTソフトウェアをフラッシュする必要があります。お使いのデバイスの手順は[こちら](https://www.zigbee2mqtt.io/guide/adapters/)で見つけることができます。

Home Assistantへの接続をテストするためにスマートデバイスも必要です。


## 手順

<List type="numbers">

<li>

ソフトウェアのインストール

<List>

  <li>
    Node.jsランタイム環境リポジトリをセットアップし、必要な依存関係をインストールします:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Node.js（v14.X、V16.x、V17.xまたはV18.X）およびパッケージマネージャー<code class="nowb">npm</code>（6.X、7.Xまたは8.X）の正しいバージョンが、Node.jsと自動的にインストールされていることを確認してください:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Zigbee2MQTTのディレクトリを作成し、ユーザーを所有者として設定します:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Zigbee2MQTTリポジトリをクローンします:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    依存関係をインストールします。 <code>npm ci</code> は無視できる警告を生成する可能性があることに注意してください。
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

アダプターの接続と設定

<List>

<li>

ZigbeeアダプターをRaspberry Piに接続します。次に、スティックの場所を見つける必要があります。次のコマンドを入力してください:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

出力は次のようになります:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

この例では、スティック接続ディレクトリは <code>ttyUSB0</code> です。
</li>

<li>

Zigbee2MQTTを開始する前に、<code>configuration.yaml</code> ファイルを編集します。

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

基本的な構成にはいくつかの調整が必要です。 次のステートメントを変更します:

\- <code>homeassistant:</code> を <code>true</code> に変更すると、センサーが自動的にHome Assistantに接続されます。

\- <code>mqtt</code> の下にある <code>user</code> と <code>password</code> のコメントを外し、MQTTブローカーからのユーザー名とパスワード（引用符で囲まれた文字列）を入力します。

\- <code>serial</code> -> <code>port</code> のポートをスティック接続ディレクトリに変更します。 この例では: <code>/dev/ttyUSB0</code>。

調整された構成ファイルは次のようになります:

<LessonCodeWrapper language="yaml">
# Home Assistant integration (MQTT discovery)
homeassistant: true
# allow new devices to join
permit_join: true
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: 'YOUR_USERNAME'
  password: 'YOUR_PASSWORD'
# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/YOUR_PORT
</LessonCodeWrapper>


**余分な：**

すでに家にアクティブなZigbeeアダプターまたはゲートウェイがある場合、別のスティックを構成している場合、それらは互いに���合します。 この問題を解決するには、新しいデバイスのチャンネルを変更する必要があります。 これにより、構成ファイルの末尾に次の文字列が追加されます:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Zigbee2MQTTを開始します：

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

正常に開始された場合、次のようなものが表示されます：

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

デバイスのペアリング

<List>

<li>

スマートデバイスを接続する時間です。デバイスを接続モードに切り替える最も一般的な方法は、電源ボタンを押し続けるか、5回オン/オフすることです。Zigbee2MQTTが実行されていることを確認してください。

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

デバイスが接続されると、次のようなメッセージが表示されます：

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

センサーのIDを覚えておいてください：この例では<code>0x00158d0003eeeacf</code>です。

今、このIDのセンサーがHome Assistant WebUIに表示されるはずです。 <code>設定</code> -> <code>デバイスとサービス</code> -> <code>デバイス</code>に移動して確認してください：

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

すべてのセンサーを追加した後、<code>Ctrl+C</code>でプログラムを停止できます。もうデバイスを追加したくない場合は、再び構成ファイルを開いて<code>permit_join:</code>を<code>false</code>に設定できます。
</li>

</List>
</li>

<li>

Autostart用のサービスを作成中

<List>

<li>

サービスを作成する必要があります。ファイルを作成してくださ��：

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

次の内容をファイルに追加してください。ただし、<code>YOUR_RASPPI_USERNAME_HERE</code>を変更してください。ユーザー名がわからない場合は、<code>whoami</code>コマンドを使用してください。

<LessonCodeWrapper language="bash">
[Unit]
Description=zigbee2mqtt
After=network.target 
[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=YOUR_RASPPI_USERNAME_HERE
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>
</li>

<li>

構成が機能することを確認してください：

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

出力は次のようになります:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Zigbee2MQTTを起動時に自動的に開始するようにサービスを有効にしてください：

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>