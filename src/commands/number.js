const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 69];

module.exports = {
	name: 'number',
	description: '',
	arguments: 0,
	async execute(message) {

		message.channel.send(`${number[Math.floor(Math.random() * [number.length])]}`);

	}
};