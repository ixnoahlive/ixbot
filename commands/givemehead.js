module.exports = {
    name: 'givemehead',
    access: 'ingame',
    execute(client, args, uuid) {
        if (!client.players[uuid]) return client.chat('You aren\'t ingame!');

        client.chat(`Alright. &oHere you go!`);
        client.chat(`/give ${uuid} player_head 1 {SkullOwner:${client.players[uuid].name}}`)
    }
};
