import { Collection } from 'discord.js';
import fs from 'fs';

export const name = 'ready';
export const once = true;
export const execute = async (client) => {

	console.log(`${client.user.tag} has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);

	client.user.setPresence({
		status: 'online',
		activities: [{ type: 'PLAYING', name: 'Slash commands! - kekhelp' }],
	});

	/* Registering slash commands */
	client.interactions = new Collection();
	const data = [];

	const categories = fs.readdirSync('./src/slashcommands/');
	for (const category of categories) {
		const commandFiles = fs.readdirSync(`./src/slashcommands/${category}`).filter(file => file.endsWith('.js'));
		for (const file of commandFiles) {

			const command = await import(`../../src/slashcommands/${category}/${file}`);
			client.interactions.set(command.name, command);
			data.push(command);

		}
	}

	/* Set ApplicationCommand data */
	await client.application.commands.set(data);
};
