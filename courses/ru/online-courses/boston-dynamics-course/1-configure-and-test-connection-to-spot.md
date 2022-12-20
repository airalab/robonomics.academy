---
title: "Урок #1, Настроить и проверить подключение к Spot"
description: В этом уроке вы узнаете, как настроить сеть Yggdrasil и установить соединение с роботом.
lessonNumber: 1
courseID: 2
metaOptions: [Онлайн Курсы, Разработка программного обеспечения для Spot от Boston Dynamics]
---

<section class="container__narrow">

## О чем вы узнаете

В этом уроке вы узнаете, как настроить сеть Yggdrasil и установить соединение с роботом.

</section>


<section class="container__narrow">

## Задача

Наша цель — получить от Spot ответы на наши [ping](https://en.wikipedia.org/wiki/Ping_(networking_utility)) сигналы. Мы используем сеть Yggdrasil для доступа Spot к Интернету, а это значит, что сначала нужно настроить поддержку сети Yggdrasil на вашем компьютере.

</section>

<section class="container__reg">

## Инструкция

<List type="numbers">

<li>

Установка Yggdrasil

Yggdrasil — это ранняя реализация сети IPv6 со сквозным шифрованием. Перед началом занятий вам необходимо установить его на свой компьютер.

Для Linux: Инструкция по установке [здесь](https://yggdrasil-network.github.io/installation-linux-deb.html).

Для MacOS: загрузите файл .pkg [отсюда](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4.0-macos-amd64.pkg). Найдите загруженный файл в Finder. Щелкните по нему правой кнопкой мыши и нажмите «Открыть». Пройдите через установщик, как обычно.

Для Windows: Загрузите файл .msi для операционной системы [x64](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi) или [x32](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi) запустите его двойным щелчком мыши.
</li>

<li>

Откройте файл конфигурации

Вам нужно добавить список пиров (общедоступные узлы) в файл конфигурации, чтобы вы могли подключиться к Spot.

Для MacOS и Linux:

Для этого отредактируйте файл <code>yggdrasil.conf</code> с помощью этой команды в терминале:

<lessonCodeWrapper language="bash">sudo nano /etc/yggdrasil.conf</lessonCodeWrapper>

Для Windows: запустите <code>updateconfig.bat</code> в <code>C:/Program Files/Yggdrasil</code>.

Затем в папке <code>C:/ProgramData/Yggdrasil</code> откройте <code>yggdrasil.conf</code> с помощью любого текстового редактора.

<code>ProgramData</code> — это папка спрятана, поэтому вам нужно показать скрытые данные.

</li>

<li>

Написание пиров

В открывшемся файле найдите строку <code>Peers:</code> (она находится в начале файла) добавьте 5-6 пиров географически близких к вам (напишите их в скобках). Вы можете найти список доступных пиров [здесь](https://github.com/yggdrasil-network/public-peers) или добавить пиры из примера ниже. Пример в yggdrasil.conf:

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

Проверьте, находятся ли пиры онлайн в [Public Peers](https://publicpeers.neilalexander.dev/)

</li>

<li>

Сохраните и закройте файл конфигурации

Для Linux и MacOS:

Нажмите <code>Ctrl+x</code>, затем нажмите <code>y</code> чтобы сохранить изменения, и нажмите <code>Enter</code>.

Для Windows: сохраните и закройте файл.

</li>

<li>

Перезапуск сервиса

Для Linux: затем перезапустите Yggdrasil с помощью этой команды:

<lessonCodeWrapper language="bash">systemctl restart yggdrasil</lessonCodeWrapper>

Для macOS: выгрузите сервис и запустите Yggdrasil с измененным файлом конфигурации:

<lessonCodeWrapper language="bash" codeClass="big-code">
sudo launchctl unload /Library/LaunchDaemons/yggdrasil.plist
sudo yggdrasil -useconffile /etc/yggdrasil.conf
</lessonCodeWrapper>

Это необходимо делать перед каждым уроком.

Для Windows:

Нажмите win + r и введите <code>services.msc</code>, найдите сервис Yggdrasil, откройте его и перезапустите (нажмите Stop и Start).

<LessonImages src="boston-dynamics-course/lesson-0-1.jpg" alt="tutorial"/>
</li>

<li>

Проверьте подключение

Проверьте, хорошо ли работает Yggdrasil. Для этого попробуйте выполнить ping адреса Spot:

<lessonCodeWrapper language="bash">ping -6 strelka.ygg.merklebot.com</lessonCodeWrapper>

Чтобы открыть терминал в Windows, нажмите <code>Win+R</code>, введите <code>cmd</code> и нажмите <code>Enter</code>.

В MacOS используйте <code>ping6</code> вместо <code>ping</code>.

Если вы не можете выполнить ping Spot или у вас возникли какие-либо ошибки во время установки Yggdrasil, загляните на [Troubleshooting page](https://dapp.spot-sdk.education/docs/spot-troubleshooting). Если вы не можете найти решение проблемы, отправьте электронное письмо по адресу **spot@robonomics.network**.

</li>

<li>

Создание ssh-ключа

Вы подключитесь к Spot через ssh, поэтому вам нужно создать ssh-ключи, которые вы будете использовать при бронировании уроков.

Выполните следующую команду в терминале:

<lessonCodeWrapper language="bash">ssh-keygen -t rsa</lessonCodeWrapper>

Клиент SSH доступен по умолчанию только в Windows 10, поэтому, если вы используете более старые версии, вам необходимо установить его. Например, вы можете использовать [PuTTY](https://www.putty.org/). Запомните путь к вашему ключу (по умолчанию это <code>/home/&lt;user&gt;/.ssh/id_rsa.pub</code> и <code>C:\Users\&lt;user&gt;\.ssh\id_rsa.pub</code>).
</li>
</List>
</section>

<section class="container__narrow">

### Готовы приступить к практике?

Как только почувствуете, что готовы, вы можете купить часовой практический сеанс, указав свои учетные данные для доступа (SSH-ключ) и время, когда вы хотите подключиться к Spot для решения задачи.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Арендовать Spot" />

</section>