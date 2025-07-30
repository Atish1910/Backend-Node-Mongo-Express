const path = require("path");

const express = require("express");

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const pathUtil = require("./utils/pathUtil");

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(pathUtil, "./public")));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(pathUtil, "./views/404.html"));
});

const PORT = 4210;
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
