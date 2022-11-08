const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aegisfighter')
		.setDescription('Info about the Aegis Fighter class.'),
	async execute(interaction) {
		return interaction.reply({
			embeds: [
				{
					"type": "rich",
					"title": `Aegis Fighter`,
					"description": `Aegis Fighters maintain the front line by fighting at close range, alternating between offensive and defensive shield skills to protect themselves and their allies.`,
					"color": 0xe7d86a,
					"fields": [
						{
							"name": `Shield Gauge`, // Shield Gauge
							"value": `The shield gauge will be consumed when blocking damage or parrying enemies. When the gauge is depleted, you become guard-broken and cannot use shield-related skills for a period of time. `
						},
						{
							"name": `Elements`,
							"value": `Light`
						},
						{
							"name": `Roles`,
							"value": `Tank, DPS`
						}
					],
					"image": {
						"url": `https://i.imgur.com/eTVr1Aw.gif`,
						"height": 0,
						"width": 0
					},
					"thumbnail": {
						"url": `https://i.imgur.com/eWwPC9H.png`,
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
							"url": `https://bapharia.com/classes/aegis-fighter`,
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
							"url": `https://bapharia.com/guides/aegis-fighter`,
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
							"url": `https://bapharia.com/classes/aegis-fighter/skills`,
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
