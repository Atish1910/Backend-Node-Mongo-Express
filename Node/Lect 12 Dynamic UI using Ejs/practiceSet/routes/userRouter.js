const path = require("path");

const express = require("express");
const { registerHomes } = require("./hostRouter");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log(registerHomes);
  // res.sendFile(path.join(pathUtil,"views/home.html"))
  res.render("home", { registerHomes: registerHomes, pageTitle: "air bnb" });
});

module.exports = userRouter;
