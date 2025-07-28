const path = require("path");


const express = require("express");
const pathUtil = require("../utils/pathUtil");
const hostRouter = express.Router();



hostRouter.get("/add-home", (req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(pathUtil, "views/addHome.html"));
});

const registerHomes = [];
hostRouter.post("/home-added", (req, res, next) => {
    console.log("Home register Successful", req.body, req.body.houseName);
    registerHomes.push({
        houseName : req.body.houseName,
    })
    res.sendFile(path.join(pathUtil, "views/homeAdded.html"));
});


exports.hostRouter = hostRouter;
exports.registerHomes = registerHomes;