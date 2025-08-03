// createServer.js
// 1. Import the 'http' module to create an HTTP server
const http = require("http");

// 2. Create an HTTP server using the 'createServer' method
const server = http.createServer((req, res) => {
  // Handle incoming HTTP requests here
  res.end("Hello, World!");
});

// 3. Set port on which server will listen incoming requests
const port = 3000;

// 4. Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// 5. Run command in terminal: node createServer.js
