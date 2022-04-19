const { clean } = require('../utils');

module.exports = {
    name: 'rate',
    access: 'ingame',
    execute(client, args, uuid) {

        let thing2rate;
        let rating = Math.floor(Math.random() * 6)

        switch (args[0].toLowerCase()) {
            case 'ixalt':
            case 'ixbot':
            case 'you':
                thing2rate = 'myself';
                rating = 5
                break;
            case 'me':
                thing2rate = 'you';
                break;
            case 'ixnoah':
            case 'noah':
                rating = 5
            default:
                thing2rate = args.join(' ');
                break;
        }

        if (thing2rate.length < 1) return client.chat('Enter something to rate!');
        
        client.chat(`I rate ${clean(thing2rate)} ${rating}/5 stars!`);
    }
};
