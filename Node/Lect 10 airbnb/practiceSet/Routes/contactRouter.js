const express = require("express");
const path = require("path");
const pathUtils = require("../utils/pathUtils");

const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
    res.sendFile(path.join(pathUtils,"/views/contactus.html"));
});


contactRouter.post("/contact-success", (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(pathUtils,"/views/contact-success.html"));
});

module.exports = contactRouter;