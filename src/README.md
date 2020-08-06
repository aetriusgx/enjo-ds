# Code Structure
## Folder Structure
### json
The `json` folder is meant for all things .json. Include modifiable code here to avoid strings in code as much as possible
<br>
You can use this to store information as well but be cautious about uploading database-like files into the repo

### modules
The `modules` folder is where most of the magic fill happen. If it's an idea, it has its own modules.
</br>
This is so one file doesn't have so many different concepts in a single file, making it easier to read and know what's going on.
</br>
The naming scheme is to be completely lowercase with words seperated by underscores.
</br>
To access data from the `json` folder, simply do the following:
```js
    const variable_name = require('../json/FILENAME.json');
    //Now the file content is stored as a variable
```

### res
The `res` folder is where you can store resources that the bot can access.
</br>
These are more or less for template sources like in [the xp rank card](https://github.com/kovuko/enjo-ds/blob/master/src/res/assets/images/card.png).

### util
The `util` folder is where all the event handlers are to be placed. If you need a new handler, simply create a new JS file with the same name as the event. The [main file](https://github.com/kovuko/enjo-ds/blob/master/src/enjo.js) will take care of the rest for you. 
</br>

If you want a module to be connected to a handler event, simply do the following:
```js
    require('../modules/FILENAME'); //Adding .js to the end is optional
```
</br>

## Getting code to work
Creating code for the bot won't work right away unless you include the following
```js
    const {enjo} = require('../enjo');
```
And if necessary, include the discord library
```js
    const Discord = require('discord.js');
```

### Module code
Modules should have their own objects so that another module may access them in the future. It is also necessary for the handlers to access your module. </br>
It is a good idea to have an entry function that will send the event data into your module. This is seen in the [commands module](https://github.com/kovuko/enjo-ds/blob/master/src/modules/commands.js) </br>
Another good idea would be to include parameter declarations so that your editor can know what exactly the parameter typings are. You can do so as I did in the commands file shown above:
```js
/***@param {Discord.Message} message Explanation Here */
```
Now the editor knows that the message parameter in CommandHandler.entry is supposed to be a Discord message and because of that, the editor now shows me the properties and methods a Discord.Message object has.