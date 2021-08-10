module.exports = {
	name: 'vote',
	aliases: ['top.gg'],
	description: 'Gives you our voting links!',
	arguments: 0,
	async execute(message) {

		message.channel.send({ content: "You can vote for https://top.gg/bot/734007071686787123" });

	}
};