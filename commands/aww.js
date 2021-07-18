const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed();
    got('https://www.reddit.com/r/aww/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let awwUrl = `https://reddit.com${permalink}`;
        let awwImage = content[0].data.children[0].data.url;
        let awwTitle = content[0].data.children[0].data.title;
        let awwUpvotes = content[0].data.children[0].data.ups;
        let awwNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${awwTitle}`);
        embed.setURL(`${awwUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(awwImage);
        embed.setFooter(`👍 ${awwUpvotes} 💬 ${awwNumComments}`);
        message.channel.send(embed)
        process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    }).catch(console.error);
}

module.exports.config = {
    name: "aww",
    aliases: ["cute"]
}