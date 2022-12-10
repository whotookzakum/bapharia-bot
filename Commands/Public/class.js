const { SlashCommandBuilder } = require('discord.js');
const { getClassInfo } = require('../../Functions/classInfo');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('class')
        .setDescription('Information about the available classes.')
        .addStringOption(option =>
            option
                .setName('class')
                .setDescription('Information about a specific class.')
                .addChoices(
                    { name: 'Aegis Fighter', value: 'aegis-fighter' },
                    { name: 'Blast Archer', value: 'blast-archer' },
                    { name: 'Spell Caster', value: 'spell-caster' },
                    { name: 'Twin Striker', value: 'twin-striker' },
                )),
    execute(interaction) {
        const selection = interaction.options.getString('class')
        return interaction.reply(getClassInfo(selection))
    },
};