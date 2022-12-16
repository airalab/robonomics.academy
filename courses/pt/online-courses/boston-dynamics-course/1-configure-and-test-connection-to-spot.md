---
title: "Lição #1, Configurar e testar a conexão do Spot"
description: Nesta lição, você aprenderá como configurar a rede Yggdrasil e estabelecer conexão com o robô.
lessonNumber: 1
courseID: 2
metaOptions: [Cursos on-line, Desenvolvimento de software Boston Dynamics Spot]
---

<section class="container__narrow">

## Do que se trata?

Nesta lição, você aprenderá como configurar a rede Yggdrasil e estabelecer conexão com o robô.

</section>


<section class="container__narrow">

## O desafio

Nosso objetivo é obter respostas do Spot para nosso sinal de [ping](https://en.wikipedia.org/wiki/Ping_(networking_utility)). Utilizamos a Rede Yggdrasil para expor o Spot à Internet, o que significa que precisaremos configurar primeiro o suporte da Rede Yggdrasil em seu computador.

</section>

<section class="container__reg">

## Instruções

<List type="numbers">

<li>

Instalação da Yggdrasil

Yggdrasil é uma implementação em estágio inicial de uma rede IPv6 criptografada de ponta a ponta. Antes de iniciar as lissões, você precisa instalá-lo em seu computador.

Para Linux: Instruções de instalação [aqui](https://yggdrasil-network.github.io/installation-linux-deb.html).

Para MacOS: Baixe o arquivo .pkg [aqui](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4.0-macos-amd64.pkg). Localize o arquivo baixado. Clique com o botão direito do mouse e clique em Abrir. Efetue a instalação como de costume.

Para Windows: Baixe o arquivo .msi para [sistema x64](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi) ou para [sistema x32](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi) e execute-o com duplo clique.
</li>

<li>

Abrir arquivo de configuração

Você precisa adicionar uma lista de peers (nós públicos) ao arquivo de configuração para que você possa se conectar ao Spot.

Para MacOS e Linux:

Para isso, edite o arquivo <code>yggdrasil.conf</code> com este comando em um terminal:

<lessonCodeWrapper language="bash">sudo nano /etc/yggdrasil.conf</lessonCodeWrapper>

Para Windows: Executar <code>updateconfig.bat</code> em <code>C:/Program Files/Yggdrasil</code>.

Em seguida, em <code>C:/ProgramData/Yggdrasil</code> abrir <code>yggdrasil.conf</code> com qualquer editor de texto.

<code>ProgramData</code> é uma pasta oculta, portanto, é necessário mostrar dados ocultos.

</li>

<li>

Write peers

No arquivo que você abriu encontre a linha <code>Peers:</code> (está no início do arquivo) adicionar 5-6 peers geograficamente próximos a você (escreva-os dentro dos parênteses). Você pode encontrar a lista de pares disponíveis [aqui](https://github.com/yggdrasil-network/public-peers) ou adicionar peers a partir do exemplo abaixo. Exemplo em yggdrasil.conf:

<lessonCodeWrapper language="json">
[
  tcp://213.188.199.150:10010
  tcp://213.188.210.9:10010
  tcp://[2a09:8280:1::3:312]:10010
  tcp://[2a09:8280:1::a:2e2]:10010
  tcp://46.151.26.194:60575
  tcp://ygg-ru.cofob.ru:18000
  tcp://ygg.tomasgl.ru:61933
  tls://185.22.60.71:8443
  tcp://51.15.118.10:62486
  tls://ygg.loskiq.dev:17314
  tls://longseason.1200bps.xyz:13122
]
</lessonCodeWrapper>

Verifique se os peers estão online em [Public Peers](https://publicpeers.neilalexander.dev/)

</li>

<li>

Salvar e fechar o arquivo de configuração

Para Linux e MacOS:

Precione <code>Ctrl+x</code>, depois pressione <code>y</code> para salvar as alterações e pressione <code>Enter</code>.

Para Windows: Salve e feche o arquivo.

</li>

<li>

Reiniciar o serviço

Para Linux: Em seguida, reinicie a Yggdrasil usando este comando:

<lessonCodeWrapper language="bash">systemctl restart yggdrasil</lessonCodeWrapper>

Para macOS: Descarregue o serviço e execute a Yggdrasil com o arquivo de configuração alterado:

<lessonCodeWrapper language="bash" codeClass="big-code">
sudo launchctl unload /Library/LaunchDaemons/yggdrasil.plist
sudo yggdrasil -useconffile /etc/yggdrasil.conf
</lessonCodeWrapper>

Você precisará fazer isso antes de cada lição.

Para Windows:

Pressione a tecla Win + R e digite <code>services.msc</code>, encontre o serviço Yggdrasil, abra-o e reinicie (pressione Stop e Start).

<LessonImages src="boston-dynamics-course/lesson-0-1.jpg" alt="tutorial"/>
</li>

<li>

Verificar conexão

Verifique se Yggdrasil funciona bem. Para isso, tente fazer ping no endereço do Spot:

<lessonCodeWrapper language="bash">ping -6 strelka.ygg.merklebot.com</lessonCodeWrapper>

Para abrir o terminal no Windows pressione <code>Win+R</code>, escreva <code>cmd</code> e pressione <code>Enter</code>.

No MacOS use <code>ping6</code> em vez de <code>ping</code>.

Se você não conseguir fazer ping no Spot ou se tiver algum erro durante a configuração da Yggdrasil, consulte a [página de resolução de problemas](https://dapp.spot-sdk.education/docs/spot-troubleshooting). Se você não conseguir encontrar a solução lá, envie um e-mail para **spot@robonomics.network**.

</li>

<li>

Criar chave ssh

Você se conectará ao Spot via ssh, então você precisa criar chaves ssh que você usará nas aulas de reserva.

Execute o seguinte comando no terminal:

<lessonCodeWrapper language="bash">ssh-keygen -t rsa</lessonCodeWrapper>

O Cliente SSH está disponível por padrão apenas no Windows 10, portanto, se você usar versões mais antigas, precisará instalá-lo. Por exemplo, você pode usar [PuTTY](https://www.putty.org/). Lembre-se do caminho para sua chave (por padrão é <code>/home/&lt;user&gt;/.ssh/id_rsa.pub</code> ou <code>C:\Users\&lt;user&gt;\.ssh\id_rsa.pub</code>).
</li>
</List>
</section>

<section class="container__narrow">

### Você está pronto para praticar?

Quando estiver pronto, você pode comprar uma sessão de prática de 1 hora especificando suas credenciais de acesso (chave SSH) e o horário em que deseja se conectar ao Spot para resolver a tarefa.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Alugue uma vaga" />

</section>