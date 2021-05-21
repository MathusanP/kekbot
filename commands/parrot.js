const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed();
    got('https://www.reddit.com/r/parrots/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let parrotUrl = `https://reddit.com${permalink}`;
        let parrotImage = content[0].data.children[0].data.url;
        let parrotTitle = content[0].data.children[0].data.title;
        let parrotUpvotes = content[0].data.children[0].data.ups;
        let parrotNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${parrotTitle}`);
        embed.setURL(`${parrotUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(parrotImage);
        embed.setFooter(`👍 ${parrotUpvotes} 💬 ${parrotNumComments}`);
        message.channel.send(embed)
        process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    }).catch(console.error);
}

module.exports.config = {
    name: "parrot",
    aliases: []
}