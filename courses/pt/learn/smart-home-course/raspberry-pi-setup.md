---
title: "Lição #2, Configuração do Raspberry Pi"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: curso de assistente doméstico
lessonNumber: 2
metaOptions: [Aprenda, Casa Inteligente Soberana com Robonomics e Assistente Doméstico]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introdução

Nesta li��o, voc� ir� preparar o seu Raspberry Pi para se tornar um hub IoT. Voc� ir� instalar e configurar sequencialmente todos os componentes necess�rios, a saber:

<List>

- Distribui��o Ubuntu Linux para Raspberry Pi como sistema operacional de servidor;
- Pacotes Home Assistant;
- Pacotes IPFS;
- biblioteca robonomics-interface.

</List>

## Instruções

<List type="numbers">

<li>

Preparando e Configurando o Raspberry Pi

<List>

  <li>

  Baixe a imagem do [Ubuntu Server 22.04 LTS de 64 bits](https://ubuntu.com/download/raspberry-pi) ou mais recente para Raspberry Pi.
  </li>

  <li>

  Baixe e instale uma ferramenta para escrever arquivos de imagem chamada [Raspberry Pi Imager](https://www.raspberrypi.com/software/) no seu computador.
  </li>

  <li>

  Insira o cart�o SD e execute o Raspberry Pi Imager. Selecione a imagem necess�ria (que voc� acabou de baixar) como sistema operacional e certifique-se de selecionar seu cart�o SD no menu suspenso de armazenamento.

  </li>

  <li>

  Abra as configura��es e marque a op��o <code>Ativar SSH</code> com o par�metro <code>Usar autentica��o de senha</code>.

  \- Em <code>Definir nome de usu�rio e senha</code> adicione nome de usu�rio e senha para o usu�rio do seu Raspberry Pi.

  \- Em <code>Configurar LAN sem fio</code> forne�a sua rede Wi-Fi com sua senha e escolha seu pa�s na lista suspensa. Em seguida, <code>Escreva</code> a imagem.

  <robo-academy-note type="okay">
  Certifique-se de inserir o nome real da sua rede Wi-Fi e a senha da sua rede Wi-Fi.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  Aguarde at� que termine a grava��o, em seguida insira o cart�o SD no Raspberry Pi e ligue-o. Deve se conectar � sua rede Wi-Fi, o que levar� algum tempo.

  </li>
  
  <li>

  Agora voc� precisa encontrar o endere�o do dispositivo. Para fazer isso, voc� pode usar v�rios m�todos de varredura de rede, como [Fing App](https://www.fing.com/products), o comando <code>arp -a</code> ou [nmap](https://nmap.org/download.html). Este �ltimo ser� usado em seguida.

  Instale o nmap com um comando

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  Em seguida, encontre o endereço na sua rede local. Deve parecer com <code>192.168.xxx.xxx</code> ou <code>172.xxx.xxx.xxx.</code> Preste atenção, pois o nmap pode encontrar muitos endereços na sua rede local.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  Em seguida, escaneie sua rede conforme mostrado abaixo, substituindo o último octeto do endereço por <code>0</code>:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  A saída do comando será algo assim:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon noLines>
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:02:24 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:04:45:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-NO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B3:7D:9E:94:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
</LessonCodeWrapper>

  Neste exemplo, o endereço é <code>192.168.43.56.</code>

  </li>

  <li>

  Conecte-se ao Raspberry Pi via SSH com o IP encontrado. Use o nome de usuário e senha que você criou anteriormente.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  Instruções adicionais são executadas via SSH no próprio Raspberry Pi.
  
  </li>
</List>
</li>

<li>

Instalação do Home Assistant

<List>
  <li>

  <robo-academy-note type="okay">

Algumas versões de software mostradas abaixo podem estar desatualizadas. Para as versões mais recentes, você pode consultar o [repositório de instalação da imagem Robonomics Home Assistant](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage).

  </robo-academy-note>

  Antes de começar, atualize o sistema do Raspberry Pi e instale os pacotes necessários. Durante a instalação, você verá uma janela com solicitação de reinicialização do serviço. Basta escolher <span class="accent">ok</span> com o botão <code>tab</code> e pressionar enter.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  Crie o usuário <code>homeassistant</code> e o diretório para o Home Assistant Core:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  Crie um ambiente virtual para o Home Assistant Core e mude para ele. Isso deve ser feito como o usuário <code>homeassistant</code>, então após executar os comandos seu usuário parecerá com <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  Como resultado, você encontrará um nome do ambiente virtual entre colchetes:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  Instale os pacotes Python necessários:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  Iniciar o Home Assistant Core pela primeira vez. Isso completará a instalação criando automaticamente o diretório de configuração <code class="nowb">.homeassistant</code> no diretório <code>/home/homeassistant</code> e instalando quaisquer dependências básicas:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  Enquanto a configuração inicial estiver em andamento, verifique sua instalação através da interface web em <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. Neste exemplo: <code>http://192.168.43.56:8123</code>. Você pode abrir uma interface web de qualquer computador conectado à sua rede local.

  Aguarde até receber a janela de boas-vindas com a criação de login/senha e então pare o Home Assistant com <code>Ctrl+C</code>.
  </li>
</List>
</li>

<li>

Instalação do IPFS

<List>

  <li>

  Para a instalação do IPFS, você pode usar nosso script para baixar o IPFS e criar um serviço systemd com ele. Primeiro, saia do ambiente virtual do Home Assistant:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  Em seguida, execute:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Serviços Systemd

<List>

<li>

O serviço systemd é útil para automatizar o lançamento do Home Assistant. Crie um novo serviço para o Home Assistant:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

Cole o seguinte

<LessonCodeWrapper language="bash">
[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure
User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/srv/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>

</li>

<li>

Ative e inicie o serviço:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl enable home-assistant@homeassistant.service
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl start home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Integração Robonomics

<List>

<li>

Faça login com o usuário <code>homeassistant</code> no seu Raspberry Pi:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

Ative o ambiente virtual de origem e instale os pacotes Python necessários:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

Em seguida, vá para o diretório <code>.homeassistant</code>, crie a pasta <code class="nowb">custom_components</code> e clone lá o repositório com a integração:


<LessonCodeWrapper language="bash" noLines>
cd ~/.homeassistant
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
mkdir custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
cd custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
</LessonCodeWrapper>

</li>


<li>

Depois disso, saia do usuário homeassistant e reinicie o serviço:

<LessonCodeWrapper language="bash" noLines>
exit
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl restart home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

</List>



