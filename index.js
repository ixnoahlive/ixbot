const fs = require('fs');
const kc = require('./kc');
var config = require('./config.json'); // Changed to var since config will not be a constant when updated from the fs.
const cmdgreet = require('./resources/greetings.json');
const credentials = require('./credentials.json');
const cooldownList = new Set();

const commandsdir = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const client = kc.createClient({
    host: 'freedom.play.totalfreedom.me',
    port: 25565,
    username: credentials.email,
    password: credentials.pass,
    auth: 'microsoft'
});

function reaquire(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
}

fs.watch(join(__dirname), (_, filename) => {
  if(fs.existsSync(join(__dirname, filename))) {
    switch(filename){ // Check the modified file.
       case "config.json":
       reaquire("./" + filename)
        setTimeout(()=>{
        config = require("./" + filename); // Wait and reassign the value (this will be very quick)
        }, 150);
        break;
    }
  }
});

let publiccommands = {};

for (const file of commandsdir) {
    const command = require(`./commands/${file}`);
    publiccommands[command.name] = command;
}


client.on('login', () => {
    //client.chat('/me &bis currently a &6bot&b. Type &aix!help&b for help.');
    //client.chat('/tag set &8[&eBot&8]');

    if (config.options.tponjoin == true) client.chat(`/tp ${config.options.tponjoincoords}`)

    client.on('player_join_late', function (player) { // If this event doesn't fire, update your Kumcraft version.
        if (!config.welcomepeople) return;
        client.chat(cmdgreet[Math.floor(Math.random() * cmdgreet.length)].replace('[player]', player.name));
    });
});



client.on('parsed_chat', (message, uuid) => {
    if (uuid === client._client.uuid) return; // Checks if the message is from the bot

    const matches = message.match(/^.+ §(?:#[a-fA-F0-9]{6}|.)(.+)§r §8» (?:§(?:#[a-fA-F0-9]{6}|.)| )+(.+)/); //tfw i have to use REGEX to parse chat messages (I blame totalfreedom)
    if (!matches) return; // Couldn't parse chat message. Likely not a player chat.

    const username = matches[1];
    message = matches[2];
    if (!message.startsWith(config.prefix)) return;
    if (config.blacklist.includes(uuid)) return client.chat(`/msg ${uuid} You are blacklisted.`); // Both Essentials' and TotalFreedom's /tell command accept UUIDs.

    const args = message.split(' ').slice(1);
    const command = message.split(' ')[0].substring(config.prefix.length);

    if (!publiccommands[command]) return;
    if (publiccommands[command].access=="staff") {
        if (!config.staff.includes(uuid)) {client.chat(`/msg ${client.players[uuid]} No access!`);return}
        publiccommands[command].execute(client, args, uuid);
        return
    }
     if(!config.staff.includes(uuid) && cooldownList.has(uuid)) {
                client.chat(`/msg ${uuid} You are on a cooldown!`); // Message the player that they are on a cooldown
                return;
              } else {
                  cooldownList.add(uuid); // Add the player's uuid to the cooldown list
                  setTimeout(() => {
                    cooldownList.delete(uuid); // Remove the players uuid from the cooldown list after the period
                    return;
                  }, 1500);
              }
    
    publiccommands[command].execute(client, args, uuid);
});



client.on('parsed_chat_ansi', console.log.bind(this, `[CHAT]`));

process.stdin.on('data', function (data) {
    const str = data.toString();
    if (str.startsWith('>>>')) {
        eval(str.replace('>>>',''))
        return
    } else if (str.startsWith('>>')) {
        publiccommands[str.replace('>>','')].execute()
    }
    client.chat(str.replace(/[\r\n]/g, ''));
});
