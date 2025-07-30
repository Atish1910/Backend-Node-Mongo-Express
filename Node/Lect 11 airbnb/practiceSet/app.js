const express = require("express");
const path = require("path");
const pathUtils = require("./utils/pathUtils");
const homeRouter = require("./Routes/homeRouter");
const contactRouter = require("./Routes/contactRouter");

const app = express();

app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactRouter);

app.use(express.static(path.join(pathUtils, "public")));

app.use((req, res, next) => {
  console.log(req.url, req.method);
  res.status(404).sendFile(path.join(pathUtils, "/views/404.html"));
});

const PORT = 4210;

app.listen(PORT, () => {
  console.log(`your server is running at http://localhost:${PORT}`);
});
