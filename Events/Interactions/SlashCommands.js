const { ChatInputCommandInteraction } = require("discord.js")

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client) {
        if (!interaction.isChatInputCommand()) return

        const command = client.commands.get(interaction.commandName)

        if (!command) return interaction.reply({ content: "Command does not exist.", ephemeral: true })

        if (command.developer && interaction.user.id !== "134492795133100033")
        return interaction.reply({ content: "This is a developer command.", ephemeral: true })

        command.execute(interaction, client)
    }
}