const { getClassInfo } = require("../../Functions/classInfo")
const { getLiquidMemoriesInfo } = require("../../Functions/liquidMemoriesInfo")

module.exports = {
    name: "interactionCreate",
    execute(interaction) {
        if (interaction.customId === 'class_selector') 
            return interaction.update(getClassInfo(interaction.values[0]))
        else if (interaction.customId === 'liquid_memory_selector') 
            return interaction.update(getLiquidMemoriesInfo(interaction.values[0]))
    }
}