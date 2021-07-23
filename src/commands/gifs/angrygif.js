const { Tenorapikey } = require("../../../botconfig.json");
const fetch = require('node-fetch');

module.exports = {
	name: 'angrygif',
	description: '',
	arguments: 0,
	usage: '',
	async execute(message) {

		let url = `https://g.tenor.com/v1/search?q=angry&key=${Tenorapikey}&limit=8`;
		let response = await fetch(url);
		let json = await response.json();
		const index = Math.floor(Math.random() * json.results.length);
		message.channel.send(json.results[index].url);

	}
};