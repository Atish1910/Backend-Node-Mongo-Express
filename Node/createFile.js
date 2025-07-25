const fs = require("fs"); // importing file system

// writefile is inbuilt function to create file in 1st string need to dedine name of file,
// 2nd string the content we want to put in our file
// function if not able to create file console statement
fs.writeFile("swap.html", "i am html adata", (err) => {
  if (err) {
    console.log("Error occured");
  } else {
    console.log("New File Created");
  }
});
