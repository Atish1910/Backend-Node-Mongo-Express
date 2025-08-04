app.put("/users/:id", (req, res) => {
    const userId = req.params.id;
    // Replace the entire user resource with the new data
    res.send(`PUT request to /users/${userId}`);
  });
  
  
  // PUT request body
  {
      "id": 1,
      "name": "John Doe Updated",
      "email": "john@example.com",
      "age": 26
    }
    