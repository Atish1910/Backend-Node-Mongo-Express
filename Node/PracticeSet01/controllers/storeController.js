const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
    res.render("store/index", {
    });
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes : registeredHomes
    })
  })
};
