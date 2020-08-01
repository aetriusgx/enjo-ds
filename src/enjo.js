const Discord = require('discord.js');
const colors = require('colors');

const token = require('../json/token.json');

const enjo = new Discord.Client();
const info = {};

enjo.on('ready', () => {
    info.guild = enjo.guilds.cache.find(guild => guild.name == 'CS++').id;
    info.started = enjo.readyAt;

    console.log('Bot Online!'.cyan);
});

enjo.on('message', message => {

});

enjo.on('messageReactionAdd', (messageReaction, user) => {

});

enjo.on('messageReactionRemove', (messageReaction, user) => {

});

enjo.on('guildMemberAdd', member => {

});

enjo.on('guildMemberRemove', member => {

});

enjo.login(token);