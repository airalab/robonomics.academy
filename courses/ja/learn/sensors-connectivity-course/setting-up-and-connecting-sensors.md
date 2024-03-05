---
title: "レッスン＃3、センサーの設定と接続"
description: 'センサーの設定と接続'
lessonNumber: 3
metaOptions: [学ぶ, センサー接続性＆分散型センサーネットワーク]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

当社のセンサーは、sensor.community ファームウェアの拡張バージョンである Robonomics ファームウェアを使用しており、いくつかのセンサーが追加され、データ送信スキームが変更されています。 ソース コードは [リンクで](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware) にあります。

Robonomicsボードを使用する場合、「接続」セクションに移動できます。

## 要件

**Linuxの場合:**

<List type="numbers">

<li>

USBポートにアクセスするために、`dialout`グループにユーザーを追加します（Ubuntuの場合）:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>コンピューターを再起動します。</li>

<li>

Robonomics `airrohr-flasher`実行可能ファイルを[リリース](https://github.com/airalab/sensors-connectivity/releases)からダウンロードします。

</li>

<li>

ファイルの権限を変更して実行します。

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**Windowsの場合:**

<List type="numbers">

<li>

USB2シリアル用のドライバーをインストールします（Windows 10では自動的に開始するはずです）- NodeMCU v3（CH340）用のドライバー：[リンク](http://www.wch.cn/downloads/file/5.html)、[代替リンク](https://d.inf.re/luftdaten/CH341SER.ZIP)。 

</li>

<li>

Robonomics `airrohr-flasher` 実行可能ファイルを [リリース](https://github.com/airalab/sensors-connectivity/releases) からダウンロードして実行します。

</li>

</List>

**MacOSの場合:**

<List type="numbers">

<li>

USB2シリアル用のドライバ��をインストールします — NodeMCU v3用のドライバー（CH340）: [リンク](http://www.wch.cn/downloads/file/178.html), [代替リンク](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Robonomics `airrohr-flasher` 実行可能ファイルを [リリース](https://github.com/airalab/sensors-connectivity/releases) からダウンロードして実行します。

</li>

</List>


## セットアップ

<List type="numbers">

<li>

PCにセンサーを接続し、`airrohr-flasher`プログラムを実行します。プログラムを開くと、次のような画面が表示されます（OSによって異なります）。

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

`Board`フィールドは自動的に入力されるはずです。入力されない場合は、ドロップダウンリストから必要なポートを選択してください。

<RoboAcademyNote type="okay" title="INFO">
`airrohr-flasher`がボードを見つけられない場合は、<b>要件</b>の部分を正しく行ったことを確認してください。
</RoboAcademyNote>

</li>

<li>

好みの言語でファームウェアを選択し、`Upload`をクリックします。ファームウェアのアップロードには時間がかかります。後で言語を変更したり、クリアなインストールを行う場合（構成をリセットする場合）は、`Erase flash`ページに移動し、センサーのフラッシュメモリを消去するボタンを押します。

</li>

<li>

ファームウェアをダウンロードした後、ESPを再起動します（USBを切断して再接続します）。

</li>

<li>

チェックボックスメニューからセンサーを選択します。SDS011とその他のセンサーを選択します。`Save configuration`を押します。

</li>

<li>

構成をダウンロー���した後、ESPを再起動します（USBを切断して再接続します）。

</li>

</List>

## 接続

<List type="numbers">

<li>

再起動後、ボードは`RbonomicsSensor-xxxxxxxxx`という名前の Wi-Fi ネットワークを作成します。 携帯電話またはコンピュータから接続します。認証ウィンドウが表示されます (認証ウィンドウが表示されない場合は、ブラウザを開いて「192.168.4.1」に移動します)。

</li>

<li>

リストからWi-Fiネットワークを選択します（リストにない場合は自分で入力してください）パスワードフィールドを入力します。

</li>

<li>

センサーを設置する場所の座標を入力します。

<RoboAcademyNote type="warning" title="WARNING">
センサーの座標はその後、一般に公開される地図上に表示されます。プライベート情報を表示したくない場合は、近いが正確でない座標を入力してください。
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

`設定を保存して再起動`をクリックします。 ボードが再起動し、指定された Wi-Fi ネットワークに接続します。

</li>

<li>

[ロボノミクス センサー マップ](https://sensors.robonomics.network/#/) を開き、センサーを設置した場所を見つけます。 数分以内に、センサーとデータが地図上に表示されるようになります。


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

これでデフォルトのインストールが完了しました。より高度なセットアップ（データを独自のサーバーに送信する）については、次のセクションを読んでください。

## 追加 構成

設定する前に、Wi-Fiネットワーク内のセンサーのアドレスを見つける必要があります。これには、`airrohr-flasher`を使用できます（コンピューターはセンサーと同じネットワークに接続している必要があります）。それを起動し、`Discovery`タブに移動し、`Refresh`を押して、しばらく待ってからセンサーのアドレスが表示されます。

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

このアドレスをダブルクリック（またはブラウザに入力）すると、センサーメニューに移動します。

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

これで、設定を���スタマイズできます。


## カスタムAPI

独自のサーバーにデータを送信する設定も行うことができます。これには、`APIs`タブで`Send to own API`をクリックし、サーバーアドレスとポート（センサー接続用の`65`）を指定します。

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

`保存して再起動`をクリックして設定を保存します。