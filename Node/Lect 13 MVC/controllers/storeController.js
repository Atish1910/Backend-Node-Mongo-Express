const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "air bnb",
    })
  );
};


exports.getIndex = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
    })
  );
};

exports.getBookings = (req, res, next) => {
    res.render("store/bookings", {
      pageTitle: "my Bookings",
    })
};


exports.getFevoriteList = (req, res, next) => {
    res.render("store/fevorite-list", {
      pageTitle: "my fevorite list",
    })
};

// exports.registerHomes = registerHomes; (no need to export)
