const Discord = require('discord.js');
const colors = require('colors');
const fs = require('fs');
const token = require('./json/token.json');

const enjo = new Discord.Client();
module.exports = {enjo};

const sources = fs.readdirSync('./src/util');

sources.forEach(async file => {
    if(file.endsWith('.js')) {
        await require(`./util/${file}`);
        console.log(`${file} loaded`.yellow);
    }
});


enjo.login(token);
