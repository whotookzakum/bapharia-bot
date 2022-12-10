const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { getImagineInfo } = require('../../Functions/imagineInfo');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('imagine')
        .setDescription('Information about all available Imagine.'),
        // .addStringOption(option =>
        //     option
        //         .setName('color')
        //         .setDescription('Information about a specific liquid memory.')
        //         .addChoices(
        //             { name: 'Yellow', value: 'yellow' },
        //             { name: 'Blue', value: 'blue' },
        //             { name: 'Red', value: 'red' },
        //             { name: 'Purple', value: 'purple' },
        //             { name: 'Green', value: 'green' },
        //         )),
    execute(interaction) {
        // const selection = interaction.options.getString('color')
        return interaction.reply(getImagineInfo())
    },
};