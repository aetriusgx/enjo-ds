const {
    enjo
} = require('../enjo');
const {
    GuildTraffic
} = require('../modules/joins');

enjo.on('guildMemberAdd', member => {
    GuildTraffic.memberJoin(member);
});