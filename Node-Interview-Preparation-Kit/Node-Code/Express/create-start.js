
// Create an Express.js application
const express = require("express");
const app = express();

// Start an Express.js server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on :${PORT}`);
});

