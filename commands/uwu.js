const { clean } = require('../utils');

const actions = ['*blushes*', '*whispers to self*', '*cries*', '*screams*', '*sweats*', '*twerks*', '*runs away*', '*screeches*', '*walks away*', '*sees bulge*', '*looks at you*', '*notices buldge*', '*starts twerking*', '*huggles tightly*', '*boops your nose*'];
const faces = ['(・`ω´・)', ';;w;;', 'OwO', 'UwU', '>w<', '^w^', 'ÚwÚ', '^-^', ' :3', ' x3',];

function uwu(text) {
    var ending = `${actions[Math.floor(Math.random() * actions.length)] + ' ' + faces[Math.floor(Math.random() * faces.length)]}`;
    return text
        .replace(/(?:r|l)/g, 'w')
        .replace(/(?:R|L)/g, 'W')
        .replace(/ove/g, 'uv')
        .replace(/ome/g, 'um') + ' ' + ending;
}

module.exports = {
    name: 'uwu',
    access: 'ingame',
    execute(client, args, uuid) {
        if (args.length === 0) return client.chat('Enter something to uwu!');

        const text = uwu(clean(args.join(' ')));

        client.chat('&r', text);
    }
};
