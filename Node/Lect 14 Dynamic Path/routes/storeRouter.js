const express = require("express");
const storeRouter = express.Router();

const {
  getBookings,
  getHomes,
  getIndex,
  getFevoriteList,
  getHomeDetails,
} = require("../controllers/storeController");

storeRouter.get("/", getIndex);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/homes", getHomes);
storeRouter.get("/fevorite", getFevoriteList);

storeRouter.get("/homes/:homeId", getHomeDetails);

module.exports = storeRouter;
