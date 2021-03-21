const fetch = require("node-fetch").default;


module.exports = async (bot, message) => {
	if (message.author.bot) return;

	if(message.channel.id === "805223035371520010" , "804038105454608395", "823310708128219146") {
		fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}315393628891512832&key=cCXhQnbQAwP89II63ro9p8Kgw`)
		.then(response => response.json())
		.then(data => {
			message.channel.send(data.response)
		})
			
	}



	const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

	if (message.author.bot || message.channel.type === 'dm') return;
	const prefix = "kek";

	if (message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))) return message.channel.send(`${message.guild.name}'s Prefix is \`${prefix}\`\n\nTo get a list of commands, say \`${prefix}help\``);

	if (!message.content.startsWith(prefix)) return;
	const commandfile = bot.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length).toString().toLowerCase()));
	if (commandfile) {
		commandfile.run(bot, message, args);
	}
}