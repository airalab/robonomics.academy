---
title: "الكتابة: الاستنتاج"
description: ابدأ رسالة البكالوريوس الخاصة بك باستخدام أدوات مدعومة بالذكاء الاصطناعي
metaOptions: [تعلم, ابدأ رسالة البكالوريوس الخاصة بك باستخدام أدوات مدعومة بالذكاء الاصطناعي]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
لقد وصلنا إلى القسم النهائي من رسالة البكالوريوس. حان الوقت لكتابة الاستنتاجات وتلخيص بحثنا الصغير حول تطبيق أدوات الذكاء الاصطناعي لهذه المهمة الأكاديمية. في النهاية، هل كانت هذه التجربة ناجحة؟ وما هي الأشياء التي لا تزال مفقودة في مساعدي الذكاء الاصطناعي الحديثة؟
</RoboAcademyText>

## اختتام الرسالة

بشكل أساسي، نعرف بالفعل كيف يمكن للذكاء الاصطناعي مساعدتنا في تلخيص المواد، فقط من خلال صياغة الطلب الضروري. المشكلة الوحيدة هي تغذيته بالنص الأصلي بأكمله. حتى يتم توفير الدعم الكافي لملفات PDF الطويلة، سنقوم بتقسيم النص الأصلي إلى قطع، نطلب عمل ملخص لكل منها، ثم نرسل القطع معًا:

<RoboAcademyDialog>

Give me a summary for the following text in 500 words. 
</RoboAcademyDialog>

من باب الفضول، دعونا نطلب تنسيق النص الناتج لاستخدامه في LaTeX، فقط لنرى كيف سيتعامل مساعد الذكاء الاصطناعي مع هذه المهمة:

<RoboAcademyDialog>

Write a Conclusions section from the text below in 1000 words. Be sure to add summary of the thesis's contributions and main findings, implications and significance of the results for the smart home industry and related fields, recommendations for future research and development.

Take the resulting text and design it for LaTeX.
</RoboAcademyDialog>

النتيجة:

<LessonCodeWrapper language="uml" noCopyIcon noLines codeClass="big-code">
    \documentclass{article}
    \usepackage{lipsum}
    \begin{document}
    \section*{Conclusion}
    This bachelor's thesis aimed to design a secure and private 
    smart home system using Web3 technologies, specifically leveraging 
    blockchain and decentralized technologies.
    ...
    \end{document}

</LessonCodeWrapper>

الآن يمكننا أخيرًا إكمال رسالتنا من خلال إنشاء ملخص بالطريقة المعتادة:

<RoboAcademyDialog>

Make an abstract for the bachelor's thesis based on this text in 100 words.
</RoboAcademyDialog>

## توجيه الاستنتاجات

في المبدأ، تم إكمال مهمتنا. بعد ذلك، يمكننا محاولة معالجة النص باستخدام أدوات مختلفة، تحسين الصياغة أو توسيع بعض الفقرات. يمكنك العثور على ملف PDF الناتج على الرابط أدناه:

https://cloudflare-ipfs.com/ipfs/Qme6rzPwiDGLLkUmWVLrCqgGMjcbqitYNcndznjNPb21E8

ما هي الاستنتاجات التي يمكننا الوصول إليها حول قابلية استخدام أدوات الذكاء الاصطناعي في الحالة الحالية لإعداد رسالة البكالوريوس أو المواد الأكاديمية المماثلة؟ دعونا نلقي نظرة على الجوانب الإيجابية أولاً:

1. يمكن للذكاء الاصطناعي التعامل مع بيان مهمة عام. صياغة خطة، تنظيم أقسام النشر، اقتراح اتجاهات العمل - كل هذا يمكن أن يساعد بشكل كبير عندما لا يكون من الواضح من أين تبدأ أو في حالة عدم وجود أفكار. في هذا المعنى، يمكن أن يكون مساعد الذكاء الاصطناعي "دماغ احتياطي" سيقدم أفكارًا للدماغ الرئيسي.
2. الذكاء الاصطناعي جيد في توليد المحتوى العام. بالنسبة لأولئك الذين يمكنهم تشكيل النص الأساسي بشكل جيد ولكن يصارعون لإضافة "الزخم" للوصول إلى الحجم المطلوب، يمكن أن يكون هذا دعمًا ممتازًا.
3. ببعض الاحتياطات، يمكن للذكاء الاصطناعي تحليل النص بسرعة وتقديم ملخص للأفكار الرئيسية للمستخدم. ومع ذلك، لا تزال هناك بعض القيود حيث يعمل مطورو مساعدي الذكاء الاصطناعي على تحسين قدرتهم على تذكر السياق.
4. من المثير للإعجاب أن الذكاء الاصطناعي يمكنه بالفعل محاولة تحليل مجموعة بيانات وكتابة كود البرنامج استنادًا إلى الوصف الشفوي. ومع ذلك، من الضروري أن تكون حذرًا للغاية في النتائج.
5. وبالطبع، كأداة بحث متقدمة، تتفوق مساعدي الذكاء الاصطناعي على محركات البحث العادية.

ومع ذلك، من بين العيوب المحددة:

1. تتسبب الهلوسات الاصطناعية في إبطاء فوائد سرعة النتائج التي تم الحصول عليها من الذكاء الاصطناعي حيث يجب على المستخدم التحقق بدقة من إجاباته. أحيانًا يكون من الأسهل والأسرع القيام بالمهمة بنفسك.
2. صعوبة الحصول على إجابة تكون أكثر عمقًا. هذه "الكسل" في أدوات الذكاء الاصطناعي يجعل المستخدم يصارع مع طلبات أكثر تهورًا التي ستجعل الذكاء الاصطناعي يقوم بالمهمة بشكل أفضل. يؤدي ذلك إلى وضع موقف كوميدي يشبه العلاقة ب��ن موظف كبير ومتدرب: في النهاية، من الأسهل على الأولى القيام بالمهمة بنفسها بدلاً من محاولة إجبار المتدرب على القيام بها. يلغي هذا مرة أخرى مزايا السرعة والراحة.
3. عدم استقرار في جودة النتائج المتلقاة. غالبًا ما يقدم الذكاء الاصطناعي نتائج مختلفة تمامًا لنفس الاستعلام في جلسات مختلفة، مما يضطر بشكل أساسي المستخدم إلى تشغيل الآلة القمار في انتظار الفوز. بالإضافة إلى ذلك، لا يمكنك أبدًا أن تكون متأكدًا من أن الاستجابة المتلقاة هي الأفضل والممكنة.
4. شكوى إلى مطوري أدوات الذكاء الاصطناعي: الأدوات الحالية تحتوي على واجهة فظيعة لا تسمح بالعمل الكافي مع النصوص الكبيرة والبيانات.

<RoboAcademyDialog>
“As a result, it can be said that AI tools can already be a good addition to manual, monotonous work in creating academic materials, but they still have many problems and shortcomings that prevent them from fully replacing human labor. In the future, these problems may be solved, and AI assistants will be able to significantly speed up and improve the process of creating scientific materials.”
</RoboAcademyDialog>

*(تم إنشاء النتيجة أعلاه بواسطة Notion AI)*