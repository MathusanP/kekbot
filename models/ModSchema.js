import pkg from 'mongoose';
const { Schema, model } = pkg;

let ModSchema = new Schema({
	GuildID: String,
	UserID: String,
	Punishments: Array
});

export default model('Moderation', ModSchema);