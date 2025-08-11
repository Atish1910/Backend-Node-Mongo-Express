// const os = require("os");
// console.log("Type : ", os.type());
// console.log("UserInfo : ", os.userInfo());
// console.log("Total Memoray : ", os.totalmem());
// console.log("Free Men : ", os.freemem());


const express = require("express");

const app = express();

const PORT = 4200;

app.listen(PORT, () => {
    console.log("server is Running at http://localhost",PORT);
})