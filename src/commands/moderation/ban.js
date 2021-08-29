export const name = 'ban';
export const description = 'Ban a member from your server!';
export const permissions = ['BAN_MEMBERS'];
export const args = 1;
export const usage = '<member> [reason]';
export const execute = (message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(member) {
            try {
                member.ban();
                message.channel.send(`:wave: ${member} has been banned`)
            }

                catch(err) {
                    message.channel.send(`I was unable to ban ${member}`);
                }
        }
    }

