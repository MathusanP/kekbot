module.exports = {
	name: 'ping',
	description: '',
	arguments: 0,
	async execute(message) {

		const m = await message.channel.send("Awaiting ping...");
		m.edit(`Pong! The number no one asked for is ${m.createdTimestamp - message.createdTimestamp}ms.`);

	}
};