// Import the MongoDB Node.js driver
const MongoClient = require("mongodb").MongoClient;

// Connection URI
const uri = "mongodb://localhost:27017";

// Database Name
const dbName = "your_database_name";

// Connect to MongoDB
MongoClient.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.error("Error connecting to MongoDB:", err);
      return;
    }

    console.log("Connected to MongoDB");

    // Get the database
    const db = client.db(dbName);

    // Get the collection
    const collection = db.collection("your_collection_name");

    // Define the aggregation pipeline and execute it
    collection
      .aggregate([
        { $match: { field1: "value1" } },
        { $group: { _id: "$field2", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ])
      .toArray((err, result) => {
        if (err) {
          console.error("Error executing aggregation pipeline:", err);
          client.close();
          return;
        }

        // Output the result
        console.log("Aggregation result:", result);

        // Close the connection
        client.close();
      });
  }
);
