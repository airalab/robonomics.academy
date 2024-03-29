---
title: "Письмо: Заключение"
description: Быстрый старт вашей бакалаврской диссертации с помощью инструментов на основе искусственного интеллекта
metaOptions: [Учиться, Быстрый старт вашей бакалаврской диссертации с помощью инструментов на основе искусственного интеллекта]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Мы достигли последнего раздела бакалаврской работы. Пришло время написать Заключение и подвести итоги нашего небольшого исследования по применению инструментов искусственного интеллекта для этой академической задачи. В конце концов, был ли этот опыт успешным? И что все еще отсутствует у современных помощников по искусственному интеллекту?
</RoboAcademyText>

## Завершение работы

В принципе, мы уже знаем, как искусственный интеллект может помочь суммировать материалы, просто сформулировав необходимый запрос. Единственная проблема заключается в том, чтобы подать ему весь исходный текст. Пока не будет должной поддержки для длинных PDF-файлов, мы будем разбивать исходный текст на части, просить сделать краткое изложение для каждой из них, а затем отправлять части вместе:

<RoboAcademyDialog>

Give me a summary for the following text in 500 words. 
</RoboAcademyDialog>

Из любопытства давайте попросим отформатировать полученный текст для использования в LaTeX, просто чтобы увидеть, как помощник по искусственному интеллекту справится с этой задачей:

<RoboAcademyDialog>

Write a Conclusions section from the text below in 1000 words. Be sure to add summary of the thesis's contributions and main findings, implications and significance of the results for the smart home industry and related fields, recommendations for future research and development.

Take the resulting text and design it for LaTeX.
</RoboAcademyDialog>

Результат:

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

Теперь мы можем наконец завершить нашу работу, создав аннотацию обычным способом:

<RoboAcademyDialog>

Make an abstract for the bachelor's thesis based on this text in 100 words.
</RoboAcademyDialog>

## Руководство по заключениям

В принципе, наша задача выполнена. Далее мы можем попробовать обработать текст с помощью различных инструментов, улучшая формулировку или расширяя некоторые абзацы. Вы можете найти полученный PDF-файл по ссылке ниже:

https://cloudflare-ipfs.com/ipfs/Qme6rzPwiDGLLkUmWVLrCqgGMjcbqitYNcndznjNPb21E8

Какие выводы мы можем сделать о применимости инструментов искусственного интеллекта в текущем состоянии для задачи подготовки бакалаврской работы или аналогичных академических материалов? Давайте сначала рассмотрим плюсы:

1. ИИ может справиться с обобщенным формулированием задачи. Формулирование плана, структурирование разделов публикации, предложение направлений работы - все это может серьезно помочь, когда не ясно, с чего начать, или в случае отсутствия идей. В этом смысле помощник по искусственному интеллекту может быть "резервным мозгом", который будет предлагать идеи основному.
2. ИИ хорошо справляется с генерацией общего контента. Для тех, кто может хорошо сформулировать основу текста, но испытывает трудности с "добавлением лишнего" для достижения требуемого объема, это может быть отличной поддержкой.
3. С некоторыми оговорками ИИ может быстро проанализировать текст и предоставить пользователю краткое изложение основных идей. Однако все еще есть некоторые ограничения, так как разработчики помощников по искусственному интеллекту все еще работают над улучшением их способности запоминать контекст.
4. Впечатляет, что ИИ уже может попытаться проанализировать набор данных и написать программный код на основе устных описаний. Однако крайне важно быть чрезвычайно осторожным в отношении результатов.
5. И, конечно, как продвинутый поисковый инструмент, помощники по искусственному интеллекту превосходят обычные поисковые системы.

Однако среди выявленных недостатков:

1. Галлюцинации ИИ часто уничтожают преимущества скорости получения результатов от ИИ, поскольку пользователю приходится тщательно проверять его ответы. Иногда проще и быстрее сделать задачу самому.
2. Трудность в получении более глубокого ответа. Эта "лень" инструментов ИИ заставляет пользователя бороться с все более фантазийными запросами, которые могли бы заставить ИИ лучше выполнять работу. Это приводит к довольно комической ситуации, напоминающей отношения между старшим сотрудником и стажером: в конечном итоге бывает проще для первого сделать работу самому, чем пытаться заставить стажера это сделать. Это снова аннулирует преимущества скорости и удобства.
3. Нестабильность в качестве полученных результатов. ИИ часто предоставляет совершенно разные результаты для одного и того же запроса в разных сессиях, что фактически заставляет пользователя крутить барабан в ожидании выигрыша. Плюс к этому, нельзя быть уверенным, что полученный ответ является лучшим и возможным.
4. Жалоба на разработчиков инструментов ИИ: текущие инструменты имеют ужасный интерфейс, который не позволяет адекватно работать с большими текстами и данными.

<RoboAcademyDialog>
“As a result, it can be said that AI tools can already be a good addition to manual, monotonous work in creating academic materials, but they still have many problems and shortcomings that prevent them from fully replacing human labor. In the future, these problems may be solved, and AI assistants will be able to significantly speed up and improve the process of creating scientific materials.”
</RoboAcademyDialog>

*(Результат выше был сгенерирован Notion AI)*