module.exports = {
    name: 'discord',
    access: 'ingame',
    execute(client, args, uuid) {
        client.chat(`/msg ${uuid} Join the Public Discord Server: https://discord.gg/Qqr2U8796c`);
    }
};