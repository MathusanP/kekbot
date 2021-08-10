const { Tenorapikey } = require("../../../botconfig.json");
const fetch = require('node-fetch');

module.exports = {
	name: 'angrygif',
	description: 'Shows an angry gif.',
	arguments: 0,
	async execute(message) {

		const url = `https://g.tenor.com/v1/search?q=angry&key=${Tenorapikey}&limit=8`;
		const response = await fetch(url);
		const json = await response.json();
		const index = Math.floor(Math.random() * json.results.length);

		message.channel.send({ content: `${json.results[index].url}` });

	}
};