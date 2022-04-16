const fs = require('fs');

module.exports = {
    name: 'help',
    access: 'public',
    execute(client, args, uuid) {
        const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        client.chat(`Commands: &7${commands.join(', ').replace(/\.js/g, '')}`);
    }
};