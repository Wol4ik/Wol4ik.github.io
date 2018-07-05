## /mygame/mygame.js
```
nav = new SceneNavigator(["startup"]);
	stats = {
		looc: "Кругом заботоченный лес"
		,inper: "df"
			};
```

- - -
## /mygame/scenes/choicescript_stats.txt
```
This is a stats screen!

*stat_chart
	text looc
	text inper
```

- - -
## /mygame/scenes/startup.txt
```
*title My Little Adventure
*author Anonymous

*scene_list
	startup

${looc}...

*label forest
*input_text inper
*set looc (looc&", ")&(inper)
${looc}...
*goto forest
```
