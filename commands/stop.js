module.exports = {
    name: 'stop',
    access: 'staff',
    execute(client, args, uuid) {
        console.log('[BOT] Process ended by staff user.')
        process.exit(0)
    }
};