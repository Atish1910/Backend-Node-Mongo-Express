exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false
  });
};

exports.postLogin = (req, res, next) => {
  console.log(req.body);
  req.isLoggedIn = true;
  // res.cookie("isLoggedIn", true);
  req.session.isLoggedIn = true;
  req.isLoggedIn = true;
  res.redirect("/");
}

exports.postLogout = (req, res, next) => {
  // res.cookie("isLoggedIn", false);
  req.session.destroy(() => {
    console.log("Session Removed")
    res.redirect("/login");
  })
}