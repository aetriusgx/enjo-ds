const { enjo }= require('../enjo');

enjo.on('guildMemberAdd', member => {
    require('../modules/joins').GuildTraffic.memberJoin(member);
});