const { SlashCommandBuilder } = require('discord.js');
const { getClassInfo } = require('../../Functions/classInfo');
const text = require("../../Text/en/classes.json");
const commandTexts = require("../../Text/en/commands.json");
const { name, description, options } = commandTexts.class

module.exports = {
    data: new SlashCommandBuilder()
        .setName(name)
        .setDescription(description)
        .addStringOption(option =>
            option
                .setName(options[0].name)
                .setDescription(options[0].description)
                .addChoices(
                    ...Object.keys(text.classes).map(choice => (
                        { name: text.classes[choice].name, value: text.classes[choice].uri }
                    ))
                )),
    execute(interaction) {
        const selection = interaction.options.getString(options[0].name)
        return interaction.reply(getClassInfo(selection))
    },
};