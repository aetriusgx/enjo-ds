const {
    enjo
} = require('../enjo');
const {
    GuildTraffic
} = require('../modules/joins');

enjo.on('guildMemberRemove', member => {
    GuildTraffic.memberLeave(member);
});