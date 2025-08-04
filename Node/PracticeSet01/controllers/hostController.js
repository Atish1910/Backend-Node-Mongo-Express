const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome");
};
exports.postAddHome = (req, res, next) => {
  console.log("Home Registration successful for:", req.body);
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  save();
  res.render("host/homeAdded");
};
