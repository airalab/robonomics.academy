---
title: "Lição #4, Módulo de Conectividade de Sensores"
description: 'MÓDULO DE CONECTIVIDADE DE SENSORES'
lessonNumber: 4
metaOptions: [Aprenda, Conectividade de Sensores e Rede Descentralizada de Sensores]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Nos artigos a seguir, você aprenderá mais sobre o módulo de Conectividade de Sensores. Depois disso, você pode participar hospedando nossa Rede de Sensores Descentralizada ou criar seu próprio mapa de sensores.

## Sobre a Conectividade de Sensores

A Rede de Sensores Descentralizada usa o módulo `sensors-connectivity` Python ([código-fonte](https://github.com/airalab/sensors-connectivity)). Este módulo permite que qualquer usuário inicie seu próprio servidor para receber dados de sensores e processá-los ainda mais. No momento, os desenvolvedores lançaram vários desses servidores e qualquer sensor pode enviar dados para eles. Executar vários servidores evita a perda de dados em caso de problemas com um deles, pois os sensores mudarão de um servidor não funcional para um funcional. Basicamente, você pode pensar no módulo de Conectividade de Sensores como uma caixa preta com uma entrada (dados do sensor) e muitas saídas.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

O módulo de Conectividade de Sensores é um conjunto de estações (estação_1, estação_2 ... estação_n), que recebem vários dados, incluindo dados de sensores via protocolo HTTP. Também podem ser sensores conectados ao computador via USB ou qualquer outra fonte de dados. Os dados recebidos das estações são processados pelo módulo e passados para alimentadores (alimentador_1, alimentador_2 ... alimentador_n). Os alimentadores enviam os dados processados para o usuário; em nosso caso, os dados são enviados para o canal IPFS descentralizado. 

Um mapa da [Rede de Sensores Descentralizada](https://sensors.robonomics.network/#/) é um aplicativo descentralizado (dapp) em execução no computador. Ele lê dados do canal IPFS e os exibe no mapa. Não há conexão direta entre o servidor que coleta dados dos sensores e o mapa que o usuário vê; os dados são transferidos entre eles via IPFS pubsub, o que reduz a carga nos servidores. 

Além disso, de tempos em tempos, um arquivo com dados do último período de tempo é armazenado no IPFS, e um hash desses dados é então registrado no blockchain. Como o IPFS é uma rede de endereços de conteúdo, armazenar dados nele garante que qualquer alteração nos dados não passe despercebida, porque o endereço do arquivo necessário contém um hash de seu conteúdo, que mudará com qualquer alteração nos dados. O blockchain é usado para passar o hash para o usuário, que pode usá-lo para obter os dados necessários do IPFS (isso acontece quando você solicita um histórico do mapa).

## Configuração do módulo para Linux

**Pré-requisitos e Instalação**

<List type="numbers">

<li>

Para construir o módulo `sensors-connectivity`, o daemon IPFS deve estar instalado com uma versão não superior a `0.8.x`. Supondo que você esteja trabalhando no Linux, execute o seguinte (para a versão `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

Instale o pacote com ferramentas de desenvolvimento `python3-dev` e o instalador de pacotes para Python `pip`:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

Instale o módulo como um pacote PyPI:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

Se você ver o seguinte aviso: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

Execute o próximo comando:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## Configuração

<List type="numbers">

<li>

Crie um diretório para o arquivo de configuração e o arquivo de banco de dados onde desejar. Este banco de dados salvará os hashes IPFS dos dados do sensor, timestamp e status do serviço:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
O nome do arquivo do banco de dados pode ser qualquer um, mas a extensão deve ser <code>.db</code>
</RoboAcademyNote>

</li>


<li>

Crie o arquivo de configuração no mesmo diretório:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

Copie e cole o seguinte no arquivo e insira o caminho completo para o arquivo do banco de dados no campo db_path. Esta configuração será suficiente para obter dados dos sensores via HTTP e enviá-los para o mapa Robonomics:

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation": {
      "enable": false,
      "port": "/dev/<YOUR/PATH/TO/BOARD>",
      "work_period": 300,
      "geo": "00.000000,00.000000",
      "public_key": ""
   },
   "httpstation": {
      "enable": true,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

</List>

## Iniciar


<List type="numbers">

<li>

Iniciar o daemon IPFS:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

Após a configuração ser definida, execute o serviço com o caminho para o arquivo de configuração em outro terminal:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

Você verá logs no terminal (também, eles serão adicionados a `~/.logs`). Exemplo:

<LessonCodeWrapper codeClass="big-code" language="bash">$ sensors_connectivity test.json
2022-09-02 14:08:48,408 - INFO - Getting data from the stations...
2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...
2022-09-02 14:08:48,411 - INFO - Checking data base...
2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...
2022-09-02 14:09:18,410 - INFO - Getting data from the stations...
2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...
2022-09-02 14:09:48,412 - INFO - Getting data from the stations...
2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...
2022-09-02 14:10:18,413 - INFO - Getting data from the stations...</LessonCodeWrapper>

</li>

</List>

## Pós-instalação

Para conectar seu módulo `sensors-connectivity` à nossa Rede de Sensores Descentralizada e ver seus dados no mapa, você precisa enviar seu ID IPFS para [vm@multi-agent.io](mailto:vm@multi-agent.io) ou [ping@airalab.org](mailto:ping@airalab.org). Vamos adicionar seu ID a uma lista de controle de acesso.

Obtenha seu ID IPFS com o seguinte comando após executar o daemon IPFS:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>