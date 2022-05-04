module.exports = {
    name: 'list',
    access: 'public',
    execute(client, args, uuid) {
        client.chat(`There are &a${Object.keys(client.players).length}/40&r online players.`);
        client.chat(`Players: &7${Object.values(client.players).map(p => p.name).join(', ').replace(' ixAlt', ' &3ixAlt&7')}`);
    }
};