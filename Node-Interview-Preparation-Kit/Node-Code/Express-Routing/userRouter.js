// usersRouter.js
const express = require("express");
const usersRouter = express.Router();

// Route 1: www.example.com/users
usersRouter.get("/", (req, res) => {
  res.send("Users Home Page");
});

// Route 2: www.example.com/users/profile
usersRouter.get("/profile", (req, res) => {
  res.send("User Profile Page");
});
module.exports = usersRouter;

