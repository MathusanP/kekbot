const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed();
    got('https://www.reddit.com/r/gamingnews/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let gamingnewsUrl = `https://reddit.com${permalink}`;
        let gamingnewsImage = content[0].data.children[0].data.url;
        let gamingnewsTitle = content[0].data.children[0].data.title;
        let gamingnewsUpvotes = content[0].data.children[0].data.ups;
        let gamingnewsNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${gamingnewsTitle}`);
        embed.setURL(`${gamingnewsUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(gamingnewsImage);
        embed.setFooter(`👍 ${gamingnewsUpvotes} 💬 ${gamingnewsNumComments}`);
        message.channel.send(embed)
        process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    }).catch(console.error);
}

module.exports.config = {
    name: "gamingnews",
    aliases: []
}