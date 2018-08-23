var storyContent = ﻿{"inkVersion":18,"root":[[{"#":"theme: dark"},"^Автор этой ink-версии, а также web-версии, Android-версии и Instead-версии игры: TechniX. Данная web-версия для github собрана W. с использованием консольной верссии, где из оригинального кода удалены служебные хештеги, предназначенные для web-версии автора.","\n","ev","str","^Начать игру","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["^ ",{"->":"start"},"\n",{"->":"0.g-0"},{"#f":7}],"g-0":["done",{"#f":7}]}],"done",{"start":[["^Темнота.","\n","^Холод.","\n","^Запах металла.","\n","^Пробуждение от анабиоза оказалось совершенно не таким, как я представлял.","\n","^Но почему до сих пор не сработала автоматика? Капсула уже должна была открыться!","\n",["ev","str","^Открыть глаза","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ощупать стенки капсулы","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^Я совершенно ничего не вижу. Надеюсь, с моими глазами всё в порядке.","\n",{"->":".^.^.^.g-0"},{"#f":7}],"c-1":["\n","^Я попытался вытянуть руку, и мои пальцы натолкнулись на холодный металл. Ощупывая стенки капсулы, я обнаружил какой-то рычаг.","\n",["ev","str","^Потянуть рычаг","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Я потянул рычаг, и металлический колпак капсулы со скрежетом распахнулся. Свет ударил мне в глаза. Подождав, пока глаза привыкнут к свету, я неуклюже выбрался из капсулы.","\n",["ev","str","^Осмотреться","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"chamber_room"},"\n",{"->":"start.0.g-0"},{"#f":7}]}],{"#f":7}]}],{"#f":7}],"#f":7,"#n":"start_exam"}],{"g-0":[{"->":".^.^.start_exam"},{"#f":7}]}],{"#f":3}],"chamber_room":[["^Круглая камера слабо освещена. В центре возвышается сложная конструкция из механизмов, труб и проводов, вокруг которой расположены капсулы.","\n","^Герметичная дверь в стене ","ev",{"VAR?":"chamber_door_open"},"/ev",[{"->":".^.b","c":true},{"b":["^ открыта",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^плотно закрыта",{"->":".^.^.^.8"},null]}],"nop","^.","\n",["ev","str","^Осмотреть лампы","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Осмотреть конструкцию","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Осмотреть панель управления","/str",{"CNT?":".^.c-1"},"/ev",{"*":".^.c-2","flg":21},"ev","str","^Осмотреть капсулы","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^Пройти в хранилище","/str",{"VAR?":"chamber_door_open"},"/ev",{"*":".^.c-4","flg":5},{"c-0":["\n","^Гладкие металлические стены и пол тускло блестят в полумраке. Видимо, мощности хватает только на резервное освещение.","\n",{"->":".^.^.^.g-0"},{"#f":7}],"c-1":["\n","^Только благодаря этой машине стало возможным наше путешествие. Индикаторы на панели управления светятся мягким янтарным светом.","\n",{"->":".^.^.^.g-0"},{"#f":7}],"c-2":["\n","^Одного взгляда на индикаторы было достаточно, чтобы понять -- остальные капсулы вышли из строя. Выходит, из нас пятерых только мне повезло достичь точки назначения живым.","\n","^Я осмотрел панель. Похоже, с помощью переключателей можно перенаправить питание с капсул на дверь. Главное - подобрать нужное напряжение...","\n",["ev","str","^Переключить питание","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","ev",{"^->":"chamber_room"},"/ev",{"->":"electropuzzle"},{"->":".^.^.^.^.^.g-0"},{"#f":7}]}],{"#f":7}],"c-3":["\n","^Всего капсул пять. Моя капсула открыта. ","ev",{"VAR?":"has_cover"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ Внутри виднеется кожаная обшивка.",{"->":".^.^.^.7"},null]}],"nop","^","\n",["ev","str","^Потрогать обшивку","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Вырезать обшивку стеклом","/str",{"VAR?":"has_glass"},"/ev",{"*":".^.c-1","flg":21},"ev","str","^Вырезать обшивку","/str",{"VAR?":"has_knife"},"/ev",{"*":".^.c-2","flg":21},{"*":".^.c-3","flg":8},{"c-0":["\n","^Обшивка капсулы до сих пор теплая.","\n",{"->":".^.^.^.^.^.g-0"},{"#f":7}],"c-1":["\n","^Стекло слишком острое, не хотелось бы порезать руки.","\n",{"->":".^.^.^.^.^.g-0"},{"#f":7}],"c-2":["\n","^На то, чтобы вырезать обшивку из капсулы, ушло немало времени.","\n","ev",1,"/ev",{"temp=":"has_cover","re":true},{"->":".^.^.^.^.^.g-0"},{"#f":7}],"c-3":[{"->":".^.^.^.^"},"\n",{"->":".^.^.^.^.^.g-0"},{"#f":7}]}],{"#f":7}],"c-4":["^ ",{"->":"storage_room"},"\n",{"->":".^.^.^.g-0"},{"#f":7}],"#f":7,"#n":"chamber_exam"}],{"g-0":[{"->":".^.^.chamber_exam"},{"#f":7}]}],{"#f":3}],"electropuzzle":[{"temp=":"return_to_story"},[["ev",{"VAR?":"voltage"},9,">","/ev",[{"->":".^.b","c":true},{"b":["^ На щитке горит красная лампочка - это означает, что цепь перегружена.",{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"VAR?":"voltage"},9,"==","/ev",[{"->":".^.b","c":true},{"b":["^ На щитке загорелась зеленая лампа. Где-то загудели механизмы, управляющие дверными замками.",{"->":".^.^.^.14"},null]}],"nop","\n","ev",{"VAR?":"voltage"},9,"<","/ev",[{"->":".^.b","c":true},{"b":["^ Похоже, напряжения в цепи недостаточно для управления дверным реле.",{"->":".^.^.^.22"},null]}],"nop","\n","ev","str","^Открыть дверь","/str",{"VAR?":"voltage"},9,"==","/ev",{"*":".^.c-0","flg":5},"ev","str","^Капсула 1: ВКЛ","/str",{"VAR?":"voltage"},9,"!=",{"VAR?":"tumbler1"},"&&","/ev",{"*":".^.c-1","flg":5},"ev","str","^Капсула 1: выкл","/str",{"VAR?":"voltage"},9,"!=",{"VAR?":"tumbler1"},"!","&&","/ev",{"*":".^.c-2","flg":5},"ev","str","^Капсула 2: ВКЛ","/str",{"VAR?":"voltage"},9,"!=",{"VAR?":"tumbler2"},"&&","/ev",{"*":".^.c-3","flg":5},"ev","str","^Капсула 2: выкл","/str",{"VAR?":"voltage"},9,"!=",{"VAR?":"tumbler2"},"!","&&","/ev",{"*":".^.c-4","flg":5},"ev","str","^Капсула 3: ВКЛ","/str",{"VAR?":"voltage"},9,"!=",{"VAR?":"tumbler3"},"&&","/ev",{"*":".^.c-5","flg":5},"ev","str","^Капсула 3: выкл","/str",{"VAR?":"voltage"},9,"!=",{"VAR?":"tumbler3"},"!","&&","/ev",{"*":".^.c-6","flg":5},"ev","str","^Капсула 4: ВКЛ","/str",{"VAR?":"voltage"},9,"!=",{"VAR?":"tumbler4"},"&&","/ev",{"*":".^.c-7","flg":5},"ev","str","^Капсула 4: выкл","/str",{"VAR?":"voltage"},9,"!=",{"VAR?":"tumbler4"},"!","&&","/ev",{"*":".^.c-8","flg":5},"ev","str","^Капсула 5: ВКЛ","/str",{"VAR?":"voltage"},9,"!=",{"VAR?":"tumbler5"},"&&","/ev",{"*":".^.c-9","flg":5},"ev","str","^Капсула 5: выкл","/str",{"VAR?":"voltage"},9,"!=",{"VAR?":"tumbler5"},"!","&&","/ev",{"*":".^.c-10","flg":5},{"c-0":["\n","ev",1,"/ev",{"temp=":"chamber_door_open","re":true},{"->":"return_to_story","var":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-1":["\n","ev",{"VAR?":"voltage"},5,"+","/ev",{"temp=":"voltage","re":true},"ev",0,"/ev",{"temp=":"tumbler1","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-2":["\n","ev",{"VAR?":"voltage"},5,"-","/ev",{"temp=":"voltage","re":true},"ev",1,"/ev",{"temp=":"tumbler1","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-3":["\n","ev",{"VAR?":"voltage"},1,"+","/ev",{"temp=":"voltage","re":true},"ev",0,"/ev",{"temp=":"tumbler2","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-4":["\n","ev",{"VAR?":"voltage"},1,"-","/ev",{"temp=":"voltage","re":true},"ev",1,"/ev",{"temp=":"tumbler2","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-5":["\n","ev",{"VAR?":"voltage"},2,"+","/ev",{"temp=":"voltage","re":true},"ev",0,"/ev",{"temp=":"tumbler3","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-6":["\n","ev",{"VAR?":"voltage"},2,"-","/ev",{"temp=":"voltage","re":true},"ev",1,"/ev",{"temp=":"tumbler3","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-7":["\n","ev",{"VAR?":"voltage"},6,"+","/ev",{"temp=":"voltage","re":true},"ev",0,"/ev",{"temp=":"tumbler4","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-8":["\n","ev",{"VAR?":"voltage"},6,"-","/ev",{"temp=":"voltage","re":true},"ev",1,"/ev",{"temp=":"tumbler4","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-9":["\n","ev",{"VAR?":"voltage"},8,"+","/ev",{"temp=":"voltage","re":true},"ev",0,"/ev",{"temp=":"tumbler5","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-10":["\n","ev",{"VAR?":"voltage"},8,"-","/ev",{"temp=":"voltage","re":true},"ev",1,"/ev",{"temp=":"tumbler5","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"#f":7,"#n":"electropuzzle_solve"}],{"g-0":[{"->":".^.^.electropuzzle_solve"},{"#f":7}]}],{"#f":3}],"cutscene1":[["^Профессор с самого начала предупреждал нас, что это путешествие в один конец.","\n","^Но цель того стоила. Увидеть своими глазами то, о чем мы сейчас только мечтаем -- кто бы отказался от такой перспективы? И я вызвался добровольцем.","\n","^Вот только почему нас никто не встречает?","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ","ev","void","/ev","->->","\n",{"#f":7}]}],{"#f":3}],"storage_room":[["ev",{"CNT?":"cutscene1"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->t->":"cutscene1"},{"->":".^.^.^.^"},{"->":".^.^.^.5"},null]}],"nop","\n","ev",{"VAR?":"glass_cube_broken"},"/ev",[{"->":".^.b","c":true},{"b":["^ Пол в центре помещения усеян осколками стекла","ev",{"VAR?":"has_papers"},"!","/ev",[{"->":".^.b","c":true},{"b":["^, среди которых лежит несколько листов бумаги",{"->":".^.^.^.6"},null]}],"nop","^.",{"->":".^.^.^.12"},null]}],[{"->":".^.b"},{"b":["^Посреди помещения тускло поблескивает стеклянный куб.",{"->":".^.^.^.12"},null]}],"nop","^ Вдоль стен выстроились ряды однообразных металлических ящиков. В полу возле входа в камеру виден небольшой люк.","\n","ev",{"VAR?":"storage_door_open"},"/ev",[{"->":".^.b","c":true},{"b":["^ Створки двери хранилища частично раскрыты.",{"->":".^.^.^.20"},null]}],[{"->":".^.b"},{"b":["^Огромная двустворчатая дверь хранилища закрыта.",{"->":".^.^.^.20"},null]}],"nop","\n",["ev","str","^Осмотреть куб","/str",{"VAR?":"glass_cube_broken"},"!","/ev",{"*":".^.c-0","flg":21},"ev","str","^Разбить куб ключом","/str",{"CNT?":".^.c-0.3.seen_cube"},{"VAR?":"has_wrench"},"&&","/ev",{"*":".^.c-1","flg":21},"ev","str","^Осмотреть осколки","/str",{"VAR?":"glass_cube_broken"},"/ev",{"*":".^.c-2","flg":21},"ev","str","^Взять осколок","/str",{"CNT?":".^.c-2.3.seen_glass"},{"VAR?":"has_glass"},"!","&&","/ev",{"*":".^.c-3","flg":21},"ev","str","^Взять бумаги","/str",{"CNT?":".^.c-2.3.seen_glass"},{"VAR?":"has_papers"},"!","&&","/ev",{"*":".^.c-4","flg":21},"ev","str","^Осмотреть бумаги","/str",{"VAR?":"has_papers"},"/ev",{"*":".^.c-5","flg":21},"ev","str","^Обмотать изолентой осколок","/str",{"VAR?":"has_tape"},{"VAR?":"has_glass"},"&&",{"VAR?":"has_knife"},"!","&&","/ev",{"*":".^.c-6","flg":21},"ev","str","^Осмотреть ящики","/str","/ev",{"*":".^.c-7","flg":20},"ev","str","^Взять разводной ключ","/str",{"CNT?":".^.c-7.5.seen_boxes"},"/ev",{"*":".^.c-8","flg":21},"ev","str","^Потянуть крышку люка","/str",{"VAR?":"has_wrench"},"!","/ev",{"*":".^.c-9","flg":21},"ev","str","^Открыть люк","/str",{"VAR?":"has_wrench"},"/ev",{"*":".^.c-10","flg":21},"ev","str","^Осмотреть дверь хранилища","/str",{"VAR?":"storage_door_open"},"!","/ev",{"*":".^.c-11","flg":21},"ev","str","^Открыть дверь хранилища","/str",{"VAR?":"storage_door_open"},"/ev",{"*":".^.c-12","flg":21},"ev","str","^Идти к лестницам","/str",{"CNT?":"stairs_room"},"/ev",{"*":".^.c-13","flg":5},"ev","str","^Спуститься в люк","/str",{"VAR?":"engine_room_open"},"/ev",{"*":".^.c-14","flg":5},"ev","str","^Перейти в камеру","/str","/ev",{"*":".^.c-15","flg":4},{"c-0":["\n","^Под стеклом лежали несколько страниц отпечатанного на машинке текста. Содержание документа я прекрасно помнил -- ещё бы, ведь я был одним из тех, кто его составлял...","\n",[[{"->":".^.^.^.^.^.g-0"},{"#f":7,"#n":"seen_cube"}],null],{"#f":7}],"c-1":["\n","^Раздался звон разбитого стекла, и осколки разлетелись по полу.","\n","ev",1,"/ev",{"temp=":"glass_cube_broken","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-2":["\n","^В осколках отражается желтый свет ламп.","\n",[[{"->":".^.^.^.^.^.g-0"},{"#f":7,"#n":"seen_glass"}],null],{"#f":7}],"c-3":["\n","^Я осторожно подобрал осколок с пола.","\n","ev",1,"/ev",{"temp=":"has_glass","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-4":["\n","^Я вытащил из-под осколков листы, сложил их и спрятал в карман.","\n","ev",1,"/ev",{"temp=":"has_papers","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-5":["\n","^Несколько страниц отпечатанного на машинке текста. Для тех, кто должен был нас встретить, они имеют особое значение.","\n",{"->":".^.^.^.g-0"},{"#f":7}],"c-6":["\n","^Аккуратно, чтобы не порезаться, я обмотал осколок изолентой. Теперь им можно пользоваться как ножом, если понадобится.","\n","ev",1,"/ev",{"temp=":"has_knife","re":true},"ev",0,"/ev",{"temp=":"has_glass","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-7":["\n","^Надписи на ящиках уже не разобрать. А обыскивать их наугад у меня нет ни времени, ни желания.","\n","^Между ящиками лежит разводной ключ. Интересно, кто мог обронить его тут?","\n",[[{"->":".^.^.^.^.^.g-0"},{"#f":7,"#n":"seen_boxes"}],null],{"#f":7}],"c-8":["\n","^Я подобрал с пола разводной ключ.","\n","ev",1,"/ev",{"temp=":"has_wrench","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-9":["\n","^Я потянул за ручку, но открыть люк у меня не вышло.","\n",{"->":".^.^.^.g-0"},{"#f":7}],"c-10":["\n","^Используя разводной ключ как рычаг, я приподнял люк и отодвинул его в сторону.","\n","ev",1,"/ev",{"temp=":"engine_room_open","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-11":["\n","^Хранилище спроектировано так, что дверь можно открыть только снаружи. Мне нужно найти способ открыть её изнутри.","\n",{"->":".^.^.^.g-0"},{"#f":7}],"c-12":["\n","^Похоже, за эти годы механизмы пришли в негодность, и дверь невозможно открыть полностью.","\n","^Из темной щели между створками двери веет холодом.","\n",["ev","str","^Протиснуться в щель","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Ширины щели вполне достаточно, чтобы я смог протиснуться.","\n",{"->":"stairs_room"},{"->":".^.^.^.^.^.g-0"},{"#f":7}]}],{"#f":7}],"c-13":["^ ",{"->":"stairs_room"},"\n",{"->":".^.^.^.g-0"},{"#f":7}],"c-14":["^ ",{"->":"engine_room"},"\n",{"->":".^.^.^.g-0"},{"#f":7}],"c-15":["^ ",{"->":"chamber_room"},"\n",{"->":".^.^.^.g-0"},{"#f":7}],"#f":7,"#n":"storage_exam"}],{"g-0":[{"->":".^.^.storage_exam"},{"#f":7}]}],{"#f":3}],"engine_room":[["^Тесное небольшое помещение. От гула машин, поддерживающих работу комплекса, звенит в ушах. Рядом с лестницей, ведущей наверх, находится пульт управления. Справа от пульта виден вентиль системы управления гермодверью хранилища","ev",{"VAR?":"used_cover"},"/ev",[{"->":".^.b","c":true},{"b":["^, на который наброшена кожаная обшивка капсулы",{"->":".^.^.^.5"},null]}],"nop","^.","\n","ev",{"VAR?":"has_tape"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ На полу лежит моток изоленты, слегка присыпанный пылью.",{"->":".^.^.^.13"},null]}],"nop","\n",["ev","str","^Осмотреть пульт","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Повернуть вентиль","/str",{"VAR?":"used_cover"},"!","/ev",{"*":".^.c-1","flg":21},"ev","str","^Набросить обшивку на вентиль","/str",{"CNT?":".^.c-1.1.tried_vent"},{"VAR?":"has_cover"},"&&","/ev",{"*":".^.c-2","flg":5},"ev","str","^Снять обшивку с вентиля","/str",{"VAR?":"used_cover"},"/ev",{"*":".^.c-3","flg":5},"ev","str","^Повернуть вентиль","/str",{"VAR?":"used_cover"},"/ev",{"*":".^.c-4","flg":21},"ev","str","^Взять изоленту","/str",{"VAR?":"has_tape"},"!","/ev",{"*":".^.c-5","flg":21},"ev","str","^Обмотать изолентой осколок","/str",{"VAR?":"has_tape"},{"VAR?":"has_glass"},"&&",{"VAR?":"has_knife"},"!","&&","/ev",{"*":".^.c-6","flg":21},"ev","str","^Подняться в хранилище","/str","/ev",{"*":".^.c-7","flg":4},{"c-0":["\n","^Большая часть индикаторов на пульте горит красным. Похоже, долго эти машины не протянут.","\n",{"->":".^.^.^.g-0"},{"#f":7}],"c-1":["\n",[["^Я схватил вентиль, но тут же отдернул руку - раскаленный металл больно обжёг ладони.","\n",{"->":".^.^.^.^.^.g-0"},{"#f":7,"#n":"tried_vent"}],null],{"#f":7}],"c-2":["\n","^Я набросил кожаную обшивку на вентиль.","\n","ev",0,"/ev",{"temp=":"has_cover","re":true},"ev",1,"/ev",{"temp=":"used_cover","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-3":["\n","^Осторожно, чтобы не обжечься, я снял обшивку с вентиля.","\n","ev",1,"/ev",{"temp=":"has_cover","re":true},"ev",0,"/ev",{"temp=":"used_cover","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-4":["\n","^Я прокрутил вентиль до упора. Что-то загрохотало в темноте за переплетением труб, и вскоре сверху послышался скрежет открывающейся гермодвери.","\n","ev",1,"/ev",{"temp=":"storage_door_open","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-5":["\n","^Я подобрал изоленту.","\n","ev",1,"/ev",{"temp=":"has_tape","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-6":["\n","^Аккуратно, чтобы не порезаться, я обмотал осколок изолентой. Теперь им можно пользоваться как ножом, если понадобится.","\n","ev",1,"/ev",{"temp=":"has_knife","re":true},"ev",0,"/ev",{"temp=":"has_glass","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-7":["^ ",{"->":"storage_room"},"\n",{"->":".^.^.^.g-0"},{"#f":7}],"#f":7,"#n":"engine_exam"}],{"g-0":[{"->":".^.^.engine_exam"},{"#f":7}]}],{"#f":3}],"stairs_room":[["^Луч света из щели дверей хранилища освещает небольшую комнату. Сверху из лестничного пролета виден дневной свет. Здесь очень холодно.","\n",["ev","str","^Подняться вверх","/str",{"VAR?":"has_warm"},"!","/ev",{"*":".^.c-0","flg":21},"ev","str","^Нарезать обшивку","/str",{"VAR?":"has_warm"},"!",{"VAR?":"has_knife"},"&&",{"VAR?":"has_cover"},"&&","/ev",{"*":".^.c-1","flg":21},"ev","str","^Подняться вверх","/str",{"VAR?":"has_warm"},"/ev",{"*":".^.c-2","flg":21},"ev","str","^Вернуться в хранилище","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n","^Если я попытаюсь выйти наружу в такую погоду, то неизбежно замерзну...","\n",{"->":".^.^.^.g-0"},{"#f":7}],"c-1":["\n","^Разрезав обшивку на куски, я затолкал их под одежду. Теперь будет намного теплее.","\n","^Теперь, когда я утеплил свою одежду обшивкой, можно подняться вверх...","\n","ev",0,"/ev",{"temp=":"has_cover","re":true},"ev",1,"/ev",{"temp=":"has_warm","re":true},{"->":".^.^.^.g-0"},{"#f":7}],"c-2":["^ ",{"->":"cutscene2"},"\n",{"->":".^.^.^.g-0"},{"#f":7}],"c-3":["^ ",{"->":"storage_room"},"\n",{"->":".^.^.^.g-0"},{"#f":7}],"#f":7,"#n":"stairs_exam"}],{"g-0":[{"->":".^.^.stairs_exam"},{"#f":7}]}],{"#f":3}],"cutscene2":[["^Я поднялся по лестнице и вошел в большой круглый зал. Тот самый, в котором нас провожали в долгий путь.","\n","^Зал был абсолютно пуст и, очевидно, давно заброшен. Всё, что представляло хоть малейшую ценность, растащили. Мозаика на стенах местами осыпалась, в потолке зияли дыры, через которые в зал проникал дневной свет.","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"hall_room"},"\n",{"#f":7}]}],{"#f":3}],"hall_room":[["^Я вышел из зала на круговую галерею. И был поражён увиденным.","\n","^За огромными окнами галереи открывался потрясающий вид. На холмах, слегка покрытых лесом, кое-где лежал снег. И там, среди холмов, до самого горизонта стояли огромные ветряки, их лопасти медленно вращались. А рядом сияли огни небольшого города.","\n",["ev","str","^Посмотреть на ветряки","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Посмотреть на город","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Идти дальше","/str",{"CNT?":".^.c-0.3.seen_mills"},{"CNT?":".^.c-1.3.seen_city"},"&&","/ev",{"*":".^.c-2","flg":21},{"c-0":["\n","^Я насчитал около десятка ветряков. Как будто картина из фантастического романа.","\n",[[{"->":".^.^.^.^.^.g-0"},{"#f":7,"#n":"seen_mills"}],null],{"#f":7}],"c-1":["\n","^Город сильно изменился за эти годы. Появились новые кварталы со множеством высотных зданий.","\n",[[{"->":".^.^.^.^.^.g-0"},{"#f":7,"#n":"seen_city"}],null],{"#f":7}],"c-2":["^ ",{"->":"cutscene_end"},"\n",{"->":".^.^.^.g-0"},{"#f":7}],"#f":7,"#n":"hall_exam"}],{"g-0":[{"->":".^.^.hall_exam"},{"#f":7}]}],{"#f":3}],"cutscene_end":[["^Получасовой спуск оказался утомителен для меня, и я остановился отдохнуть возле поросшего травой монумента.","\n","^На вершине холма виднелось здание, в котором я провел столько лет. Но теперь причина, по которой оно оказалось заброшенным, больше меня не беспокоила - то, что я увидел сверху, давало мне надежду.","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"finale"},"\n",{"#f":7}]}],{"#f":3}],"finale":[["^Надежду увидеть своими глазами то, ради чего проделал этот долгий и сложный путь.","\n",["ev",{"^->":"finale.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Будущее.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"finale.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"finale.0.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Светлое будущее.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"finale.0.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"finale.0.c-0.7.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Светлое коммунистическое будущее.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"finale.0.c-0.7.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","done",{"#f":7}]}],{"#f":7}]}],{"#f":7}]}],{"#f":3}],"global decl":["ev",0,{"VAR=":"has_cover"},0,{"VAR=":"has_knife"},0,{"VAR=":"has_wrench"},0,{"VAR=":"has_glass"},0,{"VAR=":"has_papers"},0,{"VAR=":"has_tape"},0,{"VAR=":"chamber_door_open"},16,{"VAR=":"voltage"},0,{"VAR=":"tumbler1"},0,{"VAR=":"tumbler2"},0,{"VAR=":"tumbler3"},1,{"VAR=":"tumbler4"},0,{"VAR=":"tumbler5"},0,{"VAR=":"storage_door_open"},0,{"VAR=":"glass_cube_broken"},0,{"VAR=":"engine_room_open"},0,{"VAR=":"used_cover"},0,{"VAR=":"has_warm"},"/ev","end",null],"#f":3}],"listDefs":{}};