// avoid storing plain text passwords in your database
const bcrypt = require("bcrypt");

// Hashing a password
bcrypt.hash("myPassword", 10).then((hash) => {
  console.log(hash); // Output: $2b$10$... (a unique hash)
});
