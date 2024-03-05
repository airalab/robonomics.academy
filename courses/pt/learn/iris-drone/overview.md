---
title: Conectar veículo aéreo não tripulado
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: Conectar veículo aéreo não tripulado
metaOptions: [Aprender]
defaultName: Connect unmanned aerial vehicle
---

**Drone começa a se mover após a transação e armazena o arquivo com as coordenadas no IPFS. O script de controle é baseado no [script de demonstração do GAAS](https://github.com/generalized-intelligence/GAAS)**  

https://youtu.be/4CwtGAX1OwM

<br/>

## Requisitos

<List>

<li> dependências para controle:

<LessonCodeWrapper language="bash">
sudo apt install -y \
	python3-pip \
	ninja-build \
	exiftool \
	python-argparse \
	python-empy \
	python-toml \
	python-numpy \
	python-yaml \
	python-dev \
	python-pip \
	ninja-build \
	protobuf-compiler \
	libeigen3-dev \
	genromfs
</LessonCodeWrapper>

<LessonCodeWrapper language="bash">
pip3 install \
	pandas \
	jinja2 \
	pyserial \
	cerberus \
	pyulog \
	numpy \
	toml \
	pyquaternion
</LessonCodeWrapper>

</li>

<li class="flex">

ROS Melodic + Gazebo [tutorial de instalação](http://wiki.ros.org/melodic/Instalação)
</li>

<li>pacotes extras:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>Versão do IPFS 0.4.22

<LessonCodeWrapper language="bash" codeClass="big-code">
wget https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-amd64.tar.gz
tar -xvzf go-ipfs_v0.4.22_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash" codeClass="big-code">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li class="flex">

Nó Robonomics (arquivo binário) (baixe a última versão [aqui](https://github.com/airalab/robonomics/releases))
</li>

</List>

<br/>

## Configuração do Ambiente

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-mavros ros-melodic-mavros-extras
wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh
sudo ./install_geographiclib_datasets.sh
cd ~/catkin_ws/src
git clone https://github.com/PX4/Firmware.git
cd Firmware
git checkout v1.9.0
bash ./Tools/setup/ubuntu.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/catkin_ws/src
git clone https://github.com/generalized-intelligence/GAAS.git
cp -r ~/catkin_ws/src/GAAS/simulator/models/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/models/
cp -r ~/catkin_ws/src/GAAS/simulator/worlds/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/worlds/
cp -r ~/catkin_ws/src/GAAS/simulator/posix-config/* ~/catkin_ws/src/Firmware/posix-configs/SITL/init/ekf2/
</LessonCodeWrapper>

Modificando seu arquivo `.bashrc`, adicionando as seguintes linhas ao final:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## Instalação do Pacote de Controle
Em um novo Terminal:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Rede Robonomics

Para criar uma rede robonomics local, vá para a pasta com o arquivo binário do robonomics e execute:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

Adicione o caminho do robonomics ao `config.py`

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

Vá para o [portal Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) e mude para o nó local.

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

Vá para **Contas** e crie contas **DRONE** e **EMPLOYER**. Salve os nomes das contas, chaves e caminho para **robonomics** em `~/catkin_ws/src/drone_sim/src/config.py`. Transfira algum dinheiro para as contas.

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## Executando a Simulação
Inicie o daemon do IPFS

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

Em outro terminal, inicie a simulação:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

Aguardando até "Aguardando pagamento" 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

Para enviar uma transação, execute em outra janela:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - onde **<drone_address>** e **<employer_key>** devem ser substituídos pelas strings de `config.py` correspondentes.

Após os dados serem enviados para o IPFS, vá para o **Estado da Cadeia** no [portal Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/). Selecione **datalog** em consulta e adicione o datalog DRONE usando o botão `+`.


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

Você pode encontrar a telemetria do drone executando `https://gateway.ipfs.io/ipfs/<hash>` inserindo o hash acima.

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

É importante remover o diretório `db` antes dos próximos lançamentos usando  
` rm -rf ~/.local/share/robonomics/chains/dev/db`