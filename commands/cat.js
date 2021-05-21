const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
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
        process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    }).catch(console.error);
}

module.exports.config = {
    name: "catpics",
    aliases: ["cat","catpics","catpicture","cats"]
}