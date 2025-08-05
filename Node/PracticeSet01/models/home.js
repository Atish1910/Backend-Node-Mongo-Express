const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  houseName : {require : true, type : String},
  price : {require : true, type : Number}
});

module.exports = mongoose.model("Home", homeSchema);