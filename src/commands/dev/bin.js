module.exports = {
	name: 'bin',
	description: 'Get a link to source bin.',
	arguments: 0,
	async execute(message) {

		message.channel.send({ content: "https://sourceb.in" });

	}
};