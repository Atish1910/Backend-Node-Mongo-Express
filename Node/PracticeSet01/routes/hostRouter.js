const path = require("path");
const express = require("express");
const pathUtils = require("../utils/pathUtils");

const hostRouter = express.Router();

const homesController = require("../controllers/hostController");

hostRouter.get("/add-home", homesController.getAddHome);
hostRouter.post("/add-home", homesController.postAddHome);
module.exports = hostRouter;
