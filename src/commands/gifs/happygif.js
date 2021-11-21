import config from '../../../botconfig.json';
import fetch from 'node-fetch';

export const name = 'happygif';
export const description = 'Shows a happy gif.';
export const args = 0;
export const execute = async (message) => {

	const url = `https://g.tenor.com/v1/search?q=animehappy&key=${config.Tenorapikey}&limit=8`;
	const response = await fetch(url);
	const json = await response.json();
	const index = Math.floor(Math.random() * json.results.length);

	message.channel.send({ content: `${json.results[index].url}` });
};