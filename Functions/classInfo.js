const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require("discord.js");
const text = require("../Text/en/classes.json");

function getColorFromElement(element) {
    switch (element) {
        case "Light":
            return 0xe7d86a
        case "Fire":
            return 0xd56d2c
        case "Ice":
            return 0x5dbceb
        case "Earth":
            return 0x3dcdb3
        default:
            return 0x446cab
    }
}

// Returns an ephemeral message with an embed and buttons
function getClassInfo(className) {

    const classes = text.classes

    const classSelector = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
                .setCustomId(`class_selector`)
                .setPlaceholder(`Select a class`)
                .addOptions(
                    Object.keys(classes).map(option => {
                        return {
                            label: classes[option].name,
                            value: classes[option].uri,
                            emoji: classes[option].emoji
                        }
                    })
                )
        )

    if (!className) {
        const embed = new EmbedBuilder()
            .setTitle(text.index.title)
            .setDescription(text.index.description)
            .setColor(0x446cab)

        return { embeds: [embed], components: [classSelector], ephemeral: true }
    }

    const selectedClass = classes[className]
    const elementColorIndex = className === "spell-caster" ? 1 : 0
    selectedClass.color = getColorFromElement(classes[className].elements[elementColorIndex])
    
    const embed = new EmbedBuilder()
        .setTitle(selectedClass.name)
        .setDescription(selectedClass.description)
        .setColor(selectedClass.color)
        .addFields(
            { name: selectedClass.uniqueMechanic.name, value: selectedClass.uniqueMechanic.value },
            { name: `Elements`, value: `${selectedClass.elements.join(", ")}` },
            { name: `Roles`, value: selectedClass.roles }
        )
        .setImage(selectedClass.imageUrl)
        .setThumbnail(selectedClass.thumbnailUrl)
        .setFooter({ text: 'Bapharia.com', iconURL: `https://cdn.discordapp.com/attachments/1039444525841653780/1040992188844220498/3.png` })


    const buttons = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setLabel(`Class Page`)
                .setEmoji(`🔰`)
                .setURL(`https://bapharia.com/classes/${selectedClass.uri}`)
                .setStyle('Link'),
            new ButtonBuilder()
                .setLabel(`Guides`)
                .setEmoji(`📖`)
                .setURL(`https://bapharia.com/guides/${selectedClass.uri}`)
                .setStyle('Link'),
            new ButtonBuilder()
                .setLabel(`Skill Builder`)
                .setEmoji(`🧪`)
                .setURL(`https://bapharia.com/classes/${selectedClass.uri}/skills`)
                .setStyle('Link'),
        )

    return { embeds: [embed], components: [buttons, classSelector], ephemeral: true }
}

module.exports = { getClassInfo }