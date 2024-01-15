const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('welcome')
        .setDescription('Welcome message.'),
    execute(interaction) {

        const welcome = new EmbedBuilder()
            .setTitle(`🎉 Welcome to Bapharia's Guidance!`)
            .setDescription(
                `We are the premier information hub for BLUE PROTOCOL.\nVisit [bapharia.com](https://bapharia.com) to learn more about the game!`
            )
            .setColor(0x0099ff)

        const rules = new EmbedBuilder()
            .setTitle(`📕 Rules`)
            .setDescription(
                "**```1️⃣ Don't be overly weird or an asshole.```**"
            )
            .setColor(0xe9365d)

        const commands = new EmbedBuilder()
            .setTitle(`🏅 Roles & Commands`)
            .setDescription(
                `Roles can be assigned in <id:customize>. Use **/help** to view commands.` // <id:guide> for server guide
            )
            .setColor(0x53d35e)

        interaction.deferReply();
        interaction.deleteReply();
        return interaction.channel.send({ embeds: [welcome, rules, commands] });
    },
};