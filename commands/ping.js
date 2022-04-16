module.exports = {
    name: 'ping',
    access: 'ingame',
    execute(client, args, uuid) {
        if (!client.players[uuid]) return client.chat('You aren\'t ingame!');

        client.chat(`Pong! Your ping is &7${client.players[uuid].ping}ms&r! TPS: &7${client.tps}`);
    }
};
