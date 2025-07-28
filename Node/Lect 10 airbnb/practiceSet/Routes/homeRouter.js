const express = require("express");
const path = require("path");
const pathUtils = require("../utils/pathUtils");

const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(pathUtils,"/views/home.html"));
});

module.exports = homeRouter;