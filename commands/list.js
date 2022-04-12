module.exports = {
    name: "list",
    access: "public",
    execute(message, uuid, client){
        client.chat(`There are &a${Object.keys(client.players).length}/75&r online players.`)
        client.chat(`${Object.values(client.players).map(p => p.name).join(', ').replace('ixNoah','&bixNoah')}`)
    }
};