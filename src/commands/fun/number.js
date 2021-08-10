const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 69];

module.exports = {
	name: 'number',
	description: 'Generates a random number between 1 and 10.',
	arguments: 0,
	async execute(message) {

		message.channel.send({ content: `${number[Math.floor(Math.random() * [number.length])]}` });

	}
};