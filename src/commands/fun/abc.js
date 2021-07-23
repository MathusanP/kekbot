const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

module.exports = {
	name: 'abc',
	description: '',
	arguments: 0,
	usage: '',
	async execute(message) {

		message.channel.send(`${abc[Math.floor(Math.random() * [abc.length])]}`);
	}
};