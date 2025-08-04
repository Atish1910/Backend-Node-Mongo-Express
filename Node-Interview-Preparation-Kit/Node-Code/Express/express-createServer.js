
// Creating an HTTP server using Express.js
// Step1: Import Express
const express = require("express");

// Step 2: Create an Express application
const app = express(); // Server created

// Step 3: Define the port number
const PORT = 3000;

// Step 4: Start the Express server and
// listen on the specified port
app.listen(PORT, () => {
  console.log(`Express server running ${PORT}`);
});

