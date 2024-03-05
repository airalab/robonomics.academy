---
title: 概要
description: AIパワードツールで学士論文を素早く始める
metaOptions: [学ぶ, AIパワードツールで学士論文を素早く始める]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
だから、恐れていたことが起こった。
</RoboAcademyText>

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmW6qohyJvUF2c3EwhVWZXghArAZQ6KkBsbqT41QRgJRAh', type: 'webm'}]" />

あなたは膨大なテキスト作業を提出する必要があり、締め切りが非常に近いかもしれません。または、状況が異なるかもしれません：提出期限がそんなに怖くないかもしれませんが、特に形式的で技術的な内容の大規模な資料を書くことがあなたを引きつけ、タスクを長い間先送りにさせます。いずれにせよ、かなり長く、単調で、そしてしばしば非常に退屈なプロセスを経る必要があり、あなたのモチベーションを暗くします。創造的で発展的なタスクにもっと時間を費やしたいかもしれませんが、残念ながら、いくつかの職業や活動はそのように構造化されています。

## AIへの参入

私たち全員にとって幸いなことに、歴史を通じて日常のタスクを容易にしてきた進歩がテキスト作成の領域に達しました。今回は、人工知能の進歩により可能になりました。具体的には、生成言語モデルが理解し、リクエストを解決し、チャット形式でより意味の���る回答を提供できるようになりました。Robonomicsでは、生物と機械の間のコミュニケーションと相互作用の自動化レベルを高める可能性があるものを無視することはできませんでした（そして私たちの日常のタスクも簡単にしました！）。

最新のGPTモデルはその能力で印象を与えますが、それらを正しく使用する方法、そして何よりもそれらにどれだけ頼ることができるかという問題が生じます。そのようなスキルはプロンプトエンジニアリングと呼ばれ、そのために、現在の生成人工知能の可能性に基づいた基本的な理解に向かわせるこのガイドを提供します。

このガイドでは、私たちは、私たちの知識の分野に基づいた単純な学士論文を書こうとします。 "学士"と学士が通過した出発点の材料。 私たちは確かに最低限の学術規則に従おうとしますが、2週間（このガイドの計画された時間）は学士論文を成功させるには十分ではありません（現実は時には異なることを証明します）。 

それにもかかわらず、このガイドは、AIがすでにスムーズにできる最も日常的で時間のかかるプロセスを理���するための良い出発点と見なすことができます。ちなみに、学士論文のタスクに制限する必要はありません：このガイドは、IMRaD標準（導入、方法、結果、議論）に従う任意のテキスト作業に役立ちます。ジャーナルや会議の出版物、博士論文、技術レポート、マニュアルなど。

<RoboAcademyNote title="DISCLAIMER" type="warning">
  このガイドは、学士論文の成功した提出を保証することを目指していません。
</RoboAcademyNote>

## 使用されたツール

ガイドで使用されたAIサービスの中には次のものがあります：

**[ChatGPT](https://chat.openai.com/chat)** — OpenAIによって作成されたGenerative Pre-trained Transformer言語モデル（ver. 3.5および4）に基づくチャットボット。ユーザーとのチャット形式で動作し、彼らのリクエストに答え、簡単な質問から詩の作成、ユーザーコードのデバッグまでさまざまなリクエストに対応します。その知識は2021年9月までに限定されており、インターネットにアクセスできません。基本的な使用は無料ですが、電話番号での登録が必要です（一部の国では利用できません）。より強力な機能とWolframやSlackへのアクセスなどのプラグインを追加するためのサブス��リプションオプション（月額$20）があります。

**[Bing Chat](http://www.bing.com)** — MicrosoftのBing検索サービスに統合されたGPT-4に基づくチャットボット。アクセスにはMicrosoftアカウントが必要です。基本的に、ChatGPTと同じ機能を持っていますが、インターネットアクセスが可能であり、より強力です。

**[Auto-GPT](https://news.agpt.co/)** — GPT-4を使用して、ユーザーが設定したタスクを解決する自律型AIエージェントを作成するソフトウェア。エージェントはインターネット、長期記憶、および情報をファイルに保存する能力にアクセスでき、複雑なアクションのシーケンスを実行できます。使用するには、OpenAIのアカウントが必要であり、できれば有料のサブスクリプションが必要です。インストール手順は[こちらで入手できます](https://docs.agpt.co/setup/)。

**[Notion AI](https://www.notion.so/product/ai)** — 同名の知識管理ソフトウェアに統合されたAIアシスタント。限定無料アクセスがあり、サブスクリプションは月額$10です。既に準備されたテキストを処理および改善するために便利であり、その目的のために事前にインス��ールされた機能を持っています。

さらに、次のサービスが必要です：

**[Overleaf](http://www.overleaf.com)** — テキストのフォーマットに便利なオンラインLaTeXエディター。論文や記事からプレゼンテーションまで、あらゆる種類の作業用のテンプレートが用意されています。私たちは[MIT Thesis Template](https://www.overleaf.com/latex/templates/mit-thesis-template/ytphktgwpktc)を使用します。

**[Google Scholar](http://scholar.google.com)** — 科学出版物の検索エンジン。AIサービスが提案するソースを検証するために使用されます。

## AIツールの使用方法

### AIチャットボット（ChatGPT、Bing）

AIチャットボット（ChatGPT、Bing）は特に複雑なアプローチを必要としません：適切なリクエストをフォーマットしてチャットボットに送信するだけです（1つのメッセージあたりの文字数に制限がありますが、リクエストの全文が送信されるまでチャットボットに待機するように依頼することができます）。

### Notion AI

Notion AIでは、任意のページにテキストブロックを挿入し、AIアシスタントにリクエストを呼び出すだけで十分です。

### Auto-GPT

Auto-GPTには異なるアプローチが必要です。ユーザーは次の前に指定する必要があります：

- AIアシスタントの名前
- AIアシスタントの役割
- AIアシスタントが完了するために指定された最大5つの連続した目標

その後、Auto-GPTはユーザーにすべての"考え"と実行されたアクションを表示するエージェントを���動します。具体的には：

- `THOUGHTS` — エージェントが現在のイテレーションで実装したい一般的なアイデア
- `REASONING` — エージェントがこのアイデアを選択した理由
- `PLAN` — アイデアを達成するための具体的なアクション（インターネットでの検索、文書の分析、ファイルへの書き込みなど）
- `CRITICISM` — エージェントが自身のアクションに課す特別な条件（例えば、「IEEEジャーナルからの高品質な参照のみを検索する」など）。

## 最初のステップ

<RoboAcademyNote title="WARNING" type="warning">
  AIツールはまだ改善されているため、取得した結果を常に二重チェックしてください。
</RoboAcademyNote>

### サービスにコンテキストを提供する

最新のAIサービスの重要な利点の1つは、1つのセッション内でリクエストのコンテキストをかなりよく覚えていることです。したがって、学士論文を開始するために最初に行うべきことは、コンテキスト（"伝説"）を考え出し、サービスに提供することです。 Robonomics Academyのコース["RobonomicsとHome Assistantを使用した主権スマートホーム"](/learn/smart-home-course/overview)を出発点として作業のための素材として取り上げました。その結果、次のコンテキストが作成されました���

このコンテキストに対するAIチャットボットの典型的な反応は、リクエストを明確にすることとサービスがどのように支援できるかを提案することです。

<RoboAcademyDialog>

I am a student of the Department of IoT Engineering and Web3 Science. 

I am going to get Bachelor of Science in Computer Science and Engineering.

I completed an online course called "Smart Home Sovereign". In this course, I went through all the steps necessary to build my own sovereign smart home, the main advantage of which is the security / privacy of user data.
During the course, I set up an IoT hub on a Raspberry Pi and connected smart devices (such as a temperature/humidity sensor, a door sensor, a smart bulb, a motion sensor, etc.) to it via a Zigbeeアダプター using the MQTT protocol. The IoT hub is powered by Home Assistant software. Next, I connected the hub to a decentralized cloud, based on Polkadot web3 technology. This is necessary to securely transfer device data to the network without the need for a centralized cloud service provider. This allows me to securely manage my home remotely.

Now I want to take this course as a basis and write a bachelor's thesis with your help.

</RoboAcademyDialog>

提案からトピックを選択する

### 次のステップ（学士の状況に典型的な）は、論文のトピックを選択することです。ここでは、リクエストリンク`私の論文のためのNつのトピックを提案する`を作成するだけで十分です。ChatGPTとBing Chatは次のような提案をしました：

ガイド用に**"Web3テクノロジーを使用した安全でプライベートなスマートホームシステムの設計"**というトピックが選択されました。

<RoboAcademyDialog>

"Designing a Secure and Private Smart Home System using Web3 Technologies" — This topic could involve examining the steps you took to build your sovereign smart home and exploring the security and privacy benefits of using IoT and Web3 technologies.

"Comparing Centralized and Decentralized Approaches to Smart Home Data Management" — This topic could involve comparing and contrasting the benefits and drawbacks of using centralized cloud vendors versus decentralized cloud technologies like Polkadot for managing smart home data.

"Developing a Smart Contract-based Framework for Managing Smart Home Devices" — This topic could involve exploring the use of smart contracts to manage smart home devices and develop a secure and efficient framework for managing them.

"Investigating the Security and Privacy Risks of Smart Home Systems" — This topic could involve examining the potential risks and vulnerabilities of smart home systems, including issues related to data privacy, cybersecurity, and physical safety.

"Exploring the Role of Blockchain in Smart Home Data Management" — This topic could involve examining how blockchain technology could be used to manage smart home data and ensure the security and privacy of user data.

"Investigating the Future of Smart Home Technologies and their Impact on Society" — This topic could involve examining the potential social and economic impacts of smart home technologies, including issues related to privacy, security, and the digital divide.

</RoboAcademyDialog>

IMRaD構造を持つシンプルな計画

### 次に、原則として、IMRaD構造に従って論文の特定のセクションに進むことができます。ただし、学士論文のより詳細な計画があると便利です。これもAIサービスにリクエストすることができます。ChatGPTは、追加の条件なしで次の計画を提案しました：

この準備が完了したら、論文の最初のセクションである「はじめに」に進むことができます。


<RoboAcademyDialog>

<ChatGPT/>

1. イントロduction
    1. Background and motivation
    2. Research questions and objectives
    3. Significance of the study
2. Literature Review
    1. 概要 of smart home technology and its security and privacy issues
    2. イントロduction to web3 technology and its potential benefits for smart homes
    3. Existing research on using web3 technology for smart home security and privacy
3. Methodology
    1. Description of the smart home system design using web3 technology, including hardware and software components
    2. Implementation details and justification for design choices
    3. Evaluation plan for assessing the security and privacy of the system
4. Results and Analysis
    1. Evaluation of the implemented system with respect to security and privacy metrics
    2. Comparison with existing solutions and analysis of strengths and weaknesses
    3. Discussion of limitations and potential areas for improvement
5. Conclusion and Future Work
    1. Summary of the study's contributions and main findings
    2. Implications and significance of the results for the smart home industry and related fields
    3. Recommendations for future research and development
6. 参考文献

</RoboAcademyDialog>

<RoboAcademyText>
この準備が完了したので、これで論文の最初のセクションである「イントロダクション」に移ることができます。
</RoboAcademyText>
  

