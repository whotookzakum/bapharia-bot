module.exports = {
    name: "interactionCreate",
    execute(interaction) {
        // Log user and command used
        const userInput = interaction.commandName ? `/${interaction.commandName}` : interaction.customId
        console.log(`${interaction.user.username}#${interaction.user.discriminator} used ${userInput}`)
    }
}