module.exports = {
    name: 'worstping',
    access: 'public',
    execute(client, args, uuid) {
        for (let i = client.players.length;i<client.players.length;i++) {
            	console.log(client.players[i].ping)
        }
        
    }
};