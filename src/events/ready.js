import { createRequire } from "module";
const require = createRequire(import.meta.url)
import { Collection } from 'discord.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fs from 'fs'

export const name = 'ready';
export const once = true;
export const execute = async (client) => {

	console.log(`${client.user.tag} has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);

	client.user.setPresence({
		status: "online",
		activities: [{ type: `PLAYING`, name: `Version 3.7 - kekhelp` }]
	});
/* Registering slash commands */
client.commands = new Collection();
const data = [];

const categories = fs.readdirSync(`${__dirname}/../slashcommands/`);
for (const category of categories) {
	const commandFiles = fs.readdirSync(`${__dirname}/../slashcommands/${category}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {

		const command = await import(`../slashcommands/${category}/${file}`);
		client.commands.set(command.name, command);
		data.push(command);

	}
}

await client.application.commands.set(data);
}