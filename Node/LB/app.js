const http = require("http");

const requestListener = (req, res) => {
  console.log("i am listening");
  res.end("Jay Ganesh");
};

const server = http.createServer(requestListener);

const PORT = 4209;

server.listen(PORT, () => {
  console.log("server is running");
});
