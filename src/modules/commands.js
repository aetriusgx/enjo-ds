const Discord = require('discord.js');
const {enjo} = require('../enjo');
let prefix = require('../json/config.json').prefix;

let CommandHandler = {};

/**@param {Discord.Message} message Discord message object*/
CommandHandler.entry = (message) => {
    let cmd = message.content.slice(prefix.length).split(" ");
    switch(cmd[0]) {
        case 'uptime':
            message.channel.send(`I've been alive for ${Math.round(enjo.uptime / 1000)} seconds`);
            break;
    }
}

module.exports = {CommandHandler};