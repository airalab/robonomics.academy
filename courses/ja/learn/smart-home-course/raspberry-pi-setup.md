---
title: "レッスン＃2、Raspberry Piのセットアップ"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: ホームアシスタントコース
lessonNumber: 2
metaOptions: [RobonomicsとHome Assistantを使用した主権スマートホームを学ぶ]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## イントロ

このレッスンでは、Raspberry PiをIoTハブにする準備をします。次のすべての必要なコンポーネント、すなわち：

<List>

- サーバーのオペレーティングシステムとしてRaspberry Pi用のUbuntu Linuxディストリビューション；
- Home Assistantパッケージ；
- IPFSパッケージ；
- robonomics-interfaceライブラリ。

</List>

## 手順

<List type="numbers">

<li>

Raspberry Piの準備と設定

<List>

  <li>

  Raspberry Pi用の[64ビットUbuntu Server 22.04 LTS](https://ubuntu.com/download/raspberry-pi)またはそれ以降のイメージをダウンロードします。
  </li>

  <li>

  コンピューターに[Raspberry Pi Imager](https://www.raspberrypi.com/software/)というイメージファイルを書き込むためのツールをダウンロードしてインストールします。
  </li>

  <li>

  SDカードを挿入してRaspberry Pi Imagerを実行します。ダウンロードしたオペレーティングシステムのイメージを選択し、ストレージのドロップダウンメニューからSDカードを選択してください。

  </li>

  <li>

  設定を開き、<code>SSHを有効にする</code>オプションと<code>パスワード認証を使用する</code>パラメータをチェ��クします。

  \- <code>ユーザー名とパスワードの設定</code>で、Raspberry Piユーザーのユーザー名とパスワードを追加します。

  \- <code>無線LANの設定</code>で、Wi-Fiとそのパスワードを入力し、ドロップダウンリストから国を選択します。その後、<code>書き込み</code>します。

  <robo-academy-note type="okay">
  実際のWi-Fi名とWi-Fiパスワードを入力したことを確認してください。
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  書き込みが完了するまで待機し、その後SDカードをRaspberry Piに挿入して電源を入れます。Wi-Fiネットワークに接続するはずで、それには時間がかかります。

  </li>
  
  <li>

  今、デバイスのアドレスを見つける必要があります。これを行うには、[Fing App](https://www.fing.com/products)、<code>arp -a</code>コマンド、または[nmap](https://nmap.org/download.html)などのネットワークスキャンのさまざまな方法を使用できます。次にnmapを使用します。

  コマンドを使用してnmapをインストールします

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  次に、ローカルネットワーク内のアドレスを見つけます。それは<code>192.168.xxx.xxx</code>または<code>172.xxx.xxx.xxx</code>のように見えるはずです。nmapはローカルネットワーク上の多くのアドレスを見つけることができるので注意してください。

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  次に、以下に示すようにネットワークをスキャンします。アドレスの最後のオクテットを<code>0</code>に置き換えます。

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  コマンドの出力は次のようになります。

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon noLines>
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:02:24 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:04:45:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-NO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B3:7D:9E:94:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
</LessonCodeWrapper>

  この例では、アドレスは<code>192.168.43.56</code>です。

  </li>

  <li>

  見つけたIPを使用してRaspberry PiにSSHで接続します。以前に作成したユーザー名とパスワードを使用してください。
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  その後の手順は、Raspberry Pi自体でSSH経由で実行されます。
  
  </li>
</List>
</li>

<li>

Home Assistantのインストール

<List>
  <li>

  <robo-academy-note type="okay">

以下に示すいくつかのソフトウェアバージョンは古くなっている場合があります。最新バージョンについては、[Robonomics Home Assistantイメージのインストールリポジトリ](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage)を参照してください。

  </robo-academy-note>

  開始する前���、Raspberry Piシステムを更新し、必要なパッケージをインストールします。インストール中にサービス再起動の要求が表示されます。単に<span class="accent">ok</span>を選択し、<code>tab</code>ボタンを押してEnterキーを押してください。

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  <code>homeassistant</code>ユーザーとHome Assistant Coreのディレクトリを作成します。

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  Home Assistant Core用の仮想環境を作成し、それに切り替えます。これは<code>homeassistant</code>ユーザーとして行う必要があります。コマンドを実行した後、ユーザーは<code>(homeassistant) homeassistant@ubuntu</code>のように見えるはずです。

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  その結果、仮想環境の名前が括弧内に表示されます。

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  必要なPythonパッケージをインストールします。

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  ホームアシスタントコアを初めて起動します。これにより、<code class="nowb">.homeassistant</code>構成ディレクトリが<code>/home/homeassistant</code>ディレクトリに自動的に作成され、基本的な依存関係がインストールされます。
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  最初のセットアップが進行中の間、<code>http://%RASPBERRY_IP_ADDRESS%:8123</code>のWebインターフェースを使用してインストールを確認してください。この例では：<code>http://192.168.43.56:8123</code>。ローカルネットワークに接続された任意のコンピュータからWeb UIを開くことができます。

  ログイン/パスワードの作成が完了したら、ホームアシスタントを<code>Ctrl+C</code>で停止してください。
  </li>
</List>
</li>

<li>

IPFSインストール

<List>

  <li>

  IPFSのインストールには、IPFSをダウンロードし、それとともにsystemdサービスを作成するために当社のスクリプトを使用できます。まず、ホームアシスタントの仮想環境を終了します。

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  次に実行します：

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Systemdサービス

<List>

<li>

Systemdサービスは、ホームアシスタントの起動を自動化するのに便利です。ホームアシ���タント用の新しいサービスを作成します。

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

以下を貼り付けます

<LessonCodeWrapper language="bash">
[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure
User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/srv/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>

</li>

<li>

サービスを有効にして開始します：

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl enable home-assistant@homeassistant.service
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl start home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Robonomics統合

<List>

<li>

Raspberry Piで<code>homeassistant</code>ユーザーでログインします。

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

ソースの仮想環境を有効にし、必要なPythonパッケージをインストールします。


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

次に、<code>.homeassistant</code>ディレクトリに移動し、<code class="nowb">custom_components</code>フォルダを作成し、統合のリポジトリをそこにクローンします。


<LessonCodeWrapper language="bash" noLines>
cd ~/.homeassistant
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
mkdir custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
cd custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
</LessonCodeWrapper>

</li>


<li>

その後、homeassistantユーザーを終了してサービスを再起動します。

<LessonCodeWrapper language="bash" noLines>
exit
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl restart home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

</List>



