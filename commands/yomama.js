const fs = require('fs')
const yomama = JSON.parse(fs.readFileSync('./resources/yomama.json'))

module.exports = {
    name: 'yomama',
    access: 'public',
    execute(client, args, uuid) {
        client.chat(yomama[Math.floor(Math.random() * yomama.length)]);
    }
};