const { clean } = require('../utils');

module.exports = {
    name: 'rate',
    access: 'ingame',
    execute(client, args, uuid) {

        if (args.length < 1) return client.chat('Enter something to rate!');
        let thing2rate;
        let rating = Math.floor(Math.random() * 6)
        switch (args[0].toLowerCase()) {
            case 'ixalt':
            case 'ixbot':
            case 'you':
                thing2rate = 'myself';
                rating = 5
                break;
            case 'myself':
            case 'me':
                thing2rate = 'you';
                break;
            case 'ixnoah':
            case 'noah':
                rating = 5
            break;
            case 'stevennl':
            case 'steven':
            case 'stevennl2000':
                rating = "∞"
            default:
                thing2rate = args.join(' ');
                break;
        }
        
        client.chat(`I rate ${clean(thing2rate)} ${rating}/5 stars!`);
    }
};
