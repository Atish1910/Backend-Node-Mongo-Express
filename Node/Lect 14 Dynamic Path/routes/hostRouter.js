const express = require("express");
const { getAddHome, postAddHome, getHostHomes } = require("../controllers/hostController");
const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHome);
hostRouter.post("/home-added", postAddHome);
hostRouter.get("/host-home-list", getHostHomes);

exports.hostRouter = hostRouter;
