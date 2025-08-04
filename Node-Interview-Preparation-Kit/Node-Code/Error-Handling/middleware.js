const express = require("express");
const app = express();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Internal Server Error");
});

// Route handler
app.get("/", (req, res, next) => {
  next(new Error("Route handler error"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
