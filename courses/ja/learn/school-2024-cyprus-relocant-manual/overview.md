---
title: "ロボノミクススクール 2024 / キプロス移住者マニュアル: スマートホーム"
lastUpdate: 
description: "キプロス移住者マニュアル: スマートホーム"
metaOptions: [学ぶ、「ロボノミクススクール2024 / キプロス移住者マニュアル：スマートホーム」] 
defaultName: "Robonomics School 2024 / Cyprus Relocant Manual: Smart Home"
---

<LessonImages imageClasses="mb"  src='school-2024-cyprus-relocant-manual/Setup_SmartHome-Academy.jpg' alt="Cyprus Relocant Manual Cover" />

新しい居住国に移ることは、新しい機会だけでなく、新たな課題ももたらします。私の場合、新しい国はキプロスで、会社を立ち上げるためにやってきました。引っ越し前の10年間、私は大都市に住んでおり、市からの集中暖房、給湯、安い電気といった特典に慣れていました。キプロスでは、各家や各アパートは生活支援の面でより自立していますが、快適な生活を維持するための懸念は所有者にかかります。例えば、お湯を取ることを考えてみましょう。寒い月には、ボイラーを自分で入れて温める必要があります。アパートも自分で暖める必要があります。冬には電気毛布とボイラーをオン/オフし、夏にはエアコンと蚊取り線香を使います。これには時間とエネルギーだけでなく、お金も必要です。

キプロスでの最初の冬は、莫大な電気代がかかりました。これは私の予算に深刻な打撃を与えました。1つの可能な解決策：習慣を変えて新しい状況に適応する。しかし、引っ���し後は十分な心配事があります。エンジニアとして、コストをコントロールし、生活をより快適にするための解決策を探し始め、その経験を共有したいと思います。

## ハードウェアの選択

最初に始めたいことは、エコシステムの選択です。有線システムはすぐに除外されます。アパート/家のインフラに大きな予算と深刻な介入が必要です。無線デバイスの中で、SonoffとTyuaブランドのデバイスがたくさんありますが、すべてインターネット経由で動作するため、島で信頼性の高い動作ができるとは限りません。他社のサーバー上での個人データのプライバシーと安全性の問題については触れません。[Home Assistant](https://www.home-assistant.io)をメインのホームサーバーとしてスマートホームを構築することをお勧めします。メリット：外部インターネットへのアクセスなしで動作可能；移動時に持ち運び、設定を失うことなく新しい場所に展開できる；スマートテレビ、掃除機など、多くのデバイスをサポート。

デバイスの無線接続のための最も一般的なプロトコルはWi-Fi、Zigbee、Bluetoothです。1つのアパートメ���トには、3種類の接続が同時に見つかることがありますが、普通のものをスマートなものに変えるデバイスに関しては、Zigbeeプロトコルで作業する方が便利です。この場合、アドレスやカバレッジエリアを気にする必要はありませんし、バッテリーで動作することもできます。Wi-Fiデバイスは常に電源に接続する必要があり、Wi-Fi信号の強度に依存します。ルーターと寝室の間に壁が数枚ある小さなアパートメントでも、Wi-Fiエクステンダーを設置する必要があることがあります。Zigbeeの場合、デバイス自体がリピーターとして機能します。

キプロスに戻り、私の必要最低限のデバイスは次のとおりでした：

## コンピュ���ター - ホームサーバー

サーバーの究極のタスクは、Home Assistantによって制御されるスマートホームを提供することです。最も簡単な方法は、すでに事前に設定された[Home Assistant Green](https://www.home-assistant.io/green/)を取ることです。コスト[税抜き70ユーロ](https://thepihut.com/products/home-assistant-green)。

<LessonImages src="school-2024-cyprus-relocant-manual/home-assistant-green.png" alt="Home Assistant green"/>

このオプションは少し高度ですが、オペレーティングシステムを制御することさえできます。これは[Raspberry Pi](https://www.raspberrypi.com)を見つけて購入することです。コスト[税抜き90ユーロ](https://https://thepihut.com/products/raspberry-pi-5-starter-kit)。[インストール](https://www.home-assistant.io/installation/)ページには、すべての好みに合った多くのオプションがあります。

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/raspberry-pi.png" alt="Raspberry Pi"/>

Zigbeeコーディネーターとして、[Sonoff Zigbee Dongle PまたはE](https://sonoff.tech/product/gateway-and-sensors/sonoff-zigbee-3-0-usb-dongle-plus-p/)を取ります。これらはほぼ常に島で利用可能です。コストは約[35ユーロ](https://www.amazon.de/-/en/dp/B09KXTCMSC/)です。[このリスト](https://www.zigbee2mqtt.io/guide/adapters/)からスティックを選択することもできます。

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/sonoff-zigbee-stick.png" alt="Sonoff Zigbee USB Stick"/>

ホームサーバーに静的なローカルIP��ドレスを割り当てることを強くお勧めします。ルーターの設定に入ることができない場合は、追加で第二のルーターをインストールすることもできます（私は[MikroTik](https://mikrotik.com/product/hap_ax2)を使用しています、約[80ユーロ](https://www.mstronics.com/c/337_1345_485/networking-devices-routers.html?filter_id=154)）、そしてそれにインターネットを構成します。そして一般的に、すべてのスマートWi-Fiデバイスに静的IPを割り当てることが良いです。これはHome Assistantの統合が正常に機能するためにしばしば重要です。

## ボイラースイッチ

ボイラーは3〜3.5 kWhを消費し、通常のスマートスイッチでは機能しません。選択する際は、許容電流に注意してください。少なくとも16A、できれば20Aである必要があります。島自体でZigbeeスイッチをすぐに見つけるのは難しいですが、[中国](https://vi.aliexpress.com/item/1005006833309900.html)から注文しました、約€20かかりました。

<robo-academy-grid :columns="2" textAlign="center">
    <robo-academy-grid-element>
      <LessonImages src="school-2024-cyprus-relocant-manual/boiler-switch-dimension.png" alt="Boiler Switch"/>
    </robo-academy-grid-element>
    <robo-academy-grid-element>
      <LessonImages src="school-2024-cyprus-relocant-manual/boiler-switch-wiring.png" alt="Boiler Switch Wiring"/>
    </robo-academy-grid-element/>
</robo-academy-grid>

最初で最も重要な自動化は、任意のアクティベーション後にN分後にボタンをオフにすることです。設定してから、ボタンをオフに忘れたかどうか、または3日目に作動しているかどうかを考える必要はもうありません。Home Assistantの自動化の例、`device_id`と`entity_id`で置き換える必要があります。

<LessonCodeWrapper language="yaml" noCopyIcon>
    alias: Boiler turn off after 30 min
    description: ""
    trigger:
    - platform: device
        type: turned_on
        device_id: a7ee4b26ec5b9e36d959f7b4b8490c42
        entity_id: 61230c7b5528330e3b60ee38c5fe1f12
        domain: switch
        for:
        hours: 0
        minutes: 30
        seconds: 0
    condition: []
    action:
    - type: turn_off
        device_id: a7ee4b26ec5b9e36d959f7b4b8490c42
        entity_id: 61230c7b5528330e3b60ee38c5fe1f12
        domain: switch
    mode: single
</LessonCodeWrapper>

1年中時間を変更できます。たとえば、2月には1時間水を加熱する必要があり、4月には30分で十分です。水が加熱されたときに携帯電話に通知を送信することを追加すると便利です。

<robo-academy-note type="note" title="Homework">
  指定した X 分後にボイラーをオフにする自動化を作成します。時間を変数として設定するには、<a href="https://www.home-assistant.io/integrations/input_number/">この統合</a> を参照してください。
</robo-academy-note>

## エアコンとテレビ用IRリモコン

リモコンにはWi-Fi接続（常時電源が必要）とZigbee接続（バッテリー駆動）が付属しています。

私が試したWi-Fiオプションは、[Broadlink](https://www.ibroadlink.com/productinfo/762674.html)からで、[Amazon](https://www.amazon.de/-/en/dp/B07ZSG9Y67/)で購入しました、約€30です。初期設定では、携帯電話にアプリをインストールしてアカウントを作成する必要がありますが、その後、IRリモコンはローカルネットワークで動作し、HAに接続するには[integration](https://www.home-assistant.io/integrations/broadlink/)を使用します。リモコンをさらにカスタマイズして自分のニーズに合わせるには、[SmartIR](https://github.com/smartHomeHub/SmartIR)リポジトリを見ることをお勧めします - これはさまざまなエアコンやテレビ用の準備ができたコマンドの大規模なライブラリです。

<robo-academy-note type="note" title="ヒント">
  特定のA/Cモデルが見つからない場合は、同じメーカーの他のモデルを試してみてください。コマンドはおそらく同じであり、A/Cを接続できるでしょう。
</robo-academy-note>

<LessonImages src="school-2024-cyprus-relocant-manual/broadlink-ir.png" alt="Broadlink IR Remote Control"/>

Broadlink IR リモートの構成例:

<LessonCodeWrapper language="yaml" noCopyIcon>
    climate:
    - platform: smartir
        name: Living Room AC
        unique_id: living_room_ac
        device_code: 1390
        controller_data: remote.living_room_ir_remote_control
        temperature_sensor: sensor.0xa4c138b6ad623598_temperature
        humidity_sensor: sensor.0xa4c138b6ad623598_humidity 
</LessonCodeWrapper>

Zigbeeで動��するリモコンは常時電源に接続する必要はありませんが、電池で動作します。一方、これはプラスです。なぜなら、デバイスを部屋のどこにでも便利に置くことができるからです。一方、必要に応じて電池を交換する必要があります。このようなリモコンのセットアッププロセスはBroadlinkとも異なる場合があります。SmartIRライブラリを使用できない場合、リモコンは各コマンドごとにトレーニングする必要があり、Home Assistantの構成に保存する必要があります。

プログラマブルリモコンは非常に簡単にインストールおよび構成できます。壁掛けやエアコンバスへの接続は必要ありません。ただし、デバイス間のフィードバックがないため、わずかな制限があります。エアコンがオンになり、送信したコマンドを正確に実行しているかどうかを確認できません。ただし、アパートに損傷を与えずに迅速に行います。リモコンに少し情報を追加するために、Zigbee温度および湿度センサーを取り付けることができます。たとえば、この[製品](https://vi.aliexpress.com/item/1005005595631552.html)を10ユーロで購入し、リモコンに読み取りをリンクさせることができます。これにより、簡単なフィードバックが得られ、興味深いシナリオの数が増えます。

## エネルギーメーター

以下の画像に示すような電力消費のための半侵襲メーターがあります。

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/energy-meter.png" alt="Energy Meter"/>

入力にLとNを適用することで、それらは動力を供給される必要があります。一方、計器に接続された誘導リングは、計測のために相または消費ラインに取り付けます。ほとんどの家やアパートメントには3相があり、そのために3つのモジュールを取り付ける必要があります。私はそれを1つの相ごとに€60で[Amazon](https://www.amazon.de/gp/product/B0C37DJXVD/)で購入しました。古い家には1相しかないことがあります。

## 結論

私にとって、スマートホームは贅沢ではなく、必需品です。これは私がリラックスし、家族と過ごしたい場所であり、日常の問題を解決するためにエネルギーを無駄にすることなく過ごしたい場所です。私の場合、上記のキットの費用は約€500と数晩でした。その結果は計り知れません！