const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false,
    errors : [],
    oldInput : {email : ""},
        user: {},
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "SignUp",
    currentPage: "Signup",
    isLoggedIn: false,
    errors : [],
    oldInput : {firstName : "", lastName : "", email : "", userType : ""},
    user : {}
  });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).render("auth/login", {
      pageTitle: "Login",
      currentPage: "login",
      isLoggedIn: false,
      errors: [{ msg: "User Does Not Exist" }],
      oldInput: { email, password },
    user : {}
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch){
    return res.status(422).render("auth/login", {
      pageTitle: "Login",
      currentPage: "login",
      isLoggedIn: false,
      errors: [{ msg: "Invalid Password" }],
      oldInput: { email, password },
    user : {}
    });

  }

  // Assuming password validation is skipped for now
  req.session.isLoggedIn = true;
  req.session.user = user;
  await req.session.save();
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

  check("password")
  .isLength({min : 4})
  .withMessage("Passwords must be at least 4 Char")
  .matches(/[a-z]/)
  .withMessage("password must me contain at least one lowercase letter")
  .matches(/[A-Z]/)
  .withMessage("password must me contain at least one Uppercase letter"),

  check("confirmPassword")
  .trim()
  .custom((value, {req}) => {
    if(value != req.body.password){
      throw new Error("Password Did Not Match");
    }
    return true
  }),

  check("userType")
  .notEmpty()
  .withMessage("User Type is required"),

  check("terms")
  .notEmpty()
  .withMessage("You must accept terms & Condition")

  ,(req, res, next) => { 



    const { firstName, lastName, email, password, userType} = req.body;
    const errors = validationResult(req);

    if(!errors.isEmpty()){
      return res.status(422)
      .render("auth/signup", {
        pageTitle : "signup",
        currentPage : "signup",
        isLoggedIn : false,
        errors : errors.array().map(err => err.msg),
        oldInput : {firstName, lastName, email, password, userType},
        user: {},
      })
    }

    bcrypt.hash(password, 12)
    .then(hashedPassword => {
      const user = new User({firstName, lastName, email, 
        password : hashedPassword, userType
      });
      return user.save();
    })
    .then(() => {
      res.redirect("/login");
    }).catch((err) => {
      return res.status(422)
      .render("auth/signup", {
        pageTitle : "signup",
        currentPage : "signup",
        isLoggedIn : false,
        errors : [err.message],
        oldInput : {firstName, lastName, email, password, userType},
        user: {},
      })
    })
  },
];
