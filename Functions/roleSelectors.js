const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder } = require('discord.js');

const roles = {
    classes: [
        {
            label: `Aegis Fighter`,
            value: '862620564690960384',
            emoji: `<:aegisfighter:862620371710115861>`
        },
        {
            label: `Twin Striker`,
            value: '862620600836161536',
            emoji: `<:twinstriker:862620371927695400>`
        },
        {
            label: `Blast Archer`,
            value: '862620602929381377',
            emoji: `<:blastarcher:862620371605782539>`
        },
        {
            label: `Spell Caster`,
            value: '862620605068476448',
            emoji: `<:spellcaster:862620371923501086>`
        },
        {
            label: `Heavy Smasher`,
            value: '862620608553287680',
            emoji: `<:heavysmasher:862620371920224266>`
        }
    ],
    colors: [
        {
            label: `Suzuki Blue`, // Blue 862605049321488394
            color: `3f78ff`,
            value: '862605049321488394'
        },
        {
            label: `Shimooka Red`, // Red 862604926331650069
            color: `e00404`,
            value: '862604926331650069'
        },
        {
            label: `Fukuzaki Green`, // Green 862605116167159819
            color: `00c40b`,
            value: '862605116167159819'
        },
        {
            label: `Mint`,
            color: `b0daa0`,
            value: '945560106895044618'
        },
        {
            label: `Black`,
            color: `000001`,
            value: '862627486948524032'
        },
        {
            label: `Purple`,
            color: `8463ad`,
            value: '945566817420730370'
        },
        {
            label: `Cerulean`,
            color: `6a96d6`,
            value: '945560445681545276'
        },
        {
            label: `Peach`,
            color: `df9598`,
            value: '945561721265881149'
        },
        {
            label: `Pink`,
            color: `fd3ed1`,
            value: '862627380299038760'
        },
        {
            label: `Orange`,
            color: `orange`,
            value: '862627611212906536'
        }
    ],
    languages: [
        {
            label: `English`,
            value: '862611786531078174'
        },
        {
            label: `日本語`,
            value: '862611850855579699'
        },
        {
            label: `हिन्दी`,
            value: '862612107581063189'
        },
        {
            label: `Español`,
            value: '862611918555709461'
        },
        {
            label: `Français`,
            value: '862611976273657856'
        },
        {
            label: `Pусский`,
            value: '862611992766447637'
        },
        {
            label: `Italiano`,
            value: '862754686787518494'
        },
        {
            label: `Deutsch`,
            value: '945631092235448350'
        },
        {
            label: `Português`,
            value: '862611880962555905'
        }
    ],
    nsfw: [
        {
            label: `I am 18+ and agree to viewing NSFW content.`,
            value: '862621359037480961',
            emoji: `<a:mewhenzakum:967429336619700244>`
        }
    ]
}

function getRoleSelectors(interaction) {
    // List all colors
    let colorExamples = ``;
    roles.colors.forEach(role => {
        colorExamples += `<@&${role.value}>\n`
    })

    const rolesMessage = new EmbedBuilder()
        .setTitle(`Roles`)
        .setDescription(
            `Select your desired roles below.\n
            <@&862603966151000078> is for members who have financially supported the site, and grants special perks such as custom colors and voting on content.\n
            <@&862611275301388288> is for members who have contributed translations towards the website.`
        )
        .setColor(0x893bff)
        .addFields(
            { name: `Available colors`, value: colorExamples },
        )

    // Add default values for each selector option based on if the member currently has that role
    const userRoles = interaction.member._roles
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

    const nsfwSelector = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
                .setCustomId(`role_selector_nsfw`)
                .setMinValues(0)
                .setMaxValues(1)
                .setPlaceholder(`🔞 NSFW`)
                .addOptions(roles.nsfw)
        )

    return {
        embeds: [rolesMessage],
        components: [classesSelector, colorsSelector, languagesSelector, nsfwSelector],
        ephemeral: true
    };
}

function updateMemberRoles(interaction) {
    const member = interaction.member
    const currentRoles = member._roles // alternatively, members.roles.cache is a Collection

    // Get the selector that was used to specifically target the roles category without affecting roles from other categories
    const selectorType = interaction.customId.split('role_selector_').pop() // "colors" "classes" "languages"

    // Get difference between current roles & selected roles to see what needs to be added or removed
    let difference = currentRoles
            .filter(role => !interaction.values.includes(role))
            .concat(interaction.values.filter(role => !currentRoles.includes(role)))

    // Since that returns something like ['English', 'Red', 'Green'], filter it to roles within the selected category, i.e. ['Red', 'Green'] 
    difference = difference.filter(roleId => roles[selectorType].find(role => role.value === roleId))

    difference.forEach((roleId) => {
        currentRoles.includes(roleId) ? member.roles.remove(roleId) : member.roles.add(roleId)
    })

    return interaction.reply(interaction.reply({ content: 'Your roles have been updated!', ephemeral: true }))
}

module.exports = { roles, updateMemberRoles, getRoleSelectors }