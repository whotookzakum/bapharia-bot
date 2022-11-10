const { SlashCommandBuilder } = require('discord.js');
const { getLiquidMemoriesInfo } = require('../../Functions/liquidMemoriesInfo');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('liquidmemories')
        .setDescription('Information about the available Liquid Memories.')
        .addStringOption(option =>
            option
                .setName('color')
                .setDescription('Information about a specific class.')
                .addChoices(
                    { name: 'Yellow', value: 'yellow' },
                    { name: 'Blue', value: 'blue' },
                    { name: 'Red', value: 'red' },
                    { name: 'Purple', value: 'purple' },
                    { name: 'Green', value: 'green' },
                )),
    execute(interaction) {
        const selection = interaction.options.getString('color')
        return interaction.reply(getLiquidMemoriesInfo(selection))
    },
};