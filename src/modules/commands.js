const Discord = require('discord.js');
const {enjo} = require('../enjo');
let prefix = require('../json/config.json').prefix;

let CommandHandler = {};

/**@param {Discord.Message} message Discord message object*/
CommandHandler.entry = (message) => {
    let cmd = message.content.slice(prefix.length).split(" "); //Remove the prefix from the text and split the command into an array seperated by spaces
    switch(cmd[0]) { //Check for the command name
        case 'uptime':
            message.channel.send(`I've been alive for ${Math.round(enjo.uptime / 1000)} seconds`);
            break;
        case 'add':
            let current_command = cmd; //Make a new command based off the cmd array (duplicate it so we don't modify the actual array)
            current_command.shift(); current_command.shift(); //Get rid of the command name and custom command input
            let output_text = current_command.join(" "); //Turn the array back into a string separated by spaces
            let {Command} = require('./custom_commands'); //Get the Command class from the custom commands module
            new Command(cmd[1], output_text); //Create a new command with the second command parameter as the input name and everything else afterwards to be the output
            break;
        case 'edit':
            
            break;
    }
}

module.exports = {CommandHandler};