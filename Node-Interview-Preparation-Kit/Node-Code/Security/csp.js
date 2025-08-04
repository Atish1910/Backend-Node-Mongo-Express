const express = require("express");
const helmet = require("helmet");

const app = express();

// Middleware to set Content Security Policy (CSP) headers
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // Default source
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        "cdn.example.com",
      ], // Allowed script sources
      styleSrc: ["'self'", "cdn.example.com"], // Allowed style sources
      imgSrc: ["'self'", "data:"], // Allowed image sources
      fontSrc: ["'self'", "cdn.example.com"], // Allowed font sources
      objectSrc: ["'none'"], // Disallowed object sources
      mediaSrc: ["'none'"], // Disallowed media sources
      frameSrc: ["'none'"], // Disallowed frame sources
      workerSrc: ["'self'"], // Allowed worker sources
      frameAncestors: ["'none'"], // Disallowed frame ancestors
      formAction: ["'self'"], // Allowed form action URLs
      upgradeInsecureRequests: [], // Upgrade insecure requests to HTTPS
    },
  })
);

// Route that sends HTML content
app.get("/", (req, res) => {
  res.send(
    '<html><head><title>Content Security Policy Example</title></head><body><h1>Hello, World!</h1><script>alert("This script will be blocked by CSP");</script></body></html>'
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
