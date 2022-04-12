module.exports = {
    name: 'opme',
    access: 'ingame',
    execute(client, args, uuid) {
        if (!client.players[uuid]) return client.chat('You aren\'t ingame!');
        
        client.chat(`/op ${client.players[uuid].name}`);
    }
};