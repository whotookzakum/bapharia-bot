const { SlashCommandBuilder } = require('discord.js');
const { getRoleSelectors } = require('../../Functions/roleSelectors');
const text = require("../../Text/en/commands.json");
const { name, description } = text.roles

module.exports = {
    data: new SlashCommandBuilder()
        .setName(name)
        .setDescription(description),
    execute(interaction) {
        return interaction.reply(getRoleSelectors(interaction))
    },
};

