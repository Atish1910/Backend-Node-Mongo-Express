// Core Module
const path = require("path");

// External Module
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const { default: mongoose } = require("mongoose");
const multer = require("multer");


const DB_PATH ="mongodb+srv://atishkamble398:1FBtvmgZikJqoVmU@cluster0airbnb.vbjywzz.mongodb.net/airbnb?";

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const authRouter = require("./routes/authRouter");

const app = express();

const store = new MongoDBStore({
  uri: DB_PATH,
  collection: "sessions",
});

const randomString = (length) => {
  const char = 'asdfghjklqwertyuiopzxcvbnm';
  let result = "";
  for(let i = 0; i <length; i++){
    result = result + char.charAt(Math.floor(Math.random() * char.length))
  }
  return result;
}

const fileFilter = (req, file, cb) => {
  if(file.mimetype === "image/png" ||file.mimetype === "image/webp" ||file.mimetype === "image/jpg"){
    cb(null, true);
  }else{
    cb(null, false);
  }
}

const storage = multer.diskStorage({
  destination : (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename : (req, file, cb) => {
    cb(null, randomString(10) + '-' + file.originalname)
  }
})
const multerOptions = {
 storage,
 fileFilter
}

/////////
app.use(express.urlencoded()); 
app.use(multer(multerOptions).single('photo'));
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);
app.use(express.static(path.join(rootDir, "public")));
app.use("/uploads", express.static(path.join(rootDir, 'uploads')));
app.use("/host/uploads", express.static(path.join(rootDir, 'uploads')));
app.use("/homes/uploads", express.static(path.join(rootDir, 'uploads')));
/////////

app.set("view engine", "ejs");
app.set("views", "views");

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
