module.exports = {
    name: "guidelines",
    access: "public",
    execute(message, uuid, client) {
        client.chat(`/msg ${client.players[uuid].name} ixBot Rules`);
        client.chat(`/msg ${client.players[uuid].name} By using the bot you agree to the guidelines below:`);
        client.chat(`/msg ${client.players[uuid].name} - You acknowledge that you can be blacklisted at any time without the need for valid reason.`);
        client.chat(`/msg ${client.players[uuid].name} - You are responsible for how you use the bot, this involves using it to break TotalFreedom rules in which case you will be blacklisted from using the bot.`);
        client.chat(`/msg ${client.players[uuid].name} - You will not attempt to buy, sell, or steal the bot. You may use ideas from the bot for personal projects.`);
        client.chat(`/msg ${client.players[uuid].name} - You will not be allowed to bypass being blacklisted from the bot using an alternate account or method.`);
    }
};