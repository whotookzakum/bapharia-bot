const { getClassCommandResponse } = require("../../Commands/Public/class")
const { getImagineInfo } = require("../../Functions/imagineInfo")
const { getLiquidMemoriesInfo } = require("../../Functions/liquidMemoriesInfo")

module.exports = {
    name: "interactionCreate",
    execute(interaction) {
        const id = interaction.customId
        if (!id) return
        else if (interaction.isStringSelectMenu()) {
            if (id === 'class_selector')
                return interaction.update(getClassCommandResponse(interaction.values[0]))
            else if (id === 'liquid_memory_selector')
                return interaction.update(getLiquidMemoriesInfo(interaction.values[0]))
            else if (id.includes('imagine_selector'))
                return interaction.update(getImagineInfo(interaction.values[0]))
        }
        else if (interaction.isButton()) {
            if (id === 'help_button_class') 
                return interaction.reply(getClassCommandResponse())
            else if (id === 'help_button_liquidmemories')
                return interaction.reply(getLiquidMemoriesInfo())
            else if (id === 'help_button_imagine')
                return interaction.reply(getImagineInfo()) 
        }
    }
}