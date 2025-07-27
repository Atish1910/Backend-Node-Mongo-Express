const http = require("http");

function requestListener(req, res){
    console.log(req.url, req.method, req.headers);
    if(req.url === "/men"){
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Men Comp</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>i am Men Comp</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end()
    }

    else if(req.url === "/women"){
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head>');
    res.write('<title>women Comp</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>i am women Comp</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end()
    }

    else if(req.url === "/kids"){
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head>');
    res.write('<title>kids comp</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>i am kids Comp</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end()
    }

    else if(req.url === "/carts"){
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head>');
    res.write('<title>carts comp title</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>i am carts Comp</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end()
    }
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head>');
    res.write('<title>carts index title</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>i am index Comp</h1>');
    res.write('<a href="men">Men</a> </br>');
    res.write('<a href="women">women</a> </br>');
    res.write('<a href="kids">kids</a> </br>');
    res.write('<a href="carts">carts</a> </br>');
    res.write('</body>');
    res.write('</html>');
    return res.end()
} 
const server = http.createServer(requestListener);

const PORT = 4209;

server.listen(PORT, () => {
    console.log(`your Port is running at ${PORT}`);
})