// -------------------------------------------------------
// Node.js Server with a Database Connection (MongoDB)
// -------------------------------------------------------

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Configuration
const MONGO_URI = "mongodb://localhost:27017/myDatabase"; // Replace with your MongoDB URI
const PORT = 3000;

// Define a Mongoose schema for a 'Product' model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

const Product = mongoose.model("Product", productSchema);

// Create an Express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Define a route for getting all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Breakpoint 1
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching products");
  }
});

// Define a route for creating a new product
app.post("/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body); // Breakpoint 2
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating product");
  }
});

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// --- Debugging with VS Code Debugger ---

// 1. Launch VS Code and open the project folder.
// 2. Open the 'Run and Debug' view (Ctrl+Shift+D).
// 3. Click the 'Create a launch.json file' button.
// 4. Select the Node.js debugging configuration.
// 5. In the 'launch.json' file, set the 'program' to your script file (e.g., "server.js").
// 6. Set breakpoints in your code:
//    * Click in the gutter next to the line numbers for lines you want to break on.
//    * Use the breakpoint controls in the debug view (Add conditional breakpoints, function breakpoints, etc.).
// 7. Start debugging (F5).
// 8. Explore the debugger controls:
//    * Step Over (F10): Execute the current line and move to the next line.
//    * Step Into (F11): Step into the next function call.
//    * Step Out (Shift+F11):  Step out of the current function and return to the calling function.
//    * Continue (F5): Resume execution until the next breakpoint is hit.
// 9. Inspect variables:
//    * Hover over variables in the editor to see their values.
//    * Use the 'Variables' panel to explore local and global variables.
//    * Add expressions to the 'Watch' panel to monitor specific values.
// 10. Analyze the call stack: Use the 'Call Stack' panel to view the function call history.
// 11. Use the debug console to evaluate expressions and interact with your application.

// Example Breakpoints:
//  * Breakpoint 1 (in the '/products' route): Examine the 'products' variable after fetching data from the database.
//  * Breakpoint 2 (in the '/products' route): Inspect the 'newProduct' object before saving it to the database.
