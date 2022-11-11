const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');

const strings = {
    en: "Hello",
    ja: "こんにちは"
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('testing localization desu'),
    execute(interaction) {
        let locale = interaction.locale
        if (locale.includes('en')) locale = 'en'
        return interaction.reply({ content: strings[locale], ephemeral: false })
    },
};