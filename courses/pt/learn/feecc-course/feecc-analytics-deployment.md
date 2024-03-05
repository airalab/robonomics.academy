---
title: "Implantação de Análises"
description: Este curso é tudo sobre conhecer o sistema Feecc e todos os seus componentes.
metaOptions: [Aprender, Acostumar-se com o Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
Nesta lição, você aprenderá como implantar os componentes da Análise Feecc.
</RoboAcademyText>

## Lançamento do Backend de Análises

1. Clonar o repositório:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. Configurar o serviço backend de acordo com suas necessidades usando o arquivo `.env`:
    - `MONGO_CONNECTION_URL` — sua URI de conexão com o MongoDB;
    - `MONGO_DATABASE_NAME` — um nome de banco de dados do MongoDB;
    - `SECRET_KEY` — chave secreta para hash e dehash;
    - `IPFS_GATEWAY_HOST` — URL do Gateway IPFS;
    - `USE_DATALOG` — enviando dados de análise para Robonomics (`true` ou `false`);
    - `ROBONOMICS_SEED` — frase-semente para a conta Robonomics.

3. Iniciar o contêiner backend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Verifique sua funcionalidade. Vá para o navegador e abra a página `http://localhost:5002/docs`. Se feito corretamente, você verá uma página (gerada pelo Swagger) com todos os endpoints da API REST de Análises Feecc. Agora você está pronto para lançar o frontend.

## Lançamento do Frontend de Análises

1. Clone o repositório:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. Vá para `src` e configure o serviço frontend de acordo com suas necessidades usando o arquivo `config.json`. Certifique-se de inserir a URL do Backend de Análises Feecc no parâmetro `base_url` (no formato `xx.xx.xx.xx:port`).

3. Iniciar o contêiner frontend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Verifique sua funcionalidade. Vá para o navegador e abra a página `http://localhost:8081/docs`.

<RoboAcademyText fWeight="500">
Com isso, o conhecimento do sistema Feecc pode ser considerado completo. Se você tiver alguma dúvida adicional, pode entrar em contato com os desenvolvedores em Sistemas Multi-Agentes (multi-agent.io) ou deixar um problema em seu GitHub (github.com/Multi-Agent-io).
</RoboAcademyText>