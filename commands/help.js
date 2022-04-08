module.exports = {
    name: "help",
    access: "public",
    execute(message, uuid, client){
        const fs = require("fs")
        const commandsdir = fs.readdirSync("./commands").filter(file => file.endsWith('.js'))
        client.chat(`Commands: ${commandsdir.join(", ").replace(/\.js/g,'')}`)
    }
};