const fs = require('fs');
const config = require('./config.json');
module.exports = {
    name: 'help',
    access: 'public',
    execute(client, args, uuid) {
        const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
         for (var i = 0; i < commands.length; i++) {
          if(commands[i].access=="staff") {
              if(!config.staff.includes(uuid)){
             commands.splice(i, 1); 
              }
           }
        client.chat(`Commands: &7${commands.join(', ').replace(/\.js/g, '')}`);
    }
};
