const { Tenorapikey } = require("../../botconfig.json");

module.exports = {
	name: 'excitedgif',
	description: '',
	arguments: 0,
	async execute(message) {

		let url = `https://g.tenor.com/v1/search?q=excited&key=${Tenorapikey}&limit=8`;
		let response = await fetch(url);
		let json = await response.json();
		const index = Math.floor(Math.random() * json.results.length);
		message.channel.send(json.results[index].url);

	}
};