
const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({ host: "localhost",
  user: "root",  password: "password",  database: "mydatabase",
});

// User input
const userId = req.query.userId;

// Prepare a SQL statement with a placeholder for the userId
const sql = "SELECT * FROM users WHERE id = ?";

// Execute the query with the userId as a parameter
connection.query(sql, [userId], (error, results) => {
  if (error) {
    throw error;
  }
  console.log(results);
});

// Close the connection after use
connection.end();

