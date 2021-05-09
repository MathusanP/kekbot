const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed();
    got('https://www.reddit.com/r/news/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let newsUrl = `https://reddit.com${permalink}`;
        let newsImage = content[0].data.children[0].data.url;
        let newsTitle = content[0].data.children[0].data.title;
        let newsUpvotes = content[0].data.children[0].data.ups;
        let newsNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${newsTitle}`);
        embed.setURL(`${newsUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(newsImage);
        embed.setFooter(`👍 ${newsUpvotes} 💬 ${newsNumComments}`);
        message.channel.send(embed)
        process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    }).catch(console.error);
}

module.exports.config = {
    name: "news",
    aliases: []
}