const sumRequestHandeller = (req, res) => {
    console.log("now i am Sum Handeller");
    const body = [];
    
    req.on("data", (chunk) => {
        body.push(chunk);
    });

    req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        const result = Number(bodyObj.digitOne) + Number(bodyObj.digitTwo);
        
        console.log(result); 
        
        res.setHeader("Content-Type", "text/html");
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>i am Result Page</title>
        </head>
        <body>
            <h1>I am On Result Page</h1>
            <h1>${result}</h1>
        </body>
        </html>
        `);
        return res.end();
    });
}

module.exports = sumRequestHandeller;
