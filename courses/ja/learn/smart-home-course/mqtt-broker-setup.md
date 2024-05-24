---
title: "第3課、MQTTブローカーのセットアップとHassの初期設定"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: ホームアシスタントコース
lessonNumber: 3
metaOptions: [RobonomicsとHome Assistantを使用した主権スマートホームを学ぶ]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## イントロ

Raspberry Piの設定が完了したら、次のステップはRaspberry PiにMQTTブローカーをインストールすることです。前述のように、ブローカーは異なるMQTTクライアント間のメッセージルーティングを担当しています。オープンソースのMQTTブローカーであるEclipse Mosquittoをインストールして設定します。

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

さらに、Home Assistantのセットアップを完了し、MQTT統合を追加します。

## 手順

<List type="numbers">

<li>


Mosquittoブローカーのインストール

<List>
<li>

Raspberry Piに[Mosquittoブローカー](https://mosquitto.org/)をインストールします:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

YOUR_USERNAME（任意のものを使用）とパスワード（コマンドの後にパスワードを入力するように求められます）を入力します:

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

設定ファイルを編集します:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

次の内容をファイルに追加します:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

ファイルを保存してサービスを再起動します:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

最後に、ブローカーの状態を確認します:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

次のようなものが表示されるはずです:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Home AssistantとMQTTのセットアップ

<List>

<li>

ウェブブラウザを開き、<code>http://%RASPBERRY_IP_ADDRESS%:8123</code>に移動します（前のレッスンで見つけたIPアドレスと同じ）。ただし、ルーターの設定により、Raspberry Piのアドレスが変わる可能性があることに注意してください。 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

最初のページで、任意の名前、ユーザー名、パスワードを入力し、「<code>CREATE ACCOUNT</code>」をクリックします
</li>

<li>

次に、自宅の名前を入力し、場所と単位系を設定してください。「<code>DETECT</code>」をクリックして、場所を検出し、その場所に基づいてタイムゾーンと単位系を設定します。場所を送信したくない場合は、これらの値を手動で設定できます。

</li>

<li>

次の画面では、Home Assistant がネットワーク上で検出したデバイスを表示します。以下に表示されているアイテムよりも少ないアイテムが表示されても心配しないでください。後でデバイスを手動で追加することができます。今は、<code>FINISH</code> をクリックして、メインの Home Assistant 画面に移動します。

</li>

<li>

次に、MQTT 統合をインストールする必要があります。<code>Settings</code> -> <code>Devices & Services.</code> に移動します。

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

右下隅にある <code>ADD INTEGRATION</code> ボタンを押します。開かれたウィンドウで <code>MQTT</code> を見つけます。

</li>

<li>

MQTT を選択し、ブローカーアドレスを設定します — <code>localhost</code> ポート — <code>1883</code> およびユーザー名とパスワード（Mosquitto Broker で以前に作成したもの同じ）を入力して、<code>SUBMIT</code> を押します。
</li>

</List>
</li>
</List>