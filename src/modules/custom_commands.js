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
            if (err) console.error(err); //If there's an error, throw into the console and shut down
            else {
                Command.Commands = JSON.parse(data); //Convert the JSON data into readible js
                if (Command.Commands.find(command => command.input == this.input)) return; //If we can find a command with the same name, don't go any further
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

    /**@returns {Command} 
     * @param {String}
    */
    static obtain (name) {
        fs.readFile(saved_commands, (err, data) => {
            if (err) console.error(err);
            else {
                this.Commands = JSON.parse(data);
                if (this.Commands.find(name => name.input == name)) {
                    for (var command of this.Commands)
                        if (command.input == name) return command;
                        else return false;
                } else return false;
            }
        });
    }
    
    static edit (input_name, new_output) {
        let cmd = this.obtain(input_name);
        if(cmd) {
            fs.readFile(saved_commands, (err, data) => {
                if(err) console.err(err);
                else {
                    this.Commands = JSON.parse(data);
                    for(let command of this.Commands) {
                        if(command.input == input_name) {
                            command.ouput = new_output;
                            let new_append = JSON.stringify(this.Commands);
                            fs.writeFileSync(saved_commands, new_append);
                            console.log(`${command.input} has a new output: '${new_output}'`);
                        } else {
                            throw new Error('Command failed to fetch')
                        }
                    }
                }
            });
        } else {
            return;
        }
    }

    static remove (command_input) {
        let cmd = this.obtain(command_input);
        if(cmd) {
            fs.readFile(saved_commands, (err, data) => {
                if(err) console.error(err);
                else {
                    this.Commands = data;
                    for(let command of this.Commands) {
                        if(command.input == command_input) {
                            this.Commands.slice(command.index);
                            let appended = JSON.stringify(this.Commands);
                            fs.writeFileSync(saved_commands, appended);
                            console.log(`Removed ${command.input}`);
                        } else {
                            throw new Error('Command failed to fetch')
                        }
                    }
                }
            });
        } else {
            return;
        }
    }

    static run (input_name) {
        fs.readFile(saved_commands, (err, data) => {
            if(err) console.error(err);
            else {
                this.Commands = JSON.parse(data);
                for(let command of this.Commands) {
                    if(command.input == input_name) return command.output;
                    else return 'No such command found';
                }
            }
        });
    }
}

module.exports = {
    Command
};