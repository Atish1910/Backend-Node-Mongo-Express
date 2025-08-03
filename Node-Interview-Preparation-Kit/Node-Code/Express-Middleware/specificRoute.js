const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  res.send("Middleware for specific route");
  next();
};

// Use middleware globally for specific routes
app.use("/example", middleware);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
