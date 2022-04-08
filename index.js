const mc = require('minecraft-protocol')
const fs = require('fs')
const kc = require('./kc')
const readline = require('readline')


var publiccommands = {}

// Command specific feature helper

const cmdgreet = ["Welcome, [player]!","Oh hi, [player]!","hi [player]","Hey, [player]!","wb [player]","What's popping, [player]?","How are you doing, [player]?","Hello, [player]!","Greetings, [player]!","Nice to see you, [player]!","sup [player]","oh hi [player]"]
//const cmdyomama = fs.readFileSync("./resources/yomama.txt")
// Loading some vital jsons!
const config = JSON.parse(fs.readFileSync('config.json'))
const credentials = JSON.parse(fs.readFileSync('credentials.json'))
const serverlist = JSON.parse(fs.readFileSync('serverlist.json'))


const client = kc.createClient({
    host: serverlist[server],
    port: 25565,
    username: credentials.email,
    password: credentials.pass,
    auth: 'microsoft'
})

var cmdoff = false;

client.on("login", () => {
   client.chat("/me &bis currently a &6bot&b. View it's commands with &aix!help&b.")
   
    setTimeout(function() {
        cmdoff = true;
    }, 1000);
        client.on('player_join', function(player) {
        if (!cmdoff) return;
        client.chat(cmdgreet[Math.floor(Math.random() * cmdgreet.length)].replace('[player]', player.name))
    });
})

// commands mate :P
const commandsdir = fs.readdirSync("./commands").filter(file => file.endsWith('.js'))

for(const file of commandsdir){
    const command_1 = require(`./commands/${file}`);
    publiccommands [command_1.name] = command_1;
}

var command = "fail"
client.on("parsed_chat", (message, uuid) => {
    // Checks if commands are off, if the message is from the bot, and if it doesnt contains the prefix. If any is met it will return.
    if (!cmdoff || uuid=="58583751-5da7-46fa-834b-1e82c75295fb" || !message.includes(config.prefix)) return;

    let temp = message.split(" ")
    temp.forEach(function(item, index){
        if (!item.startsWith("ix!")) {return} else {var commandindex = index}
        command = temp[commandindex].replace("ix!","")
    })
   
    if (publiccommands.hasOwnProperty(command)) {
        publiccommands[command].execute(message, uuid, client)
    } else {
       return
    }
    


    /*switch (true) {
        case message.includes('ix!ping'):
            if (!client.players[uuid]) {client.chat("You aren't ingame!");return}
            client.chat(client.players[uuid].ping)
        break;
        case message.includes("ix!help"):
            client.chat(`Commands: ${publiccommands.sort().join(", ")}`)
        break;
        case message.includes("ix!dice"):
            client.chat(`You rolled a ${Math.floor(Math.random() * 6)+1}!`)
        break;
        case message.includes("ix!amihandsome"):
            client.chat(`why would you care if a bot calls you handsome :(`)
        break;
        case message.includes("ix!rateme"):
            client.chat(`I rate you ${Math.floor(Math.random() * 6)}/5 stars!`)
        break;
        case message.includes("ix!8ball"):
            client.chat(`You shake the magic 8ball... it answers: ${cmd8ball[Math.floor(Math.random()*cmd8ball.length)]}`)
        break;
        case message.includes("ix!list"):
            client.chat(`There are ${Object.keys(client.players).length}/75 online players.`)
            client.chat(`${Object.values(client.players).map(p => p.name).join(', ')}`)
            client.chat("ix!list is temporarily disabled due to a bug relating to ignoring people in /vanish. Expect a fix soon!")
        break;
        case message.includes("ix!balls"):
        case message.includes("ix!sex"):
        case message.includes("ix!vore"):
            client.chat(`Not on my christian minecraft server!`)
        break;
        case message.includes("ix!bot"):
            client.chat(`Bot made with Kumcraft & Node Minecraft Protocol • Special thanks to Luna, Allink & Eva!`)    
        break;
    }
}*/
})


client.on('parsed_chat_ansi', console.log.bind(this, `[CHAT]`))

