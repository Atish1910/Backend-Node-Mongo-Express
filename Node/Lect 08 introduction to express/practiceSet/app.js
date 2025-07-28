const express = require("express");

const PORT = 4209;

const app = express();

app.use("/", (req, res, next) => {
    console.log(`i am first dummy middleware`, req.url, req.method);
    next();
});


app.use("/", (req, res, next) => {
    console.log(`i am second dummy middleware`, req.url, req.method);
    next();
});

app.get("/", (req, res, next) => {
    console.log(`i am 3rd dummy middleware`, req.url, req.method);
    res.send("<h1>i am 3rd middleware</h1>");
    next();
});


app.get("/contact-us", (req, res, next) => {
    console.log(`i am Contact us middleware`, req.url, req.method);
    res.send(`
    <form action="/contact-us" method="POST">
        <input type="text" placeholder="enter yoyur first name" name="name">
        <input type="email" placeholder="enter yoyur email" name="email">
        <button class="btn " type="submit">submit</button>
    </form>
    `)
});
 
app.post("/contact-us", (req, res, next) => {
    console.log("handelling contect us POST method");
    res.send("<h1> we ll contact you shortly</h1>");
})


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})