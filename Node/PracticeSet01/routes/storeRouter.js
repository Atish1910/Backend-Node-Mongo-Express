const express = require("express");
const storeRouter = express.Router();

const homesController = require("../controllers/storeController");

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/homes", homesController.getHomes);

module.exports = storeRouter;
