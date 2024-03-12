const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const text = require("../../Text/en/commands.json");
const { name, description } = text.help
const embedText = require("../../Text/en/help.json");

module.exports = {
    data: new SlashCommandBuilder()
        .setName(name)
        .setDescription(description),
    execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle(embedText.title)
            .setDescription(embedText.description)
            .setColor(parseInt(embedText.color, 16))
            .addFields(
                ...Object.keys(text).map(command => (
                    { name: `/${text[command].name}`, value: text[command].description }
                ))
            )
            .setThumbnail(embedText.thumbnailUrl)

        const buttons = new ActionRowBuilder()
            .addComponents(
                ...Object.keys(text).filter(command => command !== "help").map(command =>
                    new ButtonBuilder()
                        .setLabel(text[command].buttonText)
                        .setCustomId(`help_button_${text[command].name}`)
                        .setStyle(ButtonStyle.Primary),
                )
            )

        return interaction.reply({ 
            embeds: [embed], 
            // components: [buttons], // only 5 buttons max
            ephemeral: true 
        })
    },
};