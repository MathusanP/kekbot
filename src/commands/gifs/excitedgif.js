const { Tenorapikey } = require("../../../botconfig.json");
const fetch = require('node-fetch');

module.exports = {
	name: 'excitedgif',
	description: 'Shows an excited gif.',
	arguments: 0,
	async execute(message) {

		const url = `https://g.tenor.com/v1/search?q=excited&key=${Tenorapikey}&limit=8`;
		const response = await fetch(url);
		const json = await response.json();
		const index = Math.floor(Math.random() * json.results.length);

		message.channel.send({ content: `${json.results[index].url}` });

	}
};