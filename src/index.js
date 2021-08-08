const Discord = require("discord.js");
const mongoose = require('mongoose');
const fs = require('fs');
// eslint-disable-next-line no-unused-vars
const { prefix, testbot } = require("../botconfig.json");
const client = new Discord.Client();
client.snipes = new Discord.Collection();

mongoose.connect('mongodb+srv://kekbot:kekbot6@kekbot.2g0yc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);


client.text_commands = new Discord.Collection();
const categories = fs.readdirSync(`${__dirname}/commands/`);
for (const category of categories) {
	const commandFiles = fs.readdirSync(`${__dirname}/commands/${category}`).filter(File => File.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`${__dirname}/commands/${category}/${file}`);
		client.text_commands.set(command.name, command);
	}
}

const eventFiles = fs.readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`${__dirname}/events/${file}`);
	if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
	else client.on(event.name, (...args) => event.execute(...args, client));
}
client.login(process.env['Token']);
//client.login(testbot);