const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roles')
        .setDescription('Choose roles to assign to yourself.'),
    execute(interaction) {
        const userRoles = interaction.member._roles

        const roles = [
            {
                name: "suzukiblue",
                id: '862605049321488394'
            },
            {
                name: "shimookared",
                id: '862604926331650069'
            },
            {
                name: "fukuzakigreen",
                id: '862605116167159819'
            },
            {
                name: "mint",
                id: '945560106895044618'
            },
            {
                name: "black",
                id: '862627486948524032'
            },
            {
                name: "purple",
                id: '945566817420730370'
            },
            {
                name: "cerulean",
                id: '945560445681545276'
            },
            {
                name: "peach",
                id: '945561721265881149'
            },
            {
                name: "pink",
                id: '862627380299038760'
            },
            {
                name: "orange",
                id: '862627611212906536'
            },
            {
                name: "aegisfighter",
                id: '862620564690960384'
            },
            {
                name: "twinstriker",
                id: '862620600836161536'
            },
            {
                name: "blastarcher",
                id: '862620602929381377'
            },
            {
                name: "spellcaster",
                id: '862620605068476448'
            },
            {
                name: "heavysmasher",
                id: '862620608553287680'
            },
            {
                name: "english",
                id: '862611786531078174'
            },
            {
                name: "japanese",
                id: '862611850855579699'
            },
            {
                name: "portuguese",
                id: '862611880962555905'
            },
            {
                name: "spanish",
                id: '862611918555709461'
            },
            {
                name: "french",
                id: '862611976273657856'
            },
            {
                name: "russian",
                id: '862611992766447637'
            },
            {
                name: "hindi",
                id: '862612107581063189'
            },
            {
                name: "italian",
                id: '862754686787518494'
            },
            {
                name: "german",
                id: '945631092235448350'
            }
        ]

        roles.forEach(role => {
            role.hasRole = userRoles.includes(role.id) ? true : false
        });

        // TODO: role toggling
        // TODO: color roles remove current color and replace with new selection

        const classes = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId(`role_selector_classes`)
                    .setMinValues(0)
                    .setMaxValues(5)
                    .setPlaceholder(`⚔️ Class roles`)
                    .addOptions(
                        {
                            label: `🛡️ Aegis Fighter`,
                            value: `aegisfighter`,
                            default: roles.find(role => role.name === "aegisfighter").hasRole
                        },
                        {
                            label: `🏹 Blast Archer`,
                            value: `blastarcher`,
                            default: roles.find(role => role.name === "blastarcher").hasRole
                        },
                        {
                            label: `🪄 Spell Caster`,
                            value: `spellcaster`,
                            default: roles.find(role => role.name === "spellcaster").hasRole
                        },
                        {
                            label: `🪓 Twin Striker`,
                            value: `twinstriker`,
                            default: roles.find(role => role.name === "twinstriker").hasRole
                        },
                        {
                            label: `🔨 Heavy Smasher`,
                            value: `heavysmasher`,
                            default: roles.find(role => role.name === "heavysmasher").hasRole
                        },
                    )
            )

        const colors = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId(`role_selector_colors`)
                    .setPlaceholder(`🎨 Color roles`)
                    .setMinValues(0)
                    .setMaxValues(1)
                    .addOptions(
                        {
                            label: `Suzuki Blue`, // Blue 862605049321488394
                            value: `3f78ff`,
                            default: roles.find(role => role.name === "suzukiblue").hasRole
                        },
                        {
                            label: `Shimooka Red`, // Red 862604926331650069
                            value: `e00404`,
                            default: roles.find(role => role.name === "shimookared").hasRole
                        },
                        {
                            label: `Fukuzaki Green`, // Green 862605116167159819
                            value: `00c40b`,
                            default: roles.find(role => role.name === "fukuzakigreen").hasRole
                        },
                        {
                            label: `Mint`,
                            value: `b0daa0`,
                            default: roles.find(role => role.name === "mint").hasRole
                        },
                        {
                            label: `Black`,
                            value: `000001`,
                            default: roles.find(role => role.name === "black").hasRole
                        },
                        {
                            label: `Purple`,
                            value: `8463ad`,
                            default: roles.find(role => role.name === "purple").hasRole
                        },
                        {
                            label: `Cerulean`,
                            value: `6a96d6`,
                            default: roles.find(role => role.name === "cerulean").hasRole
                        },
                        {
                            label: `Peach`,
                            value: `df9598`,
                            default: roles.find(role => role.name === "peach").hasRole
                        },
                        {
                            label: `Pink`,
                            value: `fd3ed1`,
                            default: roles.find(role => role.name === "pink").hasRole
                        },
                        {
                            label: `Orange`,
                            value: `orange`,
                            default: roles.find(role => role.name === "orange").hasRole
                        }
                        // Elitist (Tier 2) Purple bd13f0
                        // Supporter (Tier 1) Turquoise 06a4bb
                    )
            )

        const languages = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId(`role_selector_language`)
                    .setMinValues(0)
                    .setMaxValues(9)
                    .setPlaceholder(`🌐 Language roles`)
                    .addOptions(
                        {
                            label: `English`,
                            value: `english`,
                            default: roles.find(role => role.name === "english").hasRole
                        },
                        {
                            label: `日本語`,
                            value: `japanese`,
                            default: roles.find(role => role.name === "japanese").hasRole
                        },
                        {
                            label: `हिन्दी`,
                            value: `hindi`,
                            default: roles.find(role => role.name === "hindi").hasRole
                        },
                        {
                            label: `Español`,
                            value: `spanish`,
                            default: roles.find(role => role.name === "spanish").hasRole
                        },
                        {
                            label: `Français`,
                            value: `french`,
                            default: roles.find(role => role.name === "french").hasRole
                        },
                        {
                            label: `Pусский`,
                            value: `russian`,
                            default: roles.find(role => role.name === "russian").hasRole
                        },
                        {
                            label: `Italiano`,
                            value: `italian`,
                            default: roles.find(role => role.name === "italian").hasRole
                        },
                        {
                            label: `Deutsch`,
                            value: `german`,
                            default: roles.find(role => role.name === "german").hasRole
                        },
                        {
                            label: `Português`,
                            value: `portuguese`,
                            default: roles.find(role => role.name === "portuguese").hasRole
                        }
                    )
            )

        return interaction.reply({ components: [classes, colors, languages], ephemeral: true });
    },
};

