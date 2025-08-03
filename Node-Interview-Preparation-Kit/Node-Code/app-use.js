
const express = require('express');
const app = express();

// Example of using app.use for logging middleware
app.use((req, res, next) => {
  console.log('Middleware executed for every request');
  next();
});

// Rest of your Express app code...

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

