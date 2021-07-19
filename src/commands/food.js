const Discord = require('discord.js');
const got = require('got');

module.exports = {
	name: "food",
    aliases: ["foodpic","foodpics"],
    description: '',
	arguments: 0,
	async execute(message, args, prefix, client) {

        const embed = new Discord.MessageEmbed();

        got('https://www.reddit.com/r/food/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let foodUrl = `https://reddit.com${permalink}`;
            let foodImage = content[0].data.children[0].data.url;
            let foodTitle = content[0].data.children[0].data.title;
            let foodUpvotes = content[0].data.children[0].data.ups;
            let foodNumComments = content[0].data.children[0].data.num_comments;

            embed.setTitle(`${foodTitle}`);
            embed.setURL(`${foodUrl}`)
            embed.setColor('RANDOM')
            embed.setImage(foodImage);
            embed.setFooter(`👍 ${foodUpvotes} 💬 ${foodNumComments}`);
            message.channel.send(embed)

        })
    }
}
