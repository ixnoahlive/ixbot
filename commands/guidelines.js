module.exports = {
    name: 'guidelines',
    access: 'public',
    execute(client, args, uuid) {
        client.chat(`/msg ${uuid} https://github.com/NoahTheNerd/NoahTheNerd/blob/main/ixbot/guidelines.md`);
    }
};