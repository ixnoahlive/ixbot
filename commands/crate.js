const fs = require('fs')
const path = require('path')
const { makeTime } = require('../utils')
const crateData = require('../resources/crate.json')

module.exports = {
    name: 'crate',
    access: 'staff',
    execute(client, args, uuid) {
        let config = require('../config.json')
        let cmdtime = new Date().getTime()
        switch (args[0]) {
            case "help":
                client.chat(`/emsg ${uuid} &9&lCrate Commands: &3help, open, timer`)
            break;
            case "timer":
                client.chat(`Time until crate is available: &7${makeTime(config.crates.nextOpen-cmdtime)=='00:00' ? '&aNow!' : makeTime(config.crates.nextOpen-cmdtime)}`)
            break;
            case "open":
                
                if (cmdtime>config.crates.nextOpen) {
                    config.crates.nextOpen = cmdtime+300000
                    fs.writeFileSync('config.json', JSON.stringify(config, null, " "))
                    path.join(__dirname, 'config.json')
                    client.chat(crateData[Math.floor(Math.random() * crateData.length)].replace("%name%",client.players[uuid].name))
                    setTimeout(() => client.chat(`&a&lCRATE! &3${client.players[uuid].name}&b opened the crate and got an item!`), 100)
                    
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