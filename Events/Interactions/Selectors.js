const { getClassInfo } = require("../../Functions/classInfo")
const { getLiquidMemoriesInfo } = require("../../Functions/liquidMemoriesInfo")
const { updateMemberRoles } = require("../../Functions/roles")

module.exports = {
    name: "interactionCreate",
    execute(interaction) {
        if (!interaction.customId) return

        if (interaction.customId === 'class_selector')
            return interaction.update(getClassInfo(interaction.values[0]))
        else if (interaction.customId === 'liquid_memory_selector')
            return interaction.update(getLiquidMemoriesInfo(interaction.values[0]))
        else if (interaction.customId.includes('role_selector'))
            return updateMemberRoles(interaction)
    }
}