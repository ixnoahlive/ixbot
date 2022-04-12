module.exports = {
    name: "glow",
    access: "public",
    execute(message, uuid, client) {
        client.chat('/glow');
        client.chat('Glow has been toggled!');
    }
};