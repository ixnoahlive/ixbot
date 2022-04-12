module.exports = {
    name: "glow",
    access: "public",
    execute(client, args, uuid) {
        client.chat('/glow');
        client.chat('Glow has been toggled!');
    }
};