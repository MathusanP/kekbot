const Discord = require("discord.js")
const mongoose = require('mongoose')

const client = new Discord.Client();

const { prefix, token, Tenorapikey } = require("../botconfig.json")


mongoose.connect('mongodb+srv://kekbot:kekbot6@kekbot.2g0yc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useFindAndModify', false);


client.text_commands = new Discord.Collection();
const commandFiles = fs.readdirSync(`${__dirname}/commands/`).filter(File => File.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`${__dirname}/commands/${file}`);
	client.text_commands.set(command.name, command);

}

const eventFiles = fs.readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`${__dirname}/events/${file}`);
	if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
	else client.on(event.name, (...args) => event.execute(...args, client));
}

client.login(token)