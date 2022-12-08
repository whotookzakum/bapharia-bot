const { SlashCommandBuilder } = require('discord.js');
const { getRoleSelectors } = require('../../Functions/roleSelectors');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roles')
        .setDescription('Choose roles to assign to yourself.'),
    execute(interaction) {
        return interaction.reply(getRoleSelectors(interaction))
    },
};

