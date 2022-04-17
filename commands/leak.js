const passwords = ["hunter2","12345678","IamABigFemboyThighEnjoyer","FreeRobux","ixNoahIsCool","YouCantHackMe","password","wordpass","markbyronismydaddy","ottothecat","imgayandnobodyknows","erinisanegirl","nocom","qwertyuiop","football","babyyodabestmeme","dreamstansarecool","access","admin","welcome","trustno1","No password"]

const { clean } = require('../utils.js')

module.exports = {
    name: 'leak',
    access: 'public',
    execute(client, args, uuid) {
        if (args.length === 0) return client.chat(`ENTER SOMEONE TO LEAK/DOXX!!!! (UNPATCHED)`);
        client.chat(`EPIC LEAK [NAME: ${clean(args)}, COORDINATES: ${Math.floor(Math.random() * 694201337)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 694201337)}, PASSWORD: ${passwords[Math.floor(Math.random() * passwords.length)]}, IP: ${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}]`)
    }
};