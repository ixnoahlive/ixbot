module.exports = {
    name: "opme",
    access: "ingame",
    execute(message, uuid, client) {
        if (!client.players[uuid]) {client.chat("You aren't ingame!");return}
        client.chat(`/op ${client.players[uuid].name}`)
    }
}