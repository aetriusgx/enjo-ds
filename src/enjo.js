const Discord = require('discord.js');
const colors = require('colors');
const fs = require('fs');

const token = require('../json/token.json');
const enjo = new Discord.Client();
module.exports = {enjo};

const sources = fs.readdirSync('./src');

enjo.on('ready', () => {
    console.log('Bot Online!'.cyan);
});

sources.forEach(async file => {
    if(file.endsWith('.js') && !file.startsWith('enjo')) {
        await require(`./${file}`);
        console.log(`${file} loaded`.yellow);
    }
});


enjo.login(token);
