const { Collection } = require('discord.js');
const fs = require('fs');

const app = require('express')();
app.get('/', (_req, res) => res.send('Hello World'));
app.listen(8080, () => console.log('Listening in port 8080'));

module.exports = {
	name: 'ready',
	once: true,

	execute: async (client) => {

		console.log(`Logged in as ${client.user.tag}!`);

		/* Set client status */
		await client.user.setPresence({
			status: 'online',
			activities: [{ type: 0, name: 'Update 4.6.0 - /help' }],
		});

		/* Registering slash commands */
		client.commands = new Collection();
		const data = [];

		const categories = fs.readdirSync(`${__dirname}/../commands/`);
		for (const category of categories) {
			const commandFiles = fs.readdirSync(`${__dirname}/../commands/${category}`).filter(file => file.endsWith('.js'));
			for (const file of commandFiles) {

				const command = require(`${__dirname}/../commands/${category}/${file}`);
				client.commands.set(command.name, command);
				data.push(command.data.toJSON());

			}
		}

		/* Set ApplicationCommand data */
		await client.application.commands.set(data);

	},
};
