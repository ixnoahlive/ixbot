const config = require('../config.json')

module.exports = {
    name: 'rank',
    access: 'ingame',
    execute(client, args, uuid) {
        if (config.owner.includes(uuid)) {
            var rank = "&9Owner"
        } else if (config.staff.includes(uuid)) {
            var rank = "&cStaff"
        } else {
            var rank = "&7User"
        }
        client.chat(`&fYour ixBot rank: ${rank}`)
    }
};
