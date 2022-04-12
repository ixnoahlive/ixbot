const fs = require("fs");

module.exports = {
    name: "help",
    access: "public",
    execute(message, uuid, client) {
        const commands = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));
        client.chat(`Commands: ${commands.join(", ").replace(/\.js/g, '')}`);
    }
};