# Code Structure

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