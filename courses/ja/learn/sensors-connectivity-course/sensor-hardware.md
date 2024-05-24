---
title: "レッスン＃2、センサーハードウェア"
description: 'センサーハードウェア'
lessonNumber: 2
metaOptions: [学ぶ, センサー接続性＆分散型センサーネットワーク]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

分散型センサーネットワークでの空気モニタリングに参加したい場合は、センサーを備えた空気汚染ボードを入手する必要があります。これを行う方法は2つあります。

<List>

<li>必要なすべての部品を注文し、カスタムボードを自分で組み立てる。</li>
<li>Robonomicsチームから使いやすいボードを注文する。</li>

</List>

## 手動ボードアセンブリ

独自のボードを構築するには、次のコンポーネントを見つける必要があります。

- レーザーPM2.5およびPM10センサー[SDS011](https://www.amazon.com/SDS011-Quality-Detection-Conditioning-Monitor/dp/B07FSDMRR5)

- ESP8266をベースにしたシリアルワイヤレスモジュール[NodeMcu V3 CH340](https://www.amazon.com/ACEIRMC-Wireless-Development-Compatible-MicroPython/dp/B092ZCG2X2)

- 5A DC-DC mini560コンバーター[(例)](https://www.amazon.com/Alinan-Efficiency-Converter-Regulator-Stabilized/dp/B09W8P1QNM)

- DCコネクター[(例)](https://www.amazon.com/CenryKay-DC-099-Threaded-接続or-Adapter/dp/B08CMMQMP6?th=1)

- 12V/2А電源アダプター[(例)](https://www.amazon.com/TMEZON-Power-Adapter-Supply-2-1mm/dp/B00Q2E5IXW)

- 取り付けボックス[(例)](https://www.amazon.com/LeMotech-Dustproof-Waterproof-Electrical-300mmx250mmx120mm/dp/B075DHT7X2/ref=sxin_18_ac_d_mf_brs?ac_md=7-4-TGVNb3RlY2g%3D-ac_d_mf_brs_brs&content-id=amzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d%3Aamzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&crid=2ZDX87O7MINYG&cv_ct_cx=junction+box+plastic&keywords=junction+box+plastic&pd_rd_i=B075DHT7X2&pd_rd_r=2bbd50d4-9ef9-4fa1-a1a2-e55c482bce49&pd_rd_w=EcHLy&pd_rd_wg=z42mC&pf_rd_p=1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&pf_rd_r=WDAX58YZKG6YKZ70X5QE&qid=1676642125&sprefix=Junction+Box%2Caps%2C451&sr=1-4-8b2f235a-dddf-4202-bbb9-592393927392)

さらに、追加のセンサーをインストールすることもできます。

<List  type="numbers">

<li>

I2Cインターフェースを使用:

<List>

<li>

[BMP180](https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf) — 温度と湿度

</li>

<li>

[BME/P280](https://www.mouser.com/datasheet/2/783/BST-BME280-DS002-1509607.pdf) — 温度、湿度、大気圧

</li>

<li>

[HTU21D](https://eu.mouser.com/ProductDetail/Measurement-Specialties/HTU21D?qs=tx5doIiTu8oixw1WN5Uy8A%3D%3D) — 温度と湿度

</li>

<li>

[CCS811 VOC SENSOR](https://www.sciosense.com/wp-content/uploads/documents/Application-Note-Baseline-Save-and-Restore-on-CCS811.pdf) — 揮発性有機化合物、CO2相当

</li>

</List>

</li>

<li>

1-Wireインターフェースを使用:

<List>

<li>

[DHT22(AM2302)](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf) — 温度と湿度

</li>

<li>

[DS18B20](https://cdn.sparkfun.com/datasheets/Sensors/Temp/DS18B20.pdf) — 温度

</li>

</List>

</li>

</List>

アセンブリプロセスは以下のビデオで確認できます。フラッシュプロセスも表示されますが、後で説明します。

<RoboAcademyYoutube link="https://www.youtube.com/watch?v=OdTd1sacCso" />

## Robonomicsボードをリクエスト

または、Robonomicsボードをリクエストすることもできます。その場合は、以下のアドレスのいずれかにメールを送信してください。

- vm@multi-agent.io
- ping@airalab.org

RobonomicsボードはESP8266をベースにしており、6-24Vの源供給に対応しており、DC-DCコンバータDC MINI560を使用しています。このボードにはSDS011粒子センサーといくつかの追加センサーを接続することができます（上記のリストを確認してください）。接続可能なデバイスのリストが短縮されたMINIモデルもあります。

<LessonImages figure figureCaption="Full model of Robonomics board" src="sensors-connectivity-course/lesson-2-1.png" alt="Full model of Robonomics board"/>

<LessonImages  figure figureCaption="Mini model of Robonomics board" src="sensors-connectivity-course/lesson-2-2.png" alt="Mini model of Robonomics board"/>

両モデルの設計図はこちらで入手できます: [フルモデル](https://oshwlab.com/ludovich88/aira_sensor_rev0-1) および [ミニモデル](https://oshwlab.com/ludovich88/aira_sensor_d1_mini)。

ボードを詳しく見てみましょう。接続用の複数のコネクタポートがあります（青と緑でハイライト表示されています）。

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-2-3.png" alt="Full model of Robonomics board"/>

左から右の青い端子ブロック（すべての端子には署名があります）:

<List>
  <li class="flex">

  <code>12V</code> — ボードへの電源供給を接続する端子; 推奨電圧は12ボルトです。

  </li>

  <li class="flex">

  <code>GND</code> グラウンド（零ポテンシャルポイント） — 電源の零ポテンシャルの接続およびセンサーの接続に使用されます。

  </li>

  <li class="flex">

  <code>POWER SENSOR</code> — センサーが接続される設定可能な電力出力; 出力は3.3Vまたは5Vに設定できます。

  </li>

  <li class="flex">

  <code>SDA</code> — シリアルデータライン、I2Cインターフェースを介してセンサーを接続するために使用されます。

  </li>

  <li class="flex">

  <code>SCL/1WIRE</code> — シリアルクロックラインを接続するための設定可能な端子; I2Cまたは1-Wireインターフェースを介してセンサーを接続するために使用されます。

  </li>
</List>

センサーの電力出力の設定とインターフェースの選択は、イメージ中の黄色でマークされたジャンパー（`5V`、`3V`、`I2C`、`1WIRE`）を設定することによって行われます。ジャンパーは水平に取り付けられ、ジャンパーを取り付ける場所には署名があります。


<RoboAcademyNote type="warning" title="WARNING">
電源供給の電圧を選択するには、3.3Vまたは5Vのジャンパーを1つだけ設定します。3.3Vおよび5Vのジャンパーを2つ設定すると、デバイスが損傷します。センサーのインターフェースを選択する際も同じルールが適用されます。I2Cまたは1-Wireの場所にジャンパーを1つだけ取り付けます。2つのジャンパーを取り付けるとデバイスが損傷します。
</RoboAcademyNote>

ボードには、追加の入力ブロックがあり、イメージ中で緑色でマークされています（`GND`、`5V`、`SDA`、`SCL`）。

青いボックスの左側には、ボードを再起動させるための電源スイッチがあります。デフォルトでは`ON`の位置にあります。

センサーの設定が完了したら、残りはフラッシュして設定するだです。
