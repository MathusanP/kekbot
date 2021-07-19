const Discord = require('discord.js');
const got = require('got');

module.exports = {
	name: "turtlepic",
    aliases: ["Turtles","turtlepicture","turtle","Turtle"],
    description: '',
	arguments: 0,
	async execute(message, args, prefix, client) {

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

        })
    }
}