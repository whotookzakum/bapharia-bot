const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require("discord.js");

// Returns an ephemeral message with an embed and buttons
function getLiquidMemoriesInfo(color) {
    let options

    const selector = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
                .setCustomId(`liquid_memory_selector`)
                .setPlaceholder(`Select a liquid memory`)
                .addOptions(
                    {
                        label: `Yellow`,
                        value: `yellow`
                    },
                    {
                        label: `Blue`,
                        value: `blue`
                    },
                    {
                        label: `Red`,
                        value: `red`
                    },
                    {
                        label: `Purple`,
                        value: `purple`
                    },
                    {
                        label: `Green`,
                        value: `green`
                    }
                )
        )

    switch (color) {
        case "yellow":
            options = {
                title: `Yellow Liquid Memories`,
                description: `Increases the chance of higher starting level when crafting weapons.`,
                color: 0xfad459,
                duration: `??? uses`,
                unlocks: [
                    `Clear Orvis' quest "Haste Makes Waste!" (Lv. 24+):
                    Recover 3 of Orvis' Belongings from Glowing Elder Goblins at Dragon Claw Valley [Free Exploration].`,
                    `Examine the ground between the tents at the goblin settlement in Fiel Pond (near Trick Elder).`
                ],
                thumbnailUrl: `https://i.imgur.com/p0azVkO.png`
            }
            break;
        case "blue":
            options = {
                title: `Blue Liquid Memories`,
                description: `Increases the EXP your weapon gains when leveling it up.`,
                color: 0x6ac7cd,
                duration: `??? uses`,
                unlocks: [
                    `Clear Patti's quest "Troubled Apprentice" (Lv. 13+):
                    Obtain the Engram Extractor from Pillar of Divinity [Advanced Survey] and bring it to Hanna outside of the Pillar.`,
                    `Examine the shipwheel behind the performers on the 2nd floor of the Revolving Helm Pavilion in Asterleeds.`
                ],
                thumbnailUrl: `https://i.imgur.com/vXb1ocM.png`
            }
            break;
        case "red":
            options = {
                title: `Red Liquid Memories`,
                description: `Increases gathering speed.`,
                color: 0xdb516a,
                duration: `??? uses`,
                unlocks: [
                    `Clear quest "Welcome to the Memory Stand!" (Lv. 12+):
                    Listen to the stand attendant's explanation.`,
                    `Examine the bottles on the counter by the memory stand at Asterleeds Beach.`
                ],
                thumbnailUrl: `https://i.imgur.com/ifYHhPi.png`
            }
            break;
        case "purple":
            options = {
                title: `Purple Liquid Memories`,
                description: `Increases enemy drop rate.`,
                color: 0x79389e,
                duration: `??? uses`,
                unlocks: [
                    `Clear Luise's quest "Calm Researcher's Latest Work" (Lv. 28+):
                    Bring 5 Full Moon Stones and 5 Sunshine Shells to Luise. They can be found in Calm Eve Terraces (night, on high ground) and in Fiel Pond (day, around the river) respectively.`,
                    `In Dragon Claw Valley [Free Exploration], go to the very end and examine the rocks near the open cliff.`
                ],
                thumbnailUrl: `https://i.imgur.com/D5VT9na.png`
            }
            break;
        case "green":
            options = {
                title: `Green Liquid Memories`,
                description: `Grants discounted prices in shops.`,
                color: 0x45b343,
                duration: `??? uses`,
                unlocks: [
                    `Clear Godot's quest "Terms of Exchange for an Ominous Odor" (Lv. 19+):
                    Defeat a Spooky Goat at Soundless Foothills and report to Godot.`,
                    `Examine the ruins of the destroyed building in Calm Eve Terraces (southernmost peninsula).`
                ],
                thumbnailUrl: `https://i.imgur.com/Wyfv0v5.png`
            }
            break;
        default:
            const embed = new EmbedBuilder()
                .setTitle(`Liquid Memories`)
                .setDescription(`Liquid memories are utility buffs that can be activated at a Liquid Memory Stand.`)
                .setColor(0x446cab)
                .addFields(
                    { name: `How to unlock`, value: `There are 2 vials for each liquid memory color that can be unlocked through side quests and exploration. The vial will be empty and unusable when unlocked. To fill the vial, complete actions related to the memory's effect, or simply wait for time to pass. ` },
                    {
                        name: `How to use`, value: `Once a vial is filled, you can turn it into a drink at a Liquid Memory Stand and pay a small fee to drink it. Drinking two vials of the same color will extend the effect's duration. You cannot consume a color that is already in effect.
                    
                    **Select a liquid memory below to learn more**` },
                )
                .setThumbnail(`https://i.imgur.com/sPgr4Tn.png`)

            return { embeds: [embed], components: [selector], ephemeral: true }
    }

    const embed = new EmbedBuilder()
        .setTitle(options.title)
        .setDescription(options.description)
        .setColor(options.color)
        .addFields(
            { name: `Duration`, value: options.duration },
            { name: `Unlock ${color} liquid memory #1`, value: options.unlocks[0] },
            { name: `Unlock ${color} liquid memory #2`, value: options.unlocks[1] },
        )
        .setThumbnail(options.thumbnailUrl)
        .setFooter({ text: 'Bapharia.com' })

    return { embeds: [embed], components: [selector], ephemeral: true }
}

module.exports = { getLiquidMemoriesInfo }