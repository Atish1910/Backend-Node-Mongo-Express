const path = require("path");
const express = require("express");
const { pathUtils } = require("../utils/pathUtils");
const registerHome = require("./hostRoute");

const userRoute = express.Router();

userRoute.get("/", (req, res, next) => {
  res.render("home", {
    registerHome: registerHome,
  });
});

module.exports = userRoute;
