

const express = require("express");
const app = express();

// Middlewares

// Import Controllers
const ordersController = require("./controllers/ordersController");
const productsController = require("./controllers/productsController");
const paymentsController = require("./controllers/paymentsController");

// Routes
app.get("/orders/:orderId", ordersController.getOrderById);
app.get("/products", productsController.listProducts);
app.get("/payments", paymentsController.paymentInfo);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

