
const connectToMongoDB = require("./mongo");

async function main() {
  const database = await connectToMongoDB();
  const collection = database.collection("users");

  // Create a single field index on the 'name' column
  await collection.createIndex({ name: 1 });

  // Create a compound index on the 'name' and 'age' columns
  await collection.createIndex({ name: 1, age: 1 });
}
main();

