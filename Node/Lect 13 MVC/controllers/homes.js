const Home = require("../models/home");

const getAddHome = (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Home to Airbnb",
  });
};

const postAddHome = (req, res, next) => {
  console.log("Home register Successful", req.body);

  const { houseName, price, location, rating, photoUrl } = req.body;

  const home = new Home(houseName, price, location, rating, photoUrl);

  home.save();
  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
  });
};

const getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "air bnb",
    })
  );
};

exports.postAddHome = postAddHome;
exports.getAddHome = getAddHome;
exports.getHomes = getHomes;
// exports.registerHomes = registerHomes; (no need to export)
