const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder } = require("discord.js");
const text = require("../Text/en/imagine.json");

// Returns an ephemeral message with an embed and selectors
function getImagineInfo(imagineName) {

    const battleImagineSelector = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
                .setCustomId(`imagine_selector_battle`)
                .setPlaceholder(`Battle Imagine`)
                .addOptions(
                    {
                        label: `Pink Piglet`,
                        value: `pinkpiglet`
                    }
                )
        )

    const enhanceImagineSelector = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
                .setCustomId(`imagine_selector_enhance`)
                .setPlaceholder(`Enhance Imagine`)
                .addOptions(
                    {
                        label: `Dylanx`,
                        value: `dylanx`
                    }
                )
        )

    const mountImagineSelector = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
                .setCustomId(`imagine_selector_mount`)
                .setPlaceholder(`Mount Imagine`)
                .addOptions(
                    {
                        label: `Land Fox`,
                        value: `landfox`
                    }
                )
        )

    if (!imagineName) {
        const embed = new EmbedBuilder()
            .setTitle(`Imagine`)
            .setDescription(`Imagine are the souls of creatures that inhabit the world of BLUE PROTOCOL. They're useful in combat and in exploration. There are 3 types of imagine.`)
            .addFields(
                {
                    name: "Battle Imagine",
                    value: "Battle Imagine provide active abilities to assist you in battle and can be fused into your weapons for passive stat bonuses. They can be crafted at the Imagine Research Institute in town."
                },
                {
                    name: "Enhance Imagine",
                    value: "Enhance Imagine are equippable items that provide passive stat bonuses. They have no appearance, and you will need higher tiers of enhance imagine to raise your adventurer rank. They can be crafted at the Imagine Research Institute in town."
                },
                {
                    name: "Mount Imagine",
                    value: "Mount Imagine are rideable creatures useful in traversing the open world."
                },
            )
            .setColor(0x446cab)

        return { embeds: [embed], components: [battleImagineSelector, enhanceImagineSelector, mountImagineSelector], ephemeral: true }
    }

    let selectedItem = text.pinkpiglet

    const embed = new EmbedBuilder()
        .setTitle(selectedItem.name)
        .addFields(
            { name: "Level", value: `Initial Lv 1~${selectedItem.maxStartingLv} (Max Lv: ${selectedItem.maxLv})` },
            { name: "Element", value: selectedItem.element },
            { name: "Skill", value: `${selectedItem.skill}`, inline: true },
            { name: "Cooldown", value: `${selectedItem.cooldown} sec`, inline: true },
            { name: "Power", value: `${selectedItem.skillEffectiveness}`, inline: true },

            { name: 'STR', value: `3`, inline: true },
            { name: 'INT', value: `3`, inline: true },
            { name: 'MAX HP', value: `3`, inline: true },
            { name: 'VIT', value: `3`, inline: true },
            { name: 'MND', value: `3`, inline: true },
            { name: 'ATK', value: `3`, inline: true },
            { name: 'DEX', value: `3`, inline: true },

            { name: "Possible Abilities", value: `${selectedItem.possibleAbilities[0]}\n${selectedItem.possibleAbilities[1]}` },
            { name: "Crafting Materials", value: `${selectedItem.craftingMaterials[0].item} (${selectedItem.craftingMaterials[0].amount})\n${selectedItem.craftingMaterials[1].item} (${selectedItem.craftingMaterials[1].amount})\n${selectedItem.craftingMaterials[2].item} (${selectedItem.craftingMaterials[2].amount})\nLuno (${selectedItem.lunoCost})` },
        )
        .setImage(selectedItem.imageUrl)
        .setThumbnail(selectedItem.thumbnailUrl)
        .setFooter({ text: 'Bapharia.com', iconURL: `https://cdn.discordapp.com/attachments/1039444525841653780/1040992188844220498/3.png` })

    return { embeds: [embed], components: [battleImagineSelector, enhanceImagineSelector, mountImagineSelector], ephemeral: true }
}

module.exports = { getImagineInfo }