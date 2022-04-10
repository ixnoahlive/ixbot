# ixbot

A variety Minecraft bot mainly used for in-game chat.

## Installation

There currently aren't any plans for an official executable or release, so you will have to install the zip and all of the dependencies.

### Dependencies

- node minecraft protocol
- kumcraft (not publically available, mineflayer can be used as alternative however it is not guaranteed to be compatible.)

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
    access: "public", // This currently does not do anything, but it is planned to be given functionality.
    execute(message, uuid, client){
        // Put code here to execute.
    }
};
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
