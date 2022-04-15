# <img src="https://cdn.discordapp.com/attachments/878545066845700106/963399481158668348/ixbotlogo.png" height="35"> ixbot

A variety Minecraft bot mainly used for in-game chat.

[Join our development server!](https://discord.gg/hJ34ZpMtbB)

## Installation

There currently aren't any plans for an official executable or release, so you will have to install the zip and all of the dependencies.

### Dependencies

- Node Minecraft Protocol
- Vec3
- Prismarine
- Kumcraft

## Usage

Create a credentials.json file formatted as such:
```json
{
  "email":"example@mail.com",
  "pass":"hunter2"
}
```
Also, make sure to adjust the client settings in index.js to the server of your liking, keep in mind that it might break chat parsing.

You can use the commands folder to make a command as a js file using this template.
```js
module.exports = {
    name: "mycommand", // The name of your command.
    access: "public", // public: anyone can use, ingame: only people with a valid uuid can use, staff: only staff in config.json can use
    execute(client, args, uuid){
        // Put code here to execute.
    }
};
```

Start the bot using startwindows.bat or start.sh.

You can also use Node, as seen below.
```
node index.js
```

## To-Do
- [ ] Parse & Support Discord users to run commands
- [ ] Log messages to Discord channel
- [ ] Proper public webpage with stuff like help & other info

## License
[MIT](https://choosealicense.com/licenses/mit/)
