const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed();
    got('https://www.reddit.com/r/turtle/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let turtleUrl = `https://reddit.com${permalink}`;
        let turtleImage = content[0].data.children[0].data.url;
        let turtleTitle = content[0].data.children[0].data.title;
        let turtleUpvotes = content[0].data.children[0].data.ups;
        let turtleNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${turtleTitle}`);
        embed.setURL(`${turtleUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(turtleImage);
        embed.setFooter(`👍 ${turtleUpvotes} 💬 ${turtleNumComments}`);
        message.channel.send(embed)
        process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    }).catch(console.error);
}

module.exports.config = {
    name: "turtlepic",
    aliases: ["Turtles","turtlepicture","turtle","Turtle"]
}