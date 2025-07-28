//const http = require("http"); // core module
const express = require("express"); // external module
const requestHandeller = require("./user"); // local module

const app = express();

// adding middle ware;
app.use("/",(req, res, next) => {
    console.log("came in first middleware", req.url, req.method );
    res.send("<h1>Welcome to my express application</h1>");
    next();
});


app.use("/submit-details", (req, res, next) => {
    console.log("came in 2nd middleware", req.url, req.method );
    res.send("<h1>we are inside Submit details</h1>");
});

// const server = http.createServer(requestHandeller);
// const server = http.createServer(app);

const PORT = 4209;

app.listen(PORT, () => {
    console.log(`Port is running at http://localhost:${PORT}`);
})