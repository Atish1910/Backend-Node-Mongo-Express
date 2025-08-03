const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  houseName : {require : true, type : String },
  price : {require : true, type : Number },
  location : {require : true, type : String },
  rating : {require : true, type : Number },
  photoUrl : String,
  description : String
});

module.exports = mongoose.model("Home", homeSchema);