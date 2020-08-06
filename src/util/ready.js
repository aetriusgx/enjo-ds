const Discord = require('discord.js');
const {enjo} = require('../enjo.js');
const colors = require('colors');

enjo.on('ready', () => {
    enjo.user.setActivity('Standing By', {type: 'CUSTOM_STATUS'});
    console.log('Enjo ready to aid'.cyan);
});