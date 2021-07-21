const punishments = require('../../../models/ModSchema');

module.exports = {
	name: 'warn',
	aliases: ["w"],
	description: '',
	arguments: 0,
	async execute(message, args) {

		let toWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

		if (!message.member.hasPermission("ADMINISTRATOR")) {
			return message.reply("You can't warn members mate. Permissions needed: Administrator");
		}

		if(message.author.id === toWarn.id) return;

		let reason = args.slice(1).join(" ");

		if(!reason) return message.channel.send('Yea mate I suppose I could warn the person FOR NO REASON!');

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
