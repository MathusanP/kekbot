const mongoose = require('mongoose');

let ModSchema = new mongoose.Schema({
    GuildID: String,
    UserID: String,
    Punishments: Array
});

const MessageModel = module.exports = mongoose.model('Moderation', ModSchema);