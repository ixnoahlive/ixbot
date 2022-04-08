module.exports = {
    name: "list",
    access: "public",
    execute(message, uuid, client){
        /*client.chat(`There are ${Object.keys(client.players).length}/75 online players.`)
        client.chat(`${Object.values(client.players).map(p => p.name).join(', ')}`)*/
        client.chat("ix!list is temporarily disabled due to a bug relating to ignoring people in /vanish. Expect a fix soon!")

    }
};