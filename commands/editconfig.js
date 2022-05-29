const config = require('../config.json')
module.exports = {
    name: 'editconfig',
    access: 'owner',
    execute(client, args, uuid) {
        eval(args[0])
    }
};