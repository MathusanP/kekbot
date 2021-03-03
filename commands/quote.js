const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed();
    got('https://www.reddit.com/r/quotes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let quotesUrl = `https://reddit.com${permalink}`;
        let quotesImage = content[0].data.children[0].data.url;
        let quotesTitle = content[0].data.children[0].data.title;
        let quotesUpvotes = content[0].data.children[0].data.ups;
        let quotesNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${quotesTitle}`);
        embed.setURL(`${quotesUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(quotesImage);
        embed.setFooter(`👍 ${quotesUpvotes} 💬 ${quotesNumComments}`);
        message.channel.send(embed)
        process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    }).catch(console.error);
}

module.exports.config = {
    name: "quote",
    aliases: ["quotes"]
}