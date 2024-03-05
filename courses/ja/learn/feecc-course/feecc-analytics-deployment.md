---
title: "アナリティクスの展開"
description: このコースは、Feeccシステムとそのすべてのコンポーネントを知ることについてです。
metaOptions: [学ぶ、Feeccに慣れる]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
このレッスンでは、Feecc Analyticsのコンポーネントを展開する方法を学びます。
</RoboAcademyText>

## アナリティクスバックエンドの起動

1. リポジトリをクローンする:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. `.env`ファイルを使用してバックエンドサービスを必要に応じて構成する:
    - `MONGO_CONNECTION_URL` — MongoDBへの接続URI;
    - `MONGO_DATABASE_NAME` — MongoDBのデータベース名;
    - `SECRET_KEY` — ハッシュ化および逆ハッシュ化のための秘密鍵;
    - `IPFS_GATEWAY_HOST` — IPFSゲートウェイのURL;
    - `USE_DATALOG` — Robonomicsにアナリティクスデータを送信するかどうか（`true`または`false`）;
    - `ROBONOMICS_SEED` — Robonomicsアカウントのシードフレーズ。

3. バックエンドコンテナを起動する:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. 機能を確認します。ブラウザを開き、`http://localhost:5002/docs`ページを開きます。正しく行われた場合、すべてのFeecc Analytics REST APIエンドポイントが表示されるSwaggerによって生成されたページが表示されます。これでフロントエンドを起動する準備が整いました。

## アナリティクスフロントエンドの起動

1. リポジトリのクローンを作成します。

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. `src`に移動し、`config.json`ファイルを使用してフロントエンドサービスを必要に応じて構成します。`base_url`パラメータにFeecc Analytics BackendのURLを入力してください（`xx.xx.xx.xx:port`の形式で）。

3. フロントエンドコンテナを起動する:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. 機能を確認します。ブラウザを開き、`http://localhost:8081/docs`ページを開きます。

<RoboAcademyText fWeight="500">
これでFeeccシステムとの知り合いは完了です。追加の質問がある場合は、Multi-Agent Systems（multi-agent.io）の開発者に連絡するか、彼らのGitHub（github.com/Multi-Agent-io）に問題を残してください。
</RoboAcademyText>