const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('welcome')
        .setDescription('Welcome message.'),
    execute(interaction) {
        const embeds = [
            {
                title: "🎉 Welcome to Bapharia's Guidance!",
                description: "We are the premier information hub for BLUE PROTOCOL.\nVisit [bapharia.com](https://bapharia.com) to learn more about the game!",
                color: 0x0099ff
            },
            {
                title: "📕 Rules",
                description: "**```1️⃣ Don't be overly weird or an asshole.```**",
                color: 0xe9365d
            },
            {
                title: "🏅 Roles & Commands",
                description: "Roles can be assigned in <id:customize>. Use **/help** to view commands.",
                color: 0x53d35e
            },
        ]
        interaction.deferReply();
        interaction.deleteReply();
        return interaction.channel.send({ embeds });
    },
};