module.exports = {
    name: "uwu",
    access: "ingame",
    execute(message, uuid, client){
        var actions = ["*blushes*","*whispers to self*","*cries*","*screams*","*sweats*","*twerks*","*runs away*","*screeches*","*walks away*","*sees bulge*","*looks at you*","*notices buldge*","*starts twerking*","*huggles tightly*","*boops your nose*",]
        var faces = ["(・`ω´・)",";;w;;","OwO","UwU",">w<","^w^","ÚwÚ","^-^"," :3"," x3",]
        function uwu(text) {
            var ending = `${actions[Math.floor(Math.random() * actions.length)] + " " + faces[Math.floor(Math.random() * faces.length)]}`
            return text
            .replace(/(?:r|l)/g, "w")
            .replace(/(?:R|L)/g, 'W')
            .replace(/ove/g, "uv")
            .replace(/ome/g, 'um') + ' ' + ending
        }

        if (message == "ix!uwu") { client.chat("Enter something to uwu!");return }
        var thingy = uwu(message.replace('ix!uwu ', '')).replace(/\u00a7/g,'')
        if (thingy.startsWith('/') || thingy.startsWith(' ') || message.includes('${') || thingy.startsWith('&')) {
            client.chat(uwu('make something idiot proof and someone will just invent a better idiot'))
            return
        }
        client.chat(thingy)
    }
}