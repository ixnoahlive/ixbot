module.exports = {
    name: "dice",
    access: "public",
    execute(client, args, uuid) {
        client.chat(`You rolled a ${Math.floor(Math.random() * 6) + 1}!`);
    }
};