const roles = {
    classes: [
        {
            label: `🛡️ Aegis Fighter`,
            value: '862620564690960384'
        },
        {
            label: `🪓 Twin Striker`,
            value: '862620600836161536'
        },
        {
            label: `🏹 Blast Archer`,
            value: '862620602929381377'
        },
        {
            label: `🪄 Spell Caster`,
            value: '862620605068476448'
        },
        {
            label: `🔨 Heavy Smasher`,
            value: '862620608553287680'
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
    ]
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

    return interaction.reply({ content: 'Your roles have been updated!', ephemeral: true })
}

module.exports = { roles, updateMemberRoles }