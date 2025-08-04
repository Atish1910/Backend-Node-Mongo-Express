
const crypto = require("crypto");

// Define a function to hash and salt a password
function hashAndSaltPassword(password) {
  // 1. Generate a random salt
  const salt = crypto.randomBytes(16).toString("hex");

  // 2. Create a hash object using SHA-256
  const hash = crypto.createHash("sha256");

  // 3. Update the hash object with the salt and password
  hash.update(salt + password);

  // 4. Get the hashed data in a hexadecimal string
  const hexHash = hash.digest("hex");

  // 5. Return the salt and hashed password as a string
  return salt + "." + hexHash;

  // Output:8b18c67adab66e2d597ea0c036faa02b.3fdaf32ff5f8....
}

// Example usage
const password = "mySecurePassword";
const hashedAndSaltedPassword = hashAndSaltPassword(password);
console.log(hashedAndSaltedPassword);
