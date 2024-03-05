---
title: "Arquitetura"
description: Este curso é tudo sobre conhecer o sistema Feecc e todos os seus componentes.
metaOptions: [Aprender, Acostumar-se com o Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
Nesta lição, vamos dar uma olhada mais de perto na arquitetura do Feecc e analisar todos os componentes do software.
</RoboAcademyText>

A plataforma Feecc é composta por vários serviços, desde o controle do banco de trabalho do engenheiro até a prestação de análises. Cada serviço é responsável por algum tipo de funcionalidade necessária para implantação em um ambiente empresarial.

## Banco de Trabalho do Engenheiro Feecc

A principal tarefa do Banco de Trabalho do Engenheiro é organizar o espaço de trabalho do engenheiro de montagem. Dependendo da tarefa, o engenheiro pode precisar dos seguintes dispositivos:

- Câmera IP para organizar a gravação de vídeo do processo de produção;
- Leitor RFID para identificação no sistema por meio de cartão RFID pessoal;
- Leitor de código de barras para escanear etiquetas de produtos;
- Impressora de etiquetas para rotular os produtos fabricados;
- Sensores digitais coletando dados de vários dispositivos / estações.

O software do Banco de Trabalho do Engenheiro geralmente consiste nos seguintes contêineres. Primeiro, o software que requer instalação **no computador em que o funcionário trabalha** durante a montagem do produto:

1. [feecc-workbench-daemon](https://github.com/Multi-Agent-io/feecc-workbench-daemon) — o coração da plataforma Feecc que fornece aos usuários acesso a todos os recursos e configurações do Feecc; também contém serviços leves para impressão de etiquetas usando uma impressora de etiquetas e gravação de vídeo a partir de fluxos RTSP;
2. [feecc-workbench-frontend](https://github.com/Multi-Agent-io/feecc-workbench-frontend) — uma interface web para interação do funcionário com a plataforma Feecc;
3. [feecc-hid-reader-daemon](https://github.com/Multi-Agent-io/feecc-hid-reader-daemon) — um daemon Python para envio de eventos de periféricos USB;

Segundo, o software que pode ser instalado **tanto no computador do funcionário quanto em um servidor na rede local**:

1. [feecc-ipfs-gateway](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) — um microserviço para publicar arquivos no IPFS e, mais especificamente, CIDs de arquivos na Rede Robonomics;

A figura abaixo mostra a arquitetura do Local de Trabalho do Engenheiro Feecc em um ambiente corporativo. O Gateway IPFS (bem como o nó IPFS e o MongoDB na forma de um cluster peer) pode ser hospedado no computador de cada funcionário, o que aumentará a descentralização do sistema a um custo de recursos computacionais.

<LessonImages src="feecc-course/feecc_global_hardware.png" alt="an architecture of Feecc"/>

### Hardware suportado para um espaço de trabalho:

#### Scanner RFID

Um scanner RFID USB é necessário para autorizar engenheiros no campo com seus crachás internos. As informações recebidas são processadas usando o `feecc-hid-reader-daemon`.

#### Scanner de código de barras

O scanner de código de barras USB é necessário para identificar produtos por códigos de barras, enviar comandos para serviços e para a atribuição correta de certificados. As informações recebidas também são processadas com o `feecc-hid-reader-daemon`. A leitura em duas dimensões é desejável, mas não é obrigatória.

#### Computador do funcionário

Um pequeno computador de placa única processa sinais de dispositivos externos (scanner de código de barras, scanner RFID), envia solicitações para imprimir imagens na impressora, iniciar e parar a gravação de vídeo, enviar dados para o Gateway IPFS. Ele executa os seguintes serviços: `feecc-workbench-frontend`, `feecc-workbench-daemon` com suporte a impressora de etiquetas e câmera, `feecc-hid-reader-daemon`. Uma conexão com a Internet via Wi-Fi ou LAN é necessária.
    
Vale ressaltar que qualquer computador pode ser usado em vez de um computador de placa única com um monitor. O sistema operacional GNU/LINUX deve estar instalado nele nativamente ou através de uma máquina virtual.
    
Especificações técnicas mínimas:
    
- CPU: Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) SoC de 64 bits @ 1,8GHz ou similar;
- RAM: 4GB LPDDR4-3200 ou similar.

#### Tela

O monitor é usado pelo funcionário para inserir e visualizar informações sobre a etapa de produção atual. Também exibe dicas para o engenheiro sobre a fase atual. Outros dispositivos de entrada também podem ser usados.

#### Impressora de etiquetas

A impressora de etiquetas é usada para imprimir códigos QR e códigos de barras para posterior colocação de etiquetas no produto para fins de identificação e verificação. A interação com a impressora é realizada com a ajuda do serviço correspondente `feecc-workbench-daemon`. Em nosso caso, usamos impressoras XPrinter 236B.

#### Câmera IP

Câmera IP para capturar processos de produção para inclusão no certificado do produto. Localizada acima da área de montagem do produto. A interação com a câmera é realizada usando o serviço correspondente `feecc-workbench-daemon`.

Especificações técnicas necessárias: fonte de alimentação PoE, protocolo de transferência de dados RTSP. Em nosso caso, usamos Hikvision HiWatch DS-i200d.

### Hardware suportado para vários espaços de trabalho:

#### Roteador ou switch

É necessário um roteador ou switch com suporte PoE 802.3af e alimentação PoE nas portas de saída para alimentar as câmeras IP e conectá-las ao serviço `feecc-workbench-daemon`. Em nosso caso, usamos MikroTik hEX PoE (um para 3-4 locais de trabalho) e fonte de alimentação.

#### Servidor (opcional)

Também pode ser instalado um servidor maior que pode executar `feecc-ipfs-gateway`. Pode ser localizado no lugar de um dos computadores dos locais de trabalho dos funcionários. 

Especificações técnicas mínimas: 

- CPU: processador Intel Xeon E-2200 ou similar;
- RAM: 8GB;
- Armazenamento: 1TB HDD;
- Interface LAN: 1 Gbit/s.

## Feecc Analytics

A principal tarefa da Feecc Analytics é organizar o processo de rastreabilidade de produtos acabados e sua inspeção pré-venda no departamento de controle de produtos.

Feecc Analytics depende dos seguintes contêineres:

1. [feecc-analytics-backend](https://github.com/Multi-Agent-io/feecc-analytics-backend) — o principal software para implantar o serviço de análise;
2. [feecc-analytics-frontend](https://github.com/Multi-Agent-io/feecc-analytics-frontend) — o software frontend para o serviço de análise;

Normalmente é implantado em um único servidor localmente para fins de segurança de dados apenas dentro da organização.

O hardware necessário para o funcionamento da Feecc Analytics é um servidor local ou remoto (máquina virtual) no qual a aplicação web será executada e um scanner de código de barras. Cada funcionário autorizado pode acessar a aplicação web de seu computador com um nome de usuário e senha.

## Feecc Validator

A principal tarefa do Feecc Validator é comparar dados de diferentes repositórios de dados para validar a integridade do certificado digital do produto.

Feecc Validator depende dos seguintes contêineres:

1. [feecc-validator-backend](https://github.com/Multi-Agent-io/feecc-validator-backend) — um microsserviço, projetado para lidar com a validação de certificados e obter dados associados à unidade fornecida pelo usuário, tendo apenas uma das peças de dados;
2. [feecc-validator-frontend](https://github.com/Multi-Agent-io/feecc-validator-frontend) — uma interface web para interação com o microsserviço de validação.

Assim como a Feecc Analytics, pode ser implantado em um único servidor localmente e requer um scanner de código de barras.

<RoboAcademyText fWeight="500">
Na próxima lição, daremos uma olhada mais de perto no sistema Feecc através de uma pequena demonstração que é executada localmente em seu computador.
</RoboAcademyText>