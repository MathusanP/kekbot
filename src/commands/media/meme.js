/*
This command is broken and awaits fixing by Bagel or Liam


const { MessageEmbed } = require('discord.js');
import got from 'got'

module.exports = {
    
    name: 'meme',
    description: 'Shows a reddit meme from r/meme',
    usage: '',
    aliases: [],

    permissions: [],
    ownerOnly: false,
    guildOnly: true,

    error: false,
    execute: ({ interaction, client }) => {

        const embed = new MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            const content = JSON.parse(response.body);

            const embed = new MessageEmbed()
                .setTitle(`${content[0].data.children[0].data.title}`)
                .setURL(`https://reddit.com${content[0].data.children[0].data.permalink}`)
                .setColor('RANDOM')
                .setImage(`${content[0].data.children[0].data.url}`)
                .setFooter(`👍 ${content[0].data.children[0].data.ups} 💬 ${content[0].data.children[0].data.num_comments}`);

            interaction.followUp({ embeds: [embed] });

        },
        )
    }
}

// I want to make a button that when pressed repeats the command.
// We could do this by making this command a function and using that function when the user presses the button.
*/