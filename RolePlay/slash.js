
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Token } = require('../BotConfig.json');
const fs = require('fs');

function slash() {
	const commands = [];
	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

	// Bot / Guild ID
	const clientId = '601836762008125460';
	const guildId = ['342722397570465802', "659767673898663948"];

	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		commands.push(command.data.toJSON());
	}

	const rest = new REST({ version: '9' }).setToken(Token);

	(async () => {
		try {
			console.log('Started refreshing application (/) commands.');

			guildId.forEach(async function (value) {
				await rest.put(
					Routes.applicationGuildCommands(clientId, value),
					{ body: commands },
				);
			})

			console.log('Successfully reloaded application (/) commands.');
		} catch (error) {
			console.error(error);
		}
	})();
}

exports.slash = slash;