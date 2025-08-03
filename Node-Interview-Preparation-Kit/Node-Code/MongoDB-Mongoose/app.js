// app.js
const User = require("./user");
const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/mydatabase";
mongoose.connect(uri);

// 4: Create a new user from User model
const newUser = new User({
  name: "Happy Rawat",
  age: 30, 
});

async function saveUser() {
  try {
    await newUser.validate();
    await newUser.save();
    console.log("User saved successfully");
  } catch (error) {
    console.error("Error saving user:", error);
  }
}
saveUser();
// Output: User validation failed
