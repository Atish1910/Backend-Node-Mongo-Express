// delete-mongo.js
const connectToMongoDB = require("./mongo");
async function main() {
  try {
    // Call the connection function
    const database = await connectToMongoDB();
    // Perform operations using the database object
    const collection = database.collection("users");

    // Example: Delete a document
    const filter = { name: "John Doe" };
    const result = await collection.deleteOne(filter);
    console.log("Document deleted:", result.deletedCount);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
main(); // Call the main function
