

const fs = require("fs");

const file = fs.createReadStream("nonexistent.txt");

file.on("error", (error) => {
  console.error("Error reading file:", error.message);
});


