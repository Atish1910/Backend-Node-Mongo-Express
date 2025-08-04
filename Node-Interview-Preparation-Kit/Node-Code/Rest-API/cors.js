
const express = require('express');
const cors = require('cors'); // Import cors module

const app = express();

// Enable CORS middleware for all routes
app.use(cors());

// Optionally, configure CORS to allow requests from specific origins
// app.use(cors({
//   origin: 'http://example.com' // Replace with your allowed origin
// }));

// Define your routes and route handlers below
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.listen(3000, () => {
  console.log(`Server is running`);
});



