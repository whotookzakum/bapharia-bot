const { SlashCommandBuilder } = require('discord.js');
const { getLiquidMemoriesInfo } = require('../../Functions/liquidMemoriesInfo');
const text = require("../../Text/en/commands.json");
const { name, description, options } = text.liquidmemories

module.exports = {
    data: new SlashCommandBuilder()
        .setName(name)
        .setDescription(description)
        .addStringOption(option =>
            option
                .setName(options[0].name)
                .setDescription(options[0].description)
                .addChoices(
                    { name: 'Yellow', value: 'yellow' },
                    { name: 'Blue', value: 'blue' },
                    { name: 'Red', value: 'red' },
                    { name: 'Purple', value: 'purple' },
                    { name: 'Green', value: 'green' },
                )),
    execute(interaction) {
        const selection = interaction.options.getString(options[0].name)
        return interaction.reply(getLiquidMemoriesInfo(selection))
    },
};