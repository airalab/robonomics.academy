---
title: ROS互換のドローンに接続する
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: Robonomicsパラチェーン制御下の任意のROS互換ロボットに接続する。
metaOptions: [学ぶ]
defaultName: Connect ROS-compatible drone
---


## パート1. トランザクションによる起動

**この記事では、Robonomicsツールを使用して、任意のROS互換デバイスを制御できることを示します。Web上でランダムなドローンシミュレーションパッケージを見つけ、Robonomicsと連携させて実行する方法を説明します。**
**要件:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz（インストールマニュアル[こちら](http://wiki.ros.org/melodic/インストール)）

</li>

<li class="flex">

Robonomicsノード（バイナリファイル）（最新リリースのダウンロード[こちら](https://github.com/airalab/robonomics/releases)）

</li>

</List>

<br/>

このデモのこの部分のコーディング全体のプロセスは、以下のビデオで紹介されています。

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. シミュレーションを見つける
ウェブを検索しましょう。`ROS ドローンシミュレータ`でGoogle検索します。最初のリンクはおそらく[http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)の`tum_simulator`ページを表示します


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

かなり古いので、システム用にフォークを見つける方が良いです。`tum_simulator Ubuntu 18 Gazebo 9 fork`でGoogle検索します。最初の結果は、適切なパッケージを持つGitHub [リポジトリ](https://github.com/tahsinkose/sjtu-drone)です。ダウンロードしてください

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

`~/.bashrc`にソースコマンドを追加するのを忘れないでください。

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

これで、ドローンをパラチェーン制御下に取るために何をすべきかを確認するためにシミュレーションを実行できます。

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. ROSトピックを調査する
シミュレーションが実行されているとき、新しいタブで次のコマンドを実行して、ドローンが使用するトピックのリストを表示します。

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

`/cmd_vel`、`/drone/takeoff`、`/drone/land`を見てみましょう。

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

`Twist`および`Empty`タイプのメッセージがあるはずで、これらは`std_msgs`および`geometry_msgs`の一部です。これをコントローラーで使用します。しばらくシミュレーションを停止します。

## 3. コントローラーパッケージをダウンロードする
一般的に、通常のROSロボットコントローラーとの主な違いは、ネットワーク内のすべてのトランザクションを[Robonomics IO](https://wiki.robonomics.network/docs/rinterface/)を使用してチェックするコードブロックです。パッケージ自体はGitHubで利用可能です。ダウンロードしてワークスペースをビルドします。

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. DAPPでアカウントを管理する
テスト中なので、ローカルのrobonomicsネットワークノードをrobonomicsバイナリファイルで作成しましょう。

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**重要！**次の起動の前に、`db`ディレクトリを削除する必要があります

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

成功した起動後、[こちら](https://wiki.robonomics.network/docs/create-account-in-dapp/)の手順に従ってアカウントを作成します。**各アカウントのシードとアドレスを保存するのを忘れないでください！トランザクションにはこれらが必要です**。これらのアドレス、シード、およびrobonomicsバイナリファイルへのパスを`robonomics_ws/src/robonomics_sample_controller/src`の`config.config`ファイルに追加します。これらのアカウントに一定の金額（ユニット）を送金してください。

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. ドローンをパラチェーン制御下に起動する

現時点で**実行中の唯一のもの**はrobonomicsローカルノードです。別のターミナルでドローンシミュレーションを起動します。

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

スクリプトを実行します。

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

今、ドローンを飛行開始させるトランザクションを送信できます。これを行うには、robonomicsバイナリファイルのRobonomics IO `write`サブコマンドを使用する必要があります。

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

`<DRONE_ADDRESS>`と`<EMPLOYER’S_KEY>`は、以前保存した文字列に置き換えます。
ログ`"Taking Off"`が表示され、ドローンが飛行を開始するはずです。

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

これが、Robonomicsパラチェーン制御によって任意のROS互換ロボットが制御される方法です。


##  パート2. データをブロックチェーンに保存する

**この部分では、Robonomicsツールを引き続き使用して、ドローンをパラチェーンによって制御されるようにします。今回は、データをIPFSに送信し、ハッシュをチェーンオプションに保存する機能を追加します。以下は手順とコードスニペットです。要件:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz（インストールマニュアル[こちら](http://wiki.ros.org/melodic/インストール)）
</li>

<li class="flex">

IPFS 0.4.22（[こちら](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz)からダウンロードしてインストール）
</li>

<li class="flex">

Robonomicsノード（バイナリファイル）（最新リリースのダウンロード[こちら](https://github.com/airalab/robonomics/releases)）
</li>

<li>Python依存関係:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

このデモのこの部分のコーディング全体のプロセスは、以下のビデオで紹介されています。

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. 依存関係を加する
シミュレーションを起動し、トピックリストを見ると（パート1を参照）、フロントカメラデータを含む1つのトピックがあり、`sensor_msgs/Image`メッセージタイプが使用されていることがわかります。

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

1秒ごとに写真を撮影し、飛行後にこれらの写真をIPFSに公開しよう。最初のチュートリアルを完了している場合、他に何もダウンロードする必要はありません。`drone_sample_controller_pictures.py`スクリプトです。

## 2. DAPPでアカウントを管理する
以前のチュートリアルで行ったように、ローカルのrobonomicsネットワークノードをrobonomicsバイナリファイルで作成します。
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**重要！**次の起動の前に、`db`ディレクトリを削除する必要があります

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

成功した起動後、[こちら](https://wiki.robonomics.network/docs/create-account-in-dapp/)の手順に従ってアカウントを作成します。**各アカウントのシードとアドレスを保存するのを忘れないでください！トランザクションにはこれらが必要です**。これらのアドレス、シード、およびrobonomicsバイナリファイルへのパスを`robonomics_ws/src/robonomics_sample_controller/src`の`config.config`ファイルに追加します。これらのアカウントに一定の金額（ユニット）を送金してください。

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. ローンチ
現時点で**実行中の唯一のもの**はrobonomicsローカルノードです。別のターミナルでドローンシミュレーションを起動します。

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

別の場所でipfsデーモンを起動します。
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

スクリプトを実行します。
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

これで、ドローンを飛行させて写真を撮影するトランザクションを送信できます。これを行うには、robonomicsバイナリファイルのRobonomics IO `write`サブコマンドを使用する必要があります。

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

`<DRONE_ADDRESS>`と`<EMPLOYER’S_KEY>`は、以前保存した文字列に置き換えます。
ログに`"Taking Off"`と表示され、ドローンが飛行を開始し、写真を撮影するはずです。

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

後で、ジョブが完了したら、Robonomicsポータルで`Developer` -> `Chain state`に移動し、選択した`datalog`を状態クエリとして使用して`DRONE`データログを追加します。テレメトリのIPFSハッシュがブロックチェーンに保存されています。データを表示するには、単純にハッシュをコピーしてローカルの[ゲートウェイ](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/)アドレス`localhost:8080/ipfs/`に追加してください。


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>