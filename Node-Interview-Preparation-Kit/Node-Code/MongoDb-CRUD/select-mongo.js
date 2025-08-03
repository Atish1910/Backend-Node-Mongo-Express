
// select-mongo.js
const connectToMongoDB = require("./mongo");

async function main() {
  try {
    // Call the connection function
    const database = await connectToMongoDB();

    // Perform operations using the database object
    const collection = database.collection("users");

    // Example: Select a document
    const user = await collection.findOne({ name: "Happy" });
    console.log("User:", user);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
main(); // Call the main function

