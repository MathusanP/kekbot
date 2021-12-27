const { MessageEmbed, WebhookClient } = require('discord.js');

module.exports = {
	name: 'report',
	description: 'Report a bug/issue to the developers!',
	usage: '<detailed description>',

	permissions: [],
	ownerOnly: false,
	guildOnly: true,

	options: [
		{ name: 'description', description: 'Explain the bug/issue in great detail.', type: 'STRING', required: true },
	],

	error: false,
	execute: ({ interaction, client }) => {

		const avatarURL = interaction.guild.iconURL() ? interaction.guild.iconURL() : 'https://i.imgur.com/yLv2YVnh.jpg';
		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setDescription(`**${client.user.tag}**\n${interaction.options.getString('description')}`)
			.setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
			.setFooter(`ID: ${interaction.member.id}`)
			.setTimestamp();

		const webhook = new WebhookClient({ url: 'https://discord.com/api/webhooks/923721864382132255/gk5Q7Xm06ysV-W8_1B-y44fimtu0lfLzDQ6ZenGTToAMAKQvn7dw0vggb4HFCEW2r2_S'});
		webhook.send({ username: interaction.guild.name, avatarURL, embeds: [embed] });

		interaction.followUp({ content: 'This report will help improve kekbot! Thank you!.', ephemeral: true });
	},
};