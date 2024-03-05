---
title: "تجميع لوحة منزل ذكي"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: ستتعلم كيفية تجميع لوحة منزل ذكي!
metaOptions: [تعلم]
defaultName: مقدمةduction to open source solution for private smart homes
---

<LessonImages imageClasses="mb" src="smart-home-intro/spring-school-2023-smart-stand-intro.gif" />

## لوحة منزل ذكي 

هذه اللوحة مصممة للاستخدام كجهاز تحكم مركزي مع أكثر الأفران والبيانات المستخدمة عرضًا عليه. كما يمكن توصيل جهاز الاتصال الداخلي واستخدامه كشاشة داخلية. في الأساس، إنه مجرد جهاز لوحي يعمل بنظام Android في حالتنا. كل ما عليك فعله هو توفير الطاقة. نعتقد أن يجب تثبيت هذه اللوحة حيث تضع شاشة داخلية

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcbdAJqbwHAQ3NeyWQUwSoS4drDexa3AEs7HXuM1BrUT1', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />


## مفتاح الضوء

تبدو مفاتيح الضوء الذكية أكثر أو أقل مثل العادية، باستثناء استخدام أزرار الضغط بدلاً من المفاتيح. يعود زر الضغط إلى موضعه بعد الضغط. لا يوجد فرق في الاتصال بين المفتاح العادي والذكي: قم بتوصيل السلك الأرضي بـ N، والسلك الكهربائي بـ L، وخط الإضاءة بـ L1. بعد تجميع المفتاح لإقرانه عبر ZigBee، اضغط على الزر لمدة لا تقل عن 5 ثوانٍ.

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/Qmb138DiQWWBgowMj2fC9kmiGYh9WEeytteSkqumWCv2LB', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-2.png" />

في حالة المفتاح ذو الزرين (أو أكثر)، الفرق الوحيد هو السطر الثاني (الثالث، ... ) من الأضواء. 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZiStYZG4rmyNPXXmCXsVPm7witPpnNJMBzD8GtxedgPo', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-3.png" />

## لمبة ذكية 

المصابيح الذكية ربما تكون أسهل طريقة لتجربة شيء ذكي، لا تحتاج حتى إلى أن تكون كهربائيًا. يمكن التحكم فيها عن بعد ويمكن تغيير سطوعها أو لونها. يمكنك تثبيتها مع مفاتيح ذكية أو بشكل منفصل. باستخدام مثل هذه الأجهزة يمكن فتح صفحة كاملة من التلقائيات اعتمادًا على مزاجك أو الظروف الخارجية! المصابيح الجديدة جاهزة للاتصال عبر ZigBee. في حالة عدم العثور على واحدة، قم بتشغيلها وإيقافها 5 مرات


<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbiMHLJqnDpr1Whzvo6Y7zE33cQPuTs7furbt3JW2uiek', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-4.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmTzK4dY168HVgLvVBsRxR4M4vda55XC7pFhpW5kRexujQ', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-5.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZFpvVUavKc1Za9SeXqikrfySsfFHuVrkdzgbVB8um7T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-6.png" />

## مقبس ذكي 

هناك عدد من الأجهزة 'غير الذكية' التي عادة ما نحتاج إلى تشغيلها وإيقافها في بعض الأحيان. إذا قمنا بتشغيل هذا الجهاز عبر المقبس الذكي، فيمكننا تشغيله/إيقاف تشغيله وفقًا لاحتياجاتنا أو جدولنا الزمني أو ظروفنا. كما يمكن لهذه المقابس مراقبة استهلاك الطاقة حتى يكون لدينا بيانات حول مقدار استهلاك هذا الجهاز. الاتصال سهل للغاية، لإقران زر الضغط على المقبس الذكي لمدة 5 ثوانٍ

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRtmKXSv7csHLbKVuZkoA5Eb2zyTkEAbUxLYT6Qt1yxZH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-7.png" />

## مفتاح الغلاية 

السبب وجود مفتاح الغلاية كجهاز مخصص هو أنه يمكنه تحمل المزيد من الحمل. عادةً ما تستهلك الغلايات 3 كيلوواط أو أكثر، لذلك الأجهزة العادية (حتى الذكية) ليست مناسبة في هذا الوضع. تم تصميم مفتاح الغلاية للعمل تحت هذه الظروف. الاتصالات والزوجية تقريبًا هي نفسها مثل مفتاح الضوء

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZyRtXXRYCrAQe6s6ZFJLXtUrH7SZHJC1Bt61kTrRX54', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-8.png" />

## واي فاي / زيغبي الترموستات

يبدو وكأنه ترموستات عادي ولكنه يأتي بالقدرة على التحكم فيه لاسلكيًا. هناك خيارات: توصيل نظام التدفئة مباشرة بالترموستات أو فصلهما. في الحالة الأخيرة سيخبرنا الترموستات بالوضع (تسخين، تبريد، مروحة، إلخ) ودرجة الحرارة

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRjxo9EGUvQiMm84xvXCL6LfrQJYza71vmFsa9Zpy7qmz', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-9.png" />

## مفتاح الستائر

مفتاح مخصص آخر، هذه المرة للستائر. من الناحية التقنية ليس من الضروري استخدام هذا المفتاح فقط، يمكننا استخدام أي مفتاح ثلاثي الأزرار وتوصيله بمحرك الستائر، ولكن هذا يأتي مع رموز خاصة. لإقران المفتاح اضغط على الزر الأوسط لفترة طويلة

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRpEpZbyNkzby8Sk22Ymz59DbAcnty1B1osWc2kZr5FZ7', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-10.png" />

## متحكم صمام ذكي

اختر متحكمًا وفقًا للصمامات التي تمتلكها. السيناريو الأكثر وضوحًا هو دمج هذا المتحكم مع جهاز استشعار تسرب المياه. لإقران الجهاز، اضغط على الزر لمدة 5 ثوانٍ

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcjZcJ6P8Q5yUfSRx8R2mR4A7r2fi5bLs5uoUr3EAXLZs', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-11.png" />

## جهاز استشعار تسرب المياه

جها�� بسيط يرسل إشارة عندما تتصل جهتاه. الماء يوصل الكهرباء وعندما يكون هناك ماء تحت الجهاز يتم توصيل جهاته. يعمل الجهاز بالبطارية وعادة ما يدوم لمدة 1-2 سنة. لإقران الجهاز عبر زيغبي، اضغط على زره لفترة 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbgetJK1E8qQMcnBVREutpy8tKfbesqaxXiebjzpoyrdV', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-12.png" />

## متحكم الأشعة تحت الحمراء

فكر فيه كمتحكم التلفاز الخاص بك... ولكنه ذكي! وليس محدودًا بالعمل مع التلفزيونات فقط. إذا كان لديك مكيف هواء يحتوي على متحكم عن بعد، يمكن استبداله بمتحكم ذكي. لإقرانه، اضغط على زر الإعادة على الجزء الخلفي من المتحكم لفترة. هناك العديد من المكتبات التي تحتوي على أوامر جاهزة للاستخدام، على سبيل المثال [https://github.com/smartHomeHub/SmartIR](https://github.com/smartHomeHub/SmartIR). كل ما عليك فعله هو العثور على نموذج تلفزيونك أو مكيف الهواء

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmVjj92fMLbA6QJ5QhnmiqBT1huD5b7xyfi3VadHFDYwtm', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-13.png" />

## جهاز استشعار الأبواب / النوافذ

جهاز استشعار آخر يعمل بالبطارية ولكن يساعد في بناء نظام أمان بسيط أو ربطه بالأضواء والأجهزة الأخرى. لإقرانه عبر زيغبي، ضع إبرة في الفتحة واضغط عليها لفترة

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZyb66dKEqk9iCVKhaBk5ZKASi7dXdFSg2CBXY1fwuu5J', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-14.png" />

## جهاز استشعار الحركة
نفس جهاز استشعار الأبواب / النوافذ، يمكن استخدامه في سيناريوهات مختلفة. الأكثر وضوحًا هي التحكم في الأضواء أو اكتشاف الحركات عندما تكون بعيدًا

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmUA7TLg12pkhkbdGH6fwNDasU1kiyLHBJSutA2YG71Mka', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-15.png" />


## جهاز استشعار درجة الحرارة والرطوبة

من الجيد معرفة الظروف التي تعيش فيها، أليس كذلك؟ سيوفر لك هذا الجهاز قياسات درجة الحرارة والرطوبة. بعد ذلك يمكنك استخدام هذه البيانات لتشغيل / إيقاف تشغيل مكيف الهواء الخاص بك أو أنظمة التدفئة / التبريد الأخرى. لإقران الجهاز هناك زر على الجزء الخلفي 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmayYFowfJVwQBVxPUSvi5inedqKzhyRZXp8fBUUayJnqH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-16.png" />

## كاميرا أمان

في النهاية من الجيد أن تلقي نظرة على ما يحدث في منزلك. سيكون الأمر مفيدًا لربط جهاز استشعار الحركة بالكاميرا حتى تحصل على فيديو لمدة 10 ثوانٍ عند اكتشاف الحركة 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmX8nnDCgTx2kuwfAGv6B4orkEg4w6phtJtxSp44HfdD9T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-17.png"  />


## لوحة ذكية 
انظر إلى النتائج [https://www.youtube.com/watch?v=B3er7bwtvkw](https://www.youtube.com/watch?v=B3er7bwtvkw )
والعب به بنفسك [https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20](https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20)

