
// update-mongo.js
const connectToMongoDB = require("./mongo");
async function main() {
  try {
    // Call the connection function
    const database = await connectToMongoDB();
    // Perform operations using the database object
    const collection = database.collection("users");

    // Example: Update a document
    const filter = { name: "John Doe" };
    const update = { $set: { age: 31 } };
    const result = await collection.updateOne(filter, update);
    console.log("Document updated:", result.modifiedCount);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
main(); // Call the main function

