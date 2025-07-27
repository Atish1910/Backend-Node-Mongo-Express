
const { error } = require('console');
const fs = require('fs');

const userHandellerRequest = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html lang="en">
        <head>
            <title>i am form Comp</title>
        </head>
        <body>
            <form action="/submit-details" method="POST">
                <input type="text" placeholder="enter email" name="username" id="username" value="username"> 
                <br>
                <label for="male">male</label>
                <input type="radio" name="gender" id="male" value="male"> 
                <br>
                <label for="female">female</label>
                <input type="radio" id="female" name="gender" value="female" />
                <br>
                <input type="submit" value="Submit">
            </form>
        </body>
        </html>
      `);
    return res.end();

  } else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST") {

    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const pararms = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(pararms);
      console.log(bodyObject);
      fs.writeFile("user.txt", JSON.stringify(bodyObject), err => {
        console.log("Your file is created successfully")
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      } );
    })

  }
  else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Like / Share / Subscribe</h1></body>');
    res.write('</html>');
    res.end();
  }
};


module.exports = userHandellerRequest;