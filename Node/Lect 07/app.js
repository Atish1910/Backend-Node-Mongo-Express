const http = require("http");
const fs = require("fs");



const server = http.createServer();

const PORT = 4209;

server.listen(PORT, () => {
    console.log(`Port is running at http://localhost:${PORT}`);
})