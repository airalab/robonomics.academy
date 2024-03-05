---
title: "Lição #4a, Configuração do Gateway: Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: curso de assistente doméstico
lessonNumber: 4
metaOptions: [Aprenda, Casa Inteligente Soberana com Robonomics e Assistente Doméstico]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introdução

Este é um cenário de configuração para conectar dispositivos usando o adaptador Zigbee e a ponte Zigbee2MQTT. Se você tiver o [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) (que possui todo o firmware necessário), você pode simplesmente seguir estas instruções. No entanto, se você tiver outro adaptador, a primeira coisa que você precisa fazer é flashá-lo com o software Zigbee2MQTT. Você pode encontrar instruções para o seu dispositivo [aqui](https://www.zigbee2mqtt.io/guide/adapters/).

Você também precisará de um dispositivo inteligente para testar sua conexão com o Home Assistant.


## Instruções

<List type="numbers">

<li>

Instalação de Software

<List>

  <li>
    Configure o repositório do ambiente de execução Node.js e instale-o com as dependências necessárias:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Verifique se as versões corretas do Node.js (v14.X, V16.x, V17.x ou V18.X) e do gerenciador de pacotes <code class="nowb">npm</code> (6.X, 7.X ou 8.X) instalados automaticamente com o Node.js, foram instalados:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Crie um diretório para o Zigbee2MQTT e defina seu usuário como proprietário dele:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Clone o repositório Zigbee2MQTT:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    Instale as dependências. Note que o <code>npm ci</code> pode produzir alguns avisos que podem ser ignorados.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

Conectando e Configurando o Adaptador

<List>

<li>

Conecte o adaptador Zigbee ao Raspberry Pi. Em seguida, você precisa encontrar a localização do stick. Para isso, digite o próximo comando:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

A saída deve se parecer com:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

Neste exemplo, o diretório de conexão do stick é <code>ttyUSB0</code>.
</li>

<li>

Edite o arquivo <code>configuration.yaml</code> antes de iniciar o Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

A configuração básica precisa de alguns ajustes. Altere as seguintes declarações:

\- <code>homeassistant:</code> para <code>true</code>, ele conectará automaticamente os sensores ao Home Assistant;

\- descomente <code>user</code> e <code>password</code> sob <code>mqtt</code> e insira seu nome de usuário e senha (como uma string, com aspas) do Broker MQTT;

\- altere a porta em <code>serial</code> -> <code>port</code> para o diretório de conexão do stick. Neste exemplo: <code>/dev/ttyUSB0</code>.

O arquivo de configuração ajustado deve parecer com:

<LessonCodeWrapper language="yaml">
# Home Assistant integration (MQTT discovery)
homeassistant: true
# allow new devices to join
permit_join: true
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: 'YOUR_USERNAME'
  password: 'YOUR_PASSWORD'
# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/YOUR_PORT
</LessonCodeWrapper>


**Extra:**

Se você já tem um adaptador Zigbee ou gateway ativo em sua casa, e agora está configurando outro stick, então eles entrarão em conflito um com o outro. Para resolver esse problema, você precisa alterar o canal no novo dispositivo. Para isso, adicione as seguintes strings ao final do arquivo de configuração:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Iniciar Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

Se iniciado com sucesso, você verá algo como:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Parear Dispositivo

<List>

<li>

É hora de conectar seu dispositivo inteligente. A maneira mais comum de colocar um dispositivo no modo de conexão é segurar seu botão de energia ou ligar/desligar 5 vezes. Certifique-se de que o Zigbee2MQTT está em execução.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

Quando o dispositivo se conectar, você deverá ver uma mensagem como:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

Lembre-se do ID do sensor: neste exemplo - <code>0x00158d0003eeeacf</code>.

Agora você deverá ver este sensor com ID em seu Home Assistant WebUI. Vá para <code>Configuração</code> -> <code>Dispositivos e Serviços</code> -> <code>Dispositivos</code> para verificar:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

Após adicionar todos os sensores, você pode parar o programa com <code>Ctrl+C</code>. Se você não quiser adicionar mais dispositivos, você pode abrir o arquivo de configuração novamente e definir <code>permit_join:</code> para <code>false</code>.
</li>

</List>
</li>

<li>

Criando Serviço para Iniciar Automaticamente

<List>

<li>

Agora você precisa criar um serviço. Crie o arquivo:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

Adicione o seguinte a este arquivo alterando <code>SEU_NOME_DE_USUÁRIO_DO_RASPPI_AQUI</code>. Se você não sabe seu nome de usuário, use o comando <code>whoami</code>.

<LessonCodeWrapper language="bash">
[Unit]
Description=zigbee2mqtt
After=network.target 
[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=YOUR_RASPPI_USERNAME_HERE
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>
</li>

<li>

Verifique se a configuração funciona:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

A saída deve se parecer com:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Ative o serviço para iniciar o Zigbee2MQTT automaticamente na inicialização:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>