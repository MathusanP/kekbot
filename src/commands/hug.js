const Discord = require('discord.js')

module.exports = {
	name: 'hug',
	aliases: [],
	description: '',
	arguments: 0,
	async execute(message, args, prefix, client) {

		if (!args[0]) {
            message.reply("Please provide a user mention to hug!")
        } else if (message.mentions.members.first()) {
            const member = message.mentions.members.first()
            const embed = new Discord.MessageEmbed()
            embed.setDescription(`<@${message.author.id}> hugs <@${member.id}>!`)
            embed.setColor('RANDOM')
            embed.setImage(`https://media1.tenor.com/images/23f263940d5d2bb8e8eaeb3c128e748f/tenor.gif?itemid=17750778`)
            embed.setTimestamp()
            message.channel.send(embed)
        }
	}
}