const config = require('../config.json')
const PouchDB = require('pouchdb')
const ecodb = new PouchDB('db/economy')
module.exports = {
    name: 'ecoclear',
    access: 'owner',
    execute(client, args, uuid) {
        if (args[0]) {
            ecodb.get(args[0]).then((doc) => ecodb.remove(doc))
        } else {
            ecodb.get(uuid).then((doc) => ecodb.remove(doc))
        }
    }
};