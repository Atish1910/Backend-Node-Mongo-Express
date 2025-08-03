
const mongoose = require("mongoose");

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
  },
  age: Number,
});

// Create a Mongoose model from the schema
const User = mongoose.model("User", userSchema);

module.exports = User;

