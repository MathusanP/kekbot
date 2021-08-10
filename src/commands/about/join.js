module.exports = {
	name: 'join',
	description: 'Sends you a invite to our server!',
	arguments: 0,
	async execute(message) {

		message.channel.send({ content: "`Here is our community discord:` https://discord.gg/pdxkeAe . `Our support discord is`: https://discord.gg/pyznqufsaz" });

	}
};