// This is a complex example with multiple functions, nested objects, and a timer to showcase Node.js debugger features.

const fs = require("fs");
const readline = require("readline");

// Function to read a file and return its content as a string
function readFileContent(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
}

// Function to parse a JSON string and return an object
function parseJSON(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    return data;
  } catch (err) {
    console.error("Error parsing JSON:", err);
    return null;
  }
}

// Function to analyze the data from the JSON file
function analyzeData(data) {
  if (!data) {
    console.error("Invalid data");
    return;
  }

  let total = 0;
  for (const item of data.items) {
    total += item.value;
  }

  console.log("Total value:", total);
}

// Main function that orchestrates the process
function main() {
  // Read the file content
  const filePath = "data.json";
  const fileContent = readFileContent(filePath);

  // Parse the JSON data
  const jsonData = parseJSON(fileContent);

  // Analyze the data
  analyzeData(jsonData);
}

// Set up a timer to execute the main function after 2 seconds
setTimeout(main, 2000);

// --- Debugging with 'debugger;' ---

// Example of using the 'debugger;' keyword in the 'analyzeData' function
function analyzeData(data) {
  if (!data) {
    console.error("Invalid data");
    return;
  }

  debugger; // Insert a breakpoint here

  let total = 0;
  for (const item of data.items) {
    total += item.value;
  }

  console.log("Total value:", total);
}

// --- Debugging with 'node inspect' ---

// ... (Rest of the code remains the same)

// --- Debugging with Chrome DevTools ---

// 1. Launch Node.js application with `node inspect <your_script.js>`
// 2. Open Chrome and navigate to `chrome://inspect/#devices`
// 3. Click on the Node.js application URL (should be listed under 'Remote Targets')
// 4. This will open DevTools with the Node.js debugger.
// 5. Use the familiar DevTools interface to set breakpoints, step through code, inspect variables, etc.
