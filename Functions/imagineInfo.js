const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder } = require("discord.js");

// Returns an ephemeral message with an embed and selectors
function getImagineInfo(imagineName) {
    let options

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

    switch (imagineName) {
        case "dylanx":
        case "landfox":
        case "pinkpiglet":
            options = {
                title: `Pink Piglet`,
                color: 0xd56d2c,
                imageUrl: `https://cdn.discordapp.com/attachments/1039444525841653780/1039455566445166622/20221108_092415.gif`,
                thumbnailUrl: `https://raw.githubusercontent.com/whotookzakum/bapharia.com/live-site/images/crafting/bi1.png`,
                maxStartingLv: "1",
                maxLv: "15",
                stats: {
                    str: "6",
                    vit: "2",
                    dex: "3",
                    int: "2",
                    mnd: "0",
                    hp: "20",
                    atk: "7"
                },
                element: "-",
                cooldown: "60",
                skill: "Piglet's Tranquility\n(Heal Type)",
                skillEffectiveness: "175",
                ability: "????",
                abilityEffectiveness: "????",
                possibleAbilities: [
                    "Increased Healing (Battle Imagine)",
                    "Increased Healing"
                ],
                craftingMaterials: [
                    {
                        item: "Pink Piglet's Idea",
                        amount: "1"
                    },
                    {
                        item: "Ripple Stone",
                        amount: "3"
                    },
                    {
                        item: "Piglet Skin",
                        amount: "1"
                    }
                ],
                lunoCost: "2000"
            }
            break;
        default:
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

    const embed = new EmbedBuilder()
        .setTitle(options.title)
        .setColor(options.color)
        .addFields(

            { name: "Level", value: `Initial Lv 1~${options.maxStartingLv} (Max Lv: ${options.maxLv})` },
            { name: "Element", value: options.element },
            { name: "Skill", value: `${options.skill}`, inline: true },
            { name: "Cooldown", value: `${options.cooldown} sec`, inline: true },
            { name: "Power", value: `${options.skillEffectiveness}`, inline: true },

            
            // { name: '\u200b', value: '\u200b', inline: true },

            
            // { name: "Skill", value: options.skill, inline: true },
            // { name: "Effectiveness", value: options.skillEffectiveness, inline: true },

            // { name: "Ability", value: options.ability, inline: true },
            // { name: "Effectiveness", value: options.abilityEffectiveness, inline: true },
            

            { name: 'STR', value: `3`, inline: true },
            { name: 'INT', value: `3`, inline: true },
            { name: 'MAX HP', value: `3`, inline: true },
            { name: 'VIT', value: `3`, inline: true },
            { name: 'MND', value: `3`, inline: true },
            { name: 'ATK', value: `3`, inline: true },
            { name: 'DEX', value: `3`, inline: true },

            { name: "Possible Abilities", value: `${options.possibleAbilities[0]}\n${options.possibleAbilities[1]}` },
            { name: "Crafting Materials", value: `${options.craftingMaterials[0].item} (${options.craftingMaterials[0].amount})\n${options.craftingMaterials[1].item} (${options.craftingMaterials[1].amount})\n${options.craftingMaterials[2].item} (${options.craftingMaterials[2].amount})\nLuno (${options.lunoCost})` },
        )
        // .setImage(options.imageUrl)
        .setThumbnail(options.thumbnailUrl)
        .setFooter({ text: 'Bapharia.com', iconURL: `https://cdn.discordapp.com/attachments/1039444525841653780/1040992188844220498/3.png` })

    return { embeds: [embed], components: [battleImagineSelector, enhanceImagineSelector, mountImagineSelector], ephemeral: true }
}

module.exports = { getImagineInfo }