const {enjo} = require('../enjo');
const prefix = require('../json/config.json').prefix;

enjo.on('message', message => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix)) require('../modules/commands');
});