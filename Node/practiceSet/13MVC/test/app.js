const express = require("express");
const path = require("path");
const { pathUtils } = require("./utils/pathUtils");
const userRoute = require("./routes/userRoute");
const hostRoute = require("./routes/hostRoute");

const app = express();
const PORT = 4209;

app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", "views");

app.use(userRoute);
app.use(hostRoute);

app.use((req, res, next) => {
  res.status(404).render(path.join(pathUtils, "/views/404"));
  // res.status(404).sendFile(path.join(pathUtils, "./views/404.html"));
});

app.listen(PORT, () => {
  console.log(`Running at ${PORT}`);
});
