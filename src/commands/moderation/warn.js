const punishments = require('../../../models/ModSchema');

module.exports = {
	name: 'warn',
	aliases: ["w"],
	description: '',
	permissions: ['Kick Members'],
	arguments: 1,
	usage: '<member> [reason]',
	async execute(message, args) {

		let toWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

		if(message.author.id === toWarn.id) return;

		let reason = args[1] ? args.slice(1).join(" ") : "No reason specified";
		if(reason.length > 1024) {
			await mwssage.channel.send(`The reason specified was too long. Please keep reasons under 1024 characters`);
			return;
		}
		reason = Discord.Util.cleanContent(reason, message);

		let data = await punishments.findOne({
			GuildID: message.guild.id,
			UserID: toWarn.id
		});

		if(data) {
			data.Punishments.unshift({
				PunishType: 'Warn',
				Moderator: message.author.id,
				Reason: reason,
			});
			data.save();

			message.channel.send(`Warned ${toWarn} for \`${reason}\``);
		}
		else if (!data) {
			let newData = new punishments({
				GuildID: message.guild.id,
				UserID: toWarn.id,
				Punishments: [{
					PunishType: 'Warn',
					Moderator: message.author.id,
					Reason: reason,
				}, ],
			});
			newData.save();

			message.channel.send(`Warned ${toWarn} for \`${reason}\``);
		}
	}

};
