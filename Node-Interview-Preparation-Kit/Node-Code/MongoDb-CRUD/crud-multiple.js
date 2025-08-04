
//crud-multiple.js
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "mydb";
const collectionName = "mycollection";

const client = new MongoClient(url, { useUnifiedTopology: true });
client.connect(async function (err, client) {
  if (err) throw err;
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Insert multiple records
  const documents = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 },
  ];
  const insertResult = await collection.insertMany(documents);
  console.log(`${insertResult.insertedCount} documents inserted.`);

  // Select multiple records
  const cursor = collection.find();
  const selectResult = await cursor.toArray();
  console.log("All documents:");
  console.log(selectResult);

  // Update multiple records
  const updateFilter = { age: { $gte: 30 } };
  const updateQuery = { $set: { status: "Senior" } };
  const updateResult = await collection.updateMany(updateFilter, updateQuery);
  console.log(`${updateResult.modifiedCount} documents updated.`);

  // Delete multiple records
  const deleteFilter = { age: { $lt: 30 } };
  const deleteResult = await collection.deleteMany(deleteFilter);
  console.log(`${deleteResult.deletedCount} documents deleted.`);

  client.close();
});

