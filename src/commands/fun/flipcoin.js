import { MessageEmbed } from 'discord.js';

const coinflip = ["Heads", "Tails"];

export const name = 'flipcoin';
export const description = 'Flips a coin [heads/tails]';
export const v = 0;
export const aliases = ['coinflip']
export const execute = (message) => {

	const result = (`${coinflip[Math.floor(Math.random() * [coinflip.length])]}`);

	const flipcoinEmbed = new MessageEmbed()
		.setTitle(`**${result}**`)
		.setColor("RANDOM")
		.setFooter(`${message.author.username}`)
		.setTimestamp();

	if (result === "Heads") {
		flipcoinEmbed.setThumbnail("https://www.royalmint.com/globalassets/the-royal-mint/images/pages/new-pound-coin/large_new_pound.png");
	}
	else if (result === "Tails") {
		flipcoinEmbed.setThumbnail("https://media.wired.co.uk/photos/606da41a5113453af57347d2/master/w_1600%2Cc_limit/pound-coin.png");
	}

	message.channel.send({ embeds: [flipcoinEmbed] });
}