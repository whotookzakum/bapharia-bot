const { getClassInfo } = require("../../Functions/classInfo")
const { getImagineInfo } = require("../../Functions/imagineInfo")
const { getLiquidMemoriesInfo } = require("../../Functions/liquidMemoriesInfo")
const { updateMemberRoles, getRoleSelectors } = require("../../Functions/roleSelectors")

module.exports = {
    name: "interactionCreate",
    execute(interaction) {
        const id = interaction.customId
        
        if (!id) {
            return
        }
        else if (interaction.isSelectMenu()) {
            if (id.includes('role_selector'))
                return updateMemberRoles(interaction)
            else if (id === 'class_selector')
                return interaction.update(getClassInfo(interaction.values[0]))
            else if (id === 'liquid_memory_selector')
                return interaction.update(getLiquidMemoriesInfo(interaction.values[0]))
            else if (id.includes('imagine_selector'))
                return interaction.update(getImagineInfo(interaction.values[0]))
        }
        else if (interaction.isButton()) {
            if (id === 'help_button_roles')
                return interaction.reply(getRoleSelectors(interaction))
            else if (id === 'help_button_classes') 
                return interaction.reply(getClassInfo())
            else if (id === 'help_button_liquidmemories')
                return interaction.reply(getLiquidMemoriesInfo())
        }
    }
}