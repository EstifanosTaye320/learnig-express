// For logging errors and exceptions. Helps identify and track issues.

try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.error("An error occurred:", error);
}

// Output:
// An error occurred: Error: Something went wrong!
