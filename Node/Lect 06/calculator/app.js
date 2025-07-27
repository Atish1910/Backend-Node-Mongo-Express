const http = require("http");
const fs = require("fs");
const {url} = require("inspector");
const requestHandeller = require("./handeller");



const server = http.createServer(requestHandeller);

const PORT = 4209;

server.listen(PORT, () => {
    console.log(`Port is running at http://localhost:${PORT}`);
})