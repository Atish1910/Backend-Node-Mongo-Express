
// Using the MongoDB Node.js Driver

//1. install mongodb: npm install mongodb

// mongo.js
const { MongoClient } = require("mongodb"); //2. import mongodb

const uri = "mongodb://127.0.0.1:27017/mydatabase"; //Connection URI
// const uri = "mongodb://localhost:27017/mydatabase";

//3. Create a new MongoClient using connection URI
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect(); //4. Connect to the MongoDB server
    console.log("Connected to MongoDB");
    return client.db(); //5. Return the database object
  } catch (error) {
    throw error; //6. Throw error if connection fails
  }
}
module.exports = connectToMongoDB; //7. Export the function

