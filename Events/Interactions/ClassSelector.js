const { getClassInfo } = require("../../Functions/classInfo")

module.exports = {
    name: "interactionCreate",
    execute(interaction) {
        if (interaction.customId !== 'class_selector') return
        return interaction.update(getClassInfo(interaction.values[0]))
    }
}