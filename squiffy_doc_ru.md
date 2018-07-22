# [Редактор интерантивных текстовых историй Squiffy от http://textadventures.co.uk/](http://textadventures.co.uk/squiffy/editor)
 [ссылка на исходную документацию Eng](http://docs.textadventures.co.uk/squiffy/)

Русский перевод выполнен машиной. Некоторые выражения и понятия адаптированы для лучшего понимания русскоязычными пользователями. Этот перевод находится в состоянии доработки.
Помощь с переводом и концепцией: **Enola**, **Oreolek**

# Сцены и действия

Вы можете форматировать текст с помощью Markdown, а также использовать HTML.

Чтобы создать интерактивные истории, вам нужно добавить некоторые ссылки. Есть два типа текстовых блоков, которые вы можете использовать в Squiffy:

(**Sections**) Сцены являются основными единицами текста.
(**Passages**) Действия - это меньшие единицы, которые существуют внутри своих сцен.

Перемещение игрока на новую сцену приведет к **деактивации всех ссылок** на предыдущей сцене, поэтому используйте новую сцену, когда игрок предпринял некоторые действия, чтобы продвинуть сюжет вперед.

## Сцены (**Sections**)

Названия сцен должны быть уникальными в истории. Объявите сцену, используя двойные квадратные скобки, а затем двоеточие. Для ссылки на сцену используйте двойные квадратные скобки.
```
Do you want to have the [[roast chicken]] or skip straight to [[dessert]]?
    
[[roast chicken]]:
This plate of roast chicken looks delicious.

[[dessert]]:
Three different flavours of ice cream - yum!
```

## Действия (**Passages**)

Одъявите действие, используя одиночные квадратные скобки, а затем двоеточие. действия могут соединяться с дальнейшими действиями. После того, как игрок нажимает на ссылку действия, эта ссылка отключается, поэтому игрок может только щелкнуть ее один раз. Для ссылки на текст действия используйте одиночные квадратные скобки.
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
# Настройка начальной сцены

По умолчанию история начинается в первой сцене. Вы можете выбрать в качестве начала и другую сцену: 
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

# Кнопка "далее..."

Если у вас есть сцена всего с одной ссылкой, которая просто переходит к следующей сцене, вы можете создать ссылку «далее...» следующим образом:
```
This is the first part of my story.

+++Continue...

This is the second part.

+++I want to hear more...

Very well. Here is the third part.
```

# Очистка экрана

Перед появлением содержимого любой сцены или действия можно очистить экран, используя _@clear_ **на отдельной строке**:
```
[[Chapter 2]]:
@clear
My first reaction to the explosion was...
```

# Счетчик кликов

Вы можете вызвать некоторое событие после того, как игрок совершил определенное количество кликов в сцене. Например, вы можете отобразить дополнительный текст, чтобы указать время прохождения. Или в действии может быть запущен некоторый JavaScript для автоматического перемещения игрока на другую сцену.

В приведенном ниже примере текст «Мы почти здесь. Поезд подъезжает к платформе». Всегда записывается после первого клика. После второго клика, мы переместимся на следующую сцену.
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

Вы можете установить атрибут на сцене или в действии следующим образом:
```
@set score = 1000
```
Если значение представляет собой число, оно будет сохранено в виде числа. В противном случае оно будет сохранено в виде строки.
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

# Вставка текста

Вы можете вставлять текст из другой сцены или из текста действия в текущем разделе, окружая его имя фигурными скобками.
```
[[section1]]:
Here is some text from the next section: {section2}

Here is some text from a passage in this section: {passage}

[passage]:
Text from passage.

[[section2]]:
Text from next section.
```

# Отслеживание того, видел ли уже игрок сцену или совершил действие

Вы можете узнать, видел ли игрок текст действия или сцену с использованием JavaScript:
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

Создавая ярлыки, вы можете заменить существующий вывод при щелчке ссылки или при отображении сцены или действия. В приведенном ниже примере мы создаем метку «1», и мы меняем текст на этом ярлыке, используя ссылку:
```
I walked to the shops and I bought {label:1=a pint of milk}.

Or maybe [I bought something different?](@replace 1=a loaf of bread)
```
Мы также можем изменить текст при отображении сцены или действия:
```
I walked to the shops and I bought {label:1=a pint of milk}.

Or maybe [I bought something different?](next passage)

[next passage]:
@replace 1=a bottle of whisky

I changed my mind.
```
Если текст замены соответствует названию сцены или действия, вместо этого будет вставлено содержимое этой сцены или действия.
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

# Замена ссылки и виды последовательности: rotate и sequence

Для текстовой ссылки, которая заменяет себя каждый раз при нажатии:
```
{rotate:one:two:three}
```
Вы можете сохранить результат в атрибуте и использовать его в других сценах:
```
Please choose: {rotate size:small:medium:large}

+++Then continue...

You chose {size}.
```
Если вам не нужен вращающийся по кругу список, используйте вместо него единицный цикл последовательности. Окончательный вариант не будет ссылкой.
```
{sequence:Ready:Steady:Go}
```
В качестве варианта вы можете использовать ссылку на другую сцену в качестве последего элемента в этой последовательности.
```
{sequence:Click me:Click me again:[[And once more]](next)}

[[next]]:
Done!
```

# Мастер-сцены и мастер-действия

Пустое имя сцены или действия создает «мастер», который запускается **для каждой** сцены или действия в игре. Мастер-действие, каждый раз определенное для каждой конкретной сцены, будет запускаться только для каждого действия только на этой сцене.

например, чтобы очистить экран перед отображением каждой сцены и увеличить счетчик поворотов (посещений и подобного):
```
[[]]:
@clear
@inc turns
    if (squiffy.get("turns") > 5) ...
```
