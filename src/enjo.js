const Discord = require('discord.js');
const colors = require('colors');
const token = require('../json/token.json');
const enjo = new Discord.Client();

enjo.on('ready', () => {
    console.log('Bot Online!'.cyan);
});

enjo.login(token);

module.exports = {enjo};