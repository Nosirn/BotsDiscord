const Shop = require("./shop.js");

//Intégrer les commandes
bot.commands = new Collection();
const commandFiles = fs
	.readdirSync("./commands")
	.filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	bot.commands.set(command.data.name, command);
}

//#region Commandes du Bot
bot.on("interactionCreate", async (interaction) => {

	if (!interaction.isCommand() || !salonJDR.includes(interaction.channelId))
		return interaction.reply(
			{
				content: "Vous n'avez pas le droit d'effectuer cette commande dans ce salon.",
				ephemeral: true
			}
		);

	const { commandName } = interaction;
	const command = bot.commands.get(commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		if (interaction.options._subcommand == "info") {
			await interaction.reply({
				content: "Erreur : Le nom "+ interaction.options._hoistedOptions[0].value + " n'est pas reconnu.",
				ephemeral: false
			})
		}
		else if (interaction.options._subcommand == "add") {
			console.log(error);
			await interaction.reply({
				content: "Erreur : Ajout.",
				ephemeral: false
			})
		}
	}
});
//#endregion