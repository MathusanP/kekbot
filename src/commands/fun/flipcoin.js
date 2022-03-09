const { MessageEmbed } = require('discord.js');
const coinflip = ['Heads', 'Tails'];

module.exports = {
	name: 'flipcoin',
	description: 'Flip a coin!',
	usage: '',

	permissions: [],
	ownerOnly: false,
	guildOnly: false,

	error: false,
	execute: ({ interaction }) => {
		const result = (`${coinflip[Math.floor(Math.random() * [coinflip.length])]}`);

		const flipcoinEmbed = new MessageEmbed()
			.setTitle(`**${result}**`)
			.setColor('RANDOM')
			.setTimestamp();

		if (result === 'Heads') {
			flipcoinEmbed.setThumbnail('https://www.royalmint.com/globalassets/the-royal-mint/images/pages/new-pound-coin/large_new_pound.png');
		}
		else if (result === 'Tails') {
			flipcoinEmbed.setThumbnail('https://media.wired.co.uk/photos/606da41a5113453af57347d2/master/w_1600%2Cc_limit/pound-coin.png');
		}


		interaction.followUp({ embeds: [flipcoinEmbed ] });

	},
};
