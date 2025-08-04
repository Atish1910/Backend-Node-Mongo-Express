const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome");
};
exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } = req.body;
  const home = new Home({houseName, price, location, rating, photoUrl, description});
  home.save().then(() => {
    console.log("Home Saved Successfully", req.body);

  }).catch((error) => {
    console.log("Error While Saving Home",error);
  })
}
