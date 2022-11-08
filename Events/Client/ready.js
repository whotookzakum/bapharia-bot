const { ActivityType } = require("discord.js");
const { loadCommands } = require("../../Handlers/commandHandler")

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("Client is ready!")

        loadCommands(client)

        client.user.setPresence({
            activities: [{ name: `over Regnus`, type: ActivityType.Watching }],
            status: 'online',
        })
    }
}