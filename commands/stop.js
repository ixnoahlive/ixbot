module.exports = {
    name: 'stop',
    access: 'staff',
    execute(client, args, uuid) {
        client.chat("&cTerminating process...")
        console.log('[INFO] Process ended by staff user. Exit code: ', args)
        setTimeout(() => {process.exit(!args ? 0 : args)}, 250)
    }
};