const sumRequestHandeller = require("./sum");

const requestHandeller = (req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === "/") {

        res.setHeader("Content-Type", "text/html");
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>i am Index</title>
        </head>
        <body>
            <h1>Welcome to index</h1>
            <a href="calculator">calculator</a>
        </body>
        </html>
        `);
        return res.end();  

    } else if(req.url === "/calculator") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html lang="en">
            <head>
                <title>i am form Calculator</title>
            </head>
            <body>
                <form action="/calculator-details" method="POST">
                    <input type="number" placeholder="enter first Digits" name="digitOne" id="digitOne" value=""> <br>
                    <input type="number" placeholder="enter second Digits" name="digitTwo" id="digitTwo" value=""> <br>
                    <input type="submit" value="sum">
            </body>
            </html>`);
        return res.end();      
    } else if(req.url === "/calculator-details") {
        return sumRequestHandeller(req, res);  
    }

        res.setHeader("Content-Type", "text/html");
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>i am 404</title>
        </head>
        <body>
            <h1>Page Does Not Exits</h1>
            <a href="calculator">calculator</a>
        </body>
        </html>
        `);
        return res.end();  

}
module.exports = requestHandeller;