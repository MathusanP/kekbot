const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
	name: "userinfo",
	aliases: ["whois", 'info'],
	description: 'It shows a description of the person',
	arguments: 0,
	usage: '[member]',
	async execute(message, args) {

		let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.member;

		let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
		const joined = Math.floor(y / 86400000);

		const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
		const userEmbed = new Discord.MessageEmbed()
			.setAuthor(member.user.tag, member.user.displayAvatarURL())
			.setTimestamp()
			.setColor('RANDOM')
			.setImage(member.user.displayAvatarURL())
			.addField("Member ID", `${member.id}`)
			.addField('Roles', `<@&${member._roles.join('> <@&')}>`)
			.addField("Account Created On:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
			.addField('Joined the server At', `${joineddate} \n> ${joined} day(s) Ago`);

		message.channel.send({ embeds: [userEmbed] });
	}
};