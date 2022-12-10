const { SlashCommandBuilder } = require('discord.js');
const { getLiquidMemoriesInfo } = require('../../Functions/liquidMemoriesInfo');
const text = require("../../Text/en/liquidmemories.json");
const commandTexts = require("../../Text/en/commands.json");
const { name, description, options } = commandTexts.liquidmemories

module.exports = {
    data: new SlashCommandBuilder()
        .setName(name)
        .setDescription(description)
        .addStringOption(option =>
            option
                .setName(options[0].name)
                .setDescription(options[0].description)
                .addChoices(
                    ...Object.keys(text.liquidmemories).map(choice => (
                        { name: text.liquidmemories[choice].name.split(" Liquid Memories")[0], value: choice }
                    ))
                )),
    execute(interaction) {
        const selection = interaction.options.getString(options[0].name)
        return interaction.reply(getLiquidMemoriesInfo(selection))
    },
};