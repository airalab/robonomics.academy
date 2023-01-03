(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{NTw2:function(e,o,a){"use strict";a.r(o);var r=a("7uw+"),t=a("UQSp"),s=a("Kw5r");function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:t.a},c=function(e){var o=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===n(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?o[e]=i[e]:a[e]=function(){return i[e]}}))},p=s.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",d={excerpt:null,title:"Lição #1, Configurar e testar a conexão do Spot",description:"Nesta lição, você aprenderá como configurar a rede Yggdrasil e estabelecer conexão com o robô.",lessonNumber:1,courseID:2,metaOptions:["Cursos on-line","Desenvolvimento de software Boston Dynamics Spot"]};var u=function(e){e.options[l]&&(e.options[l]=d),s.a.util.defineReactive(e.options,l,d),e.options.computed=p.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},v=Object(r.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("VueRemarkRoot",[a("section",{staticClass:"container__reg"},[a("h2",{attrs:{id:"do-que-se-trata"}},[a("a",{attrs:{href:"#do-que-se-trata","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Do que se trata?")]),a("p",[e._v("Nesta lição, você aprenderá como configurar a rede Yggdrasil e estabelecer conexão com o robô.")])]),a("section",{staticClass:"container__reg"},[a("h2",{attrs:{id:"o-desafio"}},[a("a",{attrs:{href:"#o-desafio","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("O desafio")]),a("p",[e._v("Nosso objetivo é obter respostas do Spot para nosso sinal de "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ping_(networking_utility)",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("ping")]),e._v(". Utilizamos a Rede Yggdrasil para expor o Spot à Internet, o que significa que precisaremos configurar primeiro o suporte da Rede Yggdrasil em seu computador.")])]),a("section",{staticClass:"container__reg"},[a("h2",{attrs:{id:"instruções"}},[a("a",{attrs:{href:"#instru%C3%A7%C3%B5es","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Instruções")]),a("List",{attrs:{type:"numbers"}},[a("li",[a("p",[e._v("Instalação da Yggdrasil")]),a("p",[e._v("Yggdrasil é uma implementação em estágio inicial de uma rede IPv6 criptografada de ponta a ponta. Antes de iniciar as lissões, você precisa instalá-lo em seu computador.")]),a("p",[e._v("Para Linux: Instruções de instalação "),a("a",{attrs:{href:"https://yggdrasil-network.github.io/installation-linux-deb.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("aqui")]),e._v(".")]),a("p",[e._v("Para MacOS: Baixe o arquivo .pkg "),a("a",{attrs:{href:"https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4.0-macos-amd64.pkg",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("aqui")]),e._v(". Localize o arquivo baixado. Clique com o botão direito do mouse e clique em Abrir. Efetue a instalação como de costume.")]),a("p",[e._v("Para Windows: Baixe o arquivo .msi para "),a("a",{attrs:{href:"https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("sistema x64")]),e._v(" ou para "),a("a",{attrs:{href:"https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("sistema x32")]),e._v(" e execute-o com duplo clique.")])]),a("li",[a("p",[e._v("Abrir arquivo de configuração")]),a("p",[e._v("Você precisa adicionar uma lista de peers (nós públicos) ao arquivo de configuração para que você possa se conectar ao Spot.")]),a("p",[e._v("Para MacOS e Linux:")]),a("p",[e._v("Para isso, edite o arquivo "),a("code",[e._v("yggdrasil.conf")]),e._v(" com este comando em um terminal:")]),a("lessonCodeWrapper",{attrs:{language:"bash"}},[e._v("sudo nano /etc/yggdrasil.conf")]),a("p",[e._v("Para Windows: Executar "),a("code",[e._v("updateconfig.bat")]),e._v(" em "),a("code",[e._v("C:/Program Files/Yggdrasil")]),e._v(".")]),a("p",[e._v("Em seguida, em "),a("code",[e._v("C:/ProgramData/Yggdrasil")]),e._v(" abrir "),a("code",[e._v("yggdrasil.conf")]),e._v(" com qualquer editor de texto.")]),a("p",[a("code",[e._v("ProgramData")]),e._v(" é uma pasta oculta, portanto, é necessário mostrar dados ocultos.")])],1),a("li",[a("p",[e._v("Write peers")]),a("p",[e._v("No arquivo que você abriu encontre a linha "),a("code",[e._v("Peers:")]),e._v(" (está no início do arquivo) adicionar 5-6 peers geograficamente próximos a você (escreva-os dentro dos parênteses). Você pode encontrar a lista de pares disponíveis "),a("a",{attrs:{href:"https://github.com/yggdrasil-network/public-peers",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("aqui")]),e._v(" ou adicionar peers a partir do exemplo abaixo. Exemplo em yggdrasil.conf:")]),a("lessonCodeWrapper",{attrs:{language:"json"}},[e._v("\n[\n  tcp://213.188.199.150:10010\n  tcp://213.188.210.9:10010\n  tcp://[2a09:8280:1::3:312]:10010\n  tcp://[2a09:8280:1::a:2e2]:10010\n  tcp://46.151.26.194:60575\n  tcp://ygg-ru.cofob.ru:18000\n  tcp://ygg.tomasgl.ru:61933\n  tls://185.22.60.71:8443\n  tcp://51.15.118.10:62486\n  tls://ygg.loskiq.dev:17314\n  tls://longseason.1200bps.xyz:13122\n]\n")]),a("p",[e._v("Verifique se os peers estão online em "),a("a",{attrs:{href:"https://publicpeers.neilalexander.dev/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Public Peers")])])],1),a("li",[a("p",[e._v("Salvar e fechar o arquivo de configuração")]),a("p",[e._v("Para Linux e MacOS:")]),a("p",[e._v("Precione "),a("code",[e._v("Ctrl+x")]),e._v(", depois pressione "),a("code",[e._v("y")]),e._v(" para salvar as alterações e pressione "),a("code",[e._v("Enter")]),e._v(".")]),a("p",[e._v("Para Windows: Salve e feche o arquivo.")])]),a("li",[a("p",[e._v("Reiniciar o serviço")]),a("p",[e._v("Para Linux: Em seguida, reinicie a Yggdrasil usando este comando:")]),a("lessonCodeWrapper",{attrs:{language:"bash"}},[e._v("systemctl restart yggdrasil")]),a("p",[e._v("Para macOS: Descarregue o serviço e execute a Yggdrasil com o arquivo de configuração alterado:")]),a("lessonCodeWrapper",{attrs:{language:"bash",codeClass:"big-code"}},[e._v("\nsudo launchctl unload /Library/LaunchDaemons/yggdrasil.plist\nsudo yggdrasil -useconffile /etc/yggdrasil.conf\n")]),a("p",[e._v("Você precisará fazer isso antes de cada lição.")]),a("p",[e._v("Para Windows:")]),a("p",[e._v("Pressione a tecla Win + R e digite "),a("code",[e._v("services.msc")]),e._v(", encontre o serviço Yggdrasil, abra-o e reinicie (pressione Stop e Start).")]),a("LessonImages",{attrs:{src:"boston-dynamics-course/lesson-0-1.jpg",alt:"tutorial"}})],1),a("li",[a("p",[e._v("Verificar conexão")]),a("p",[e._v("Verifique se Yggdrasil funciona bem. Para isso, tente fazer ping no endereço do Spot:")]),a("lessonCodeWrapper",{attrs:{language:"bash"}},[e._v("ping -6 strelka.ygg.merklebot.com")]),a("p",[e._v("Para abrir o terminal no Windows pressione "),a("code",[e._v("Win+R")]),e._v(", escreva "),a("code",[e._v("cmd")]),e._v(" e pressione "),a("code",[e._v("Enter")]),e._v(".")]),a("p",[e._v("No MacOS use "),a("code",[e._v("ping6")]),e._v(" em vez de "),a("code",[e._v("ping")]),e._v(".")]),a("p",[e._v("Se você não conseguir fazer ping no Spot ou se tiver algum erro durante a configuração da Yggdrasil, consulte a "),a("a",{attrs:{href:"https://dapp.spot-sdk.education/docs/spot-troubleshooting",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("página de resolução de problemas")]),e._v(". Se você não conseguir encontrar a solução lá, envie um e-mail para "),a("strong",[e._v("spot@robonomics.network")]),e._v(".")])],1),a("li",[a("p",[e._v("Criar chave ssh")]),a("p",[e._v("Você se conectará ao Spot via ssh, então você precisa criar chaves ssh que você usará nas aulas de reserva.")]),a("p",[e._v("Execute o seguinte comando no terminal:")]),a("lessonCodeWrapper",{attrs:{language:"bash"}},[e._v("ssh-keygen -t rsa")]),a("p",[e._v("O Cliente SSH está disponível por padrão apenas no Windows 10, portanto, se você usar versões mais antigas, precisará instalá-lo. Por exemplo, você pode usar "),a("a",{attrs:{href:"https://www.putty.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("PuTTY")]),e._v(". Lembre-se do caminho para sua chave (por padrão é "),a("code",[e._v("/home/<user>/.ssh/id_rsa.pub")]),e._v(" ou "),a("code",[e._v("C:\\Users\\<user>.ssh\\id_rsa.pub")]),e._v(").")])],1)])],1),a("section",{staticClass:"container__reg"},[a("h3",{attrs:{id:"você-está-pronto-para-praticar"}},[a("a",{attrs:{href:"#voc%C3%AA-est%C3%A1-pronto-para-praticar","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Você está pronto para praticar?")]),a("p",[e._v("Quando estiver pronto, você pode comprar uma sessão de prática de 1 hora especificando suas credenciais de acesso (chave SSH) e o horário em que deseja se conectar ao Spot para resolver a tarefa.")]),a("h5",{attrs:{id:"lessonbuttonlink-srchttpsdappspot-sdkeducationcheckout-textalugue-uma-vaga-"}},[a("a",{attrs:{href:"#lessonbuttonlink-srchttpsdappspot-sdkeducationcheckout-textalugue-uma-vaga-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),a("LessonButtonLink",{attrs:{src:"https://dapp.spot-sdk.education/#/checkout",text:"Alugue uma vaga"}})],1)])])}),[],!1,null,null,null);"function"==typeof c&&c(v),"function"==typeof u&&u(v);o.default=v.exports},UQSp:function(e,o,a){"use strict";o.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);