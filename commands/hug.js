const { clean } = require('../utils');

module.exports = {
    name: 'hug',
    access: 'public',
    execute(client, args, uuid) {
        if (args.length === 0) return client.chat('Enter something/someone to hug!');
        if (args.join(' ')===client.players[uuid].name.toLowerCase() || args.join('')=="me") {
            client.chat(`&cixBot&b hugs &c${clean(client.players[uuid].name)}&b!`)
            return;
        } else if (args.join('').toLowerCase()=="ixbot"||args.join('').toLowerCase()=="you") {
            client.chat('&bI- uhh- ehm...')
            return
        }
        client.chat(`&c${client.players[uuid].name}&b hugs &c${clean(args.join(' '))}&b!`)
    }
};