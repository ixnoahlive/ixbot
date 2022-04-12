const { clean } = require('../utils');

module.exports = {
    name: "rate",
    access: "ingame",
    execute(client, args, uuid) {

        let thing2rate;

        switch (args[0]) {
            case "you":
                thing2rate = "myself";
                break;
            case "me":
                thing2rate = "you";
                break;
            default:
                thing2rate = args.join(' ');
                break;
        }

        if (!thing2rate.length < 1) return client.chat('Enter something to rate!');
        
        client.chat(`I rate ${clean(thing2rate)} ${Math.floor(Math.random() * 6)}/5 stars!`);
    }
};
