

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 1. Application-level middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 2. Router-level middleware for authentication
const router = express.Router();
router.use((req, res, next) => {
  if (req.headers.authorization === "Bearer myToken") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});

// 3. Built-in middleware for serving static files
app.use(express.static("public"));

// 4. Third-party middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Route handlers
router.get("/protected", (req, res) => {
  res.send("This is a protected route");
});
app.post("/api/data", (req, res) => {
  console.log(req.body); // Access parsed JSON data
  res.send("Data received");
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 5. Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Mount the router
app.use("/api", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on :${PORT}`);
});
