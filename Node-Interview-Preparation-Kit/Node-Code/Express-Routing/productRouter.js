// productsRouter.js
const express = require("express");
const productsRouter = express.Router();

// Route 1: www.example.com/products
productsRouter.get("/", (req, res) => {
  res.send("Products Home Page");
});

// Route 2: www.example.com/products/features
productsRouter.get("/features", (req, res) => {
  res.send("Product Features Page");
});

// Route 3: www.example.com/products/ratings
productsRouter.get("/ratings", (req, res) => {
  res.send("Product Ratings Page");
});

module.exports = productsRouter;
