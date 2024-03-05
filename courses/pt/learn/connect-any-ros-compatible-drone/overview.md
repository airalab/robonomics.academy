---
title: Conectar drone compatível com ROS
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: Conectar qualquer robô compatível com ros sob controle da parachain robonomics.
metaOptions: [Aprender]
defaultName: Conectar drone compatível com ROS
---


## Parte 1. Lançamento por Transação

**Neste artigo mostraremos que com a ajuda das ferramentas Robonomics você pode controlar qualquer dispositivo compatível com ROS. Vamos encontrar um pacote de simulação de drone aleatório na web e ajustá-lo para funcionar com Robonomics.**
**Requisitos:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (manual de instalação [aqui](http://wiki.ros.org/melodic/Instalação))

</li>

<li class="flex">

Nó Robonomics (arquivo binário) (baixe a última versão [aqui](https://github.com/airalab/robonomics/releases))

</li>

</List>

<br/>

Todo o processo de codificação desta parte da demonstração é apresentado em um vídeo abaixo.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. Encontrar uma simulação
Vamos navegar na web. Pesquise no Google por `simulador de drone ROS`. O primeiro link provavelmente mostrará a página `tum_simulator` em [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

Está bastante desatualizado, então é melhor encontrarmos um fork para o nosso sistema. Pesquise no Google por `tum_simulator Ubuntu 18 Gazebo 9 fork`. O primeiro resultado é um repositório GitHub [repo](https://github.com/tahsinkose/sjtu-drone) com um pacote apropriado. Baixe-o

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

Não se esqueça de adicionar o comando de origem ao `~/.bashrc`:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

Agora podemos executar a simulação para ver o que precisamos fazer para colocar o drone sob controle da parachain.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. Inspecionar tópicos do ROS
Quando a simulação estiver em execução, em uma nova guia execute o seguinte comando para ver a lista de tópicos usados pelo drone:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

Vamos dar uma olhada em `/cmd_vel`, `/drone/takeoff` e `/drone/land`:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

Como pode ser visto, deve haver mensagens dos tipos `Twist` e `Empty`, que são partes de `std_msgs` e `geometry_msgs`, vamos usar isso no controlador. Desligue a simulação por um tempo.

## 3. Baixar pacote do controlador
Globalmente, a principal diferença do controlador de robô ROS casual é um bloco de código, que verifica todas as transações na rede usando [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/). O pacote em si está disponível no GitHub. Baixe-o e construa o espaço de trabalho:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. Gerenciar contas no DAPP
Como estamos testando, vamos criar um nó de rede robonomics local com o arquivo binário robonomics:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Importante!** Antes dos próximos lançamentos é necessário remover um diretório `db` com

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Após um lançamento bem-sucedido, crie contas seguindo [este](https://wiki.robonomics.network/docs/create-account-in-dapp/) manual. **Não se esqueça de salvar a semente e o endereço de cada conta! Você precisará deles para as transações**. Adicione esses endereços, sementes e caminho para o arquivo binário robonomics ao arquivo `config.config` em `robonomics_ws/src/robonomics_sample_controller/src`. Transfira algum dinheiro (unidades) para essas contas:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. Lançando o drone sob controle da parachain

Até agora o **único coisa em execução** deve ser o nó local robonomics. Em um terminal separado, inicie a simulação do drone:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Execute o script:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

Agora você pode enviar uma transação acionando o drone para começar a voar. Para fazer isso, você deve usar o subcomando `write` do Robonomics IO do arquivo binário robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Onde `<DRONE_ADDRESS>` e `<EMPLOYER’S_KEY>` são substituídos pelas strings previamente salvas correspondentes.
Você deve ver o log `"Decolando"` e o drone deve começar a voar:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

É assim que qualquer robô compatível com ROS pode ser controlado pelo controle da parachain Robonomics.


##  Parte 2. Salvando Dados na Blockchain

**Nesta parte continuaremos usando as ferramentas Robonomics para fazer um drone ser controlado por uma parachain. Desta vez adicionaremos o envio de dados para o IPFS e opções de armazenamento de hash na cadeia. Abaixo está a instrução e trechos de código. Requisitos:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (manual de instalação [aqui](http://wiki.ros.org/melodic/Instalação))
</li>

<li class="flex">

IPFS 0.4.22 (baixe de [aqui](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) e instale)
</li>

<li class="flex">

Nó Robonomics (arquivo binário) (baixe a última versão [aqui](https://github.com/airalab/robonomics/releases))
</li>

<li>Dependências do Python:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

Todo o processo de codificação desta parte da demonstração é apresentado em um vídeo abaixo.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. Adicionar dependências
Se lançarmos uma simulação e olharmos a lista de tópicos (veja a parte 1), veremos que há um tópico contendo dados da câmera frontal e usando o tipo de mensagem `sensor_msgs/Image`:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

Vamos tentar tirar uma foto a cada 1 segundo e depois do voo publicar essas fotos no IPFS. Se você completou o primeiro tutorial, não precisa baixar mais nada. É o script `drone_sample_controller_pictures.py`.

## 2. Gerenciar contas no DAPP
Como feito em um tutorial anterior, crie um nó de rede local robonomics com o arquivo binário robonomics:
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Importante!** Antes dos próximos lançamentos é necessário remover um diretório `db` com

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Após um lançamento bem-sucedido, crie contas seguindo [este](https://wiki.robonomics.network/docs/create-account-in-dapp/) manual. **Não se esqueça de salvar a semente e o endereço de cada conta! Você precisará deles para as transações**. Adicione esses endereços, sementes e caminho para o arquivo binário robonomics ao arquivo `config.config` em `robonomics_ws/src/robonomics_sample_controller/src`. Transfira algum dinheiro (unidades) para essas contas:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. Lançamento
Até agora o **único coisa em execução** deve ser o nó local robonomics. Em um terminal separado, inicie a simulação do drone:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Em outro lançamento, inicie o daemon ipfs:
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Execute o script:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

Agora você pode enviar uma transação para acionar o drone a começar a voar e tirar fotos. Para fazer isso, você deve usar o subcomando `write` do Robonomics IO do arquivo binário robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Onde `<DRONE_ADDRESS>` e `<EMPLOYER’S_KEY>` são substituídos pelas strings previamente salvas correspondentes.
Você deve ver o log `"Decolando"` e o drone deve começar a voar e tirar fotos:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

Mais tarde, quando o trabalho estiver concluído, no portal Robonomics vá para `Desenvolvedor` -> `Estado da cadeia` e adicione um datalog `DRONE` usando o botão `“+”` com o `datalog` selecionado como consulta de estado. O hash IPFS da telemetria foi salvo no blockchain. Para ver os dados, basta copiar o hash e adicioná-lo ao endereço [gateway](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) local `localhost:8080/ipfs/`:


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>