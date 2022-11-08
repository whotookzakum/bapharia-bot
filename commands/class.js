const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('class')
        .setDescription('Information about the available classes.'),
    async execute(interaction) {
        return interaction.reply({
            "components": [
                {
                    "type": 1,
                    "components": [
                        {
                            "custom_id": `row_3_select_0`,
                            "placeholder": `Select a class`,
                            "options": [
                                {
                                    "label": `Aegis Fighter`,
                                    "value": `12`,
                                    "default": false
                                },
                                {
                                    "label": `Blast Archer`,
                                    "value": `6`,
                                    "default": false
                                },
                                {
                                    "label": `Spell Caster`,
                                    "value": `11`,
                                    "default": false
                                },
                                {
                                    "label": `Twin Striker`,
                                    "value": `7`,
                                    "default": false
                                }
                            ],
                            "min_values": 1,
                            "max_values": 1,
                            "type": 3
                        }
                    ]
                }
            ],
            embeds: [
                {
                    "type": "rich",
                    "title": `Classes`,
                    "description": `There are currently 5 classes, each with a unique mechanic. Each class must be leveled up separately. You can switch classes at a Class Master NPC.\n\n**Select a class below to learn more**`,
                    "color": 0x446cab
                }
            ],
            ephemeral: true
        });
    },
};