
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  // Reference to Profile model
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
});

const profileSchema = new mongoose.Schema({
  fullName: String,
  // Reference to User model
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Profile = mongoose.model("Profile", profileSchema);

module.exports = { User, Profile };

