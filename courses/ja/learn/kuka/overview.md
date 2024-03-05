---
title: Kuka manipulatorに接続する
description: Manipulatorに接続する
metaOptions: [学ぶ]
defaultName: 接続 Kuka manipulator
---

作業例のビデオはこちらで見ることができます:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## 要件

<List>

<li class="flex">

ROS melodic、Gazebo (インストール手順は[こちら](http://wiki.ros.org/melodic/インストール/Ubuntu))
</li>

<li>いくつかの追加パッケージ

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

（[こちら](https://www.npackd.org/p/ipfs/0.4.22)からダウンロードしてインストール）

<LessonCodeWrapper language="bash" codeClass="big-code">
tar -xvzf go-ipfs_v0.4.22_linux-386.tar.gz
cd go-ipfs/
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>pip3

<LessonCodeWrapper language="bash">
sudo apt-get install python3-pip
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li>substrate-interface

<LessonCodeWrapper language="bash">
pip3 install substrate-interface
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomicsノード（バイナリファイル）（最新リリースは[こちら](https://github.com/airalab/robonomics/releases)からダウンロード）

</li>

<li>IPFSブラウザ拡張機能（必須ではありません）</li>

</List>

<br/>

***

<br/>

## インストール
Kuka manipulatorと制御パッケージをインストールする

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## Gazeboモデルを実行する

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

新しいウィンドウで

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## Robonomicsを実行する
Robonomicsファイルがあるフォルダに移動して、ローカルRobonomicsネットワークを作成する:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

[Robonomics Parachainポータル](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)に移動して、ローカルノードに切り替える

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

次に、アカウントに移動して`KUKA`アカウントを作成します。アカウントのニーモニックキーを保存してくださ��。後で必要になります。 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

デフォルトのアカウントの1つから新しいアカウントにいくつかのユニットを送信します。

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## IPFSを実行する
実行 ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## 制御パッケージを実行する
kuka_controlパッケージのconfigディレクトリに、`<your_mnemonic>`が保存されたニーモニックシードでこの行を含むconfigファイルを作成する必要があります:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


今、制御スクリプトを実行できます:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## トランザクションを送信する
[Robonomics Parachainポータル](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)に移動して`Developer/Extrinsics`に移動し、`extrinsic`を`launch`に変更します。`robot`で`KUKA`アカウントを選択し、`param`を`Yes`に変更します。そして`Submit Transaction`を押します

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

kuka_controlパッケージのウィンドウで次のように表示されます:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

次に、Robonomicsポータルで`Developer/Chain State`に移動し、`datalog`と`datalogItem((AccountId,u64)): RingBufferItem`をクエリで選択し、`KUKA`データログを`+`ボタンで追加します:

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

これで、ロボットのテレメトリをIPFSでこのリンクを介して見つけることができます。ハッシュには`https://gateway.ipfs.io/ipfs/<hash>`を使用してくだ���い。

## トラブルシューティング

`catkin_make`がMoveArm.hを見つけられないというメッセージで動作しない場合は、kuka_manipulator_gazeboパッケージのCMakeLists.txtの最後の4行を削除してみてください:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

これらの行を削除した状態で`catkin_make`を実行し、それから行を戻して再度`catkin_make`を実行してください。