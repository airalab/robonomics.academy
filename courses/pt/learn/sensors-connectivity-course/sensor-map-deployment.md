---
title: "Lição #6, Implantação de Mapa de Sensores"
description: 'IMPLANTAÇÃO DE MAPA DE SENSORES'
lessonNumber: 6
metaOptions: [Aprenda, Conectividade de Sensores e Rede Descentralizada de Sensores]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Após montar um sensor e configurar o módulo de Conectividade de Sensores, é hora de implantar um mapa de sensores descentralizado pessoal.


## Requisitos & instalação

<List type="numbers">

<li>

Como o mapa de sensores é alimentado por JavaScript, primeiro você precisa instalar o `node` e o gerenciador `yarn`:

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

Baixe e construa o mapa:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

Execute o mapa no modo `desenvolvimento` para teste

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

Vá para o URL do terminal, você deverá ver o mapa do sensor. Depois disso, pare com `Ctrl+C`.

</li>

</List>

## Configuração

<List type="numbers">

<li>

Encontre seu ID IPFS com:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

Vá para a pasta `src` e renomeie os arquivos:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Insira seu ID IPFS em `agents.json`:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

Abra o arquivo `config.json` e altere a próxima parte do arquivo de configuração:

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


Aqui você precisa inserir a latitude (`lat`) e longitude (`lng`) da sua cidade. Opcionalmente, você pode configurar o [serviço de direção do vento](https://github.com/danwild/wind-js-server) e fornecer a URL para ele no campo `WIND_PROVIDER`.

</li>

</List>


## Construção

<List type="numbers">

<li>

Execute o seguinte comando para construir os arquivos para lançamento:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

Ele criará o diretório `dist` com todos os componentes do site estático.

</li>

<li>

Para verificar se tudo está correto, vá para o diretório `dist` e abra o arquivo `index.html`. Após algum tempo, os dados do sensor do seu módulo de Conectividade de Sensores aparecerão no mapa.

</li>

</List>

