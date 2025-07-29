const path = require("path");
const express = require("express");

const userRoute = express.Router();

userRoute.get("/", (req, res, next) => {
    res.sendFile(path.join("../views/app.html"));
})

module.exports = userRoute;  