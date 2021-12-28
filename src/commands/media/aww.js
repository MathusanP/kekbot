const { MessageEmbed } = require('discord.js'); 

module.exports = {
    
    name: 'aww',
    description: 'Shows a reddit aww from r/aww',
    usage: '',
    aliases: [],

    permissions: [],
    ownerOnly: false,
    guildOnly: true,

    error: false,
    execute: async ({ interaction, client }) => {
        const { got } = await import('got');
        const embed = new MessageEmbed()
        got('https://www.reddit.com/r/awws/random/.json').then(response => {
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
