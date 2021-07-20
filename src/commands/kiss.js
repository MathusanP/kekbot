const Discord = require('discord.js')
module.exports = {
	name: 'kiss',
	aliases: [],
	description: '',
	arguments: 0,
	async execute(message, args, prefix, client) {

		if (!args[0]) {
            message.reply("Please provide a user mention to kiss!")
        } else if (message.mentions.members.first()) {
            const member = message.mentions.members.first()
            const embed = new Discord.MessageEmbed()
            embed.setDescription(`<@${message.author.id}> kisses <@${member.id}>!`)
            embed.setColor('RANDOM')
            embed.setImage(`https://i.pinimg.com/originals/2b/52/71/2b5271e20fa65925e07d0338fa290135.gif`)
            embed.setTimestamp()
            message.channel.send(embed)
        }
	}
}