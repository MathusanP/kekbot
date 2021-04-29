const prefix = "kek"

module.exports = async (bot, message) => {
  bot.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
}