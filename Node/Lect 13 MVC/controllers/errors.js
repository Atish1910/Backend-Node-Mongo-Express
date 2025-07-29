const error404 = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page is Not Found",
  });
};

exports.error404 = error404;
