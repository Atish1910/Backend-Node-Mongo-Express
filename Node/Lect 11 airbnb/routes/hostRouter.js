const path = require("path");


const express = require("express");
const pathUtil = require("../utils/pathUtil");
const hostRouter = express.Router();



hostRouter.get("/add-home", (req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(pathUtil, "views/addHome.html"));
});

hostRouter.post("/home-added", (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(pathUtil, "views/homeAdded.html"));
});


module.exports = hostRouter;