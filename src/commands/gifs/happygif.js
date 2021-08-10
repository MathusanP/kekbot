const { Tenorapikey } = require("../../../botconfig.json");
const fetch = require('node-fetch');

module.exports = {
	name: 'happygif',
	description: 'Shows a happy gif.',
	arguments: 0,
	async execute(message) {

		const url = `https://g.tenor.com/v1/search?q=animehappy&key=${Tenorapikey}&limit=8`;
		const response = await fetch(url);
		const json = await response.json();
		const index = Math.floor(Math.random() * json.results.length);

		message.channel.send({ content: `${json.results[index].url}` });
	}
};