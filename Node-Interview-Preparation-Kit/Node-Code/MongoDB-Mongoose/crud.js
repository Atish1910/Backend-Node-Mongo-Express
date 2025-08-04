

// app.js
// Import Mongoose model
const User = require("./user");

// Require the database connection file
const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/mydatabase";
mongoose.connect(uri);

// Function to perform CRUD operations
async function performCRUD() {
  try {
    // 1. Create (Insert) Operation
    // Create a new user instance
    const newUser = new User({
      name: "John Doe",
      email: "john@example.com",
      age: 25,
    });
    // Save the new user to the database
    const savedUser = await newUser.save();
    console.log("User saved:", savedUser);

    // 2. Read (Retrieve) Operation
    // Find all users
    const allUsers = await User.find();
    console.log("All users:", allUsers);
    // Find a user by name
    const user = await User.findOne({ name: "Happy" });
    console.log("User found by name:", user);

    // 3. Update Operation
    // Update a user by name
    await User.updateOne({ name: "Happy" }, { age: 30 });
    console.log("User updated successfully");

    // 4. Delete Operation
    // Delete a user by name
    await User.deleteOne({ name: "Happy" });
    console.log("User deleted successfully");
  } catch (error) {
    console.error("Error:", error);
  }
}
// Call the performCRUD function
performCRUD();





