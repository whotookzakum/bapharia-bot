const { setRandomPresence } = require("../../Functions/updatePresence");
const { loadCommands } = require("../../Handlers/commandHandler")

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("Client is ready!")
        loadCommands(client)
        setRandomPresence(client, 7200) // 2 hours
    }
}