// used for authentication and authorization
const jwt = require("jsonwebtoken");

// Generate a JWT
const token = jwt.sign({ userId: 123 }, "your-secret-key");

// Verify a JWT
jwt.verify(token, "your-secret-key", (err, decoded) => {
  if (err) {
    // Handle errors
    console.log("Bad things have happened");
  } else {
    // Access the decoded data
    console.log(decoded.userId);
  }
});

console.log(token);
