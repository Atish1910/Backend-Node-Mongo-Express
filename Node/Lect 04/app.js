const http = require("http");

const requestListener = (req, res) => {
  // console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My 1st Node Server </title></head>");
    res.write("<body><h1>You are currently inside App</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>About us Title</title></head>");
    res.write("<body><h1>You are in about us Page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My 1st Node Server </title></head>");
  res.write("<body><h1>You are currently inside App</h1></body>");
  res.write("</html>");
  return res.end();
};

const server = http.createServer(requestListener);
const PORT = 4209;

server.listen(PORT, (err) => {
  if (err) {
    console.log("Error To create server");
  } else {
    console.log(`server is connected & running at ${PORT}`);
  }
});
