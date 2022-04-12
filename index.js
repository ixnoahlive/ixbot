const mc = require('minecraft-protocol')
const fs = require('fs')
const kc = require('./kc')

let credentials = JSON.parse(fs.readFileSync('credentials.json'))
const client = kc.createClient({
    host: "freedom.play.totalfreedom.me",
    port: 25565,
    username: credentials.email,
    password: credentials.pass,
    auth: 'microsoft'
})
credentials = null

let publiccommands = {}
const cmdgreet = ["Welcome, [player]!","Oh hi, [player]!","hi [player]","Hey, [player]!","What's popping, [player]?","How are you doing, [player]?","Hello, [player]!","Greetings, [player]!","Nice to see you, [player]!","sup [player]","oh hi [player]"]

const config = JSON.parse(fs.readFileSync('config.json'))

let cmdoff = false;




const commandsdir = fs.readdirSync("./commands").filter(file => file.endsWith('.js'))
for(const file of commandsdir){
    const command_1 = require(`./commands/${file}`);
    publiccommands [command_1.name] = command_1;
}


let command = "fail"


client.on("parsed_chat", (message, uuid) => {
    // Checks if commands are off, if the message is from the bot, and if it doesnt contains the prefix. If any is met it will return.
    if (!cmdoff || uuid=="58583751-5da7-46fa-834b-1e82c75295fb" || !message.includes(config.prefix)) return;
    if (config.blacklist.includes(uuid)) { client.chat(`/msg ${client.players[uuid].name} You are blacklisted.`);return }
    /*if ( uuid.replace('-', '') == "0000000000000000000000000000000" && message.startsWith('§dWelcome ') ) {
        let name = message.split(' ')
        client.chat(`@${name[2]} Make sure to read /rules and enjoy your stay!`)
    }*/
    cmdoff = true
    let lovely = message.replace(/^.+ §(?:#[a-fA-F0-9]{6}|.)(.+)§r §8» /, '').replace(/§+[A-z]|§+[0-9]/, '')
    if (!lovely.startsWith("ix!")) {return}
    
    command = message.replace(/^.+ §(?:#[a-fA-F0-9]{6}|.)(.+)§r §8» /i, '')
    .replace(/§+[a-z]|§+[0-9]/i, '').split(' ')
    command = command[0].replace('ix!','')

    if (publiccommands.hasOwnProperty(command)) {
        //if (uuid=="0000000000000000000000000000000" && publiccommands[command].access=="ingame") {client.chat('This command is unavailable for Discord users.');return}
        publiccommands[command].execute(lovely, uuid, client)
    } else return
    setTimeout(function() {
        cmdoff = true;
    }, 2000);
})




fs.watchFile('./message.json', () => {
    let hostsender = JSON.parse(fs.readFileSync('message.json'))
    client.chat(hostsender.text)
    return
})




client.on('parsed_chat_ansi', console.log.bind(this, `[CHAT]`))
client.on("login", () => {
    client.chat("/me &bis currently a &6bot&b. Type &aix!help&b for help.")
    client.chat("/tag set &8[&eBot&8]")
   
    setTimeout(function() {
        cmdoff = true;
    }, 1000);
        client.on('player_join', function(player) {
        if (!cmdoff) return;
        client.chat(cmdgreet[Math.floor(Math.random() * cmdgreet.length)].replace('[player]', player.name))
    });
})