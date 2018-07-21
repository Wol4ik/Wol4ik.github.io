# [Редактор интерантивных текстовых историй Squiffy от http://textadventures.co.uk/](http://textadventures.co.uk/squiffy/editor)
## [исходная документация Eng](http://docs.textadventures.co.uk/squiffy/)

Русский перевод выполненш машиной, я расставил разметку и чуть поправил тескт. Этот перевод находится в состоянии доработки.

# Пазделы(секции, параграфы) и отклики

Вы можете форматировать текст с помощью Markdown, а также использовать HTML.

Чтобы создать интерактивные истории, вам нужно добавить некоторые ссылки. Есть два типа текстовых блоков, которые вы можете использовать в Squiffy:

(**Sections**) Разделы(секции, параграфы) являются основными единицами текста.
(**Passages**) Отклики - это меньшие единицы, которые существуют внутри секций(разделов, параграфов).

Взятие игрока в новый раздел приведет к **деактивации всех предыдущих ссылок**, поэтому используйте новый раздел, когда игрок предпринял некоторые действия, чтобы переместить историю вперед.

## Разделы (**Sections**)

Названия разделов должны быть уникальными в истории. Настройте раздел, используя двойные квадратные скобки, а затем двоеточие. Для ссылки на раздел используйте двойные квадратные скобки.
```
Do you want to have the [[roast chicken]] or skip straight to [[dessert]]?
    
[[roast chicken]]:
This plate of roast chicken looks delicious.

[[dessert]]:
Three different flavours of ice cream - yum!
```

## Отклики (**Passages**)

Настройте отклик, используя одиночные квадратные скобки, а затем двоеточие. Отклики могут соединяться с дальнейшими откликами. После того, как игрок нажимает на ссылкуотклика, эта ссылка отключается, поэтому игрок может только щелкнуть ее один раз. Для ссылки на отклик используйте одиночные квадратные скобки.
```
Looking around the room, you can see a [TV], a [book] and a piece of [paper] with some handwriting scribbled on it.

[TV]:
Covered in dust and the plug is missing.

[book]:
It's a book of magic tricks. Maybe you should [open] it?

[open]:
The cover opens up to reveal the pages all glued together, with an empty key-shaped hole cut out.

[paper]:
"Gone out for a walk. May be a while."
```
# Настройка начального раздела

По умолчанию история начинается в первом разделе. Вы можете выбрать другой раздел: 
```
@start Beginning

[[some other section]]:
This section would normally be the start, but we have overridden it.

[[Beginning]]:
This is where the story begins.
```

# Настройка заголовка

Задайте заголовок следующим образом:
```
@title My Amazing Interactive Story
```

# Продолжить ссылки

Если у вас есть раздел с одной ссылкой, которая просто переходит к следующему разделу, вы можете автоматически создать ссылку «Продолжить» следующим образом:
```
This is the first part of my story.

+++Continue...

This is the second part.

+++I want to hear more...

Very well. Here is the third part.
```

# Очистка экрана

Перед появлением любого раздела или отклика можно очистить экран, используя _@clear_ **на отдельной строке**:
```
[[Chapter 2]]:
@clear
My first reaction to the explosion was...
```

# Поверните счетчик

Вы можете вызвать отклик после того, как игрок совершил определенное количество кликов в секции. Например, вы можете отобразить дополнительный текст, чтобы указать время прохождения. Или в отклике может быть запущен некоторый JavaScript для автоматического перемещения игрока в другой раздел.

В приведенном ниже примере текст «Мы почти здесь. Поезд подъезжает к платформе». Всегда записывается после первого щелчка. После второго отклика нажмите, мы переместимся в следующий раздел.
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

# Атрибуты

## Настройка атрибутов

Вы можете установить атрибут в разделе или отклике следующим образом:
```
@set score = 1000
```
Если значение представляет собой число, оно будет сохранено в виде числа. В противном случае он будет сохранен в виде строки.
Для значений boolean (true / false) для установки как истины:
```
@set my_true_value
```
и установить false:
```
@set not my_false_value
```
или альтернативно:
```
@unset my_false_value
```
Для значений чисел вы можете увеличить или уменьшить значение на 1:
```
@inc оценка
Здоровье @dec
```
Или увеличить или уменьшить другие суммы:
```
@inc score 100
@dec здоровье 5
```
Вы также можете установить значение атрибута из ссылки:
```
Are you [[male]](start, gender=male) or [[female]](start, gender=female)?

[[start]]:
Your choice has been recorded.
```
И вы также можете установить значение в JavaScript:
```
squiffy.set("gender", "female");
```
Вы также можете установить значения атрибутов в условии if, добавить «{@ operations}» после условия двоеточия (:), например:
```
{if a = 1: {@ b + = 1, c- = 1, d = 2, not e}} {else: {@ b + = 2, c + = 2, d = 3, e}}
```

## Чтение атрибутов

Вы можете отобразить значение атрибута, окружив его фигурными скобками.
```
You chose {gender}. 
```
Вы также можете прочитать значение с помощью JavaScript:
```
  var gender = squiffy.get("gender"); 
```
Вы можете условно отображать текст в зависимости от значения атрибута, используя «if» внутри фигурных скобок. Вы также можете использовать «else»:
```
{if gender=male:You are a man.}{else:You are a woman.} 
```
Или вы можете сравнить два атрибута, добавить @ перед вторым атрибутом, он рассматривается как атрибут squiffy not value:
```
{if a=@b:attribute value a and attribute value b are equals.}{else:Are differtents.}
```

# Вложение текста

Вы можете вставлять текст из другого раздела или из отклика в текущем разделе, окружая его имя фигурными скобками.
```
[[section1]]:
Here is some text from the next section: {section2}

Here is some text from a passage in this section: {passage}

[passage]:
Text from passage.

[[section2]]:
Text from next section.
```

# Отслеживание разделов и откликов

Вы можете узнать, видел ли игрок отклик или раздел с использованием JavaScript:
```
 if (squiffy.story.seen("passage3")) alert ("You have seen passage3!");
```
Вы также можете условно отображать текст:
```
You can see a [cupboard]. Maybe you should [open] it?

[open]:
You open the cupboard.

[cupboard]:
The cupboard is {if seen open:open, and there are empty bottles inside}{else:closed}.
```

# Замена текста

Создавая ярлыки, вы можете заменить существующий вывод при щелчке ссылки или при отображении прохода или секции. В приведенном ниже примере мы создаем метку «1», и мы меняем текст на этом ярлыке, используя ссылку:
```
I walked to the shops and I bought {label:1=a pint of milk}.

Or maybe [I bought something different?](@replace 1=a loaf of bread)
```
Мы также можем изменить текст при отображении раздела или отклика:
```
I walked to the shops and I bought {label:1=a pint of milk}.

Or maybe [I bought something different?](next passage)

[next passage]:
@replace 1=a bottle of whisky

I changed my mind.
```
Если текст замены соответствует названию раздела или отклика, вместо этого будет вставлено содержимое этого раздела или отклика.
```
I walked to the shops and I {label:1=bought a pint of milk}.

But I was [thinking](@replace 1=thoughts)...

[thoughts]:
suddenly thought, hang on, I could [[go to the funfair]] or [[join the circus]] instead.

[[go to the funfair]]:
Off I went to the funfair...

[[join the circus]]:
Off I went to the circus...
```

# Поворот и последовательность

Для текстовой ссылки, которая заменяет себя каждый раз при нажатии:
```
{rotate:one:two:three}
```
Вы можете сохранить результат в атрибуте:
```
Please choose: {rotate size:small:medium:large}

+++Then continue...

You chose {size}.
```
Если вам не нужен вращающийся список, используйте вместо него последовательность. Окончательный вариант не будет ссылкой.
```
{sequence:Ready:Steady:Go}
```
В качестве варианта этого вы можете использовать ссылку раздела в качестве окончательной опции в последовательности.
```
{sequence:Click me:Click me again:[[And once more]](next)}

[[next]]:
Done!
```

# Мастер-секции и отклики

Пустое имя раздела или отклика создает «мастер», который запускается **для каждого** раздела или отклика в игре. Мастер-отклик, определенный в именованном разделе, будет запускаться только для каждого отклика в этом разделе.

например, чтобы очистить экран перед каждой секцией и увеличить счетчик оборотов:
```
[[]]:
@clear
@inc turns
    if (squiffy.get("turns") > 5) ...
```
