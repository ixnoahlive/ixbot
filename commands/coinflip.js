module.exports = {
    name: "coinflip",
    access: "public",
    execute(message, uuid, client) {
        client.chat(`You flip a coin and got ${(Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails'}!`);
    }
};