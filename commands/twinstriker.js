const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('twinstriker')
		.setDescription('Info about the Twin Striker class.'),
	async execute(interaction) {
		return interaction.reply({
			embeds: [
				{
					"type": "rich",
					"title": `Twin Striker`,
					"description": `Twin Strikers use their dual axes to unleash a flurry of close-range attacks. By repeatedly attacking, their damage increases further beyond its limits.`,
					"color": 0xd56d2c,
					"fields": [
						{
							"name": `Combo Meter`, // Combo Meter
							"value": `Damaging enemies increases the combo meter, which multiplies your damage. Getting knocked down will reset the combo meter to 0.`
						},
						{
							"name": `Elements`,
							"value": `Fire`
						},
						{
							"name": `Roles`,
							"value": `DPS`
						}
					],
					"image": {
						"url": `https://i.imgur.com/wI0pKr9.gif`,
						"height": 0,
						"width": 0
					},
					"thumbnail": {
						"url": `https://i.imgur.com/xDrRixw.png`,
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
							"url": `https://bapharia.com/classes/twin-striker`,
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
							"url": `https://bapharia.com/guides/twin-striker`,
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
							"url": `https://bapharia.com/classes/twin-striker/skills`,
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
