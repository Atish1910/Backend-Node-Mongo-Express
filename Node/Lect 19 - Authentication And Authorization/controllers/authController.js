const { check } = require("express-validator");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false,
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "SignUp",
    currentPage: "Signup",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  console.log(req.body);
  req.isLoggedIn = true;
  // res.cookie("isLoggedIn", true);
  req.session.isLoggedIn = true;
  req.isLoggedIn = true;
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  // res.cookie("isLoggedIn", false);
  req.session.destroy(() => {
    console.log("Session Removed");
    res.redirect("/login");
  });
};

exports.postSignup = [
  check("firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First Name SHould be Atleast 2 Charactors")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Do not enter any Special carators"),

  check("lastName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First Name SHould be Atleast 2 Charactors")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Do not enter any Special carators"),

  check("email")
    .isEmail()
    .withMessage("Enter Your Valid Email")
    .normalizeEmail(),

  (req, res, next) => {
    console.log(req.body);
    res.redirect("/login");
  },
];
