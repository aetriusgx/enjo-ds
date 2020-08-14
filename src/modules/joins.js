const Discord = require('discord.js');
const {
    enjo
} = require('../enjo');
const guild_channels = require('../json/guild-info/channels.json');
const roles = require('../json/guild-info/roles.json');

let GuildTraffic = {};

/**@param {Discord.GuildMember} member*/
GuildTraffic.memberJoin = (member) => {
    // If the new member is a bot, give it the bot roles and leave it at that
    if (member.user.bot) member.roles.add(member.guild.roles.cache.find(role => role.id == roles.general.bots));
    // If the member isn't a bot, continue
    else {
        // Give the member the basic member role
        member.roles.add(member.guild.roles.cache.find(role => role.id == roles.general.cs7));

        // Make strings into variables for easy editing
        let welcome_msg = `Hello ${member.user.username} to the server!`; //Grab the member's username
        let desc = 'Here you can talk to everyone from the CS++ C7 cohort';
        // Fetch the guild through the member and go through the channel cache to find the roles channel
        let add_info = `You can give yourself a role over at ${member.guild.channels.cache.find(channel => channel.id == guild_channels.channel.text.roles).name}`;
        // Find the bot's nickname in the guild by going through the bots guild cache then inside that cache, find the member with the same username as the bot. Then with that member, display the nickname
        let footer = `Message by ${enjo.guilds.cache.find(guild => guild.id == member.guild.id).members.cache.find(this_member => this_member.user.username == enjo.user.username).nickname}`;

        const WelcomeEmbed = Discord.MessageEmbed()
            .setTitle(`**${welcome_msg}**`)
            .setDescription(`${desc} \n ${add_info}`)
            .setColor(0x0f7533) // Boldish green colour
            .setThumbnail(member.user.avatarURL()) // Display the avatar's URL
            .setFooter(footer);

        // Now find the channel with the same guild ID as the one in the JSON file
        let welcome_channel = member.guild.channels.cache.find(channel => channel.id == guild_channels.channel.text.welcome);
        // Send the embed message to that channel and console log it
        if (welcome_channel) welcome_channel.send(WelcomeEmbed), console.log(`${member.user.username} joined the guild`);
    }
};
/**@param {Discord.GuildMember} member*/
//Basically following the same as memberJoin but with some stuff left out
GuildTraffic.memberLeave = (member) => {
    let goodbye_msg = `Goodbye ${member.user.username} :Sadge:`;
    const FarewellEmbed = Discord.MessageEmbed()
        .setTitle(`**${goodbye_msg}**`)
        .setColor(0xbf1717)
        .setThumbnail(member.user.avatarURL())
        .setFooter(`Message by ${enjo.guilds.cache.find(guild => guild.id == member.guild.id).members.cache.find(this_member => this_member.user.username == enjo.user.username).nickname}`)

    let welcome_channel = member.guild.channels.cache.find(channel => channel.id == guild_channels.channel.text.welcome);
    if (welcome_channel) welcome_channel.send(FarewellEmbed), console.log(`${member.user.username} left the guild`);
};

module.exports = {
    GuildTraffic
};