const fs = require('fs');
const config = require('../config.json')
module.exports = {
    name: 'help',
    access: 'public',
    execute(client, args, uuid) {
        const commandsdir = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        let publiccommands = [];
        commandsdir.forEach(file => {
            const command = require(`./${file}`);
            if (config.staff.includes(uuid) && command.access=="staff") { publiccommands.push(command.access=="staff" ? `&c${command.name}&7` : command.name) } else if (command.access!=="staff") { publiccommands.push(command.name) }
        })
        publiccommands.splice(publiccommands.indexOf(undefined))
        client.chat(`Commands: &7${publiccommands.sort().join('&7, ').replace(/.js/, '')}`)
    }
};