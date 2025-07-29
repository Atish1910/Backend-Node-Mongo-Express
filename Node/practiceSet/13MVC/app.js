const express = require("express");


const app = express();
const PORT = 4209;


app.use("/", (req, res, next) => {
    // console.log(req.url, req.method, req.headers);
    
})

app.listen(PORT, () => {
    console.log("your server is running at 4209 Port...");
})
