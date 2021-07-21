const coinflip = ["Heads", "Tails"];

module.exports = {
	name: 'flipcoin',
	description: '',
	arguments: 0,
	async execute(message) {

		message.channel.send(`${coinflip[Math.floor(Math.random() * [coinflip.length])]}`);
	}
};