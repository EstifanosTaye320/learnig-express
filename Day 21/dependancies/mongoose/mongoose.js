const mongoose = require("mongoose");

// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create a model
const User = mongoose.model("User", userSchema);
console.log(User);
