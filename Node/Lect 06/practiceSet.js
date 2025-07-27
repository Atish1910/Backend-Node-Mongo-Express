const fs = require("fs");

console.log("1: Start Script");

// sync code Blocking code
console.log("2: Sync Code Running");
const datSync = fs.readFileSync("user-details.txt", "utf-8");
console.log("3: reading file");



// Asnyc code NON Blocking code
const data = fs.readFile("user-details01.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("4: reading file by non blocking");
});


console.log("1: end Script"); 