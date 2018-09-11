[Объявить локацию](http://apero.ru/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F#collapse-set-location)

Локации должны иметь свои уникальные названия, то есть названия локаций не должны повторяться в пределах кода игры.

<pre>
\имя локации
</pre>

Название локаций не будет видно пользователю в процессе игры, это служебная информация для автора.

Названием локации может быть сочетание(эти же правила относится к именам переменных):

* кириллических или латинских символов,
* знаков нижнего подчеркивания,
* цифр,
* пробелов и точек.

Название локации должно содержать хотя бы один кириллический или латинский символ в **нижнем регистре** или знак нижнего подчеркивания.

В названии локации не рекомендуется использовать зарезервированные команды в верхнем регистре, такие как СТОП(end), КНОПКА(btn), ЕСЛИ(if), ТО(then), ИНАЧЕ(else), КАРТИНКА(image), ССЫЛКА(link), МУЗЫКА(music), ЗВУК(play) и д.р.

#### Примеры правильного объявления локаций(канонический вид):













# textadventures.co.uk
[ Squiffy редактор СОИ-книгр ](http://textadventures.co.uk/squiffy/editor) **|** [ Squiffy РУССКАЯ документация ](squiffy_doc_ru.md) **|** [ Squiffy Doc Eng ](http://docs.textadventures.co.uk/squiffy/)

```
On the train you can see a [girl singing], a [man reading a book] and an [old woman].

  [girl singing]:
     She is nodding her head to the music in her enormous earphones, and singing badly out of tune.

  [man reading a book]:
     He's been reading the same page of *War and Peace* for a while now.

  [old woman]:
     She eyes you suspiciously, as if she has seen your type before.
 
[@1]:
  We're nearly here. The train is pulling into the platform.
 
[@2]:
  squiffy.story.go("station");

[[station]]:
We have now arrived at the station.
```

- - - - - - -

# Twine SugarCube v2.x русская документация
[ визуальный редактор игр ](https://twinery.org) **|** [ пример игры ](https://db.crem.xyz/f/uploads/Uh_est_ro.html) **|** [ complete original documentation ](http://www.motoslave.net/sugarcube/2/)

Предупреждение: перевод некоторых названий и сокращений может быть неточным или вообще отсутствовать (_кроме категории [Специальные имена](https://github.com/Wol4ik/Wol4ik.github.io/blob/master/twine2_engine/tw2_doc_enola.md)_). Однако, понимание технического смысла пунктов документации от этого не пострадает, благодаря практическим примерам кода и пояснениям к ним.
## Требования
Единственным требованием SugarCube является современный веб-браузер, и я имею в виду, что он выпущен в течение последних нескольких лет (вам не нужен абсолютный последний и самый блестящий).

**Предостережение для пользователей Internet Explorer**: SugarCube поддерживает только IE ≥9. Таким образом, пользователи Windows XP (которые ограничены IE8) не смогут воспроизводить / просматривать истории, созданные с помощью SugarCube, с их версией IE. Им следует либо использовать другой браузер, либо обновить версию  Windows (Microsoft завершила публичную поддержку Windows XP в апреле 2014 года).
## Категории
* Специальные имена / [Special Names](https://github.com/Wol4ik/Wol4ik.github.io/blob/master/twine2_engine/tw2_doc_enola.md)
* Форматирование текста / Markup
* Макросы / Macros
* Код / TwineScript
* Функции / Functions
* Методы об'ектов / Object Methods
* События и задачи / Passage Events & Task Objects
* Объект конфигурации / Config Object
* Настройка визуального оформления / CSS
* Применение HTML кода / HTML
