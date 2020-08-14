const Discord = require('discord.js');
const {enjo} = require('../enjo.js');
const colors = require('colors');

enjo.on('ready', () => {
    enjo.user.setActivity(' the server', {type: 'WATCHING'});
    console.log('Enjo ready to aid'.cyan);
});