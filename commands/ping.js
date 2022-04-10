module.exports = {
    name: "ping",
    access: "public",
    execute(message, uuid, client){
        if (!client.players[uuid]) {client.chat("You aren't ingame!");return}
        client.chat(`Pong! Your ping is ${client.players[uuid].ping}ms!`)
    }
};