// Core Module
const path = require("path");

// External Module
const express = require("express");

// use session
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const DB_PATH =
  "mongodb+srv://atishkamble398:1FBtvmgZikJqoVmU@cluster0airbnb.vbjywzz.mongodb.net/airbnb?";

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { default: mongoose } = require("mongoose");
const authRouter = require("./routes/authRouter");

const app = express();

const store = new MongoDBStore({
  uri: DB_PATH,
  collection: "sessions",
});
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded()); //
app.use(
  session({
    secret: "Knowlage ai with learing",
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);

app.use((req, res, next) => {
  // console.log(req.get('Cookie'));
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});

app.use(storeRouter);
app.use(authRouter);

app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    return next();
  } else {
    res.redirect("/login");
  }
});

app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.pageNotFound);

const PORT = 4200;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to Mongo");
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo: ", err);
  });
