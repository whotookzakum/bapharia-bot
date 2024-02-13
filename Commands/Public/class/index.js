const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } = require('discord.js');
const commandTexts = require("../../../Text/en/commands.json");
const classObjs = require("./classObjs.json");
const defaultMessage = require("./defaultMessage.json");

// TODO: Fetch classObjs from website or github

classObjs.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
})

const { name, description, options } = commandTexts.class

const command = new SlashCommandBuilder()
    .setName(name)
    .setDescription(description)
    .addStringOption(option =>
        option
            .setName(options[0].name)
            .setDescription(options[0].description)
            .addChoices(
                ...classObjs.map(classObj => (
                    { name: classObj.name, value: `${classObj.id}` }
                ))
            ));


const classSelector = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId(`class_selector`)
            .setPlaceholder(`Select a class`)
            .addOptions(
                ...classObjs.map(classObj => {
                    return {
                        label: classObj.name,
                        value: `${classObj.id}`,
                        emoji: classObj.emoji
                    }
                })
            )
    )

function getClassCommandResponse(classId) {
    const message = classObjs.find(classObj => classObj.id == classId) || defaultMessage
    
    if (!classId) 
        return { embeds: [message], components: [classSelector], ephemeral: true }
    
    const buttons = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setLabel(`Overview`)
                .setEmoji(`🔰`)
                .setURL(`https://bapharia.com/classes/${classId}`)
                .setStyle('Link'),
            new ButtonBuilder()
                .setLabel(`Skills`)
                .setEmoji(`📖`)
                .setURL(`https://bapharia.com/classes/${classId}/skills`)
                .setStyle('Link'),
            new ButtonBuilder()
                .setLabel(`Meta`)
                .setEmoji(`🧪`)
                .setURL(`https://bapharia.com/classes/${classId}/meta`)
                .setStyle('Link'),
        )

    return { embeds: [message], components: [buttons, classSelector], ephemeral: true }
}

module.exports = {
    getClassCommandResponse,
    data: command,
    execute(interaction) {
        const selection = interaction.options.getString(options[0].name)
        return interaction.reply(getClassCommandResponse(selection))
    },
};