---
title: "الدرس #2، إعداد Raspberry Pi"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: دورة مساعد المنزل
lessonNumber: 2
metaOptions: [تعلم، المنزل الذكي السيادي مع Robonomics و Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## مقدمة

في هذا الدرس، ستقوم بتجهيز Raspberry Pi الخاص بك ليصبح مركزًا للإنترنت الأشياء. ستقوم بتثبيت وتكوين جميع المكونات اللازمة بتسلسل، وهي:

<List>

- توزيعة Ubuntu Linux لـ Raspberry Pi كنظام تشغيل خادم؛
- حزم Home Assistant؛
- حزم IPFS؛
- مكتبة robonomics-interface.

</List>

## تعليمات

<List type="numbers">

<li>

تحضير وتكوين Raspberry Pi

<List>

  <li>

  قم بتنزيل صورة [Ubuntu Server 22.04 LTS بتقنية 64 بت](https://ubuntu.com/download/raspberry-pi) أو أحدث لـ Raspberry Pi.
  </li>

  <li>

  قم بتنزيل وتثبيت أداة لكتابة ملفات الصور تسمى [Raspberry Pi Imager](https://www.raspberrypi.com/software/) على جهاز الكمبيوتر الخاص بك.
  </li>

  <li>

  أدخل بطاقة SD وقم بتشغيل Raspberry Pi Imager. حدد الصورة المطلوبة (التي قمت بتنزيلها للتو) كنظام التشغيل وتأكد من تحديد بطاقة SD الخاصة بك من قائمة السحب والإفلات.

  </li>

  <li>

  افتح الإعدادات وتحقق من الخيار <code>تمكين SSH</code> مع المعلمة <code>استخدام المصادقة ب��لمة المرور</code>.

  \- في <code>تعيين اسم المستخدم وكلمة المرور</code>، أضف اسم المستخدم وكلمة المرور لمستخدم Raspberry Pi الخاص بك.

  \- في <code>تكوين شبكة LAN اللاسلكية</code>، قدم شبكة Wi-Fi الخاصة بك مع كلمة المرور الخاصة بها واختر بلدك من قائمة السحب والإفلات. ثم <code>اكتب</code> الصورة.

  <robo-academy-note type="okay">
  تأكد من إدخال اسم Wi-Fi الفعلي وكلمة مرور Wi-Fi الخاصة بك.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  انتظر حتى ينتهي الكتابة، ثم أدخل بطاقة SD في Raspberry Pi وشغله. يجب أن يتصل بشبكة Wi-Fi الخاصة بك، والأمر سيستغرق بعض الوقت.

  </li>
  
  <li>

  الآن تحتاج إلى العثور على عنوان الجهاز. يمكنك استخدام طرق مختلفة لفحص الشبكة، مثل [تطبيق Fing](https://www.fing.com/products)، الأمر <code>arp -a</code> أو [nmap](https://nmap.org/download.html). سيتم استخدام الأخير في الخطوة التالية.

  قم بتثبيت nmap بأمر

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  ثم ابحث عن عنوانك في شبكتك المحلية. يجب أن يبدو مثل <code>192.168.xxx.xxx</code> أو <code>172.xxx.xxx.xxx.</code> كن حذرًا حيث يمكن لـ nmap العثور على العديد من العناوين في شبكتك المحلية.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  ثم قم بفحص شبكتك كما هو موضح أدناه عن طريق استبدال الأوكتيت الأخير من العنوان بـ <code>0</code>:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  سيكون مخرج الأمر شيئًا مثل هذا:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon noLines>
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:02:24 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:04:45:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-NO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B3:7D:9E:94:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
</LessonCodeWrapper>

  في هذا المثال العنوان هو <code>192.168.43.56.</code>

  </li>

  <li>

  قم بالاتصال بـ Raspberry Pi عبر SSH باستخدام عنوان IP الذي تم العثور عليه. استخدم اسم المستخدم وكلمة المرور التي أنشأتها سابقًا.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  يتم تنفيذ التعليمات الإضافية عبر SSH على Raspberry Pi نفسه.
  
  </li>
</List>
</li>

<li>

تثبيت Home Assistant

<List>
  <li>

  <robo-academy-note type="okay">

قد تكون بعض إصدارات البرامج المعروضة أدناه قديمة. للحصول على أحدث الإصدارات، يمكنك الرجوع إلى [مستودع التثبيت لصورة Robonomics Home Assistant](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage).

  </robo-academy-note>

  ق��ل البدء، قم بتحديث نظام Raspberry Pi وتثبيت الحزم اللازمة. أثناء التثبيت، سترى نافذة تطلب إعادة تشغيل الخدمة. ما عليك سوى اختيار <span class="accent">ok</span> باستخدام زر <code>tab</code> والضغط على enter.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  إنشاء مستخدم <code>homeassistant</code> والدليل لـ Home Assistant Core:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  إنشاء بيئة افتراضية لـ Home Assistant Core والتبديل إليها. يجب أن يتم ذلك كمستخدم <code>homeassistant</code>، لذا بعد تنفيذ الأوامر سيبدو مستخدمك مثل <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  كنتيجة، ستجد اسم البيئة الافتراضية بين القوسين:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  تثبيت الحزم اللازمة من Python:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  ابدأ Home Assistant Core لأول مرة. سيتم إكمال التثبيت عن طريق إنشاء دليل تكوين <code class="nowb">.homeassistant</code> تلقائيًا في الدليل <code>/home/homeassistant</code>، وتثبيت أي تبعيات أساسية:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  أثناء تقدم الإعداد الأولي، تحقق من تثبيتك عبر واجهة الويب على <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. في هذا المثال: <code>http://192.168.43.56:8123</code>. يمكنك فتح واجهة مستخدم عبر الويب من أي كمبيوتر متصل بشبكتك المحلية.

  انتظر حتى تحصل على نافذة الترحيب مع إنشاء تسجيل الدخول / كلمة المرور ثم قم بإيقاف Home Assistant باستخدام <code>Ctrl+C</code>.
  </li>
</List>
</li>

<li>

تثبيت IPFS

<List>

  <li>

  لتثبيت IPFS يمكنك استخدام سكريبتنا لتنزيل IPFS وإنشاء خدمة systemd معه. أولاً، اخرج من البيئة الافتراضية لـ Home Assistant:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  ثم قم بتنفيذ:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

خدمات Systemd

<List>

<li>

تعتبر خدمة systemd مفيدة لتأمين تشغيل Home Assistant تلقائيًا. قم بإنشاء خدمة جديدة لـ Home Assistant:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

الصق ما يلي

<LessonCodeWrapper language="bash">
[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure
User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/srv/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>

</li>

<li>

قم بتمكين وبدء الخدمة:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl enable home-assistant@homeassistant.service
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl start home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

<li>

دمج Robonomics

<List>

<li>

قم بتسجيل الدخول بمستخدم <code>homeassistant</code> على Raspberry Pi الخاص بك:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

قم بتنشيط البيئة الافتراضية وتثبيت الحزم البرمجية اللازمة بالبايثون:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

ثم انتقل إلى الدليل <code>.homeassistant</code>، وأنشئ مجلد <code class="nowb">custom_components</code> وانسخ فيه المستودع مع التكامل:


<LessonCodeWrapper language="bash" noLines>
cd ~/.homeassistant
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
mkdir custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
cd custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
</LessonCodeWrapper>

</li>


<li>

بعد ذلك، اخرج من مستخدم homeassistant وأعد تشغيل الخدمة:

<LessonCodeWrapper language="bash" noLines>
exit
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl restart home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

</List>



