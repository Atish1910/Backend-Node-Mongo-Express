const express = require("express");
const userRouter = express.Router();

const { getHomes } = require("../controllers/homes");

userRouter.get("/", getHomes);

module.exports = userRouter;
