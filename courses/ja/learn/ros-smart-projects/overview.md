---
title: スマートスペース向けのROSベースのプロジェクト
lastUpdate: Thu May 04 2023 12:53:19 GMT+0400 (Samara Standard Time)
description: スマートスペース向けのROSベースのプロジェクト
metaOptions: [学ぶ]
defaultName: ROS-based projects for smart spaces
---

15年間の開発を通じて、Robot Operating Systemフレームワークは[さまざまなロボットデバイス](https://robots.ros.org/)と統合され、コミュニティによって開発されたアルゴリズムやツールのパッケージもさらに増えています。実を言うと、現在、プロジェクトが非常に多くなり、リポジトリの説明スタイルの混沌さが非常に増しており、特定の主題に捧げられたプロジェクトを見つけるのがかなり問題になっています。 

ここでは、家庭やオフィス環境で使用するために設計されたロボットやIoTデバイスに特化したROSベースのプロジェクトの控えめなリストを見つけることができます。この主題はRobonomicsプラットフォームの柱の1つです。私たちの目標は、これらのプロジェクトをRobonomicsとの技術的統合の観点とロボット経済でのこれらのデバイスの興味深い応用の観点からトラックに乗せようとすることです。アイデアやインスピレーションを探す際に、このリストをご自由にご利用ください。

Robonomicsと統合されたROSプロジェクトの例をいくつかご覧いただけます。[/学習セクション](/learn)で。

<!-- 現在（**2021年4月**）、RobonomicsはROS **Melodic**および**Noetic**バージョンに向けて設計されています。古いバージョンも動作する可能性がありますが、追加の統合作業が必要になるかもしれません。将来的には、ROSバージョン2のサポートが追加される予定です。 -->

ROSリポジトリとパッケージを検索するための主要なリソースは[こちら](https://index.ros.org/)でアクセスできます。

## シミュレーション

デバイスに注意を向ける前に、多くのROSプロジェクトにはシミュレーションでテストするオプションが存在することを覚えておく価値があります。ROSのさまざまなロボットを3Dモデリングするための最も人気のあるツールは、[Gazebo](http://gazebosim.org/)シミュレーターとその派生プロジェクトである[Ignition](https://index.ros.org/r/ros_ign/)です。両方のシミュレーターは、さまざまな難しい屋内および屋外環境でデバイスをモデル化し、モデルや環境自体を変更し、制御アルゴリズムをテストしてデバイスに移る前にデバッグることができます。また、これは実際のデバイスがない場合のトレーニングや状況にも優れたツールです。

全体として、これはRobonomicsをROSデバイスと統合しようとする際に、何も支出せずに試すための最良の選択肢の1つです。実際のシナリオでは、わずかなコードの修正が必要です。Gazeboについては、Robonomicsによる詳細なガイドがあり、[設定](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-1/)と[統合](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-2/)（ドローンを例に挙げています）をカバーする2つのパートで構成されています。主な課題は、Gazeboのための準備が整ったモデル（たとえば、[こちら](https://github.com/osrf/gazebo_models)）を見つけるか、シミュレーター用に開発された[SDFormat](http://sdformat.org/)を使用して独自のモデルを作成しようとすることです。 

## シングルボードコンピューターおよびその他のボード

これらのボードは、主にセンサーや記録デバイス（オーディオ、写真、ビデオレコーダー、カメラ、温度、圧力、物質濃度セサーなど）を接続するための基本コンポーネントとして機能します。スマートスペースの概念は、インフラオブジェクトの[デジタルツイン](https://gateway.pinata.cloud/ipfs/QmNNdLG3vuTsJtZtNByWaDTKRYPcBZSZcsJ1FY6rTYCixQ/Robonomics_keypoint_March_2021.pdf)の作成を前提としているため、ボードは主要なコンピューティングデバイスおよびロボットモバイルデバイスの構築のためのコントローラーとして機能することができます。ROSをサポートするボードのリストは以下の通りです。

| Name and link                                                                                         |                                    Description                                  | ROS version | Last update |
|:-----------------------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------|:-----------:|:-----------:|
|  [Raspberry Pi](http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Melodic%20on%20the%20Raspberry%20Pi)| single board computer; RaspPi versions 2, 3 and 4 are available                 |   melodic   |     2020    |
|    [Arduino](http://wiki.ros.org/rosserial_arduino)                                                   | single board computer                                                           |    noetic   |     2021    |
|    [Phidgets](http://wiki.ros.org/phidgets)                                                           | sets of boards, various sensors and devices: Ph sensor, LED, RFID, motor control|    noetic   |     2020    |
|   [Sense HAT](https://wiki.ros.org/sensehat_ros)                                                      | shield for RaspPi with a set of sensors and LED                                 |    noetic   |     2020    |
|     [Navio2](https://navio2.emlid.com/)                                                               | autopliot shield for RaspPi 2,3,4                                               |    noetic   |     2020    |
|     [OpenCR](http://wiki.ros.org/opencr)                                                              | robot controller                                                                |    noetic   |     2021    |

<br/>

## スマートホームデバイスおよび家庭用ロボット

ここには、元々スマートホームやオフィス向けに設計されたROSデバイスが紹介されています。掃除機やロボットアシスタントからホームコントロールシステムまで、リストは幅広いです。

| Name and link                                             | Description                                                 |          ROS version          | Last update |
|:---------------------------------------------------------:|-------------------------------------------------------------|:-----------------------------:|:-----------:|
|  [Care-O-bot 4](http://wiki.ros.org/care-o-bot)           | household robot-assistant; a simulation is available        |            melodic            |     2021    |
|     [Kobuki](http://wiki.ros.org/kobuki)                  | mobile platform with different use cases (e.g. a waiter)    |            melodic            |     2020    |
|    [QTrobot](http://wiki.ros.org/Robots/qtrobot)          | humanoid social robot                                       | kinetic (melodic can be used) |     2020    |
|      [Nao](http://wiki.ros.org/nao)                       | humanoid robot; a simulation is available                   |            Melodic            |     2020    |
|     [TIAGo](http://wiki.ros.org/Robots/TIAGo)             | service robot with a manipulator; a simulation is available |            kinetic            |     2020    |
|     [Roomba](https://github.com/AutonomyLab/create_robot) | robot vacuum cleaner                                        |            melodic            |     2020    |
|    [OpenHAB](http://wiki.ros.org/iot_bridge)              | home automation system                                      |            kinetic            |     2017    |
|     [Sesame](https://index.ros.org/p/sesame_ros/)         | smart lock                                                  |            melodic            |     2021    |

<br/>

## モバイルプラットフォームおよびマニピュレータ

第一に、ROSはモバイルロボティクスをサポートすることで知られており、ドローンから産業用マニピュレータまで、多くのパッケージが作成されています。これらのパッケージは同時位置推定とマッピング（[SLAM](http://wiki.ros.org/rtabmap_ros)）を実現し、運動学の直接および逆のタスクを解決し、[軌道計画](https://moveit.ros.org/)などを行います。モバイルロボティクスは徐々に日常生活に浸透しており、そのため既存のROSロボットをスマートスペース内で使用してテストすることは確かに興味深いです。ROSベースのモバイルプラットフォームの一般的なリストはかなり大きいため、ここでは、家庭やオフィススペースで操作が便利なものを選択しました。 

| Name and link                                             | Description                                | ROS version | Last update |
|:---------------------------------------------------------:|--------------------------------------------|:-----------:|:-----------:|
|   [turtlebot](http://wiki.ros.org/turtlebot3)             | mobile platform tailored for ROS           |    noetic   |     2020    |
|    [GoPiGo3](http://wiki.ros.org/Robots/gopigo3)          | mobile robot based on RaspPi               |   melodic   |     2020    |
|    [LoCoBot](http://wiki.ros.org/locobot)                 | mobile manipulator                         |   kinetic   |     2020    |
|   [ROSbot 2.0](http://wiki.ros.org/Robots/ROSbot-2.0)     | mobile platform; a simulation is available |    noetic   |     2021    |
|     [VOLTA](http://wiki.ros.org/Robots/Volta)             | mobile platform; a simulation is available |   melodic   |     2021    |
|    [evarobot](http://wiki.ros.org/Robots/evarobot)        | mobile platform; a simulation is available |    noetic   |     2020    |
|    [Freight](http://wiki.ros.org/Robots/freight)          | mobile platform; a simulation is available |   melodic   |     2021    |
|      [PR2](http://wiki.ros.org/Robots/PR2)                | mobile platform; a simulation is available |   melodic   |     2021    |