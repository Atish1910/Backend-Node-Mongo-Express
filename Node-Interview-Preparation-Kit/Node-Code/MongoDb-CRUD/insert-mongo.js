
//insert-mongo.js
const connectToMongoDB = require("./mongo");

async function main() {
  try {
    // Call the connection function
    const database = await connectToMongoDB();

    // Perform operations using the database object
    const collection = database.collection("users");

    // Example: Insert a document
    const result = await collection.insertOne({ name: "Happy" });
    console.log("Document inserted:", result.insertedId);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
main(); // Call the main function

