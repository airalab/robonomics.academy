---
title: "Lição nº 7, os sensores Robonomics medem analytics e arquivam nó"
description: 'ROBONOMICS SENSORES MEDIR ANALÍTICA E NÓ DE ARQUIVO'
lessonNumber: 7
metaOptions: [Aprenda, Conectividade de Sensores e Rede Descentralizada de Sensores]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Os Sensores Robonomics Medem Analytics e Arquivam Nó ou RoSeMAN é um serviço para acumular dados de sensores para mostrar histórico de medição. Neste artigo você irá configurar o serviço.

## Requisitos

RoSeMAN requer um servidor de banco de dados [MongoDB](https://www.mongodb.com/docs/manual/introduction/), presume-se que você já o tenha. Além disso, você deve ativar a opção de datalog para o módulo de Conectividade de Sensores, conforme mostrado no Cenário nº 3. Você deve ter tokens XRT gratuitos em sua conta Robonomics, que está conectada ao módulo de Conectividade de Sensores. 


## Configuração

<List type="numbers">

<li>

Baixe o repositório:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

Crie arquivos de configuração:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Abra o arquivo `config.json` e edite o caminho do banco de dados:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

Adicione o endereço público de sua conta ao arquivo `agents.json`. Você pode adicionar vários endereços ao arquivo, se desejar coletar dados de diferentes módulos de Conectividade de Sensores.

</li>


<li>

Instale dependências e construa o servidor:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

Inicie o servidor RoSeMAN:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

O servidor web deve ser iniciado em `http://127.0.0.1:3000`.

</li>

</List>

## Pós-instalação

Após a implantação do RoSeMAN em um servidor, você deve obter o endereço IP público ou URL do servidor. Alternativamente, se você executar o RoSeMAN e o mapa de sensores no mesmo servidor, você pode usar o endereço IP local.

Em seguida, você deve abrir o arquivo de configuração do mapa de sensores e inserir seu URL no arquivo `config.json` no campo `REMOTE_PROVIDER`


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

Reconstrua o mapa com `yarn build` e inicie-o novamente; você poderá ver o histórico de medição.