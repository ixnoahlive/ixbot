
const actions = ["*blushes*", "*whispers to self*", "*cries*", "*screams*", "*sweats*", "*twerks*", "*runs away*", "*screeches*", "*walks away*", "*sees bulge*", "*looks at you*", "*notices buldge*", "*starts twerking*", "*huggles tightly*", "*boops your nose*",];
const faces = ["(・`ω´・)", ";;w;;", "OwO", "UwU", ">w<", "^w^", "ÚwÚ", "^-^", " :3", " x3",];

function uwu(text) {
    var ending = `${actions[Math.floor(Math.random() * actions.length)] + " " + faces[Math.floor(Math.random() * faces.length)]}`;
    return text
        .replace(/(?:r|l)/g, "w")
        .replace(/(?:R|L)/g, 'W')
        .replace(/ove/g, "uv")
        .replace(/ome/g, 'um') + ' ' + ending;
}

module.exports = {
    name: "uwu",
    access: "ingame",
    execute(message, uuid, client) {

        if (message == "ix!uwu") {
            client.chat("Enter something to uwu!");
            return;
        }

        try {
            thingy = uwu(message.replace('ix!uwu ', '')).replace(/\u00a7/g, '');
        } catch (error) {
            thingy = 'w-wha?';
            console.log(error);
        }

        client.chat('&r', thingy);
    }
};
