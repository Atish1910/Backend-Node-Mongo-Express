const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
    res.render("store/index", {
    });
};

exports.getHomes = (req, res, next) => {
    res.render("store/home-list",{
  })
};
