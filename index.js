const path = require('path')
const fs = require ('fs')
const Discord = require("discord.js")
const {prefix,token,Tenorapikey} = require("./botconfig.json")
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



mongoose.connect('mongodb+srv://kekbot:kekbot6@kekbot.2g0yc.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true})
bot.on("ready", ()  => {
    console.log(`kekbot has started, with ${bot.users.cache.size} users, in ${bot.channels.cache.size} channels of ${bot.guilds.cache.size} guilds.`);
    bot.user.setActivity(`V2.7 - kekhelp`);
  }); 



bot.login(token)


bot.on("message", msg => {
    if(msg.content === `${prefix}inv`) {
        msg.channel.send("You can invite me here: https://discordapp.com/oauth2/authorize?client_id=734007071686787123&scope=bot&permissions=14")
    } 

});    


bot.on("message", msg => {
    if(msg.content === `${prefix}join`) {
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
    if(msg.content === `${prefix}-v`) {
        msg.channel.send("`version7'`")
    } 

});    

bot.login(token)


bot.on("message", msg => {
    if(msg.content === `${prefix}-V`) {
        msg.channel.send("`Version 2.7`")
    } 

});    

bot.login(token)

bot.on("message", async message => {
    if(message.content === "kekping") {
        const m = await message.channel.send("Awaiting ping...");
        m.edit(`Pong! The number no one asked for is ${m.createdTimestamp - message.createdTimestamp}ms.`);
        process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
        // Recently was "ping" alone. I replaced the original command with kekping.    
    }})
    
      
    bot.on("message", msg => {
        if(msg.content === `${prefix}consoleping`) { 
            console.log(`pong!`)   
          // this command was only used for the purpose of testing console.log commands. 
        }
    });

    bot.on("message", msg => {
        if(msg.content === `keksay`) {
          return msg.reply("coming soon")
        } 
    
    }); 
    
    bot.login(token)

    bot.on("message", msg => {
        if(msg.content === `${prefix}birthday`) {
            msg.channel.send("I was made by <@315393628891512832> on 19th of july 2020")
        } 
    
    });    
    
    bot.login(token)

 

    bot.on('message', message => {

        if(message.content.startsWith(`kekkick`)) {
        //message.channel.send("kick")
            let member = message.mentions.members.first();
            member.kick().then((member) => {
            message.channel.send(":wave: "+ member.displayName + "has been kicked!")
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
        { name: 'contact',
          value: 'kekhelp contact',
          inline: true,
        },
        { name: 'Images',
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
          name: 'Coming soon....',
          value:'???',
          inline:true,
        },
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
            `${
                ball[Math.floor(Math.random() * [ball.length])]
            }`
        )
    }
});

bot.on("message", msg =>  {
    if (msg.content === `${prefix}catfact`) {
      const catFacts = require("./Cat.json");
      msg.channel.send(
          `${
              catFacts[Math.floor(Math.random() * [catFacts.length])]
          }`
      )
      }
    })

bot.login(token)

bot.on("message", msg =>  {
    if (msg.content === `${prefix}dogfact`) {
      const dogFacts = require("./dog.json");
      msg.channel.send(
          `${
              dogFacts[Math.floor(Math.random() * [dogFacts.length])]
          }`
      )
      }
    })

bot.login(token)

bot.on("message", msg =>  {
    if (msg.content === `${prefix}snakefact`) {
      const snakeFacts = require("./Snake.json");
      msg.channel.send(
          `${
              snakeFacts[Math.floor(Math.random() * [snakeFacts.length])]
          }`
      )
      }
    })

bot.login(token)

bot.on("message", msg =>  {
    if (msg.content === `${prefix}parrotfact`) {
      const parrotFacts = require("./Parrot.json");
      msg.channel.send(
          `${
              parrotFacts[Math.floor(Math.random() * [parrotFacts.length])]
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


command(bot, 'help fun', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are diffrent types of animal facts available.')
    .setFooter('You can support us using keksupport')
    .setColor('RANDOM')
    .addFields(
      {
        name: 'kek8ball',
        value: 'The 8ball command',
        inline: true,
      },
      {
        name: 'kekflipcoin',
        value: 'Flips a coin',
        inline: true,
      },
      
      {
        name: 'keknumber',
        value: 'Generates a number between 1-10',
        inline: true,
      },
      { 
        name: 'kekmeme (in beta)',
        value: 'Fetches a meme from R/memes',
        inline: true,
      },
    
      {
        name: 'kekquote',
        value: 'Fetches a quote from r/quotes',
        inline: true,
      },  
      {
        name:'kekdice',
        value:'Rolls a dice',
        inline:true,
      },
      {
        name:'kekwholesome',
        value: 'Fetches a wholesome meme',
        inline:true,
      },
    {
      name: 'keksuicide',
      value: 'Its the command you want to use if you would like to take the easy way out',
      inline: true,
    },
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

bot.on("message", msg =>  {
  if (msg.content === `${prefix}flipcoin`) {
    const Flipcoin = require("./Flipcoin.json");
    msg.channel.send(
        `${
            Flipcoin[Math.floor(Math.random() * [Flipcoin.length])]
        }`
    )
    }
  })

bot.login(token)


bot.on("message", msg =>  {
  if (msg.content === `${prefix}number`) {
    const number = require("./Number.json");
    msg.channel.send(
        `${
            number[Math.floor(Math.random() * [number.length])]
        }`
    )
    }
  })

bot.login(token)

bot.on("message", msg =>  {
  if (msg.content === `kekbot`) {
    const kekbot = require("./kek.json");
    msg.channel.send(
        `${
            kekbot[Math.floor(Math.random() * [kekbot.length])]
        }`
    )
    }
  })

bot.login(token)



command(bot, 'help contact', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are diffrent types of animal facts available.')
    .setFooter('This bot is still in the making, More commands are still yet to come!')
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
      inline:true,
    }
    )
  message.channel.send(embed)
})


bot.login(token)


partials: ['MESSAGE', 'CHANNEL', 'REACTION']

const { loadCommands } = require('./utils/loadCommands');
const { Db } = require('mongodb')
const message = require('./events/message')

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);


bot.on('message', message => {

  if(message.content.startsWith(`kekban`)) {
  //message.channel.send("ban")
      let member = message.mentions.members.first();
      member.ban().then((member) => {
      message.channel.send(":wave: "+ member.displayName + "has been banned!!")
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

command(bot, 'w', (message) => {
  const logo =
    'https://www.streamscheme.com/wp-content/uploads/2020/07/kekw-emote.jpg'


const embed = new Discord.MessageEmbed()
.setImage(logo)
.setColor('RANDOM')
message.channel.send(embed)
})
bot.login(token)

bot.on("message", msg =>  {
  if (msg.content === `kektip`) {
    const tips = require("./tips.json");
    msg.channel.send(
        `${
            tips[Math.floor(Math.random() * [tips.length])]
        }`
    )
    }
  })

bot.login(token)


bot.on("message", msg => {
  if(msg.content === `${prefix}patreon`) {
      msg.channel.send("If you wish to support us, you can support us on patreon, this would be greatly appreciated! https://www.patreon.com/kekbotwastaken")
  } 

});    

bot.login(token)



bot.on("message", async message => {
  let afk =  new db.table("AFKs")
      authorStatus = await afk.fetch(message.author.id)
      mentioned = message.mentions.members.first()
  
    if (mentioned) {
      let status = await afk.fetch(mentioned.id);
      
      if (status) {
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`This user (${mentioned.user.tag}) is AFK: **${status}**`)
        message.channel.send(embed).then(i => i.delete({timeout: 5000}));
      }
    }
  })
  
  
  bot.on("message", async msg => {
      if(msg.content.startsWith(`kekafk`)) {
      const status = new db.table("Afks");
      let afk = await status.fetch(msg.author.id)
      const embed = new Discord.MessageEmbed().setColor('RANDOM')
      const args = msg.content.trim().split(/ +/g);
      if (!afk) {
        embed.setDescription(`**${msg.author.tag}** is now AFK.`)
        status.set(msg.author.id, args.join(" ") || `AFK`);
      } else {
        embed.setDescription("You are no longer AFK")
        status.delete(msg.author.id);
      } 
      msg.channel.send(embed)
  }}); 
  
  bot.login(token)
  
bot.on("message", msg => {
  if(msg.content === `kekvote`) {
      msg.channel.send("You can vote for kekbot at https://discordbotlist.com/bots/kekbot")
  } 

});


bot.on("message", msg => {
  if(msg.content === `kekweb`) {
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
    .setFooter('All minigames are currently in beta, expect them to be buggy!')
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
          name:'keksurvey',
          value:'Take part in a survey to help improve kekbot!'
      }
      ) 
    message.channel.send(embed)
  })


bot.login(token)

bot.on("message", async msg => {
  const embed = new Discord.MessageEmbed().setColor('RANDOM')
  if(msg.content === `${prefix}excitedgif`) {
    let url = `https://g.tenor.com/v1/search?q=excited&key=${Tenorapikey}&limit=8`
  let response = await fetch(url)
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length)
  msg.channel.send(json.results[index].url)
}})



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
  const embed = new Discord.MessageEmbed().setColor('RANDOM')
  if(msg.content === `${prefix}sadgif`) {
    let url = `https://g.tenor.com/v1/search?q=animesad&key=${Tenorapikey}&limit=8`
  let response = await fetch(url)
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length)
  msg.channel.send(json.results[index].url)
}})

bot.on("message", async msg => {
  const embed = new Discord.MessageEmbed().setColor('RANDOM')
  if(msg.content === `${prefix}happygif`) {
    let url = `https://g.tenor.com/v1/search?q=animehappy&key=${Tenorapikey}&limit=8`
  let response = await fetch(url)
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length)
  msg.channel.send(json.results[index].url)
}})


bot.on("message", async msg => {
  const embed = new Discord.MessageEmbed().setColor('RANDOM')
  if(msg.content === `${prefix}angrygif`) {
    let url = `https://g.tenor.com/v1/search?q=angry&key=${Tenorapikey}&limit=8`
  let response = await fetch(url)
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length)
  msg.channel.send(json.results[index].url)
}})


bot.on("message", msg => {
  if(msg.content === `${prefix}vote`) {
      msg.channel.send("You can vote for kekbot at https://discordbotlist.com/bots/kekbot")
  } 

});


bot.on("message", msg => {
  if(msg.content === `${prefix}bin`) {
      msg.channel.send("https://sourceb.in")
  } 

});



bot.on("message", msg => {
  if(msg.content === `${prefix}servers`) {
      msg.channel.send(`I am currently in ${bot.guilds.cache.size} servers!`)
  } 

});  

bot.login(token)

bot.on("message", msg => {
  if(msg.content === `${prefix}survey`) {
      msg.channel.send("It would be greatly appreciated if you would fill in this survery for us! It'll help improve kekbot alot https://forms.gle/cerRXJmMuDFHHup47")
  } 

});    

bot.login(token)