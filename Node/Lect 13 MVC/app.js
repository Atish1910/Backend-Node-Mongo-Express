const path = require("path");

const express = require("express");

const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const pathUtil = require("./utils/pathUtil");
const { error404 } = require("./controllers/errors");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);

app.use(express.static(path.join(pathUtil, "./public")));

app.use(error404);

const PORT = 4209;
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
