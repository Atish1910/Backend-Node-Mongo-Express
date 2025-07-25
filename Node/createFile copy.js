const fs = require("fs");
fs.writeFile("output.txt", "i am text inside file", (err) => {
  if (err) {
    console.log("Error occured");
  } else {
    console.log("New File Created");
  }
});
