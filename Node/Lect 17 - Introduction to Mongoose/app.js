// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const pathUtil = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { default: mongoose } = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(pathUtil, 'public')))

app.use(errorsController.pageNotFound);

const PORT = 4209;
const DB_PATH = "mongodb+srv://atishkamble398:1FBtvmgZikJqoVmU@cluster0airbnb.vbjywzz.mongodb.net/airbnb?"

mongoose.connect(DB_PATH).then(() => {
  console.log("MongoDB Connected");
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log("Error to Connect Mongo", error);
}); 

