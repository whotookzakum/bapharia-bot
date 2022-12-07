const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
const { roles } = require('../../Functions/roles');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roles')
        .setDescription('Choose roles to assign to yourself.'),
    execute(interaction) {
        const userRoles = interaction.member._roles

        // Add default values for each selector option based on if the member currently has that role
        Object.keys(roles).forEach(group => {
            roles[group].forEach(role => {
                role.default = userRoles.includes(role.value)
            })
        })
        
        const classesSelector = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId(`role_selector_classes`)
                    .setMinValues(0)
                    .setMaxValues(5)
                    .setPlaceholder(`⚔️ Class roles`)
                    .addOptions(roles.classes)
            )

        const colorsSelector = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId(`role_selector_colors`)
                    .setPlaceholder(`🎨 Color roles`)
                    .setMinValues(0)
                    .setMaxValues(1)
                    .addOptions(roles.colors)
            )

        const languagesSelector = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId(`role_selector_languages`)
                    .setMinValues(0)
                    .setMaxValues(9)
                    .setPlaceholder(`🌐 Language roles`)
                    .addOptions(roles.languages)
            )
        
        return interaction.reply({ components: [classesSelector, colorsSelector, languagesSelector], ephemeral: true });
    },
};

