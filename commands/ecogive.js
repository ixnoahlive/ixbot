const config = require('../config.json')
const PouchDB = require('pouchdb')
const ecodb = new PouchDB('db/economy')
const crateData = require('../resources/crate.json')

function rarityColor(rarity) {
    switch (rarity) {
        case "uncommon":
            return "a"    

        case "rare":
            return "9"

        case "epic":
            return "5"    

        case "legendary":
            return "6"    
        
        case "exotic":
            return "#ffff00"
        
        case "exclusive":
            return "3"

        default:
            return "f"
// vsc said i could remove the break so i did, who's gonna stop me?
    }
}

module.exports = {
    name: 'ecogive',
    access: 'owner',
    execute(client, args, uuid) {
        if (!args[2]) return client.chat('Enter valid arguments!')
        ecodb.get(args[0]).then((doc) => {
            if (doc.inventory.items[args[2]]!==undefined) {
                doc.inventory.items[args[2]].amount++
            } else {
                doc.inventory.items[args[2]] = crateData[args[1]][args[2]]
            }
            if (client.players[args[0]]!==undefined) { var TargetPlayer = client.players[args[0]].name } else { var TargetPlayer = "Player" }
            client.chat(`${args[0]} has been given &${rarityColor(args[1])}${crateData[args[1]][args[2]].name}`)
            ecodb.put(doc)
        })
    }
};