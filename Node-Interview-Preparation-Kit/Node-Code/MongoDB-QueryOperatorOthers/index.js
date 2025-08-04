
const connectToMongoDB = require("./mongo");

async function main() {
  const database = await connectToMongoDB();
  const collection = database.collection("users");

  // Create an index on the 'name' column
  await collection.createIndex({ name: 1 });

  console.log("Index created on 'name' column");
}
main();
