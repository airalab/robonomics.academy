---
title: "Урок №6, Розгортання карти датчиків"
description: 'РОЗГОРТАННЯ КАРТИ ДАТЧИКІВ'
lessonNumber: 6
metaOptions: [Вивчайте, Підключення датчиків та децентралізована мережа датчиків]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Після збирання датчика та налаштування модуля підключення датчиків час розгортання особистої децентралізованої карти датчиків.


## Вимоги & Встановлення

<List type="numbers">

<li>

Оскільки карта датчиків працює на JavaScript, спочатку вам потрібно встановити `node` та менеджер `yarn`

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

Завантажте та побудуйте карту:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

Запустіть карту в режимі `development` для тестування

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

Перейдіть за URL-адресою з терміналу, ви повинні побачити карту датчиків. Після цього зупиніть його за допомогою `Ctrl+C`.

</li>

</List>

## Конфігурація

<List type="numbers">

<li>

Знайдіть свій IPFS ID за допомогою:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

Перейдіть до папки `src` та перейменуйте файли:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Вставте свій IPFS ID в `agents.json`:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

Відкрийте файл `config.json` та змініть наступну частин файлу конфігурації:

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


Тут вам потрібно вставити широту (`lat`) та довготу (`lng`) вашого міста. Опціонально, ви можете налаштувати [службу напрямку вітру](https://github.com/danwild/wind-js-server) та вказати URL до неї в полі `WIND_PROVIDER`.

</li>

</List>


## Побудова

<List type="numbers">

<li>

Запустіть наступну команду для побудови файлів для релізу:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

Це створить каталог `dist` з усіма компонентами статичного веб-сайту.

</li>

<li>

Щоб перевірити, чи все правильно, перейдіть до каталогу `dist` та відкрийте файл `index.html`. Через деякий час дані датчиків з вашого модуля підключення датчиків з'являться на карті.

</li>

</List>

