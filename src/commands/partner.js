/*console.log('parter database is currently in progress')
const partners = require('../../models/PartnerSchema');


module.exports.run = async (bot, message, args) => {
    let topartner = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("You can't request a partnership with this server! Reason: Does not have Admin role!")
    }

    if(message.author.id === topartner.id) return;

    let reason = args.slice(1).join(" ")

    if(!reason) return message.channel.send('To request a partnership simply  ')

    let data = await punishments.findOne({
        GuildID: message.guild.id,
        UserID: topartner.id
    });

    if(data) {
        data.partners.unshift({
            partnersType: 'requestz',
            Moderator: message.author.id,
            Reason: reason,
        });
        data.save();

        message.channel.send(`Warned ${toWarn} for \`${reason}\``)
    } else if (!data) {
        let newData = new punishments({
            GuildID: message.guild.id,
            UserID: toWarn.id,
            Punishments: [{
                PunishType: 'Warn',
                Moderator: message.author.id,
                Reason: reason,
            }, ],
        });
        newData.save();

        message.channel.send(`Warned ${toWarn} for \`${reason}\``)
 
    }


}

module.exports.config = {
    name: "warn",
    aliases: ["Warn"]
}
*/