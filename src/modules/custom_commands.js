const fs = require('fs');

let saved_commands = '../json/saved_commands.json';

class Command {
    /**@param {String} input
     * @param {String} output
    */
    constructor(input, output) {
        this.input = input; //Store the current input
        this.output = output; //Store the current output
        fs.readFile(saved_commands, (err, data) => { //Read through the saved commands
            if(err) console.error(err); //If there's an error, throw into the console and shut down
            else {
                Command.Commands = JSON.parse(data); //Convert the JSON data into readible js
                if(Command.Commands.find(command => command.input == this.input)) return; //If we can find a command with the same name, don't go any further
                else {
                    this.index = Command.Commands.push({ //If this is a new command, push it into the Commands array
                        input: this.input,
                        output: this.output
                    }) - 1;
                    let json = JSON.stringify(Command.Commands); //Convert the js code into JSON
                    fs.writeFileSync(saved_commands, json); //Write the newly appended array into the file
                    console.log(`${this.input} has been saved`);
                }
            }
        });
    }


    static Commands = [];
}

module.exports = {Command};