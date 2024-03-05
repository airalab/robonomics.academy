---
title: "Demonstração do Feecc"
description: Este curso é tudo sobre conhecer o sistema Feecc e todos os seus componentes.
metaOptions: [Aprender, Acostumar-se com o Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
Nesta lição, você testará as funções básicas do Feecc usando um ambiente de teste virtual como exemplo, que emula uma instância da vida real de um sistema de rastreamento de produção.
</RoboAcademyText>

Para fins de demonstração, ele não possui algumas características típicas como impressão de etiquetas ou gravação de vídeo, mas mantém o conceito principal de tal sistema.

## Pré-requisitos

Para executar a demonstração, você precisará:

- Sistema semelhante ao UNIX (testado no [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/)
- [Docker](https://docs.docker.com/engine/install/ubuntu/) e [Docker compose](https://docs.docker.com/compose/)
- Navegador da web (testado no Google Chrome e Mozilla Firefox)

## Instalação

Execute os seguintes comandos:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

Para verificar os contêineres em funcionamento, execute o seguinte:

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

Você deve ver a seguinte saída:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## Iniciando a demonstração

1. Acesse http://localhost:3000/ em seu navegador, você deve ver uma tela de boas-vindas.

2. Nesta etapa, o sistema deve solicitar ao funcionário que coloque seu cartão RFID no scanner para autorização. Na demonstração, você pode usar `hid-emulator.py` para autorização. Para fazer isso, execute um contêiner Docker separado:

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

Ele é capaz de emular duas funções: fornecer um cartão RFID e escanear um código de barras; você precisa da primeira função, digite `1`.

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the Scanner RFID.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. Você verá a tela para selecionar o tipo de composição, escolha `DISPOSITIVO ÚNICO`.

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. Notificações aparecerão no canto inferior esquerdo indicando o início do trabalho no dispositivo para o qual um ID único é criado. A notificação azul também exibirá a atividade da impressora virtual; na configuração real, um código de barras com o ID do dispositivo é impresso neste momento.

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. Clique em `INICIAR COMPOSIÇÃO` para começar a gravar o processo de montagem do dispositivo. Você será solicitado a passar por todas as etapas de montagem necessárias; cada vez que um funcionário completar uma etapa, ele deve clicar no botão `PRÓXIMO`, após o qual o vídeo será salvo no IPFS. Também é possível suspender a montagem (`PAUSAR`) para retornar a ela mais tarde ou interromper o processo completamente (`PARAR`).

6. Quando todas as etapas de montagem estiverem concluídas, o botão `FINALIZAR` aparece, após o qual o Feecc sugere salvar o certificado do dispositivo. No entanto, antes de fazer isso, abra o [nó Robonomics local](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) em seu navegador, você precisará dele mais tarde. Depois disso, retorne ao Feecc e clique em `SALVAR PASSAPORTE`.
    
    Você verá novas notificações no canto da tela: notificação de que o certificado foi enviado para Robonomics e IPFS, bem como duas mensagens azuis sobre a impressão da etiqueta de selo e o QR-code que leva ao certificado.

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. Na seção `Informações da cadeia` na tela do nó local do Robonomics, você deverá ver um novo evento `datalog.NewRecord` na coluna `eventos recentes`. Se você expandir, o CID do IPFS correspondente ao arquivo de certificado do dispositivo será mostrado no campo `bytes`.

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

O código QR impresso contém um link para este CID, que permite abrir o arquivo de certificado no navegador. Como o seu nó IPFS local pode não ter essa descoberta, você pode acessar o arquivo localmente com `localhost:8080/ipfs/CID.` O conteúdo do certificado se parece com algo assim:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: 423d3c1b42f6427e80cc881a16e07451
Unit Model Name: Single Device
Total Assembly Time: 0:05:37
Production Stages:
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:38:47
  Finish Time: 26-06-2023 17:40:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:40:30
  Finish Time: 26-06-2023 17:42:06
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:42:16
  Finish Time: 26-06-2023 17:43:00
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Saw Through the Single Device
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:00
  Finish Time: 26-06-2023 17:43:51
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:51
  Finish Time: 26-06-2023 17:44:36
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
</LessonCodeWrapper>

8. Vamos agora tentar criar um certificado para uma montagem composta consistindo de vários dispositivos. No menu de seleção de tipo, clique em `DISPOSITIVO COMPOSTO`, e depois em `DISPOSITIVO DE AMOSTRA`. Copie seu ID de unidade (localizado no campo Número de composição), pois você precisará dele mais tarde. Em seguida, prossiga com as etapas padrão para montar o dispositivo.

9. Após a montagem, volte para `DISPOSITIVO COMPOSTO` e pressione `MONTAGEM FINAL` para finalizar a montagem composta. O sistema pedirá que você forneça o ID de unidade dos dispositivos montados, para o qual o funcionário deve escanear seu código de barras. Para simular esse processo, volte para `hid-emulator.py` e selecione a função `2` para escaneamento de código de barras, e insira o ID de unidade salvo lá.

10. Em seguida, o sistema solicitará passar pelas etapas necessárias da montagem composta e gerar um certificado para isso:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: d08101feae7c4efbb5529885c9ad544b
Unit Model Name: Composite Device
Total Assembly Time: 0:00:03
Production Stages:
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:25
  Finish Time: 26-06-2023 18:18:26
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Tape the Sample Device to the base plate
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:26
  Finish Time: 26-06-2023 18:18:27
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:27
  Finish Time: 26-06-2023 18:18:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
Unit Components:
- Unit Unique Code: b165b382c3674127a6aaf5817c5a7040
  Unit Model Name: Sample Device
  Total Assembly Time: 0:00:03
  Production Stages:
  - Name: Prepare Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:45
    Finish Time: 26-06-2023 18:17:46
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Assemble Sample Device
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:46
    Finish Time: 26-06-2023 18:17:47
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Stack Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:47
    Finish Time: 26-06-2023 18:17:48
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
Total Assembly Time (Including Components): 0:00:06
</LessonCodeWrapper>

11. Para excluir a demonstração, insira o comando:

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
No próximo lição, procederemos à implantação real de todos os componentes necessários do sistema Feecc.
</RoboAcademyText>