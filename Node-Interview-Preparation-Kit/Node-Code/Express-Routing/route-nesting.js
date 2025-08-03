const express = require('express');
const app = express();

// Import express and app.listen at the end

// Create a router for user related routes
const userRouter = express.Router();

// Middleware for user routes
userRouter.use((req, res, next) => {
    console.log('User route middleware');
    next();
});

// Define routes for the user router
userRouter.get('/', (req, res) => {
    res.send('User dashboard');
});
userRouter.get('/profile', (req, res) => {
    res.send('User profile');
});

// Mount the userRouter at '/users' 
app.use('/users', userRouter);

// Output: User route middleware

app.listen(3000, () => {
    console.log(`Server is running`);
});


