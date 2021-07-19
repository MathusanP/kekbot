const Discord = require('discord.js');
const got = require('got');

module.exports = {
    name: "catpics",
    aliases: ["cat","catpics","catpicture","cats","catpic"],
	description: '',
	arguments: 0,
	async execute(message, args, prefix, client) {

        const embed = new Discord.MessageEmbed();
        got('https://www.reddit.com/r/cats/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let catsUrl = `https://reddit.com${permalink}`;
            let catsImage = content[0].data.children[0].data.url;
            let catsTitle = content[0].data.children[0].data.title;
            let catsUpvotes = content[0].data.children[0].data.ups;
            let catsNumComments = content[0].data.children[0].data.num_comments;

            embed.setTitle(`${catsTitle}`);
            embed.setURL(`${catsUrl}`)
            embed.setColor('RANDOM')
            embed.setImage(catsImage);
            embed.setFooter(`👍 ${catsUpvotes} 💬 ${catsNumComments}`);
            message.channel.send(embed)

        }).catch(console.error);
    }
}

