const { SlashCommandBuilder } = require('discord.js');
const commandTexts = require("../../../Text/en/commands.json");
const guides = require("./guides.json");

// TODO: Fetch guides from website or github

guides.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
})

const { name, description, options } = commandTexts.guide

const command = new SlashCommandBuilder()
    .setName(name)
    .setDescription(description)
    .addStringOption(option =>
        option
            .setName(options[0].name)
            .setDescription(options[0].description)
            .addChoices(...guides)
    );

function getGuideCommandResponse(uri) {
    return { content: `https://bapharia.com/guides/${uri}` }
}

module.exports = {
    data: command,
    execute(interaction) {
        const selection = interaction.options.getString(options[0].name)
        return interaction.reply(getGuideCommandResponse(selection))
    },
};