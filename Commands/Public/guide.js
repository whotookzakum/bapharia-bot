const { SlashCommandBuilder } = require('discord.js');
const commandTexts = require("../../Text/en/commands.json");
const { getGuideLink } = require('../../Functions/guides');
const { name, description, options } = commandTexts.guide

module.exports = {
    data: new SlashCommandBuilder()
        .setName(name)
        .setDescription(description)
        .addStringOption(option =>
            option
                .setName(options[0].name)
                .setDescription(options[0].description)
                .addChoices(
                    {
                        name: "Imagine",
                        value: "imagine"
                    },
                    {
                        name: "Weapons & Plugs",
                        value: "weapons-and-plugs"
                    }
                )
        ),
    execute(interaction) {
        const selection = interaction.options.getString(options[0].name)
        console.log(selection)
        return interaction.reply(getGuideLink(selection))
    },
};