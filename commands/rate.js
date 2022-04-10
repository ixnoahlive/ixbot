module.exports = {
    name: "rate",
    access: "public",
    execute(message, uuid, client){
        switch (message) {
            case "you":
                var thing2rate = "myself"
                break;
            case "me":
                var thing2rate = "you"
                break;
            default:
                var thing2rate = message.replace('ix!rate ','')
                break;
        }
        if (!thing2rate.length<1) {client.chat('Enter something to rate!');return}
        client.chat(`I rate ${thing2rate} ${Math.floor(Math.random() * 6)}/5 stars!`)
    }
};