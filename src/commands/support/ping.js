module.exports = {
	name: 'ping',
	description: 'How fast does the bot respond?',
	arguments: 0,
	async execute(message) {

		const m = await message.channel.send({ content: "Awaiting ping..." });
		m.edit({ content: `Pong! The number no one asked for is ${m.createdTimestamp - message.createdTimestamp}ms.` });

	}
};