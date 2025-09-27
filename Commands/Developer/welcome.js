const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('welcome')
        .setDescription('Welcome message.'),
    execute(interaction) {
        const embeds = [
            {
                title: " ",
                description: "### <:lukchan_wow:1421254268668739774> Welcome to LUK.GG!\nWe're a growing community of theorycrafters, guide makers, and video game enthusiasts! We welcome players of all skill levels and play styles. Guides and resources can be found throughout this server and at [LUK.GG](https://luk.gg).\n\n### <:lukchan_noted:1421254273991442472> Rules\n```1️⃣ Don't be overly weird or an asshole.```\n### <:lukchan_cool:1421254270380015666> Customization & Bot Commands\nVisit <id:customize> to assign yourself roles and add channels for your favorite games. You can view my commands by typing `/` in the chat and clicking on my icon!\n\n### <:lukchan_nerd:1421254272594481153> Roles\nMembers of our guild, <:bapharia:1111470086776160297> **Bapharia**, can earn the <:role_initiate:1324057844693336094><@&1126255556177440838>, <:role_ascendant:1324050953896329277><@&1111465297749225503>, and <:role_vip:1324046419518029895><@&1324045554975637504> roles based on their lifetime activity. Non-members can participate in guild channels with the <:role_guest:1421458398083420190><@&1420628414615781408> role.\n\n<:role_staff:1419886338022576128><@&862605466152337418>, <:role_legend:1419905258775249009><@&935585295854891048>, and <:role_null:1324052566778187827><@&1049990365224108062> are reserved for moderators, server boosters, and bots!",
                color: 0x1b9ffc,
            },
            // > List of commands: </help:1040244327663800350>
            // {
            //     title: "🎉 Welcome to Bapharia's Guidance!",
            //     description: "We are the premier information hub for BLUE PROTOCOL.\nVisit [bapharia.com](https://bapharia.com) to learn more about the game!",
            //     color: 0x0099ff
            // },
            // {
            //     title: "📕 Rules",
            //     description: "**```1️⃣ Don't be overly weird or an asshole.```**",
            //     color: 0xe9365d
            // },
            // {
            //     title: "🏅 Roles & Commands",
            //     description: "Roles can be assigned in <id:customize>. Use **/help** to view commands.",
            //     color: 0x53d35e
            // },
        ]
        interaction.deferReply();
        interaction.deleteReply();
        return interaction.channel.send({ embeds });
    },
};