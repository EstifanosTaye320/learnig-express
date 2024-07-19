// For inspecting complex objects and data structures in a more readable format, including nested objects.

const myObject = {
  name: "Alice",
  age: 30,
  address: { city: "New York", country: "USA" },
};

console.dir(myObject, { depth: null });

// Output:
// {
//   name: 'Alice',
//   age: 30,
//   address: {
//     city: 'New York',
//     country: 'USA'
//   }
// }
