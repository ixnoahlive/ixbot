const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./config.json'))
const owner = '58583751-5da7-46fa-834b-1e82c75295fb'

module.exports = {
    name: 'blacklist',
    access: 'ingame',
    execute(client, args, uuid) {
      if (uuid != owner) return;
      if (args.length === 0) return client.chat('A valid UUID must be provided');
      
      config.blacklist.push(args[0]);

      var data = JSON.stringify(config);
      fs.writeFile("./config.json", data, (err) => {
        if (err) throw err;
        client.chat(`${args[0]} added to blacklist.`)
      });
    }
};
