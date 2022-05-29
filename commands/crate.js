const fs = require('fs')
const path = require('path')
const { makeTime, choose } = require('../utils')
const crateData = require('../resources/crate.json')

////////////////////////////////////////////////////////////////////////////////////
// If you thought that blacklist.js was bad, get ready for the ride of your life! //
////////////////////////////////////////////////////////////////////////////////////

const PouchDB = require('pouchdb');
var ecodb = new PouchDB('db/economy');

function rollRarity() {
    var number = Math.floor(Math.random() * 1001)
    if (number<501) {
        return "common"
    } else if (number<701) {
        return "uncommon"
    } else if (number<801) {
        return "rare"
    } else if (number<976) {
        return "epic"
    } else {
        return "legendary"
    }
}
function rollItem() {
    let rarity = rollRarity()
    let iindex = Math.floor(Math.random() * Object.keys(crateData[rarity]).length)
    return [crateData[rarity][Object.keys(crateData[rarity])[iindex]],rarity,iindex]
} // What do you mean im lazy?

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
  
        default:
            return "f"
// vsc said i could remove the break so i did, who's gonna stop me?
    }
}

module.exports = {
    name: 'crate',
    access: 'staff',
    execute(client, args, uuid) {
        let config = require('../config.json')
        let cmdtime = new Date().getTime()
        ecodb.get(uuid).then((doc) => console.log(JSON.stringify(doc)))
        console.log()
        switch (args[0]) {

            case "help":
                client.chat(`/emsg ${uuid} &9&lCrate Commands: &3help, open, timer`)
            break;

            case "timer":
                client.chat(`Time until crate is available: &7${makeTime(config.crates.nextOpen-cmdtime)=='00:00' ? '&aNow!' : makeTime(config.crates.nextOpen-cmdtime)}`)
            break;

            case "open":
                if (cmdtime>config.crates.nextOpen || args[1]=="-f" && config.staff.includes(uuid)) {
                    config.crates.nextOpen = cmdtime+900000
                    fs.writeFileSync('config.json', JSON.stringify(config, null, " "))
                    path.join(__dirname, 'config.json')
                    let rolledItem = rollItem()
                    console.log(rolledItem[0])
                    ecodb.get(uuid).then((doc) => {
                        if (doc.inventory == undefined) {
                            doc.inventory = new Object
                            doc.inventory.items = new Object
                        } 
                        if (Object.keys(doc.inventory.items).includes(crateData[rolledItem[1]][rolledItem[2]])) { 
                            doc.inventory.items[crateData[rolledItem[1]][rolledItem[2]]].amount++
                         } else {
                             doc.inventory.items[crateData[rolledItem[1]][rolledItem[2]]] = rolledItem[0]
                         }
                         ecodb.put(doc)
                    }).then(() => {
                        return ecodb.get(uuid)
                    }).then((doc) => {
                        console.log(doc)
                    }).catch((error) => {
                        console.log(error)
                    })
                    setTimeout(() => client.chat(`&#73ffcc&lCRATE! &#339cde${client.players[uuid].name}&#e3f4ff opened the crate and got &${rarityColor(rolledItem[1])}&o${rolledItem[0].name}`), 0)
                    
                } else {
                    client.chat(`The next crate is available in &7${makeTime(config.crates.nextOpen-cmdtime)}`)
                }
            break;

            default:
                client.chat('&fInvalid argument! Run &7ix!crate help&f for help!')
            break;

        }
    }
};