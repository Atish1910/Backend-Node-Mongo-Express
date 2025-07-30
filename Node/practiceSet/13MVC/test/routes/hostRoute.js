const path = require("path");
const express = require("express");
const { pathUtils } = require("../utils/pathUtils");

const hostRoute = express.Router();

hostRoute.get("/add-Home", (req, res, next) => {
  res.render("homeAdded");
});

const registerHome = [];

hostRoute.post("/home-submit-sccess", (req, res, next) => {
  registerHome.push(req.body);
  console.log(registerHome);
  res.render("homeAddedSuccess");
});

module.exports = hostRoute;
module.exports = registerHome;
