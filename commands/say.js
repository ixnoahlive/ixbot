module.exports = {
    name: 'say',
    access: 'staff',
    execute(client, args, uuid) {
        client.chat(args.join(' ').replace('§', '&'))
    }
};