
const documents = [
    { _id: 1, name: 'John', age: 30 },
    { _id: 2, name: 'Alice', age: 25 },
    { _id: 3, name: 'Bob', age: 35 }
];

// Using find() to retrieve multiple documents
const cursor = users.find({ age: 30 });
cursor.forEach(doc => console.log(doc));
// Output: { _id: 1, name: 'John', age: 30 }

// Using findOne() to retrieve a single document
const document = users.findOne({ name: 'John' });
console.log(document);
// Output: { _id: 1, name: 'John', age: 30 }


