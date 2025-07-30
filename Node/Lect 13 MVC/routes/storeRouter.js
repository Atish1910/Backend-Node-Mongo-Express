const express = require("express");
const storeRouter = express.Router();

const { getBookings, getHomes, getIndex, getFevoriteList } = require("../controllers/storeController");

storeRouter.get("/", getIndex);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/index", getHomes);
storeRouter.get("/fevorite", getFevoriteList);

module.exports = storeRouter;
