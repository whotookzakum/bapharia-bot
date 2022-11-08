const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blastarcher')
		.setDescription('Info about the Blast Archer class.'),
	async execute(interaction) {
		return interaction.reply({
			embeds: [
				{
					"type": "rich",
					"title": `Blast Archer`,
					"description": `Blast Archers attack from a range with their bow and are adept at supporting the party. They adapt their fighting style based on the situation through techniques such as weak point targeting and area-of-effect attacks.`,
					"color": 0x3dcdb3,
					"fields": [
						{
							"name": `Impeccable Aim`, // Weakness Targeting
							"value": `Take manual aim to locate enemy weak points, which inflict additional damage when hit.`
						},
						{
							"name": `Elements`,
							"value": `Earth`
						},
						{
							"name": `Roles`,
							"value": `Support, DPS`
						}
					],
					"image": {
						"url": `https://i.imgur.com/moYPg2B.gif`,
						"height": 0,
						"width": 0
					},
					"thumbnail": {
						"url": `https://i.imgur.com/UW9nAaN.png`,
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
							"url": `https://bapharia.com/classes/blast-archer`,
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
							"url": `https://bapharia.com/guides/blast-archer`,
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
							"url": `https://bapharia.com/classes/blast-archer/skills`,
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
