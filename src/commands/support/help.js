const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const { readdirSync } = require('fs');

module.exports = {
	name: 'help',
	description: 'Provides a list of all my commands!',
	usage: '[command]',

	permissions: [],
	ownerOnly: false,
	guildOnly: false,

	options: [
		{ name: 'command', description: 'Shows details about how to use a command', type: 'STRING', required: false },
	],

	error: false,
	execute: async ({ interaction, client }) => {

		const cmdName = interaction.options.getString('command');
		const cmd = client.commands.get(cmdName);

		if (cmd) {

			const embed = new MessageEmbed()
				.setColor('#0099FF')
				.setTitle(cmd.name.charAt(0).toUpperCase() + cmd.name.slice(1) + ' Command')
				.setURL('https://dsc.gg/kekinv')
				.setDescription(cmd.description)
				.setTimestamp();

			embed.addField('__Usage:__', '/' + cmd.name + (cmd.usage ? ' ' + cmd.usage : ''), false);

			if (cmd.permissions[0] && cmd.ownerOnly == false) {
				embed.addField('__Permissions:__', '`' + cmd.permissions.join('` `') + '`', false);
			}
			if (!cmd.permissions[0] && cmd.ownerOnly == true) {
				embed.addField('__Permissions:__', '**Server Owner Only**', false);
			}
			if (cmd.error == true) {
				embed.addField('__Error:__', 'This command is currently unavailable, please try again later.', false);
			}

			interaction.followUp({ embeds: [embed], ephemeral: false });

		}
		else {

			const embed = new MessageEmbed()
				.setColor('#0099FF')
				.setTitle(client.user.username + ' Commands')
				.setURL('https://dsc.gg/kekinv')
				.setDescription('To view the information about a certain command\ndo `/help <command>`.')
				.setThumbnail(client.user.displayAvatarURL())
				.setTimestamp();

			for (const category of ['fun', 'moderation', 'support']) {

				const commandFiles = readdirSync(__dirname + '/../../commands/' + category).filter(file => file.endsWith('.js'));
				const commands = commandFiles.map(f => f.slice(0, f.length - 3));

				embed.addField(`__${category.charAt(0).toUpperCase() + category.slice(1)}__`, `\`${commands.join('`\n`')}\``, false);
			}

			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setStyle('LINK').setLabel('Support Server').setURL('https://dsc.gg/kekbot'),
					new MessageButton()
						.setStyle('LINK').setLabel('Invite').setURL('https://dsc.gg/kekinv'),
				);

			interaction.followUp({ embeds: [embed], components: [row], ephemeral: false });

		}

	},
};