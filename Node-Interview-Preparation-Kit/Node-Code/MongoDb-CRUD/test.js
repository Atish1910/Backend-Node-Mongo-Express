const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://127.0.0.1:27017";

// Database Name
const dbName = "mydatabase";

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB server");

    // Specify the database to use
    const db = client.db(dbName);

    // Perform operations on the database
    // Example: Insert a document
    const collection = db.collection("Users");
    await collection.insertOne({ name: "John Doe", age: 30 });

    console.log("Document inserted successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    // Close the client
    await client.close();
    console.log("Connection to MongoDB closed");
  }
}

// Call the main function
main();
