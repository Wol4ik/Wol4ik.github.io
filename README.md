# Twine SugarCube v2.x русская документация
[ **визуальный редактор игр** ](https://twinery.org) **|** [ **пример игры** ](https://db.crem.xyz/f/uploads/Uh_est_ro.html) **|** [ **complete original documentation** ](http://www.motoslave.net/sugarcube/2/)

Предупреждение: перевод некоторых названий и сокращений может быть неточным или вообще отсутствовать. Однако, понимание технического смысла пунктов документации от этого не пострадает, благодаря практическим примерам кода и пояснениям к ним.
## Требования
Единственным требованием SugarCube является современный веб-браузер, и я имею в виду, что он выпущен в течение последних нескольких лет (вам не нужен абсолютный последний и самый блестящий).

**Предостережение для пользователей Internet Explorer**: SugarCube поддерживает только IE ≥9. Таким образом, пользователи Windows XP (которые ограничены IE8) не смогут воспроизводить / просматривать истории, созданные с помощью SugarCube, с их версией IE. Им следует либо использовать другой браузер, либо обновить версию  Windows (Microsoft завершила публичную поддержку Windows XP в апреле 2014 года).
## Категории
* [Специальные имена / Special Names] [#enola]
* Форматирование текста / Markup
* Макросы / Macros
* Код / TwineScript
* Функции / Functions
* Методы об'ектов / Object Methods
* События и задачи / Passage Events & Task Objects
* Объект конфигурации / Config Object
* Настройка визуального оформления / CSS
* Применение HTML кода / HTML

----

[#enola]:
# [Special Names](http://www.motoslave.net/sugarcube/2/docs/special-names.html) (Специальные названия, наименования) перевод подготовила @Enola

Этот раздел посвящён специальным названиям параграфов, тегов и переменных, которые имеют особое значения для SugarCube.

This documentation is a reference for the passage, tag, &amp; variable names that have special meaning to SugarCube.

**Примечания**

1. Все специальные наименования, перечисленные здесь, чувствительны к регистру, поэтому их нужно писать _в точности_ как они показаны.
2. _Никогда_ не смешивайте специальные параграфы со специальными тегами. Поступая таким образом, вы, вероятно, сломаете что-либо, и потом будет сложно и трудно разобраться в причинах багов.

**Notes**

1. All special names listed herein are case sensitive, so must be spelled _exactly_ as shown.
2. _Never_ combine special passages with special tags. By doing so, you will probably break things in subtle and hard to detect ways.

**Содержание**

Passage Names (Специальные параграфы)

PassageDone, PassageFooter, PassageHeader, PassageReady, Start, StoryAuthor, StoryBanner, StoryCaption, StoryInit, StoryInterface, StoryMenu, StorySettings, StoryShare, StorySubtitle, StoryTitle.

Tag Names (Специальные теги)

bookmark, nobr, script, stylesheet, widget.

Variable Names (Специальные переменные)

$, $args, Config, Dialog, Engine, jQuery, l10nStrings, LoadScreen, Macro, Passage, postdisplay, postrender, predisplay, prehistory, prerender, Save, Setting, settings, setup, State, Story, UI, UIBar.

## Passage Names (Специальные параграфы)

PassageDone
Используется для задач после отображения параграфа, например, повторные динамические изменения (происходящие после рендеринга и отображения каждого параграфа). Примерно равнозначен событию :passagedisplay.

Пример использования:

Used for post-passage-display tasks, like redoing dynamic changes (happens after the rendering and display of each passage). Roughly equivalent to the  [:passagedisplay](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#passage-events-passagedisplay).

PassageFooter
Прилагается после каждого обработанного параграфа. Примерно равнозначен событию :passagerender.

Appended to each rendered passage. Roughly equivalent to the  [:passagerender](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#passage-events-passagerender) [ ](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#passage-events-passagerender) [event](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#passage-events-passagerender).

PassageHeader
Добавляется перед каждым параграфом. Примерно равнозначен событию :passagestart.

Prepended to each rendered passage. Roughly equivalent to the  [:passagestart](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#passage-events-passagestart) [ ](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#passage-events-passagestart) [event](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#passage-events-passagestart).

PassageReady
Используется для задач перед отображением параграфа, например, повторные динамические изменения (происходящие после рендеринга и отображения каждого параграфа).Примерно равнозначен событию :passagestart.

Used for pre-passage-display tasks, like redoing dynamic changes (happens before the rendering of each passage). Roughly equivalent to the  [:passagestart](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#passage-events-passagestart) [ ](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#passage-events-passagestart) [event](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#passage-events-passagestart).

| Поведение | PassageDone | PassageReady | PassageFooter | PassageHeader |
| --- | --- | --- | --- | --- |
| Текст специальных параграфов | Не отобразится в обычных параграфах. | Не отобразится в обычных параграфах. | Отобразится в обычных параграфах после их текста. | Отобразится в обычных параграфах перед их текстом. |
| Код и макросы специальных параграфов | Выполняются после отображения обычных параграфов и выполнения их кода и макросов. Макросы и код, выводящий значения (типа &lt;&lt;print&gt;&gt;) не отображаются в обычном параграфе. | Выполняются перед отображением обычных параграфов и до выполнения их кода и макросов.Макросы и код, выводящий значения (типа &lt;&lt;print&gt;&gt;) не отображаются в обычном параграфе. | Выполняются после отображения обычных параграфов и выполнения их кода и макросов.Макросы и код, выводящий значения(типа &lt;&lt;print&gt;&gt;) отображается после текста обычного параграфа. | Выполняются перед отображением обычных параграфов и до выполнения их кода и макросов.Макросы и код, выводящий значения(типа &lt;&lt;print&gt;&gt;) отображается перед текстом обычного параграфа. |
| Похожее событие | :passagedisplay  | :passagestart  | :passagerender  | :passagestart  |

Start
**Twine 1:** Необходим. Начальный параграф, первый отображаемый параграф истории. Настраиваемый, см. [Config.passages.start](http://www.motoslave.net/sugarcube/2/docs/config-object.html#config-passages-start)

**Twine 2:**  Не является специальным параграфом. Любой параграф может быть выбран в качестве стартового, путём отметки (иконка ракеты) в контекстном меню параграфа

**Twine 1:**  _Required._ The starting passage, the first passage displayed. Configurable, see  [Config.passages.start](http://www.motoslave.net/sugarcube/2/docs/config-object.html#config-passages-start) for more information.

**Twine 2:**  _Not special._ Any passage may be chosen as the starting passage by marking it via the  (rocket ship icon) passage context-menu item.

StoryAuthor
Устанавливает авторскую подпись на панели пользовательского интерфейса (ID элемента: story-author)

Sets the authorial byline in the UI bar (element ID: story-author).

StoryBanner
Устанавливает баннер истории на панели пользовательского интерфейса (ID элемента: story-banner)

Sets the story&#39;s banner in the UI bar (element ID: story-banner).

StoryCaption
Устанавливает заглавие истории на панели пользовательского интерфейса (ID элемента: (ID элемента: story-caption).

Sets the story&#39;s caption in the UI bar (element ID: story-caption).

StoryInit
Используются для задач перед запуском инициализации истории, например, инициализации переменных (происходящей в начале инициализации истории)

Used for pre-story-start initialization tasks, like variable initialization (happens at the beginning of story initialization).

StoryInterface
Добавлено в: v2.18.0
Используется, чтобы заменить панель пользовательского интерфейса SugarCube по умолчанию. Его содержимое обрабатывается как обычная HTML-разметка и должно содержать элемент с ID passages, который будет главным пространством отображаемой зоны и чьё содержимое будет заменяться каждый ход. Например:

&lt;div id=&quot;passages&quot;&gt;&lt;/div&gt;

Used to replace SugarCube&#39;s default UI. Its contents are processed as regular HTML markup and it must contain an element with the ID passages, which will be the main passage display area and whose contents will be replaced each turn. For example:

&lt;div id=&quot;passages&quot;&gt;&lt;/div&gt;

StoryMenu
Устанавливает пункты меню истории на панели пользовательского интерфейса. (ID элемента: menu-story). **Примечание:** меню истории отображает только ссылки. Пока оно передаёт содержимое как любой другой параграф, вместо отображения выводимого как есть, оно пропускается через вывод и строит своё меню из сгенерированных ссылок, содержащихся в нём.

Sets the story&#39;s menu items in the UI bar (element ID: menu-story).

**NOTE:**  The story menu only displays links. While it renders content just as any other passage does, instead of displaying the rendered output as-is, it sifts through the output and builds its menu from the generated links contained therein.

StorySettings
Не используется. [Configuration Object](http://www.motoslave.net/sugarcube/2/docs/config-object.html) выполняет те же базовые функции.
_Unused._ The  [Configuration Object](http://www.motoslave.net/sugarcube/2/docs/config-object.html) serves the same basic purpose.

StoryShare
Используются для распространения контента через меню Поделиться (Share). Понимает только ссылки.
Used to populate the contents of the Share dialog.

StorySubtitle
Устанавливает подзаголовок истории на панели пользовательского интерфейса (ID элемента: story-subtitle).

Sets the story&#39;s subtitle in the UI bar  (element ID: story-subtitle).

StoryTitle
**Twine 1:**  Необходим. Устанавливает заголовок истории на панели пользовательского интерфейса и повсюду. (ID элемента: story-title). Примечание: в заголовке должен быть чистый текст названия проекта и никакой разметки.
**Twine 2:**  Не используется. Заголовок/название истории – это часть проекта истории.
**Twine 1:**  _Required._ Sets the story&#39;s title in the UI bar and elsewhere (element ID: story-title).
**NOTE:**  The story title should the project&#39;s plain text title and contain no markup.
**Twine 2:**  _Unused._ The story&#39;s title/name is part of the story project.
Tag Names (Специальные теги)

bookmark
Отмечает параграф для меню «Перейти На» (_Jump To_ ) после того, как этот параграф посещён.
Registers the passage into the _Jump To_ menu.

nobr
Заменяет все переводы строк в параграфе (через Enter) на единичные пробелы. Равнозначен макросу   [&lt;&lt;nobr&gt;&gt;](http://www.motoslave.net/sugarcube/2/docs/macros.html#macros-nobr), применённому на весь параграф. См.  [Config.passages.nobr](http://www.motoslave.net/sugarcube/2/docs/config-object.html#config-passages-nobr), чтобы применить это свойство ко всем отображаемым параграфам истории.

Causes leading/trailing newlines to be removed and all remaining sequences of newlines to be replaced with single spaces before the passage is rendered. Equivalent to a full-passage  [&lt;&lt;nobr&gt;&gt;](http://www.motoslave.net/sugarcube/2/docs/macros.html#macros-nobr). See  [Config.passages.nobr](http://www.motoslave.net/sugarcube/2/docs/config-object.html#config-passages-nobr) for a way to apply the same processing to all rendering passages.

script
**Twine 1:**   Отмечает параграф как код JavaScript, который выполняется при запуске.
**Twine 2:** Не специальный. Используйте для скриптов пункт «Редактировать _JavaScript»_ в меню редактора истории.
**Twine 1:**  Registers the passage as JavaScript code, which is executed during startup.
**Twine 2:**  _Not special._ Use the _Edit Story JavaScript_ story editor menu item for scripts.

stylesheet
**Twine 1:**  Отмечает параграф как Каскадную таблицу стилей (CSS), которая загружается при запуске истории. Настоятельно рекомендуется использовать только один параграф таблицы стилей в истории. Дополнительно, смотрите [tagged stylesheet warning](http://www.motoslave.net/sugarcube/2/docs/css.html#tagged-stylesheet-warning).
**Twine 2:**  Не специальный. Используйте для стилей пункт «Редактировать таблицу стилей» в меню редактора истории.
**Twine 1:**  Registers the passage as a CSS stylesheet, which is loaded during startup. It is  **strongly**  recommended that you use only one stylesheet passage. Additionally, see the  [tagged stylesheet warning](http://www.motoslave.net/sugarcube/2/docs/css.html#tagged-stylesheet-warning).
**Twine 2:**  _Not special._ Use the _Edit Story Stylesheet_ story editor menu item for styles.

widget
Отмечает параграф как [&lt;&lt;widget&gt;&gt;](http://www.motoslave.net/sugarcube/2/docs/macros.html#macros-widget) , который загружается во время запуска.

Registers the passage as  [&lt;&lt;widget&gt;&gt;](http://www.motoslave.net/sugarcube/2/docs/macros.html#macros-widget) definitions, which are loaded during startup.

## Variable Names (Специальные переменные)

# $

Псевдоним для jQuery, по умолчанию. Примечание: Не путайте с переменными истории, которые начинаются с $ (например: $переменная).

Alias for jQuery, by default.
**NOTE:**  This should not be confused with  [story variables](http://www.motoslave.net/sugarcube/2/docs/twinescript.html#variables), which start with a $ (e.g. $foo).

# $args

Массив параметров виджета (только внутри виджетов). См. [&lt;&lt;widget&gt;&gt;](http://www.motoslave.net/sugarcube/2/docs/macros.html#macros-widget)  для детальной информации.

Widget arguments array (only inside widgets). See  [&lt;&lt;widget&gt;&gt;](http://www.motoslave.net/sugarcube/2/docs/macros.html#macros-widget) for more information.

# Config

Объект настроек. См. [Configuration Object](http://www.motoslave.net/sugarcube/2/docs/config-object.html)  для детальной информации.

Configuration object. See  [Configuration Object](http://www.motoslave.net/sugarcube/2/docs/config-object.html) for more information.

# Dialog

Диалоговое API. См. [Dialog API](http://www.motoslave.net/sugarcube/2/docs/api-dialog.html) для детальной информации.

Dialog API. See  [Dialog API](http://www.motoslave.net/sugarcube/2/docs/api-dialog.html) for more information.

# Engine

API движка. См. [Engine API](http://www.motoslave.net/sugarcube/2/docs/api-engine.html) для детальной информации.

Engine API. See  [Engine API](http://www.motoslave.net/sugarcube/2/docs/api-engine.html) for more information.

# jQuery

Функция библиотеки jQuery

jQuery library function.

# l10nStrings

Добавлено в: v2.10.0

Строки локализации объекта. См. [Localization](http://www.motoslave.net/sugarcube/2/docs/localization.html) для детальной информации.

Strings localization object. See  [Localization](http://www.motoslave.net/sugarcube/2/docs/localization.html) for more information.

# LoadScreen

Добавлено в: v2.15.0

API экрана загрузки. См. [LoadScreen API](http://www.motoslave.net/sugarcube/2/docs/api-loadscreen.html)  для детальной информации.

LoadScreen API. See  [LoadScreen API](http://www.motoslave.net/sugarcube/2/docs/api-loadscreen.html) for more information.

# Macro

API макросов. См. [Macro API](http://www.motoslave.net/sugarcube/2/docs/api-macro.html) для детальной информации.

Macro API. See  [Macro API](http://www.motoslave.net/sugarcube/2/docs/api-macro.html) for more information.

# Passage

API параграфа. См. [Passage API](http://www.motoslave.net/sugarcube/2/docs/api-passage.html) для детальной информации.

Passage API. See  [Passage API](http://www.motoslave.net/sugarcube/2/docs/api-passage.html) for more information.

# postdisplay

Объект обратного вызова задачи после отображения параграфа, устанавливаемый автором/разработчиком. См. [Task Objects](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#task-objects)для детальной информации.

Post-display task callback object, set up by the author/developer. See  [Task Objects](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#task-objects) for more information.

# postrender

Объект обратного вызова задачи после отрисовки параграфа, устанавливаемый автором/разработчиком.См. [Task Objects](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#task-objects)для детальной информации.

Post-render task callback object, set up by the author/developer. See  [Task Objects](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#task-objects) for more information.

# predisplay

См. [Task Objects](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#task-objects)для детальной информации.

Pre-display task callback object, set up by the author/developer. See  [Task Objects](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#task-objects) for more information.

# prehistory

Pre-history task callback object, set up by the author/developer. See  [Task Objects](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#task-objects) for more information.

# prerender

Pre-render task callback object, set up by the author/developer. See  [Task Objects](http://www.motoslave.net/sugarcube/2/docs/passage-events-task-objects.html#task-objects) for more information.

# Save

API сохранений. См. [Save API](http://www.motoslave.net/sugarcube/2/docs/api-save.html)  для детальной информации.

Save API. See  [Save API](http://www.motoslave.net/sugarcube/2/docs/api-save.html) for more information.

# Setting

API настройки. См. [Setting API](http://www.motoslave.net/sugarcube/2/docs/api-setting.html)  для детальной информации

Setting API. See  [Setting API](http://www.motoslave.net/sugarcube/2/docs/api-setting.html) for more information.

# settings

Объект настроек игрока, устанавливаемый автором/разработчиком. См. [Setting API](http://www.motoslave.net/sugarcube/2/docs/api-setting.html)  для детальной информации

Player settings object, set up by the author/developer. See  [Setting API](http://www.motoslave.net/sugarcube/2/docs/api-setting.html) for more information.

# setup

Объект, который автор/разработчик может использовать для установки различной статичных данных – то есть, данных, которые не меняется и не должны храниться в переменных истории, которые сделают их частью истории.

Object that authors/developers may use to set up various bits of static data—generally, data that does not change and should not be stored within story variables, which would make it part of the history.

# State

API состояния. См. [State API](http://www.motoslave.net/sugarcube/2/docs/api-state.html) для детальной информации.

State API. See  [State API](http://www.motoslave.net/sugarcube/2/docs/api-state.html) for more information.

# Story

API истории. См. [Story API](http://www.motoslave.net/sugarcube/2/docs/api-story.html) для детальной информации.

Story API. See  [Story API](http://www.motoslave.net/sugarcube/2/docs/api-story.html) for more information.

# UI

API пользовательского интерфейса. См. [UI API](http://www.motoslave.net/sugarcube/2/docs/api-ui.html)для детальной информации.

UI API. See  [UI API](http://www.motoslave.net/sugarcube/2/docs/api-ui.html) for more information.

# UIBar           

Добавлено в: v2.17.0

API панели пользовательского интерфейса.

См. [UIBar API](http://www.motoslave.net/sugarcube/2/docs/api-uibar.html)  для детальной информации.

UIBar API. See  [UIBar API](http://www.motoslave.net/sugarcube/2/docs/api-uibar.html) for more information.

События параграфа (Passage events) и объекты задач (task objects) позволяющие исполнять код JavaScript в определённые моменты во время перемещения по параграфам.

Passage events and task objects allow the execution of JavaScript code at specific points during passage navigation.

В порядке исполнения (также включены Специальные параграфы (Passage Names) для справки):

In order of processing (also includes the Passage… special passages for reference):

1. Passage init. Happens before the modification of the state history.
  1. :passageinit event.
  2. prehistory tasks.
2. Passage start. Happens before the rendering of the incoming passage.
  1. predisplay tasks.
  2. [PassageReady](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages) [ ](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages) [special passage](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages).
  3. :passagestart event.
  4. prerender tasks.
  5. [PassageHeader](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages) [ ](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages) [special passage](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages).
3. Passage render. Happens after the rendering of the incoming passage.
  1. [PassageFooter](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages) [ ](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages) [special passage](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages).
  2. :passagerender event.
  3. postrender tasks.
4. Passage display. Happens after the display (i.e. output) of the incoming passage.
  1. [PassageDone](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages) [ ](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages) [special passage](http://www.motoslave.net/sugarcube/2/docs/special-names.html#special-passages).
  2. :passagedisplay event.
  3. postdisplay tasks.
5. Passage end. Happens at the end of passage navigation.
  1. :passageend event.
