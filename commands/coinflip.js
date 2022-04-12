module.exports = {
    name: 'coinflip',
    access: 'public',
    execute(client, args, uuid) {
        client.chat(`You flip a coin and got ${(Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails'}!`);
    }
};