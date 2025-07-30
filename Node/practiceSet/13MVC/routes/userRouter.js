const path = require("path");

const express = require("express");
const { registerHomes } = require("./hostRouter");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log(registerHomes);
  res.render("home", { registerHomes: registerHomes });
});

module.exports = userRouter;
