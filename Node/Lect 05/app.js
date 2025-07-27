const http = require('http');
const { URLSearchParams } = require('url');
const userHandellerRequest = require('./user');

const server = http.createServer(userHandellerRequest)

const PORT = 4209;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});