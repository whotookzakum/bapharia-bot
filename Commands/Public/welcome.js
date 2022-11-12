const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle, SelectMenuBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('welcome')
        .setDescription('Welcome message.'),
    execute(interaction) {

        const welcome = new EmbedBuilder()
            .setTitle(`Welcome to the Blue Protocol discord server!`)
            .setDescription(
                `We are a global community for the online game BLUE PROTOCOL, with intentions to become the official server by partnering with Bandai Namco.`
            )
            .addFields(
                { name: `BLUE PROTOCOL`, value: 
                '🌐 [Homepage](https://blue-protocol.com/)\n🐦 [Twitter](https://twitter.com/blueprotocol_JP)\n📘 [Terms of Service](https://tinyurl.com/ToS-BP)'},
                { name: `Community`, value: 
                '📝 [Reddit](https://www.reddit.com/r/blueprotocol)\n📕 [Discord Terms of Service](https://discord.com/terms)\n📗 [Discord Community Guidelines](https://discord.com/guidelines)'}
            )
            .setColor(0x0099ff)
            .setImage(`https://cdn.discordapp.com/attachments/833861623843258438/833885347007037500/unknown.png`)
            .setFooter({ text: 'Feste welcomes you!' })

        const rules = new EmbedBuilder()
            .setTitle(`Rules`)
            .setDescription(
                "To ensure that everyone can enjoy the server, please follow the rules to avoid a warning or ban. Rules are subject to amendments and Mods may exercise powers at their discretion and beyond the scope of the rules.\n\n**```1️⃣ Be respectful```**\n> Engaging in behavior that negatively impacts the community, such as harassment, offensive or discriminatory actions, posting questionable content (NSFW, political, or religious), spamming, hardcore trolling, intentionally baiting debates, or sharing personal information of yourself or others will not be tolerated.\n\n**```2️⃣ Don't advertise unrelated content```**\n> ..such as spreading affiliate links or other server invites. If you wish to invite someone to your server, ask them if they want to join first. For guild recruitment and videos/streams, use the appropriate channels.\n\n**```3️⃣ Abide by Bandai Namco's Terms of Use```**\n> Do not discuss or share information about hacks, exploits, datamined content, or English patches."
            )
            .setColor(0xe9365d)
            .setFooter({ text: 'Attempts to circumvent the rules, blocked words, or bans will be met with disciplinary action.' })

        const roles = new EmbedBuilder()
            .setAuthor({ name: `Role Selection` })
            .setTitle(`Select your desired roles!`)
            .setColor(0x53d35e)

        const roleSelector = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId(`class_selector`)
                    .setPlaceholder(`Select a role`)
                    .addOptions(
                        {
                            label: `Aegis Fighter`,
                            value: `aegisfighter`
                        },
                        {
                            label: `Blast Archer`,
                            value: `blastarcher`
                        },
                        {
                            label: `Spell Caster`,
                            value: `spellcaster`
                        },
                        {
                            label: `Twin Striker`,
                            value: `twinstriker`
                        }
                    )
            )

        return interaction.reply({ embeds: [welcome, rules, roles], components: [roleSelector],  ephemeral: false })
    },
};