const path = require("path");

const express = require("express");
const pathUtil = require("../utils/pathUtil");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.render("addHome", {
    pageTitle: "Add Home to Airbnb",
  });
});

const registerHomes = [];
hostRouter.post("/home-added", (req, res, next) => {
  console.log("Home register Successful", req.body, req.body.houseName);
  registerHomes.push({
    houseName: req.body.houseName,
  });
  res.render("/home-added", {
    pageTitle: "Home Added Successfully",
  });
});

exports.hostRouter = hostRouter;
exports.registerHomes = registerHomes;
