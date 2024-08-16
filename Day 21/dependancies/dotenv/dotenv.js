const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

console.log(process.env.API_KEY); // Accessing the API key from .env
