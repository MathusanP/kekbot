command(client, 'help', (message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Our commands')
        .setFooter('You can support us using keksupport')
        .setColor('RANDOM')
        .addFields(
            { name: 'Fun', value: 'kekhelp fun', inline: true, },
            { name: 'Moderation', value: 'kekhelp moderation', inline: true, },
            { name: 'About', value: 'kekhelp about', inline: true, },
            { name: 'Images', value: 'kekhelp images', inline: true, },
            { name: 'Utility', value: 'kekhelp utils', inline: true },
            { name: 'Minigames', value: 'kekhelp games', inline: true },
            { name: 'development', value: 'kekhelp dev', inline: true },
            { name: 'Gifs', value: 'kekhelp gifs', inline: true },
            { name: 'Actions', value: 'kekhelp actions', inline: true, },
            { name: 'Media', value: 'kekhelp media', inline: true, },
            { name: 'searches', value: 'kekhelp searches', inline: 'true' }
        )
    message.channel.send(embed)
    })
    command(client, 'help media', (message) => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Here are diffrent types of media/reddit commands available!')
        .setFooter('All media images are from reddit with the reddit post linked!')
        .setColor('RANDOM')
        .addFields(
            { name: 'kekmeme', value: 'Fetches a meme from R/memes', inline: true, },
            { name: 'kekquote', value: 'Fetches a quote from r/quotes', inline: true, },
            { name: 'kekwholesome', value: 'Fetches a wholesome meme', inline: true, },
            { name: 'keknews', value: 'View the news from r/news!', inline: true, },
            { name: 'kekgamingnews', value: 'Get the latest gaming news from r/gamingnews!', inline: true, },
            { name: 'kekfood', value: 'View food made from other people in r/food!', inline: true, }
        )
        message.channel.send(embed)
    })
    command(client, 'help moderation', (message) => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Here are the moderation commands.')
        .setFooter('This bot is still in the making, More commands are still yet to come!')
        .setColor('RANDOM')
        .addFields(
        { name: 'kekkick', value: 'Kicks the mentioned user if the person who kicks has the correct permissions', inline: true, },
        { name: 'keksnipe', value: 'Snipes the last deleted message (This command is in beta)', inline: true }
        )
    message.channel.send(embed)
    })
    command(client, 'help about', (message) => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Here are some useful commands if you want more from the bot!')
        .setFooter('Use kektip to discover some commands!')
        .setColor('RANDOM')
        .addFields(
            { name: 'kekinv', value: 'Gives you a link to invite kekbot on your server!', inline: true, },
            { name: 'kekjoin', value: 'Sends you a invite to our server!', inline: true, },
            { name: 'kekinfo', value: 'Sends our email address and instagram so you can contact us if there are any concerns!', },
            { name: 'kektip', value: 'Sends tips about the bot', inline: true, }
        )
    message.channel.send(embed)
    })
    command(client, 'help utils', (message) => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Utilities.')
        .setFooter('This bot is still in the making, More commands are still yet to come!')
        .setColor('RANDOM')
        .addFields(
            { name: 'kekinfo {@user}', value: 'It shows a description of the person', inline: true, },
            { name: 'kekafk {reason}', value: 'Makes you afk, anyone who pinges you will be notified that your afk , use kekafk to leave afk', inline: true, },
    
            { name: 'kekpurge {amount}', value: 'Bulk deletes messages!', inline: true, },
            { name: 'keksay', value: 'Coming soon!', inline: true, }
        )
    message.channel.send(embed)
    })
    
    command(client, 'help images', (message) => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Images commands.')
        .setFooter('This bot is still in the making, More commands are still yet to come!')
        .setColor('RANDOM')
        .addFields(
            { name: 'kekcat', value: 'Shows a picture of a cat from r/cats!', inline: true, },
            { name: 'kekdog', value: 'Showes dog pics from r/dogs!', inline: true, },
            { name: 'kakparrot', value: 'Shows a parrot picture from r/parrots!', inline: true, },
            { name: 'kekturtle', value: 'Shows turtle pics from r/turtle!', inline: true, },
            { name: 'keksnake', value: 'Shows a snake pic from r/snakes', inline: true, }
        )
        message.channel.send(embed)
    })
    command(client, 'help games', (message) => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Here are the minigames available!')
        .setFooter('All minigames are currently in beta, expect them to be buggy!')
        .setColor('RANDOM')
        .addFields(
            { name: 'kekspeedtype', value: 'Compete with your friends to enter the words that gets displayed by the bot! (in beta)', inline: true,},
        )
    message.channel.send(embed)
    })
    command(client, 'help dev', (message) => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Here are the available dev commands!')
        .setColor('RANDOM')
        .addFields(
            { name: 'kekdocs {Enter the name of the doccumentation you want to view}', value: 'Searches the docs for the item you searched and gives you a link to view it!', inline: true, },
            { name: 'kekbin', value: 'Shows you a paste bin website where you can store your code online', inline: true, },
            { name: ' (In beta) keknpm <Package>', value: 'Search for any npm package!', inline: true }
        )
    message.channel.send(embed)
    })
    command(client, 'support', (message) => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Here are the moderation commands.')
        .setFooter('This bot is still in the making, More commands are still yet to come!')
        .setColor('RANDOM')
        .addFields(
            { name: 'kekpatreon', value: 'Gives you the link to our patreon!', },
            { name: 'kekvote', value: 'Gives you our voting links!', },
            { name: 'keksurvey', value: 'Take part in a survey to help improve kekbot!' }
        )
    message.channel.send(embed)
    })
    command(client, 'help gifs', (message) => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Here are diffrent types of gifs available!')
        .setFooter('All gifs are from tenor!')
        .setColor('RANDOM')
        .addFields(
            { name: 'kekexcitedgif', value: 'Shows an excited gif', inline: true, },
            { name: 'keksadgif', value: 'Shows a sad gif', inline: true, },
            { name: 'kekhappygif', value: 'Shows a happy gif', inline: true, },
            { name: 'kekangrygif', value: 'Shows an angry gif', }
        )
    message.channel.send(embed)
    })
    command(client, 'help actions', (message) => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Here are diffrent action commands available!.')
        .setFooter('Vote for us via kekvote!')
        .setColor('RANDOM')
        .addFields(
            { name: 'kekpat <user>', value: 'Pat a user!', inline: true, },
            { name: 'kekslap <user>', value: 'Slap a user!', inline: true, },
            { name: 'kekhug <user>', value: 'Hug a user!', inline: true, },
            { name: 'kekhandshake <user>', value: 'Handshake a user!', inline: true, },
            { name: 'kekkiss <user>', value: 'Kiss a user!', inline: true, },
            { name: 'kekwave <user>', value: 'Wave at someone!', inline: true }
        )
    message.channel.send(embed)
    })
    command(client, 'help fun', (message) => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Here are some fun commands!')
        .setFooter('You can support us using keksupport!')
        .setColor('RANDOM')
        .addFields(
            { name: 'kekdice', value: 'Roll a dice!', inline: true, },
            { name: 'kek8ball', value: 'The 8 ball command', inline: true },
            { name: 'kekflipcoin', value: 'Flip a coin', inline: true },
            { name: 'keknumber', value: 'generate a number between 1-10, if your lucky you can get 69 as a value', inline: true },
            { name: 'kekabc', value: 'Fetches a random letter from the english alphabet', inline: true }
        )
    message.channel.send(embed)
    })