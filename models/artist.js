const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
   artist: String,
   guitar: String
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;