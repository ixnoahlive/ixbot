const { clean } = require('../utils');

const passwords = ["hunter2","12345678","IamABigFemboyThighEnjoyer","FreeRobux","ixNoahIsCool","YouCantHackMe","password","wordpass","markbyronismydaddy","ottothecat","imgayandnobodyknows","erinisanegirl","nocom","qwertyuiop","football","babyyodabestmeme","dreamstansarecool","access","admin","welcome","trustno1","No password"]

module.exports = {
    name: 'leak',
    access: 'public',
    execute(client, args, uuid) {
        if (args.length === 0) return client.chat(`ENTER SOMEONE TO LEAK/DOXX!!!! (UNPATCHED)`);
        client.chat(`EPIC LEAK &7[NAME: ${clean(args[0])}, COORDINATES: ${(Math.floor(Math.random() * 2) == 0) ? '' : '-'}${Math.floor(Math.random() * 20000)} ${Math.floor(Math.random() * 128)} ${(Math.floor(Math.random() * 2) == 0) ? '' : '-'}${Math.floor(Math.random() * 20000)}, PASSWORD: ${passwords[Math.floor(Math.random() * passwords.length)]}, IP: ${Math.floor(Math.random() * 250)}.${Math.floor(Math.random() * 250)}.${Math.floor(Math.random() * 250)}.${Math.floor(Math.random() * 250)}]`)
    }
};
