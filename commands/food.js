const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
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
        process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    }).catch(console.error);
}

module.exports.config = {
    name: "food",
    aliases: ["foodpic","foodpics","foodporn"]
}