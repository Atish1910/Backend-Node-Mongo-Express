const mongoose = require("mongoose");

const fevoriteSchema = mongoose.Schema({
  houseId : {
    require : true,
    ref : "Home",
    type : mongoose.Schema.Types.ObjectId,
    unique : true
  }
});

module.exports = mongoose.model("fevourite", fevoriteSchema);