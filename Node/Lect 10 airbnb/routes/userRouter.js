
const path = require("path");


const express = require("express");
const pathUtil = require("../utils/pathUtil");
const userRouter = express.Router();


userRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(pathUtil,"views/home.html"))
});

module.exports = userRouter;