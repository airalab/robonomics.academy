---
title: "スマートホームボードの組み立て"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: スマートホームボードの組み立て方を学びます！
metaOptions: [学ぶ]
defaultName:  Introduction to open source solution for private smart homes
---

<LessonImages imageClasses="mb" src="smart-home-intro/spring-school-2023-smart-stand-intro.gif" />

## スマートホームパネル 

このパネルは、最も使用頻度の高いスイッチとデータが表示される中央制御デバイスとして使用することを意図しています。また、インターコムを接続して、屋内モニターとして使用することも可能です。基本的には、私たちの場合はAndroid OSを実行しているタブレットです。必要なのは電源を供給するだけです。このパネルは、屋内モニターを設置する場所に設置すべきだと考えています

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcbdAJqbwHAQ3NeyWQUwSoS4drDexa3AEs7HXuM1BrUT1', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />


## ライトスイッチ

スマートライトスイッチは、通常のものとほぼ同じように見えますが、スイッチの代わりにプッシュボタンが使用されています。プッシュボタンは押すと元の位置に戻ります。通常のスイッチとスマートスイッチの接続に違いはありません：ニュートラルワイヤーをNに、電源ワイヤーをLに、ライトニングラインをL1に接続します。スイッチを組み立てた後、ZigBeeを介してペアリングするためにボタンを少なくとも5秒間押します。

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/Qmb138DiQWWBgowMj2fC9kmiGYh9WEeytteSkqumWCv2LB', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-2.png" />

2つのボタンスイッチ（またはそれ以上）の場合、唯一の違いは2番目（3番目、...）のライトの行です。 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZiStYZG4rmyNPXXmCXsVPm7witPpnNJMBzD8GtxedgPo', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-3.png" />

## スマートライトブルブ 

スマートライトブルブはおそらく最も簡単な方法で何かスマートなことを試す方法です。電気技師である必要すらありません。リモートで制御でき、明るさや色を変えることができます。スマートスイッチと一緒に取り付けるか、別々に取り付けることができます。このようなデバイスを使用すると、気分や屋外の状況に応じて自動化のページが開かれます！新しい電球はZigBee経由で接続できるようになっています。見つからない場合は、5回オンとオフに切り替えてください


<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbiMHLJqnDpr1Whzvo6Y7zE33cQPuTs7furbt3JW2uiek', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-4.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmTzK4dY168HVgLvVBsRxR4M4vda55XC7pFhpW5kRexujQ', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-5.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZFpvVUavKc1Za9SeXqikrfySsfFHuVrkdzgbVB8um7T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-6.png" />

## スマートソケット 

通常、時々オン/オフする必要がある「スマートでない」デバイスがいくつかあります。スマートソケットを介してそのようなデバイスを起動すると、必要に応じてオン/オフにできます。また、そのようなソケットはエネルギー消費を監視できるため、そのデバイスがどれだけ消費しているかのデータが得られます。接続は非常に簡単で、スマートソケットをペアリングするには、ボタンを5秒間押すだけです

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRtmKXSv7csHLbKVuZkoA5Eb2zyTkEAbUxLYT6Qt1yxZH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-7.png" />

## ボイラースイッチ 

ボイラースイッチが専用のデバイスとして存在する理由は、より多くの負荷を負担できるためです。通常、ボイラーは3kWh以上を消費するため、通常の（スマートでも）スイッチはこの状況には適していません。ボイラースイッチはこれらの条件下で動作するように設計されています。接続とペアリングは、ライトスイッチとほぼ同じです。

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZyRtXXRYCrAQe6s6ZFJLXtUrH7SZHJC1Bt61kTrRX54', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-8.png" />

## Wifi/Zigbee Thermostat

普通のサーモスタットのように見えますが、無線で制御できる能力があります。オプションは次のとおりです：ヒーティングシステムをサーモスタットに直接接続するか、それらを分離するか。後者の場合、サーモスタットはモード（暖房、冷房、ファンなど）と温度を教えてくれます

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRjxo9EGUvQiMm84xvXCL6LfrQJYza71vmFsa9Zpy7qmz', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-9.png" />

## Curtain Switch

もう1つの専用スイッチ、今度はカーテン用です。技術的な観点からは、このスイッチのみを使用する必要はありません。任意の3つのボタンスイッチを使用し、それをカーテンモーターに取り付けることができますが、このスイッチには特別なアイコンが付いています。スイッチをペアリングするには、中央のボタンを長押しします

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRpEpZbyNkzby8Sk22Ymz59DbAcnty1B1osWc2kZr5FZ7', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-10.png" />

## Smart Valve Controller

お持ちのバルブに応じてコントローラーを選択してください。最も明らかなシナリオは、このコントローラーを水漏れセンサーと組み合わせることです。デバイスをペアリングするには、ボタンを5秒間押し続けます

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcjZcJ6P8Q5yUfSRx8R2mR4A7r2fi5bLs5uoUr3EAXLZs', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-11.png" />

## Water Leakage Sensor

2つの接点が接続されたときに信号��送信するかなりシンプルなデバイスです。水は電気を伝導し、センサーの下に水があるときは、その接点がショートされます。センサーはバッテリーで動作し、通常は1〜2年持続します。ZigBee経由でセンサーをペアリングするには、ボタンをしばらく長押しします 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbgetJK1E8qQMcnBVREutpy8tKfbesqaxXiebjzpoyrdV', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-12.png" />

## IR Controller

リモートTVコントローラーと考えてください...しかし、スマートなものです！そして、TVに限定されるものではありません。A/Cにリモートコントローラーがある場合、これをスマートなものに置き換えることができます。それをペアリングするには、コントローラーの背面にあるリセットボタンをしばらく押します。使用可能なコマンドが含まれた多くのライブラリがあります。たとえば、[https://github.com/smartHomeHub/SmartIR](https://github.com/smartHomeHub/SmartIR)。やるべきことは、TVやA/Cのモデルを見つけるだけです

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmVjj92fMLbA6QJ5QhnmiqBT1huD5b7xyfi3VadHFDYwtm', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-13.png" />

## Door/Window Sensor

バッテリーで動作する別のセンサーですが、シンプルなセキュリティシステムの構築やライトや他のデバイスに接続するのに役立ちます。ZigBee経由でペアリングするには、穴に針を入れてしばらく押します

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZyb66dKEqk9iCVKhaBk5ZKASi7dXdFSg2CBXY1fwuu5J', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-14.png" />

## Motion Sensor
ドア/窓センサーと同じで、さまざまなシナリオで使用できます。最も明らかなのは、ライトの制御や不在時の動きの検出です

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmUA7TLg12pkhkbdGH6fwNDasU1kiyLHBJSutA2YG71Mka', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-15.png" />


## Temperature & Humidity Sensor

住んでいる環境を知るのは良いことですよね？このセンサーは温度と湿度の測定値を提供します。そのデータを使用してA/Cのオン/オフや他の暖房/冷却システムを制御できます。センサーをペアリングするには、背面にボタンがあります 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmayYFowfJVwQBVxPUSvi5inedqKzhyRZXp8fBUUayJnqH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-16.png" />

## Security Camera

最後に、家の中で何が起こっているかを見るのは良いことです。良い自動化は、モーションセンサーをカメラに接続することで、モーションが検出されると10秒間のビデオが得られるようにすることです 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmX8nnDCgTx2kuwfAGv6B4orkEg4w6phtJtxSp44HfdD9T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-17.png"  />


## Smart Board 
結果を見てください[https://www.youtube.com/watch?v=B3er7bwtvkw](https://www.youtube.com/watch?v=B3er7bwtvkw )
そして自分で遊んでみてください[https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20](https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20)

