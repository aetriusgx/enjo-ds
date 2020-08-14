const Discord = require('discord.js');
const {enjo} = require('../enjo');
const prefix = require('../json/config.json').prefix;

enjo.on('message', message => {
    if(message.content.startsWith(prefix)) {
        if(message.author.bot) return;
        
        require('../modules/commands').CommandHandler.entry(message);
    }
});