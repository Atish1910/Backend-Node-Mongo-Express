const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome");
};

exports.getHostHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes : registeredHomes
    })
  })
}

exports.postAddHome = (req, res, next) => {
  const { houseName, price } = req.body;
  const home = new Home({houseName, price});
  home.save().then(() => {
    console.log("Home Saved Successfully", req.body);

  });
  res.redirect("/homes");
}

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;

  Home.findById(homeId).then(home => {
    console.log(homeId, home);
    res.render("host/edit-home", {
      home: home,
    });
  });
};


exports.postEditHome = (req, res, next) => {
  const { id, houseName, price} = req.body;

  Home.findById(id).then((home) => {
    home.houseName = houseName,
    home.price = price,
    
    home.save().then((result) => {
      console.log("Home Updadated",result);
      }).catch((err) => {
      console.log("Error While Updating", err);
      res.redirect("/");
    })
    res.redirect("/host/host-home-list");
    })
};




exports.postDeleteHome = (req,res, next) => {
  const homeId = req.params.homeId;
  console.log('Came to delete ', homeId);
  Home.findByIdAndDelete(homeId).then(() => {
    res.redirect("/host/host-home-list");
  }).catch((error) => {
    console.log("error To Delete Home", error)
  })
}

