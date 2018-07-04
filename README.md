![_](https://vignette4.wikia.nocookie.net/choicescriptdev/images/8/89/Wiki-wordmark.png/revision/latest?cb=20161111163613)
## [ChoiceScript Wiki](https://choicescriptdev.wikia.com/wiki/ChoiceScript_Wiki)
* [изображения](https://choicescriptdev.wikia.com/wiki/Image)
* [звук](https://choicescriptdev.wikia.com/wiki/Sound)
* много того, чего нет в документации в этом файле.

## Introduction to ChoiceScript
* [choice-and-finish](#your-first-scene-choice-and-finish)
* [goto-and-label](#reusing-code-goto-and-label)
* [checking-variables](#setting-and-checking-variables)
* [else-and-elseif](#using-else-and-elseif-to-improve-readability)
* [finish](#what-happens-when-we-finish)

## [Advanced ChoiceScript](#advanced-choicescript)
* comment
* page_break
* line_break
* input_text
* fake_choice
* rand

## [advanced-techniques](#advanced-techniques)

* кнопки Next и Next Chapter, изменение текста этих кнопок
* "%+" and "%-"
* равенство и неравенство оператора if
* and/or
* comparing text
* setting variables to true or false
* текстовые трюки
* gotoref: Goto a label by name, e.g. *gotoref "claws"
* Поместите некоторый текст в фигурные скобки, и мы превратим его в значение указанной переменной. 
```
  *set honesty 30
  *set virtue "honesty"
  *set score {virtue}
  Your ${virtue} score is ${score}
```
* end of Documentation

-----

# Introduction to ChoiceScript
[ccskrf](#setting-and-checking-variables)
A basic guide to the ChoiceScript programming language. Please post on the [ChoiceScript google group](http://groups.google.com/group/choicescript) if you have questions about this document.

## What is ChoiceScript?

ChoiceScript is a simple programming language for writing multiple-choice games (MCGs) like [Choice of the Dragon](http://www.choiceofgames.com/dragon/). Writing games with ChoiceScript is easy and fun, even for authors with no programming experience.

## Trying it out

To begin, [download the ChoiceScript source from GitHub](http://github.com/dfabulich/choicescript/zipball/master), extract the zip file, and open the `web/index.html` file. The game will immediately begin.

(You can also use the [ChoiceScript github page](http://github.com/dfabulich/choicescript) to browse our files, file bugs, or receive notifications when we update ChoiceScript.)

## Your First Scene: `*choice` and `*finish`

Here's a simple scene written in ChoiceScript. You can find it in `web/mygame/startup.txt`.

`

<pre>  Your majesty, your people are starving in the streets, and threaten revolution.
  Our enemies to the west are weak, but they threaten soon to invade.  What will you do?

  *choice
    #Make pre-emptive war on the western lands.
      If you can seize their territory, your kingdom will flourish.  But your army's
      morale is low and the kingdom's armory is empty.  How will you win the war?
      *choice
        #Drive the peasants like slaves; if we work hard enough, we'll win.
          Unfortunately, morale doesn't work like that.  Your army soon turns against you
          and the kingdom falls to the western barbarians.
          *finish
        #Appoint charismatic knights and give them land, peasants, and resources.
          Your majesty's people are eminently resourceful.  Your knights win the day,
          but take care: they may soon demand a convention of parliament.
          *finish
        #Steal food and weapons from the enemy in the dead of night.
          A cunning plan.  Soon your army is a match for the westerners; they choose
          not to invade for now, but how long can your majesty postpone the inevitable?
          *finish
    #Beat swords to plowshares and trade food to the westerners for protection.
      The westerners have you at the point of a sword.  They demand unfair terms
      from you.
      *choice
        #Accept the terms for now.
          Eventually, the barbarian westerners conquer you anyway, destroying their
          bread basket, and the entire region starves.
          *finish
        #Threaten to salt our fields if they don't offer better terms.
          They blink.  Your majesty gets a fair price for wheat.
          *finish
    #Abdicate the throne. I have clearly mismanaged this kingdom!
      The kingdom descends into chaos, but you manage to escape with your own hide.
      Perhaps in time you can return to restore order to this fair land.
      *finish</pre>

`

As you can see, the `*choice` command presents the user with a list of options; the result of choosing each option appears indented right below the option (in an "indented block").

If you go to play this scene, you'll first be presented with three options:

1.  Make pre-emptive war on the western lands.
2.  Beat swords to plowshares and trade food to the westerners for protection.
3.  Abdicate the throne. I have clearly mismanaged this kingdom!

If you choose option #1, you get to choose how to win the war. If you choose option #2, you may decide how to negotiate with the westerners. If you choose option #3, the scene ends with no additional choices.

As you can see, there's a lot you can do with just the `*choice` command and the `*finish` command. Indeed, using only these two commands and a lot of time, you could develop an entire "Choose Your Own Adventure" book!

## Go On, Play with It!

Try opening up `web/mygame/startup.txt` in a simple text editor like Notepad or TextEdit. If you change the text, save the file, and refresh the `web/mygame/index.html` page in your browser, you should be able to see the effect of your changes immediately.

## Indentation

Note that indentation in ChoiceScript is mandatory. Without those spaces for indentation, we would have no way to tell the difference between options nested within other choices and options on the main menu. You can indent blocks using spaces or with the Tab character (but not both in the same file). You can use any number of spaces you want, but you must be consistent. Code like this is not allowed:`

<pre>*choice
    #Hold 'em.
        He calls; you win!
        *finish
      #Fold 'em.
        Better luck next time.
        *finish</pre>

`Option 1 has four spaces, but Option 2 has six spaces; since these don't line up, ChoiceScript will display an error message if you try to write scenes like this.

## Reusing Code: Goto and Label

ChoiceScript provides a way to jump around in a scene besides just making choices. You can use the `*goto` command to jump to any line in the scene, as long as you first put a `*label` on the line you want to reach.

`

<pre>  What kind of animal will you be?
  *choice
    #Lion
      *goto claws
    #Tiger
      *label claws
      In that case, you'll have powerful claws and a mighty roar!
      *finish
    #Elephant
      Well, elephants are interesting animals, too.
      *finish</pre>

`

When we reach the line `*goto claws`, we automatically jump to the line `*label claws`. You may create as many labels as you like, and use `*goto` to reach any of them.

Note that every indented (nested) block must conclude with either a `*finish` command (which ends the scene) or a `*goto` line which jumps to another line in the scene.

(You can also reuse code with the `*goto_scene` command, described later in this document.)

## Setting and Checking Variables

In ChoiceScript, you can use variables to make scenes and decisions more interesting than a "Choose Your Own Adventure" book.

To use a variable, you must begin by defining it and setting it, like this:

`

<pre>  *temp leadership
  *set leadership 20</pre>

`

**TODO: Discuss `*create` vs. `*temp`.** We will probably remove the `*create` command in the future, replacing it with something in `mygame.js`; we should document what the new thing will be. (The basic idea is that `*temp` variables only last for the current scene, whereas permanent variables persist through the entire game.)

Once a variable has been set, you can check the value of the variable like this:

`

<pre>  #Run for class president
    *if leadership > 15
      You win the election.
      *finish
    You lose the election.
    *finish</pre>

`

In this case, leadership is just set to 20, so the player is sure to win the election. But you can choose to give the player a different amount of leadership depending on the player's earlier choices. Using variables, the player's earlier leadership choices can have an effect on the story later in the game.

You can also add leadership points to the current number of leadership points, like this:

`

<pre>  *set leadership +20</pre>

`

This would add 20 points to the player's current leadership score. It's the same thing as writing `*set leadership leadership+20`. You can also subtract points with "-", multiply with "*" or divide with "/".

If you need to use multiple operators at once (e.g. you need to do both division and addition), you must use parentheses, like this: `*set honesty (leadership + manners)*2`. You may not omit the paretheses, even though it's perfectly understandable arithmetic: `*set honesty leadership + manners / 2`.

You can also show the player's current leadership score by using `${}` (a dollar sign followed by curly braces), like this:

`

<pre>  Your leadership score is: ${leadership}</pre>

`

By the way, variables aren't just for numbers. You can also put text in a variable by using quotation marks:

`

<pre>  *set lover_name "Jamie"</pre>

`

### Using `*else` and `*elseif` to Improve Readability

We can rewrite the leadership example above to use the `*else` command; this will make it easier to read.

`

<pre>  #Run for class president
    *if leadership > 15
      You win the election.
      *finish
    *else
      You lose the election.
      *finish</pre>

`

This does exactly the same thing as before, but using `*else` makes it clearer that only one of these two options is possible, just by indenting the code.

You can also use the `*elseif` command to define three possible branches, like this:

`

<pre>  #Run for class president
    *if leadership > 25
      You win the election by a landslide!
      *finish
    *elseif leadership > 15
      You win the election, but just barely.
      *finish
    *else
      You lose the election.
      *finish</pre>

`

## What Happens When We `*finish`?

When we `*finish`, we move on to the next scene in the game. This is defined in a file called `mygame.js`. Here's an example:

      // Specify the list of scenes here, separated by commas, with no final comma

      nav = new SceneNavigator([
          "startup"
          ,"animal"
          ,"variables"
          ,"ending"
          ,"death"

      ]);

      // Specify the default starting stats here

      stats = {
          leadership: 50
          ,strength: 50
      };

      // Specify the stats to use in debug mode

      debugStats = {
          leadership: 50
          ,strength: 50
      };

      // or just use defaults
      // debugStats = stats

The first section defines the scene "navigator," which describes how we move from scene to scene. If you `*finish` in the "startup" scene, we'll move right ahead to the "animal" scene, then the "variables" scene. Finally, we reach the ending scene. Here's an example ending scene:

      This is the last scene!  The game is over!

      *ending

That final `*ending` command instructs the game to insert a "Play Again" button at the end of the scene. If you choose to "Play Again", the game will begin again at the "startup" scene.

**WARNING**: mygame.js is likely to change considerably very soon. It's currently the absolute minimum amount of code that could possibly work; we'd like it to be in a nicer format that looks more like ChoiceScript and less like JavaScript.

(Note that Choice of the Dragon doesn't even have a `mygame.js` file; that feature was developed after CotD was released. You can see something similar in its `index.html` file.)

You're not required to use `*finish` to move on to the next scene; you can also jump to any scene in the game using `*goto_scene`. Here's an example:

      #Lift weights
        *if strength > 15
          You lift the weights.
          *finish
        You drop the weights and hurt yourself badly.  You never recover.

        *goto_scene death

When this happens, we jump directly to the death scene. This allows you to provide a standard "death" message without copying and pasting all over the game.

## Examples

Here some example scenes from Choice of the Dragon. Please don't copy their code without explicit permission from Choice of Games.

# Advanced ChoiceScript

A guide to more advanced features in the ChoiceScript programming language. Please post on the [ChoiceScript google group](http://groups.google.com/group/choicescript) if you have questions about this document.

## Don't Start Here!

Be sure to read our basic [ChoiceScript Introduction](http://www.choiceofgames.com/blog/choicescript-intro) page before reading this advanced documentation

## More Commands

*   `*comment`: This command does nothing; any text you put after `*comment` will be ignored. It's helpful to put remarks in the text that only the author should read.

          *comment TODO We should make this scene more interesting!

*   `*page_break`: Put in a "Next" button with no radio buttons. The game will continue on the subsequent page.

          You turn the corner slowly.  Blood rushes through your ears.  As you open the door...
          *page_break
          ... the masked murderer attacks!

*   `*line_break`: Put just one line break in your text, like a `<br>` in HTML. ChoiceScript automatically converts single line breaks to spaces, and double line breaks to paragraphs.

          So
          this
          is
          all
          one
          line.

          But this is a new paragraph.

          And this
          *line_break
          is two lines.

    That code would display like this:

    > So this is all one line
    > 
    > But this is a new paragraph.
    > 
    > And this  
    > is two lines

*   `*input_text`: Provides a text box for the user to specify the value of a variable, e.g. the user's name.

          Please enter your name.
          *input_text name

          Your name is ${name}

*   `*fake_choice`: This convenience command behaves exactly like `*choice`, but no commands are allowed in the body of the choice; thus no `*goto`/`*finish` is required.

          What color do you prefer?

          *fake_choice
            #Red
              Red is the color of roses.
            #Blue
              Blue is the color of the sea.
            #Green
              Green is the color of spring.

          What an excellent choice!  And what flavor of ice cream would you like?

          *fake_choice
            #Vanilla
            #Chocolate
            #Strawberry

          Mmm, delicious!
          *finish

*   `*rand`: Set a variable to a random number. You set the minimum and maximum, we do the rest. For example, this would set the variable `die_roll` to a value from 1 to 6 inclusive:`

    <pre>  *rand die_roll 1 6</pre>

    `

    Beware! It can be very hard to adequately test scenes that use randomness.

## Advanced Techniques

*   Labeled buttons: By default, `*finish` buttons say "Next Chapter" and `*page_break` buttons say "Next". You can make the button say something else, instead:

          *page_break On with the show!
          *finish The show is over!

*   Conditional options: This advanced technique lets you show/hide some options based on the player's variables.

          How will you handle this?
          *choice
            #Try to talk them out of it.
              They cannot be dissuaded.
              *finish
            #Force them to relent.
              They back down, for now.
              *finish
            *if president
              #Abuse my presidential powers to silence them
                This works; you will never hear from them again.
                *finish

    In this case, players have the option to abuse their presidential power only if they are president; if they are not president, then the option is completely hidden.

*   Fairmath: ChoiceScript includes two rather strange operators specifically for use on variables that are percentages, called "%+" and "%-". You use them like this:`

    <pre>  *set leadership 50
      *set leadership %+ 20
      *set leadership %- 40</pre>

    `

    The "%+" and "%-" operators are called the "fairmath" operators. The idea is that as your leadership score gets higher, it becomes harder to increase, and easier to decrease. According to fairmath:

    *   Fair Addition: `(x %+ y) = (x + (100-x)*(y/100))`

    *   Large scores are hard to increase: `(90 %+ 20) = (90 + 2) = 92`
    *   Small scores are easy to increase: `(10 %+ 20) = (10 + 18) = 28`

    *   Fair Subtraction: `(x %- y) = (x - x*(y/100))`
        *   Large scores are easy to decrease: `(90 %- 20) = (90 - 18) = 72`
        *   Small scores are hard to decrease: `(10 %- 20) = (10 - 2) = 8`
    *   50 is equally easy to increase or decrease.
        *   `(50 %+ 20) = (50 + 10) = 60`
        *   `(50 %- 20) = (50 - 10) = 40`

    Fairmath is great in expressions like: `*set leadership %+ 20`. The player will get anywhere from 0 to 20 more points of leadership, depending on how high leadership is currently.

*   Advanced `*if` statements: You can do a lot more with `*if` statements than `leadership > 15`. Here's a few tricks:
    *   Equality and Inequality
        *   Equal to: `leadership = 40` (Is leadership equal to forty?)
        *   Not equal to: `leadership != 40` (Is leadership different from forty?)
        *   Greater than: `leadership >40` (Is leadership greater than forty?)
        *   Less than: `leadership <40` (Is leadership less than forty?)
        *   Greater than OR equal to: `leadership >=50` (Is leadership greater than or equal to fifty?)
        *   Less than OR equal to: `leadership <=40` (Is leadership less than or equal to forty?)
    *   And/or (with mandatory parentheses)
        *   And: `(leadership > 30) and (strength > 40)`
        *   Or: `(leadership > 60) or (strength > 70)`
        *   Complex parentheses: `((leadership > 60) and (agility > 20)) or (strength > 80)`
    *   Comparing text:
        *   `lover_name = "Jamie"`
        *   `"2" = 2` (this is true!)
    *   Setting variables to `true` or `false`:
        *   `*set finished false`
        *   `*set correct guess = "blue"`
*   Text tricks:
    *   Capitalize first letter: You can capitalize just the first letter of a variable like this: `Behold! $!{He} is capitalized.`
    *   Concatenation: You can join text together like this: `*set murder "red"&"rum"`. You can use variables in the same way: `*set title "Dr. " & last_name`
    *   Quotes: You can put quotes in your text by using backslashes, like this:

              *set joke "she said it was \"ironic\"!"

        If you write `${joke}`, you'll get:

        > she said it was "ironic"!

    *   Backslashes: You can put backslashes in your text by using even more backslashes, like this:

              *set slashy "Here's one backslash: \\ and here's two backslashes: \\\\"

        If you write `${slashy}`, you'll get:

        > Here's one backslash: \ and here's two backslashes: \\

    *   `*print`: This command is no longer necessary; it just prints the value of the variable you specify. Use `${}` variable substitution instead.
*   Truly bizarre references: Probably only programmers will appreciate these. Beware! They add complexity without adding much value.
    *   `*setref`: Set a variable by name, e.g. `*setref "leadership" 30` sets leadership to 30\. Use it in crazy code like this:`

        <pre>  *set virtue "courage"
          *setref virtue 30</pre>

        `This code would set `courage` to 30\. If this still doesn't seem useful, consider that `virtue` could have been determined by earlier choices, so it might have set `honesty` to 30 instead.

        Still not convinced? Don't worry about it; you'll probably never need it.

    *   `*gotoref`: Goto a label by name, e.g. `*gotoref "claws"` **TODO** This doesn't work yet!
    *   Curly parens: Put some text in curly braces and we'll turn it into the value of the named variable.`

        <pre>  *set honesty 30
          *set virtue "honesty"
          *set score {virtue}
          Your ${virtue} score is ${score}</pre>

        `This would print:

        > Your honesty score is 30
