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
  res.cookie("isLoggedIn", true);
  req.isLoggedIn = true;
  res.redirect("/");
}
