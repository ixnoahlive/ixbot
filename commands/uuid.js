module.exports = {
    name: 'uuid',
    access: 'staff',
    execute(client, args, uuid) {
        if (!args[0]) return client.chat(`/msg ${uuid} Specify a name!`)
        const ixnoahiscool = Object.values(client.players).find(p => p.name === args[0])
        if (!ixnoahiscool) return client.chat(`/msg ${uuid} Player not found.`)
        client.chat(`/msg ${uuid} ${ixnoahiscool.UUID}`)
    }
};
