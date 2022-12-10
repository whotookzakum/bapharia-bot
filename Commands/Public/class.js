const { SlashCommandBuilder } = require('discord.js');
const { getClassInfo } = require('../../Functions/classInfo');
const text = require("../../Text/en/classes.json");
const cmdText = require("../../Text/en/commands.json");

module.exports = {
    data: new SlashCommandBuilder()
        .setName(cmdText.class.name)
        .setDescription(cmdText.class.description)
        .addStringOption(option =>
            option
                .setName(cmdText.class.options[0].name)
                .setDescription(cmdText.class.options[0].description)
                .addChoices(
                    { name: text.classes["aegis-fighter"].name, value: text.classes["aegis-fighter"].uri },
                    { name: text.classes["blast-archer"].name, value: text.classes["blast-archer"].uri },
                    { name: text.classes["spell-caster"].name, value: text.classes["spell-caster"].uri },
                    { name: text.classes["twin-striker"].name, value: text.classes["twin-striker"].uri }
                )),
    execute(interaction) {
        const selection = interaction.options.getString(cmdText.class.options[0].name)
        return interaction.reply(getClassInfo(selection))
    },
};