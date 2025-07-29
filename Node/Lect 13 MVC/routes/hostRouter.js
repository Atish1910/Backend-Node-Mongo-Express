const express = require("express");
const hostRouter = express.Router();
const { getAddHome, postAddHome } = require("../controllers/homes");

hostRouter.get("/add-home", getAddHome);
hostRouter.post("/home-added", postAddHome);

exports.hostRouter = hostRouter;
