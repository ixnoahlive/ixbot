const fortunes = require('../resources/fortune.json')

module.exports = {
    name: 'fortunecookie',
    access: 'public',
    execute(client, args, uuid) {
        client.chat(`You've been given a &6fortune cookie&f!`);
        client.chat(`/give ${uuid} cookie 1 {display:{Name:'[{"text":"Fortune Cookie","italic":false,"color":"gold"}]',Lore:['[{"text":"${fortunes[Math.floor(Math.random() * fortunes.length)]}","color":"gray"}]']}}`)
    }
};