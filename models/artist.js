const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
   artist: String,
   guitar: String,
   image: String,
   bio: String,
   band: String
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;