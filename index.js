const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });



// Run once on login
client.once(Events.ClientReady, () => {
	client.commands = new Collection();
	const commandsPath = path.join(__dirname, 'commands');
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		client.commands.set(command.data.name, command);
		console.log(`Adding command "${command.data.name}"`)
	}
	console.log('Ready!');

	// Set status and message
	client.user.setPresence({
		activities: [{ name: `over Regnus`, type: ActivityType.Watching }],
		status: 'online',
	});
});

// Listen for interactions
client.on(Events.InteractionCreate, async interaction => {

	// Slash commands
	if (interaction.isChatInputCommand()) {
		const command = client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}

	// Button interactions
	const filter = i => i.customId;

	const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

	collector.on('collect', async i => {
		await i.update({
			embeds: [
				{
					"type": "rich",
					"title": `Aegis Fighter`,
					"description": `Aegis Fighters maintain the front line by fighting at close range, alternating between offensive and defensive shield skills to protect themselves and their allies.`,
					"color": 0xe7d86a,
					"fields": [
						{
							"name": `Shield Gauge`,
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
	});

	collector.on('end', collected => console.log(`Collected ${collected.size} items`));

});

client.login(token);