const { getTps } = require('../utils');

module.exports = {
    name: 'list',
    access: 'public',
    execute(client, args, uuid) {
        client.chat(`There are &a${Object.keys(client.players).length}/40&r online players. &7TPS: &8${getTps(client)}`);
        client.chat(`${Object.values(client.players).map(p => p.name).join(', ')}`);
    }
};