// app.js
const express = require("express");
const app = express();

// Import routers
const usersRouter = require("./usersRouter");
const productsRouter = require("./productsRouter");

// Mount routers
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
