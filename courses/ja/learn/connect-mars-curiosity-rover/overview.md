---
title: マーズキュリオシティローバーに接続する
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: ロボノミクスパラチェーン制御下のマーズキュリオシティローバーに接続する。
metaOptions: [学ぶ]
defaultName: Connect Mars Curiosity Rover
---

**ロボノミクスパラチェーン制御がマーズキュリオシティローバーの移動を可能にする方法を見てみましょう。要件:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz（インストールマニュアル[こちら](http://wiki.ros.org/melodic/インストール)）

</li>


<li>追加パッケージ:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS まで [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[IPFS コンパニオン拡張](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Robonomicsノード（バイナリファイル）（最新リリースは[こちら](https://github.com/airalab/robonomics/releases)でダウンロードできます。このチュートリアルはv1.1で正常にテストされました）

</li>

</List>

<br/>

成功した起動を示すビデオはこちらです:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. シミュレーションのセットアップ

キュリオシティローバーパッケージをダウンロード:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

ローバーがスムーズに生成されるように開始条件を調整する必要があります:

<List>

<li>次に移動します

`src/master/curiosity_mars_rover_description/worlds` ファイルの14行目を変更します` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>次に移動します

`src/master/curiosity_mars_rover_description/launch` 、そしてファイル `mars_curiosity_world.launch` の4行目を変更します 
`<arg name="paused" default="false"/>`

ソースコマンドを追加することを忘れないでください `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> コンソールを再起動してシミュレーションを起動します:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

注意: 画像が暗い場合、例えば影がかかっている場合は、Gazeboツールバーで `Camera` を `Orthorgraphic` に変更してください。
シミュレーションはしばらく閉じても構いません。

------------

<br/>

### 2. Robonomicsコントローラーパッケージをダウンロード
ターミナルにローバータイプのコントローラーパッケージをダウンロードするには:

<LessonCodeWrapper language="bash" codeClass="long-code">
cd ~/robonomics_ws/src
git clone https://github.com/PaTara43/robonomics_sample_controller
cd robonomics_sample_controller
pip3 install -r requirements.txt
pip3 install rospkg
cd ..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3 # The controller supports python3
</LessonCodeWrapper>


------------

<br/>

### 3. DAPPでアカウントを管理する
テスト中なので、ローカルのrobonomicsネットワークをrobonomicsバイナリファイルで作成します:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="実行ning node"/>


[ロボノミクス パラチェーン ポータル](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) に移動し、ローカル ノードに切り替えます。


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


アカウントに移動して、**CURIOSITY** と **EMPLOYER** アカウントを作成します。

**重要**! 各アカウントのアドレスをコピーしてください（アカウントのアイコンをクリックしてアドレスをコピーします）そしてキュリオシティのアカウントの **ニーモニックシード**（アカウントを作成する際に取得）
これらのアカウントにお金（ユニット）を送金してください。Robonomicsのアカウントについて詳しくは[こちら](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)をご覧ください

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


これらのアドレス、シード、およびノードアドレス（デフォルトは開発者ノードの `ws://127.0.0.1:9944`）を `robonomics_ws/src/robonomics_sample_controller/src` の `config.config` に追加します。引用符は不要です。

------------

<br/>

### 4. Robonomicsを開始する

さらに進む前に、[IPFS Companion Extension](https://github.com/ipfs/ipfs-companion)をインストールしていることを確認してください。

別のターミナルでIPFSを起動します:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #IPFSインストールごとに1回だけ行う必要があります
ipfs daemon
</LessonCodeWrapper>

別のターミナルでキュリオシティシミュレーションを起動します（ライブでない場合）:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

静止するまで待ちます

別のターミナルでコントローラーを起動します:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

これで、Roverを動かしてデータを収集するトランザクションを送信できます。これを行うには、同じ[Robonomics Parachainポータル](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)を使用できます。
`Developer->Extrinsics` に移動し、キュリオシティの雇用主アカウントを選択し、`launch` extrinsic、キュリオシティのアカウントをターゲットアカウントとして、パラメーターに `yes` を指定します。
外部からのコマンドや `no` パラメーターを持つコマンドは受け付けません。ローバーは周囲を移動し、約1分間データを収集します。

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

後で、ジョブが完了したら:
Robonomicsポータルに移動し、`Developer -> Chain state` に移動し、選択した `datalog -> RingBufferItem` で `CURIOSITY` データログを取得します:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


今、テレメトリのIPFSハッシュがブロックチェーンに保存されています。データを表示するには、単純にハッシュをコピーしてゲートウェイで検索してください: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


このテレメトリは分散型ストレージに保存され、そのハッシュはブロックチェーンに保存されています！

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


このテレメトリは分散型ストレージに保管され、そのハッシュはブロックチェーンに保存されています！
