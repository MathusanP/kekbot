const path = require('path')
const fs = require('fs')
const Discord = require("discord.js")
const { prefix, token, Tenorapikey } = require("./botconfig.json")
const command = require('./Commands')
const mongoose = require('mongoose')
const db = require('quick.db')
const Commando = require('discord.js-commando')
const fetch = require('node-fetch')
const bot = new Commando.CommandoClient({
  owner: '315393628891512832',
  commandPrefix: prefix
})
bot.commands = new Discord.Collection();
const { MessageEmbed } = require('discord.js');


mongoose.connect('mongodb+srv://kekbot:kekbot6@kekbot.2g0yc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
bot.on("ready", () => {
  console.log(`kekbot has started, with ${bot.users.cache.size} users, in ${bot.channels.cache.size} channels of ${bot.guilds.cache.size} guilds.`);
  bot.user.setActivity(`V3.2 - kekhelp`);
});



bot.login(token)


bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === `${prefix}inv`) {
    msg.channel.send("You can invite me here: https://dsc.gg/kekinv")
  }

});


bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === `${prefix}join`) {
    msg.channel.send("`Here is our community discord:` https://discord.gg/pdxkeAe . `Our support discord is`: https://discord.gg/pyznqufsaz")
  }

});

bot.login(token)

bot.on("guildDelete", guild => {

  bot.users.fetch('315393628891512832').then((user) => {
    user.send(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  });
})

bot.login(token)

bot.on("guildCreate", guild => {
  bot.users.fetch('315393628891512832').then((user) => {
    user.send(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  })
})

bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === `${prefix}-v`) {
    msg.channel.send("`version 3.2`")
  }

});

bot.login(token)


bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === `${prefix}-V`) {
    msg.channel.send("`Version 3.2`")
  }

});

bot.login(token)

bot.on("message", async message => {
  if (message.content === "kekping") {
    const m = await message.channel.send("Awaiting ping...");
    m.edit(`Pong! The number no one asked for is ${m.createdTimestamp - message.createdTimestamp}ms.`);
    process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    // Recently was "ping" alone. I replaced the original command with kekping.    
  }
})


bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === `${prefix}consoleping`) {
    console.log(`pong!`)
    // this command was only used for the purpose of testing console.log commands. 
  }
});

bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === `keksay`) {
    return msg.reply("coming soon")
  }

});

bot.login(token)

bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === `${prefix}birthday`) {
    msg.channel.send("I was made by <@315393628891512832> on 19th of july 2020")
  }

});

bot.login(token)



bot.on('message', message => {
  if (message.content.startsWith(`kekkick`)) {
    //message.channel.send("kick")
    let member = message.mentions.members.first();
    member.kick().then((member) => {
      message.channel.send(":wave: " + member.displayName + "has been kicked!")
      process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    })

  }


})

bot.login(token)




command(bot, 'help', (message) => {
  const embed = new Discord.MessageEmbed()
    .setTitle('Here are diffrent help categories, Most commands are lowercase!.')
    .setFooter('You can support us using keksupport')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'Facts',
        value: 'kekhelp facts',
        inline: true,
      },
      {
        name: 'Fun',
        value: 'kekhelp fun',
        inline: true,
      },
      {
        name: 'Moderation',
        value: 'kekhelp moderation',
        inline: true,
      },
      {
        name: 'About',
        value: 'kekhelp about',
        inline: true,
      },
      {
        name: 'Images',
        value: 'kekhelp images',
        inline: true,
      },
      {
        name: 'Utility',
        value: 'kekhelp utils',
        inline: true
      },
      {
        name: 'Minigames',
        value: 'kekhelp games',
        inline: true
      },
      {
        name: 'development',
        value: 'kekhelp dev',
        inline: true
      },
      {
        name: 'Gifs',
        value: 'kekhelp gifs',
        inline: true
      },
      {
        name: 'Actions',
        value: 'kekhelp actions',
        inline: true,
      },
      {
        name: 'Media',
        value: 'kekhelp media',
        inline: true.valueOf,
      }
    )
  message.channel.send(embed)
})


bot.login(token)


bot.on("message", (msg) => {
  if (msg.author.bot) return;

  const args = msg.content.split(/ +/);
  const firstWord = args.shift().toLowerCase();

  if (firstWord == `${prefix}8ball`) {
    const ball = require("./8ball.json");
    msg.channel.send(
      `${ball[Math.floor(Math.random() * [ball.length])]
      }`
    )
  }
});

bot.on("message", msg => {
  if (msg.content === `${prefix}catfact`) {
    const catFacts = require("./Cat.json");
    msg.channel.send(
      `${catFacts[Math.floor(Math.random() * [catFacts.length])]
      }`
    )
  }
})

bot.login(token)

bot.on("message", msg => {
  if (msg.content === `${prefix}dogfact`) {
    const dogFacts = require("./dog.json");
    msg.channel.send(
      `${dogFacts[Math.floor(Math.random() * [dogFacts.length])]
      }`
    )
  }
})

bot.login(token)

bot.on("message", msg => {
  if (msg.content === `${prefix}snakefact`) {
    const snakeFacts = require("./Snake.json");
    msg.channel.send(
      `${snakeFacts[Math.floor(Math.random() * [snakeFacts.length])]
      }`
    )
  }
})

bot.login(token)

bot.on("message", msg => {
  if (msg.content === `${prefix}parrotfact`) {
    const parrotFacts = require("./Parrot.json");
    msg.channel.send(
      `${parrotFacts[Math.floor(Math.random() * [parrotFacts.length])]
      }`
    )
  }
})

bot.login(token)


command(bot, 'help facts', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are diffrent types of animal facts available.')
    .setFooter('You can support us using keksupport')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekparrotfact',
        value: 'Displays a random fact',
        inline: true,
      },
      {
        name: 'kekdogfact',
        value: 'Displays a random dog fact',
        inline: true,
      },
      {
        name: 'kekcatfact',
        value: 'Displays a random cat fact',
        inline: true,
      },
      {
        name: 'keksnakefact',
        value: 'Displays a random snake fact',
      }
    )

  message.channel.send(embed)
})


bot.login(token)


command(bot, 'help media', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are diffrent types of media/reddit commands available!')
    .setFooter('All media images are from reddit with the reddit post linked!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekmeme',
        value: 'Fetches a meme from R/memes',
        inline: true,
      },

      {
        name: 'kekquote',
        value: 'Fetches a quote from r/quotes',
        inline: true,
      },
      {
        name: 'kekwholesome',
        value: 'Fetches a wholesome meme',
        inline: true,
      },
      {
        name: 'keknews',
        value: 'View the news from r/news!',
        inline: true,
      },
      {
        name: 'kekgamingnews',
        value: 'Get the latest gaming news from r/gamingnews!',
        inline: true,
      },
      {
        name: 'kekfood',
        value: 'View food made from other people in r/food!',
        inline: true,
      }
    )
  message.channel.send(embed)
})


bot.login(token)



command(bot, 'help moderation', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are the moderation commands.')
    .setFooter('This bot is still in the making, More commands are still yet to come!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekkick',
        value: 'Kicks the mentioned user if the person who kicks has the correct permissions',
        inline: true,
      },
      {
        name: 'keksnipe',
        value: 'Snipes the last deleted message (This command is in beta)',
        inline: true
      }
    )
  message.channel.send(embed)
})


bot.login(token)

bot.on("message", msg => {
  if (msg.content === `${prefix}flipcoin`) {
    const Flipcoin = require("./Flipcoin.json");
    msg.channel.send(
      `${Flipcoin[Math.floor(Math.random() * [Flipcoin.length])]
      }`
    )
  }
})

bot.login(token)


bot.on("message", msg => {
  if (msg.content === `${prefix}number`) {
    const number = require("./Number.json");
    msg.channel.send(
      `${number[Math.floor(Math.random() * [number.length])]
      }`
    )
  }
})

bot.login(token)

bot.on("message", msg => {
  if (msg.content === `kekbot`) {
    const kekbot = require("./kek.json");
    msg.channel.send(
      `${kekbot[Math.floor(Math.random() * [kekbot.length])]
      }`
    )
  }
})

bot.login(token)



command(bot, 'help about', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are some useful commands if you want more from the bot!')
    .setFooter('Use kektip to discover some commands!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekinv',
        value: 'Gives you a link to invite kekbot on your server!',
        inline: true,
      },
      {
        name: 'kekjoin',
        value: 'Sends you a invite to our server!',
        inline: true,
      },

      {
        name: 'kekinfo',
        value: 'Sends our email address and instagram so you can contact us if there are any concerns!',
      },
      {
        name: 'kektip',
        value: 'Sends tips about the bot',
        inline: true,
      }
    )
  message.channel.send(embed)
})


bot.login(token)


partials: ['MESSAGE', 'CHANNEL', 'REACTION']

const { loadCommands } = require('./utils/loadCommands');
const { Db } = require('mongodb')
const message = require('./events/message')
const { random } = require('colors')

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);


bot.on('message', message => {

  if (message.content.startsWith(`kekban`)) {
    //message.channel.send("ban")
    let member = message.mentions.members.first();
    member.ban().then((member) => {
      message.channel.send(":wave: " + member.displayName + "has been banned!!")
      process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    })

  }


})

bot.login(token)


command(bot, 'help images', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Images commands.')
    .setFooter('This bot is still in the making, More commands are still yet to come!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekcat',
        value: 'Shows a picture of a cat from r/cats!',
        inline: true,
      },
      {
        name: 'kekdog',
        value: 'Showes dog pics from r/dogs!',
        inline: true,
      },

      {
        name: 'kakparrot',
        value: 'Shows a parrot picture from r/parrots!',
        inline: true,
      },
      {
        name: 'kekturtle',
        value: 'Shows turtle pics from r/turtle!',
        inline: true,
      },
      {
        name: 'keksnake',
        value: 'Shows a snake pic from r/snakes',
        inline: true,
      }
    )
  message.channel.send(embed)
})


bot.login(token)


partials: ['MESSAGE', 'CHANNEL', 'REACTION']
mongoose.set('useFindAndModify', false);

require('./utils/loadEvents')(bot);
bot.snipes = new Discord.Collection();

loadCommands(bot);

bot.login(token)


bot.on("message", msg => {
  if (msg.content === `kektip`) {
    const tips = require("./tips.json");
    msg.channel.send(
      `${tips[Math.floor(Math.random() * [tips.length])]
      }`
    )
  }
})

bot.login(token)


bot.on("message", msg => {
  if (msg.content === `${prefix}patreon`) {
    msg.channel.send("If you wish to support us, you can support us on patreon, this would be greatly appreciated! https://www.patreon.com/kekbotwastaken")
  }

});

bot.login(token)



bot.on("message", async message => {
  let afk = new db.table("AFKs")
  authorStatus = await afk.fetch(message.author.id)
  mentioned = message.mentions.members.first()

  if (mentioned) {
    let status = await afk.fetch(mentioned.id);

    if (status) {
      const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`This user (${mentioned.user.tag}) is AFK: **${status}**`)
      message.channel.send(embed).then(i => i.delete({ timeout: 5000 }));
    }
  }
})


bot.on("message", async msg => {
  if (msg.content.startsWith(`kekafk`)) {
    const status = new db.table("Afks");
    let afk = await status.fetch(msg.author.id)
    const embed = new Discord.MessageEmbed().setColor('RANDOM')
    const args = msg.content.trim().split(/ +/g);
    if (!afk) {
      embed.setDescription(`**${msg.author.tag}** is now AFK.`)
      status.set(msg.author.id, args.join(" ") || `AFK`);
      embed.setImage(`https://media.tenor.com/images/df51877535a3e38c9cccd2f23ff154a2/tenor.gif`)
      embed.setTimestamp()
    } else {
      embed.setDescription("You are no longer AFK")
      embed.setImage(`https://media.tenor.com/images/0312d81fd79a45df1e6fcc60ec747431/tenor.gif`)
      embed.setTimestamp()
      status.delete(msg.author.id);
    }
    msg.channel.send(embed)
  }
});

bot.login(token)

bot.on("message", msg => {
  if (msg.content === `kekvote`) {
    msg.channel.send("You can vote for https://top.gg/bot/734007071686787123")
  }

});


bot.on("message", msg => {
  if (msg.content === `kekweb`) {
    msg.channel.send("Here is our website! https://kekweb.bagelwastaken.repl.co/")
  }

});


command(bot, 'help utils', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Utilities.')
    .setFooter('This bot is still in the making, More commands are still yet to come!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekinfo {@user}',
        value: 'It shows a description of the person',
        inline: true,
      },
      {
        name: 'kekafk {reason}',
        value: 'Makes you afk, anyone who pinges you will be notified that your afk , use kekafk to leave afk',
        inline: true,
      },

      {
        name: 'kekpurge {amount}',
        value: 'Bulk deletes messages!',
        inline: true,
      },
      {
        name: 'keksay',
        value: 'Coming soon!',
        inline: true,
      }
    )
  message.channel.send(embed)
})


bot.login(token)


bot.registry
  .registerGroups([
    ['games', 'Commands to handle games'],
    ['misc', 'Mainly dev command will be stored here or commands I can not categorise']

  ])
  .registerCommandsIn(path.join(__dirname, 'cmds'))


command(bot, 'help games', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are the minigames available!')
    .setFooter('All minigames are currently in beta, expect them to be buggy!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekspeedtype',
        value: 'Compete with your friends to enter the words that gets displayed by the bot! (in beta)',
        inline: true,
      },
    )
  message.channel.send(embed)
})


bot.login(token)


command(bot, 'help dev', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are the available dev commands!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekdocs {Enter the name of the doccumentation you want to view}',
        value: 'Searches the docs for the item you searched and gives you a link to view it!',
        inline: true,
      },
      {
        name: 'kekbin',
        value: 'Shows you a paste bin website where you can store your code online',
        inline: true,
      }
    )
  message.channel.send(embed)
})


bot.login(token)

command(bot, 'support', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are the moderation commands.')
    .setFooter('This bot is still in the making, More commands are still yet to come!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekpatreon',
        value: 'Gives you the link to our patreon!',
      },
      {
        name: 'kekvote',
        value: 'Gives you our voting links!',
      },
      {
        name: 'keksurvey',
        value: 'Take part in a survey to help improve kekbot!'
      }
    )
  message.channel.send(embed)
})


bot.login(token)

bot.on("message", async msg => {
  if (msg.author.bot) return;
  const embed = new Discord.MessageEmbed().setColor('RANDOM')
  if (msg.content === `${prefix}excitedgif`) {
    let url = `https://g.tenor.com/v1/search?q=excited&key=${Tenorapikey}&limit=8`
    let response = await fetch(url)
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length)
    msg.channel.send(json.results[index].url)
  }
})



command(bot, 'help gifs', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are diffrent types of gifs available!')
    .setFooter('All gifs are from tenor!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekexcitedgif',
        value: 'Shows an excited gif',
        inline: true,
      },
      {
        name: 'keksadgif',
        value: 'Shows a sad gif',
        inline: true,
      },
      {
        name: 'kekhappygif',
        value: 'Shows a happy gif',
        inline: true,
      },
      {
        name: 'kekangrygif',
        value: 'Shows an angry gif',
      }
    )

  message.channel.send(embed)
})


bot.login(token)


bot.on("message", async msg => {
  if (msg.author.bot) return;
  const embed = new Discord.MessageEmbed().setColor('RANDOM')
  if (msg.content === `${prefix}sadgif`) {
    let url = `https://g.tenor.com/v1/search?q=animesad&key=${Tenorapikey}&limit=8`
    let response = await fetch(url)
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length)
    msg.channel.send(json.results[index].url)
  }
})

bot.on("message", async msg => {
  if (msg.author.bot) return;
  const embed = new Discord.MessageEmbed().setColor('RANDOM')
  if (msg.content === `${prefix}happygif`) {
    let url = `https://g.tenor.com/v1/search?q=animehappy&key=${Tenorapikey}&limit=8`
    let response = await fetch(url)
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length)
    msg.channel.send(json.results[index].url)
  }
})


bot.on("message", async msg => {
  if (msg.author.bot) return;
  const embed = new Discord.MessageEmbed().setColor('RANDOM')
  if (msg.content === `${prefix}angrygif`) {
    let url = `https://g.tenor.com/v1/search?q=angry&key=${Tenorapikey}&limit=8`
    let response = await fetch(url)
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length)
    msg.channel.send(json.results[index].url)
  }
})





bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === `${prefix}bin`) {
    msg.channel.send("https://sourceb.in")
  }

});

bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === `${prefix}servers`) {
    msg.channel.send(`I am currently in ${bot.guilds.cache.size} servers!`)
  }

});

bot.login(token)

bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === `${prefix}survey`) {
    msg.channel.send("It would be greatly appreciated if you would fill in this survery for us! It'll help improve kekbot alot https://forms.gle/cerRXJmMuDFHHup47")
  }

});

bot.login(token)


bot.on("guildCreate", guild => {
  let defaultChannel = "";
  guild.channels.cache.forEach((channel) => {
    if (channel.type == "text" && defaultChannel == "") {
      if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
        defaultChannel = channel;
      }
    }
  })

  defaultChannel.send(`Support server:  https://discord.gg/pyznqufsaz`, {
    embed: {
      color: 0x2471a3,
      description: "Hello! Thanks for adding kekbot! To get started use kekhelp!",
      image: 'https://media.tenor.com/images/8e8886cf7dfe0f729b7a684c6f59bf8a/tenor.gif'
    }
  }

  )
})

bot.login(token)




command(bot, 'help fun', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are some fun commands!')
    .setFooter('You can support us using keksupport!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekdice',
        value: 'Roll a dice!',
        inline: true,
      },
      {
        name: 'kek8ball',
        value: 'The 8 ball command',
        inline: true
      },
      {
        name: 'kekflipcoin',
        value: 'Flip a coin',
        inline: true
      },
      {
        name: 'keknumber',
        value: 'generate a number between 1-10, if your lucky you can get 69 as a value',
        inline: true
      },

    )

  message.channel.send(embed)
})


bot.login(token)



bot.on("message", msg => {
  if (msg.content === `kekword`) {
    const strings = require("./utils/Strings/words.json");
    msg.channel.send(
      `${strings[Math.floor(Math.random() * [strings.length])]
      }`
    )
  }
})

bot.login(token)


/*command(bot, 'vote', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are different ways you can vote for kekbot')
    .setFooter('Voting is heavily appreciated!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'Discord bot list ',
        value: 'https://discordbotlist.com/bots/kekbot',
        inline: true,
      },
      {
        name: 'Top.gg',
        value: 'https://top.gg/bot/734007071686787123',
        inline: true,
      },
      message.channel.send(embed)
    )})


bot.login(token)
*/


bot.on("message", async message => {
  const prefix = "kek";
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase()
  if (command === "hug") {
    if (!args.length) {
      message.reply("Please provide a user mention to hug!")
    } else if (message.mentions.members.first()) {
      const member = message.mentions.members.first()
      const embed = new Discord.MessageEmbed()
      embed.setDescription(`<@${message.author.id}> hugs <@${member.id}>!`)
      embed.setColor('RANDOM')
      embed.setImage(`https://media1.tenor.com/images/23f263940d5d2bb8e8eaeb3c128e748f/tenor.gif?itemid=17750778`)
      embed.setTimestamp()
      message.channel.send(embed)
    }
  }

})

bot.login(token)


bot.on("message", async message => {
  const prefix = "kek";
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase()
  if (command === "slap") {
    if (!args.length) {
      message.reply("Please provide a user mention to slap!")
    } else if (message.mentions.members.first()) {
      const member = message.mentions.members.first()
      const embed = new Discord.MessageEmbed()
      embed.setDescription(`<@${message.author.id}> slaps <@${member.id}!>`)
      embed.setColor('RANDOM')
      embed.setImage(`https://i.pinimg.com/originals/a8/7d/e2/a87de27396fae40e3ea92190566531ec.gif`)
      embed.setTimestamp()
      message.channel.send(embed)
    }
  }

})

bot.login(token)


bot.on("message", async message => {
  const prefix = "kek";
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase()
  if (command === "pat") {
    if (!args.length) {
      message.reply("Please provide a user mention to pat!")
    } else if (message.mentions.members.first()) {
      const member = message.mentions.members.first()
      const embed = new Discord.MessageEmbed()
      embed.setDescription(`<@${message.author.id}> pats <@${member.id}>!`)
      embed.setColor('RANDOM')
      embed.setImage(`https://media.tenor.com/images/8237d7da8cbd7227d67d735d437612cf/tenor.gif`)
      embed.setTimestamp()
      message.channel.send(embed)
    }
  }

})

bot.login(token)


command(bot, 'help actions', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are diffrent action commands available!.')
    .setFooter('Vote for us via kekvote!')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kekpat <user>',
        value: 'Pat a user!',
        inline: true,
      },
      {
        name: 'kekslap <user>',
        value: 'Slap a user!',
        inline: true,
      },
      {
        name: 'kekhug <user>',
        value: 'Hug a user!',
        inline: true,
      },
      {
        name: 'kekhandshake <user>',
        value: 'Handshake a user!',
        inline: true,
      },
      {
        name: 'kekkiss <user>',
        value: 'Kiss a user!',
        inline: true,
      },
      {
        name: 'kekwave <user>',
        value: 'Wave at someone!',
        inline: true
      }
    )




  message.channel.send(embed)
})


bot.login(token)


bot.on("message", async message => {
  const prefix = "kek";
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase()
  if (command === "handshake") {
    if (!args.length) {
      message.reply("Please provide a user mention to handhshake!")
    } else if (message.mentions.members.first()) {
      const member = message.mentions.members.first()
      const embed = new Discord.MessageEmbed()
      embed.setDescription(`<@${message.author.id}> shakes hand with <@${member.id}>!`)
      embed.setColor('RANDOM')
      embed.setImage(`https://giffiles.alphacoders.com/138/138824.gif`)
      embed.setTimestamp()
      message.channel.send(embed)
    }
  }

})

bot.login(token)

bot.on("message", async message => {
  const prefix = "kek";
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase()
  if (command === "kiss") {
    if (!args.length) {
      message.reply("Please provide a user mention to kiss!")
    } else if (message.mentions.members.first()) {
      const member = message.mentions.members.first()
      const embed = new Discord.MessageEmbed()
      embed.setDescription(`<@${message.author.id}> kisses <@${member.id}>!`)
      embed.setColor('RANDOM')
      embed.setImage(`https://i.pinimg.com/originals/2b/52/71/2b5271e20fa65925e07d0338fa290135.gif`)
      embed.setTimestamp()
      message.channel.send(embed)
    }
  }

})

bot.login(token)


bot.on("message", async message => {
  const prefix = "kek";
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase()
  if (command === "wave") {
    if (!args.length) {
      message.reply("Please provide a user mention to wave at!")
    } else if (message.mentions.members.first()) {
      const member = message.mentions.members.first()
      const embed = new Discord.MessageEmbed()
      embed.setDescription(`<@${message.author.id}> waves at <@${member.id}>!`)
      embed.setColor('RANDOM')
      embed.setImage(`https://media1.tenor.com/images/3cde3e1fe79e02abdc287395f57d8578/tenor.gif?itemid=16679443`)
      embed.setTimestamp()
      message.channel.send(embed)
    }
  }

})

bot.login(token)