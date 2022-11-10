const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('List of all bot commands!'),
    execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle(`Help`)
            .setDescription(
                `Below is a list of commands you can use with this bot. Messages are only visible to you, so feel free to use commands in any channel.

                If you are experiencing issues, please send a detailed private message to one of the moderators.`
            )
            .setColor(0xe7d86a)
            .addFields(
                { name: `/help`, value: `List of all bot commands!` },
                { name: `/class`, value: `Information about the available classes.` },
                { name: `/liquidmemories`, value: `Information about the available Liquid Memories.` }
            )
            .setThumbnail(`https://github.com/whotookzakum/bapharia.com/blob/live-site/images/crafting/light.png?raw=true`)
            .setFooter({ text: 'Bapharia.com' })

        // TODO: scan through all commands and dynamically list their name and description in fields
        const buttons = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Classes')
                    .setCustomId('help_button_classes')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setLabel('Liquid Memories')
                    .setCustomId('help_button_liquidmemories')
                    .setStyle(ButtonStyle.Primary)
            )

        return interaction.reply({ embeds: [embed], components: [buttons], ephemeral: true })
    },
};