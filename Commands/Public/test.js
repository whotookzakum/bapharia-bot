const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');

const strings = {
    en: "Hello",
    ja: "こんにちは"
}

const embed1 = new EmbedBuilder()
.setTitle("testing yo")
.setURL("https://bapharia.com")
.setImage("https://bapharia.com/guides/imagine/thumb.webp")

const embed2 = new EmbedBuilder()
.setTitle("testing yo")
.setURL("https://bapharia.com")
.setImage("https://bapharia.com/guides/teams/thumb.webp")


module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('testing localization desu'),

    execute(interaction) {
        let locale = interaction.locale
        if (locale.includes('en')) locale = 'en'

        return interaction.reply({ embeds: [embed1, embed2], ephemeral: true })

        return interaction.reply({ content: strings[locale], ephemeral: false })
    },
};