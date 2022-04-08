module.exports = {
    name: "dice",
    access: "public",
    execute(message, uuid, client){
        client.chat(`You rolled a ${Math.floor(Math.random() * 6)+1}!`)
    }
};