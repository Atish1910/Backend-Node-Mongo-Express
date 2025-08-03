
const collection = db.collection('users');

// 1. $eq: Matches values that are equal to a specified value.
collection.find({ age: { $eq: 30 } });

// 2. $ne: Matches values that are not equal to a specified value.
collection.find({ age: { $ne: 30 } });

// 3. $gt: Matches values that are greater than a specified value.
collection.find({ age: { $gt: 30 } });

// 4. $gte: Matches values that are greater than or equal to a 
// specified value.
collection.find({ age: { $gte: 30 } });

// 5. $lt: Matches values that are less than a specified value.
collection.find({ age: { $lt: 30 } });

// 6. $lte: Matches values that are less than or equal to a 
// specified value.
collection.find({ age: { $lte: 30 } });

