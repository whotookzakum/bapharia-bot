const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require("discord.js");
const text = require("../Text/en/liquidmemories.json");

// Returns an ephemeral message with an embed and buttons
function getLiquidMemoriesInfo(color) {

    const memorySelector = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
                .setCustomId(`liquid_memory_selector`)
                .setPlaceholder(`Select a liquid memory`)
                .addOptions(
                    Object.keys(text.liquidmemories).map(option => (
                        {
                            label: text.liquidmemories[option].name.split(' Liquid Memories')[0],
                            value: option
                        }
                    ))
                )
        )

    if (!color) {
        const embed = new EmbedBuilder()
            .setTitle(text.index.title)
            .setDescription(text.index.description)
            .setColor(parseInt(text.index.color, 16))
            .addFields(...text.index.fields)
            .setThumbnail(text.index.thumbnailUrl)
        return { embeds: [embed], components: [memorySelector], ephemeral: true }
    }

    const selectedItem = text.liquidmemories[color]

    const embed = new EmbedBuilder()
        .setTitle(selectedItem.name)
        .setDescription(selectedItem.description)
        .setColor(parseInt(selectedItem.color, 16))
        .addFields(
            { name: `Duration`, value: selectedItem.duration },
            { name: `Unlock ${color} liquid memory #1`, value: selectedItem.unlocks[0] },
            { name: `Unlock ${color} liquid memory #2`, value: selectedItem.unlocks[1] },
        )
        .setThumbnail(selectedItem.thumbnailUrl)
        .setFooter({ text: 'Bapharia.com', iconURL: `https://cdn.discordapp.com/attachments/1039444525841653780/1040992188844220498/3.png` })

    return { embeds: [embed], components: [memorySelector], ephemeral: true }
}

module.exports = { getLiquidMemoriesInfo }