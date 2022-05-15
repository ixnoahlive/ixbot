const fs = require('fs');
module.exports = {
    name: 'help',
    access: 'public',
    execute(client, args, uuid) {
        const commandsdir = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        let publiccommands = {};
        commandsdir.forEach(file => {
            const command = require(`./${file}`);
            if (command.access!=="staff") publiccommands[command.name] = command;
        })
        client.chat(`Commands: &7${publiccommands.join(', ').replace(/.js/, '')}`)
    }
};