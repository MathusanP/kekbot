const Discord = require('discord.js');
const client = new Discord.Client({
	intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_WEBHOOKS', 'GUILD_MESSAGE_REACTIONS'],
});


const fs = require('fs');
const eventFiles = fs.readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`${__dirname}/events/${file}`);

	if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
	else client.on(event.name, (...args) => event.execute(...args, client));
}

/*
require('dotenv').config();
client.login(process.env['Token']);
*/
client.login('NzM2NTQ3Mjc5MzIxNjk0MjA5.XxwZGw.HiDUw-9LvSI-IZ8hpwd9fsArapo');