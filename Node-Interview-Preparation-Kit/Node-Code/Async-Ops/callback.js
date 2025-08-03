const fs = require("fs");

// Asynchronous file reading function
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

console.log("Reading file...");
// Due to asynchronous behavior,
// "Reading file" will be printed first
// Output:
// Reading file...
// File content: Interview Happy

