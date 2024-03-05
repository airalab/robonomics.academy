---
title: "Частина 3: Виникнення світового комп'ютера"
description: У третій частині під назвою "Виникнення світового комп'ютера" ми спробуємо, шар за шаром, відтворити інженерну реалізацію світового комп'ютера, використовуючи приклади з Ethereum та Polkadot, як і раніше.
metaOptions: [Вивчайте]
defaultName: "World computer in your home"
---

У третій частині під назвою "Виникнення світового комп'ютера" ми спробуємо, шар за шаром, відтворити інженерну реалізацію світового комп'ютера, використовуючи приклади з Ethereum та Polkadot, як і раніше.

Давайте почнемо з Ethereum. Ethereum почався у 2015 році зі стану, який можна характеризувати як поєднання алгоритму консенсусу доказу роботи, що дозволяє світовому комп'ютеру існувати у децентралізованому стані (як обговорювалося у частині 2). Додатково було введено Ethereum Virtual Machine (EVM), яка служила як машина з повними можливостями обчислень Тьюрінга. Разом ці два елементи утворили першу версію світового комп'ютера, іноді називану передвісником. У цьому контексті почали з'являтися децентралізовані додатки або смарт-контракти.

Протягом наступних 5 років Ethereum жив досить незмінним життям, пройшовши деякі інженерні налаштування, такі як постійне збільшення лімітів газу, за винятком подій, таких як Шанхайський форк. Зокрема, під час другого DEFCON, що відбувся в Шанхаї, атака з відмовою в обслуговуванні використала функцію у віртуальній машині, яка споживала мінімальну кількість газу, але викликала значні обчислення в мережі Ethereum. Це призвело до переповнення пам'яті, ефективно перериваючи цілу вузлу Ethereum. Цей інцидент підкреслює витончені деталі, які виникають при роботі з великим і абстрактним рішенням, таким як створення віртуальної машини.

Рухаючись вперед, відбулося значне зміщення приблизно в кінці десятиліття, зокрема в 2020 році, з появою Ethereum 2.0. Однак Ethereum 2.0 зараз застарів, і я б характеризував справжній прорив як початок близько 2019-2020 років. Протягом цього періоду в Ethereum відбувся справжній технологічний прорив, рухаючись в напрямку концепції Ethereum 2.0. Момент інженерної зміни в архітектурі Ethereum можна вважати подією, відому як "злиття", де функціональності ланцюга маяка були поєднані. Злиття відзначило значне зміщення в парадигмі Ethereum, переходячи в незначно відмінний стан від того, що було на дошці. Фактична інженерна зміна в архітектурі Ethereum може бути пов'язана з "злиттям", де функціональності ланцюга маяка були інтегровані. Для докладної історії цього ви можете звернутися на веб-сайт ethereum.org, де надається відмінна стаття про співіснування традиційного блокчейну Ethereum з паралельним блокчейном, запущеним у 2015 році, та Ethereum Virtual Machine.

Коли стався злиття, ми стали свідками нового архітектурного представлення, як на рівні мережі, так і для окремих вузлів, що взаємодіють з мережею Ethereum. Яка була фактична зміна? Для багатьох злиття означає перехід від доказу роботи до доказу ставки, що дійсно значно. Це передбачає підвищену ефективність і налаштування, але це все ще налаштування відносно одного з параметрів. Однак більш помітною внутрішньою інженерною зміною для кожного клієнта мережі було розщеплення. Більше не існувало одного конкретного мережевого клієнта або монолітної архітектури. Замість цього ми отримали два компоненти одного вузла, що взаємодіють з мережею Ethereum.

Перша частина, яку я позначив "ланцюгом маяка" на діаграмі, по суті представляє колективне зображення всіх інновацій, які увійшли в клієнт Ethereum на момент злиття. Друга частина - збережена віртуальна машина. Тим не менш, тут також варто щось додати. Діалоги справді почалися про заміну віртуальної машини, яка була виключно адаптована для роботи з розумними контрактами і розумними контрактами на конкретній мові - Solidity. Це тому, що до 2015 року практично не залишилося інтерпретаторів для розумних контрактів на мовах, крім Solidity, і архітектура здавалася трохи однобічною з погляду програміста Ethereum. Ви вивчаєте фрагмент JavaScript у формі Solidity, пишете на ньому код розумного контракту і отримуєте свій DApp, наприклад, Uniswap, наприклад.

З моменту появи більш складної архітектури Ethereum обговорення оберта��ися навколо ідеї того, що віртуальну машину, яка існувала як трохи монолітний елемент з 2015 року, також можна замінити в новій архітектурі. Розмова перейшла на заміну її на щось на кшталт WebAssembly (Wasm) або більш цікаве рішення з точки зору написання коду для світового комп'ютера. Можна сказати, "Wasm з питанням".

З точки зору Ланцюга маяка, він дійсно працює на доказі ставки, але що цікавіше, це включення Gasper. Це представляє модифікацію оригінальних ідей про Casper. Casper, часто називаний дружнім фінальним гаджетом привидів, був представлений, можливо, навіть на Defcon 3 або 4, і можливо, навіть обговорювався на Defcon 2 - я не пам'ятаю точно. Але на конференції EthCC в Парижі, яка точно відбулася в 2018 році, Влад Замфір і Віталік, з різних кімнат, обговорювали появу Casper як дружнього привида, який наглядає за учасниками у доказі ставки і приходить на допомогу мережі, коли вузол веде себе неадекватно. З цієї ідеї Casper виникає Gasper. Не заглиблюючись у термінологію занадто, алгоритм консенсусу зазнає змін, змінюючись не лише з точки зору простоти, але й стаючи складнішим, схожим на Polkadot. Як я вже зазначав раніше, у Polkadot є два алгоритми консенсусу, Babe і Grandpa. Так само з функціональністю Ланцюга маяка Ethereum досягнення консенсусу і фінальності не є миттєвими. Це включає епохи, і мережа працює за більш складним сценарієм, досягаючи стану, який вже дещо динамічний, не заморожений, і по суті вже врізаний в камінь.

Що мо��на додати щодо 2024 року? Для мене це було тривале спостереження і спроба зрозуміти, чи врешті-решт Ethereum реалізує шардування чи ні. Шардування - це можливість існувати не з одним блокчейном, а з декількома блокчейнами в межах однієї мережі. Під час спостереження за злиттям і одночасним зростанням мереж L2 (L2) у мене виникали питання про те, чи справді матеріалізується шардування. Шардування здавалося мені цікавим через його однорідність - наявність декількох ланцюгів, які майже ідентичні, не маючи жодних конкретних характеристик. Це виглядало цікавим підходом, але не таким гнучким, як гетерогенний підхід. У мережах L2, навіть кілька років тому, я бачив гетерогенність Ethereum, його здатність працювати з різними типами більш конкретних блокчейнів. ��ене цікавило, яким шляхом він піде - чи шардування, з його однорідністю, витісне рішення L2, чи рішення L2 з гетерогенним підходом наситить Ланцюг маяка та основні вузли мережі Ethereum.

Сьогодні, у 2024 році, на основі статей на ethereum.org, здається, що шардування як концепція було відсунуто на другий план, і увага зосереджена на допомозі різним мережам L2 інтегруватися з Ланцюгом маяка та вирівнюватися з функціональністю основного ланцюга, який зараз розділений на два елементи в архітектурі мережі Ethereum.

Отже, не заглиблюючись у деталі структури мережі L2 - хоча ми згадаємо про це, коли заповнимо другу частину дошки - ми повинні уявити, що Ethereum зараз є свого роду Ланцюгом Маяка, маяком, керівною зіркою для численних мереж L2. Ці мережі L2 можуть мати більш конкретну функціональність, виконуючи свою логіку відповідно до набору індивідуальних функцій. Це в певній мірі відповідає ідеї швейцарського ножа - не роблячи Ethereum швейцарським ножем, але мережі L2 починають відрізнятися за архітектурою. Вони дублюють функціональність абстрактної обчислювальної машини Ethereum, але виконують її з меншими витратами газу або в межах свого конкретного сегменту. Деякі вже думають про налаштування та зроблення свого L2 шару більш ефективним, зосереджуючись на конкретних функціональних можливостях. Таким чином, на мою думку, ми спостерігаємо за появою гетерогенності в світовому комп'ютері, який мав бути однорідним. Також важливо не забувати, що децентралізовані додатки (dApps) все ще існують в межах основного блокчейну, в межах того ж самого блокчейну, який розпочався у 2015 році. Це означає, що під час злиття, під час переходу до нового архітектурного стану, не було жодного видалення, жодного стирання попередньої історії. Усі децентралізовані додатки та смарт-контракти, що лежать в основі цих додатків, продовжують існувати, і вони продовжують існувати й сьогодні, і, можливо, завтра. Це питання, яке ми розглянемо на прикладі Polkadot, але все ще є відчуття, що бу��е можливо поселити децентралізований додаток в Ланцюгу Маяка - dApps.

На завершення, уявімо інженерну реалізацію сучасного Ethereum як світового комп'ютера. У нас є кожен мережевий вузол, що складається з двох частин. Перший шар відповідає за Ethereum Virtual Machine (EVM), фактичну функціональність віртуальної машини або машини з повним набором команд, якщо ми говоримо в теоретичних термінах. Можливо, ми побачимо появу альтернатив віртуальній машині, розробленій у 2015 році. Ці альтернативи, ймовірно, перевершать її за можливостями більш абстрактного програмування, ніж написання смарт-контрактів на Solidity. Тим часом смарт-контракти на Solidity продовжують відчувати себе комфортно. Якщо ви хочете написати функціональність для основного ланцюга Ethereum, не створюю��и будь-якої інфраструктури поверх Ethereum, не перенаправляючи жодних обчислень, щоб зробити їх дешевшими, то децентралізовані додатки, які ви можете написати як смарт-контракти, все ще можуть бути розміщені в основному блокчейні Ethereum. У той же час, з'явилася функціональність Ланцюгу Маяка, розділяючи логіку консенсусу між валідаторами від основного протоколу обчислювальної машини. Це дозволяє додаткову гнучкість у тому, як повинен працювати консенсус і як його слід подальше модифікувати, не впливаючи на саму віртуальну машину. Приклад Шанхаю та Defcon 2, де невелика помилка опкоду призвела до вимкнення частини інфраструктури, натякає на те, що було б добре мати такі складні функціональності розділені на дві частини.

Що цікавого в Ланцюзі Маяка? Це більш складний, комплексний алгоритм для досягнення синхронізації мережі та фіналізації з введенням концепцій, таких як "епоха", та наявність привида, що живе в мережі.

Нарешті, важливо зараз врахувати, що Ethereum фактично кінчає з однорідністю, з ідеєю роботи ста сотень ідентичних блокчейнів з однією віртуальною машиною, де смарт-контракти, написані на Solidity, можуть розміщуватися. Замість цього різні проекти пропонують свої власні архітектури або ту ж саму віртуальну машину, взяту за межі основного блокчейну. Або вони намагаються побудувати свою більш конкретну програму, яка, на рівні основного ланцюга Ланцюгу Маяка, є смарт-контрактом, написаним на Solidity. Це поточне представлення Ethereum, яке не стало Ethereum 2.0. Воно залишається тим самим Ethereum - проектом, який колись почався з доказу роботи + машини з повним набором команд, перетворюючись у цю архітектуру.

Зараз давайте розглянемо, як Polkadot виник і розвивався протягом останніх 5 років. Polkadot з'явився через п'ять років після Ethereum, народився з команди, яка розробила одного з найкращих клієнтів для Ethereum - Parity. Багато хто може пам'ятати їх веб-клієнт, який, порівняно з Geth та іншими реалізаціями, був, мабуть, набагато приємніше працювати, принаймні з особистого досвіду та досвіду колег.

По-друге, на мою думку, Polkadot був продовженням ідей, які Гевін Вуд хотів включити в розробку Ethereum. Отже, можна сказати, що Ethereum в якийсь момент розділився на дві концепції.
Що ми мали на момент запуску Polkadot? Естафетний ланцюжок було запущено. Цікаво, правда? Ланцюг маяків і ланцюг ретрансляції. Що зображала естафетна ланцюжок? Спочатку не було можливості розмістити там децентралізований додаток, написати для нього смарт-контракт або завантажити свій код ні в WASM, ні в Solidity. Нічого з цього не було доступно під час першого блоку чи перших кількох днів існування ланцюга ретрансляції Polkadot. Не було можливості додати час виконання, про який ми незабаром поговоримо, і це не ґрунтувалося на доказі участі; натомість він використовував підтвердження повноважень. Це дозволило певним вузлам, запущеним розробниками Polkadot, вижити в перші місяці або тижні, поки на ланцюжок могли бути запущені атаки або якщо він поводився некоректно. Однак це було швидко змінено, і ланцюг ретрансляції перейшов на підтвердження частки.

В кінці кінців, після кількох місяців існування реле-ланцюга без будь-якої функціональності децентралізованих додатків, без можливості підключення вашого паралельного ланцюга або мережі L2, без можливостей користувача, мережа перейшла від стану авторитету до доказу ставлення. Це дало розробникам можливість заванта��увати свої часи виконання.

На цьому етапі також цікаво обговорити відмінності між сучасним Ethereum та тим, як структурований центральний елемент Polkadot. З точки зору серця, про яке ми вже говорили, картинка буде абсолютно такою ж не тільки для Ethereum та Polkadot, але й для будь-якого проекту, який хоче бути представлений як абстрактна обчислювальна машина. Однак з інженерної та архітектурної точки зору цікаво спостерігати Beacon Chain & Relay Chain. Тут ми маємо віртуальну машину, яка успадкована з 2015 року, але пропонуються альтернативи. У реле-ланцюзі є можливість завантажити свій час виконання. Час виконання, фактично, ваша віртуальна машина. Наприклад, деякі паралельні ланцюги повністю емулюють Ethereum Virtual Machine. Це написано як час виконання, що означає, що ви ф��ктично можете завантажити аналог Ethereum Virtual Machine на рівень паралельного ланцюга в Polkadot або написати більш конкретну логіку, яка працює з чотирма або п'ятьма функціями. Нагадайте частину першу про ідеї - ви можете написати свій швейцарський нож, але це не потребуватиме створення всієї інфраструктури. Ви можете реалізувати певну функціональність з певними функціями на рівні часу виконання, помістити її в реле-ланцюг Polkadot, і незмінність цього часу виконання буде забезпечена валідаторами Polkadot.

Що відбудеться далі? Протягом близько року навколо ретрансляційного ланцюжка починає формуватися шар парачейнів. З точки зору реалізації Ethereum, можна сказати, що мережі L2 досить схожі на парачейни. Однак є одна цікава перехресна відмінність між мережами, яку я вважаю захоплюючою в Polkadot, і я намагаюся краще зрозуміти, як вона розвиватиметься - а саме, другий шар перевірки та перевірки доступності даних. Через кілька років Polkadot набуває такої форми. Це не просто ретрансляційний ланцюжок, де валідатори доказу участі захищають робочий час майбутніх парачейнів; додатковий і важливий шар перевірки даних та перевірки доступності виникає з парачейнів.

Подивіться на цю діаграму, спробуйте помітити аналогії, які виникають, і відмінності в деталях реалізації інженерії. Так що це представляє, і як ця схема порівнюється з Ethereum? У нас є проект L2, у цьому випадку з Polkadot, це парачейн. Парачейн також генерує інформаційні блоки, які потім йдуть на реле-ланцюг для об'єднання і випуску блоку реле-ланцюгу як суми всіх заголовків, заголовків і ще багато чого. Парачейн збирає транзакції в блок, використовуючи колатори, які не беруть участі в підтвердженні. Вони не ставлять нічого на реле-ланцюг; вони лише використовують рантайм, який знаходиться в реле-ланцюгу. Вони отримують його, застосовують до транзакцій, виконують необхідні переходи стану, формують ��лок і, що найважливіше, надають доказ про валідність - печатку, що містить криптографічні докази того, що колатор правильно зібрав блок. Ця інформація йде до зовнішнього кільця валідації реле-ланцюгу. У цьому кільці є внутрішні валідатори Polkadot - колатори парачейну. Знову ж таки, вони не ставлять нічого безпосередньо з точки зору реле-ланцюгу. Імплементації парачейнів іноді вводять свій консенсус серед колаторів, а деякі - ні. Наприклад, у Robonomics, реалізуючи парачейн, ми вважаємо цей парадигму більш цікавою, менш обтяжливою, і вона робить мережу простішою, залишаючись при цьому функціонально значущою. Будь-який колатор, не досягаючи консенсусу з ким-небудь - підтверджений нами - може запропонувати блок і деякі докази зовнішньому шару. Саме тому блоки пропонуються, пропонуються докази валідності зібраного блоку, і є зовнішнє кільце. Нам не потрібен жоден консенсус від валідаторів парачейну. Будь-хто може згенерувати блок і відправити його, і якщо цей вузол колатора надсилає невірну інформацію валідаторам парачейну на зовнішньому кільці, валідатор на цьому рівні відхилить його. Він не пройде в центральну частину. Але скажімо, що блок був наданий правильно колатором. Наші транзакції потрапили; колатор їх обчислив, застосувавши рантайм, збережений в реле-ланцюгу, виконав всі переходи стану, зібрав деякий доказ валідності - валідність зібраного блоку - і передав його на зовнішнє кільце ��еле-ланцюгу. Тут, кожна епоха, яка також є частиною фіналізації, кожна епоха має валідаторів з реле-ланцюгу, які розходяться в парачейни. Деякі з них залишаються в центрі, а інші йдуть в парачейни. Їх кількість коливається від 16 до 64 валідаторів, і ця цифра, я вважаю, зміниться в специфікації - десь більше, десь менше. Однак валідатори парачейну повторно перевіряють інформацію з однієї вибраної групи валідаторів про все, що надходить від колатора, що ця робота була виконана відповідно до рантайму, і що доказ валідності дійсно є валідним. Вибрані сегменти валідаторів реле-ланцюгу, які вже мають щось стейковане, відповідають, а точніше, щебечуть між собою. Вони відповідають вибраному головному виробнику блоків парачейну, так би мовити, кажуч��:  "Так, ми погоджуємося. Проблем немає. Ви можете пронести це через увесь зовнішній кільцевий шар всередині."

І отже, майже вся інформація, що формується на колаторах парачейнів, з верифікацією на зовнішньому кільці, потрапляє внутрішнє. Нижня частина, не те, що вона фізично знаходиться внизу, все ще складає зовнішнє кільце - доступність даних. Дані починають перевірятися на цьому етапі, що означає, що на зовнішньому кільці перевіряється не лише правильність збирання блоків, але й починається процес підготовки до розподілу в мережі Polkadot, забезпечуючи, що інформація блоку не буде втрачена в майбутньому. Ось тут, саме те, про що я згадував у другій частині про шматки, як CD RW. На цьому етапі підготовки блоку для передачі на внутрішнє кільце формується шар доступності даних як сервіс, що в даний час тако�� намагаються зробити деякі проекти в Ethereum. Деякі проекти додають додаткову зайву інформацію безпосередньо в смарт-контракти, необхідну для перевірки того, що відбувається на рівні L2 і, за необхідності, зменшення або покарання тих, хто зробив це неправильно. Неможливо подолати зовнішнє кільце без розподілу інформації блоку і без повторної перевірки десятків вузлів з вкладами, зробленими на припущенні, що рантайм повинен працювати правильно.

Отже, інформація, яка пройшла через зовнішнє кільце, вже досить надійна, можливо так, можна сказати, і на внутрішньому кільці, робота в основному ведеться не з блоками парачейнів, але їх заголовки блоків збираються в один великий заголовок. Тобто з багатьох заголовків формується один заголовок блоку ретрансляційного ланцюжка - механізм зв'язку в Спільній безпеці, як зазначено в Polkadot, який забезпечує безпеку парачейнів. Можна сказати, що парачейни перевірені і досягають стану, коли сервіс існує у розподіленій децентралізованій формі на зовнішньому кільці. На внутрішньому кільці інформація, що потрапила, намагається об'єднатися в один гіперблок, який повинен точно поєднати все разом. Там не відбуваються обчислення; там немає перерахунку абсолютно всього. Збирається остаточний блок, так би мовити, в поточній ітерації світового комп'ютера, щоб поставити крапку на питанні, чи пройшла транзакція в певному парачейні. Нам потрібно зібрати гіперблок, який містить не всю інформацію з парачейнів, але збирає всі заголовки, перевірені на зовн��шньому кільці парачейнів, в один великий блок. І отже, наш світовий комп'ютер в Polkadot працює.

Давайте ще раз поглянемо на ці дві схеми разом: ланцюжок ретрансляції, ланцюжок маяка, рантайм, захищений доказом участі, де хтось ставить свої кошти для підтвердження того, що вони завжди будуть виконувати свою роботу правильно. Є віртуальна машина, де ви також можете ставити свої кошти, і якщо ви виконуєте будь-які обчислення або перехід стану, які не відповідають специфікації Віртуальної машини Ethereum, вас буде покарано.

У Polkadot є додатковий зовнішній шар, який, здається, є однією з основних переваг, такими приємними перевагами інженерної реалізації, які, на мою думку, повинні бути тут присутні. Він повинен з'явитися між мережами L2 та ланцюжком маяка, який існує в Ethereum. До речі, деякі кажуть, що термін "ланцюжок маяка" знову вмирає і неправильно розуміється, але мені дуже подобається використовувати його в аналогії з "ланцюжком ретрансляції", терміном з дорожньої карти Ethereum.

У Polkadot є зовнішній рівень, який дозволяє, точніше, я думаю, що він був винайдений для вирішення багатьох проблем, які виникають, коли у вас є L2 або набір блокчейнів, які потрібно підключити. На цьому рівні реалізовано інженерний механізм розподілу інформації, щоб зробити її доступною в децентралізованій мережі. Запроваджено додаткові алгоритми перевірки валідаторами не лише валідності, а й доступності інформації. Крім того, існує механізм для випадкового призначення частини валідаторів Polkadot конкретним парачейнам кожної епохи. Отже, не ті самі валідатори обслуговують парачейни кожної епохи; вони перемішуються та надсилаються до різних парачейнів кожної епохи. При перенесенні блоку із зовнішнього кільця на внутрішнє валідатори попутно перевіряються і узгоджуються з тими, які призначені парачейну. Зараз цього процесу немає, але я думаю, що колись він з’явиться.
І, мабуть, останнє стосується колаторів, які сьогодні досить цікаво реалізовані в парачейнах. Вони можуть бути консенсусними або існувати без консенсусу, але, по суті, це працює. Що стосується питань в мережах L2 з децентралізованими секвенсорами або як блоки будуть генеруватися і перевірятися перед осіданням у віртуальній машині - це окремі питання для реалізації Ethereum в гетерогенному форматі. На сьогоднішній день це досить добре реалізовано в Polkadot, на мій погляд. Однак це не означає, що Polkadot випереджає всю планету і ніколи не наздожене Ethereum. Хоча саме ця архітектура приваблює мене продовжувати працювати та сподіватися, що Polkadot продовжить добре розвиватися з точки зору технологій, тому що я не бачив нічого подібного у всіх пов’язаних аспектах.

І, можливо, ще одна цікава історія в цій частині лекції: до цього моменту ми мало можемо уявити належні перехресні ланцюжкові повідомлення між L2 мережами в Ethereum. Можливо, я щось пропустив у наукових статтях, але коли у вас немає зовнішнього кільця і питання, такі як колатори, пара-валідатори та служби доступності даних, не вирішені, думати про те, як два L2 шари можуть спілкуватися, важко. Однак у Polkadot це існує. Навіть горизонтально, через реле-ланцюжок, означаючи безпосередньо, можна надіслати транзакцію безпечно з одного параланцюжка в інший, не довіряючи будь-яким мостам між цими двома параланцюжками. Це ще одна важлива функціональність, яка, ймовірно, потрібно буде реалізувати на рівні під��лючення L2 мереж. Розумні контракти в Ethereum добре спілкуються. Ми створили багато ланцюжків зв'язаних розумних контрактів, де один спрацьовує інший. З цим проблем немає. Але коли ми кажемо, що майже всі додатки переходять на рівень L2 в гетерогенній мережі, я чую, що якщо ви живете в певній області, ви не зможете вийти. Це не відбувається на рівні параланцюжків та реалізації в Polkadot. Обидва архітектури варто спостерігати, оскільки, на мою думку, інженерна реалізація йде шляхом становлення глобального комп'ютера. Вони трохи відрізняються, але є багато схожостей. Всюди величезна кількість інженерної роботи. Як ми бачимо, людська цивілізація, у вигляді множини дослідників, інженерів та зростаючих розробників з значними ресурсами для подальшого розвитку, рухається приблизно в одному напрямку від найменшого раннього етапу до, ймовірно, якогось майбутнього створення світового комп'ютера, все на тих самих коліях.