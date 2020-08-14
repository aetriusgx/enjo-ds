const Discord = require('discord.js');
const {enjo} = require('../enjo');
let prefix = require('../json/config.json').prefix;

let CommandHandler = {};

/**@param {Discord.Message} message Discord message object*/
CommandHandler.entry = (message) => {
    let {Command} = require('./custom_commands');
    let cmd = message.content.slice(prefix.length).split(" "); //Remove the prefix from the text and split the command into an array seperated by spaces
    switch(cmd[0]) { //Check for the command name
        case 'uptime':
            message.channel.send(`I've been alive for ${Math.round(enjo.uptime / 1000)} seconds`);
            break;
        case 'add':
            let add_command = cmd; //Make a new command based off the cmd array (duplicate it so we don't modify the actual array)
            add_command.shift(); add_command.shift(); //Get rid of the command name and custom command input
            let add_output_text = add_command.join(" "); //Turn the array back into a string separated by spaces
            new Command(cmd[1], add_output_text); //Create a new command with the second command parameter as the input name and everything else afterwards to be the output
            break;
        case 'edit':
            let edit_command = cmd; //Make a new command based off the cmd array (duplicate it so we don't modify the actual array)
            edit_command.shift(); edit_command.shift(); //Get rid of the command name and custom command input
            let edit_output_text = edit_command.join(" "); //Turn the array back into a string separated by spaces
             //Get the Command class from the custom commands module
            Command.edit(cmd[1], edit_output_text);
            break;
        case 'erase':
            let current_command = cmd; //Make a new command based off the cmd array (duplicate it so we don't modify the actual array)
            current_command.shift(); current_command.shift(); //Get rid of the command name and custom command input
            let output_text = current_command.join(" "); //Turn the array back into a string separated by spaces
            Command.remove(cmd[1]);
            break;
        default:
            message.channel.send(require('./custom_commands').Command.run(cmd[0]));
    }
}

module.exports = {CommandHandler};