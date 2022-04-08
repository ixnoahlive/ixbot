module.exports = {
    name: "rateme",
    access: "public",
    execute(message, uuid, client){
        client.chat(`I rate you ${Math.floor(Math.random() * 6)}/5 stars!`)
    }
};