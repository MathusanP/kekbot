import { Util } from 'discord.js';

import punishments, { findOne } from '../../../models/ModSchema';

export const name = 'warn';
export const aliases = ["w"];
export const description = 'Warns a member for breaking the rules.';
export const permissions = ['Kick Members'];
export const arguments = 1;
export const usage = '<member> [reason]';
export async function execute(message, args) {

	let toWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

	if (message.author.id === toWarn.id)
		return;

	let reason = args[1] ? args.slice(1).join(" ") : "No reason specified";
	if (reason.length > 1024) {
		await message.channel.send({ content: `The reason specified was too long. Please keep reasons under 1024 characters` });
		return;
	}
	reason = Util.cleanContent(reason, message);

	let data = await findOne({
		GuildID: message.guild.id,
		UserID: toWarn.id
	});

	if (data) {
		data.Punishments.unshift({
			PunishType: 'Warn',
			Moderator: message.author.id,
			Reason: reason,
		});
		data.save();

		message.channel.send({ content: `Warned ${toWarn} for \`${reason}\`` });
	}
	else if (!data) {
		let newData = new punishments({
			GuildID: message.guild.id,
			UserID: toWarn.id,
			Punishments: [{
				PunishType: 'Warn',
				Moderator: message.author.id,
				Reason: reason,
			},],
		});
		newData.save();

		message.channel.send({ content: `Warned ${toWarn} for \`${reason}\`` });
	}
}