---
title: "Урок №6, Развертывание карты датчиков"
description: 'РАЗВЕРТЫВАНИЕ КАРТЫ ДАТЧИКОВ'
lessonNumber: 6
metaOptions: [Учить, Сенсоры Связности и Децентрализованная Сеть Сенсоров]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

После сборки датчика и настройки модуля подключения датчиков настало время развернуть персональную децентрализованную карту датчиков.


## Требования & Установка

<List type="numbers">

<li>

Поскольку карта датчиков работает на JavaScript, сначала вам нужно установить `node` и менеджер `yarn`

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

Скачайте и постройте карту:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

Запустите карту в режиме `development` для тестирования.

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

Перейдите по URL-адресу с терминала, вы должны увидеть карту датчиков. После этого остановите его, нажав `Ctrl+C`.

</li>

</List>

## Конфигурация

<List type="numbers">

<li>

Найдите свой IPFS ID с помощью:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

Перейдите в папку `src` и переименуйте файлы:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Вставьте свой IPFS ID в `agents.json`:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

Откройте файл `config.json` и измените следующую часть файла конфигурации:

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


Здесь вам нужно вставить широту (`lat`) и долготу (`lng`) вашего города. По желанию, вы можете настроить [сервис направления ветра](https://github.com/danwild/wind-js-server) и указать URL к нему в поле `WIND_PROVIDER`.

</li>

</List>


## Сборка

<List type="numbers">

<li>

Запустите следующую команду для сборки файлов для релиза:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

Это создаст каталог `dist` со всеми компонентами статического веб-сайта.

</li>

<li>

Чтобы проверить, что все правильно, перейдите в каталог `dist` и откройте файл `index.html`. Через некоторое время данные датчиков из вашего модуля подключения датчиков появятся на карте.

</li>

</List>

