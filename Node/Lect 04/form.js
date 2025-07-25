const http = require("http");

const requestListener = (request, response) => {
  // console.log(request.method, request.url, request.headers);
  if (request.url === "/") {
    response.setHeader("Content-type", "text/html");
    response.write("<html>");
    response.write("<head><title>i am Default Comp</title></head>");
    response.write("<body>");
    response.write("<form action='/submit-details' method='POST '>");
    response.write(
      '<input type="text" name="username" placeholder="enter your username"></input>'
    );
    response.write("</br>");
    response.write("<label for='male'>Male</label>");
    response.write(
      '<input type="radio" id="male" name="gender" value="male"></input>'
    );
    response.write("<label for='female'>female</label>");
    response.write(
      '<input type="radio" id="female" name="gender" value="female"></input>'
    );
    response.write("</br>");
    response.write("<button type='submit'>submit</button>");
    response.write("<form/>");
    response.write("<body/>");
    response.write("</html>");
    return response.end();
  } else if (request.url === "/submit-details") {
    response.setHeader("Content-type", "text/html");
    response.write("<html>");
    response.write("<head><title>Title Submit Details </title></head>");
    response.write("<body><h1>Your form submitted successfully</h1></body>");
    response.write("</html>");
    return response.end();
  }
};

const server = http.createServer(requestListener);

const PORT = 4209;

server.listen(PORT, (err) => {
  if (err) console.log("Error to run server");
  else console.log(`server is running at ${PORT}`);
});
