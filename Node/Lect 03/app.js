const http = require("http"); // we are importing HTTP request from node

// we are creating a callback function which will be embedd in creating server
function requestListener(req, res) {
  console.log(req);
  process.exit();
}

// from here we acre creating our new server & add function into it
const server = http.createServer(requestListener);

// need to dicler port
const PORT = 3000;

// after creating server need someone who will lister request
server.listen(PORT, () => {
  console.log(`server Running on addess of http://localhost:${PORT}`);
});
