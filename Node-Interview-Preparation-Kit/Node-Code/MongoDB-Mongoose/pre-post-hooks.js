
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Pre Hooks - Perform custom logic before saving
userSchema.pre("save", async function (next) {
 
  // Example: Encode the password before saving
  next();
});

// Post Hooks - Perform custom logic after saving
userSchema.post("save", function () {
 
  // Example: Log the result from database
});

const User = mongoose.model("User", userSchema);

module.exports = User;

