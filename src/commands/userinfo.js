const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
	name: "memberinfo",
    description: "Shows the information of a member/user",
    usage: "kekinfo",
    accessableby: "Members",
    aliases: ['info', 'whois', 'who is','reveal'],
	arguments: 0,
	async execute(message, args, prefix, client) {

        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;



        let x = Date.now() - member.createdAt;
        let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
        const joined = Math.floor(y / 86400000);

        const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
        const userEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTimestamp()
        .setColor('RANDOM')
        .setImage(member.user.displayAvatarURL())
        .addField("Member ID", member.id)
        .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
        .addField("Account Created On:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
        .addField('Joined the server At', `${joineddate} \n> ${joined} day(S) Ago`)
    
        message.channel.send(userEmbed);
    }
}
