const cmd8ball = require('../resources/8ball.json')
const { choose } = require('../utils.js')
const cmd8balltypes = ["yes","no","maybe"]
module.exports = {
    name: '8ball',
    access: 'public',
    execute(client, args, uuid) {
        
        client.chat(`You shake the magic 8ball... it answers: ${choose(cmd8ball[choose(cmd8balltypes)])}`);
    }
};