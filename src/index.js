import { Client, Collection } from "discord.js";
const client = new Client({
	intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_WEBHOOKS'],
	repliedUser: false
});

client.snipes = new Collection();
client.text_commands = new Collection();

import { connect, set } from 'mongoose';
connect('mongodb+srv://kekbot:kekbot6@kekbot.2g0yc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
set('useFindAndModify', false);


import { readdirSync } from 'fs';
const categories = readdirSync(`${__dirname}/commands/`);
for (const category of categories) {
	const commandFiles = readdirSync(`${__dirname}/commands/${category}`).filter(File => File.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`${__dirname}/commands/${category}/${file}`);
		client.text_commands.set(command.name, command);
	}
}

const eventFiles = readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`${__dirname}/events/${file}`);
	if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
	else client.on(event.name, (...args) => event.execute(...args, client));
}

client.login(process.env['Token']);