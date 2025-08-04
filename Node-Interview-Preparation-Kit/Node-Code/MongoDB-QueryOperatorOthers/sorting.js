const connectToMongoDB = require("./mongo");

async function main() {
  const database = await connectToMongoDB();
  const collection = database.collection("users");

  // Sort the results by the 'name' field in ascending order
  const cursor = collection.find().sort({ name: 1 });

  // Iterate over the cursor and log the documents
  for await (const doc of cursor) {
    console.log(doc);
  }
  //Output: {_id: 1, name: 'Anurag', age: 35}
  //        {_id: 2, name: 'Happy', age: 25}
  //        {_id: 3, name: 'Rawat', age: 30}

  // For descending order
  // const cursor = collection.find().sort({ name: -1 });
}
main();
