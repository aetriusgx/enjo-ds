const { enjo } = require('../enjo');

enjo.on('guildMemberRemove', member => {
    require('../modules/joins').GuildTraffic.memberLeave(member);
});