module.exports = {
	name: 'patreon',
	description: 'Gives you the link to our patreon!',
	arguments: 0,
	async execute(message) {

		message.channel.send({ content: "If you wish to support us, you can support us on patreon, this would be greatly appreciated! https://www.patreon.com/kekbotwastaken" });

	}
};