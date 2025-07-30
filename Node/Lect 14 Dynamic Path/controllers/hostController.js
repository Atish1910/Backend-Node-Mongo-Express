const Home = require("../models/home");

const getAddHome = (req, res, next) => {
  res.render("host/add-home", {
    pageTitle: "Add Home to Airbnb",
  });
};

const postAddHome = (req, res, next) => {
  console.log("Home register Successful", req.body);

  const { houseName, price, location, rating, photoUrl } = req.body;

  const home = new Home(houseName, price, location, rating, photoUrl);

  home.save();
  res.render("host/home-added", {
    pageTitle: "Home Added Successfully",
  });
};


exports.getHostHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Home List",
    })
  );
};


exports.postAddHome = postAddHome;
exports.getAddHome = getAddHome;
