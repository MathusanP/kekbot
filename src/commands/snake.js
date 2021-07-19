const Discord = require('discord.js');
const got = require('got');

module.exports = {
    name: "snakepic",
    aliases: ["snakepicture","SNAKE","snake"],
    description: '',
	arguments: 0,
	async execute(message, args, prefix, client) {

        const embed = new Discord.MessageEmbed();
        got('https://www.reddit.com/r/snakes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let snakeUrl = `https://reddit.com${permalink}`;
            let snakeImage = content[0].data.children[0].data.url;
            let snakeTitle = content[0].data.children[0].data.title;
            let snakeUpvotes = content[0].data.children[0].data.ups;
            let snakeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${snakeTitle}`);
            embed.setURL(`${snakeUrl}`)
            embed.setColor('RANDOM')
            embed.setImage(snakeImage);
            embed.setFooter(`👍 ${snakeUpvotes} 💬 ${snakeNumComments}`);
            message.channel.send(embed)

        }).catch(console.error);
    }
}
