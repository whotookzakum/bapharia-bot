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
                    { name: 'Aegis Fighter', value: 'aegisfighter' },
                    { name: 'Blast Archer', value: 'blastarcher' },
                    { name: 'Spell Caster', value: 'spellcaster' },
                    { name: 'Twin Striker', value: 'twinstriker' },
                )),
    execute(interaction) {
        const selection = interaction.options.getString('class')
        return interaction.reply(getClassInfo(selection))
    },
};