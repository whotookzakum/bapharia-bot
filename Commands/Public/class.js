const { SlashCommandBuilder } = require('discord.js');

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

        let messageOptions
        let message

        switch (selection) {
            case "aegisfighter":
                messageOptions = {
                    className: `Aegis Fighter`,
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
                messageOptions = {
                    className: `Blast Archer`,
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
                messageOptions = {
                    className: `Spell Caster`,
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
                messageOptions = {
                    className: `Twin Striker`,
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
                return interaction.reply({
                    components: [
                        {
                            "type": 1,
                            "components": [
                                {
                                    "custom_id": `row_3_select_0`,
                                    "placeholder": `Select a class`,
                                    "options": [
                                        {
                                            "label": `Aegis Fighter`,
                                            "value": `12`,
                                            "default": false
                                        },
                                        {
                                            "label": `Blast Archer`,
                                            "value": `6`,
                                            "default": false
                                        },
                                        {
                                            "label": `Spell Caster`,
                                            "value": `11`,
                                            "default": false
                                        },
                                        {
                                            "label": `Twin Striker`,
                                            "value": `7`,
                                            "default": false
                                        }
                                    ],
                                    "min_values": 1,
                                    "max_values": 1,
                                    "type": 3
                                }
                            ]
                        }
                    ],
                    embeds: [
                        {
                            "type": "rich",
                            "title": `Classes`,
                            "description": `There are currently 5 classes, each with a unique mechanic. Each class must be leveled up separately. You can switch classes at a Class Master NPC.\n\n**Select a class below to learn more**`,
                            "color": 0x446cab
                        }
                    ],
                    ephemeral: true
                })
        }

        if (messageOptions.className !== undefined) {
            message = {
                embeds: [
                    {
                        "type": "rich",
                        "title": messageOptions.className,
                        "description": messageOptions.description,
                        "color": messageOptions.color,
                        "fields": [
                            {
                                "name": messageOptions.uniqueMechanic.name,
                                "value": messageOptions.uniqueMechanic.value,
                            },
                            {
                                "name": `Elements`,
                                "value": messageOptions.elements
                            },
                            {
                                "name": `Roles`,
                                "value": messageOptions.roles
                            }
                        ],
                        "image": {
                            "url": messageOptions.imageUrl,
                            "height": 0,
                            "width": 0
                        },
                        "thumbnail": {
                            "url": messageOptions.thumbnailUrl,
                            "height": 0,
                            "width": 0
                        },
                        "footer": {
                            "text": `Bapharia.com`
                        }
                    }
                ],
                components: [
                    {
                        "type": 1,
                        "components": [
                            {
                                "style": 5,
                                "label": `Class Page`,
                                "url": `https://bapharia.com/classes/${messageOptions.uri}`,
                                "disabled": false,
                                "emoji": {
                                    "id": null,
                                    "name": `🔰`
                                },
                                "type": 2
                            },
                            {
                                "style": 5,
                                "label": `Guides`,
                                "url": `https://bapharia.com/guides/${messageOptions.uri}`,
                                "disabled": false,
                                "emoji": {
                                    "id": null,
                                    "name": `📖`
                                },
                                "type": 2
                            },
                            {
                                "style": 5,
                                "label": `Skill Builder`,
                                "url": `https://bapharia.com/classes/${messageOptions.uri}/skills`,
                                "disabled": false,
                                "emoji": {
                                    "id": null,
                                    "name": `🧪`
                                },
                                "type": 2
                            }
                        ]
                    }
                ],
                ephemeral: true
            }
        }

        return interaction.reply(message)
    },
};