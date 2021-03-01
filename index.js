const path = require('path')
const fs = require ('fs')
const Discord = require("discord.js")
const bot = new Discord.Client()
const {prefix,token} = require("./botconfig.json")
bot.commands = new Discord.Collection();
const command = require('./Commands')

bot.on("ready", () => {
    console.log(`kekbot has started, with ${bot.users.cache.size} users, in ${bot.channels.cache.size} channels of ${bot.guilds.cache.size} guilds.`);
    bot.user.setActivity(`V1.9 - kekhelp`);
  }); 

 

bot.login(token)

bot.on("guildMemberAdd", member => {
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')
  welcomeChannel.send (`Welcome! ${member}`)
})






bot.on("message", msg => {
    if(msg.content === `${prefix}inv`) {
        msg.channel.send("You can invite me here: https://discordapp.com/oauth2/authorize?client_id=734007071686787123&scope=bot&permissions=14")
    } 

});    


bot.on("message", msg => {
    if(msg.content === `${prefix}join`) {
        msg.channel.send("`Here is our discord:` https://discord.gg/pdxkeAe")
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
        msg.channel.send("`version 1.9`")
    } 

});    

bot.login(token)


bot.on("message", msg => {
    if(msg.content === `${prefix}-V`) {
        msg.channel.send("`Version 1.9`")
    } 

});    

bot.login(token)



bot.on("message", msg => {
    if(msg.content === `${prefix}info`) {
        msg.channel.send("`You can contact us by:  Gmail: kekbot6@gmail.com or Instagram: bagelwastaken`")
    } 

});    

bot.login(token)


bot.on("message", msg => {
    if(msg.content === `${prefix}play`) {
        msg.channel.send("`command in progress... (coming soon!)`")
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
        if(msg.content === `kekpurge`) {
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
    

    bot.on("message", msg => {
        if(msg.content === `${prefix}update`) {
            msg.channel.send("Whats new? Embeds are now introduced! Although kekhelp is the only command using a embed, more commands will have embeds in the future!")
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
      .setFooter('This bot is still in the making, More commands are still yet to come!')
      .setColor('#03b5fc')
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
        { name: 'Support',
          value: 'kekhelp support',
          incline: true,

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
      .setFooter('This bot is still in the making, More commands are still yet to come!')
      .setColor('#E1931D')
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
    .setFooter('This bot is still in the making, More commands are still yet to come!')
    .setColor('#E1931D')
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
      }
    )
  message.channel.send(embed)
})


bot.login(token)



command(bot, 'help moderation', (message) => {

    const embed = new Discord.MessageEmbed()
      .setTitle('Here are the moderation commands.')
      .setFooter('This bot is still in the making, More commands are still yet to come!')
      .setColor('#000000')
      .addFields(
        {
          name: 'kekkick',
          value: 'Kicks the mentioned user if the person who kicks has the correct permissions',
          inline: true,
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


bot.on("message", msg => {
  if(msg.content === "<@734007071686787123>") {
    return msg.reply("My prefix is kek use kekhelp for some commands you may be intrested in")
  } 

}); 

bot.login(token)


command(bot, 'help support', (message) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Here are diffrent types of animal facts available.')
    .setFooter('This bot is still in the making, More commands are still yet to come!')
    .setColor('#fc5203')
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
      }
    )

  message.channel.send(embed)
})


bot.login(token)


partials: ['MESSAGE', 'CHANNEL', 'REACTION']

const { loadCommands } = require('./utils/loadCommands');

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

bot.on('message', async (message) => {
    if (message.author.bot) return;

	const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
    const args = messageArray.slice(1);
    
    const prefix = "kek";

	if (!message.content.startsWith(prefix)) return;
    const commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
    commandfile.run(bot, message, args);
    process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
  })

bot.login(token);


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
