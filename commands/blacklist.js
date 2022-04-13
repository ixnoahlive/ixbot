const path = require('path')
const config = require('../config.json');
const { clean } = require('../utils');
const fs = require('fs')

module.exports = {
    name: 'blacklist',
    access: 'staff',
    execute(client, args, uuid) {
        if (args) {
            config.blacklist.push(clean(args[0]))
            fs.writeFileSync('../config.json', JSON.stringify(config))
            path.join(__dirname, '..', 'config.json')
            client.chat(`&a${args[0]}&r has been added to the blacklist.`)
            return
        }
    }
};