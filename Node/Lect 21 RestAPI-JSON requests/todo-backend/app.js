// Core Module
const path = require('path');
const bodyParser = require("body-parser");

// External Module
const express = require('express');
const cors = require("cors")
const { default: mongoose } = require('mongoose');
const DB_PATH ="mongodb+srv://atishkamble398:1FBtvmgZikJqoVmU@cluster0airbnb.vbjywzz.mongodb.net/todo?";

//Local Module
const todoItemsRouter = require("./routes/todoItemsRouter")
const errorsController = require("./controllers/errors");

const app = express();


app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/todo", todoItemsRouter);

app.use(errorsController.pageNotFound);

const PORT = 3001;

mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to Mongo');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to Mongo: ', err);
});
