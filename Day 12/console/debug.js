// For logging debugging information that is only relevant during development or for specific scenarios.

const DEBUG = true;

if (DEBUG) {
  console.debug("Debugging information:", { myVar: "some value" });
}

// Output:
// (if DEBUG is true)
// Debugging information: { myVar: 'some value' }
