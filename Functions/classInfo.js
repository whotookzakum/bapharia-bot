const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require("discord.js");

// Returns an ephemeral message with an embed and buttons
function getClassInfo(className) {
    let options

    const selector = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
                .setCustomId(`class_selector`)
                .setPlaceholder(`Select a class`)
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

    switch (className) {
        case "aegisfighter":
            options = {
                title: `Aegis Fighter`,
                description: `Aegis Fighters maintain the front line by fighting at close range, alternating between offensive and defensive shield skills to protect themselves and their allies.`,
                color: 0xe7d86a,
                uniqueMechanic: {
                    name: `Shield Gauge`, // Shield Gauge
                    value: `The shield gauge will be consumed when blocking damage or parrying enemies. When the gauge is depleted, you become guard-broken and cannot use shield-related skills for a period of time.`
                },
                elements: `Light`,
                roles: `Tank, DPS`,
                imageUrl: `https://i.imgur.com/eTVr1Aw.gif`,
                thumbnailUrl: `https://i.imgur.com/eWwPC9H.png`,
                uri: `aegis-fighter`
            }
            break;
        case "blastarcher":
            options = {
                title: `Blast Archer`,
                description: `Blast Archers attack from a range with their bow and are adept at supporting the party. They adapt their fighting style based on the situation through techniques such as weak point targeting and area-of-effect attacks.`,
                color: 0x3dcdb3,
                uniqueMechanic: {
                    name: `Impeccable Aim`, // Weakness Targeting
                    value: `Take manual aim to locate enemy weak points, which inflict additional damage when hit.`
                },
                elements: `Earth`,
                roles: `Support, DPS`,
                imageUrl: `https://i.imgur.com/moYPg2B.gif`,
                thumbnailUrl: `https://i.imgur.com/UW9nAaN.png`,
                uri: `blast-archer`
            }
            break;
        case "spellcaster":
            options = {
                title: `Spell Caster`,
                description: `Spell Casters can learn elemental attacks that manipulate fire, ice and lightning. Their high damage and elemental effects are even more influential when fighting with a party.`,
                color: 0x5dbceb,
                uniqueMechanic: {
                    name: `Engram's Blessing`, // EP Gauge
                    value: `Tactical skills have no cooldown but instead consume EP gauge. EP can be charged, but will leave you vulnerable while doing so.`
                },
                elements: `Fire, Ice, Lightning`,
                roles: `DPS`,
                imageUrl: `https://i.imgur.com/GVQOn55.gif`,
                thumbnailUrl: `https://i.imgur.com/qygKgNJ.png`,
                uri: `spell-caster`
            }
            break;
        case "twinstriker":
            options = {
                title: `Twin Striker`,
                description: `Twin Strikers use their dual axes to unleash a flurry of close-range attacks. By repeatedly attacking, their damage increases further beyond its limits.`,
                color: 0xd56d2c,
                uniqueMechanic: {
                    name: `Combo Meter`, // Combo Meter
                    value: `Damaging enemies increases the combo meter, which multiplies your damage. Getting knocked down will reset the combo meter to 0.`
                },
                elements: `Fire`,
                roles: `DPS`,
                imageUrl: `https://i.imgur.com/wI0pKr9.gif`,
                thumbnailUrl: `https://i.imgur.com/xDrRixw.png`,
                uri: `twin-striker`
            }
            break;
        default:
            const embed = new EmbedBuilder()
                .setTitle(`Classes`)
                .setDescription(`There are currently 5 classes, each with a unique mechanic. Each class must be leveled up separately. You can switch classes at a Class Master NPC.\n\n**Select a class below to learn more**`)
                .setColor(0x446cab)

            return { embeds: [embed], components: [selector], ephemeral: true }
    }

    const embed = new EmbedBuilder()
        .setTitle(options.title)
        .setDescription(options.description)
        .setColor(options.color)
        .addFields(
            { name: options.uniqueMechanic.name, value: options.uniqueMechanic.value },
            { name: `Elements`, value: options.elements },
            { name: `Roles`, value: options.roles }
        )
        .setImage(options.imageUrl)
        .setThumbnail(options.thumbnailUrl)
        .setFooter({ text: 'Bapharia.com' })


    const buttons = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setLabel(`Class Page`)
                .setEmoji(`🔰`)
                .setURL(`https://bapharia.com/classes/${options.uri}`)
                .setStyle('Link'),
            new ButtonBuilder()
                .setLabel(`Guides`)
                .setEmoji(`📖`)
                .setURL(`https://bapharia.com/guides/${options.uri}`)
                .setStyle('Link'),
            new ButtonBuilder()
                .setLabel(`Skill Builder`)
                .setEmoji(`🧪`)
                .setURL(`https://bapharia.com/classes/${options.uri}/skills`)
                .setStyle('Link'),
        )

    return { embeds: [embed], components: [buttons, selector], ephemeral: true }
}

module.exports = { getClassInfo }