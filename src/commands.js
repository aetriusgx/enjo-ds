import { enjo } from './enjo';

let prefix = require('../json/config.json').prefix;

enjo.on('message', message => {
    if(message.content.startsWith(prefix) && !message.author.bot) {
        let cmd = message.content.slice(prefix).split(' ');
        switch(cmd[0]) {
            case 'uptime':
                message.channel.send(`I've been alive for ${enjo.uptime}`);
                break;
        }
    }
});