

module.exports = {
    name: 'tp',
    access: 'ingame',
    execute(client, args, uuid) {
        switch (args[0]) {
            case "accept":
                client.chat('/tpyes')
            case "deny":
                client.chat('/tpno')
            case "me":
                client.chat(`/tp ${client.players[uuid].name}`)
            default:
                client.chat(`Options: accept, deny, me`)
        }
    }
};
