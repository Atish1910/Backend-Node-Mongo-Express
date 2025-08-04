
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Handling different routes
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome");
  } else if (req.url === "/api/data") {
    // Handle API endpoint for fetching data from db
    const data = { message: "Hello from the server!" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});




const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
