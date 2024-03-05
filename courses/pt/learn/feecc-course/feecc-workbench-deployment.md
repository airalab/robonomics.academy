---
title: "Implantação do Engineer Workbench"
description: Este curso é tudo sobre conhecer o sistema Feecc e todos os seus componentes.
metaOptions: [Aprender, Acostumar-se com o Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
Nesta lição, você aprenderá como implantar os componentes necessários do Feecc Engineer Workbench sozinho.
</RoboAcademyText>

Entre os componentes:

- Daemon do Workbench
- Frontend do Workbench
- Gateway IPFS
- Daemon do Leitor HID

Todos os componentes são iniciados usando [Docker](https://docs.docker.com/engine/install/ubuntu/) e [Docker compose](https://docs.docker.com/compose/), certifique-se de ter eles instalados.

## Preparação do Software

1. Os componentes da Feecc usam o banco de dados [MongoDB](https://www.mongodb.com/) para armazenar e acessar dados. Antes de usar a Feecc, você precisa implantar o MongoDB da maneira que for conveniente para você. Aqui estão algumas opções de implantação: [usando seu próprio servidor](https://www.mongodb.com/try/download/community), [banco de dados na nuvem no Atlas](https://www.mongodb.com/atlas) (gratuito), [banco de dados na nuvem no DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (pago). 
    
    De qualquer forma, você precisa obter sua URI de conexão com o MongoDB, que precisará ser inserida como o valor da variável `MONGODB_URI` para todos os componentes do sistema.
    
2. Se você deseja aproveitar o armazenamento confiável e transparente de dados do seu sistema de produção, você precisa criar uma conta na Robonomics. Para fazer isso, use as instruções disponíveis no seguinte link: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    Você precisa salvar a frase-semente da conta, pois ela será usada posteriormente na variável `ROBONOMICS_ACCOUNT_SEED`.

## Preparação do Workbench

Antes de começar, conecte todo o equipamento necessário ao computador ou servidor:

- impressora de etiquetas usando USB
- leitores de RFID/código de barras usando USB
- câmera IP através de roteador PoE/switch de rede
- monitor com teclado e mouse ou tela sensível ao toque usando USB e HDMI/VGA (opcional)

## Iniciando o Daemon do Leitor HID

1. Clonar o repositório:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. Inicie o daemon:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Iniciando o Daemon do Workbench

1. Clone o repositório:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. Configure o daemon de acordo com suas necessidades usando o arquivo `docker-compose.yml`. O arquivo contém várias variáveis de ambiente:

    - Configuração do MongoDB;
    - Configuração do Robonomics;
    - Configuração do IPFS;
    - parâmetros da impressora;
    - parâmetros da câmera;
    - parâmetros dos leitores de RFID / código de barras.
    
    A lista completa de variáveis está disponível no repositório do daemon [aqui](https://github.com/Multi-Agent-io/feecc-workbench-daemon). Os seguintes parâmetros são obrigatórios:
    
    - `MONGODB_URI`: sua URI de conexão com o MongoDB;
    - `MONGODB_DB_NAME`: um nome de banco de dados do MongoDB;
    - `WORKBENCH_NUMBER`: número do workbench do funcionário.

3. Inicie o daemon:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Verifique sua funcionalidade. Vá para o navegador e abra a página `http://127.0.0.1:5000/docs`, que deve conter a documentação da interface de API REST do sistema. Se a página não estiver disponível, então o servidor não foi iniciado corretamente. Verifique os logs dentro do contêiner para erros, corrija-os e repita as etapas de construção e execução.

## Lançando o Gateway IPFS

1. Clone o repositório:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. Configure o microsserviço de acordo com suas necessidades usando o arquivo `docker-compose.yml`. O arquivo contém variáveis de ambiente para conexão com MongoDB, Robonomics e Pinata. A lista completa de variáveis está disponível no [repositório](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) do gateway.

3. Inicie o microsserviço:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Lançando o Frontend do Workbench

1. Clone o repositório:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. Vá para o diretório `configs` e configure o serviço frontend de acordo com suas necessidades usando o arquivo `config.json`. Os seguintes parâmetros são particularmente importantes:
    - `socket` — insira o endereço do Workbench Daemon aqui;
    - `interface_language` — idioma da interface, opções disponíveis `en` e `ru`;
    - `dev_show_reducers` — habilitando/desabilitando o modo desenvolvedor;
    - `pulling_period` — período de recebimento de dados do backend em milissegundos;

3. Iniciar o contêiner frontend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Verifique sua funcionalidade. Vá para o navegador e abra a página `http://localhost:3000`, você deverá ver uma página de autorização.

<RoboAcademyText fWeight="500">
Na próxima lição, passaremos pelo serviço de Análise Feecc.
</RoboAcademyText>