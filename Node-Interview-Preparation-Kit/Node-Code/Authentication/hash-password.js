

const bcrypt = require('bcrypt');

const plainPassword = 'user123'; // Example plain text password

// Generate a salt and hash the password
bcrypt.hash(plainPassword, 10, (err, hash) => {
  // Store the hashed password in the database
  console.log('Hashed password:', hash); 
  // Output: Hashed password: $2b$10$zZK9Kq3ZZ9Zd8E4w83jLk.
        // 7SipLzFeuQQNbWlQ6Lz4QDYB6I8bV7O
});

// Verify a password
const hashedPassword = 
'$2b$10$zZK9Kq3ZZ9Zd8E4w83jLk.7SipLzFeuQQNbWlQ6Lz4QDYB6I8bV7O'; 
bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
  if (result) {
    console.log('Password is correct'); // Output: Password is correct
  } else {
    console.log('Password is incorrect');
  }
});

