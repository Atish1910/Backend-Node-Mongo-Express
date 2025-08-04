
const express = require("express");
const app = express();

const myMiddleware1 = (req, res, next) => {
  console.log("Interview");
  next(); // Call the next middleware function
};
const myMiddleware2 = (req, res, next) => {
  console.log("Happy");
  next();
};

app.use(myMiddleware1);

app.use(myMiddleware2); //only execute if above have next method

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
// Output: Interview Happy

