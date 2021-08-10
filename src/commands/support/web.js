module.exports = {
	name: 'web',
	aliases: ['site', 'website'],
	description: 'Gives a link to our cool website!',
	arguments: 0,
	async execute(message) {

		message.channel.send({ content: "Here is our website! https://www.kekbot.cf" });

	}
};