const { SlashCommandBuilder } = require('discord.js');
const { getImagineInfo } = require('../../Functions/imagineInfo');
const text = require("../../Text/en/commands.json");
const { name, description } = text.imagine

module.exports = {
    data: new SlashCommandBuilder()
        .setName(name)
        .setDescription(description),

    execute(interaction) {
        return interaction.reply(getImagineInfo())
    },
};