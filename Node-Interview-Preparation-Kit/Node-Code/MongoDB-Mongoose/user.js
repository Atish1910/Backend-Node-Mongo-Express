// npm install mongoose

// user.js
const mongoose = require("mongoose");

// 1: Define a Mongoose schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  age: Number,
});

// 2: Create a Mongoose model from the schema
const User = mongoose.model("User", userSchema);

module.exports = User;

