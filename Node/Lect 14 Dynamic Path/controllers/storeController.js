const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "air bnb",
    })
  );
};


exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
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



exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log(homeId);

  Home.findById(homeId, home => {
    console.log("I found my id", home)
    
    res.render("store/home-details", {
        pageTitle: "Home Details",
        currentPage : "home"
      })
  })

};





// exports.registerHomes = registerHomes; (no need to export)
