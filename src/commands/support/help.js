const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const { readdirSync } = require('fs');

module.exports = {
	name: 'help',
	description: 'Provides a list of all my commands!',
	usage: '[command]',

	permissions: [],
	ownerOnly: false,
	guildOnly: false,

	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Provides a list of all my commands!')
		.addStringOption(option => option
			.setName('command')
			.setDescription('Shows details about how to use a command')
			.setRequired(false),
		),

	error: false,
	execute: async ({ interaction, client }) => {

		const cmdName = interaction.options.getString('command');
		const cmd = client.commands.get(cmdName);

		if (cmd) {

			const embed = new MessageEmbed()
				.setColor('RANDOM')
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
				.setColor('RANDOM')
				.setTitle(client.user.username + ' Commands')
				.setURL('https://dsc.gg/kekinv')
				.setDescription('To view the information about a certain command\ndo `/help <command>`.')
				.setThumbnail(client.user.displayAvatarURL())
				.setTimestamp();

			for (const category of ['botinfo', 'fun', 'info', 'media', 'moderation', 'support']) {
				let description = '';

				const commandFiles = readdirSync(__dirname + '/../../commands/' + category).filter(file => file.endsWith('.js'));
				for (const file of commandFiles) {
					const command = require(`${__dirname}/../../commands/${category}/${file}`);
					description += `/${command.name}${command.usage ? ` ${command.usage}` : ''}\n`;
				}

				embed.addField(`__${category.charAt(0).toUpperCase() + category.slice(1)}__`, description, false);
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
