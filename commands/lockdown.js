const path = require('path')
const fs = require('fs')

module.exports = {
    name: 'lockdown',
    access: 'staff',
    execute(client, args, uuid) {
        let config = require('../config.json');
        if (!config.extra.lockdown) {
            config.extra.lockdown = true

            fs.writeFileSync('config.json', JSON.stringify(config, null, " "))
            path.join(__dirname, 'config.json')
            client.chat(`&4&l[!] &cInitiating lockdown, non staff users may no longer use commands.`)
        } else {
            config.extra.lockdown = false

            fs.writeFileSync('config.json', JSON.stringify(config, null, " "))
            path.join(__dirname, 'config.json')
            client.chat(`&2&l[!] &aExiting lockdown, non staff users may use commands.`)
        }
        
    }
};
