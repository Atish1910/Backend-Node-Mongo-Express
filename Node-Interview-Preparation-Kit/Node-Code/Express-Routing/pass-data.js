const express = require("express");
const app = express();

// Middleware to attach data to req object
app.get("/route1", (req, res, next) => {
  req.customData = "Some data 1";
  next();
});

// Accessing data attached to req object
app.get("/route2", (req, res) => {
  console.log(req.customData);
  res.send("Data Passed");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on:${PORT}`);
});
