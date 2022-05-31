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
    var number = Math.floor(Math.random() * 100)
    if (number<50) {
        return "common"
    } else if (number<78) {
        return "uncommon"
    } else if (number<92) {
        return "rare"
    } else if (number<99) {
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
    name: 'crate',
    access: 'public',
    execute(client, args, uuid) {
        let config = require('../config.json')
        let cmdtime = new Date().getTime()
        let margs;
        if (args[0]) margs = args[0].toLowerCase() 
        switch (margs) {

            case "help":
                client.chat(`/msg ${uuid} &9&lCrate Commands: &3help, open, timer, inventory`)
            break;

            case "timer":
                client.chat(`Next Crate: &7${makeTime(config.crates.nextOpen-cmdtime)=='00:00' ? '&aNow!' : makeTime(config.crates.nextOpen-cmdtime)}`)
            break;

            case "open":
                if (cmdtime>config.crates.nextOpen || args[1]=="-f" && config.staff.includes(uuid)) {
                    config.crates.nextOpen = cmdtime+300000
                    fs.writeFileSync('config.json', JSON.stringify(config, null, " "))
                    path.join(__dirname, 'config.json')
                    let rolledItem = rollItem()


                    function stuffGiver(doc) {
                        if (doc.inventory == undefined) {
                            doc.inventory = new Object
                            doc.inventory.items = new Object
                        } 
                        if (Object.keys(doc.inventory.items).includes(crateData[rolledItem[1]][rolledItem[2]])) { 
                            doc.inventory.items[ Object.keys(crateData[rolledItem[1]])[rolledItem[2]]].amount++
                         } else {
                             rolledItem[0].rarity = rolledItem[1]
                             doc.inventory.items[ Object.keys(crateData[rolledItem[1]])[rolledItem[2]]] = rolledItem[0]
                         }
                         ecodb.put(doc)
                    }


                    ecodb.get(uuid).catch((error) => {
                        let template = new Object
                        template._id = uuid
                        console.log("1")
                        ecodb.put(template)
                    })
                    ecodb.get(uuid).then((doc) => {
                        stuffGiver(doc)
                    }).catch((error) => {
                        console.log(error)
                        ecodb.get(uuid).then((doc) => {
                            stuffGiver(doc)
                        }).catch(() => {
                            return "Checked"
                        })
                    })
                    setTimeout(() => client.chat(`&#73ffcc&lCRATE! &#339cde${client.players[uuid].name}&#e3f4ff opened the crate and got &${rarityColor(rolledItem[1])}&o${rolledItem[0].name}`), 0)
                    
                } else {
                    client.chat(`Next Crate: &7${makeTime(config.crates.nextOpen-cmdtime)=='00:00' ? '&aNow!' : makeTime(config.crates.nextOpen-cmdtime)}`)
                }
            break;
            
            case "i":
            case "inv":
            case "inventory":
                ecodb.get(uuid).then((doc) => {
                    client.chat(`/msg ${uuid} Viewing full inventory is temporarily disabled. You have &7${Object.keys(doc.inventory.items).length}&r unique item(s)!`)
                    
                    let i = 0
                    function looper1() {
                        setTimeout(function() {
                        let item = doc.inventory.items[Object.keys(doc.inventory.items)[i]]
                        client.chat(`/msg ${uuid} ${typeof item.rarity == "string" ? `&${rarityColor(item.rarity)}[${item.rarity.toUpperCase()}]&r ` : `&7[?]&r`} ${item.name} ${item.amount>1 ? `(x${item.amount})` : ``}`)
                            i++
                            if (i<Object.keys(doc.inventory.items).length) {
                                looper1()
                            }
                        }, 1150)
                    } 
                    //looper1()


                }).catch((error) => {
                    client.chat(`/msg ${uuid} &fYour inventory is empty!`)
                    console.log(error)
                })
                
            break;
            
            case "special":
                client.chat('No special crates are available at this time!')    
            break;

            default:
                return client.chat('&fInvalid argument! Run &7ix!crate help&f for help!')
           

        }
    }
};