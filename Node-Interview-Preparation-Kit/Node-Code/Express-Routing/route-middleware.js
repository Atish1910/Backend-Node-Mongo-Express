const express = require('express');
const app = express();

// Route-level middleware for authentication
const authenticate = (req, res, next) => {
    if (req.headers.authorization === 'Bearer myToken') {
        next(); // Proceed to the next middleware 
    } else {
        res.status(401).send('Unauthorized');
    }
};

// Apply route-level middleware to specific route
app.get('/api/protected', authenticate, (req, res) => {
    res.send('This is a protected route');
});

// Apply route middleware to specific route
router.get('/protected', authenticate, (req, res) => {
    res.send('This is a protected route');
});

// Mount the router
app.use('/api', router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on:${PORT}`);
});


