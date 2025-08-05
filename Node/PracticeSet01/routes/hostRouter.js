const path = require("path");
const express = require("express");
const pathUtils = require("../utils/pathUtils");

const hostRouter = express.Router();

const homesController = require("../controllers/hostController");

hostRouter.get("/add-home", homesController.getAddHome);
hostRouter.post("/add-home", homesController.postAddHome);
hostRouter.get("/host-home-list", homesController.getHostHomes);
hostRouter.get("/edit-home/:homeId", homesController.getEditHome);
hostRouter.post("/edit-home", homesController.postEditHome);
hostRouter.get("/delete-home/:homeId", homesController.postDeleteHome);
module.exports = hostRouter;
