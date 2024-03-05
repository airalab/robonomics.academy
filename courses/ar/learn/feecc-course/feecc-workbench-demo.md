---
title: "عرض توضيحي لـ Feecc"
description: هذه الدورة تتعلق بالتعرف على نظام Feecc وجميع مكوناته.
metaOptions: [تعلم، التعود على Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
في هذا الدرس، ستقوم باختبار الوظائف الأساسية لـ Feecc باستخدام بيئة اختبار افتراضية كمثال، التي تقم بتقليد حالة حقيقية من نظام تتبع الإنتاج.
</RoboAcademyText>

لأغراض العرض التوضيحي، فإنه يفتقر إلى بعض الميزات النموذجية مثل طباعة العلامات أو تسجيل الفيديو، ولكنه يحتوي على المفهوم الرئيسي لمثل هذا النظام.

## المتطلبات الأساسية

لتشغيل العرض التوضيحي، ستحتاج إلى:

- نظام شبيه بـ UNIX (تم اختباره على [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/))
- [Docker](https://docs.docker.com/engine/install/ubuntu/) و [Docker compose](https://docs.docker.com/compose/)
- متصفح ويب (تم اختباره على Google Chrome و Mozilla Firefox)

## التثبيت

قم بتنفيذ الأوامر التالية:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

للتحقق من عمل الحاويات، قم بتشغيل الأمر التالي:

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

يجب أن ترى الناتج التالي:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## بدء العرض التوضيحي

1. اذهب إلى http://localhost:3000/ في متصفحك، يجب أن ترى شاشة ترحيب.

2. في هذه المرحلة، يجب على النظام أن يطلب من الموظف وضع بطاقته RFID على الماسح الضوئي للتفويض. في العرض التوضيحي، يمكنك استخدام `hid-emulator.py` للتفويض. للقيام بذلك، قم بتشغيل حاوية Docker منفصلة:

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

إنه قادر على تقليد وظيفتين: توفير بطاقة RFID ومسح رمز الباركود؛ تحتاج إلى الوظيفة الأولى، أدخل `1`.

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the ماسح RFID.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. سترى الشاشة لاختيار نوع التكوين، اختر `جهاز واحد`.

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. ستظهر الإشعارات في الزاوية السفلية اليسرى تشير إلى بدء العمل على الجهاز الذي تم إنشاء معرف فريد له. سيعرض الإشعار الأزرق أيضًا نشاط الطابعة الافتراضية؛ في الإعداد الفعلي، يتم طباعة رمز الباركود مع معرف الجهاز في هذه اللحظة.

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. انقر على `بدء التكوين` لبدء تسجيل عملية تجميع الجهاز. سيتم طلب منك المرور بجميع خطوات التجميع الضرورية؛ في كل مرة يكمل فيها موظف خطوة، يجب عليهم النقر على زر `التالي`، بعد ذلك سيتم حفظ الفيديو في IPFS. من الممكن أيضًا تعليق التجميع (`إيقاف مؤقت`) للعودة إليه لاحقًا أو لإيقاف العملية تمامًا (`إيقاف`).

6. عند اكتمال جميع مراحل التجميع، يظهر زر `إنهاء`، بعد ذلك يقترح Feecc حفظ شهادة الجهاز. ومع ذلك، قبل القيام بذلك، افتح [عقد Robonomics المحلي](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) في متصفحك، ستحتاج إليه لاحقًا. بعد ذلك، عد إلى Feecc وانقر على `حفظ جواز السفر`.
    
    سترى إشعارات جديدة في زاوية الشاشة: إشعار بأن الشهادة تم تحميلها إلى Robonomics وIPFS، بالإضافة إلى رسالتين زرقاويتين حول طباعة العلامة المائية ورمز الاستجابة السريعة الذي يؤدي إلى الشهادة.

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. تحت قسم `معلومات السلسلة` على شاشة عقد Robonomics المحلي، يجب أن ترى حدثًا جديدًا `datalog.NewRecord` تحت عمود `الأحداث الأخيرة`. إذا قمت بتوسيعه، سيتم عرض معرف IPFS المتوافق مع ملف الشهادة للجهاز في حقل `البايت`.

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

يحتوي رمز الاستجابة السريعة المطبوع على رابط إلى هذا المعرف، مما يسمح بفتح ملف الشهادة في المتصفح. نظرًا لأن عقد IPFS المحلي قد لا يكون لديه تلك القابلية للكشف، يمكنك الوصول إلى الملف محليًا باستخدام `localhost:8080/ipfs/CID.` محتويات الشهادة تبدو مثل:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: 423d3c1b42f6427e80cc881a16e07451
Unit Model Name: Single Device
Total Assembly Time: 0:05:37
Production Stages:
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:38:47
  Finish Time: 26-06-2023 17:40:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:40:30
  Finish Time: 26-06-2023 17:42:06
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:42:16
  Finish Time: 26-06-2023 17:43:00
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Saw Through the Single Device
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:00
  Finish Time: 26-06-2023 17:43:51
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:51
  Finish Time: 26-06-2023 17:44:36
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
</LessonCodeWrapper>

8. دعونا الآن نحاول إنشاء شهادة لتجميع مركب يتكون من عدة أجهزة. في قائمة اختيار النوع، انقر على `جهاز مركب`، ثم `جهاز عينة`. انسخ معرف الوحدة الخاص به (الموجود في حقل رقم التكوين)، حيث ستحتاج إليه لاحقًا. ثم، تابع مع الخطوات القياسية لتجميع الجهاز.

9. بعد التجميع، عد إلى `جهاز مركب` واضغط على `التجميع النهائي` لإنهاء تجميع المركب. سيطلب منك النظام تقديم معرف الوحدة للأجهزة المجمعة، حيث يجب على الموظف مسح رمز الباركود الخاص بهم. لمحاكاة هذه العملية، عد إلى `hid-emulator.py` وحدد الوظيفة `2` لمسح رمز الباركود، وأدخل معرف الوحدة المحفوظ هناك.

10. بعد ذلك، سيطلب النظام المرور بمراحل التجميع المركب الضرورية وإنشاء شهادة له:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: d08101feae7c4efbb5529885c9ad544b
Unit Model Name: Composite Device
Total Assembly Time: 0:00:03
Production Stages:
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:25
  Finish Time: 26-06-2023 18:18:26
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Tape the Sample Device to the base plate
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:26
  Finish Time: 26-06-2023 18:18:27
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:27
  Finish Time: 26-06-2023 18:18:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
Unit Components:
- Unit Unique Code: b165b382c3674127a6aaf5817c5a7040
  Unit Model Name: Sample Device
  Total Assembly Time: 0:00:03
  Production Stages:
  - Name: Prepare Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:45
    Finish Time: 26-06-2023 18:17:46
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Assemble Sample Device
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:46
    Finish Time: 26-06-2023 18:17:47
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Stack Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:47
    Finish Time: 26-06-2023 18:17:48
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
Total Assembly Time (Including Components): 0:00:06
</LessonCodeWrapper>

11. لحذف العرض التوضيحي، أدخل الأمر:

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
في الدرس القادم، سننتقل إلى نشر جميع المكونات الضرورية لنظام Feecc الفعلي.
</RoboAcademyText>