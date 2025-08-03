

const express = require("express");
const app = express();

function middleware1(req, res, next) {
  console.log("Middleware 1");
  next();
}
function middleware2(req, res, next) {
  console.log("Middleware 2");
  next();
}

// Route chaining example
app.get("/route", middleware1, middleware2, (req, res) => {
  console.log("Route handler");
  res.send("Route chaining example");
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
// Output: Middleware 1  Middleware 2  Route handler

