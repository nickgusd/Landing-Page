const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guitarSchema = new Schema({
   guitar: String,
   quantity: Number,
   price: Number,
   image: String,
   pickguard: String,
   hardware: String,
   guitarImage: String,
   componentImage: String,
   neck: String,
   color: String

});

const Guitar = mongoose.model("Guitar", guitarSchema);

module.exports = Guitar;