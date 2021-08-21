import fetch from "node-fetch";
import { MessageEmbed } from 'discord.js';
import pkg from 'quick.db';
const { table } = pkg;

const prefix = 'kek';
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const name = 'messageCreate';
const execute = async (message, client) => {

	if (message.author.bot || message.guild === null) { return; }

	let afk = new table("AFKs");
	const mentioned = message.mentions.members.first();

	if (mentioned) {
		let status = await afk.fetch(mentioned.id);

		if (status) {
			const embed = new MessageEmbed()
				.setColor('RANDOM')
				.setDescription(`This user (${mentioned.user.tag}) is AFK: **${status}**`);
			message.channel.send({ embeds: [embed] }).then(i => i.delete({ timeout: 5000 }));
		}
	}
	//The command below is a conclave server exclusive command and will not be available elsewhere!
	if (message.channel.id === "823310708128219146") {
		fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}315393628891512832&key=cCXhQnbQAwP89II63ro9p8Kgw`)
			.then(response => response.json())
			.then(data => {
				message.channel.send(data.response);
			});
	}

	const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
	if (prefixRegex.test(message.content)) {

		const [, matchedPrefix] = message.content.toLowerCase().match(prefixRegex);
		const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		if (commandName.length !== 0) {
			const cmd = client.text_commands.get(commandName)
				|| client.text_commands.find(file => file.aliases && file.aliases.includes(commandName));

			if (cmd) {
				let allowed = true;

				if (cmd.permissions && allowed === true) {
					for (const permission of cmd.permissions) {
						if (allowed === true
							&& !message.member.permissions.has(permission.trim().toUpperCase().replace(" ", "_"))
							&& !message.member.permissions.has('ADMINISTRATOR')) {

							await message.channel.send({ content: `You do not have permission to use this command.` });
							allowed = false;
						}
					}
				}

				if (cmd.args && allowed === true) {
					const number = cmd.args;
					if (number >= 1) {
						if (!args[number - 1]) {
							await message.channel.send({ content: `Incorrect usage, make sure it follows the format: \`${prefix}${cmd.name} ${cmd.usage}\`` });
							allowed = false;
						}
					}
				}

				if (allowed == true) {
					cmd.execute(message, args, prefix, client);
				}
			}
		}
	}
}

export { name, execute };