
// web-socket-client.js

// Import the 'ws' library for WebSocket support
const WebSocket = require("ws");

// Create a WebSocket client
const socket = new WebSocket("ws://localhost:3000");

// Event handler for the connection open event
socket.on("open", () => {
  console.log("Connected to the server");
  // Send a message to the server
  socket.send("Hello from the client!");
});

// Event handler for messages received from the server
socket.on("message", (message) => {
  console.log(`Received message: ${message}`);
});

// Event handler for the connection close event
socket.on("close", () => {
  console.log("Connection closed");
});
// run cmd in another terminal: node web-socket-client.js

