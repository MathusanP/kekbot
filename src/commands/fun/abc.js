const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

module.exports = {
	name: 'abc',
	description: 'generates a random English letter!',
	arguments: 0,
	async execute(message) {

		message.channel.send({ content: `${abc[Math.floor(Math.random() * [abc.length])]}` });

	}
};