const express = require("express");
const path = require("path");
const pathUtils = require("./utils/pathUtils");
const storeRouter = require("./routes/storeRouter");
const exp = require("constants");
const hostRouter = require("./routes/hostRouter");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(pathUtils, "./views/404.html"));
});

const PORT = 4200;
app.listen(PORT, () => {
  console.log(`Your server is running at ${PORT}`);
});
