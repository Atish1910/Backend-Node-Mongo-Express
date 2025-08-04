const connectToMongoDB = require("./mongo");

async function main() {
  const database = await connectToMongoDB();
  const collection = database.collection("users");

  // Scenario 1: Include all fields
  const cursor1 = collection.find({});
  for await (const doc of cursor1) {
    console.log(doc);
  }
  // Output: {_id: 'XXX', name: 'Happy', age: 25 }

  // Scenario 2: Include 'name' and '_id' fields, exclude 'age'
  const cursor2 = collection.find({}).project({ name: 1 });
  for await (const doc of cursor2) {
    console.log(doc);
  }
  // Output: { _id: 'XXX', name: 'Happy'}

  // Scenario 3: Include 'name' and 'age' fields, exclude '_id'
  const cursor3 = collection.find({}).project({ name: 1, _id: 0 });
  for await (const doc of cursor3) {
    console.log(doc);
  }
  // Output: { name: 'Happy', age: 25}
}
main();
