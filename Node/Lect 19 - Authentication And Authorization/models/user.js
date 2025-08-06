const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName : {
    require : [true, "first Name is Required"],
    type : String
  },
  lastName : {
    type : String
  },
  email : {
    type : String,
    require : [true, "Email is Required"],
    unique : true
  }, 
  password : {
    type : String, 
    require : [true, "Password is required"]
  },
  userType : {
    type : String,
    enum : ["guest", "host"],
    default : "guest"
  }
});

module.exports = mongoose.model("User", userSchema);