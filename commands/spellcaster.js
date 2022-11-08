const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spellcaster')
		.setDescription('Info about the Spell Caster class.'),
	async execute(interaction) {
		return interaction.reply({
			embeds: [
				{
					"type": "rich",
					"title": `Spell Caster`,
					"description": `Spell Casters can learn elemental attacks that manipulate fire, ice and lightning. Their high damage and elemental effects are even more influential when fighting with a party.`,
					"color": 0x5dbceb,
					"fields": [
						{
							"name": `Engram's Blessing`, // EP Gauge
							"value": `Tactical skills have no cooldown but instead consume EP gauge. EP can be charged, but will leave you vulnerable while doing so.`
						},
						{
							"name": `Elements`,
							"value": `Fire, Ice, Lightning`
						},
						{
							"name": `Roles`,
							"value": `DPS`
						}
					],
					"image": {
						"url": `https://i.imgur.com/GVQOn55.gif`,
						"height": 0,
						"width": 0
					},
					"thumbnail": {
						"url": `https://i.imgur.com/qygKgNJ.png`,
						"height": 0,
						"width": 0
					},
					"footer": {
						"text": `Bapharia.com`
					}
				}
			],
			components: [
				{
					"type": 1,
					"components": [
						{
							"style": 5,
							"label": `Class Page`,
							"url": `https://bapharia.com/classes/spell-caster`,
							"disabled": false,
							"emoji": {
								"id": null,
								"name": `🔰`
							},
							"type": 2
						},
						{
							"style": 5,
							"label": `Guides`,
							"url": `https://bapharia.com/guides/spell-caster`,
							"disabled": false,
							"emoji": {
								"id": null,
								"name": `📖`
							},
							"type": 2
						},
						{
							"style": 5,
							"label": `Skill Builder`,
							"url": `https://bapharia.com/classes/spell-caster/skills`,
							"disabled": false,
							"emoji": {
								"id": null,
								"name": `🧪`
							},
							"type": 2
						}
					]
				}
			],
			ephemeral: true
		});
	},
};
