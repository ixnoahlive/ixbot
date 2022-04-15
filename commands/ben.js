const responses = ["*hangs up*","Blehhh!","Yes","No","Hohoho!","SPECIAL1"]
const { clean } = require('../utils');

function mock (input) {
    var res = "";
    for (i=0; i < input.length; i++) {
       res += i % 2 == 0 ? input.charAt(i).toUpperCase() : input.charAt(i);
    }
    return res;  
}

module.exports = {
    name: 'ben',
    access: 'public',
    execute(client, args, uuid) {
        if (args.length === 0) {client.chat('Ask Ben something!');return;}
        client.chat(responses[Math.floor(Math.random() * responses.length)].replace('SPECIAL1', clean(mock(args.join(' ')))))
    }
};