// Install websocket by this command: npm install ws

// web-socket-server.js
// Import the 'ws' library for WebSocket support
const WebSocket = require("ws");
// Create a WebSocket server on port 3000
const server = new WebSocket.Server({ port: 3000 });

// Event handler for new connections
server.on("connection", (socket) => {
  console.log("Client connected");

  // Event handler for messages received from the client
  socket.on("message", (message) => {
    console.log(`Received message: ${message}`);
    // Send a response back to the client
    socket.send("Hello from the server!");
  });

  // Event handler for the connection close event
  socket.on("close", () => {
    console.log("Client disconnected");
  });
});
// run cmd in terminal: node web-socket-server.js


