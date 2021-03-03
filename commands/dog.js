const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed();
    got('https://www.reddit.com/r/dog/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let dogsUrl = `https://reddit.com${permalink}`;
        let dogsImage = content[0].data.children[0].data.url;
        let dogsTitle = content[0].data.children[0].data.title;
        let dogsUpvotes = content[0].data.children[0].data.ups;
        let dogsNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${dogsTitle}`);
        embed.setURL(`${dogsUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(dogsImage);
        embed.setFooter(`👍 ${dogsUpvotes} 💬 ${dogsNumComments}`);
        message.channel.send(embed)
        process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    }).catch(console.error);
}

module.exports.config = {
    name: "dog",
    aliases: ["dogpic","dogpics","dogs"]
}