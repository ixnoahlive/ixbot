const path = require('path')
const { limit, getUUID } = require('../utils');
const fs = require('fs')

module.exports = {
    name: 'blacklist',
    access: 'staff',
    execute(client, args, uuid) {
        let config = require('../config.json');
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        // This code is the next covid variant in the making, do not show this to a competent programmer. //
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        if (args[0]) {
            if (config.blacklist.includes(args[0])) {
                config.blacklist.splice(config.blacklist.indexOf(args[0]), 1)
                fs.writeFileSync('config.json', JSON.stringify(config, null, " "))
                path.join(__dirname, 'config.json')
                client.chat(`Removed user "&a${limit(args[0], 8)}...&f" from the blacklist!`)
                return
            } else {
                config.blacklist.push(args[0])
                fs.writeFileSync('config.json', JSON.stringify(config, null, " "))
                path.join(__dirname, 'config.json')
                client.chat(`Added user "&c${limit(args[0], 8)}...&f" to blacklist!`)
                return
            }
            
        }
    }
};