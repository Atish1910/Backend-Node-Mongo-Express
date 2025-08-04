
const collection = db.collection("users");

const users = [ // Sample input data
  { name: "Happy", age: 25 },
  { name: "Rawat", age: 30 },
  { name: "Anurag", age: 35 },
];
await collection.insertMany(users); // Insert sample data into the collection

// $in (Array Operator): Matches any of the values specified in an array.
collection.find({ age: { $in: [25, 30, 35] } });
// Output: { name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Doe', age: 35 }

// $nin (Array Operator): Matches none of the values specified in an array.
collection.find({ age: { $nin: [25, 30, 35] } });
// Output: None

// $exists (Element Operator): Matches documents that contain the specified field.
collection.find({ age: { $exists: true } });
// Output: { name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Doe', age: 35 }

// $and (Logical Operator): Joins query clauses with a logical AND.
collection.find({ $and: [{ age: 30 }, { name: "Jane" }] });
// Output: { name: 'Jane', age: 30 }

// $or (Logical Operator): Joins query clauses with a logical OR.
collection.find({ $or: [{ age: 30 }, { name: "Doe" }] });
// Output: { name: 'Jane', age: 30 }, { name: 'Doe', age: 35 }

// $text (Text Search Operator): Performs a full-text search on the specified text index.
collection.find({ $text: { $search: "John Doe" } });
// Output: None (assuming no text index exists)

// $regex (Regular Expression Operator): Selects documents where the value of a 
// field matches a regular expression.
collection.find({ name: { $regex: /^J/ } });
// Output: { name: 'John', age: 25 }, { name: 'Jane', age: 30 }

// $not (Not Operator): Inverts the effect of a query expression 
// & returns documents that do not match the query expression.
collection.find({ age: { $not: { $eq: 30 } } });
// Output: { name: 'John', age: 25 }, { name: 'Doe', age: 35 }

